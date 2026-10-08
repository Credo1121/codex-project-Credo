import { z } from 'zod';
export const text = z.string().trim().min(1).max(500);
export const date = z.iso.date();
export const checkSchema = z.object({ id: z.uuid(), text, done: z.boolean() }).strict();
export const questionSchema = z.object({ id: z.uuid(), text: text.max(1500), selected: z.boolean(), group: text }).strict();
export const taskSchema = z.object({ id:z.uuid(), title:text, purpose:text, due:date.or(z.literal('')), status:z.enum(['offen','in Arbeit','erledigt','abgebrochen']), week:z.number().int().min(1).max(6), perspective:text, result:text, checks:z.array(checkSchema).max(20), sessionId:z.uuid().optional() }).strict();
export const sessionSchema = z.object({id:z.uuid(), taskId:z.uuid(), title:text, target:z.literal('Marktmanager'), date:date.or(z.literal('')), time:z.string().regex(/^$|^([01]\d|2[0-3]):[0-5]\d$/), goals:text, status:z.enum(['geplant','durchgeführt','abgesagt']), source:z.literal('methodik-v1'), questions:z.array(questionSchema).max(50), preparation:z.array(checkSchema).max(20), followup:z.array(checkSchema).max(20)}).strict();
export const projectSchema = z.object({id:z.uuid(),revision:z.number().int().min(0),title:text,goal:text,scope:text,start:date,end:date,phase:z.number().int().min(1).max(6),tasks:z.array(taskSchema).max(150),sessions:z.array(sessionSchema).max(100),milestones:z.array(z.object({id:z.uuid(),title:text,due:date,done:z.boolean()}).strict()).max(20),issues:z.array(z.object({id:z.uuid(),title:text,kind:z.enum(['Entscheidung','Hindernis']),done:z.boolean()}).strict()).max(30)}).strict().superRefine((p,c)=>{
 if(p.end<p.start)c.addIssue({code:'custom',message:'Enddatum liegt vor dem Start.',path:['end']});
 const taskIds=new Set(p.tasks.map(t=>t.id));const sessionIds=new Set(p.sessions.map(s=>s.id));
 if(taskIds.size!==p.tasks.length||sessionIds.size!==p.sessions.length)c.addIssue({code:'custom',message:'Doppelte IDs.'});
 for(const s of p.sessions)if(!taskIds.has(s.taskId))c.addIssue({code:'custom',message:'Sitzung ohne zugehörige Aufgabe.'});
 for(const t of p.tasks)if(t.sessionId&&!sessionIds.has(t.sessionId))c.addIssue({code:'custom',message:'Ungültige Sitzungsreferenz.'});
});
export const createSchema=z.object({requestId:z.uuid(),title:text,goal:text,scope:text,start:date}).strict();
export type Project=z.infer<typeof projectSchema>;
export type Task=z.infer<typeof taskSchema>;
export type Session=z.infer<typeof sessionSchema>;
