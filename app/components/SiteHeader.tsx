"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Magnetic from "./Magnetic";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);
  const [active, setActive] = useState<string>("");
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [underline, setUnderline] = useState({ left: 0, width: 0, opacity: 0 });

  useMotionValueEvent(scrollY, "change", (v) => setCondensed(v > 40));

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => !!el);

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
    <motion.header
      animate={{
        paddingTop: condensed ? 10 : 18,
        paddingBottom: condensed ? 10 : 18,
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        condensed ? "border-border-soft bg-background/90" : "border-transparent bg-background/40"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm tracking-tight text-foreground">
          <span className="text-accent">{"{"}</span>
          Igli Maksuti
          <span className="text-accent">{"}"}</span>
        </a>
        <nav className="relative hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted sm:flex">
          {nav.map((item) => (
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
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-1 h-px bg-accent"
          />
        </nav>
        <Magnetic strength={0.25}>
          <a
            href="mailto:iglimaksuti15@gmail.com"
            className="rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent hover:shadow-[0_0_24px_-6px_var(--accent)]"
          >
            Get in touch
          </a>
        </Magnetic>
      </div>
    </motion.header>
  );
}
