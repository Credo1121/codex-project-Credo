# Projektstand
2026-10-08 · erster funktionierender Interviewabschnitt mit echten Screenshots.

Discovery abgeschlossen für bekannten Kernablauf. REQ-001–004/008 Ready nach Architekturrefinement; kein Accepted. REQ-005–007 weiterhin Draft. Architektur/Verträge/ADR/Sicherheitsdesign vorhanden. Integrierte Next-/SQLite-/Better-Auth-Anwendung implementiert, keine öffentlichen Signup-/Upload-/AI-Funktionen.

Prüfung: zwei echte Browsertests bestanden; Admin, Projekt, Leitfaden, Sitzung und Folgeaufgabe nach kontrolliertem Serverneustart erhalten. Build/Typecheck bestanden; Lint drei Navigationswarnungen ohne Fehler. Produktionsaudit 0 bekannte gemeldete Schwachstellen. Desktop-/Mobile-Screenshots und beide Druck-PDF-Seiten tatsächlich gesichtet. QA-Details und offene AC: docs/qa/S1-results.md. Codebasis und Screenshotzeiten: docs/evidence/REQ-008/manifest.json.

Fachliche Abnahme ausstehend. Vollständiges S1-/MVP-Done nicht behauptet: weitere Grenzfälle/Accessibilityprüfung und S2–S4 offen. Deployment nicht beauftragt/ausgeführt.

Befehle: README/runbook. QA nutzt .env.qa.local und .data/qa.sqlite, mit synthetischem zufälligem Admin; Initialpasswort nicht für laufenden Betrieb gespeichert. Nutzerumgebung .env.local wird durch QA nicht überschrieben. Alle Secret-/Datenpfade ignoriert. Branch work weiterhin ohne Commit; vorhandene Skills und fachliche Dokumentation erhalten.

Nächster Schritt: web-requirements-Review anhand finaler Übersicht Desktop/Mobile, Intervieweditor und Leitfaden-PDF. Feedback in Backlog übernehmen; anschließend fehlende S1-Checks und S2 mit Skillflow. Keine einzelnen Skilltrigger nötig gemäß Nutzerautorisierung, Deployment weiterhin ausschließlich ausdrücklicher Auftrag.

Offene Entscheidungen für spätere lokale Übergabe: Nutzer-OS/Browser und Leistungsziele; Aufbewahrung vor Löschfunktionen. Keine materiellen Fragen blockieren die aktuelle Screenshotansicht.

## Letzte Änderung CHG-004
Nutzer wünscht ORG COCKPIT und blaue Grundfarbe. UI/Metadaten aktualisiert; #1C4890 als visuelle Annäherung, helle Arbeitsflächen. Produktionsbuild/TypeScript bestanden, Lint 0 Fehler/3 bestehende Warnungen. Neue Aufnahmen Desktop/Mobile gesichtet: evidence/CHG-004. Keine Datenänderung, keine erneute Voll-MVP-Abnahme. Nächster Schritt: Review und bestehendes Backlog weiterführen.

## Webbetrieb – aktueller Auftrag
Der lokale Grundlagenstand wurde als Commit 6070324 auf main nach GitHub gepusht. Nutzer möchte inzwischen Browserbetrieb ohne lokalen Server. GitHub Pages zeigt nur statische Dokumentation. Hosting-Auswahl (dauerhafter Webdienst oder Codespaces zum Ausprobieren) ist offen; siehe discovery/webbetrieb.md. Bisherige Angaben zu uncommitted Branch work und nicht beauftragtem Deployment sind historischer Stand. Kein Webdeployment ausgeführt.

## CHG-005 – Codespaces
Nutzer wählt GitHub Codespaces zum browserbasierten Ausprobieren. Devcontainer Node 24, Setup mit Codespace-HTTPS-Origin und separater Startbefehl auf Port 3000; Adminanlage weiterhin explizit. Private Portfreigabe beibehalten. Keine Codespace-Erstellung/Kostenbuchung durch den Agenten. Lokale Prüfung und noch ausstehender realer Codespaces-Smoke siehe changes/CHG-005.md.

## CHG-006 – statische Pages-Vorschau
Nutzer wünscht zunächst nur Frontend zum Durchklicken; dies ersetzt für die Vorschau Login-/Serverpersistenzanforderungen ausdrücklich. Separate Export-App mit identischem Workspace, synthetischem Projekt und Browserstorage implementiert. Kernreise/Reload/Druck/Reset/Projektanlage sowie Desktop/Mobile gesichtet und geprüft; vollständiger App-Build weiterhin PASS. Actions-Workflow zur Veröffentlichung auf Pages vorbereitet; Live-Nachweis wegen fehlendem API-Zugriff offen. PAGES.md beschreibt die nötige Source-Einstellung GitHub Actions.

## CHG-007 – Veröffentlichung aus main-Hauptverzeichnis
Fertiger statischer Vorschau-Export auf main eingecheckt, damit die bisherige Branch-Pages-Veröffentlichung index.html statt README liefert. Build/Lint und reale statische Browsernavigation PASS. Live-Pages-Einstellungen/Deployment unverifiziert; ggf. main / (root) in Pages auswählen. Weitere Details changes/CHG-007.md.
