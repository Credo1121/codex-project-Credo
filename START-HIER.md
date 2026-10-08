# ORG COCKPIT – lokal ausprobieren
Dieses Paket enthält den aktuellen Grundlagenstand als echte Web-App. Sie läuft auf deinem Rechner, mit eigenem Adminlogin und dauerhafter SQLite-Datenbank. Keine Registrierung, kein Cloudkonto, kein AI-Dienst erforderlich.

## Voraussetzungen auf macOS
Node.js **24 LTS**, inklusive npm: https://nodejs.org/ . Prüfen: `node --version` und `npm --version`.

ZIP im Finder vollständig entpacken, zum Beispiel in den Ordner `ORG-COCKPIT` unter deinen Dokumenten. Terminal über Spotlight öffnen (⌘+Leertaste → „Terminal“). `cd ` mit einem Leerzeichen eingeben, den entpackten Ordner aus dem Finder ins Terminal ziehen und Enter drücken. Nun muss `package.json` im aktuellen Ordner liegen. Während `npm ci` Internetzugriff auf die Paketquellen zulassen.

Bei Node 24 LTS die passende Mac-Version wählen: arm64 für Apple Silicon (M1/M2/M3/M4 usw.), x64 für Intel-Macs. Für diesen Grundlagenstand bleiben wir beim Zugriff von diesem Rechner.

## Einmalige Einrichtung
```sh
npm ci
npm run local:setup
```
`local:setup` legt eine private `.env.local` mit einem zufälligen Serversecret an und verändert eine bereits vorhandene Datei nicht. Es gibt kein Standardpasswort.

Die Datei `.env.local` im Finder mit **⌘+⇧+Punkt** einblenden und mit einem Texteditor öffnen. Alternativ im App-Ordner `open -e .env.local` ausführen. Als reine Textdatei speichern, ohne `.txt`- oder `.rtf`-Anhang. **Nur auf deinem Rechner** eintragen:

- `ADMIN_EMAIL`: deine gewünschte Login-E-Mail, z. B. eine von dir verwendete Adresse. Es werden keine E-Mails verschickt.
- `ADMIN_INITIAL_PASSWORD`: dein selbst gewähltes Passwort mit 12–128 Zeichen. Mit Zeichen wie `#` das Passwort in doppelte Anführungszeichen setzen; die `.env`-Datei wird von Node als Umgebungsvariablen eingelesen.

Keine Datei oder Zugangsdaten an mich senden. `BETTER_AUTH_SECRET` erhalten; er schützt die Sessions. Nun:

```sh
npm run admin:init
```
Bei Erfolg wird der Admin gespeichert. **Danach die gesamte Zeile `ADMIN_INITIAL_PASSWORD=...` aus `.env.local` entfernen und die Datei speichern.** Das Login funktioniert weiterhin mit deinem gewählten Passwort; gespeichert ist nur dessen Hash. Wiederholte Initialisierung überschreibt keinen Account.

```sh
npm run build
npm start
```
Terminal geöffnet lassen. Im Browser **http://localhost:3000** eingeben und mit deinen eigenen Zugangsdaten anmelden. Ein leeres Projektverzeichnis ist korrekt: Projekt anlegen und die Interviewreise ausprobieren. Keine Testprojekte oder Test-Admins werden mitgeliefert.

## Später erneut starten
Im selben Ordner reicht:

```sh
npm start
```
Beenden: `Strg+C` im Terminal. Nach Rechnerneustart `npm start` erneut ausführen. Projekte/Admin bleiben in `.data/workspace.sqlite`. Ordner `.data` und `.env.local` nicht löschen oder mit einer neuen Paketversion überschreiben. Browserdaten löschen oder den Browser wechseln löscht diese Serverdaten nicht.

## Empfohlene erste Runde
1. Anmelden und neutrales Projekt anlegen.
2. Roadmap öffnen und „Interview Marktmanagement vorbereiten“ wählen.
3. Checklisten bearbeiten und speichern.
4. Interview vorbereiten; Fragen wählen, anpassen und ordnen; speichern.
5. Druckansicht öffnen.
6. Termin durchführen markieren; Nachbereitung separat bearbeiten und Folgeaktivität hinzufügen; speichern.
7. Seite neu laden und App stoppen/neustarten; Änderungen überprüfen.

Für diesen Probelauf weiterhin ausschließlich synthetische oder bereits erlaubte neutrale Inhalte verwenden. Meeting-Minutes und Uploads sind vorgemerkt, **noch nicht enthalten**.

## Falls etwas nicht funktioniert
- `node` oder `npm` fehlt: Node 24 LTS installieren und Terminal neu öffnen.
- „package.json nicht gefunden“: Terminal in den tatsächlich entpackten App-Ordner wechseln.
- Native SQLite-Installation schlägt fehl: zuerst Nodeversion und Rechnerarchitektur prüfen. Falls kein passendes verifiziertes Binärpaket verfügbar ist, braucht `better-sqlite3` lokale Compilerwerkzeuge. Betriebssystem und redigierte Fehlermeldung zur gezielten Klärung mitteilen; keine TLS-Prüfung abschalten.
- Fehlende Konfiguration: `.env.local` muss im App-Ordner liegen; kein `.txt`-Anhang. Datei nicht teilen.
- Port 3000 belegt: das andere Programm beenden oder den Konflikt klären; nicht ungeprüft Prozesse beenden. Ein anderer Port benötigt auch eine angepasste BETTER_AUTH_URL und neue Anmeldung.
- Loginfehler: eigene Zugangsdaten prüfen, nach mehrfachen Versuchen eine Minute warten. Passwortreset ist in README beschrieben.

Wenn du Git verwendest, vor jedem ersten Commit `git check-ignore .env.local` ausführen. Secretdateien und `.data` sind ausgeschlossen. Das ZIP enthält keine Secrets, Datenbank, node_modules oder plattformspezifischen Builddateien; der Produktionsbuild wird gezielt auf deinem Rechner erzeugt.

Die Installationsschritte sind für macOS vorbereitet. Die technische Prüfung erfolgt hier auf Linux/Node 24 in einer frischen isolierten Installation; eine tatsächliche macOS-Prüfung ist damit nicht belegt. Bei fehlenden nativen SQLite-Binärpaketen helfen ggf. die Apple Command Line Tools (`xcode-select --install`); nur bei entsprechendem Installationsfehler erforderlich. Noch kein vollständiges MVP: weitere Methodik-/Ergebnisvorlagen und Backup-/Wiederherstellungsfunktion folgen.
