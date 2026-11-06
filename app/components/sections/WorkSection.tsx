import WorkShowcase from "../WorkShowcase";
import SplitText from "../SplitText";
import { RevealGroup, RevealItem } from "../Reveal";

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
            clients. Filter by platform, hover for the story, click through —
            they&apos;re all real, live sites.
          </p>
        </RevealItem>
      </RevealGroup>

      <div className="mt-14">
        <WorkShowcase />
      </div>
    </section>
  );
}
