"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const checklist = [
  "Teach a repeatable process with a stated outcome, evidence check and completion criteria.",
  "Label every worked number as reproducible, explicitly hypothetical, or sourced with a time stamp.",
  "Declare each example’s product version and whether a workflow is live or illustrative.",
  "Link back to Source Methodology and the Glossary rather than redefine their terms.",
];

export default function Boundaries() {
  return (
    <section className="w-full bg-[#f6f5fb]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 lg:px-[162px] lg:py-[88px]">
        <Reveal>
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.08em] text-[#b98132]">
            Boundaries
          </p>
        </Reveal>

        <Reveal delay={0.04} className="mt-4 max-w-[760px]">
          <h2 className="font-sans text-[28px] font-bold leading-[1.2] text-[#171335] sm:text-[36px] sm:leading-[43.2px]">
            Learn the process. Inspect the evidence. Make your own decision.
          </h2>
        </Reveal>

        <Reveal
          delay={0.08}
          className="mt-8 grid grid-cols-1 overflow-hidden rounded-[14px] border border-[rgba(23,19,53,0.1)] bg-white md:grid-cols-2"
        >
          <div className="flex flex-col items-start px-6 py-7 sm:px-[26px] sm:py-[28px]">
            <p className="pb-4 font-sans text-[13px] font-bold uppercase tracking-[0.05em] text-[#2e7d5b]">
              A Guide Will
            </p>
            <ul className="w-full">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex gap-[10px] border-t-[0.8px] border-[rgba(23,19,53,0.08)] py-[12.8px] first:border-t-0"
                >
                  <span aria-hidden="true" className="shrink-0 text-[16px] leading-[23.25px] text-[#2e7d5b]">
                    ✓
                  </span>
                  <span className="font-sans text-[15px] font-normal leading-[23.25px] text-[#171335]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[1098/750] w-full md:aspect-auto md:h-full md:min-h-[320px]">
            <Image
              src="/images/research-guides/research-guides-boundaries-desk.webp"
              alt="Two colleagues reviewing evidence together on a tablet"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
