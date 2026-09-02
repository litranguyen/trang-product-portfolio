"use client";

import { motion } from "framer-motion";

const questions = [
  {
    number: "01",
    text: "What is this dish?",
    className: "question-bubble-one",
    delay: 0.15,
  },
  {
    number: "02",
    text: "Will I actually like it?",
    className: "question-bubble-two",
    delay: 0.45,
  },
  {
    number: "03",
    text: "Does this contain something I'm allergic to?",
    className: "question-bubble-three",
    delay: 0.75,
  },
  {
    number: "04",
    text: "What did I order last time?",
    className: "question-bubble-four",
    delay: 1.05,
  },
];

export default function QuestionBubbles() {
  return (
    <div className="question-bubbles-stage">
      {questions.map((question) => (
        <motion.div
          key={question.number}
          className={`question-bubble ${question.className}`}
          initial={{
            opacity: 0,
            scale: 0.35,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.65,
            delay: question.delay,
            type: "spring",
            stiffness: 180,
            damping: 14,
          }}
        >
          <span>{question.number}</span>
          <p>{question.text}</p>
        </motion.div>
      ))}

      <div className="question-bubbles-center-position">
        <motion.div
          className="question-bubbles-center"
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.6,
            delay: 1.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>THE DECISION</span>

          <h3>
            What should
            <br />
            I order?
          </h3>
        </motion.div>
      </div>
    </div>
  );
}