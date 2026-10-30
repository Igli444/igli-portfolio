"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function PhotoFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative mx-auto h-56 w-56 shrink-0 sm:h-64 sm:w-64 lg:mx-0"
    >
      <motion.div
        className="absolute -inset-5 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, rgba(217,143,78,0.5), transparent 35%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />
      <svg
        className="pointer-events-none absolute -inset-3"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke="var(--border)"
          strokeWidth="0.5"
          strokeDasharray="1 4"
        />
      </svg>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full overflow-hidden rounded-full border border-border bg-surface ring-glow"
      >
        <Image
          src="/igli.png"
          alt="Igli Maksuti"
          fill
          sizes="256px"
          className="object-cover grayscale-[15%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </motion.div>

      <motion.span
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -right-2 bottom-3 flex items-center gap-1.5 rounded-full border border-border bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-accent backdrop-blur"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Available
      </motion.span>
    </motion.div>
  );
}
