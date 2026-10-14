"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const filterCategories = [
  "By research topic",
  "By subject / issuer",
  "By date saved",
  "By lifecycle state",
  "By jurisdiction",
];

const cardsData = [
  {
    title: "FOMC guidance thesis",
    badge: "CONCEPTUAL",
    description: "Policy guidance view linked to Federal Reserve statements.",
    date: "Saved 02 Aug 2026",
  },
  {
    title: "Issuer earnings follow-up",
    badge: "CONCEPTUAL",
    description: "Working view tracking a single issuer’s disclosure cadence.",
    date: "Saved 18 Jul 2026",
  },
  {
    title: "Sovereign debt coverage review",
    badge: "CONCEPTUAL",
    description: "Comparative view across supported sovereign markets.",
    date: "Saved 09 Jun 2026",
  },
  {
    title: "Regulatory filing watch",
    badge: "CONCEPTUAL",
    description: "Saved view tied to a specific regulatory source set.",
    date: "Saved 14 May 2026",
  },
  {
    title: "Cross-market comparison",
    badge: "CONCEPTUAL",
    description: "Research view relating evidence across two linked markets.",
    date: "Saved 30 Apr 2026",
  },
  {
    title: "Sector rotation working view",
    badge: "CONCEPTUAL",
    description: "Thematic research object spanning several equity sectors.",
    date: "Saved 27 May 2026",
  },
];

export default function ScopeSection() {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">SCOPE</SectionEyebrow>
          <SectionHeading>
            Find saved research, within approved access.
          </SectionHeading>
          <SectionLede>
            Illustrative categories only — conceptual, not an index of real saved objects or accounts.
          </SectionLede>
        </Reveal>

        {/* Filter categories pills */}
        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2.5">
          {filterCategories.map((cat, idx) => {
            const isActive = idx === activeFilter;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(idx)}
                className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                  isActive
                    ? "border border-[#6c5ce7] bg-[#6c5ce7]/10 text-[#6c5ce7]"
                    : "border border-[#5d5a72]/20 bg-white text-[#5d5a72] hover:border-[#6c5ce7]/40 hover:text-[#171335]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </Reveal>

        {/* Grid layout matching Figma */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <Reveal delay={0.1}>
            <div className="flex h-full min-h-[162px] flex-col justify-between rounded-[14px] border border-[#5d5a72]/15 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#6c5ce7]/30 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[15px] font-bold text-[#171335]">{cardsData[0].title}</h3>
                  <span className="rounded-full border border-[#5d5a72]/25 px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#5d5a72]">
                    {cardsData[0].badge}
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-[22px] text-[#5d5a72]">
                  {cardsData[0].description}
                </p>
              </div>
              <span className="mt-4 text-xs text-[#5d5a72]">{cardsData[0].date}</span>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={0.15}>
            <div className="flex h-full min-h-[162px] flex-col justify-between rounded-[14px] border border-[#5d5a72]/15 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#6c5ce7]/30 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[15px] font-bold text-[#171335]">{cardsData[1].title}</h3>
                  <span className="rounded-full border border-[#5d5a72]/25 px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#5d5a72]">
                    {cardsData[1].badge}
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-[22px] text-[#5d5a72]">
                  {cardsData[1].description}
                </p>
              </div>
              <span className="mt-4 text-xs text-[#5d5a72]">{cardsData[1].date}</span>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={0.2}>
            <div className="flex h-full min-h-[162px] flex-col justify-between rounded-[14px] border border-[#5d5a72]/15 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#6c5ce7]/30 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[15px] font-bold text-[#171335]">{cardsData[2].title}</h3>
                  <span className="rounded-full border border-[#5d5a72]/25 px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#5d5a72]">
                    {cardsData[2].badge}
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-[22px] text-[#5d5a72]">
                  {cardsData[2].description}
                </p>
              </div>
              <span className="mt-4 text-xs text-[#5d5a72]">{cardsData[2].date}</span>
            </div>
          </Reveal>

          {/* Image Card spanning 2 rows on lg desktop */}
          <Reveal delay={0.25} className="row-span-1 sm:row-span-2">
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-[14px] border border-[#5d5a72]/15 bg-[#f6f5fb] shadow-sm">
              <Image
                src="/images/saved-research/saved-research-scope-categories.webp"
                alt="Saved research scope visualization"
                fill
                sizes="(max-width: 1024px) 100vw, 305px"
                className="object-cover object-center"
              />
            </div>
          </Reveal>

          {/* Card 4 */}
          <Reveal delay={0.2}>
            <div className="flex h-full min-h-[162px] flex-col justify-between rounded-[14px] border border-[#5d5a72]/15 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#6c5ce7]/30 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[15px] font-bold text-[#171335]">{cardsData[3].title}</h3>
                  <span className="rounded-full border border-[#5d5a72]/25 px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#5d5a72]">
                    {cardsData[3].badge}
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-[22px] text-[#5d5a72]">
                  {cardsData[3].description}
                </p>
              </div>
              <span className="mt-4 text-xs text-[#5d5a72]">{cardsData[3].date}</span>
            </div>
          </Reveal>

          {/* Card 5 */}
          <Reveal delay={0.25}>
            <div className="flex h-full min-h-[162px] flex-col justify-between rounded-[14px] border border-[#5d5a72]/15 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#6c5ce7]/30 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[15px] font-bold text-[#171335]">{cardsData[4].title}</h3>
                  <span className="rounded-full border border-[#5d5a72]/25 px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#5d5a72]">
                    {cardsData[4].badge}
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-[22px] text-[#5d5a72]">
                  {cardsData[4].description}
                </p>
              </div>
              <span className="mt-4 text-xs text-[#5d5a72]">{cardsData[4].date}</span>
            </div>
          </Reveal>

          {/* Card 6 */}
          <Reveal delay={0.3}>
            <div className="flex h-full min-h-[162px] flex-col justify-between rounded-[14px] border border-[#5d5a72]/15 bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#6c5ce7]/30 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[15px] font-bold text-[#171335]">{cardsData[5].title}</h3>
                  <span className="rounded-full border border-[#5d5a72]/25 px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#5d5a72]">
                    {cardsData[5].badge}
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-[22px] text-[#5d5a72]">
                  {cardsData[5].description}
                </p>
              </div>
              <span className="mt-4 text-xs text-[#5d5a72]">{cardsData[5].date}</span>
            </div>
          </Reveal>
        </div>

        {/* Section Footnote */}
        <Reveal delay={0.35} className="mt-8">
          <p className="text-sm leading-relaxed text-[#5d5a72]">
            Search and sort activate only once an authorized research index is available; this page never previews private saved objects.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
