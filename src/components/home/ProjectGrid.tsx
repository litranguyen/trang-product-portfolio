"use client";

import { useCallback, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "@/content/projects";

export default function ProjectGrid() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [openCount, setOpenCount] = useState(0);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const open = useCallback((id: string, trigger: HTMLButtonElement) => {
    lastTrigger.current = trigger;
    setOpenCount((n) => n + 1);
    setActiveId(id);
  }, []);

  const close = useCallback(() => {
    setActiveId(null);

    // The browser restores focus on its own when it closes a modal dialog.
    // Only step in when it didn't — otherwise two focus calls race.
    requestAnimationFrame(() => {
      if (document.activeElement === document.body) {
        lastTrigger.current?.focus();
      }
    });
  }, []);

  return (
    <ul className="proj-grid">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={i}
          priority={i === 0}
          onOpen={(trigger) => open(project.id, trigger)}
        >
          <ProjectModal
            project={project}
            open={activeId === project.id}
            openCount={openCount}
            onClose={close}
          />
        </ProjectCard>
      ))}
    </ul>
  );
}
