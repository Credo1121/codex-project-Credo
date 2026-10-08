# Übergabe: S1 zuerst
Status: Requirements-Draft, Architektur/Refinement ausstehend; keine Produktabnahme oder Implementierungsfreigabe aus QA behauptet.

## Nächster Skill: web-architecture
Vor Rollenwechsel SKILL.md tatsächlich lesen. Auftrag: REQ-001–004 und REQ-008 für S1 gemeinsam mit web-requirements und frühzeitig web-qa refinieren; UX-/Datenfragen aus web-frontend/web-backend einbringen. Keine neue Vollbefragung.

Ziel: integrierte Next.js-/TypeScript-/Node.js-Anwendung, zunächst lokal, Einzel-Admin, dauerhafte Speicherung. Architektur bestimmt konkrete Versionen, Datenbank und etablierte Authentifizierung; kein separater Backend-Service ohne Begründung. Kein Deployment oder kostenpflichtiger Dienst beauftragt.

Artefakte: Discovery, journeys.md, backlog.md, domain-model.md, methodology-scope.md, REQ-001–008, traceability.md.

Zu liefern: docs/architecture.md, langlebige ADRs, versionierte Daten-/Serververträge mit einer Schemaquelle, Auth- und Sicherheitsmaßnahmen, Migration/Backup-Konzept. Serverseitige Rechte je Operation, Loginbegrenzung, Cookie-/Sessionregeln, CSRF, Inputlimits, Konflikt-/Wiederholungsverhalten und redigierte Logs festlegen. ASVS-Version/Kontroll-IDs nur aus verifizierter Quelle. Keine eigene Kryptografie.

Offene Detailentscheidungen: Zielbetriebssystem vor nutzerseitiger Installationsvalidierung; Zeitzonenmodell; konkrete Sessiondauer/Loginlimits; Browsermatrix; Messziele. Reverseble Implementierungsdetails nach begründeter Architekturentscheidung wählen; materielle fachliche Abweichungen gezielt zurückgeben.

## Auftrag web-backend nach Refinement
Persistente Modelle, Admin-Initialisierung/Reset, Authz für Seiten/Daten/Mutationen, Inputvalidierung, Projektanlage/Roadmap-Kopie, Sitzung/Leitfadenkopie, Status/Checklisten/Folgeaufgaben. Echte isolierte Datenbanktests für Persistenz, Constraints und Auth. Bestehenden Admin nie unbemerkt überschreiben. .env.example ohne Secrets; echte .env.local ignorieren und vor erstem Commit prüfen. Keine ausgefüllten Analyseobjekte implementieren.

## Auftrag web-frontend nach Refinement
Deutsche Login-/Leeransichten, Projektübersicht mit nächsten Schritten, Roadmap-Arbeitspaket, Leitfadeneditor/Druck, Sitzung/Nachbereitung. Moderne futuristische Akzente auf ruhigen hellen Flächen. Tatsächliche Verträge integrieren, Fehler/Sessionablauf/ungespeicherte Eingaben behandeln, Tastatur/Fokus und Mobile unterstützen. Screenshotzustände siehe journeys.md; reale Aufnahmen erzeugen und sichten.

## Auftrag web-qa
Vor Diff Kriterien lesen, Testbarkeit früh prüfen und Matrix pro AC erstellen. J1 vollständig durch tatsächlichen Server und Datenbank prüfen, dann Reload/Neustart, direkte unauthentifizierte Requests, Reset/Init, Sessionablauf, Vorlagenisolation, Mehrtabkonflikt, doppelte Aktionen und Druck. Synthetische Daten ausschließlich. Screenshots Desktop/Mobile samt Druck prüfen und Codebasis dokumentieren. Rollenwechsel im selben Modell ist keine unabhängige externe Prüfung.

## Qualitätsziele und Messumgebung
- Integrität: alle bestätigten S1-Änderungen nach Reload/Serverneustart erhalten; fehlgeschlagene Änderungen nicht als gespeichert anzeigen.
- Zugriff: kein Projektinhalt oder Mutation ohne gültige serverseitige Anmeldung, inklusive direkter Requests.
- UX: repräsentative 1440×900/390×844; Tastatur, Fokus, Kontrast und Semantik manuell/automatisiert prüfen; WCAG 2.2 AA als Orientierung.
- Recovery: manuelle Sicherung in isolierter Instanz wiederherstellen und fachliche Gleichheit prüfen; RPO entspricht Sicherungszeitpunkt, RTO offen.
- Performance: Architektur definiert repräsentative Datenmenge/Hardware und misst P95 für Übersicht und Speichern. Lastprofil/Zielwert offen; ohne vereinbarten Zielwert kein Performance-PASS.
- Verfügbarkeit: lokaler Prozessbetrieb, kein Hosting-SLA. Unterstützte Browser/OS müssen vor entsprechender Kompatibilitätsaussage feststehen.

## Gate
Ready erst nach dokumentiertem Refinement, geklärten materiellen Abhängigkeiten und beobachtbaren Verträgen. Accepted ausschließlich nach Nutzerabnahme. Keine Screenshots/Tests vorhanden: NOT RUN. Keine Anwendung oder Laufzeitfunktion als fertig darstellen.
