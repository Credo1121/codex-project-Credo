# Vertrag v1 – Workspace
Schemaquelle: src/lib/schema.ts. REQ-001–004/008. Keine öffentliche Registrierung.

GET /api/workspace: gültige Session und Adminbindung → {projects: Project[]}; ohne Login 401. max. 100 Projekte; darüber im ersten Abschnitt keine Anlage. JSON-Aggregate max. 128 KiB.
POST /api/workspace: Admin, gleicher Origin, JSON; {requestId: UUID, title, goal, scope, start: ISO-Date}. Leere Texte/zu lange Werte/ungültige Daten → 400 VALIDATION, keine Mutation. Atomare Roadmap-/Fragenkopie; wiederholte requestId liefert das bereits erzeugte Projekt. Erfolg {project}.
PUT /api/workspace: Admin, gleicher Origin, JSON; {project: Project} mit ID und gelesener revision. Änderungen vollständig validiert; Zugehörigkeit der Aufgaben/Sitzungen liegt im Projektaggregat. Erfolg erhöht revision, {project}. Veraltete Revision → 409 CONFLICT; kein Überschreiben. Unbekannte ID → 404. Keine Löschung.
Fehler {error: verständlicher Text, code: Code}; 401 AUTH, 403 ORIGIN, 400 VALIDATION, 409 CONFLICT, 413 LIMIT, 500 INTERNAL. Keine Stacktraces oder Secrets. UI erhält Entwurf bei Fehler, bietet bei Konflikt bewusstes Neuladen. Writes disabled während Request.

HTTP-Authroute: nur Better-Auth sign-in/email, sign-out und get-session; alle übrigen Pfade 404. Loginfehler generisch, 429 bei Limit. Loginbody begrenzt. Sessions maximal 8 h, serverseitig geprüft, Logout widerruft.

Projekttermine bleiben bei Startänderung unverändert. Sitzung durchgeführt lässt Nachbereitung offen. Folgeaufgaben erhalten stabile UUID plus Herkunftssitzung; Vollaggregat-PUT und Revision verhindern doppeltes Hinzufügen durch wiederholten Request.
