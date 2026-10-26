"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer?: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question:
      "Does Talvrin cover Japan, Australia, Singapore or other Asia-Pacific markets today?",
    answer:
      "No Asia-Pacific jurisdiction or source record is published yet. This page will state country-level availability directly, once released, rather than implying coverage from the region's existence.",
  },
  {
    id: 2,
    question: 'Is "Asia-Pacific" a single legal or regulatory region?',
    answer:
      "No, Asia-Pacific spans dozens of distinct legal and regulatory regimes. Each jurisdiction carries its own independent record and regulatory status.",
  },
  {
    id: 3,
    question:
      "If one Asia-Pacific market is supported one day, does that mean the whole region is covered?",
    answer:
      "No. Coverage is granted and released on a strict jurisdiction-by-jurisdiction basis. Support for one market never implies or grants coverage for any neighboring market.",
  },
  {
    id: 4,
    question:
      "Will research be available in Japanese, Mandarin, Korean or other local scripts?",
    answer:
      "Local scripts are supported only after dedicated rendering and input testing. Each language requirement is evaluated and verified separately.",
  },
  {
    id: 5,
    question:
      "How are market holidays and time zones handled across so many jurisdictions?",
    answer:
      "Market-holiday calendars and trading sessions are tracked independently per jurisdiction to avoid assuming trading state or publication times across time zones.",
  },
  {
    id: 6,
    question: "I'm a security researcher — where do I report an issue?",
    answer:
      "Security disclosures and research findings can be reported directly via our Security Contact channel for responsible disclosure.",
  },
];

export default function AnswerFirstFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-screen bg-[#F6F5FB] text-[#171335] py-16 px-6 sm:px-12 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - FAQ Content (8 Columns on Large Screens) */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Subtitle / Category Breadcrumb */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6C5CE7] uppercase mb-3">
            ANSWER-FIRST FAQ
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171335] leading-[1.15] mb-8">
            Frequently asked, answered first.
          </h2>

          {/* Accordion List */}
          <div className="w-full border-t border-slate-200/80 divide-y divide-slate-200/80">
            {FAQ_DATA.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.id} className="py-5">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#171335] pr-4 leading-snug group-hover:text-[#6C5CE7] transition-colors">
                      {item.question}
                    </span>
                    <span className="flex-shrink-0 text-slate-400 group-hover:text-[#6C5CE7] transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && item.answer && (
                    <div className="mt-3 pr-8">
                      <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column - Image Card (4 Columns on Large Screens) */}
        <div className="lg:col-span-4 relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/asia/8.png"
            alt="Frequently asked questions - Team presentation and discussion"
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
