# Interaktive Frontend-Vorschau auf GitHub Pages

Ziel: https://credo1121.github.io/codex-project-Credo/

Die Vorschau enthält synthetisches Projekt und Sitzung. Projektübersicht, Roadmap, Aufgaben/Checklisten, Leitfadeneditor, Projektanlage/-bearbeitung und Druckansicht lassen sich ausprobieren. Änderungen liegen nur im localStorage dieses Browsers; es gibt keinen Login, Server oder geräteübergreifenden Datenbestand. Nur synthetische Inhalte verwenden. „Beispiel zurücksetzen“ stellt den Ausgangsstand wieder her. Das Löschen der Browserdaten entfernt alle Vorschauänderungen.

## Veröffentlichung direkt aus main

Der fertige statische Build liegt zusätzlich im Hauptverzeichnis von `main`: `index.html`, `_next` und `.nojekyll`. Damit kann die bestehende Branch-Veröffentlichung die App statt README anzeigen. Unter **Settings → Pages → Source → Deploy from a branch → Branch main → / (root) → Save** wählen. Der von GitHub ausgelöste Pages-Build veröffentlicht diesen Stand. Danach die Zieladresse hart neu laden oder in einem privaten Browserfenster öffnen.

Nach künftigen UI-Änderungen vor Commit/Push `npm run pages:export` ausführen und die aktualisierten Exportdateien committen. Der Exportbefehl ersetzt nur zuvor registrierte generierte Dateien, keine Anwendungsquellen. Das ist ein zusätzlicher, bewusst eingecheckter Veröffentlichungsstand; Secrets und Datenbank sind nicht enthalten.

## Prüfung der Veröffentlichung

`https://credo1121.github.io/codex-project-Credo/pages-version.json` muss die Versionskennung **CHG-008** liefern. Zeigt die Datei 404 oder einen anderen Stand, ist der aktuelle main-Stand noch nicht veröffentlicht. Der zuständige Lauf heißt **pages build and deployment** (GitHub-Branch-Veröffentlichung). Ein grüner **Validate frontend preview**-Lauf bestätigt nur den Quellbuild.

Es gibt bewusst nur einen Veröffentlichungsweg: **main / (root)**. Der eigene Workflow validiert den Build, deployt aber nicht zusätzlich. Nach Einstellungswechsel muss gegebenenfalls die Branch-Pages-Quelle erneut gespeichert werden. Für einen Cache-unabhängigen Aufruf kann die App mit `?release=CHG-008` geöffnet werden.

## Lokal prüfen (optional)

`npm run pages:build` erzeugt den statischen Export; `npm run pages:dev` startet dessen Entwicklungsversion unter http://localhost:3001/codex-project-Credo/ . Statische Dateien müssen unter dem Projektpfad `/codex-project-Credo/` bereitgestellt werden. `scripts/check-pages.mjs` prüft die exportierte Vorschau mit Chromium; PAGES_TEST_URL und CHROMIUM_PATH können die Testumgebung anpassen.
