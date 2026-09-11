"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import PhoneFrame from "@/components/PhoneFrame";
import KnowledgeSystemVisual from "./KnowledgeSystemVisual";
import type { Project } from "@/content/projects";

type ProjectModalProps = {
  project: Project;
  open: boolean;
  /** Incremented on every open, so the diagram remounts and replays. */
  openCount: number;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  open,
  openCount,
  onClose,
}: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  // Records where a drag started, so text selection that ends over the
  // backdrop doesn't dismiss the dialog.
  const pressedBackdrop = useRef(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // MUST be showModal(), never the `open` attribute. The attribute produces
    // a NON-modal dialog: no top layer, no focus trap, no ::backdrop, no ESC.
    // It still looks correct with a mouse, so the failure is silent.
    if (open && !dialog.open) {
      dialog.showModal();

      // React's autoFocus prop calls .focus() at mount, and this dialog mounts
      // closed — so that call no-ops. Focus has to be set here by hand.
      closeRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // `close` and `cancel` do not bubble, so the JSX onClose prop is unreliable.
  // This listener is also what syncs state when the *browser* closes the
  // dialog (Escape) — without it the card cannot be reopened.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);

    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  // Lock the page behind the dialog. Browser support for this is uneven
  // (notably iOS Safari), so it is done explicitly rather than relied upon.
  useEffect(() => {
    if (!open) return;

    const { body, documentElement } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;

    // Replace the scrollbar's width so the page doesn't jump sideways.
    // Zero on overlay-scrollbar platforms, ~15px on Windows.
    const scrollbar = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [open]);

  const titleId = `pmodal-title-${project.id}`;
  const descId = `pmodal-desc-${project.id}`;

  return (
    <dialog
      ref={dialogRef}
      className="pmodal"
      aria-labelledby={titleId}
      aria-describedby={descId}
      onMouseDown={(event) => {
        pressedBackdrop.current = event.target === dialogRef.current;
      }}
      onClick={(event) => {
        // Close only when the press *and* the release both landed on the
        // backdrop — the dialog element itself, since it has no padding.
        if (pressedBackdrop.current && event.target === dialogRef.current) {
          dialogRef.current?.close();
        }
        pressedBackdrop.current = false;
      }}
    >
      <div className="pmodal-panel">
        <div className="pmodal-head">
          <div className="pmodal-titles">
            <h3 id={titleId} className="pmodal-title">
              {project.name}
            </h3>
            <span className="pmodal-category">{project.category}</span>
          </div>

          <button
            ref={closeRef}
            type="button"
            className="pmodal-close"
            aria-label="Close project details"
            onClick={() => dialogRef.current?.close()}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="pmodal-body">
          <div className="pmodal-copy">
            <p id={descId} className="pmodal-tagline">
              {project.tagline}
            </p>

            <dl className="proj-facts">
              {project.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            {project.details.map((paragraph) => (
              <p key={paragraph} className="proj-para">
                {paragraph}
              </p>
            ))}

            <div className="proj-owned">
              <span>WHAT I OWNED</span>
              <ul>
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {project.note ? (
              <p className="proj-note">
                <span aria-hidden="true">—</span> {project.note}
              </p>
            ) : null}

            {project.caseStudy ? (
              <Link href={project.caseStudy.href} className="proj-cta">
                {project.caseStudy.label}
                <i aria-hidden="true">→</i>
              </Link>
            ) : null}
          </div>

          {project.visual !== "none" ? (
            // Keyed on openCount: the contents animate on mount, and this
            // dialog mounts hidden, so without a remount the animation would
            // have already finished before anyone saw it.
            <div className="pmodal-visual proj-visual" key={openCount}>
              {project.visual === "phones" && project.screens
                ? project.screens.map((screen, i) => (
                    <PhoneFrame
                      key={screen.src}
                      src={screen.src}
                      alt={screen.alt}
                      sizes="(max-width: 1000px) 30vw, 170px"
                      className={`proj-phone proj-phone-${i + 1}`}
                    />
                  ))
                : null}

              {project.visual === "diagram" ? <KnowledgeSystemVisual /> : null}
            </div>
          ) : null}
        </div>
      </div>
    </dialog>
  );
}
