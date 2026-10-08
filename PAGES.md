# Interaktive Frontend-Vorschau auf GitHub Pages

Ziel: https://credo1121.github.io/codex-project-Credo/

Die Vorschau enthält synthetisches Projekt und Sitzung. Projektübersicht, Roadmap, Aufgaben/Checklisten, Leitfadeneditor, Projektanlage/-bearbeitung und Druckansicht lassen sich ausprobieren. Änderungen liegen nur im localStorage dieses Browsers; es gibt keinen Login, Server oder geräteübergreifenden Datenbestand. Nur synthetische Inhalte verwenden. „Beispiel zurücksetzen“ stellt den Ausgangsstand wieder her. Das Löschen der Browserdaten entfernt alle Vorschauänderungen.

## Veröffentlichung

Im Repository **Settings → Pages → Build and deployment → Source → GitHub Actions** wählen. Dies ersetzt die bisherige Jekyll-/README-Veröffentlichung durch die Web-App-Vorschau.

Unter **Actions → Publish frontend preview to GitHub Pages** den Lauf des neuesten main-Commits prüfen. Falls nach der Einstellungsänderung kein neuer Lauf startet: **Run workflow → main → Run workflow**. Nach erfolgreichem Build und Deploy die Zieladresse öffnen, gegebenenfalls hart neu laden. Falls GitHub Actions im Konto deaktiviert ist oder ein Environment-Approval verlangt wird, dessen angezeigte Einstellung/Freigabe ist im GitHub-Konto zu erledigen.

Der Workflow installiert aus package-lock.json und exportiert ausschließlich `pages-preview/out`. Weder `.env.local` noch Datenbank oder Backend werden veröffentlicht. Keine GitHub-Secrets für diese Vorschau nötig. Die vollständige serverseitige App und Codespaces bleiben separat verfügbar.

## Lokal prüfen (optional)

`npm run pages:build` erzeugt den statischen Export; `npm run pages:dev` startet dessen Entwicklungsversion unter http://localhost:3001/codex-project-Credo/ . Statische Dateien müssen unter dem Projektpfad `/codex-project-Credo/` bereitgestellt werden. `scripts/check-pages.mjs` prüft die exportierte Vorschau mit Chromium; PAGES_TEST_URL und CHROMIUM_PATH können die Testumgebung anpassen.
