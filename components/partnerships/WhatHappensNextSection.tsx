import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const steps = [
  {
    title: "RECEIVED",
    body: (
      <>
        You&apos;ll see a confirmation with a
        <br />
        reference the moment your enquiry
        <br />
        reaches us — never before.
      </>
    ),
  },
  {
    title: "REVIEW",
    body: (
      <>
        A reviewer checks fit against the
        <br />
        principles above and confirms whether
        <br />
        this stays in Partnerships or belongs
        <br />
        on another route.
      </>
    ),
  },
  {
    title: "FOLLOW-UP",
    body: (
      <>
        If a conversation is warranted, you&apos;ll
        <br />
        hear back at the email you provided.
        <br />
        Receipt is not an answer, and silence
        <br />
        is not a decision.
      </>
    ),
  },
];

export default function WhatHappensNextSection() {
  return (
    <section id="whats-next" className="scroll-mt-20 bg-[#F6F5FB] py-16 sm:py-20 lg:py-24">
      <Container className="max-w-[1320px]">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <SectionEyebrow tone="amber">WHAT HAPPENS NEXT</SectionEyebrow>
            <SectionHeading>A transparent process, with no invented timing.</SectionHeading>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {steps.map((step, idx) => (
              <Reveal key={step.title} delay={0.06 * idx} className="h-full">
                <div className="flex h-full flex-col justify-start rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-white p-[21.8px]">
                  <p className="text-[12px] font-bold uppercase tracking-[0.05em] text-[#6C5CE7]">
                    {step.title}
                  </p>
                  <p className="mt-2.5 text-[14px] leading-[21.7px] text-[#171335]">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
