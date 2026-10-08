# Priorisiertes MVP-Backlog
REQ-001–004/008 sind Ready; REQ-005–007 Draft. Tatsächliche Umsetzung und Abdeckung siehe Projektstand/QA. Reihenfolge nach Kernnutzen, Zugangs-/Datenrisiko und Abhängigkeiten; keine UI-only-Lieferung.

| Abschnitt | Priorität | Fachliches Ergebnis | Anforderungen | Abhängigkeit |
|---|---|---|---|---|
| S1 | P0 | Vollständige gespeicherte Interviewreise Marktmanagement einschließlich Login, Projektanlage, Roadmap, Arbeitspaket, eigener Fragenkopie, Druck, Nachbereitung und Folgeaufgabe | REQ-001–004, REQ-008 | Architektur/Verträge/Auth/Persistenz refinieren |
| S2 | P1 | Wiederverwendung: alle Perspektiven, alle Rollenvertiefungen und editierbare Methodik ohne Überschreiben bestehender Kopien | REQ-005, REQ-002/004 | S1 |
| S3 | P1 | Leere Ergebnis-/Berichtsstrukturen nutzen, zulässige Notizen/Referenzen verfolgen, Kapitelvorbereitung sichtbar machen | REQ-006, REQ-007 AC-01/02 | S1; Methodik aus S2 |
| S4 | P1 | Manuelle Sicherung und nachgewiesene lokale Wiederherstellung | REQ-007 AC-03–05 | Persistentes Modell; muss vor „MVP fertig“ abgeschlossen sein |

S1 darf eine repräsentative Marktmanagement-Vertiefung nutzen; der MVP bleibt ohne S2–S4 unvollständig. Keine Erweiterung vor vollständiger S1-Reise. UI-Evidenz und Regression pro Abschnitt.

Später: generisches methodisches AI-Sparring, weitere Methodiken, zusätzliche Exporte, Zusammenarbeit. Jeder Ausbau erfordert neue Klärung der Daten-/Zugriffsgrenzen.
Nicht-MVP: Kundenimport, Interviewanalyse, automatische Ursachen, Portal, Unternehmensintegrationen. Kein kostenpflichtiger Dienst ausgewählt.

## Nächster Erweiterungswunsch: Meeting-Minutes
Quelle: Nutzerfeedback nach Review von ORG COCKPIT. Wunsch: Minutes aus Meetings hochladen oder direkt notieren und später für Analysen verwenden. Zunächst ausdrücklich zurückgestellt zugunsten des lokalen Grundlagenbuilds. Status Discovery offen, kein Ready und kein Code.

Neue Datengrenze klären: generische/anonymisierte oder vertrauliche Meetinginhalte; zulässige Dateiformate/Umfang und Personenbezug; Verknüpfung mit Sitzung/Projekt; Speicherung/Löschung/Sicherungen; Nutzung für manuelle Analyse versus AI. Keine externe AI-Verarbeitung damit autorisiert. Bisherige Upload-/Inhaltsgrenzen bleiben im ausgelieferten Grundlagenbuild aktiv, werden bei Refinement des neuen Wunschs ausdrücklich neu bewertet.

## Nächste Planungsiteration – Radar, Interview, Roadmap
Neue Priorität aus Nutzerfeedback; Planung vor Umsetzung. REQ-009/010/011 Draft. Zuerst Fragen-/Zielbildkriterien und ergebnisorientierte Roadmap gemeinsam refinieren, danach eine durchgängige synthetische Reise Wissenslücke → Interview → manuelle Nachbereitung → bestätigte Folgeaufgabe. Interviewstart 19.10.2026, Ergebnisse 30.11.2026; Vorschläge für Arbeitsfenster siehe planning/radar-interview-roadmap.md. Hands-on = zweckmäßige Wirkung mit verhältnismäßigem Aufwand, nicht Tool-/Gremienausbau. Empirischer Benchmark später mit belegter Vergleichsgrundlage. Bestehende S1–S4 bleiben erhalten, Reihenfolge im Refinement entsprechend neu priorisieren; keine stillschweigende Accepted-/Done-Aussage.

## P0-Ergänzung – produktmanagementzentrierte Rollenleitfäden
REQ-012 Ready: Rauchmelder-Produktportfolio, Roadmap und konkrete Produktvorhaben als Analyseanker. Gemeinsamer PM-Kern plus zehn unterscheidbare Rollenvertiefungen. Zielgruppenwechsel baut ausschließlich die geöffnete Sitzung nach ausdrücklicher Bestätigung neu auf. Danach technische/fachliche Review; empirische Validierung und echte Interviewinhalte bleiben außerhalb dieses Slices.
