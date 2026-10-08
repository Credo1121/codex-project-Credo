# Lokaler Betrieb – S1
Aktuelle verifizierte Umgebung: Linux, Node 24.19.0, npm 11.9.0, SQLite/better-sqlite3 13.0.3, Next 16.4.0, Better Auth 1.7.7, Chromium 151. Nutzerrechner noch nicht geprüft.

Start/Initialisierung/Reset: README. Keine Live-Prozesse im Snapshot voraussetzen. Installation `npm ci` mit erhaltenem Lockfile; Native-SQLite benötigt zur Plattform passende Binärmodule/ggf. Buildwerkzeuge. Keine TLS-/Signaturprüfung deaktivieren.

Keine öffentliche Registrierung. Authentifizierung allein genügt nicht: Singleton-Adminbindung pro Zugriff. Maximal acht Stunden Session, Logout oder Reset widerruft. Lokaler gemeinsamer Loginbucket fünf Versuche/Minute; keine Proxy-IP vertrauen. Öffentliches Hosting/HTTPS/Cookie- und Proxykonfiguration wären gesonderter Auftrag.

Fehlende Servervariablen führen zu Konfigurationsfehlern, nicht zu erfundenen Zugangsdaten. .env.local/.env.qa.local/.data durch .gitignore ausgeschlossen. Initialpasswort nach Initialisierung entfernen. Dateisystemzugriff auf lokale Daten/Backups schützen; Authschutz ist keine Verschlüsselung der Festplatte.

S4: dokumentierte manuelle konsistente SQLite-Sicherung und isolierte Restore-Prüfung noch nicht implementiert. Bis dahin keine Voll-MVP-/Recoveryfreigabe und keine ungetestete Kopie einer laufenden WAL-Datenbank als Backup ausgeben. Keine automatische Löschung oder Schema-Rückmigration. v1 Schemaanlage ist additiv; Folgeversionen brauchen explizite Migration.

Störungen: Seite neu laden nur bei gespeicherten Änderungen. Konfliktmeldungen nicht durch Überschreiben umgehen; Entwurf zunächst abgleichen. Loginfehler neutral. Keine Secret-/Kundeninhalte in Logs oder Screenshots.
