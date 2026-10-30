"use client";

import { motion } from "motion/react";
import NetworkBackground from "./components/NetworkBackground";
import ScrollProgress from "./components/ScrollProgress";
import Counter from "./components/Counter";
import Magnetic from "./components/Magnetic";
import { RevealGroup, RevealItem } from "./components/Reveal";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: 5, suffix: "+", label: "years in e-commerce engineering" },
  { value: 8, suffix: "+", label: "live storefronts shipped" },
  { value: 3, suffix: "", label: "platforms: Shopify, BigCommerce, Magento" },
];

const stack = {
  Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3 / SCSS", "Angular"],
  Backend: ["Node.js", "PHP", "Laravel", "MySQL"],
  "E-commerce": ["Shopify (Liquid)", "BigCommerce (Handlebars)", "Magento 2"],
  Integration: ["REST API", "GraphQL API", "Payment gateways", "Third-party apps"],
};

const roles = [
  {
    title: "Frontend Developer & Team Lead",
    company: "Eurostep Srl",
    period: "June 2022 — Present",
    current: true,
    points: [
      "Architect and develop custom Shopify, BigCommerce, and Magento storefronts using Liquid, Handlebars, HTML5, SCSS, TypeScript and modern JavaScript.",
      "Lead a development team — own task planning, mentoring, and delivery quality across concurrent client projects.",
      "Own the code review process, enforcing coding standards and scalable architecture across the codebase.",
      "Architect reusable, responsive UI component libraries with React.js, Next.js, Tailwind CSS, and Node.js-powered backend services.",
      "Drive UX, performance, and mobile-responsiveness improvements across high-traffic storefronts.",
      "Integrate REST/GraphQL APIs, third-party apps, and payment gateways for seamless checkout and data flows.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Eurostep Srl",
    period: "February 2022 — May 2022",
    current: false,
    points: [
      "Built responsive websites with HTML5, CSS3, and JavaScript.",
      "Assisted with React.js implementation and REST API integration.",
    ],
  },
];

const projects = [
  {
    platform: "BigCommerce",
    names: ["Trony", "Faba", "Milano Malpensa Boutique", "HBrands", "MissBikini", "Times"],
    detail: "Customized themes using Handlebars and SCSS; integrated REST and GraphQL APIs.",
  },
  {
    platform: "Shopify",
    names: ["Bertoldo", "Bresciani"],
    detail: "Customized themes using Liquid and JavaScript; developed reusable UI components.",
  },
  {
    platform: "Magento",
    names: ["Magento 2 storefronts"],
    detail: "Configured modules and supported performance optimization.",
  },
];

const certifications = [
  "Headless at Shopify for Developers (2025)",
  "Liquid Storefronts for Theme Developers (2025)",
  "Shopify Development (2025)",
  "BigCommerce Development Certification (2025)",
];

export default function Home() {
  return (
    <div className="flex-1 bg-grain">
      <ScrollProgress />

      <header className="fixed top-0 inset-x-0 z-50 border-b border-border-soft bg-background/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm tracking-tight text-foreground">
            <span className="text-accent">{"{"}</span>
            Igli Maksuti
            <span className="text-accent">{"}"}</span>
          </a>
          <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted sm:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="group relative py-1 transition-colors hover:text-foreground">
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <Magnetic strength={0.25}>
            <a
              href="mailto:iglimaksuti15@gmail.com"
              className="rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </Magnetic>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <NetworkBackground />
          </div>
          <div className="bg-mesh pointer-events-none absolute inset-0" />

          <RevealGroup
            className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-44 pb-28"
            stagger={0.14}
          >
            <RevealItem>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                Senior Full Stack Developer — E-Commerce Architect &amp; Team Lead
              </p>
            </RevealItem>

            <RevealItem>
              <h1 className="font-display max-w-4xl text-6xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
                Hi, I&apos;m Igli.
                <br />
                <span className="text-gradient">I architect storefronts</span>
                <br />
                that hold up at scale.
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="max-w-xl text-lg leading-8 text-muted">
                I turn e-commerce requirements into fast, maintainable platforms —
                Shopify, BigCommerce and Magento on the front, React.js, Next.js and
                Node.js underneath. Based in Tirana, Albania, leading a development
                team at Eurostep Srl.
              </p>
            </RevealItem>

            <RevealItem>
              <div className="flex flex-wrap gap-4">
                <Magnetic>
                  <a
                    href="#work"
                    className="inline-block rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    See the work →
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="#contact"
                    className="inline-block rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                  >
                    Book a call
                  </a>
                </Magnetic>
              </div>
            </RevealItem>

            <RevealItem>
              <dl className="mt-6 grid grid-cols-1 gap-8 border-t border-border-soft pt-10 sm:grid-cols-3">
                {stats.map((stat) => (
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

        {/* What I do */}
        <section className="mx-auto max-w-6xl px-6 py-28">
          <RevealGroup>
            <RevealItem>
              <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
                What doesn&apos;t scale, breaks.
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-4 max-w-2xl text-muted">
                A storefront is only as good as the architecture under it. I own that
                layer — from the first component to the team that ships it.
              </p>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3" stagger={0.1}>
            {[
              {
                n: "01",
                title: "Architect",
                body: "Multi-platform storefronts on Shopify, BigCommerce and Magento, built for performance and reuse.",
              },
              {
                n: "02",
                title: "Lead",
                body: "Plan the work, mentor the team, and own the code review bar that keeps the codebase scalable.",
              },
              {
                n: "03",
                title: "Ship",
                body: "React.js, Next.js, TypeScript and Tailwind CSS on top of Node.js — full stack, end to end.",
              },
            ].map((item) => (
              <RevealItem key={item.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group h-full rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent/50"
                >
                  <span className="font-mono text-xs text-muted-soft">{item.n}</span>
                  <h3 className="font-display mt-3 text-xl font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
                  <div className="mt-6 h-px w-8 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
                </motion.div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <div className="mx-auto max-w-6xl px-6">
          <div className="divider-diagonal" />
        </div>

        {/* Stack */}
        <section id="stack" className="mx-auto max-w-6xl px-6 py-28">
          <RevealGroup>
            <RevealItem>
              <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
                The stack
              </h2>
            </RevealItem>
          </RevealGroup>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {Object.entries(stack).map(([group, items]) => (
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

        <div className="mx-auto max-w-6xl px-6">
          <div className="divider-diagonal" />
        </div>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
          <RevealGroup>
            <RevealItem>
              <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
                Experience
              </h2>
            </RevealItem>
          </RevealGroup>

          <div className="relative mt-14 space-y-14">
            <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-border sm:block" />
            {roles.map((role) => (
              <RevealGroup key={role.title} className="relative grid grid-cols-1 gap-6 sm:grid-cols-[220px_1fr] sm:pl-10">
                <span className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-accent bg-background sm:block">
                  {role.current && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-accent"
                      animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                </span>
                <RevealItem>
                  <p className="font-display text-lg font-medium text-foreground">{role.title}</p>
                  <p className="text-sm text-muted">{role.company}</p>
                  <p className="mt-1 font-mono text-xs text-muted-soft">{role.period}</p>
                </RevealItem>
                <RevealItem>
                  <ul className="space-y-2.5 text-sm leading-6 text-muted">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              </RevealGroup>
            ))}
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6">
          <div className="divider-diagonal" />
        </div>

        {/* Work */}
        <section id="work" className="mx-auto max-w-6xl px-6 py-28">
          <RevealGroup>
            <RevealItem>
              <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
                Selected work
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-4 max-w-2xl text-muted">
                Live storefronts built and maintained for international retail clients.
              </p>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3" stagger={0.1}>
            {projects.map((project) => (
              <RevealItem key={project.platform}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 24px 60px -24px rgba(217,143,78,0.35)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="h-full rounded-2xl border border-border bg-surface p-7"
                >
                  <span className="inline-block rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
                    {project.platform}
                  </span>
                  <ul className="mt-5 space-y-1 text-sm font-medium text-foreground">
                    {project.names.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm leading-6 text-muted">{project.detail}</p>
                </motion.div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <div className="mx-auto max-w-6xl px-6">
          <div className="divider-diagonal" />
        </div>

        {/* Certifications */}
        <section className="mx-auto max-w-6xl px-6 py-28">
          <RevealGroup className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <RevealItem>
              <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
                Education &amp; certifications
              </h2>
              <p className="mt-3 font-medium text-foreground">BA in Informatics</p>
              <p className="text-sm text-muted">University of Tirana · 2019 — 2022</p>
            </RevealItem>
            <RevealItem>
              <ul className="grid grid-cols-1 gap-2 text-sm text-muted sm:text-right">
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </RevealItem>
          </RevealGroup>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 pb-32">
          <RevealGroup>
            <RevealItem>
              <div className="ring-glow relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-20 text-center">
                <div className="pointer-events-none absolute inset-0 opacity-50">
                  <NetworkBackground />
                </div>
                <div className="relative">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                    For founders &amp; agencies
                  </p>
                  <h2 className="font-display mx-auto mt-5 max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl">
                    Have a storefront to build or a team to lead?
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl text-muted">
                    Based in Tirana, Albania. Open to senior full stack and technical
                    lead roles in e-commerce.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                    <Magnetic>
                      <a
                        href="mailto:iglimaksuti15@gmail.com"
                        className="inline-block rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                      >
                        iglimaksuti15@gmail.com
                      </a>
                    </Magnetic>
                    <Magnetic>
                      <a
                        href="https://www.linkedin.com/in/igli-maksuti-061400284/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                      >
                        LinkedIn
                      </a>
                    </Magnetic>
                    <span className="rounded-full border border-border px-7 py-3.5 text-sm text-muted">
                      +355 69 954 5105
                    </span>
                  </div>
                  <p className="mt-9 font-mono text-xs text-muted-soft">
                    Albanian (Native) · English (C1) · Italian (B2)
                  </p>
                </div>
              </div>
            </RevealItem>
          </RevealGroup>
        </section>
      </main>

      <footer className="border-t border-border-soft px-6 py-8 text-center font-mono text-xs text-muted-soft">
        © 2026 Igli Maksuti. Built with Next.js, TypeScript, Tailwind CSS &amp; Motion.
      </footer>
    </div>
  );
}
