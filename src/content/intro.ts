/**
 * ============================================================================
 * INTRO — EDIT THIS FILE
 * ============================================================================
 * The top of the homepage: photo, name, your story, contact links.
 * This is both the introduction and the "about me" — there is no separate
 * About section.
 *
 *   name        your name — this is the page's <h1>
 *   lead        the opening line or two, set slightly larger. Positioning:
 *               what you do and what you're good at.
 *   paragraphs  the rest of the story, in your own voice. How you got here,
 *               how you work, what you care about. Two or three is plenty —
 *               this sits above the fold and long copy pushes the work down.
 *   personal    optional closing line, set off by a rule — the human detail
 *   links       contact links. `external: true` opens in a new tab.
 *   portrait    the round photo. Shown in full colour, cropped to a circle.
 *               `position` shifts the crop if your face sits high or low in
 *               the frame — "50% 28%" pulls the crop upward.
 * ============================================================================
 */

export type IntroLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Intro = {
  name: string;
  lead: string;
  paragraphs: string[];
  personal?: string;
  links: IntroLink[];
  portrait: {
    src: string;
    alt: string;
    width: number;
    height: number;
    /** CSS object-position for the circular crop. */
    position?: string;
  };
};

export const intro: Intro = {
  name: "Trang Nguyen",

  lead: "I work across product and implementation — turning ambiguous problems into products people can actually use.",

  paragraphs: [
    "I started in enterprise technology delivery, where the interesting problem was never the software — it was getting a complex system adopted by people who already had a way of doing things. That taught me more about product than any framework did.",
    "What I do now sits in the same place, earlier in the process. I want to find the exact moment someone gets stuck and build the smallest thing that unsticks them. With AI products especially, I care that the thing is honest about what it doesn't know — being confidently wrong is worse than being usefully uncertain.",
  ],

  personal:
    "When I'm not building, you'll probably find me playing tennis or meditating.",

  links: [
    { label: "litranguyen@gmail.com", href: "mailto:litranguyen@gmail.com" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/linhtrangnguyen11/",
      external: true,
    },
  ],

  portrait: {
    src: "/chefs-table/profile/trang.jpg",
    alt: "Portrait of Trang Nguyen",
    width: 1737,
    height: 2584,
    // The source is tall (1737x2584), so a square crop takes the middle by
    // default. Nudge this if your face ends up cropped.
    position: "50% 28%",
  },
};
