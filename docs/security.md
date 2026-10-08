# Sicherheitsdesign S1
Assets: lokale Projektorganisation, Admin-Passworthash, Session. Akteur: unbekannter HTTP-Client oder versehentliche Falscheingabe. Eintritt: Authroute, Workspace-API und UI. Trust: Browser untrusted, Server prüft Session UND Singleton-Adminbindung.

Injection/XSS: Zod-Limits, parametrisierte SQL, React-Textescaping, kein HTML-/URLimport. CSRF: Authbibliothek plus Same-Origin-Prüfung jeder POST/PUT-Operation. Autorisierungsbruch: serverseitige Session/Adminbindung auch für direkte API-Zugriffe. Ressourcenmissbrauch: Projekt-/Array-/Payloadlimits, Loginlimit. Secretleak: server-only Zugriff, ignorierte .env.local/.data, keine Authdetails in Logs. Lokaler Dateizugriff ist weiterhin durch OS-Zugriffsrechte zu schützen; keine Datenverschlüsselung zugesagt. HTTPS vor öffentlichem Betrieb zwingend neu prüfen; derzeit nur Loopback.

Ausgewählte OWASP ASVS 5.0.0 Kontrollen, anhand offiziellen Repositorys verifiziert: 1.2.1 (kontextbezogenes Outputescaping), 1.2.4 (parameterisierte Datenbankzugriffe), 6.1.1 (dokumentierte Bruteforce-Grenzen), 6.3.1 (Prüfung entsprechender Kontrollen).
Quellen: https://github.com/OWASP/ASVS/blob/v5.0.0/5.0/en/0x10-V1-Encoding-and-Sanitization.md und https://github.com/OWASP/ASVS/blob/v5.0.0/5.0/en/0x15-V6-Authentication.md . Kein vollständiger ASVS-Nachweis.

Lokaler Next-Request hat keine verlässlich verfügbare Client-IP; Better Auth nutzt einen gemeinsamen Pfadbucket. Für einen lokalen Einzel-Admin geeignet, blockiert nach fünf Versuchen/Minute insgesamt. Kein gefälschtes X-Forwarded-For übernehmen. Für Internetbetrieb neu bewerten. Logs der Authbibliothek deaktiviert, damit Fehlerdetails nicht unnötig protokolliert werden.
