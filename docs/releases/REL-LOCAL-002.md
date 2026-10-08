# ORG COCKPIT 0.2.0 – lokale App und synthetische Vorschau

Neue Analyseansichten CHG-009 / REQ-009–011. Quellpaket enthält lokale Next-App, Setup, Adminbefehle und Dokumentation; keine Secrets, Nutzerdaten, node_modules oder nativen Buildartefakte. Node 24, npm ci, individuelle Konfiguration und Produktionsbuild auf Zielrechner wie START-HIER.md. Bereits vorhandene .env.local und .data erhalten; bei Update npm ci und npm run build, keine erneute Adminanlage. Passwort/DB nicht in Git oder Pages.

Prüfung Linux: beide Buildziele, Zod/serverseitige Negativfälle, Bestandsauth und neue synthetische Browserreise PASS; Desktop/Mobile gesichtet. macOS-Neubau der 0.2.0 NOT RUN. Frühere frische Linuxinstallation der unveränderten Abhängigkeiten 0.1.0 PASS. Dauerhafte Speicherung und lokaler Login bleiben; Minutes-Dateien/Imports/AI nicht umgesetzt. Benutzerdateien außerhalb Git aufbewahren.

Pages-Export enthält ausschließlich synthetische Demodaten. Vorhandene Browserprojekte werden erhalten; Reset nur explizit bestätigt. GitHub-Push/Branch-Build ist kein Live-Betriebsnachweis; Abruf aus dieser Cloud weiterhin gesperrt. Keine vollständige MVP-/Produktionsreife behauptet. Lokales Paket SHA-256 und Dateimanifest zur Prüfung; kein automatischer Installer/keine Hostkosten.
