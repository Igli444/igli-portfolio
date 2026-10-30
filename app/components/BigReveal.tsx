"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

export default function BigReveal({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.86, 1, 1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [60, 0, 0, -40]);
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);

  return (
    <div ref={ref} className="flex min-h-[72vh] flex-col items-center justify-center px-6 text-center">
      <motion.div style={{ opacity, scale, y }} className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        <h3 className="font-display mt-6 text-[15vw] font-medium leading-[0.95] tracking-tight sm:text-8xl">
          {title}
        </h3>
        <motion.div style={{ width: lineWidth }} className="mx-auto mt-8 h-px bg-accent/60" />
        <div className="mt-8 text-lg leading-7 text-muted">{children}</div>
      </motion.div>
    </div>
  );
}
