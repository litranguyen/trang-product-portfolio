import Image from "next/image";
import { intro } from "@/content/intro";

/**
 * Intro and about, combined — this is the top of the page and the only place
 * the story is told.
 *
 * Server component. The entrance is a CSS animation rather than a motion
 * component so this is present in the HTML and readable before hydration.
 */
export default function IntroBlock() {
  const { portrait } = intro;

  return (
    <section className="intro">
      <div className="intro-main">
        <div
          className="intro-portrait home-rise"
          style={{ "--rise-delay": "0ms" } as React.CSSProperties}
        >
          <Image
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            sizes="(max-width: 760px) 40vw, 168px"
            className="intro-photo"
            style={
              portrait.position
                ? { objectPosition: portrait.position }
                : undefined
            }
            priority
          />
        </div>

        <h1
          className="intro-name home-rise"
          style={{ "--rise-delay": "90ms" } as React.CSSProperties}
        >
          {intro.name}
        </h1>

        <p
          className="intro-lead home-rise"
          style={{ "--rise-delay": "180ms" } as React.CSSProperties}
        >
          {intro.lead}
        </p>

        <div
          className="intro-story home-rise"
          style={{ "--rise-delay": "250ms" } as React.CSSProperties}
        >
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {intro.personal ? (
          <p
            className="intro-personal home-rise"
            style={{ "--rise-delay": "310ms" } as React.CSSProperties}
          >
            {intro.personal}
          </p>
        ) : null}

        <div
          className="intro-links home-rise"
          style={{ "--rise-delay": "370ms" } as React.CSSProperties}
        >
          {intro.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
              {link.external ? <span aria-hidden="true">↗</span> : null}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
