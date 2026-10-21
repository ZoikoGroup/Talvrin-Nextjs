"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function ResearchGuidesHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#171335] text-[#f6f5fb]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_12%,rgba(108,92,231,0.22)_0%,rgba(108,92,231,0)_65%),radial-gradient(circle_at_90%_86%,rgba(185,129,50,0.14)_0%,rgba(185,129,50,0)_60%)]"
      />

      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-[116px] lg:py-[108px]">
        <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <Reveal className="flex w-full max-w-[785px] flex-col items-start">
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.09em] text-[#b98132]">
              Resources / Research Guides
            </p>

            <h1 className="mt-5 font-sans text-[40px] font-bold leading-[1.1] tracking-[-0.56px] text-[#f6f5fb] sm:text-[48px] lg:mt-6 lg:text-[56px] lg:leading-[61.6px]">
              Research Guides
            </h1>

            <p className="mt-5 max-w-[640px] font-sans text-[17px] font-normal leading-[1.6] text-[rgba(246,245,251,0.8)] sm:text-[19px] sm:leading-[30.4px]">
              Clear, repeatable workflows for public markets — frame a question,
              locate a primary source, verify it, and preserve a citation you
              can defend.
            </p>

            <form
              action="#"
              onSubmit={(e) => e.preventDefault()}
              className="mt-7 flex w-full max-w-[670px] flex-wrap items-stretch gap-[10px]"
            >
              <label htmlFor="research-guides-search" className="sr-only">
                Search a research task or topic
              </label>
              <input
                id="research-guides-search"
                type="search"
                placeholder="Search a research task or topic"
                className="min-w-[240px] flex-1 rounded-lg bg-white px-[18.8px] py-[15.8px] font-sans text-[16px] font-normal text-[#171335] placeholder:text-[#757575] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6c5ce7]"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-[#f6f5fb] px-[26px] py-[15px] font-sans text-[16px] font-semibold text-[#171335] transition-colors hover:bg-white"
              >
                Search
              </button>
            </form>

            <p className="mt-7 max-w-[560px] font-sans text-[13px] font-normal leading-[20.8px] text-[rgba(246,245,251,0.5)]">
              Educational process guidance. Research and intelligence only —
              not investment advice, a recommendation, or trade execution.
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative aspect-[386/326] w-full max-w-[386px] shrink-0 self-stretch overflow-hidden rounded-[16px] bg-white lg:w-[386px]"
          >
            <Image
              src="/images/research-guides/research-guides-hero-desk.webp"
              alt="Researcher discussing a sourced claim during an evidence review"
              fill
              priority
              sizes="(max-width: 1023px) 90vw, 386px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
