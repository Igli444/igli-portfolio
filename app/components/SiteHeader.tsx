"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Magnetic from "./Magnetic";
import { NAV, PROFILE } from "../lib/data";
import { EASE_OUT } from "../lib/motion";

export default function SiteHeader() {
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);
  const [active, setActive] = useState<string>("");
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [underline, setUnderline] = useState({ left: 0, width: 0, opacity: 0 });

  useMotionValueEvent(scrollY, "change", (v) => setCondensed(v > 40));

  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href)).filter(
      (el): el is Element => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = active ? linkRefs.current[active] : null;
    if (el) {
      setUnderline({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    } else {
      setUnderline((u) => ({ ...u, opacity: 0 }));
    }
  }, [active]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <AnimatePresence initial={false}>
        {!condensed && (
          <motion.div
            key="announce"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="overflow-hidden border-b border-border-soft/60 bg-background/80 backdrop-blur-md"
          >
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 py-2 font-mono text-[11px] uppercase tracking-widest text-muted transition-colors hover:text-accent"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {PROFILE.availability} — let&apos;s talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ paddingTop: condensed ? 10 : 16, paddingBottom: condensed ? 10 : 16 }}
        transition={{ duration: 0.3, ease: EASE_OUT }}
        className={`border-b backdrop-blur-md transition-colors duration-300 ${
          condensed ? "border-border-soft bg-background/90" : "border-transparent bg-background/40"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 whitespace-nowrap font-mono text-sm tracking-tight text-foreground">
            <span className="text-accent">{"{"}</span>
            Igli Maksuti
            <span className="text-accent">{"}"}</span>
          </a>
          <nav className="relative hidden items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                ref={(el) => {
                  linkRefs.current[item.href] = el;
                }}
                href={item.href}
                className={`relative py-1 transition-colors hover:text-foreground ${
                  active === item.href ? "text-foreground" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
            <motion.span
              animate={{ left: underline.left, width: underline.width, opacity: underline.opacity }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              className="absolute -bottom-1 h-px bg-accent"
            />
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={PROFILE.resumeHref}
              download
              className="hidden whitespace-nowrap rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent lg:inline-block"
            >
              Download CV
            </a>
            <Magnetic strength={0.25}>
              <a
                href={`mailto:${PROFILE.email}`}
                className="whitespace-nowrap rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent hover:shadow-[0_0_24px_-6px_var(--accent)]"
              >
                Get in touch
              </a>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
