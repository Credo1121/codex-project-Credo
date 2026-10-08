import { randomBytes } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
if(Number(process.versions.node.split('.')[0])!==24){console.error('Bitte Node.js 24 LTS installieren.');process.exit(1)}
const codespaces=process.argv.includes('--codespaces');
let baseURL='http://localhost:3000';
if(codespaces){
 const name=process.env.CODESPACE_NAME;const domain=process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN;
 if(!name||!domain||!/^[-a-z0-9]+$/.test(name)||domain!=='app.github.dev'){console.error('Codespaces-Umgebung nicht erkannt. Einrichtung im GitHub-Codespace ausführen.');process.exit(1)}
 baseURL=`https://${name}-3000.${domain}`;
}
const ignore=readFileSync('.gitignore','utf8');
if(!ignore.split(/\r?\n/).includes('.env*')||!ignore.split(/\r?\n/).includes('.data/')){console.error('Secret- und Datendateien müssen zuerst in .gitignore ausgeschlossen werden.');process.exit(1)}
if(existsSync('.env.local')){if(codespaces&&!readFileSync('.env.local','utf8').split(/\r?\n/).includes('BETTER_AUTH_URL='+baseURL)){console.error('Bestehende BETTER_AUTH_URL passt nicht zu diesem Codespace. URL in .env.local auf die private HTTPS-Adresse von Port 3000 setzen; übrige Werte erhalten.');process.exit(1)}console.log('.env.local ist bereits vorhanden und wurde nicht verändert.');process.exit(0)}
const content=[
 '# ORG COCKPIT – private lokale Konfiguration. Niemals teilen oder committen.',
 `BETTER_AUTH_SECRET=${randomBytes(48).toString('base64url')}`,
 `BETTER_AUTH_URL=${baseURL}`,
 'DATABASE_PATH=.data/workspace.sqlite',
 '# Eigene Login-E-Mail und eigenes Passwort (12–128 Zeichen) eintragen.',
 'ADMIN_EMAIL=',
 'ADMIN_INITIAL_PASSWORD=',
 ''
].join('\n');
writeFileSync('.env.local',content,{flag:'wx',mode:0o600});
console.log('.env.local mit zufälligem Serversecret erstellt. ADMIN_EMAIL und ADMIN_INITIAL_PASSWORD lokal eintragen, dann npm run admin:init ausführen.');
