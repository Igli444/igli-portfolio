"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import TiltCard from "./TiltCard";
import { CLIENTS, type Platform } from "../lib/data";
import { EASE_OUT } from "../lib/motion";

const FILTERS: Array<"All" | Platform> = ["All", "Shopify", "BigCommerce"];

export default function WorkShowcase() {
  const [filter, setFilter] = useState<"All" | Platform>("All");

  const items = useMemo(
    () => CLIENTS.filter((c) => filter === "All" || c.platform === filter),
    [filter]
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
              filter === f
                ? "border-accent bg-accent-soft text-accent"
                : "border-border text-muted hover:border-accent/40"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto font-mono text-xs text-muted-soft">
          {items.length} {items.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <motion.div
        layout
        className="mt-8 grid grid-cols-2 gap-4 [grid-auto-flow:dense] sm:grid-cols-3 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {items.map((client) => (
            <motion.div
              key={client.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
              className={client.featured ? "sm:col-span-2" : ""}
            >
              <TiltCard className="h-full" max={6}>
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Visit site"
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50 hover:shadow-[0_20px_50px_-24px_rgba(217,143,78,0.35)]"
                >
                  <div
                    className="flex items-center justify-between"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <span className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                      {client.platform}
                    </span>
                    {client.featured && (
                      <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-soft sm:inline">
                        ★ Featured
                      </span>
                    )}
                  </div>

                  <span
                    className={`relative mt-4 w-full rounded-lg bg-[#f1ece2] p-3 transition-transform duration-300 group-hover:scale-[1.03] ${
                      client.featured ? "h-20" : "h-14"
                    }`}
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {client.logo && (
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        sizes="220px"
                        className="object-contain p-1"
                      />
                    )}
                  </span>

                  <p
                    className="mt-4 flex-1 text-sm leading-6 text-muted"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {client.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-foreground/80 transition-colors group-hover:text-accent">
                    Visit site
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
