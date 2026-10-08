import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'ORG COCKPIT · Organisationsanalysen',description:'Ihr persönlicher Analysearbeitsplatz'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="de"><body>{children}</body></html>}
