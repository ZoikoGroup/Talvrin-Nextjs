import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const steps = [
  {
    label: "Ask",
    body: "Begin with a company, issuer, security, event, filing, or research question — a structured research object, not a ticker quote.",
  },
  {
    label: "Discover",
    body: "Find filings, issuer disclosures, regulatory/official sources, and supporting context under source, coverage, and rights controls.",
  },
  {
    label: "Inspect",
    body: "Open the underlying source and review period, publication time, jurisdiction, and version/amendment — never hidden behind a summary.",
  },
  {
    label: "Understand",
    body: "See how evidence supports, challenges, updates, or contextualizes the question, with fact, analysis, and AI layers kept distinct.",
  },
  {
    label: "Build",
    body: "Preserve a research view and the evidence behind it — never an auto-generated recommendation label.",
  },
  {
    label: "Monitor",
    body: "Keep the view connected to material evidence and assumptions, surfacing governed source changes.",
  },
  {
    label: "Reassess",
    body: "Return when new or revised evidence changes the evidence base, with what changed shown clearly.",
  },
];

export default function WorkflowSection() {
  return (
    <section id="equity-research" className="scroll-mt-24 bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">Core Workflow</SectionEyebrow>
          <SectionHeading inverted>Own the research process, not the price terminal.</SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="mt-9 flex flex-wrap items-center gap-2.5">
            {/* Each arrow sits inside its step so a wrapped row never starts with one. */}
            {steps.map((step, index) => (
              <li key={step.label} className="flex items-center gap-2.5">
                <span className="whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase text-white">
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <span className="text-white/30" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.label} delay={index * 0.04}>
              <h3 className="text-xs font-bold uppercase tracking-wide text-accent-amber">
                {step.label}
              </h3>
              <p className="mt-1.5 text-sm leading-5 text-white/75">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
