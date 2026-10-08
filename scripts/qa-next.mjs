import { spawn } from 'node:child_process';
process.loadEnvFile('.env.qa.local');
const mode=process.argv[2];
if(!['build','start'].includes(mode))throw new Error('Modus build oder start erforderlich.');
const child=spawn(process.execPath,['node_modules/next/dist/bin/next',mode,...(mode==='start'?['--hostname','127.0.0.1']:[])],{env:process.env,stdio:'inherit'});
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>child.kill(signal));
child.on('exit',code=>{process.exitCode=code??1});
