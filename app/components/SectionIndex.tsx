"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const SECTIONS = [
  { id: "hero", label: "Intro" },
  { id: "approach", label: "Approach" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export default function SectionIndex() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = SECTIONS.findIndex((s) => s.id === entry.target.id);
            if (idx !== -1) setActive(idx);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-8 left-6 z-40 hidden flex-col gap-1.5 lg:flex">
      <span className="font-mono text-[10px] tracking-widest text-muted-soft">
        {String(active + 1).padStart(2, "0")} / {String(SECTIONS.length).padStart(2, "0")}
      </span>
      <div className="flex items-center gap-2">
        <motion.span
          key={active}
          initial={{ width: 0 }}
          animate={{ width: 16 }}
          transition={{ duration: 0.4 }}
          className="h-px bg-accent"
        />
        <motion.span
          key={`${active}-label`}
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="font-mono text-[10px] uppercase tracking-widest text-accent"
        >
          {SECTIONS[active].label}
        </motion.span>
      </div>
    </div>
  );
}
