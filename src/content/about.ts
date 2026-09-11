/**
 * ============================================================================
 * ABOUT — EDIT THIS FILE
 * ============================================================================
 * IMPORTANT — don't repeat the intro.
 *
 * The intro at the top of the page is POSITIONING: what you do, what you're
 * good at, what you're looking for. This section is about the PERSON: how you
 * got here, how you actually work, what you care about.
 *
 * If this paraphrases the intro, a reader hits the same sentence twice four
 * screens apart and the whole section reads as padding. Write it in your own
 * voice — it's the one place on the page where that's the point.
 *
 *   heading     the section headline (a <span> gets the muted second colour)
 *   paragraphs  the body copy, 2–3 short paragraphs is plenty
 *   personal    optional closing line — the human detail
 *
 * The photo lives at the top of the page now — edit it in src/content/intro.ts.
 * ============================================================================
 */

export type About = {
  heading: { lead: string; muted: string };
  paragraphs: string[];
  personal?: string;
};

export const about: About = {
  heading: {
    lead: "I came to product through",
    muted: "making things work.",
  },
  paragraphs: [
    "I started in enterprise technology delivery, where the interesting problem was never the software — it was getting a complex system adopted by people who already had a way of doing things. That taught me more about product than any framework did.",
    "What I do now sits in the same place, earlier in the process. I want to find the exact moment someone gets stuck and build the smallest thing that unsticks them. With AI products especially, I care that the thing is honest about what it doesn't know — being confidently wrong is worse than being usefully uncertain.",
    // TODO — add a third paragraph if you want, or delete one. Two is fine.
  ],
  personal:
    "When I'm not building, you'll probably find me playing tennis or meditating.",
};
