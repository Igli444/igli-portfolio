import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import SectionIndex from "./components/SectionIndex";
import SiteHeader from "./components/SiteHeader";
import Hero from "./components/sections/Hero";
import WhatIDo from "./components/sections/WhatIDo";
import StackSection from "./components/sections/StackSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import WorkSection from "./components/sections/WorkSection";
import CredentialsSection from "./components/sections/CredentialsSection";
import ContactSection from "./components/sections/ContactSection";

function SectionDivider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="divider-diagonal" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex-1 bg-grain">
      <CursorGlow />
      <ScrollProgress />
      <SectionIndex />
      <SiteHeader />

      <main id="top">
        <Hero />
        <WhatIDo />
        <SectionDivider />
        <StackSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <WorkSection />
        <SectionDivider />
        <CredentialsSection />
        <ContactSection />
      </main>

      <footer className="border-t border-border-soft px-6 py-8 text-center font-mono text-xs text-muted-soft">
        © 2026 Igli Maksuti. Built with Next.js, TypeScript, Tailwind CSS &amp; Motion.
      </footer>
    </div>
  );
}
