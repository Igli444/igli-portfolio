const nav = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "5+", label: "years in e-commerce engineering" },
  { value: "8+", label: "live storefronts shipped" },
  { value: "3", label: "platforms: Shopify, BigCommerce, Magento" },
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
    <div className="flex-1">
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm text-foreground">
            Igli Maksuti
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:iglimaksuti15@gmail.com"
            className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main id="top" className="bg-grid">
        {/* Hero */}
        <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-40 pb-24">
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            Senior Full Stack Developer — E-Commerce Architect &amp; Team Lead
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Hi, I&apos;m Igli.
            <br />
            <span className="text-gradient">I architect storefronts that hold up at scale.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            I turn e-commerce requirements into fast, maintainable platforms — Shopify,
            BigCommerce and Magento on the front, React.js, Next.js and Node.js underneath.
            Based in Tirana, Albania, leading a development team at Eurostep Srl.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              See the work →
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Book a call
            </a>
          </div>

          <dl className="mt-8 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-4xl font-semibold text-foreground">{stat.value}</dt>
                <dd className="mt-2 text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* What I do */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What doesn&apos;t scale, breaks.
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            A storefront is only as good as the architecture under it. I own that layer —
            from the first component to the team that ships it.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                title: "Architect",
                body: "Multi-platform storefronts on Shopify, BigCommerce and Magento, built for performance and reuse.",
              },
              {
                title: "Lead",
                body: "Plan the work, mentor the team, and own the code review bar that keeps the codebase scalable.",
              },
              {
                title: "Ship",
                body: "React.js, Next.js, TypeScript and Tailwind CSS on top of Node.js — full stack, end to end.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60"
              >
                <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">The stack</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group}>
                <h3 className="font-mono text-sm uppercase tracking-widest text-accent">{group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h2>
          <div className="mt-10 space-y-10">
            {roles.map((role) => (
              <div key={role.title} className="grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-[220px_1fr]">
                <div>
                  <p className="font-medium text-foreground">{role.title}</p>
                  <p className="text-sm text-muted">{role.company}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{role.period}</p>
                </div>
                <ul className="space-y-2 text-sm leading-6 text-muted">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="work" className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected work</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Live storefronts built and maintained for international retail clients.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {projects.map((project) => (
              <div key={project.platform} className="rounded-2xl border border-border bg-surface p-6">
                <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
                  {project.platform}
                </span>
                <ul className="mt-4 space-y-1 text-sm font-medium text-foreground">
                  {project.names.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-6 text-muted">{project.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Education &amp; certifications
          </h2>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-medium text-foreground">BA in Informatics</p>
              <p className="text-sm text-muted">University of Tirana · 2019 — 2022</p>
            </div>
            <ul className="grid grid-cols-1 gap-2 text-sm text-muted sm:text-right">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 pb-32">
          <div className="rounded-3xl border border-border bg-surface px-8 py-16 text-center">
            <p className="font-mono text-sm uppercase tracking-widest text-accent">
              For founders &amp; agencies
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a storefront to build or a team to lead?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Based in Tirana, Albania. Open to senior full stack and technical lead roles
              in e-commerce.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:iglimaksuti15@gmail.com"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                iglimaksuti15@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/igli-maksuti-061400284/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
              <span className="rounded-full border border-border px-6 py-3 text-sm text-muted">
                +355 69 954 5105
              </span>
            </div>
            <p className="mt-8 font-mono text-xs text-muted">
              Albanian (Native) · English (C1) · Italian (B2)
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8 text-center text-xs text-muted">
        © 2026 Igli Maksuti. Built with Next.js, TypeScript &amp; Tailwind CSS.
      </footer>
    </div>
  );
}
