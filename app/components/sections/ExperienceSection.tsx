"use client";

import { motion } from "motion/react";
import SplitText from "../SplitText";
import { RevealGroup, RevealItem } from "../Reveal";
import { ROLES } from "../../lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <RevealGroup>
        <RevealItem>
          <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
            <SplitText text="Experience" />
          </h2>
        </RevealItem>
      </RevealGroup>

      <div className="relative mt-14 space-y-14">
        <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-border sm:block" />
        {ROLES.map((role) => (
          <RevealGroup
            key={role.title}
            className="relative grid grid-cols-1 gap-6 sm:grid-cols-[220px_1fr] sm:pl-10"
          >
            <span className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-accent bg-background sm:block">
              {role.current && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-accent"
                  animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </span>
            <RevealItem>
              <p className="font-display text-lg font-medium text-foreground">{role.title}</p>
              <p className="text-sm text-muted">{role.company}</p>
              <p className="mt-1 font-mono text-xs text-muted-soft">{role.period}</p>
            </RevealItem>
            <RevealItem>
              <ul className="space-y-2.5 text-sm leading-6 text-muted">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          </RevealGroup>
        ))}
      </div>
    </section>
  );
}
