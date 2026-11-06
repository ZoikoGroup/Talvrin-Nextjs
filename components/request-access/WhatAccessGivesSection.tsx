import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const pillars = [
  { label: "Evidence First", text: "Move from interpretation back to the underlying source material." },
  { label: "Traceability", text: "Source, timing, jurisdiction, version and research relationship stay visible." },
  { label: "Continuous Monitoring", text: "Research stays connected to evidence so meaningful changes can be reassessed." },
  { label: "Global Architecture", text: "Built for global public markets; released coverage is explicit and governed." },
  { label: "Human Judgment", text: "Talvrin improves the information environment; you remain responsible for your decisions." },
  { label: "AI Assistance", text: "AI can discover, organize, compare and summarize — it never becomes the evidence." },
];

export default function WhatAccessGivesSection() {
  return (
    <section id="what-access-gives" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="max-w-[1132px]">
        <Reveal>
          <SectionEyebrow>What Access Gives You</SectionEyebrow>
          <SectionHeading className="max-w-[860px]">
            Understand the evidence-first workflow before you give us anything.
          </SectionHeading>
          <SectionLede>
            Requesting access should earn conversion through fit and clarity — not before you know what
            you&apos;re asking for.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.label}
              delay={index * 0.04}
              className="flex flex-col gap-2.5 rounded-xl border border-ink/10 bg-surface p-5"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.6px] text-accent-amber">{pillar.label}</h3>
              <p className="text-sm leading-5 text-ink">{pillar.text}</p>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative hidden overflow-hidden rounded-xl border border-ink/10 bg-surface lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:block"
          >
            <Image
              src={`${IMG}/request-access-workflow-meeting.png`}
              alt="A research team reviewing charts together around a meeting table"
              fill
              sizes="264px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
