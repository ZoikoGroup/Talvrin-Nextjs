import React from "react";
import Image from "next/image";

interface FAQCard {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQCard[] = [
  {
    question: "How are Middle East sources classified?",
    answer:
      "Every source record carries a source_class value — official, licensed, public, or other controlled taxonomy — set independently of jurisdiction.",
  },
  {
    question: "How are political and financial-institution sources dated?",
    answer:
      "Each carries its own effective_period and published_at timestamp; neither is inferred from a related institution or country.",
  },
  {
    question: "What happens when a claim becomes outdated?",
    answer:
      "A named claim owner reviews it at a governed interval; expired or incorrect claims are corrected or unpublished, not left live.",
  },
];

export default function RegionalResearchFAQ() {
  return (
    <section className="w-full min-h-screen bg-white text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - FAQ Content & Cards (8 Columns on Large Screens) */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Subtitle / Category Breadcrumb */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#B98132] uppercase mb-3">
            REGIONAL RESEARCH FAQ
          </span>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-4">
            How Middle East evidence is classified and dated.
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mb-8 max-w-xl">
            Short answers to how source classification, contextual dating and
            claim review work specifically for this region.
          </p>

          {/* FAQ Cards Grid (3 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-[#F6F5FB] rounded-2xl p-5 shadow-sm border border-slate-200/60 flex flex-col justify-start"
              >
                <h3 className="text-xs sm:text-sm font-bold text-[#171335] leading-snug mb-3">
                  {item.question}
                </h3>
                <p className="text-[11px] leading-relaxed text-slate-500 font-normal">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image Card (4 Columns on Large Screens) */}
        <div className="lg:col-span-4 relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/east/7.png"
            alt="Regional Research FAQ - Team collaboration"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
