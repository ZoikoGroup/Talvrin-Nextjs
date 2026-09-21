import { Fragment } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const steps = [
  {
    label: "Question",
    description:
      "A market, issuer, security, economic event, policy issue or research question creates the context.",
  },
  {
    label: "Discover",
    description: "Relevant evidence and supporting context are found.",
  },
  {
    label: "Inspect",
    description: "The user opens and reviews the underlying source where permitted.",
  },
  {
    label: "Understand",
    description:
      "Talvrin can organize relationships and context while preserving source provenance.",
  },
  {
    label: "Build",
    description:
      "The research view remains linked to the evidence that supports, contradicts, updates or contextualizes it.",
  },
  {
    label: "Monitor",
    description:
      "Where available, relevant sources and evidence can remain connected for change review.",
  },
  {
    label: "Reassess",
    description:
      "New or superseding evidence returns the user to the existing research context rather than forcing a rebuild.",
  },
];

export default function ContinuitySection() {
  return (
    <section id="evidence-continuity" className="scroll-mt-20 bg-ink py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">Evidence Continuity</SectionEyebrow>
          <SectionHeading inverted>Evidence remains a first-class object inside research.</SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="mt-9 flex flex-wrap items-center gap-2.5">
            {steps.map((step, index) => (
              <Fragment key={step.label}>
                <li className="rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase text-white">
                  {step.label}
                </li>
                {index < steps.length - 1 && (
                  <li className="text-white/30" aria-hidden="true">
                    →
                  </li>
                )}
              </Fragment>
            ))}
          </ol>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.label} delay={index * 0.04}>
              <h3 className="text-xs font-bold uppercase tracking-wide text-accent-amber">
                {step.label}
              </h3>
              <p className="mt-1.5 text-sm leading-5 text-white/75">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
