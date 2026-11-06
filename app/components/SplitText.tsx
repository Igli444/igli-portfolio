"use client";

import { motion, type Variants } from "motion/react";
import { EASE_OUT, viewport } from "../lib/motion";

function wordVariant(delay: number): Variants {
  return {
    hidden: { y: "110%" },
    show: { y: "0%", transition: { duration: 0.65, delay, ease: EASE_OUT } },
  };
}

export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.045,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-1 align-top">
          <motion.span className="inline-block" variants={wordVariant(delay + i * stagger)}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
