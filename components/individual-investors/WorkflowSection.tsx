import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "./shared";

const steps = [
  { label: "Ask", body: "Begin with a market, issuer, security, economic event, policy issue, or research question." },
  { label: "Discover", body: "Find relevant evidence and supporting context using governed sources." },
  {
    label: "Inspect",
    body: "Open and review the underlying sources — identity, timing, period, jurisdiction, version, and access remain visible.",
  },
  { label: "Understand", body: "See how evidence supports, contradicts, updates, or contextualizes the question." },
  { label: "Build", body: "Develop and preserve a research view connected to the evidence." },
  {
    label: "Monitor",
    body: "Continue watching the evidence and assumptions that matter — no notification noise.",
  },
  { label: "Reassess", body: "Return when new information changes the evidence base. Judgment stays with you." },
];

export default function WorkflowSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="How Talvrin Supports Individual Research"
            title="Ask → Discover → Inspect → Understand → Build → Monitor → Reassess."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <ol className="flex flex-wrap items-center gap-2.5">
            {steps.map((step, index) => (
              <li key={step.label} className="flex items-center gap-2.5">
                <span className="rounded-full border border-ink/10 bg-surface px-4 py-2.5 text-xs font-semibold uppercase text-ink">
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <span aria-hidden="true" className="text-ink/30">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.label} delay={index * 0.04}>
              <h3 className="text-xs font-bold uppercase tracking-wide text-accent-amber">
                {step.label}
              </h3>
              <p className="mt-1.5 text-sm leading-5 text-muted">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
