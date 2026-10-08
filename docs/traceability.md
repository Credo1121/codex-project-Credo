# Nachverfolgbarkeit
REQ-001–004/008 Revision 2 Ready; REQ-005–007 Revision 1 Draft. Keine fachliche Abnahme oder vollständige AC-Verifikation behauptet.

| REQ/AC | Vertrag/ADR | Implementierung | Test/Evidenz |
|---|---|---|---|
| REQ-001 AC-01–06 | contracts/workspace.md / ADR-001 / security.md | lib/auth.ts, API-Authroute, login, scripts/admin.ts | journey.spec.ts Authtest; check-retained.ts; genaue Grenzen qa/S1-results.md |
| REQ-002 AC-01–06 | contracts/workspace.md / ADR-001 | lib/methodology.ts, db.ts, schema.ts, workspace API/UI | journey.spec.ts / evidence/REQ-008; AC-02/04/06 teilweise NOT RUN |
| REQ-003 AC-01–04 | contracts/workspace.md | workspace API/UI, Revisionsupdate | journey.spec.ts; zusätzliche Links/Konflikt-UX offen |
| REQ-004 AC-01–07 | contracts/workspace.md | methodology.ts, workspace API/UI, Druck-CSS | journey.spec.ts / check-retained.ts / Leitfaden-PDF; Vorlagenänderung/Fehler-Grenzfälle offen |
| REQ-005 AC-01–04 | ausstehend | nicht umgesetzt, nur Fragenbasis Marktmanagement | NOT RUN, S2 |
| REQ-006 AC-01–04 | ausstehend | nicht umgesetzt | NOT RUN, S3 |
| REQ-007 AC-01–05 | ausstehend | nicht umgesetzt | NOT RUN, S3/S4 |
| REQ-008 AC-01–05 | architecture.md / contracts/workspace.md | Workspace/Login/CSS/API | Browserreise, reale gesichtete Desktop-/Mobile-Aufnahmen; weitere Accessibility-/Fehlerprüfungen offen |

Pfade zu Implementierung jeweils unter src/, ADR unter docs/adr, Tests unter tests/ oder scripts/. Vollständige Abdeckungsmatrix: qa/S1-results.md. Exakte Anwendungsbasis und Aufnahmezeiten: evidence/REQ-008/manifest.json. QA-PASS für geprüfte Fälle ersetzt weder offene AC noch Nutzerabnahme.
