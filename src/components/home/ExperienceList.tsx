"use client";

import { useState } from "react";
import { experience } from "@/content/experience";

export default function ExperienceList() {
  // First row opens by default so the section never reads as empty.
  const [open, setOpen] = useState<string | null>(experience[0]?.id ?? null);

  return (
    <ul className="exp-list">
      {experience.map((job) => {
        const isOpen = open === job.id;

        return (
          <li key={job.id} className={isOpen ? "exp-row exp-row-open" : "exp-row"}>
            <h3 className="exp-row-heading">
              <button
                type="button"
                className="exp-trigger"
                aria-expanded={isOpen}
                aria-controls={`exp-panel-${job.id}`}
                id={`exp-trigger-${job.id}`}
                onClick={() => setOpen(isOpen ? null : job.id)}
              >
                <span className="exp-company">{job.company}</span>

                <span className="exp-role">{job.role}</span>

                <span className="exp-period">{job.period}</span>

                <span className="exp-icon" aria-hidden="true">
                  <i />
                  <i />
                </span>
              </button>
            </h3>

            <div
              className="exp-panel"
              id={`exp-panel-${job.id}`}
              role="region"
              aria-labelledby={`exp-trigger-${job.id}`}
              hidden={!isOpen}
            >
              <div className="exp-panel-inner">
                <div className="exp-panel-body">
                  <p className="exp-summary">{job.summary}</p>

                  {job.details.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="exp-panel-side">
                  {job.location ? (
                    <div className="exp-meta">
                      <span>LOCATION</span>
                      <strong>{job.location}</strong>
                    </div>
                  ) : null}

                  <div className="exp-meta">
                    <span>HIGHLIGHTS</span>
                    <ul className="exp-highlights">
                      {job.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <ul className="exp-skills">
                    {job.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
