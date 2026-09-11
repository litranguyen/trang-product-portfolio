import type { ReactNode } from "react";
import ProjectThumb from "./ProjectThumb";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  priority?: boolean;
  onOpen: (trigger: HTMLButtonElement) => void;
  /** The project's dialog, mounted alongside the card. */
  children?: ReactNode;
};

export default function ProjectCard({
  project,
  index,
  priority,
  onOpen,
  children,
}: ProjectCardProps) {
  return (
    <li className="pcard">
      <ProjectThumb project={project} priority={priority} />

      <div className="pcard-body">
        <span className="pcard-index">{String(index + 1).padStart(2, "0")}</span>

        <h3 className="pcard-name">
          {/*
            The only interactive element in the card. `.pcard-trigger::after`
            stretches its hit area over the whole tile, which keeps the card
            fully clickable at one tab stop with no nested interactives.
          */}
          <button
            type="button"
            className="pcard-trigger"
            aria-haspopup="dialog"
            onClick={(event) => onOpen(event.currentTarget)}
          >
            {project.name}
          </button>
        </h3>

        <span className="pcard-category">{project.category}</span>

        <p className="pcard-tagline">{project.tagline}</p>
      </div>

      {children}
    </li>
  );
}
