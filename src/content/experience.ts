/**
 * ============================================================================
 * EXPERIENCE — EDIT THIS FILE
 * ============================================================================
 * Everything shown in the Experience section comes from here. You can edit all
 * of it without touching any component.
 *
 *   period      shown next to the company name, always visible
 *   location    optional — omit the field entirely to hide the row
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
  location?: string;
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
    period: "October 2025 — Present",
    // TODO — add your IBM location if you want it shown.
    summary:
      "Building a multi-agent GenAI assistant for enterprise knowledge retrieval, alongside end-to-end OTM implementations.",
    details: [
      "I co-developed a web-based multi-agent GenAI assistant in Python, using RAG to automate enterprise knowledge retrieval, document generation, workflow guidance, and OTM/GTM troubleshooting. It cut manual research and documentation effort by roughly 40%.",
      "The rest of the work is implementation and the data underneath it: ETL and SQL validation workflows over a million-plus carrier, rate, and shipment records, load and performance testing to find system bottlenecks, and leading customer rollouts across more than 20 global regions.",
    ],
    highlights: [
      "Multi-agent GenAI assistant in Python and RAG — ~40% less manual research and documentation effort",
      "ETL and SQL validation across 1M+ carrier, rate, and shipment records — 25% better reporting accuracy",
      "Load and performance testing across 10,000+ order releases and 5,000+ shipments",
      "End-to-end implementations across 20+ global regions",
    ],
    skills: [
      "Python",
      "RAG",
      "Multi-agent systems",
      "SQL",
      "ETL",
      "Oracle OTM/GTM",
      "Performance testing",
      "Solution design",
    ],
  },
  {
    id: "accelalpha",
    company: "Accelalpha",
    role: "Senior Consultant",
    period: "July 2023 — October 2025",
    location: "Cambridge, MA",
    summary:
      "Transportation intelligence reporting, BI dashboards, and the validation frameworks behind large OTM migrations.",
    details: [
      "I built Oracle Transportation Intelligence reports over 100,000+ shipment records to analyse freight cost, carrier performance, and operational efficiency, plus interactive Oracle BI dashboards that let logistics teams run what-if comparisons between planning options.",
      "I also designed the validation frameworks for rate, carrier, and shipment tables, and led Conference Room Pilots and solution demonstrations for cross-functional client teams — walking them through end-to-end logistics workflows to build alignment before go-live.",
    ],
    highlights: [
      "Transportation Intelligence reporting across 100,000+ shipment records",
      "Interactive BI dashboards for what-if planning analysis",
      "Validation frameworks — 99.9% data accuracy, 35% fewer migration inconsistencies",
      "Led CRPs and demos across 8,000+ order releases and 750+ shipments",
    ],
    skills: [
      "Oracle OTM",
      "Oracle BI",
      "Data validation",
      "SQL",
      "CRP facilitation",
      "Client demos",
    ],
  },
  {
    id: "corning",
    company: "Corning",
    role: "Data Analyst Intern",
    period: "January 2023 — May 2023",
    location: "Keller, TX",
    summary:
      "Forecasting, inventory, and value stream analysis in Power BI and SAP.",
    details: [
      "I analysed forecasting, inventory, and client data in Power BI and SAP to evaluate the financial impact of a new process, supporting a 20% reduction in end-to-end operating costs.",
      "Working through value stream and operational data surfaced process improvements that cut cycle time by 50% and contributed to more than $2M in cost savings. I led a team of four apprentice analysts on the value stream map and presented the recommendations to the Chief Operating Officer.",
    ],
    highlights: [
      "Power BI and SAP analysis supporting a 20% operating cost reduction",
      "Process improvements — 50% cycle time reduction, $2M+ in savings",
      "Led four apprentice analysts; presented findings to the COO",
    ],
    skills: [
      "Power BI",
      "SAP",
      "Data analysis",
      "Value stream mapping",
      "Visio",
    ],
  },
];
