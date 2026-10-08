import type { Metadata } from 'next';
import '../../src/app/globals.css';
import './preview.css';
export const metadata:Metadata={title:'ORG COCKPIT · Interaktive Vorschau',description:'Synthetische Frontend-Vorschau ohne Backend'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="de"><body>{children}</body></html>}
