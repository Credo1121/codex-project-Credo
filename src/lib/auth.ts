import { betterAuth } from 'better-auth';
import { db } from './db';
const secret=process.env.BETTER_AUTH_SECRET;
if(!secret||secret.length<32)throw new Error('BETTER_AUTH_SECRET mit mindestens 32 Zeichen erforderlich.');
export const auth=betterAuth({database:db,secret,baseURL:process.env.BETTER_AUTH_URL,emailAndPassword:{enabled:true,minPasswordLength:12,maxPasswordLength:128},session:{expiresIn:60*60*8,updateAge:0,cookieCache:{enabled:false}},logger:{disabled:true},rateLimit:{enabled:true,window:60,max:30,storage:'database',customRules:{'/sign-in/email':{window:60,max:5}}},advanced:{ipAddress:{ipAddressHeaders:[]}}});
export async function adminSession(headers:Headers){const session=await auth.api.getSession({headers});if(!session)return null;const admin=db.prepare('SELECT user_id FROM app_admin WHERE singleton=1').get() as {user_id:string}|undefined;return admin?.user_id===session.user.id?session:null;}
