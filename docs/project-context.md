# Projektkontext
Quelle: docs/discovery/organisationsanalyse.md; Revision 1, 2026-10-08.

Persönlicher Methodik- und Projektarbeitsplatz für Organisationsanalysen, Einzel-Admin, zunächst lokaler Betrieb. Keine Kundensystemanbindung oder AI-Abhängigkeit. Zulässige Inhalte und offene Entscheidungen: Discovery.

Bestätigter Stack: Next.js, TypeScript, Node.js, integrierte serverseitige Geschäftslogik bevorzugt. Architekturentscheidung: Next 16.4.0, React 19.3.0, Node 24, SQLite/better-sqlite3 13.0.3, Better Auth 1.7.7. Hosting nicht beauftragt. Anwendung und gepinnter npm-Lockfile vorhanden; tatsächliche Befehle in README/runbook.

Arbeitsmodi: .agents/skills/web-{requirements,architecture,frontend,backend,qa,deploy,help}/SKILL.md. web-deploy ausschließlich ausdrücklich aufrufen. Keine Anwendungscodes im Requirements-Modus.

Secrets ausschließlich serverseitig; .env.local ausschließen, .env.example nur neutrale Platzhalter. Keine echten Zugangsdaten oder Kundeninhalte in Dokumentation/Testdaten/Evidenz.

Fachliche Spezifikation: docs/requirements; Backlog: docs/backlog.md; Datenstruktur: docs/domain-model.md. Projektstand: docs/project-state.md.
