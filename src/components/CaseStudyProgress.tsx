"use client";

import { useEffect, useState } from "react";

const phases = [
  { id: "overview", number: "01", label: "Overview" },
  { id: "ideation", number: "02", label: "Ideation" },
  { id: "define", number: "03", label: "Define" },
  { id: "build", number: "04", label: "Build" },
];

export default function CaseStudyProgress() {
  const [active, setActive] = useState(phases[0].id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = phases
      .map((phase) => document.getElementById(phase.id))
      .filter((el): el is HTMLElement => el !== null);

    // The phase whose top edge is nearest above the reading line wins, so the
    // indicator tracks "where am I in the story" rather than what is centred.
    const readingLine = () => window.innerHeight * 0.35;

    const update = () => {
      let current = phases[0].id;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= readingLine()) {
          current = section.id;
        }
      }

      setActive(current);

      const scrollable = document.body.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav className="cs-progress" aria-label="Case study phases">
      <div className="cs-progress-bar" aria-hidden="true">
        <span style={{ transform: `scaleY(${progress})` }} />
      </div>

      <ol className="cs-progress-list">
        {phases.map((phase) => (
          <li key={phase.id}>
            <a
              href={`#${phase.id}`}
              className={
                active === phase.id
                  ? "cs-progress-link cs-progress-link-active"
                  : "cs-progress-link"
              }
              aria-current={active === phase.id ? "step" : undefined}
            >
              <span>{phase.number}</span>
              <small>{phase.label}</small>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
