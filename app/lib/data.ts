export const PROFILE = {
  name: "Igli Maksuti",
  role: "Senior Full Stack Developer — E-Commerce Architect & Team Lead",
  location: "Tirana, Albania",
  email: "iglimaksuti15@gmail.com",
  phone: "+355 69 954 5105",
  linkedin: "https://www.linkedin.com/in/igli-maksuti-061400284/",
  resumeHref: "/resume.pdf",
  availability: "Open to Senior Full-Stack / Team Lead roles",
  summary:
    "Senior full stack developer with 5+ years architecting scalable e-commerce platforms for international retail brands — Shopify, BigCommerce and Magento on the front, React.js, Next.js and Node.js underneath. I lead the development team at Eurostep Srl, based in Tirana, Albania.",
  languages: "Albanian (Native) · English (C1) · Italian (B2)",
} as const;

export const NAV = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const STATS = [
  { value: 5, suffix: "+", label: "years in e-commerce engineering" },
  { value: 8, suffix: "+", label: "live storefronts shipped" },
  { value: 3, suffix: "", label: "platforms: Shopify, BigCommerce, Magento" },
] as const;

export const STACK = {
  Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3 / SCSS", "Angular"],
  Backend: ["Node.js", "PHP", "Laravel", "MySQL"],
  "E-commerce": ["Shopify (Liquid)", "BigCommerce (Handlebars)", "Magento 2"],
  Integration: ["REST API", "GraphQL API", "Payment gateways", "Third-party apps"],
} as const;

export const ROLES = [
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
] as const;

export type Client = {
  name: string;
  url: string;
  logo?: string;
};

export const SHOPIFY_CLIENTS: Client[] = [
  { name: "Brembo Parts", url: "https://www.bremboparts.com/europe/it", logo: "/logos/brembo.svg" },
  { name: "Bresciani", url: "https://www.bresciani.it/", logo: "/logos/bresciani.png" },
  { name: "Aku", url: "https://www.aku.com/", logo: "/logos/aku.png" },
  { name: "Maison Cashmere", url: "https://maisoncashmere.com/en-eu", logo: "/logos/maison-cashmere.svg" },
  { name: "Lotto", url: "https://www.lotto.it/?market=it", logo: "/logos/lotto.svg" },
  { name: "Stonefly", url: "https://www.stonefly.it/en-row", logo: "/logos/stonefly.png" },
  { name: "Parma Shop", url: "https://www.parmashop.com/", logo: "/logos/parmashop.png" },
];

export const BIGCOMMERCE_CLIENTS: Client[] = [
  { name: "Trony", url: "https://www.trony.it/", logo: "/logos/trony.webp" },
  { name: "H-Brands", url: "https://en.h-brands.com/", logo: "/logos/h-brands.png" },
  { name: "Milan Airports Boutique", url: "https://milanairportsboutique.com/en/", logo: "/logos/milan-airports-boutique.svg" },
  { name: "Faba", url: "https://www.myfaba.it/", logo: "/logos/faba.png" },
];

export const CERTIFICATIONS = [
  "Headless at Shopify for Developers (2025)",
  "Liquid Storefronts for Theme Developers (2025)",
  "Shopify Development (2025)",
  "BigCommerce Development Certification (2025)",
] as const;

export const EDUCATION = {
  degree: "BA in Informatics",
  school: "University of Tirana",
  period: "2019 — 2022",
} as const;
