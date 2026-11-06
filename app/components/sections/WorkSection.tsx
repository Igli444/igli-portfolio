import LogoWall from "../LogoWall";
import SplitText from "../SplitText";
import { RevealGroup, RevealItem } from "../Reveal";
import { SHOPIFY_CLIENTS, BIGCOMMERCE_CLIENTS } from "../../lib/data";

export default function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <RevealGroup>
        <RevealItem>
          <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
            <SplitText text="Selected work" />
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mt-4 max-w-2xl text-muted">
            Live storefronts built and maintained for international retail
            clients. Click through — they&apos;re all real, live sites.
          </p>
        </RevealItem>
      </RevealGroup>

      <div className="mt-14 space-y-12">
        <LogoWall platform="Shopify" clients={SHOPIFY_CLIENTS} />
        <LogoWall platform="BigCommerce" clients={BIGCOMMERCE_CLIENTS} />
      </div>
    </section>
  );
}
