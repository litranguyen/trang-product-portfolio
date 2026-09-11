/**
 * ============================================================================
 * INTRO — EDIT THIS FILE
 * ============================================================================
 * The top of the homepage: photo, name, one paragraph, contact links.
 *
 *   name       your name — this is the page's <h1>
 *   lead       ONE short paragraph. This is the first thing anyone reads, so
 *              keep it to what you do and what you're good at. Two or three
 *              sentences at most — the About section is where you go deeper.
 *   links      contact links. `external: true` opens in a new tab.
 *   portrait   the round photo at the top. Shown in full colour, cropped to a
 *              circle. `position` shifts the crop if your face sits high or
 *              low in the frame — "50% 30%" pulls the crop upward.
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
  lead: "I work across product and implementation — turning ambiguous problems into products people can actually use. My background is enterprise technology delivery; my current focus is AI products, where I do the research, the definition, and the building.",
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
