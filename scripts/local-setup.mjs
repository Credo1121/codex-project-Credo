import { randomBytes } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
if(Number(process.versions.node.split('.')[0])!==24){console.error('Bitte Node.js 24 LTS installieren.');process.exit(1)}
const ignore=readFileSync('.gitignore','utf8');
if(!ignore.split(/\r?\n/).includes('.env*')||!ignore.split(/\r?\n/).includes('.data/')){console.error('Secret- und Datendateien müssen zuerst in .gitignore ausgeschlossen werden.');process.exit(1)}
if(existsSync('.env.local')){console.log('.env.local ist bereits vorhanden und wurde nicht verändert.');process.exit(0)}
const content=[
 '# ORG COCKPIT – private lokale Konfiguration. Niemals teilen oder committen.',
 `BETTER_AUTH_SECRET=${randomBytes(48).toString('base64url')}`,
 'BETTER_AUTH_URL=http://localhost:3000',
 'DATABASE_PATH=.data/workspace.sqlite',
 '# Eigene Login-E-Mail und eigenes Passwort (12–128 Zeichen) eintragen.',
 'ADMIN_EMAIL=',
 'ADMIN_INITIAL_PASSWORD=',
 ''
].join('\n');
writeFileSync('.env.local',content,{flag:'wx',mode:0o600});
console.log('.env.local mit zufälligem Serversecret erstellt. ADMIN_EMAIL und ADMIN_INITIAL_PASSWORD lokal eintragen, dann npm run admin:init ausführen.');
