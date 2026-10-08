# Webbetrieb – Klärung vom 8. Oktober 2026

Quelle: Nutzer möchte ORG COCKPIT jetzt im Browser über GitHub nutzen, ohne lokalen Start. Die GitHub-Pages-Seite zeigt bislang die README/Anleitung. Einzel-Admin, serverseitiger Zugriffsschutz und dauerhafte Speicherung bleiben bestehende Anforderungen; keine Erlaubnis zu einem kostenpflichtigen Dienst liegt vor.

## Technische Einordnung
GitHub Pages liefert statische Dateien aus und führt weder Next.js-Serveraktionen/API-Routen noch SQLite/Better Auth aus. Ein statischer Export erfüllt die bestehende Kernreise nicht. Die Anwendung bleibt deshalb eine integrierte Next.js-/Node-24-Anwendung.

| Weg | Nutzung | Grenze |
| --- | --- | --- |
| Webhosting mit GitHub-Anbindung | Dauerhafte HTTPS-Adresse; Code aus dem Repository | Anbieter/Region/Budget und dauerhafter Speicher müssen ausgewählt werden |
| GitHub Codespaces | Start einer privaten Entwicklungsumgebung und Öffnen des weitergeleiteten App-Ports im Browser | GitHub-Anmeldung; Laufzeit-/Speicherkontingente, Stopps und spätere Löschung; kein dauerhafter Produktionsbetrieb |

Für die bestehende SQLite-Architektur benötigt ein dauerhafter Host einen Node-24-Prozess und ein persistentes beschreibbares Volume. Nur eine App-Instanz mit diesem Volume; keine unabhängigen SQLite-Dateien auf mehreren Replikaten. Ephemere oder reine statische Hosts eignen sich ohne Architekturänderung nicht.

## Unabhängig vom Anbieter vorzubereiten
- Vollständige öffentliche HTTPS-Origin in BETTER_AUTH_URL; kein localhost im Webbetrieb.
- BETTER_AUTH_SECRET ausschließlich serverseitig; Secrets nicht ins Repository oder Browserbundle.
- DATABASE_PATH auf persistentem Speicher; Laufzeitprozess mit passenden Dateirechten.
- Explizite Admin-Initialisierung über eine serverseitige Konsole mit ADMIN_EMAIL und ADMIN_INITIAL_PASSWORD; Initialpasswort danach entfernen. Kein automatisches Überschreiben beim Start.
- Server muss auf der vom Host erforderlichen Schnittstelle lauschen; der vorhandene lokale npm-start-Befehl bindet absichtlich nur Loopback.
- Sicherung/Wiederherstellung und TLS-/Cookie-/Origin-Prüfung vor dauerhafter Nutzung; Zugriff auf alle Daten bleibt serverseitig geschützt.
- Nach Deployment echte Anmeldung, Projektanlage, Leitfadenänderung, Neuladen, Prozessneustart und Logout prüfen; synthetische Daten verwenden.

## Stand
Nutzer hat GitHub Codespaces zum Ausprobieren gewählt. Keine Anbieteranlage, Kostenbuchung, Umstellung auf Browserstorage oder Remote-Veröffentlichung ausgeführt. Live-Smoke und HTTPS-Cookie-Prüfung NOT RUN: kein ausgewählter Host/keine Live-URL. Konfiguration und CODESPACES.md werden als CHG-005 umgesetzt. Erststart im Nutzerkonto steht aus.
