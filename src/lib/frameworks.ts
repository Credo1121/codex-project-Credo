export const starPlusDimensions = [
  {key:'strategy',label:'Strategie',kind:'Star Model',description:'Strategische Prioritäten und klare Produktentscheidungen.'},
  {key:'structure',label:'Struktur',kind:'Star Model',description:'Rollen, Verantwortungen und organisatorische Schnittstellen.'},
  {key:'processes',label:'Prozesse',kind:'Star Model',description:'Arbeits-, Entscheidungs- und Informationsflüsse.'},
  {key:'rewards',label:'Anreize & Leistung',kind:'Star Model',description:'Ziele, Messgrößen und wirksame Rückkopplung.'},
  {key:'people',label:'Menschen & Kompetenzen',kind:'Star Model',description:'Kapazitäten, Fähigkeiten und Rollenbesetzung.'},
  {key:'leadership',label:'Führung & Entscheidungen',kind:'ORG-COCKPIT-Ergänzung',description:'Führungsverhalten, Entscheidungsrechte und Eskalation.'},
  {key:'culture',label:'Kultur & Zusammenarbeit',kind:'ORG-COCKPIT-Ergänzung',description:'Zusammenarbeit, Vertrauen und gelebte Verhaltensmuster.'},
] as const;

export type StarPlusKey=(typeof starPlusDimensions)[number]['key'];

export const sevenSDimensions=[
  {key:'strategy',label:'Strategy',maps:['strategy']},
  {key:'structure',label:'Structure',maps:['structure']},
  {key:'systems',label:'Systems',maps:['processes','rewards']},
  {key:'shared-values',label:'Shared Values',maps:['culture']},
  {key:'style',label:'Style',maps:['leadership','culture']},
  {key:'staff',label:'Staff',maps:['people','structure']},
  {key:'skills',label:'Skills',maps:['people']},
] as const;
