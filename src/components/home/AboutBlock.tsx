import Reveal from "@/components/Reveal";
import { about } from "@/content/about";

export default function AboutBlock() {
  return (
    <div className="about">
      <Reveal className="about-copy">
        <h3 className="about-heading">
          {about.heading.lead}
          <br />
          <span>{about.heading.muted}</span>
        </h3>

        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="about-para">
            {paragraph}
          </p>
        ))}

        {about.personal ? (
          <p className="about-personal">{about.personal}</p>
        ) : null}
      </Reveal>
    </div>
  );
}
