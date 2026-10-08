import { auth } from '@/lib/auth';
export const runtime='nodejs';
async function handle(request:Request){
 const path=new URL(request.url).pathname;
 if(!['/api/auth/sign-in/email','/api/auth/sign-out','/api/auth/get-session'].includes(path))return Response.json({error:'Nicht verfügbar.'},{status:404});
 if(request.method==='POST'){
 if(request.headers.get('origin')!==new URL(process.env.BETTER_AUTH_URL!).origin)return Response.json({error:'Anfrage nicht zulässig.'},{status:403});
 const body=await request.text();if(body.length>8192)return Response.json({error:'Anfrage zu groß.'},{status:413});
 request=new Request(request.url,{method:request.method,headers:new Headers(request.headers),body});
 }
 const response=await auth.handler(request);
 if(path.endsWith('sign-in/email')&&!response.ok)return Response.json({error:'Anmeldung nicht möglich. Zugangsdaten prüfen oder später erneut versuchen.'},{status:response.status===429?429:401});
 return response;
}
export {handle as GET,handle as POST};
