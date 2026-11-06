import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { PROFILE } from "./lib/data";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = `${PROFILE.name} — Senior Full Stack Developer`;
const description =
  "Senior full stack developer and e-commerce architect with 5+ years shipping Shopify, BigCommerce and Magento storefronts for international retail brands — React.js, Next.js, TypeScript and Node.js underneath. Open to senior full-stack and team lead roles.";

export const metadata: Metadata = {
  metadataBase: new URL("https://igli-portfolio.vercel.app"),
  title,
  description,
  keywords: [
    "Igli Maksuti",
    "Senior Full Stack Developer",
    "Shopify Developer",
    "BigCommerce Developer",
    "Magento Developer",
    "React Developer",
    "Next.js Developer",
    "E-commerce Architect",
    "Tirana Albania",
  ],
  authors: [{ name: PROFILE.name }],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: PROFILE.name,
    images: ["/igli.png"],
    type: "profile",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/igli.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: "Senior Full Stack Developer",
    email: PROFILE.email,
    telephone: PROFILE.phone,
    url: "https://igli-portfolio.vercel.app",
    image: "https://igli-portfolio.vercel.app/igli.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tirana",
      addressCountry: "AL",
    },
    sameAs: [PROFILE.linkedin],
    knowsAbout: [
      "Shopify",
      "BigCommerce",
      "Magento",
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
    ],
  };

  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
