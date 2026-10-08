export const interviewTargets = [
  'Leads Produkt- und Marktmanagement',
  'Produktmanager',
  'Marktmanager',
  'SAFe Product Management',
  'RTE',
  'Architektur/System Engineering',
  'Entwicklung / PO / technische Leads',
  'Qualität/Zulassung',
  'Vertrieb',
  'Produktion/Industrialisierung',
] as const;

export type InterviewTarget = (typeof interviewTargets)[number];

export function isInterviewTarget(value: string): value is InterviewTarget {
  return interviewTargets.some(target => target === value);
}
