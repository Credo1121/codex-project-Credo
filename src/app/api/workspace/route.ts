import 'server-only';
import { adminSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { createSchema,projectSchema } from '@/lib/schema';
import { createProject } from '@/lib/methodology';
export const runtime='nodejs';
export const dynamic='force-dynamic';
const fail=(error:string,code:string,status:number)=>Response.json({error,code},{status});
export async function GET(req:Request){if(!await adminSession(req.headers))return fail('Bitte erneut anmelden.','AUTH',401);const rows=db.prepare('SELECT data,revision FROM projects ORDER BY rowid DESC LIMIT 100').all() as {data:string;revision:number}[];return Response.json({projects:rows.map(r=>({...JSON.parse(r.data),revision:r.revision}))},{headers:{'Cache-Control':'no-store'}})}
async function mutate(req:Request){
 if(!await adminSession(req.headers))return fail('Bitte erneut anmelden.','AUTH',401);
 if(req.headers.get('origin')!==new URL(process.env.BETTER_AUTH_URL!).origin)return fail('Anfrage nicht zulässig.','ORIGIN',403);
 if(!req.headers.get('content-type')?.includes('application/json'))return fail('JSON-Anfrage erforderlich.','VALIDATION',400);
 const raw=await req.text();if(raw.length>128*1024)return fail('Zu viele Inhalte.','LIMIT',413);
 let input;try{input=JSON.parse(raw)}catch{return fail('Ungültige JSON-Anfrage.','VALIDATION',400)}
 try{
 if(req.method==='POST'){
 const parsed=createSchema.safeParse(input);if(!parsed.success)return fail('Titel, Ziel, Scope und gültiges Startdatum prüfen.','VALIDATION',400);
 const project=db.transaction(()=>{const old=db.prepare('SELECT data,revision FROM projects WHERE request_id=?').get(parsed.data.requestId) as {data:string;revision:number}|undefined;if(old)return {...JSON.parse(old.data),revision:old.revision};
 if((db.prepare('SELECT count(*) AS n FROM projects').get() as {n:number}).n>=100)throw new Error('LIMIT');
 const p=createProject(parsed.data);db.prepare('INSERT INTO projects(id,request_id,data) VALUES(?,?,?)').run(p.id,parsed.data.requestId,JSON.stringify(p));return p;})();return Response.json({project});
 }
 const parsed=projectSchema.safeParse(input.project);if(!parsed.success)return fail('Eingaben prüfen: Texte, Termine oder Verknüpfungen sind ungültig.','VALIDATION',400);
 const p=parsed.data;const next={...p,revision:p.revision+1};
 const result=db.prepare('UPDATE projects SET data=?,revision=revision+1 WHERE id=? AND revision=?').run(JSON.stringify(next),p.id,p.revision);
 if(!result.changes)return db.prepare('SELECT id FROM projects WHERE id=?').get(p.id)?fail('Eine neuere Fassung existiert. Entwurf bleibt erhalten; bitte Änderungen abgleichen.','CONFLICT',409):fail('Projekt nicht gefunden.','NOT_FOUND',404);
 return Response.json({project:next});
 }catch{return fail('Speichern fehlgeschlagen. Bitte Eingaben prüfen und erneut versuchen.','INTERNAL',500)}
}
export {mutate as POST,mutate as PUT};
