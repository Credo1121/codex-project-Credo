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

## CHG-008 – Pages-Veröffentlichung eingrenzen
Nutzer bestätigt Branch main / root und grünen Lauf, sieht aber Anleitung. Remote-main 71269f4 einschließlich Appdateien erneut gelesen. Zusätzlichen Actions-Deploy entfernt; Workflow validiert nur noch, damit Branch-Pages die einzige Quelle bleibt. pages-version.json (CHG-008) ermöglicht Prüfung des tatsächlich ausgelieferten Stands. Öffentliche URL/API aus Cloud weiter blockiert; Live-Ergebnis nicht verifiziert.

## Neue Planungsrunde: Radar, Interviewführung und Roadmap
Nutzer bestätigt funktionierende Pages-Vorschau. web-requirements-Discovery für Wissens-/Organisationsbewertung, Mittelstandsvergleich und Hands-on-Priorität gestartet. Drei gezielte Fragen zu Bewertungs-/Datengrenzen, Benchmark/Hands-on und erster Nutzerreise gestellt; Antworten ausstehend. Interviewnotizen: discovery/radar-interview-roadmap.md. Noch keine Ready-Anforderungen/Umsetzung; bestehende App unverändert.

## Planungsentwurf nach Radar-Interview
Fünf Antworten eingearbeitet. Methodikreise und Bewertungs-/Interview-/Roadmap-Entwurf in planning/radar-interview-roadmap.md; noch Draft. Genaues Abgabedatum/Interviewfenster und Hands-on-Kriterien offen. Externe Interviewmethodenquellen konnten wegen 403 nicht gelesen werden; kein empirischer Validierungs-/Benchmarkclaim. Nur Planungsdateien geändert, keine Anwendung/Deployment. Nächster Schritt: Folgeantworten einarbeiten, Skalenanker und Zielbild konkretisieren, prüfbare REQ/AC refinieren.

## Bestätigter Zeitrahmen und Hands-on-Prinzip
Interviewstart 19.10.2026, Ergebnis-/Berichtsabgabe 30.11.2026. Hands-on bedeutet zweckmäßige, verhältnismäßige Lösungen; Excel kann Zielbildniveau erfüllen, Toolausbau ist kein Selbstzweck. Planungsentwurf um Kalenderfenster, Skalenentwurf und Draft-REQ-009/010/011 erweitert; Backlog ergänzt. Architektur-/QA-Refinement und fachliche Review der Skalen/Kriterien als nächster Schritt. Kein Anwendungscode, Commit/Push oder Deployment ausgeführt.

## CHG-009 – neue Version 0.2.0
Nutzer beauftragt Umsetzung. Radar mit manueller begründeter Wissens-/Leistungsbewertung und Geschichte, Bereichsfragen/Leitfadenkopien, bestätigte Folgeaktivitäten und moderne Gantt-/Flow-Roadmap implementiert. Lokale geschützte App und synthetische Pages-Vorschau nutzen gemeinsame UI. Build/Typecheck/Lint, neue Browserreise und zwei Bestands-E2E PASS; zusätzliche Backendvalidierung PASS. Neue Screenshots tatsächlich gesichtet, Details und NOT RUN in qa/CHG-009.md. Erste Kriterien-/Roadmapversion, keine vollständige REQ-/MVP-Abnahme. Private Interviewdateien/Minutes weiterhin nicht implementiert oder hochgeladen. Nächster Schritt: Nutzerreview der neuen Ansichten, danach Kriterien/Leitfragenstatus, Abhängigkeiten und Berichtskapitelworkflow vertiefen.

## CHG-010 – zielgruppenspezifische Interviewleitfäden 0.2.1
Radar und Interviewmethodik auf ein abgegrenztes Rauchmelder-Produktportfolio aus Sicht des Produktmanagements geschärft. Portfolio, Roadmap, Produktvorhaben, Übergaben, Entscheidungsrechte, Regulatorik und schlankes Nachhalten bilden den gemeinsamen Kern. Zehn Zielgruppen besitzen eigene Vertiefungen. Ein bestätigter Zielgruppenwechsel baut ausschließlich die aktive Sitzungskopie neu auf; Abbruch und bestehende v1/v2-Sitzungen bleiben erhalten. Pages-Browserreise mit Persistenz, Druck und Mobile PASS; Screenshots CHG-010 gesichtet. Produktions-/QA-Build, zwei geschützte E2E, Neustart-Persistenz und serverseitige Zielgruppenvalidierung PASS. Fachliche Gesprächspilotierung bleibt offen.
