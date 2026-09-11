/**
 * ============================================================================
 * PROJECTS — EDIT THIS FILE
 * ============================================================================
 * Everything shown in the Projects section comes from here.
 *
 * ON THE CARD (always visible in the grid)
 *   thumbnail      the tile image. LEAVE IT OFF to get the placeholder tile.
 *   thumbnailNote  caption shown inside the placeholder tile
 *   tagline        one line under the project name
 *
 * IN THE MODAL (shown after someone clicks the card)
 *   facts          the small label/value pairs (role, stage, platform, …)
 *   details        paragraphs
 *   contributions  what you personally owned
 *   screens        app screenshots — files must exist in /public/chefs-table/screens/
 *   caseStudy      optional link to a full case study page
 *   visual         "phones" renders screenshots, "diagram" renders the schematic,
 *                  "none" renders no visual
 *
 * ---------------------------------------------------------------------------
 * ADDING A THUMBNAIL LATER
 * ---------------------------------------------------------------------------
 * A project with no `thumbnail` renders the placeholder tile, captioned with
 * `thumbnailNote`. To replace it, drop an image in /public/ and add one field:
 *
 *     thumbnail: { src: "/your-image.png", alt: "What it shows" },
 *
 * That's the whole change — the placeholder disappears on its own.
 *
 * `fit` controls how the image sits in the tile:
 *   "cover"   (default) fills the tile edge to edge. Use for landscape images.
 *   "device"  renders it inside a phone frame. Use for tall app screenshots —
 *             they crop badly under "cover".
 *
 * To add a project: copy a block and add it to the array.
 * ============================================================================
 */

export type ProjectFact = { label: string; value: string };

export type ProjectThumbnail = {
  src: string;
  alt: string;
  fit?: "cover" | "device";
};

export type Project = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  thumbnail?: ProjectThumbnail;
  thumbnailNote?: string;
  facts: ProjectFact[];
  details: string[];
  contributions: string[];
  visual: "phones" | "diagram" | "none";
  screens?: { src: string; alt: string }[];
  caseStudy?: { href: string; label: string };
  note?: string;
};

export const projects: Project[] = [
  {
    id: "chefs-table",
    name: "Chef's Table",
    category: "AI dining companion",
    tagline:
      "An AI dining companion that turns unfamiliar menus into personalized decisions.",
    thumbnail: {
      src: "/chefs-table/screens/home.png",
      alt: "Chef's Table home screen showing personalized dish recommendations",
      fit: "device",
    },
    facts: [
      { label: "ROLE", value: "Product / Builder" },
      { label: "STAGE", value: "MVP" },
      { label: "PLATFORM", value: "iOS" },
      { label: "YEAR", value: "2026" },
    ],
    details: [
      "Chef's Table helps diners understand unfamiliar dishes, identify potential allergy concerns, and choose food based on their personal Taste DNA.",
      "I ran the research, synthesized it into prioritized themes, scored what belonged in the MVP, wrote the acceptance criteria, and built the product.",
      // TODO — add more if you want a longer description here.
    ],
    contributions: [
      "Discovery — 3 exploratory interviews, synthesized into 4 themes",
      "Prioritization — impact / urgency / reach scoring to set the MVP boundary",
      "Definition — user stories and acceptance criteria",
      "AI trust rule for allergen uncertainty",
      "Built the iOS prototype",
    ],
    visual: "phones",
    screens: [
      {
        src: "/chefs-table/screens/home.png",
        alt: "Chef's Table home screen showing personalized dish recommendations",
      },
      {
        src: "/chefs-table/screens/dish-details.png",
        alt: "Chef's Table dish detail screen explaining ingredients and flavor",
      },
      {
        src: "/chefs-table/screens/taste-dna.png",
        alt: "Chef's Table Taste DNA screen summarizing the diner's flavor preferences",
      },
    ],
    caseStudy: {
      href: "/work/chefs-table",
      label: "Read the full case study",
    },
  },
  {
    id: "ai-knowledge",
    name: "AI Knowledge Intelligence",
    category: "Enterprise AI · IBM",
    tagline:
      "A knowledge system that turns historical implementation experience into reusable intelligence for consultants.",
    // No `thumbnail` — this renders the placeholder tile. Add one when you
    // have an image you're cleared to publish; see the banner at the top.
    thumbnailNote: "Confidential — no product UI shown",
    facts: [
      { label: "ROLE", value: "Product / Implementation" },
      { label: "CONTEXT", value: "IBM" },
      { label: "DOMAIN", value: "OTM / GTM" },
    ],
    details: [
      "Implementation knowledge tends to disappear once a project closes. This system was built so that experience could be retrieved and reused by the teams who came next.",
      // TODO — add more detail here if you're cleared to share it.
    ],
    contributions: [
      "Retrieve implementation knowledge from past engagements",
      "Accelerate consultant onboarding and training in OTM/GTM",
      "Surface reusable solution patterns across projects",
      "Support solution architecture with historical project experience",
    ],
    visual: "diagram",
    note: "Client and delivery details are confidential. The diagram is schematic, not product UI.",
  },
];
