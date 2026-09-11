/**
 * ============================================================================
 * SKILLS — EDIT THIS FILE
 * ============================================================================
 * The Skills section is a credibility signal, not an inventory. Keep it to
 * 3–4 groups of 4–6 items each. A long tool wall dilutes the signal — if
 * everything is listed, nothing stands out.
 *
 *   label  the group heading (shown in small mono caps)
 *   items  the individual skills or tools
 *   note   optional one-liner under the group
 *
 * Rule of thumb: list what you'd be comfortable being interviewed on.
 * ============================================================================
 */

export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
  note?: string;
};

export const skills: SkillGroup[] = [
  {
    id: "product",
    label: "PRODUCT",
    items: [
      "User research",
      "Problem framing",
      "Prioritization",
      "MVP scoping",
      "User stories",
      "Acceptance criteria",
    ],
  },
  {
    id: "ai",
    label: "AI & BUILD",
    items: [
      "AI product design",
      "Prompt & workflow design",
      "Prototyping",
      "React / Next.js",
      "iOS prototyping",
    ],
    note: "I build the prototypes myself, which keeps the definition honest.",
  },
  {
    id: "delivery",
    label: "ENTERPRISE DELIVERY",
    items: [
      "Requirements → solution design",
      "Oracle OTM / GTM",
      "UAT & deployment",
      "Stakeholder management",
    ],
  },
  {
    id: "data",
    label: "DATA",
    items: [
      "SQL",
      "Data analysis",
      "Reporting & dashboards",
      // TODO — add or replace with the tools you actually want to be asked about
    ],
  },
];
