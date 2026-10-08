# Schlanke fachliche Datenstruktur
Konzeptionell; keine Datenbankentscheidung oder fertiges technisches Schema.

| Objekt | Wesentliche Inhalte | Beziehungen/Lebenszyklus |
|---|---|---|
| AdminAccount | ID, E-Mail als Login, Passwort-Hash | genau ein Admin; nur explizite Initialisierung/Reset |
| Session | Identität, Ablauf, Widerruf | Admin; technische Ausgestaltung Architektur |
| Methodikvorlage/Version | Titel, Perspektiven, Roadmap, Fragen, Ergebnis-/Berichtsstrukturen | editierbar; Herkunft von Kopien nachvollziehbar |
| Projekt | neutrale Kennung/Titel, Ziel, Scope, Start/Ende, aktuelle Phase | eigene Kopien; keine Kundennamenfelder |
| Projektphase | Titel, Reihenfolge, Zeitraum | sechs initiale, anpassbar; Projekt |
| Meilenstein | Titel, Termin, Status | Projekt/Phase |
| Aufgabe | Titel, Zweck, Termin, Status, Vorbereitung, erwartetes Ergebnis | Projekt/Phase, Perspektive, Leitfaden-/Vorlagenlinks; optionale Sitzungsherkunft |
| Checklisteneintrag | Text, Reihenfolge, erledigt | Aufgabe oder Sitzung; Vorbereitung/Nachbereitung getrennt |
| Analyseperspektive | Zweck, Fragen, Schritte, Belege/Messgrößen, Ergebnisse, Validierung | Vorlage und Projektkopie |
| Sitzung | neutrale Bezeichnung, Zielgruppe, Termin, Ziele, Terminstatus | Projekt, eigene Leitfadenkopie; keine Teilnehmernamen/Antworten |
| Leitfadenkopie/Frage | Herkunftsversion, Fragewortlaut, Reihenfolge, Auswahl | Projekt/Sitzung; bestehende Texte unabhängig von Vorlage |
| Entscheidung/Hindernis | neutraler Titel, organisatorische Beschreibung, Status, Termin | Projekt, optionale Aufgabe; keine Kundenbefunde |
| Notiz | anonymisierter Text, Kontext | Projekt/Aufgabe/Sitzung; ausdrücklich keine Transkripte |
| Referenzkennung | neutrale Zeichenfolge, optional neutraler Zweck | Kontext; keine Datei-/URLintegration |
| Ergebnisvorlage | Titel, leere strukturierte Abschnitte | Methodik/Projektkopie; keine ausgefüllten Analyseobjekte |
| Berichtskapitel | Titel, Reihenfolge, vorbereitende Aufgaben | Projekt; keine Berichtsbefunde |

Alle Projektobjekte gehören genau einem Projekt; Links dürfen keine projektfremden Objekte verbinden. IDs, Änderungsrevision und Zeitstempel für konsistente Updates sind technische Vorschläge. Erledigte Sitzung ist unabhängig von Nachbereitung/Folgeaufgaben. Datenquelle ausschließlich Admin-Eingaben und synthetische Methodik.

Persönliche Daten: Admin-E-Mail; Sitzungs-/Notizfelder könnten versehentlich Personenbezug enthalten. Eingabehinweise und fehlende Namensfelder reduzieren das Risiko, garantieren keine Anonymität. Keine rechtliche Konformitätsbehauptung.

Aufbewahrung/Löschung nicht festgelegt: keine automatische Löschung. Projektlöschung erst nach gesonderter Klärung; Backups haben eigenen Lebenszyklus. Zugriff auf sämtliche Objekte nur Admin, keine Mandanten oder zusätzliche Rollen. Sicherungen brauchen denselben Schutz wie die Datenbank.
