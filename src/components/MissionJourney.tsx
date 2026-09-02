"use client";

import { motion } from "framer-motion";

export default function MissionJourney() {
  return (
    <div className="mission-journey-clean">
      <motion.div
        className="mission-journey-clean-step"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mission-journey-clean-number">01</div>

        <span className="mission-journey-clean-label">
          DISCOVER
        </span>

        <h3>
          Where should
          <br />
          I eat?
        </h3>

        <p>
          Search, ratings, maps, and social recommendations help diners choose
          the restaurant.
        </p>

        <strong>EXISTING MARKET</strong>
      </motion.div>

      <motion.div
        className="mission-journey-clean-step"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        <div className="mission-journey-clean-number">02</div>

        <span className="mission-journey-clean-label">
          ARRIVE
        </span>

        <h3>
          The menu
          <br />
          arrives.
        </h3>

        <p>
          The restaurant decision ends. A new decision begins.
        </p>

        <strong>DECISION SHIFT</strong>
      </motion.div>

      <motion.div
        className="mission-journey-clean-step mission-journey-clean-active"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="mission-journey-clean-number">03</div>

        <span className="mission-journey-clean-label">
          DECIDE
        </span>

        <h3>
          What should
          <br />
          I order?
        </h3>

        <p>
          Recommendations based on personal taste, dietary needs, and previous
          dining experiences.
        </p>

        <strong>CHEF&apos;S TABLE</strong>
      </motion.div>
    </div>
  );
}