# QA – erster funktionierender Interviewabschnitt
2026-10-08 · geprüfte Linux-Cloudinstanz; Node 24.19.0, npm 11.9.0, Next 16.4.0, Better Auth 1.7.7, better-sqlite3 13.0.3, Chromium 151. Uncommitted Branch work, kein Commit vorhanden. Exakte Anwendungsbasis/Zeitpunkte: ../evidence/REQ-008/manifest.json.

Ergebnis: PASS für die unten tatsächlich verifizierte Kernreise und Authprüfungen. Vollständiges S1-/MVP-Done nicht behauptet: zusätzliche AC/Module und manuelle Prüfungen bleiben offen. Rollenwechsel desselben Modells, kein unabhängiges externes Review. Fachliche Abnahme ausstehend.

## Tatsächliche Prüfungen
| Prüfung | Ergebnis/Evidenz |
|---|---|
| npm run qa:build | PASS, Produktionsbuild einschließlich TypeScript; letzter Build nach Interviewzählungskorrektur |
| npm run typecheck | PASS |
| npm run lint | PASS mit 3 Warnungen zu bewusster vollständiger Navigation bei Login/Logout/401; 0 Fehler |
| npm run test:e2e | PASS, 2 ausgeführte Tests, letzter vollständiger Lauf 8,4 s; vor abschließender reiner Interviewzählungsbeschriftung |
| npm run qa:retained | PASS auf finaler Anwendungsbasis nach kontrolliertem Prozessneustart; zusätzlich Übersicht Desktop/Mobile neu aufgenommen |
| npm audit --omit=dev | PASS, 0 bekannte gemeldete Schwachstellen in Produktionsabhängigkeiten; kein allgemeiner Sicherheitsnachweis |
| git check-ignore .env.local .env.qa.local .data/qa.sqlite | PASS, alle ausgeschlossen; kein Commit erstellt |
| Öffentliche .next/static-Artefakte auf Runtime-Authsecret/QA-Passwort durchsucht | PASS, 12 Dateien auf der Basis vor reiner Zählungsbeschriftung; kein Secret ausgegeben |
| Druck | 8 gewählte Fragen in richtiger Reihenfolge, 2-seitiges A4-PDF; beide PDF-Seiten gerendert und tatsächlich gesichtet, keine abgeschnittenen Fragen |

## AC-Abdeckung und Grenzen
| REQ/AC | Verifiziert | Offen/NOT RUN |
|---|---|---|
| 001 AC-01–06 | geschützte Seiten/API, Login neutral, Signup 404, Logout, Sessionablauf, 5/Minute-Loginlimit, HttpOnly/SameSite/8-h-Cookie, wiederholte Initialisierung verweigert, Reset widerruft Sessions, Admin nach Neustart, Secretignore | Secure-Cookie unter echtem HTTPS nicht ausgeführt; nicht lokales Betriebsmodell |
| 002 AC-01–06 | Leerzustand, Anlage, sechs Phasen, persistierte Aufgaben, sichtbar erklärte Fortschrittsformel und sortierte Folgeaufgabe | Bearbeitungs-Grenzfälle/Startänderung und leere Fortschrittsbasis nicht vollständig getestet; Entscheidungen/Hindernisse noch ohne Editor |
| 003 AC-01–04 | Marktmanagement-Arbeitspaket/Checkliste, Persistenz und 409-Revisionskonflikt, ungültige Felder 400 | weitere Vorlagenlinks in S2/S3; projektfremde ID und Konflikt-UX nicht vollständig E2E geprüft |
| 004 AC-01–07 | Sitzung, Fragenauswahl/-text/-reihenfolge, eigene Kopie, Druck, getrennte Nachbereitung, Folgeaufgabe und Reload/Neustart | Vorlagenänderungstest benötigt S2-Editor; leere Druckauswahl, Netzwerkfehler/Sessionablauf mit offenem Entwurf und Doppelanlage nicht vollständig UI-getestet |
| 008 AC-01–05 | tatsächliche integrierte Browserreise, kein horizontaler Seitenüberlauf in Übersicht/Interview, reale gesichtete Desktop-/Mobile-Aufnahmen, Eingabevalidierung, Reload/Neustart | vollständige manuelle Tastatur-/Fokusprüfung, automatisierte Accessibilityprüfung, alle Lade-/Fehlerzustände und Browser-/OS-Matrix NOT RUN |
| 005/006/007 | konzeptionell spezifiziert | weitere Methodik/Rollen, Ergebnis-/Berichtsvorlagen, Notizen/Referenzen und Backup/Restore noch nicht umgesetzt |

## Gesichtet
Login Desktop/Mobile und neutraler Loginfehler; Projekt-Leerzustand Desktop/Mobile; Übersicht Desktop/Mobile; Arbeitspaket Desktop/Mobile; Intervieweditor Desktop/Mobile; Druck; Übersicht und getrennte Nachbereitung nach Neustart. Dateinamen, Routen, Viewports und Aufnahmezeitpunkte im Manifest. Übersichtsaufnahmen nach Neustart zeigen finale Zählung. Frühere overview-Aufnahmen zeigen Vorgängerbeschriftung und werden nicht als finale Reviewaufnahme verwendet.

Befunde behoben: BUG-001 Requestwrapper beim Login; BUG-002 Request-ID im Fachobjekt. Sichtkorrekturen: mobile Navigation/Abmeldung, größere Fragenfelder und Interviewgesamtzahl statt falsch „geplant“. QA-Harness: native Node --env-file-Flags nicht über Next-Worker weiterreichen; separater Launcher lädt Runtimeenv vor Spawn. Wiederanmeldungsprüfer benötigt absolute API-URL ohne Playwright-baseURL; korrigiert und erfolgreich erneut ausgeführt.

Keine Screenshots oder Testdaten mit Kundeninhalten; zufällige Testzugangsdaten ausschließlich in ignorierter .env.qa.local. Native Datumsfelder folgen dem Browser-/Plattformformat; die gespeicherten Werte sind ISO-Date.

Nächster Schritt: Requirements-Review mit Nutzer anhand Screenshots; danach verbliebene S1-Grenzfälle/Bedienbarkeit abschließen, anschließend S2. Kein Deployment.
