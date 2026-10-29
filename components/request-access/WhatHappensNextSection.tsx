import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const steps = [
  {
    label: "Received",
    text: "You'll see a confirmation with a reference number the moment your request is received — never before.",
  },
  {
    label: "Review",
    text: "Requests are reviewed against the current access and eligibility rules. No approval, invitation, or timing is promised here.",
  },
  {
    label: "Routing",
    text: "Institutional and enterprise requests are routed internally. You won't be asked to resubmit the same information where reuse is possible.",
  },
];

export default function WhatHappensNextSection() {
  return (
    <section id="next-steps" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container className="max-w-[932px]">
        <Reveal>
          <SectionEyebrow tone="amber">What Happens Next</SectionEyebrow>
          <SectionHeading>A transparent process, with no invented timing.</SectionHeading>
        </Reveal>

        <ol className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.label}
              delay={index * 0.08}
              className="flex flex-col gap-2.5 rounded-xl border border-ink/10 bg-white p-5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.6px] text-accent-violet">{step.label}</p>
              <p className="text-sm leading-5 text-ink">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
