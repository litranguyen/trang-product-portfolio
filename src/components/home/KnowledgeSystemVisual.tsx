"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Abstract representation of the knowledge system: scattered historical project
 * artifacts on the left, resolved into reusable patterns on the right.
 *
 * Deliberately schematic — this is not, and must not imply, a real IBM UI.
 */

const sources = [
  { x: 16, y: 26 },
  { x: 40, y: 62 },
  { x: 12, y: 104 },
  { x: 44, y: 140 },
  { x: 18, y: 180 },
  { x: 38, y: 214 },
];

const outputs = [
  { y: 52, label: "RETRIEVAL" },
  { y: 104, label: "PATTERNS" },
  { y: 156, label: "ARCHITECTURE" },
  { y: 208, label: "ONBOARDING" },
];

export default function KnowledgeSystemVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      className="ibm-visual"
      viewBox="0 0 460 250"
      role="img"
      aria-label="Diagram: fragmented historical project documents converge through a knowledge index into reusable retrieval, patterns, architecture, and onboarding outputs."
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="ibm-thread" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#96763f" stopOpacity="0.06" />
          <stop offset="55%" stopColor="#96763f" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#96763f" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      {/* connective threads: fragments -> index */}
      {sources.map((source, i) => (
        <motion.path
          key={`thread-${source.y}`}
          d={`M ${source.x + 46} ${source.y + 11} C 130 ${source.y + 11}, 150 125, 214 125`}
          fill="none"
          stroke="url(#ibm-thread)"
          strokeWidth="1"
          initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
          whileInView={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}

      {/* connective threads: index -> outputs */}
      {outputs.map((output, i) => (
        <motion.path
          key={`out-${output.y}`}
          d={`M 246 125 C 300 125, 300 ${output.y + 11}, 344 ${output.y + 11}`}
          fill="none"
          stroke="url(#ibm-thread)"
          strokeWidth="1"
          initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
          whileInView={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.5 + 0.12 * i, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}

      {/* fragmented historical artifacts */}
      {sources.map((source, i) => (
        <motion.g
          key={`src-${source.y}`}
          initial={reduceMotion ? undefined : { opacity: 0, x: -8 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.06 * i }}
        >
          <rect
            x={source.x}
            y={source.y}
            width="46"
            height="22"
            rx="2"
            fill="none"
            stroke="rgba(31, 26, 21, 0.24)"
          />
          <line
            x1={source.x + 7}
            y1={source.y + 8}
            x2={source.x + 32}
            y2={source.y + 8}
            stroke="rgba(31, 26, 21, 0.20)"
          />
          <line
            x1={source.x + 7}
            y1={source.y + 14}
            x2={source.x + 24}
            y2={source.y + 14}
            stroke="rgba(31, 26, 21, 0.13)"
          />
        </motion.g>
      ))}

      {/* the index itself */}
      <motion.g
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        style={{ transformOrigin: "230px 125px" }}
      >
        <rect
          x="214"
          y="99"
          width="32"
          height="52"
          rx="2"
          fill="#f7f3ea"
          stroke="rgba(150, 118, 63, 0.62)"
        />
        <line x1="222" y1="112" x2="238" y2="112" stroke="rgba(150,118,63,0.55)" />
        <line x1="222" y1="125" x2="238" y2="125" stroke="rgba(150,118,63,0.55)" />
        <line x1="222" y1="138" x2="238" y2="138" stroke="rgba(150,118,63,0.55)" />
        <text
          x="230"
          y="168"
          textAnchor="middle"
          className="ibm-visual-core"
        >
          INDEX
        </text>
      </motion.g>

      {/* reusable outputs */}
      {outputs.map((output, i) => (
        <motion.g
          key={output.label}
          initial={reduceMotion ? undefined : { opacity: 0, x: 8 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.72 + 0.1 * i }}
        >
          <rect
            x="344"
            y={output.y}
            width="104"
            height="22"
            rx="2"
            fill="none"
            stroke="rgba(150, 118, 63, 0.4)"
          />
          <text x="356" y={output.y + 15} className="ibm-visual-label">
            {output.label}
          </text>
        </motion.g>
      ))}

      <text x="16" y="14" className="ibm-visual-caption">
        HISTORICAL PROJECTS
      </text>
      <text x="344" y="14" className="ibm-visual-caption">
        REUSABLE INTELLIGENCE
      </text>
    </svg>
  );
}
