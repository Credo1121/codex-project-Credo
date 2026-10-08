# ORG COCKPIT im Browser starten

Auf GitHub anmelden und das Repository öffnen. **Code → Codespaces → Create codespace on main** wählen. Die kleinste angebotene Maschine genügt für den ersten Probelauf. GitHub-Kontingente und mögliche Gebühren im eigenen Konto prüfen; die Konfiguration erstellt oder bucht selbst keinen Codespace.

Die Umgebung installiert Node 24 und die Abhängigkeiten und erstellt eine ignorierte `.env.local` mit zufälligem Serversecret und passender HTTPS-Adresse. Den Abschluss von `postCreateCommand` abwarten. Bei einem vorhandenen Codespace zuerst Änderungen holen und **Codespaces: Rebuild Container** ausführen. Eine bestehende Konfiguration wird nicht überschrieben.

## Einmalige Admin-Einrichtung

In der Dateiansicht `.env.local` öffnen (ausgeblendete Dateien sind dort sichtbar). Eigene `ADMIN_EMAIL` und `ADMIN_INITIAL_PASSWORD` eintragen und speichern. Passwort 12–128 Zeichen; bei `#` oder Leerzeichen in Anführungszeichen setzen. Keine Zugangsdaten teilen. `BETTER_AUTH_SECRET` und `BETTER_AUTH_URL` erhalten.

Im eingebauten Terminal:

```sh
npm run admin:init
```

Nach Erfolg die gesamte Zeile `ADMIN_INITIAL_PASSWORD=...` aus `.env.local` entfernen und speichern. Der Admin bleibt als Passwort-Hash in der Datenbank. Eine zweite Initialisierung überschreibt ihn nicht.

```sh
npm run build
npm run codespaces:start
```

Im Tab **Ports** Port **3000** suchen. Die Sichtbarkeit muss **Private** bleiben; über das Browser-Symbol öffnen. Falls keine Zeile erscheint: **Add port → 3000**. Die Adresse hat die Form `https://<codespace-name>-3000.app.github.dev`. Dort mit deinem App-Admin anmelden. Die GitHub-Anmeldung am privaten Port ersetzt nicht den App-Login.

Die Terminalmeldung mit `localhost` ist die interne Serveradresse. Verwende im Browser die weitergeleitete HTTPS-Adresse aus **Ports**, nicht GitHub Pages. Der private Zugriff verhindert eine automatische öffentliche Freigabe. Falls dein Konto/Unternehmen eine andere Sichtbarkeit vorgibt, vor der Nutzung auf Private stellen.

## Später erneut nutzen

Unter https://github.com/codespaces denselben Codespace öffnen und im Terminal `npm run codespaces:start` ausführen. Nach Änderungen zuerst `npm run build`. Terminal offen lassen; `Strg+C` beendet die App. Im GitHub-Codespaces-Menü **Stop codespace** beendet den laufenden Codespace und dessen Rechenverbrauch; verbleibender Speicher kann weiter aufs Kontingent zählen.

`.data/workspace.sqlite` und `.env.local` liegen im Repository-Arbeitsverzeichnis des Codespaces und werden nicht committed. Sie überstehen Stop/Start und einen regulären Container-Rebuild, aber **nicht das Löschen des Codespaces**. Ein neuer Codespace erhält eigene Daten und ein neues Serversecret. Noch keine automatische Sicherung/Wiederherstellung: zum Ausprobieren synthetische bzw. erlaubte neutrale Inhalte verwenden. Meeting-Minutes/Uploads bleiben noch außerhalb dieses Builds.

## Wenn etwas hakt

- Installation fehlgeschlagen: den Fehler von `postCreateCommand` prüfen; nach Beheben `npm ci` und `npm run codespaces:setup` im Codespace-Terminal ausführen.
- Bestehende URL passt nicht: nur `BETTER_AUTH_URL` in `.env.local` auf die HTTPS-Adresse von Port 3000 des aktuellen Codespaces ändern. Danach Build und Server neu starten. Secret und Datenbank erhalten.
- Loginfehler: Zugangsdaten prüfen und nach mehreren Fehlversuchen eine Minute warten. Passwortreset wie in README, im Codespace-Terminal.
- Nach Stillstand nicht erreichbar: Codespace starten und App-Befehl erneut ausführen.
- Kein Portzugriff: GitHub-Anmeldung, private Portfreigabe und passende Codespace-Adresse prüfen.

Die App bleibt dieselbe Next.js-/SQLite-Anwendung. Codespaces ist eine Entwicklungsumgebung zum Testen, kein dauerhaft verfügbarer Hosting-Dienst. Die tatsächliche Codespaces-HTTPS-Kernreise muss beim ersten Start im eigenen Konto geprüft werden; die lokale Prüfung ersetzt diesen Nachweis nicht.
