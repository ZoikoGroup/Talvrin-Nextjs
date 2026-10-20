"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

type Stage = {
  number: string;
  title: string;
  description: string;
};

/** Reading order matches the Figma grid: left-to-right across each row, top row first. */
const stages: Stage[] = [
  {
    number: "01",
    title: "Ask",
    description: "Specify instrument or entity, metric, unit, period, jurisdiction and comparison intent.",
  },
  {
    number: "02",
    title: "Locate",
    description: "Find the original issuer, regulator, exchange, treasury or central-bank publication.",
  },
  {
    number: "03",
    title: "Verify",
    description: "Read the actual record, exact scope and amendments against corroborating originals.",
  },
  {
    number: "04",
    title: "Calculate",
    description: "Apply a documented, deterministic method with units, assumptions and version.",
  },
  {
    number: "05",
    title: "Communicate",
    description: "Show observation and interpretation separately; cite the original and flag gaps.",
  },
  {
    number: "06",
    title: "Monitor",
    description: "When released and entitled, set up change monitoring with a baseline and review.",
  },
];

function StageCard({ stage }: { stage: Stage }) {
  return (
    <div className="flex h-full flex-col items-start gap-[6px] rounded-[14px] border border-[rgba(23,19,53,0.1)] bg-[#f6f5fb] px-[22.8px] py-[24.8px]">
      <span className="flex size-10 items-center justify-center rounded-[10px] bg-[rgba(108,92,231,0.1)] font-sans text-[14px] font-bold text-[#6c5ce7]">
        {stage.number}
      </span>
      <h3 className="pt-2 font-sans text-[16px] font-bold text-[#171335]">{stage.title}</h3>
      <p className="font-sans text-[14px] font-normal leading-[21.7px] text-[#5d5a72]">
        {stage.description}
      </p>
    </div>
  );
}

export default function MethodSection() {
  return (
    <section className="w-full border-b-[0.8px] border-[rgba(23,19,53,0.08)] bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 lg:px-[170px] lg:py-[88px]">
        <Reveal>
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.08em] text-[#6c5ce7]">
            The Same Method, Every Guide
          </p>
        </Reveal>

        <Reveal delay={0.04} className="mt-4 max-w-[760px]">
          <h2 className="font-sans text-[28px] font-bold leading-[1.2] text-[#171335] sm:text-[36px] sm:leading-[43.2px]">
            Ask. Locate. Verify. Calculate. Communicate. Monitor.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-4 max-w-[720px]">
          <p className="font-sans text-[16px] font-normal leading-[25.6px] text-[#5d5a72]">
            Every guide applies the same six-stage research discipline, so a skill
            learned in one guide transfers directly to the next.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal as="div">
            <StageCard stage={stages[0]} />
          </Reveal>
          <Reveal as="div" delay={0.04}>
            <StageCard stage={stages[1]} />
          </Reveal>
          <Reveal as="div" delay={0.08}>
            <StageCard stage={stages[2]} />
          </Reveal>

          {/* Feature image spans both grid rows on desktop (Figma box height
              ~409px against two 196.6px card rows + gap). */}
          <Reveal
            as="div"
            delay={0.12}
            className="relative aspect-[526/817] w-full overflow-hidden rounded-[14px] border border-[rgba(23,19,53,0.1)] bg-[#f6f5fb] lg:row-span-2 lg:aspect-auto lg:h-full"
          >
            <Image
              src="/images/research-guides/research-guides-method-desk.webp"
              alt="Analysts reviewing results together on a laptop"
              fill
              sizes="(max-width: 1023px) 90vw, 263px"
              className="object-cover"
            />
          </Reveal>

          <Reveal as="div" delay={0.16}>
            <StageCard stage={stages[3]} />
          </Reveal>
          <Reveal as="div" delay={0.2}>
            <StageCard stage={stages[4]} />
          </Reveal>
          <Reveal as="div" delay={0.24}>
            <StageCard stage={stages[5]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
