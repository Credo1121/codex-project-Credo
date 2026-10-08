import { chromium } from '@playwright/test';
import { mkdirSync,writeFileSync,readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
process.loadEnvFile('.env.qa.local');
const root=process.env.CAPTURE_DIR||'docs/evidence/REQ-008/recapture';
mkdirSync(root,{recursive:true});
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
const records=[];
try{
 const page=await browser.newPage({locale:'de-DE',viewport:{width:1440,height:1000},deviceScaleFactor:1,reducedMotion:'reduce'});
 const capture=async(name,state,fullPage=false)=>{await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:`${root}/${name}.png`,fullPage,animations:'disabled'});records.push({file:name+'.png',state,url:page.url(),viewport:page.viewportSize(),fullPage,capturedAt:new Date().toISOString(),sha256:createHash('sha256').update(readFileSync(`${root}/${name}.png`)).digest('hex')})};
 await page.goto('http://localhost:3000/login');await page.getByRole('button',{name:'Arbeitsplatz öffnen'}).waitFor();await capture('01-login-desktop','Login ohne Eingaben');
 await page.getByLabel('E-Mail',{exact:true}).fill(process.env.QA_EMAIL);await page.getByLabel('Passwort',{exact:true}).fill(process.env.QA_PASSWORD);await page.getByRole('button',{name:'Arbeitsplatz öffnen'}).click();await page.waitForURL('http://localhost:3000/');await page.getByText('Klarer Blick. Nächster Schritt.',{exact:true}).waitFor();await page.getByRole('button',{name:/Interview Marktmanagement vorbereiten/}).waitFor();
 await capture('02-uebersicht-desktop','Projektübersicht – erster Bildschirm');await capture('03-uebersicht-desktop-komplett','Projektübersicht – vollständig',true);
 await page.setViewportSize({width:390,height:844});await capture('04-uebersicht-mobile','Projektübersicht Mobile – erster Bildschirm');await capture('05-uebersicht-mobile-komplett','Projektübersicht Mobile – vollständig',true);
 await page.setViewportSize({width:1440,height:1000});await page.getByRole('button',{name:/Interviews/}).click();await page.getByLabel('Terminstatus').waitFor();await capture('06-interview-desktop','Sitzungsorganisation und getrennte Nachbereitung');
 await page.locator('.questions-panel').evaluate(el=>window.scrollTo(0,window.scrollY+el.getBoundingClientRect().top-20));await capture('07-fragen-desktop','Leitfadenfragen – lesbarer Ausschnitt');
 await page.getByRole('button',{name:'Druckansicht',exact:true}).click();await page.locator('.print-paper').waitFor();await page.emulateMedia({media:'print'});await capture('08-druckansicht','Gespeicherte ausgewählte Fragen',true);await page.pdf({path:`${root}/leitfaden.pdf`,format:'A4',printBackground:true});
 writeFileSync(`${root}/manifest.json`,JSON.stringify({source:'Echte Chromium-Aufnahmen der laufenden Next.js-Anwendung; keine generierten Mockups. Keine Projektdaten geändert.',records},null,2));
 const images=records.filter(r=>!r.file.includes('komplett')).map(r=>`<section><h2>${r.state}</h2><img alt="${r.state}" src="data:image/png;base64,${readFileSync(root+'/'+r.file).toString('base64')}"/></section>`).join('');
 writeFileSync(`${root}/ORG-COCKPIT-Bildansicht.html`,`<!doctype html><html lang="de"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ORG COCKPIT Screenshots</title><style>body{font:16px Arial;background:#f4f5fa;color:#242943;margin:24px}section{max-width:1440px;margin:0 auto 40px}img{display:block;max-width:100%;height:auto;border:1px solid #ddd;border-radius:8px}h2{font-size:20px}</style><h1>ORG COCKPIT – echte Anwendungsaufnahmen</h1>${images}</html>`);
 console.log('PASS: acht neue PNG-Aufnahmen, Druck-PDF und eigenständige HTML-Bildansicht erstellt; keine Projektdaten verändert.');
}finally{await browser.close()}
