import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const steps = [
  {
    label: "Acknowledgment",
    body: "Once a channel is connected, you will see an authoritative receipt only after the receiving security system actually confirms it — never a guessed success state.",
  },
  {
    label: "Triage",
    body: "Severity and classification are assigned internally by the accountable security team, not by the reporter.",
  },
  {
    label: "Follow-up",
    body: "Any additional-information request comes only through the approved security-owned method — never general marketing or support automation.",
  },
];

export default function WhatHappensNextSection() {
  return (
    <section id="next-steps" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,268px)] lg:items-start xl:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow>What Happens Next</SectionEyebrow>
            <SectionHeading>What happens after you report.</SectionHeading>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.label} delay={index * 0.06}>
                <div className="flex h-full flex-col gap-2.5 rounded-xl border border-ink/10 bg-white p-[22.8px]">
                  <p className="text-xs font-bold uppercase tracking-[0.6px] text-accent-amber">
                    {step.label}
                  </p>
                  <p className="text-sm leading-[21.7px] text-ink">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-4">
            <div className="rounded-xl border border-ink/10 bg-white px-[22.8px] py-5">
              <p className="text-sm leading-[22.4px] text-ink">
                We do not publish a response-time commitment, bug-bounty program, safe-harbor policy, or
                CVE process here until approved security governance establishes one. A report is never
                shown as accepted until the receiving security system authoritatively confirms it — a
                timeout never masquerades as success.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="relative mx-auto aspect-[268/318] w-full max-w-[268px] overflow-hidden rounded-2xl lg:mx-0 lg:mt-[89px]"
        >
          <Image
            src={`${IMG}/security-contact-next-steps-team.webp`}
            alt="Two colleagues reviewing data on a tablet"
            fill
            sizes="(min-width: 1024px) 268px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
