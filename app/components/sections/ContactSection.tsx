import BookingCalendar from "../BookingCalendar";
import Magnetic from "../Magnetic";
import SplitText from "../SplitText";
import { RevealGroup, RevealItem } from "../Reveal";
import { PROFILE } from "../../lib/data";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-32">
      <RevealGroup className="text-center">
        <RevealItem>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            For founders &amp; agencies
          </p>
        </RevealItem>
        <RevealItem>
          <h2 className="font-display mx-auto mt-5 max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl">
            <SplitText text="Have a storefront to build or a team to lead?" />
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            Based in {PROFILE.location}. {PROFILE.availability}.
          </p>
        </RevealItem>
      </RevealGroup>

      <RevealGroup className="mt-10">
        <RevealItem>
          <BookingCalendar />
        </RevealItem>
      </RevealGroup>

      <RevealGroup className="mt-10 flex flex-col items-center gap-4">
        <RevealItem>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-block rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {PROFILE.email}
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={PROFILE.resumeHref}
                download
                className="inline-block rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                Download CV
              </a>
            </Magnetic>
            <span className="rounded-full border border-border px-7 py-3.5 text-sm text-muted">
              {PROFILE.phone}
            </span>
          </div>
        </RevealItem>
        <RevealItem>
          <p className="font-mono text-xs text-muted-soft">{PROFILE.languages}</p>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
