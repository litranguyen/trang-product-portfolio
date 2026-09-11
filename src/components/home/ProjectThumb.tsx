import Image from "next/image";
import PhoneFrame from "@/components/PhoneFrame";
import type { Project } from "@/content/projects";

type ProjectThumbProps = {
  project: Project;
  /** Only the first tile should preload — it is the likely LCP element. */
  priority?: boolean;
};

/**
 * The tile image, or a deliberate placeholder when the project has none.
 *
 * Keeping this in its own component is what makes adding a real thumbnail a
 * one-field change in src/content/projects.ts — nothing here needs editing.
 */
export default function ProjectThumb({ project, priority }: ProjectThumbProps) {
  const { thumbnail, thumbnailNote, name } = project;

  // No image yet. Render a placeholder that reads as a choice rather than a
  // gap — same grid-paper ground as the device tile, so the two are siblings.
  if (!thumbnail) {
    return (
      <div className="pcard-thumb pcard-thumb-empty">
        <span className="pcard-mono" aria-hidden="true">
          {name.charAt(0)}
        </span>

        {thumbnailNote ? (
          <span className="pcard-thumb-note">{thumbnailNote}</span>
        ) : null}
      </div>
    );
  }

  // Tall app screenshots crop badly edge-to-edge, so they get a phone frame.
  if (thumbnail.fit === "device") {
    return (
      <div className="pcard-thumb pcard-thumb-device">
        <PhoneFrame
          src={thumbnail.src}
          alt={thumbnail.alt}
          priority={priority}
          sizes="(max-width: 760px) 40vw, (max-width: 1000px) 30vw, 200px"
          className="pcard-phone"
        />
      </div>
    );
  }

  return (
    <div className="pcard-thumb">
      <Image
        src={thumbnail.src}
        alt={thumbnail.alt}
        fill
        priority={priority}
        sizes="(max-width: 1000px) 92vw, 560px"
        className="pcard-image"
      />
    </div>
  );
}
