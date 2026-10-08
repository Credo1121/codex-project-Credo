# Architektur – erster Interviewabschnitt
2026-10-08, S1. REQ-001–004/008 fachlich geklärt; S1 für Umsetzung Ready nach diesem Refinement, keine fachliche Abnahme. Spätere MVP-Module bleiben Draft.

Browser → Next.js App Router / Node 24 → Better Auth und Domänendienst → lokale SQLite-Datei. Kein separater Backenddienst, Cloudanbieter oder AI-Dienst. Server-only Geschäftslogik; Client erhält keine Auth-/DB-Konfiguration. Vertrauen: Browserinput ist untrusted; jeder Datenzugriff benötigt geprüfte Adminsession. Lokale Dateirechte bleiben eine Betriebsverantwortung.

SQLite: WAL, Fremdschlüssel, atomare Transaktionen. Eine Singleton-Adminbindung referenziert Better-Auth-User. Projekte enthalten versionierte JSON-Aggregate mit validiertem Schema und relationaler Projektidentität; Tabellenrevision für optimistische Konkurrenzkontrolle, Request-ID für wiederholte Anlage. Kein Multi-Tenant-Modell. Kopien der Fragen werden beim Projektstart gespeichert; keine Live-Verknüpfung, die Texte überschreibt. v1 Migration additiv, keine destruktive Rückmigration.

Better Auth verwaltet Sessions und scrypt-Passwort-Hashes. Session maximal acht Stunden, kein remember-me. HTTP nur Loopback, bei HTTPS Secure-Cookies automatisch. Loginlimit fünf Versuche/Minute pro IP; im lokalen Modus keine Proxy-Header vertrauen. Nur sign-in/email, sign-out und get-session werden an HTTP durchgereicht. Signup nur CLI-intern möglich. Adminbindung zusätzlich zu Sessionprüfung. Passwortreset widerruft Sessions.

Mutationen: Origin-Prüfung gegen BETTER_AUTH_URL, JSON und 128 KiB Limit, Zod-Schema, parameterisierte SQL-Statements. Revision verhindert stilles Überschreiben; gleiche Anlage-ID verhindert Dubletten. Keine externen Referenzabrufe, Uploads oder HTML-Inhalte. React escapt Texte. Anonymisierte Notizen erst S3.

Zeit: Projektdaten ISO-Date ohne Uhrzeit; sechs Sieben-Tage-Intervalle. Sitzungsdatum/-uhrzeit zunächst lokal gekennzeichnet Europe/Berlin, keine Wiederholungsregeln. Aufgabenstatus offen/in Arbeit/erledigt/abgebrochen. Bei Startänderung bleiben bestehende Termine erhalten. Fortschritt: erledigte nicht abgebrochene Aufgaben / alle nicht abgebrochenen Aufgaben.

UI: heller Workspace, dunkle schmale Navigation, Indigo/Cyan-Akzente, klarer Fokus auf nächste Schritte. Keine externen Fonts. Desktop 1440×900, Mobile 390×844. Aktuell Chromium als überprüfte Browserbasis; Nutzer-OS bleibt vor lokaler Übergabe offen, verhindert Cloud-Umsetzung nicht.

Testgrenzen: echte SQLite und Browser, direkte HTTP-Negativtests, Reload/Prozessneustart, Konflikte, Session/Logout, Druck. Keine Performance-/Verfügbarkeitszusagen. Sicherung/Wiederherstellung S4 vor vollständiger MVP-Aussage.

## Erweiterung 0.2.0 / CHG-009
Gemeinsamer Workspace mit isoliertem Preview-Datenadapter und unverändertem geschütztem Serveradapter. Additive optionale/defaulted Bewertungen und Verlauf im vorhandenen Projekt-JSON; keine neue DB-Tabelle/destruktive Migration. Legacy-Sitzungen methodik-v1 bleiben lesbar, neue Kopien methodik-v2. Assessment-Zod prüft Werte, eindeutige Perspektiven und erforderliche Begründung für Leistungsbewertung/NA auch serverseitig. Aktuell ein Leitkriterium pro Perspektive; kein arithmetischer Gesamtscore. Unknown null und NA getrennt; keine Chart-Verbindung durch unbekannte Werte. Historie begrenzt auf 100 frühere Einordnungen, kein unbegrenztes Auditlog.

Gantt berechnet vorgeschlagene Arbeitsfenster relativ zum Projektzeitraum; bindende gespeicherte Aufgaben-/Sitzungs-/Meilensteintermine werden gesondert dargestellt, nicht verschoben. Kein automatischer Kalender-/Validierungsstatus. Herkunftsschlüssel für bestätigte Radar-Folgeaufgaben verhindert Duplikate in der UI. Keine neuen Dienste/AI/Uploads; Backend bleibt Admin-geschützt. Seitenvorschau erhält ausschließlich ausdrücklich synthetische Beispielbewertungen. Persönliche Dateien verbleiben außerhalb Git/Pages; Minutes-Speicherung weiterhin nicht implementiert.

## Erweiterung 0.2.1 / CHG-010
Die Methodikvorlage v3 besteht aus einem produktmanagementzentrierten Kern, optional zwei Fragen aus einer Radar-Fokusperspektive und je fünf Rollenfragen für zehn Zielgruppen. Jede Sitzung speichert weiterhin eine unabhängige Fragenkopie. Der Zielgruppenwechsel erzeugt nur nach Bestätigung eine neue Kopie für die aktive Sitzung und aktualisiert Ziel, Rolle und Methodikversion gemeinsam. Abbruch lässt die Sitzung unverändert. Das serverseitige Zod-Schema akzeptiert nur die zehn bekannten Rollen und v1–v3 als Methodikherkunft. Interne Perspektivschlüssel bleiben aus Kompatibilitätsgründen stabil; sichtbare Radarbezeichnungen wurden auf Portfolio, Roadmap, Entwicklung, Governance und Produktmanagement ausgerichtet.

## Erweiterung 0.3.0 / CHG-011
Das bestehende Projektaggregat erhält additive, standardmäßig leere Sammlungen für Analysefragen, Hypothesen, Evidenz, Befunde, Handlungsfelder und Maßnahmen. Referenzen werden serverseitig auf existierende Ziele geprüft; Befunde benötigen mindestens eine Evidenz, Handlungsfelder mindestens einen Befund und Maßnahmen ein Handlungsfeld. Bewertete Hypothesen benötigen eine Begründung. Alte Projekt-JSONs werden über Zod-Defaults kompatibel erweitert, ohne bestehende Interview- oder Radardaten umzuschreiben.

Star+2-Dimensionsschlüssel liegen an Analysefragen, Hypothesen, Befunden und Handlungsfeldern. Die 7-S-Ansicht berechnet eine orientierende Projektion, speichert keine Dubletten. UI und Datenmodell erzeugen keine automatische Kausalität, Gewichtung oder Gesamtnote. Sitzungen können optional auf eine Analysefrage verweisen; ihre unabhängige Fragenkopie bleibt erhalten.
