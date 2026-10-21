"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Reveal from "@/components/ui/Reveal";

type CardStatus = "published" | "coming-soon";

type GuideCard = {
  tag: string;
  title: string;
  description: string;
  meta: string;
  status: CardStatus;
};

const categoryFilters = ["All", "Find & verify", "Analyze", "Monitor", "Methods"];
const refinementFilters = ["All levels", "All markets", "All guides"];

/** Reading order matches the Figma grid: left-to-right across each row, top row first. */
const cards: GuideCard[] = [
  {
    tag: "Methods",
    title: "Frame a research question",
    description:
      "Specify entity, market, measurement, comparison and date scope before you search for anything.",
    meta: "Foundation · 5 steps · 6 min read",
    status: "published",
  },
  {
    tag: "Find & verify",
    title: "Find a primary market source",
    description:
      "Identify the issuer, regulator, exchange, treasury or central bank behind a claim.",
    meta: "Foundation · 5 steps · 7 min read",
    status: "published",
  },
  {
    tag: "Find & verify",
    title: "Verify a reported financial claim",
    description: "Reconcile a filing value against its period, basis and any later revision.",
    meta: "Foundation · 6 steps · 9 min read",
    status: "published",
  },
  {
    tag: "Methods",
    title: "Build a defensible citation",
    description:
      "Capture the original document, pinpoint location, source type and retrieval record.",
    meta: "Foundation · 4 steps · 5 min read",
    status: "published",
  },
  {
    tag: "Analyze",
    title: "Read a sovereign bond yield",
    description:
      "Compare a quoted yield, its price basis, settlement and compounding assumptions.",
    meta: "Intermediate · 5 steps · 10 min read",
    status: "coming-soon",
  },
  {
    tag: "Methods",
    title: "Understand timestamps and revisions",
    description: "Tell apart the observation period, the publication date and your retrieval date.",
    meta: "Foundation · 4 steps · 6 min read",
    status: "published",
  },
];

function GuideCardItem({ card }: { card: GuideCard }) {
  return (
    <div className="flex h-full flex-col items-start gap-[10px] rounded-[14px] border border-[rgba(23,19,53,0.1)] bg-white p-[22.8px]">
      <div className="flex w-full items-start justify-between gap-2">
        <span className="rounded-[99px] bg-[rgba(23,19,53,0.06)] px-[10px] py-[3px] font-sans text-[11px] font-bold text-[#5d5a72]">
          {card.tag}
        </span>
        {card.status === "coming-soon" && (
          <span className="rounded-[99px] bg-accent-amber/14 px-2 py-[3px] font-sans text-[10px] font-bold uppercase tracking-[0.4px] text-[#8a5a00]">
            Coming soon
          </span>
        )}
      </div>

      <h3 className="font-sans text-[17px] font-bold leading-[1.25] text-[#171335]">
        {card.title}
      </h3>

      <p className="font-sans text-[14px] font-normal leading-[21.7px] text-[#5d5a72]">
        {card.description}
      </p>

      <p className="font-sans text-[12px] font-normal text-[#8a8599]">{card.meta}</p>

      <div className="mt-auto pt-[2px]">
        {card.status === "published" ? (
          <Link href="#" className="font-sans text-[13px] font-bold text-[#6c5ce7] hover:underline">
            Read guide →
          </Link>
        ) : (
          <span className="font-sans text-[13px] font-semibold text-[rgba(23,19,53,0.35)]">
            Not yet published
          </span>
        )}
      </div>
    </div>
  );
}

export default function BrowseGuides() {
  return (
    <section className="w-full bg-[#f6f5fb]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-14 sm:px-10 lg:px-[120px] lg:py-16">
        <Reveal>
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.08em] text-[#b98132]">
            Browse Guides
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-6 flex flex-wrap items-start gap-2">
          {categoryFilters.map((label, idx) => (
            <button
              key={label}
              type="button"
              className={clsx(
                "rounded-[999px] border px-[16.8px] py-[9.8px] font-sans text-[14px] font-semibold transition-colors",
                idx === 0
                  ? "border-[#171335] bg-[#171335] text-[#f6f5fb]"
                  : "border-[rgba(23,19,53,0.14)] bg-white text-[#171335] hover:border-[#171335]/40"
              )}
            >
              {label}
            </button>
          ))}
        </Reveal>

        <Reveal delay={0.08} className="mt-3 flex flex-wrap items-stretch gap-3">
          {refinementFilters.map((label) => (
            <button
              key={label}
              type="button"
              className="inline-flex items-center gap-2 rounded-[8px] border border-[rgba(23,19,53,0.14)] bg-white px-[18.8px] py-[10.8px] font-sans text-[14px] font-semibold text-[#171335]"
            >
              {label}
              <span aria-hidden="true" className="text-[10px] text-[#5d5a72]">
                ▾
              </span>
            </button>
          ))}
        </Reveal>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-sans text-[14px] font-normal text-[#5d5a72]">Showing 6 of 9 guides.</p>
          <p className="font-sans text-[13px] font-semibold text-[#5d5a72]">Sort: Recommended</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal as="div">
            <GuideCardItem card={cards[0]} />
          </Reveal>
          <Reveal as="div" delay={0.04}>
            <GuideCardItem card={cards[1]} />
          </Reveal>
          <Reveal as="div" delay={0.08}>
            <GuideCardItem card={cards[2]} />
          </Reveal>

          {/* Feature image spans both grid rows on desktop (matches the Figma
              box height of ~495px against two 251px/229px card rows + gap). */}
          <Reveal
            as="div"
            delay={0.12}
            className="relative aspect-[573/991] w-full overflow-hidden rounded-[14px] border border-[rgba(23,19,53,0.1)] bg-white lg:row-span-2 lg:aspect-auto lg:h-full"
          >
            <Image
              src="/images/research-guides/research-guides-browse-feature-desk.webp"
              alt="Two analysts reviewing a sourced claim on a laptop"
              fill
              sizes="(max-width: 1023px) 90vw, 287px"
              className="object-cover"
            />
          </Reveal>

          <Reveal as="div" delay={0.16}>
            <GuideCardItem card={cards[3]} />
          </Reveal>
          <Reveal as="div" delay={0.2}>
            <GuideCardItem card={cards[4]} />
          </Reveal>
          <Reveal as="div" delay={0.24}>
            <GuideCardItem card={cards[5]} />
          </Reveal>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="rounded-[8px] border border-[rgba(23,19,53,0.2)] bg-white px-[28.8px] py-[12.8px] font-sans text-[14px] font-semibold text-[#171335] transition-colors hover:border-[#171335]/40"
          >
            Load more
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t-[0.8px] border-[rgba(23,19,53,0.08)] pt-[28.8px] font-sans text-[13px] font-semibold">
          <span className="text-[#5d5a72]">Next:</span>
          <Link href="/research/source-methodology" className="text-[#6c5ce7] hover:underline">
            Source Methodology
          </Link>
          <span className="text-[rgba(23,19,53,0.2)]">·</span>
          <Link href="/resources/glossary" className="text-[#6c5ce7] hover:underline">
            Glossary
          </Link>
        </div>
      </div>
    </section>
  );
}
