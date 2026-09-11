/**
 * ============================================================================
 * EXPERIENCE — EDIT THIS FILE
 * ============================================================================
 * Everything shown in the Experience section comes from here. You can edit all
 * of it without touching any component.
 *
 * Anything marked TODO is a placeholder waiting on you.
 *
 *   period      shown next to the company name, always visible
 *   summary     one line, visible before the row is expanded
 *   details     paragraphs, shown when the row is expanded (add as many as you like)
 *   highlights  short bullets, shown when expanded
 *   skills      small tags at the bottom of the expanded panel
 *
 * To add a company: copy one block and add it to the array.
 * Order matters — most recent first.
 * ============================================================================
 */

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  details: string[];
  highlights: string[];
  skills: string[];
};

export const experience: Experience[] = [
  {
    id: "ibm",
    company: "IBM",
    role: "Senior Consultant",
    period: "TODO — add dates",
    location: "TODO — add location",
    summary:
      "Enterprise supply chain implementation, and applying AI to the knowledge those projects generate.",
    details: [
      "I deliver enterprise supply chain implementations end to end — translating business requirements into solution design, then working through configuration, testing, and deployment with client stakeholders.",
      "Most recently I worked on a knowledge system that turns historical implementation experience into something future project teams can actually reuse, rather than leaving it buried in past project archives.",
      // TODO — add more here. What did you own? What was hard? What changed because you were on it?
    ],
    highlights: [
      "Requirements → solution design → deployment",
      "AI knowledge system for implementation reuse",
      "Oracle OTM / GTM",
      // TODO — add or replace these
    ],
    skills: [
      "Product definition",
      "Enterprise implementation",
      "Stakeholder management",
      "Oracle OTM/GTM",
      "UAT",
    ],
  },
  {
    id: "accelalpha",
    company: "Accelalpha",
    role: "Senior Consultant",
    period: "TODO — add dates",
    location: "TODO — add location",
    summary: "TODO — one line describing what you did here.",
    details: [
      "TODO — write a short paragraph about your work at Accelalpha. What kind of projects, what you owned, what you were known for.",
      // TODO — add a second paragraph if useful.
    ],
    highlights: [
      "TODO — a short bullet",
      "TODO — a short bullet",
      "TODO — a short bullet",
    ],
    skills: ["TODO", "TODO", "TODO"],
  },
  {
    id: "corning",
    company: "Corning",
    role: "Data Analyst",
    period: "TODO — add dates",
    location: "TODO — add location",
    summary: "TODO — one line describing what you did here.",
    details: [
      "TODO — write a short paragraph about your work at Corning. What data did you work with, what questions were you answering, who used the output?",
    ],
    highlights: [
      "TODO — a short bullet",
      "TODO — a short bullet",
    ],
    skills: ["TODO", "TODO", "TODO"],
  },
];
