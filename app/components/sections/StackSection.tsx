"use client";

import TiltCard from "../TiltCard";
import SplitText from "../SplitText";
import { RevealGroup, RevealItem } from "../Reveal";
import { STACK } from "../../lib/data";

const BADGE: Record<string, string> = {
  "React.js": "Re",
  "Next.js": "N",
  TypeScript: "TS",
  "Tailwind CSS": "TW",
  "JavaScript (ES6+)": "JS",
  HTML5: "H5",
  "CSS3 / SCSS": "CSS",
  Angular: "Ng",
  "Node.js": "Nd",
  PHP: "PHP",
  Laravel: "La",
  MySQL: "My",
  "Shopify (Liquid)": "S",
  "BigCommerce (Handlebars)": "BC",
  "Magento 2": "M2",
  "REST API": "RST",
  "GraphQL API": "GQL",
  "Payment gateways": "$",
  "Third-party apps": "3P",
};

export default function StackSection() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-28">
      <RevealGroup>
        <RevealItem>
          <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
            <SplitText text="The stack" />
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mt-4 max-w-2xl text-muted">
            Client-facing tools in copper, infrastructure in teal — everything
            I reach for to take a storefront from brief to production.
          </p>
        </RevealItem>
      </RevealGroup>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {Object.entries(STACK).map(([group, items], gi) => {
          const teal = gi % 2 === 1;
          return (
            <RevealGroup key={group} stagger={0.04}>
              <RevealItem>
                <h3
                  className="font-mono text-xs uppercase tracking-[0.25em]"
                  style={{ color: teal ? "var(--teal)" : "var(--accent)" }}
                >
                  {group}
                </h3>
              </RevealItem>
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {items.map((item) => (
                  <RevealItem key={item}>
                    <TiltCard max={6}>
                      <div
                        className={`group flex h-full items-center gap-3 rounded-xl border border-border bg-surface p-3.5 transition-colors ${
                          teal ? "hover:border-teal/50" : "hover:border-accent/50"
                        }`}
                      >
                        <span
                          className="flex h-9 w-9 flex-none items-center justify-center rounded-lg font-mono text-[11px] font-medium"
                          style={{
                            background: teal ? "rgba(126,166,158,0.14)" : "var(--accent-soft)",
                            color: teal ? "var(--teal)" : "var(--accent)",
                          }}
                        >
                          {BADGE[item] ?? item.slice(0, 2).toUpperCase()}
                        </span>
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    </TiltCard>
                  </RevealItem>
                ))}
              </div>
            </RevealGroup>
          );
        })}
      </div>
    </section>
  );
}
