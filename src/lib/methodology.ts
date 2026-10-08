import type { Project, Task, Session } from './schema';
export const weeks=['Auftrag & Vorbereitung','Interviews & Produktverläufe','Vergleich & Validierung','Handlungsfelder & Optionen','Konkretisierung & Pilotierung','Bericht & Umsetzungsplanung'];
export const perspectives=['Markt- und Kundenverständnis','Produktstrategie und Portfolio','Produktdefinition und Wirtschaftlichkeit','Produktentstehung und Markteinführung','Lebenszyklusmanagement','Organisation, Entscheidungsrechte und Zusammenarbeit','Kapazität und Priorisierung','Informationen und Toollandschaft'];
export const questions=[
 ['Einstieg · 5 Min.','Welche Aufgaben und Entscheidungen prägen Ihre Rolle im Produktvorhaben?'],
 ['Konkretes Vorhaben · 15 Min.','Rekonstruieren Sie ein kürzliches Vorhaben: Was waren die wesentlichen Schritte vom Bedarf bis zur Markteinführung?'],
 ['Entscheidungen · 15 Min.','Welche Entscheidung blieb im letzten Vorhaben offen? Wer musste sie klären?'],
 ['Entscheidungen · 15 Min.','Wie lange dauerte die Klärung und woran lässt sich das nachvollziehen?'],
 ['Zusammenarbeit · 15 Min.','An welcher Schnittstelle fehlte eine Information? Welche Folgen hatte das im konkreten Verlauf?'],
 ['Abschluss · 10 Min.','Welche alternative Erklärung wäre denkbar und welche Belege sollten wir zur Prüfung heranziehen?'],
 ['Vertiefung Marktmanagement','Wie wurde ein konkreter Kunden- oder Marktbedarf erhoben und in eine Produktentscheidung übersetzt?'],
 ['Vertiefung Marktmanagement','Welche Marktannahme änderte sich zuletzt? Wie wurde die Änderung an Produktmanagement und Entwicklung weitergegeben?'],
 ['Vertiefung Marktmanagement','Woran messen Sie den Erfolg einer Markteinführung und welche Daten sind dafür verfügbar?']
];
export const addDays=(date:string,days:number)=>{const d=new Date(date+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+days);return d.toISOString().slice(0,10)};
export function checks(texts:string[]){return texts.map(text=>({id:crypto.randomUUID(),text,done:false}))}
export function createProject(data:{title:string;goal:string;scope:string;start:string}):Project{
 const titles=['Auftrag und Fallauswahl klären','Interview Marktmanagement vorbereiten','Produktverläufe vergleichen und Ursachen validieren','Handlungsfelder und Optionen strukturieren','Maßnahmen konkretisieren und Pilot prüfen','Bericht und 90-Tage-Plan vorbereiten'];
 const tasks:Task[]=titles.map((title,i)=>({id:crypto.randomUUID(),title,purpose:i===1?'Konkrete Marktentscheidungen, Informationsflüsse und Übergaben nachvollziehen.':'Das Arbeitsergebnis dieser Phase evidenzorientiert vorbereiten und prüfen.',due:addDays(data.start,i*7+3),status:'offen',week:i+1,perspective:perspectives[i===1?0:i],result:i===1?'Angepasster Leitfaden und vorbereitete Sitzung; anschließend getrennte Nachbereitung.':'Strukturierte Grundlage für den nächsten Analyseschritt, extern dokumentiert.',checks:checks(i===1?['Untersuchungsziele abgrenzen','Konkretes Vorhaben als Gesprächsanker wählen','Fragen und benötigte Belegarten prüfen']:['Ziel und erwartetes Ergebnis prüfen','Benötigte Schritte planen','Validierung und Folgeaktivitäten festhalten'])}));
 return {id:crypto.randomUUID(),revision:0,title:data.title,goal:data.goal,scope:data.scope,start:data.start,end:addDays(data.start,41),phase:1,tasks,sessions:[],milestones:[{id:crypto.randomUUID(),title:'Interviewrunde vorbereitet',due:addDays(data.start,7),done:false},{id:crypto.randomUUID(),title:'Analysebericht & Umsetzungsplan',due:addDays(data.start,41),done:false}],issues:[]};
}
export function createSession(task:Task):Session{return{id:crypto.randomUUID(),taskId:task.id,title:'Sitzung Marktmanagement 01',target:'Marktmanager',date:task.due,time:'',goals:'Marktentscheidungen, Übergaben und konkrete Belegarten erschließen.',status:'geplant',source:'methodik-v1',questions:questions.map(([group,text])=>({id:crypto.randomUUID(),group,text,selected:true})),preparation:checks(['Ziel und Fallbeispiel festlegen','Leitfaden auswählen und drucken']),followup:checks(['Externe Dokumentation abgeschlossen','Alternative Erklärungen und Belege prüfen','Offene Folgeaktivitäten anlegen'])}}
