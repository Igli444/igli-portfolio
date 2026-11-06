import PipelineDiagram from "../PipelineDiagram";
import SplitText from "../SplitText";
import { RevealGroup, RevealItem } from "../Reveal";

export default function WhatIDo() {
  return (
    <section id="approach" className="mx-auto max-w-6xl px-6 py-28">
      <RevealGroup>
        <RevealItem>
          <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
            <SplitText text="What doesn't scale, breaks." />
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mt-4 max-w-2xl text-muted">
            A storefront is only as good as the architecture under it. I own
            that layer — from the first component to the team that ships it.
          </p>
        </RevealItem>
      </RevealGroup>

      <PipelineDiagram />
    </section>
  );
}
