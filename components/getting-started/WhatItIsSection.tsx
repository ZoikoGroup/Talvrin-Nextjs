import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const points = [
  "Source-linked research and monitoring for global public markets.",
  "A workspace connecting questions, evidence, context, research views, and monitoring.",
  "A system where source evidence remains independently inspectable.",
  "AI-assisted where appropriate, with provenance separation.",
  "Designed for self-directed investors, professionals, research teams, and institutions.",
];

export default function WhatItIsSection() {
  return (
    <section id="what-it-is" className="scroll-mt-32 bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">What Talvrin Is — And Is Not</SectionEyebrow>
          <SectionHeading>Set the category before the task.</SectionHeading>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-9 grid grid-cols-1 overflow-hidden rounded-[14px] border border-ink/10 bg-ink/10 sm:grid-cols-2"
        >
          <div className="bg-surface px-[26px] py-7">
            <p className="pb-4 text-[13px] font-bold uppercase tracking-[0.65px] text-[#2e7d5b]">
              What It Is
            </p>
            <ul className="divide-y divide-ink/8">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-[10px] py-3">
                  <span aria-hidden="true" className="text-[#2e7d5b]">
                    ✓
                  </span>
                  <span className="text-[15px] leading-[23.25px] text-ink">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[260px] sm:min-h-0">
            <Image
              src="/images/getting-started/getting-started-category-colleagues-walking.webp"
              alt="Colleagues discussing research while walking through an office"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
