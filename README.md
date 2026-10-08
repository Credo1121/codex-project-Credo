# ORG COCKPIT – persönlicher Analysearbeitsplatz

**[Interaktive Frontend-Vorschau öffnen](https://credo1121.github.io/codex-project-Credo/)** · [GitHub-Pages-Veröffentlichung](PAGES.md)

Die neue Version ergänzt Analyse-Radar, manuelle begründete Bewertungen, gezielte Ablauf-/Vertiefungsfragen und eine Gantt-Roadmap. Die Pages-Vorschau verwendet ausschließlich Browserdaten, ohne Login oder Backend. Die folgende Dokumentation beschreibt die zusätzlich erhaltene vollständige App.
Erster vertikaler Lieferabschnitt: geschützter Einzel-Admin, Projekt mit Sechs-Wochen-Roadmap, Aufgaben/Checklisten, Marktmanagement-Sitzung, eigener editierbarer Leitfaden mit Druckansicht und getrennte Nachbereitung/Folgeaufgaben. Dauerhafte lokale SQLite-Speicherung.

Noch kein vollständiges MVP: weitere Rollen/Methodikinhalte, Ergebnis-/Berichtsvorlagen, zulässige Notizen/Referenzen und Backup/Restore folgen. Kein Deployment ausgeführt.

Für die erste lokale Einrichtung: **[START-HIER.md](START-HIER.md)**.

## Im Browser mit GitHub Codespaces

**[Codespaces-Startanleitung](CODESPACES.md)**: GitHub → Code → Codespaces → Create codespace on main. Einrichtung und App-Start erfolgen im Browserterminal. Port 3000 privat lassen. Kein lokaler Node.js-Start auf deinem Mac erforderlich.

## Von GitHub auf dem Mac starten

Repository klonen und in den App-Ordner wechseln:

```sh
git clone https://github.com/Credo1121/codex-project-Credo.git
cd codex-project-Credo
```

Alternativ auf GitHub **Code → Download ZIP** wählen und vollständig entpacken. Danach der [macOS-Startanleitung](START-HIER.md) folgen. Die App läuft auf deinem Mac unter `http://localhost:3000`; GitHub hostet den Quellcode. Zugangsdaten und Datenbank werden erst lokal angelegt.

## Lokal starten
Node 24 und npm. In diesem Checkout arbeiten; Cloudtasks sind bereits isoliert, kein zusätzliches Git-Worktree nötig.

1. `npm ci`
2. `npm run local:setup` erstellt eine neue `.env.local` mit zufälligem Serversecret und leeren Loginfeldern; vorhandene Dateien werden erhalten. Eigene ADMIN_EMAIL/ADMIN_INITIAL_PASSWORD lokal eintragen. Passwort 12–128 Zeichen; Secrets niemals teilen oder committen.
3. `git check-ignore .env.local` muss `.env.local` ausgeben.
4. `npm run admin:init` einmalig ausführen. Bestehender Admin wird nicht überschrieben.
5. ADMIN_INITIAL_PASSWORD aus `.env.local` entfernen; BETTER_AUTH_SECRET erhalten.
6. `npm run build`, dann `npm start` (Loopback-Port 3000, BETTER_AUTH_URL muss zur im Browser verwendeten Adresse passen).

Datenbank: DATABASE_PATH, standardmäßig `.data/workspace.sqlite`. Datei und `.data` nie ins Git. Prozesse müssen nach Rechnerneustart neu gestartet werden; Daten/Admin bleiben in SQLite. Für Entwicklung `npm run dev`.

Passwortreset: Server stoppen, ADMIN_EMAIL und ein neues ADMIN_INITIAL_PASSWORD in `.env.local` setzen; `npm run admin:reset`; danach Initialpasswort entfernen und Server neu starten. Sessions werden widerrufen. Keine E-Mail-Wiederherstellung.

## Reproduzierbare synthetische QA
Niemals gegen eine Nutzer-/Produktivdatenbank testen.

- `npm run qa:prepare` legt einmalig `.env.qa.local` und `.data/qa.sqlite` an und verweigert Überschreiben vorhandener QA-Umgebung. Zufällige Testzugangsdaten ausschließlich in ignorierten Umgebungsvariablen, nicht in Quellcode oder Fixtures.
- `npm run qa:build`, `npm run qa:serve` in einem Terminal.
- Chromium verfügbar machen; CHROMIUM_PATH serverseitig setzen, falls nicht `/usr/bin/chromium`. `npm run test:e2e` in zweitem Terminal. Der Test löscht ausschließlich Projekte und Loginzähler der ausdrücklich geprüften QA-Datenbank, setzt das synthetische Adminpasswort zurück und aktualisiert die QA-Umgebung. Browsertraces deaktiviert, damit Zugangsdaten nicht gespeichert werden.
- QA-Server kontrolliert stoppen und mit `npm run qa:serve` erneut starten; `npm run qa:retained` prüft den erhaltenen Projektablauf ohne neue Projektanlage.
- `npm run typecheck`, `npm run lint`; `npm audit --omit=dev`.

Evidenz: docs/evidence/REQ-008. QA-Ergebnisse/Grenzen: docs/qa/S1-results.md. Nutzer-OS und weitere Browser noch nicht verifiziert. Localhost-Adressen sind keine veröffentlichten Vorschauen.

## Neue Analyseansichten

- **Analyse-Radar:** Informationsabdeckung (0–3) und Leistungsfähigkeit (1–4) getrennt; unbekannt/nicht anwendbar, Belegstatus, Begründung und Bewertungsverlauf. Ein Leitkriterium je Bereich als erster Stand; praxisorientiertes Zielbild, kein empirischer Benchmark.
- **Interviewführung:** Radarbereich öffnet eine eigene Fragenkopie mit konkreten Ablauf-/Entscheidungs-/Tool-/Nachhaltefragen; Sitzungen und Zielgruppen auswählbar, Druckansicht. Keine vertraulichen Minutes/Uploads implementiert.
- **Roadmap:** überlappende Arbeitsfenster, Aufgabentermine und Sitzungen/Meilensteine; Aufgaben öffnen direkt, alternativ Listenansicht. Balken sind vorgeschlagene Fenster, keine automatisch validierten Ergebnisse.

Bereits gespeicherte Projekte/Leitfäden werden erhalten. Für das neue synthetische Beispiel mit 19.10.–30.11.2026 in der Pages-Vorschau bewusst „Beispiel zurücksetzen“ wählen (löscht dortige Vorschauänderungen). Neue lokale Projekte beginnen mit unbekannten Bewertungen, ohne synthetische Kundenbefunde. Kalender und Vergleich sind fachlich weiterhin zu reviewen; Live-Pages-Deployment ist nicht aus der Cloud verifiziert.
