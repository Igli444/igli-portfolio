"use client";

import { motion } from "motion/react";
import SplitText from "../SplitText";
import { RevealGroup, RevealItem } from "../Reveal";
import { CERTIFICATIONS, EDUCATION } from "../../lib/data";

export default function CredentialsSection() {
  return (
    <section id="credentials" className="mx-auto max-w-6xl px-6 py-28">
      <RevealGroup className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <RevealItem>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            <SplitText text="Education & certifications" />
          </h2>
          <div className="mt-5 flex items-start gap-3">
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-accent-soft font-mono text-xs text-accent">
              BA
            </span>
            <div>
              <p className="font-medium text-foreground">{EDUCATION.degree}</p>
              <p className="text-sm text-muted">
                {EDUCATION.school} · {EDUCATION.period}
              </p>
            </div>
          </div>
        </RevealItem>
        <RevealGroup className="flex flex-col gap-2.5 sm:items-end" stagger={0.06}>
          {CERTIFICATIONS.map((cert) => (
            <RevealItem key={cert}>
              <motion.div
                whileHover={{ x: -4 }}
                className="flex items-center gap-2.5 rounded-full border border-border bg-surface py-2 pl-2.5 pr-4 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 flex-none"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.6"
                >
                  <circle cx="12" cy="9" r="5" />
                  <path d="M9 13.5 7.5 20l4.5-2 4.5 2-1.5-6.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {cert}
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </RevealGroup>
    </section>
  );
}
