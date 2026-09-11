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
 * Everything here is evidenced by something in the Experience or Projects
 * sections — keep it that way.
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
      "Requirements & acceptance criteria",
    ],
  },
  {
    id: "ai",
    label: "AI & BUILD",
    items: [
      "Python",
      "RAG",
      "Multi-agent systems",
      "Prototyping",
      "React / Next.js",
    ],
    note: "I build the prototypes myself, which keeps the definition honest.",
  },
  {
    id: "data",
    label: "DATA",
    items: [
      "SQL",
      "ETL & data validation",
      "Power BI",
      "Oracle BI",
      "SAP",
    ],
  },
  {
    id: "delivery",
    label: "ENTERPRISE DELIVERY",
    items: [
      "Oracle OTM / GTM",
      "Requirements → solution design",
      "Performance testing",
      "CRPs & UAT",
      "Stakeholder management",
    ],
  },
];
