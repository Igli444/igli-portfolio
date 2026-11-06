import SplitText from "../SplitText";
import { RevealGroup, RevealItem } from "../Reveal";
import { CERTIFICATIONS, EDUCATION } from "../../lib/data";

export default function CredentialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <RevealGroup className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <RevealItem>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            <SplitText text="Education & certifications" />
          </h2>
          <p className="mt-3 font-medium text-foreground">{EDUCATION.degree}</p>
          <p className="text-sm text-muted">
            {EDUCATION.school} · {EDUCATION.period}
          </p>
        </RevealItem>
        <RevealItem>
          <ul className="grid grid-cols-1 gap-2 text-sm text-muted sm:text-right">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
