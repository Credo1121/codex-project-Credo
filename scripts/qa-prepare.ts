import { existsSync,writeFileSync,mkdirSync } from 'node:fs';
import { randomBytes } from 'node:crypto';
import { spawnSync } from 'node:child_process';
// Generates only a dedicated synthetic QA environment, never a user's .env.local.
if(existsSync('.env.qa.local')||existsSync('.data/qa.sqlite')){console.error('QA-Umgebung vorhanden. Nicht überschrieben; vorhandene Tests können erneut ausgeführt werden.');process.exit(1)}
mkdirSync('.data',{recursive:true,mode:0o700});
const secret=randomBytes(48).toString('base64url');const password=randomBytes(24).toString('base64url');
const values={BETTER_AUTH_SECRET:secret,BETTER_AUTH_URL:'http://localhost:3000',DATABASE_PATH:'.data/qa.sqlite',ADMIN_EMAIL:'qa@example.invalid',QA_EMAIL:'qa@example.invalid',QA_PASSWORD:password};
writeFileSync('.env.qa.local',Object.entries(values).map(([k,v])=>k+'='+v).join('\n')+'\n',{mode:0o600});
const result=spawnSync('node',['--import','tsx','scripts/admin.ts','init'],{env:{...process.env,...values,ADMIN_INITIAL_PASSWORD:password},stdio:'pipe'});
if(result.status!==0){console.error('QA-Initialisierung fehlgeschlagen. Keine vorhandene Nutzerumgebung überschrieben.');process.exit(1)}
console.log('Isolierte synthetische QA-Umgebung angelegt. Zugangsdaten ausschließlich in ignorierten serverseitigen Umgebungsvariablen.');
