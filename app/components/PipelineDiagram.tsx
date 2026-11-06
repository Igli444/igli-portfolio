"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Architect",
    body: "Multi-platform storefronts on Shopify, BigCommerce and Magento, built for performance and reuse.",
    icon: (
      <>
        <rect x="4" y="4" width="10" height="10" rx="1.5" />
        <rect x="10" y="10" width="10" height="10" rx="1.5" />
      </>
    ),
  },
  {
    n: "02",
    title: "Lead",
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
    n: "03",
    title: "Ship",
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

export default function PipelineDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mt-16">
      <svg
        className="absolute left-0 right-0 top-9 hidden w-full sm:block"
        viewBox="0 0 1000 80"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M 167 40 Q 333 90 500 40 T 833 40"
          stroke="var(--border)"
          strokeWidth="1.5"
        />
        <motion.path
          d="M 167 40 Q 333 90 500 40 T 833 40"
          stroke="var(--accent)"
          strokeWidth="1.5"
          style={{ pathLength }}
        />
        <motion.circle
          r="3.5"
          fill="var(--accent-strong)"
          animate={{ cx: [167, 500, 833, 500, 167], cy: [40, 90, 40, 90, 40] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "drop-shadow(0 0 6px var(--accent-strong))" }}
        />
      </svg>

      <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center sm:items-start sm:text-left"
          >
            <motion.span
              whileHover={{ scale: 1.1, rotate: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-border bg-surface ring-glow transition-colors hover:border-accent"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.4"
              >
                {step.icon}
              </svg>
            </motion.span>
            <span className="mt-5 font-mono text-xs text-muted-soft">{step.n}</span>
            <h3 className="font-display mt-1 text-2xl font-medium text-foreground">
              {step.title}
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted">{step.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
