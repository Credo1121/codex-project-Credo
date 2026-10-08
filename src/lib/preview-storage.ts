import { analysisAreas } from './analysis-method';
import { createProject, createSession } from './methodology';
import { createSchema, projectSchema, type Project } from './schema';
const key='org-cockpit-pages-preview-v1';
function load():Project[]{
 const saved=localStorage.getItem(key);
 if(saved!==null){const parsed=JSON.parse(saved);if(!Array.isArray(parsed))throw Error('Invalid preview data');return parsed.map(p=>projectSchema.parse(p))}
 const p=createProject({title:'Analyse Produkt & Markt',goal:'Entscheidungen und Zusammenarbeit nachvollziehbar verstehen.',scope:'Synthetisches Beispiel · Produkt- und Marktmanagement',start:'2026-10-19'});
 p.assessments=[1,2,3,4,5,6].map((index)=>({perspective:analysisAreas[index].name,applicable:true,modelVersion:'hands-on-v1' as const,knowledge:[2,3,2,1,2,1][index-1],performance:[3,3,2,2,3,2][index-1],evidence:'erste Aussage' as const,rationale:'Synthetisches Beispiel zur Bedienung; keine Aussage über ein reales Unternehmen.',reference:'SYN-DEMO-'+(index+1),updatedAt:'2026-10-08T12:00:00.000Z'}));
 p.phase=2;p.tasks[0].status='erledigt';p.sessions.push(createSession(p.tasks[1]));localStorage.setItem(key,JSON.stringify([p]));return[p];
}
export function resetPreview(){localStorage.removeItem(key)}
export async function previewRequest(_url:string,options?:RequestInit):Promise<Response>{
 try{
 const projects=load();
 if(!options?.method)return Response.json({projects});
 const body=JSON.parse(String(options.body));
 if(options.method==='POST'){
 const input=createSchema.safeParse(body);if(!input.success)return Response.json({error:'Titel, Ziel, Scope und Startdatum prüfen.'},{status:400});
 if(projects.length>=100)return Response.json({error:'Die Vorschau unterstützt bis zu 100 Projekte.'},{status:400});
 const project=createProject(input.data);localStorage.setItem(key,JSON.stringify([project,...projects]));return Response.json({project});
 }
 const input=projectSchema.safeParse(body.project);if(!input.success)return Response.json({error:'Eingaben prüfen: Texte, Termine oder Verknüpfungen sind ungültig.'},{status:400});
 const old=projects.find(p=>p.id===input.data.id);if(!old||old.revision!==input.data.revision)return Response.json({error:'Eine andere Vorschau-Fassung wurde gespeichert. Bitte neu laden.'},{status:409});
 const project={...input.data,revision:input.data.revision+1};localStorage.setItem(key,JSON.stringify(projects.map(p=>p.id===project.id?project:p)));return Response.json({project});
 }catch{return Response.json({error:'Browserdaten konnten nicht gelesen oder gespeichert werden. Speicherfreigabe prüfen oder Vorschau zurücksetzen.'},{status:500})}
}
