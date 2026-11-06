"use client";

import Magnetic from "./Magnetic";
import { RevealGroup, RevealItem } from "./Reveal";
import { PROFILE } from "../lib/data";

export default function NowPanel() {
  return (
    <section id="now" className="mx-auto max-w-6xl px-6 pb-28">
      <RevealGroup>
        <RevealItem>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-raised p-8 sm:p-12">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,222,179,0.3), rgba(217,143,78,0.1) 50%, transparent 72%)",
              }}
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Currently
              </span>
              <h2 className="font-display mt-4 max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
                Now: leading at Eurostep.
              </h2>
              <p className="mt-4 max-w-xl text-muted">
                Frontend Developer &amp; Team Lead since June 2022 — I own
                architecture, code review, and delivery for concurrent
                Shopify, BigCommerce and Magento storefronts, and mentor the
                team that ships them.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <a
                    href="#experience"
                    className="inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    See the experience →
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="#contact"
                    className="inline-block rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                  >
                    Open to new roles →
                  </a>
                </Magnetic>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-muted-soft underline underline-offset-4 transition-colors hover:text-accent"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
