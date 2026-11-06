"use client";

import { motion } from "motion/react";
import SplitText from "../SplitText";
import { RevealGroup, RevealItem } from "../Reveal";
import { STACK } from "../../lib/data";

export default function StackSection() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-28">
      <RevealGroup>
        <RevealItem>
          <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
            <SplitText text="The stack" />
          </h2>
        </RevealItem>
      </RevealGroup>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {Object.entries(STACK).map(([group, items]) => (
          <RevealGroup key={group} stagger={0.04}>
            <RevealItem>
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                {group}
              </h3>
            </RevealItem>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <RevealItem key={item}>
                  <motion.span
                    whileHover={{ y: -2, borderColor: "var(--accent)", color: "var(--accent)" }}
                    className="inline-block rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </motion.span>
                </RevealItem>
              ))}
            </div>
          </RevealGroup>
        ))}
      </div>
    </section>
  );
}
