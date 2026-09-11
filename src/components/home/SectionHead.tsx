type SectionHeadProps = {
  /** Two-digit section number, omitted for unnumbered sections. */
  number?: string;
  label: string;
  meta?: string;
  /** Referenced by the section's aria-labelledby. */
  id: string;
};

/**
 * The label is the section's real <h2> — the number and meta are decorative
 * and hidden from assistive tech, so a screen reader hears "Projects", not
 * "01 Projects 2 projects".
 */
export default function SectionHead({
  number,
  label,
  meta,
  id,
}: SectionHeadProps) {
  return (
    <div className="home-head">
      {number ? (
        <span className="home-head-number" aria-hidden="true">
          {number}
        </span>
      ) : null}

      <h2 id={id} className="home-head-label">
        {label}
      </h2>

      {meta ? (
        <span className="home-head-meta" aria-hidden="true">
          {meta}
        </span>
      ) : null}
    </div>
  );
}
