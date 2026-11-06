"use client";

import { motion } from "motion/react";
import { EASE_OUT } from "../lib/motion";

const steps = [
  {
    tag: "Architect",
    body: "Multi-platform storefronts on Shopify, BigCommerce and Magento, built for performance and reuse.",
    icon: (
      <>
        <rect x="4" y="4" width="10" height="10" rx="1.5" />
        <rect x="10" y="10" width="10" height="10" rx="1.5" />
      </>
    ),
  },
  {
    tag: "Lead",
    body: "Plan the work, mentor the team, and own the code review bar that keeps the codebase scalable.",
    icon: (
      <>
        <circle cx="12" cy="7" r="3" />
        <circle cx="5" cy="17" r="2.4" />
        <circle cx="19" cy="17" r="2.4" />
        <path d="M12 10v3M9.5 15.5 7 16.5M14.5 15.5 17 16.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    tag: "Ship",
    body: "React.js, Next.js, TypeScript and Tailwind CSS on top of Node.js — full stack, end to end.",
    icon: (
      <>
        <path d="M12 3v12" strokeLinecap="round" />
        <path d="M7 10l5-7 5 7" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="15" width="16" height="6" rx="1.5" />
      </>
    ),
  },
];

export default function ApproachCards() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
      {steps.map((step, i) => (
        <motion.div
          key={step.tag}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: i * 0.12, ease: EASE_OUT }}
          whileHover={{ y: -6 }}
          className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent/40"
        >
          <span className="inline-block rounded-full bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-soft">
            {step.tag}
          </span>

          <div className="relative mt-8 flex h-20 items-center justify-center">
            <div
              className="absolute h-20 w-20 rounded-full opacity-70 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,222,179,0.4), rgba(217,143,78,0.12) 55%, transparent 75%)",
              }}
            />
            <svg
              viewBox="0 0 24 24"
              className="relative h-10 w-10"
              fill="none"
              stroke="var(--accent-strong)"
              strokeWidth="1.3"
            >
              {step.icon}
            </svg>
          </div>

          <h3 className="font-display mt-6 text-2xl font-medium text-foreground">{step.tag}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
        </motion.div>
      ))}
    </div>
  );
}
