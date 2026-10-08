import { auth } from '../src/lib/auth';
import { db } from '../src/lib/db';
import { getMigrations } from 'better-auth/db/migration';
import { hashPassword } from 'better-auth/crypto';
import { z } from 'zod';
async function main(){
 const mode=process.argv[2];if(!['init','reset'].includes(mode))throw new Error('Modus init oder reset erforderlich.');
 const email=z.email().parse(process.env.ADMIN_EMAIL);
 const password=z.string().min(12).max(128).parse(process.env.ADMIN_INITIAL_PASSWORD);
 if(!process.env.BETTER_AUTH_SECRET||process.env.BETTER_AUTH_SECRET.length<32)throw new Error('Serversecret mit mindestens 32 Zeichen erforderlich.');
 await (await getMigrations(auth.options)).runMigrations();
 const existing=db.prepare('SELECT user_id FROM app_admin WHERE singleton=1').get() as {user_id:string}|undefined;
 if(mode==='init'){
 if(existing||Number((db.prepare('SELECT count(*) AS n FROM user').get() as {n:number}).n)>0)throw new Error('Account bereits vorhanden; Initialisierung verweigert.');
 const result=await auth.api.signUpEmail({body:{email,password,name:'Admin'}});
 db.prepare('INSERT INTO app_admin(singleton,user_id) VALUES(1,?)').run(result.user.id);
 db.prepare('DELETE FROM session').run();
 }else{
 if(!existing)throw new Error('Kein Admin vorhanden.');
 const user=db.prepare('SELECT email FROM user WHERE id=?').get(existing.user_id) as {email:string};
 if(user.email!==email)throw new Error('Adminzuordnung stimmt nicht überein.');
 const hash=await hashPassword(password);
 db.transaction(()=>{db.prepare('UPDATE account SET password=? WHERE userId=? AND providerId=?').run(hash,existing.user_id,'credential');db.prepare('DELETE FROM session WHERE userId=?').run(existing.user_id)})();
 }
 console.log('Admin '+(mode==='init'?'angelegt':'Passwort zurückgesetzt')+'. ADMIN_INITIAL_PASSWORD jetzt aus der Umgebung entfernen.');
}
main().catch(()=>{console.error('Adminvorgang fehlgeschlagen. Eingaben, Modus und vorhandenen Account prüfen. Keine Daten überschrieben bei erneuter Initialisierung.');process.exitCode=1});
