# Discovery: Persönlicher Arbeitsplatz für Organisationsanalysen
Revision: 1 · 2026-10-08 · Quelle: Produktauftrag und drei Antworten im Chat.

## Interviewinput und Verständnis
Business Owner und End User: derselbe verantwortliche Unternehmensberater. Kunden und weitere Berater sind keine MVP-Nutzer. Ihre Perspektiven wurden nicht interviewt und sind für dieses persönliche Werkzeug nicht als validiert anzusehen.

Der Berater führt eine sechswöchige Organisationsanalyse für Produkt- und Marktmanagement in einem regulierten Hardware-/Softwareunternehmen durch. Er benötigt jederzeit Prozessstand, nächste Aktivität, passende Methodik und erwartetes Ergebnis. Der bisherige konkrete Werkzeugablauf und eine quantitative Zeitersparnis sind nicht beschrieben; keine Behauptung dazu.

Kernreise: Projekt öffnen → Interviewaufgabe öffnen → Ziele/Checklisten/Fragen nutzen → projektspezifischen Leitfaden speichern/drucken → Sitzung aktualisieren → Nachbereitung und Folgeaufgaben verfolgen. Erfolg wird zunächst am dauerhaft gespeicherten, vollständig ausführbaren Ablauf gemessen.

## Bestätigte Entscheidungen
- Ein Admin, Login, kein Kundenportal, keine Registrierung, kein komplexes Rollenmodell.
- Zunächst lokal auf dem eigenen Rechner; kein Deployment beauftragt.
- Dauerhafte zentrale Datenbank; manuell auslösbare Sicherung, dokumentierte Wiederherstellung; kein Offlinebetrieb. „Zentral“ bezeichnet eine autoritative Datenhaltung, nicht Cloudhosting oder zugesicherten Fernzugriff.
- Erlaubt: neutrale Projektorganisation, anonymisierte fachliche Notizen, neutrale Referenzkennungen. Keine Namen von Interviewpartnern abfragen.
- Verboten: Kundendokumentuploads, Transkripte, Kundensystemintegration, automatische Interviewauswertung, externe AI-Verarbeitung. Keine ausgefüllten Analysevorlagen standardmäßig speichern.
- Next.js/TypeScript, Node.js, bevorzugt integrierte serverseitige Geschäftslogik. Datenbank und konkrete Versionen entscheidet Architektur.
- Moderne, futuristische, zugleich cleane deutsche Oberfläche; ruhige helle Arbeitsflächen mit zurückhaltenden Akzenten, Desktop zuerst.

## Offene Entscheidungen und Annahmen
- Zielbetriebssystem und installierbare Runtime: vor lokalem Installationsrunbook klären; Cloud-Linux ist kein Nachweis für den Nutzerrechner.
- Konkrete Zielbrowser, Sessiondauer und Loginbegrenzung: im Architekturrefinement als Vorschläge ausarbeiten; nicht als bereits vom Nutzer gewählt ausgeben.
- Leistungsziel, Lastprofil, Verfügbarkeit, RPO/RTO: keine zugesicherten Werte. Zunächst Testmessungen protokollieren; Performancefreigabe ohne Ziel BLOCKED.
- Lösch-/Aufbewahrungskonzept: keine automatische Löschung im ersten Slice. Vor Projektlöschung/Archivierung klären. Lokale Backups können ältere Inhalte enthalten.
- Zeitzone: Vorschlag Europe/Berlin für Sitzungstermine, unabhängig vom Rechner; Architektur muss Sommerzeit und Anzeige dokumentieren.
- Anonymisierung ist eine Eingabeverantwortung; das Produkt darf keine automatische Anonymisierung oder rechtliche Konformität behaupten.

Weitere Interviewrunden sind für den bekannten Kernablauf nicht erforderlich. Neue materielle Interpretationen werden gezielt zurückgegeben.
