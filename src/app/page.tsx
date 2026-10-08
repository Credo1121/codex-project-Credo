import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { adminSession } from '@/lib/auth';
import Workspace from '@/components/workspace';
export const dynamic='force-dynamic';
export default async function Page(){if(!await adminSession(await headers()))redirect('/login');return <Workspace/>}
