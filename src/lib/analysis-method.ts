const perspectives=['Markt- und Kundenverständnis','Produktstrategie und Portfolio','Produktdefinition und Wirtschaftlichkeit','Produktentstehung und Markteinführung','Lebenszyklusmanagement','Organisation, Entscheidungsrechte und Zusammenarbeit','Kapazität und Priorisierung','Informationen und Toollandschaft'];
export const analysisAreas=perspectives.map((name,i)=>({name,short:['Markt & Kunde','Strategie & Portfolio','Definition & Wert','Entstehung & Launch','Lebenszyklus','Organisation','Kapazität','Information & Tools'][i],criterion:[
 'Marktbedarfe sind nachvollziehbar und werden in überprüfbare Produktentscheidungen übersetzt.',
 'Vorhaben werden anhand nachvollziehbarer Ziele ausgewählt, überprüft und bei Bedarf beendet.',
 'Anforderungen und wirtschaftliche Annahmen sind ausreichend geklärt, bevor verbindlich zugesagt wird.',
 'Übergaben und notwendige Freigaben liefern dem nächsten Arbeitsschritt verlässliche Grundlagen.',
 'Änderungen, Rückmeldungen und Abkündigungen werden über den Produktlebenszyklus nachgehalten.',
 'Entscheidungen und Zuständigkeiten sind im Alltag klar; Ausnahmen lassen sich praktikabel klären.',
 'Zusagen passen zur verfügbaren Kapazität; Umpriorisierung macht Auswirkungen sichtbar.',
 'Verbindliche Informationen sind auffindbar, aktuell und für den nächsten Beteiligten nutzbar.'
 ][i],question:[
 'Nehmen wir einen konkreten Marktbedarf: Wie wurde er aufgenommen, geprüft und in eine Produktentscheidung übersetzt?',
 'Wie kam ein konkretes Vorhaben ins Portfolio? Welche anderen Vorhaben wurden dafür zurückgestellt?',
 'Welche Anforderungen und Annahmen lagen bei der Zusage für ein konkretes Produkt vor?',
 'Gehen wir einen Produktverlauf durch: Was wurde jeweils übergeben, und was brauchte der nächste Beteiligte?',
 'Wie wurde eine konkrete Rückmeldung aus dem Betrieb aufgenommen und bis zur Produktänderung verfolgt?',
 'An welchen Stellen dieses Vorhabens wurde entschieden oder freigegeben? Wer konnte das verbindlich tun?',
 'Wie wurde für ein konkretes Vorhaben Kapazität zugesagt? Was änderte sich bei einer neuen Priorität?',
 'Wo fanden Sie die Informationen für Ihren nächsten Arbeitsschritt? Welche Fassung war verbindlich?'
 ][i],probe:[
 'Welche Rückmeldung wurde später genutzt, um die Annahme zu prüfen?',
 'Wann und anhand welcher Information wurde die Auswahl erneut überprüft?',
 'Wie wurden Änderungen an Annahmen oder Anforderungen sichtbar und entschieden?',
 'Welche Abschnitte liefen direkt weiter, und wo entstanden Wartezeiten? Worauf wurde gewartet?',
 'Woran war erkennbar, dass der offene Punkt bearbeitet und die Änderung abgeschlossen war?',
 'Wie erfuhren andere Beteiligte das Ergebnis? Wie wurden noch offene Entscheidungen nachgehalten?',
 'Wie wurden Auswirkungen auf andere Zusagen erfasst und mit den Betroffenen geklärt?',
 'Wie wurden Änderung, Version und Freigabe kenntlich? Wo musste Information erneut eingegeben werden?'
 ][i]}));
export const practicalQuestions=[
 ['Ablauf · 15 Min.','Wie kam der Bedarf zu Ihnen, was haben Sie daraus erstellt und wer hat anschließend damit gearbeitet?'],
 ['Entscheidungen · 10 Min.','Welche Informationen lagen bei den notwendigen Entscheidungen vor, und wie wurde das Ergebnis weitergegeben?'],
 ['Wartezeiten · 10 Min.','Welche Abschnitte liefen direkt weiter, und wo lagen zwischen zwei Schritten Wartezeiten?'],
 ['Risiken · 10 Min.','Wann wurden Risiken sichtbar, wer nahm sie auf und wie wurde über den Umgang entschieden?'],
 ['Informationen · 10 Min.','Wo wurde der verbindliche Arbeitsstand dokumentiert und wie konnten andere Beteiligte Änderungen erkennen?'],
 ['Nachhalten · 5 Min.','Wie wurde geprüft, dass vereinbarte Arbeit abgeschlossen war? Wer kann den Ablauf aus einer anderen Sicht ergänzen?']
];
