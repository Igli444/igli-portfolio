"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import LatticeScene from "../LatticeScene";
import PhotoFrame from "../PhotoFrame";
import Counter from "../Counter";
import Magnetic from "../Magnetic";
import SplitText from "../SplitText";
import { RevealGroup, RevealItem } from "../Reveal";
import { PROFILE, STATS } from "../../lib/data";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.1]);

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0">
        <LatticeScene />
      </motion.div>
      <motion.div style={{ opacity: bgOpacity }} className="bg-mesh pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 pb-28 pt-44 lg:grid-cols-[1fr_280px] lg:gap-16 lg:pt-56">
        <RevealGroup className="order-2 flex flex-col gap-10 lg:order-1" stagger={0.14}>
          <RevealItem>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              {PROFILE.role}
            </p>
          </RevealItem>

          <RevealItem>
            <h1 className="font-display max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
              <SplitText text="Hi, I'm Igli." />
              <br />
              <SplitText text="I architect storefronts" className="text-gradient" delay={0.25} />
              <br />
              <SplitText text="that hold up at scale." delay={0.5} />
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="max-w-xl text-lg leading-8 text-muted">{PROFILE.summary}</p>
          </RevealItem>

          <RevealItem>
            <div className="flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href={PROFILE.resumeHref}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-ink transition-all hover:opacity-90 hover:shadow-[0_0_30px_-6px_var(--accent)]"
                >
                  Download CV
                  <span aria-hidden>↓</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  className="inline-block rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_30px_-6px_var(--accent)]"
                >
                  Book a call
                </a>
              </Magnetic>
              <a
                href="#work"
                className="font-mono text-xs uppercase tracking-widest text-muted-soft transition-colors hover:text-foreground"
              >
                See the work ↓
              </a>
            </div>
          </RevealItem>

          <RevealItem>
            <dl className="mt-6 grid grid-cols-1 gap-8 border-t border-border-soft pt-10 sm:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-5xl font-medium text-foreground">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </dt>
                  <dd className="mt-2 text-sm text-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </RevealItem>
        </RevealGroup>

        <div className="order-1 lg:order-2 lg:mt-8 lg:justify-self-end">
          <PhotoFrame />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-soft">Scroll</span>
        <motion.span
          className="h-10 w-px bg-border"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </div>
    </section>
  );
}
