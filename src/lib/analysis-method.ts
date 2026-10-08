import type { InterviewTarget } from './interview-roles';

const perspectives = ['Markt- und Kundenverständnis','Produktstrategie und Portfolio','Produktdefinition und Wirtschaftlichkeit','Produktentstehung und Markteinführung','Lebenszyklusmanagement','Organisation, Entscheidungsrechte und Zusammenarbeit','Kapazität und Priorisierung','Informationen und Toollandschaft'];

export const analysisAreas = perspectives.map((name, i) => ({
  name,
  short: ['Portfolio & Transparenz','Strategie & Roadmap','Definition & Business Case','Entwicklungssteuerung','Governance & Regulatorik','Launch & Lifecycle','PM-Organisation & Kapazität','Information & Tools'][i],
  criterion: [
    'Das betrachtete Rauchmelder-Portfolio ist mit Status, Varianten, Abhängigkeiten und offenen Entscheidungen transparent.',
    'Die Produktroadmap übersetzt strategische Ziele in nachvollziehbare Prioritäten und realistische Entscheidungen.',
    'Produktdefinition, Nutzen, Wirtschaftlichkeit und Erfolgsmaß sind vor verbindlichen Zusagen ausreichend geklärt.',
    'Produktmanagement steuert Übergaben zur Entwicklung mit klaren Eingaben, Verantwortungen und Abnahmekriterien.',
    'Regulatorik, Qualität und notwendige Freigaben sind früh und schlank in Produktentscheidungen eingebunden.',
    'Markteinführung, Änderungen und Abkündigungen werden über den Produktlebenszyklus verantwortlich gesteuert.',
    'Verantwortung, Entscheidungsrechte und Kapazität im Produktmanagement ermöglichen wirksame Priorisierung im Alltag.',
    'Verbindliche Produktinformationen sind mit angemessen einfachen Mitteln auffindbar, aktuell und nachgehalten.',
  ][i],
  question: [
    'Öffnen wir die aktuelle Portfolioübersicht: Welche Rauchmelder-Produkte, Varianten und laufenden Änderungen steuert das Produktmanagement – und welche Angaben fehlen für eine belastbare Übersicht?',
    'Nehmen wir die aktuelle Produktroadmap: Wie wurde eine konkrete Priorität gesetzt, wer hat sie entschieden und was wurde dafür verschoben?',
    'Nehmen wir ein aktuelles Produktvorhaben: Welche Produktdefinition, wirtschaftliche Annahmen und Erfolgskriterien braucht die nächste verbindliche Entscheidung?',
    'Gehen wir die Übergabe eines aktuellen Vorhabens an Entwicklung oder System Engineering durch: Was liefert das Produktmanagement, wer übernimmt und woran ist eine tragfähige Übergabe erkennbar?',
    'An welchem Punkt eines aktuellen Produktvorhabens werden Qualität, Zulassung und regulatorische Anforderungen eingebunden, wer entscheidet bei Zielkonflikten und wo wird das Ergebnis festgehalten?',
    'Wie werden Markteinführung, Produktänderung oder Abkündigung für ein konkretes Portfolioelement geplant, übergeben und bis zum Abschluss nachgehalten?',
    'Welche Entscheidungen darf das Produktmanagement selbst treffen, wo braucht es andere Rollen und wie werden Kapazitätskonflikte im betrachteten Portfolio gelöst?',
    'Welche Übersicht oder welches Werkzeug ist für Roadmap, Anforderungen, Entscheidungen und Status jeweils verbindlich – und wo entstehen Medienbrüche oder Doppelpflege?',
  ][i],
  probe: [
    'Wer pflegt welchen Stand, in welchem Rhythmus und für welche Entscheidung wird er tatsächlich genutzt?',
    'Welche Information löste die Entscheidung aus, wo ist sie nachvollziehbar und wann wird sie erneut geprüft?',
    'Wer bestätigt die ausreichende Reife und wie werden offene Annahmen sichtbar bis zur Klärung verfolgt?',
    'Wo endet die Verantwortung der übergebenden Rolle, wo beginnt die der übernehmenden Rolle und wer klärt Lücken?',
    'Welche Mindestnachweise helfen wirklich, und welche Abstimmung erzeugt Aufwand ohne zusätzlichen Erkenntnisgewinn?',
    'Welche Übergabepunkte und Abnahmekriterien verhindern, dass offene Punkte zwischen Funktionen liegen bleiben?',
    'Welche einfache Regel würde die häufigste Unklarheit bei Verantwortung oder Priorisierung beseitigen?',
    'Welche Information könnte mit einer einfachen Liste oder Excel verlässlich geführt werden und wo reicht das nicht mehr?',
  ][i],
}));

type QuestionDraft = { group: string; text: string; selected: boolean };

const coreQuestions: QuestionDraft[] = [
  {group:'Einstieg · Portfolio',text:'Bitte öffnen Sie die aktuelle Portfolio- oder Roadmapübersicht und ordnen Sie das betrachtete Rauchmelder-Portfolio ein: Was ist aktiv, was ändert sich und was ist derzeit offen?',selected:true},
  {group:'Konkreter Verlauf',text:'Wählen wir ein aktuelles Produkt, eine Variante oder eine Änderung: Welches Ergebnis soll erreicht werden, wo steht das Vorhaben heute und woran machen Sie das fest?',selected:true},
  {group:'Übergabepunkt',text:'Nehmen wir einen kritischen Übergabepunkt dieses Vorhabens: Was muss die abgebende Rolle liefern, wer übernimmt, und woran erkennt die übernehmende Rolle, dass sie weiterarbeiten kann?',selected:true},
  {group:'Entscheidung & Nachhalten',text:'Welche nächste Produktentscheidung steht an? Wer darf sie treffen, welche Information fehlt noch, wo wird das Ergebnis dokumentiert und wer verfolgt offene Punkte?',selected:true},
];

const roleQuestions: Record<InterviewTarget, QuestionDraft[]> = {
  'Leads Produkt- und Marktmanagement': [
    {group:'Rollenfokus · Führung',text:'Welche Entscheidungen zum betrachteten Portfolio erwarten Sie verbindlich vom Produktmanagement, und welche behalten Sie selbst oder andere Funktionen?',selected:true},
    {group:'Rollenfokus · Priorisierung',text:'Zeigen Sie an der aktuellen Roadmap, wie Sie zwischen Neuprodukt, Variante, regulatorischer Änderung und Lifecycle-Thema priorisieren.',selected:true},
    {group:'Rollenfokus · Konfliktklärung',text:'Wenn Produktmanagement, Entwicklung, Vertrieb oder Qualität unterschiedlich priorisieren: Wer führt zur Entscheidung, bis wann und mit welcher Entscheidungsgrundlage?',selected:true},
    {group:'Optional · Wirksamkeit',text:'Welche wenigen Steuerungsgrößen zeigen Ihnen, ob Produktmanagement das Portfolio wirksam führt?',selected:false},
    {group:'Optional · Vereinfachung',text:'Welche Abstimmung oder Freigabe könnten Sie vereinfachen, ohne Verantwortung oder regulatorische Sicherheit zu verlieren?',selected:false},
  ],
  'Produktmanager': [
    {group:'Rollenfokus · Verantwortung',text:'Für welche Ergebnisse im Lebenszyklus dieses Portfolios tragen Sie persönlich Verantwortung, und an welchen Übergabepunkten ist diese Verantwortung unklar?',selected:true},
    {group:'Rollenfokus · Produktdefinition',text:'Welche Unterlagen oder Übersichten nutzen Sie, um Nutzen, Anforderungen, Wirtschaftlichkeit und Varianten eines aktuellen Vorhabens entscheidungsreif zu machen?',selected:true},
    {group:'Rollenfokus · Steuerung',text:'Wie erkennen und verfolgen Sie Abhängigkeiten, Risiken und offene Entscheidungen bis zur Klärung – und wer erwartet welchen Status von Ihnen?',selected:true},
    {group:'Optional · Lifecycle',text:'Wie entscheiden Sie zwischen Weiterentwicklung, Pflege und Abkündigung eines bestehenden Portfolioelements?',selected:false},
    {group:'Optional · Handlungsfähigkeit',text:'Welche eine Information oder Entscheidung würde Ihre tägliche Steuerung des Portfolios am stärksten erleichtern?',selected:false},
  ],
  'Marktmanager': [
    {group:'Rollenfokus · Marktinput',text:'Welche Marktinformationen liefern Sie regelmäßig für Portfolio und Roadmap, in welcher Form und für welche konkrete Produktentscheidung?',selected:true},
    {group:'Rollenfokus · Übergabe an PM',text:'Wie übergeben Sie eine relevante Marktbeobachtung an das Produktmanagement, und woran erkennen Sie, ob sie bewertet, zurückgestellt oder übernommen wurde?',selected:true},
    {group:'Rollenfokus · Priorisierung',text:'Wenn Marktanforderungen konkurrieren: Nach welchen Kriterien verdichten Sie diese für das betrachtete Rauchmelder-Portfolio?',selected:true},
    {group:'Optional · Rückkopplung',text:'Welche Rückmeldung aus Produktmanagement oder Vertrieb benötigen Sie, um Ihre Annahmen zu schärfen?',selected:false},
    {group:'Optional · Dokumentation',text:'Wo ist der gültige Marktinput auffindbar, und wie werden Änderungen für Beteiligte sichtbar?',selected:false},
  ],
  'SAFe Product Management': [
    {group:'Rollenfokus · Übersetzung',text:'Wie wird die Produktroadmap des betrachteten Portfolios in Program Backlog oder ART-Planung übersetzt, ohne die Produktsicht zu verlieren?',selected:true},
    {group:'Rollenfokus · Abhängigkeiten',text:'Wie werden Hardware-, Software- und Zulassungsabhängigkeiten vor einer Zusage sichtbar und in der Planung berücksichtigt?',selected:true},
    {group:'Rollenfokus · Entscheidungsgrenze',text:'Welche Produktentscheidungen trifft Product Management im SAFe-Kontext, welche bleiben beim Produktmanager und wie werden Überschneidungen geklärt?',selected:true},
    {group:'Optional · Umpriorisierung',text:'Wie gelangt eine geänderte Portfoliopriorität kontrolliert in die laufende Planung und zurück in die Roadmap?',selected:false},
    {group:'Optional · Nutzen',text:'Welche SAFe-Artefakte helfen dem Produktmanagement tatsächlich, und welche werden vor allem für den Prozess gepflegt?',selected:false},
  ],
  'RTE': [
    {group:'Rollenfokus · Abhängigkeiten',text:'Wie werden Abhängigkeiten und Risiken eines Rauchmelder-Vorhabens im ART sichtbar, einem Verantwortlichen zugeordnet und bis zur Klärung verfolgt?',selected:true},
    {group:'Rollenfokus · Hindernisse',text:'Wann wird ein Hindernis zur Produktmanagement-Entscheidung, und wie gelangt es mit Frist und Entscheidungsbedarf zur richtigen Rolle?',selected:true},
    {group:'Rollenfokus · Planänderung',text:'Wie werden Auswirkungen einer geänderten Produktpriorität auf Zusagen, Teams und regulatorische Termine transparent gemacht?',selected:true},
    {group:'Optional · Übergabequalität',text:'Welche Eingaben aus dem Produktmanagement fehlen Teams am häufigsten für eine belastbare Planung?',selected:false},
    {group:'Optional · Vereinfachung',text:'Welche bestehende Synchronisation schafft Klarheit, und welche ließe sich ohne Informationsverlust reduzieren?',selected:false},
  ],
  'Architektur/System Engineering': [
    {group:'Rollenfokus · Eingang',text:'Welche Produktinformationen benötigen Sie, um Varianten, Systemgrenzen und technische Auswirkungen belastbar zu klären?',selected:true},
    {group:'Rollenfokus · Übergabe',text:'Wie prüfen Sie mit dem Produktmanagement, ob eine Übergabe ausreichend ist, und wer verantwortet verbleibende Lücken?',selected:true},
    {group:'Rollenfokus · Entscheidung',text:'Wer entscheidet bei Zielkonflikten zwischen Produktnutzen, Architektur, Aufwand und regulatorischen Anforderungen, und wo ist die Begründung nachvollziehbar?',selected:true},
    {group:'Optional · Änderung',text:'Wie wird die Auswirkung einer Produktänderung auf Hardware, Software und Varianten vollständig ermittelt?',selected:false},
    {group:'Optional · Rückgabe',text:'Welche Ergebnisse geben Sie an das Produktmanagement zurück und welche Entscheidung soll damit möglich werden?',selected:false},
  ],
  'Entwicklung / PO / technische Leads': [
    {group:'Rollenfokus · Arbeitsfähigkeit',text:'Welche Angaben aus dem Produktmanagement müssen vorliegen, damit Ihr Team ein Vorhaben sinnvoll schneiden, planen und beginnen kann?',selected:true},
    {group:'Rollenfokus · offene Entscheidung',text:'Wenn während der Umsetzung eine Produktentscheidung fehlt: Wie wird sie formuliert, an wen übergeben und bis wann nachgehalten?',selected:true},
    {group:'Rollenfokus · Ergebnisübergabe',text:'Welches Ergebnis übergibt Ihr Team zurück, wer nimmt es fachlich ab und wie werden Restpunkte sichtbar?',selected:true},
    {group:'Optional · Änderung',text:'Wie erreicht eine Roadmap- oder Anforderungsänderung das Team, und wie werden Folgen für Termin und Inhalt zurückgespielt?',selected:false},
    {group:'Optional · Verschwendung',text:'Welche Information pflegt Ihr Team doppelt, weil eine verlässliche gemeinsame Sicht fehlt?',selected:false},
  ],
  'Qualität/Zulassung': [
    {group:'Rollenfokus · frühe Einbindung',text:'An welchem Punkt eines Produktvorhabens müssen Qualität und Zulassung beteiligt sein, damit spätere Schleifen vermieden werden?',selected:true},
    {group:'Rollenfokus · Nachweise',text:'Welche Nachweise und Entscheidungen sind für das betrachtete Rauchmelder-Portfolio zwingend, wer liefert sie und wer bestätigt ihre Vollständigkeit?',selected:true},
    {group:'Rollenfokus · Änderung',text:'Wie wird bei einer Produktänderung geprüft, welche Zulassungen, Tests oder Dokumentationen betroffen sind, und wer entscheidet über das weitere Vorgehen?',selected:true},
    {group:'Optional · Übergabe',text:'Was muss das Produktmanagement an Sie übergeben und welchen verwertbaren Status geben Sie zurück?',selected:false},
    {group:'Optional · pragmatische Governance',text:'Welche einfache Checkliste oder Entscheidungsschwelle würde Sicherheit erhöhen, ohne zusätzliche Gremien zu schaffen?',selected:false},
  ],
  'Vertrieb': [
    {group:'Rollenfokus · Roadmapnutzung',text:'Welche Informationen aus Portfolio und Roadmap benötigen Sie für belastbare Aussagen, und wie erkennen Sie, was verbindlich oder noch in Klärung ist?',selected:true},
    {group:'Rollenfokus · Eingang an PM',text:'Wie geben Sie wiederkehrende Anforderungen oder Zusagen strukturiert an das Produktmanagement, damit sie bewertet und priorisiert werden können?',selected:true},
    {group:'Rollenfokus · Entscheidungskommunikation',text:'Wie erfahren Sie, ob ein Produktwunsch übernommen, verschoben oder abgelehnt wurde, und wie wird die Begründung nutzbar festgehalten?',selected:true},
    {group:'Optional · Launch',text:'Welche Übergabe vom Produktmanagement benötigen Sie vor einer Markteinführung, und wer bestätigt die Vertriebsbereitschaft?',selected:false},
    {group:'Optional · Rückmeldung',text:'Welche verdichtete Rückmeldung nach dem Launch hilft dem Produktmanagement bei der nächsten Portfolioentscheidung?',selected:false},
  ],
  'Produktion/Industrialisierung': [
    {group:'Rollenfokus · frühe Einbindung',text:'Wann werden Produktion und Industrialisierung in ein Produktvorhaben eingebunden, und welche Angaben brauchen Sie für eine belastbare Einschätzung?',selected:true},
    {group:'Rollenfokus · Herstellbarkeit',text:'Wie werden Herstellbarkeit, Betriebsmittel, Lieferfähigkeit und Variantenaufwand in einer Produktentscheidung sichtbar gemacht?',selected:true},
    {group:'Rollenfokus · Übergabe zum Launch',text:'Welche Kriterien müssen vor dem Serien- oder Änderungsstart erfüllt sein, wer bestätigt sie und wie werden Restpunkte nachgehalten?',selected:true},
    {group:'Optional · Änderung',text:'Wie gelangt eine Produktänderung kontrolliert in Produktion und Dokumentation, und wer entscheidet bei Termin- oder Kostenkonflikten?',selected:false},
    {group:'Optional · Rückgabe',text:'Welche Rückmeldung aus der Industrialisierung muss das Produktmanagement für Roadmap oder Business Case erhalten?',selected:false},
  ],
};

export function buildInterviewGuide(target: InterviewTarget, focusPerspective?: string) {
  const area = analysisAreas.find(item => item.name === focusPerspective);
  const focus: QuestionDraft[] = area ? [
    {group:`Fokus · ${area.short}`,text:area.question,selected:true},
    {group:`Vertiefung · ${area.short}`,text:area.probe,selected:true},
  ] : [];
  return {
    objective: area
      ? `${area.criterion} Perspektive: ${target}.`
      : `Produktsicht, Übergabepunkte, Entscheidungsrechte und Nachhalten aus der Perspektive ${target} verstehen.`,
    questions: [...coreQuestions, ...focus, ...roleQuestions[target]],
  };
}

export const practicalQuestions = coreQuestions.map(({group,text}) => [group,text]);
