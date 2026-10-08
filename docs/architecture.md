# Architektur – erster Interviewabschnitt
2026-10-08, S1. REQ-001–004/008 fachlich geklärt; S1 für Umsetzung Ready nach diesem Refinement, keine fachliche Abnahme. Spätere MVP-Module bleiben Draft.

Browser → Next.js App Router / Node 24 → Better Auth und Domänendienst → lokale SQLite-Datei. Kein separater Backenddienst, Cloudanbieter oder AI-Dienst. Server-only Geschäftslogik; Client erhält keine Auth-/DB-Konfiguration. Vertrauen: Browserinput ist untrusted; jeder Datenzugriff benötigt geprüfte Adminsession. Lokale Dateirechte bleiben eine Betriebsverantwortung.

SQLite: WAL, Fremdschlüssel, atomare Transaktionen. Eine Singleton-Adminbindung referenziert Better-Auth-User. Projekte enthalten versionierte JSON-Aggregate mit validiertem Schema und relationaler Projektidentität; Tabellenrevision für optimistische Konkurrenzkontrolle, Request-ID für wiederholte Anlage. Kein Multi-Tenant-Modell. Kopien der Fragen werden beim Projektstart gespeichert; keine Live-Verknüpfung, die Texte überschreibt. v1 Migration additiv, keine destruktive Rückmigration.

Better Auth verwaltet Sessions und scrypt-Passwort-Hashes. Session maximal acht Stunden, kein remember-me. HTTP nur Loopback, bei HTTPS Secure-Cookies automatisch. Loginlimit fünf Versuche/Minute pro IP; im lokalen Modus keine Proxy-Header vertrauen. Nur sign-in/email, sign-out und get-session werden an HTTP durchgereicht. Signup nur CLI-intern möglich. Adminbindung zusätzlich zu Sessionprüfung. Passwortreset widerruft Sessions.

Mutationen: Origin-Prüfung gegen BETTER_AUTH_URL, JSON und 128 KiB Limit, Zod-Schema, parameterisierte SQL-Statements. Revision verhindert stilles Überschreiben; gleiche Anlage-ID verhindert Dubletten. Keine externen Referenzabrufe, Uploads oder HTML-Inhalte. React escapt Texte. Anonymisierte Notizen erst S3.

Zeit: Projektdaten ISO-Date ohne Uhrzeit; sechs Sieben-Tage-Intervalle. Sitzungsdatum/-uhrzeit zunächst lokal gekennzeichnet Europe/Berlin, keine Wiederholungsregeln. Aufgabenstatus offen/in Arbeit/erledigt/abgebrochen. Bei Startänderung bleiben bestehende Termine erhalten. Fortschritt: erledigte nicht abgebrochene Aufgaben / alle nicht abgebrochenen Aufgaben.

UI: heller Workspace, dunkle schmale Navigation, Indigo/Cyan-Akzente, klarer Fokus auf nächste Schritte. Keine externen Fonts. Desktop 1440×900, Mobile 390×844. Aktuell Chromium als überprüfte Browserbasis; Nutzer-OS bleibt vor lokaler Übergabe offen, verhindert Cloud-Umsetzung nicht.

Testgrenzen: echte SQLite und Browser, direkte HTTP-Negativtests, Reload/Prozessneustart, Konflikte, Session/Logout, Druck. Keine Performance-/Verfügbarkeitszusagen. Sicherung/Wiederherstellung S4 vor vollständiger MVP-Aussage.
