"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function ResearchGuidesCTA() {
  return (
    <section className="w-full border-t-[0.8px] border-[rgba(23,19,53,0.08)] bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 lg:py-20">
        <Reveal className="mx-auto flex max-w-[640px] flex-col items-center gap-5 text-center">
          <h2 className="font-sans text-[24px] font-bold leading-[1.25] text-[#171335] sm:text-[30px] sm:leading-[36px]">
            Every worked example traces back to a source you can open yourself.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans text-[14px] font-semibold">
            <Link href="/research/source-methodology" className="text-[#6c5ce7] hover:underline">
              Source Methodology
            </Link>
            <span className="text-[rgba(23,19,53,0.2)]">·</span>
            <Link href="/resources/glossary" className="text-[#6c5ce7] hover:underline">
              Glossary
            </Link>
            <span className="text-[rgba(23,19,53,0.2)]">·</span>
            <Link href="/resources/contact-support" className="text-[#6c5ce7] hover:underline">
              Report a correction
            </Link>
          </div>

          <p className="max-w-[560px] font-sans text-[13px] font-normal leading-[20.8px] text-[#5d5a72]">
            Educational guidance only — not individualized investment, legal or
            tax advice. Worked examples are reproducible, clearly hypothetical,
            or sourced with a time-stamped citation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
