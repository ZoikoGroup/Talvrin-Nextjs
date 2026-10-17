"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is this page?",
    answer:
      "A source-linked research destination for discovering public-company disclosures and supported\nissuer evidence — the final destination in the Markets › Source Universe sequence, alongside\nEconomic Statistics, Central Banks and Regulators.",
  },
  {
    question: "Which companies does Talvrin cover?",
    answer:
      "Coverage varies by market, jurisdiction, source rights, and released capability, governed strictly by the Coverage Registry. Directory presence does not imply live evidence depth.",
  },
  {
    question: "Are filings shown exactly as published?",
    answer:
      "Yes. Filings retain their original issuer title, publication timestamp, reporting period, jurisdiction, and unmodified source text, without summarization replacing the original record.",
  },
  {
    question: "How does Talvrin handle amendments and restatements?",
    answer:
      "Amendments and restatements are tracked as separate, dated events within the document lineage, preserving the complete revision trail rather than silently overwriting past filings.",
  },
  {
    question: "How are similarly named companies told apart?",
    answer:
      "Entities are resolved through canonical identifiers (such as LEI and ISIN), exchange listings, and domicile verification — never inferred or merged automatically from ticker symbols alone.",
  },
  {
    question: "Is this investment advice?",
    answer:
      "No. Talvrin is a research and market intelligence platform. It does not provide investment, legal, or tax advice, nor any recommendation to buy, sell, or hold financial instruments.",
  },
  {
    question: "Can I monitor an issuer for new filings?",
    answer:
      "Yes. Continuous monitoring allows researchers to track issuer updates, amendments, and newly verified disclosures as they appear in the Coverage Registry.",
  },
];

export default function PublicCompaniesFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F6F5FB] py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1281px] px-4 sm:px-6 xl:px-0">
        <Reveal>
          <SectionEyebrow tone="amber">ANSWER-FIRST FAQ</SectionEyebrow>
          <SectionHeading className="mt-3">
            Frequently asked, answered first.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_400px] xl:grid-cols-[840px_416px] xl:justify-between xl:gap-14">
          {/* Left: Accordion list */}
          <Reveal delay={0.1} className="divide-y divide-[#171335]/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="py-1">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors duration-200"
                  >
                    <span className="text-[17px] font-semibold text-[#171335]">
                      {faq.question}
                    </span>
                    <span
                      className="shrink-0 text-xl font-normal text-[#5D5A72]"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-5 pt-1">
                      <p className="whitespace-pre-line text-base leading-[25.6px] text-[#5D5A72]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </Reveal>

          {/* Right: Showcase Image Card */}
          <Reveal
            delay={0.2}
            className="relative mx-auto aspect-[416/584] w-full max-w-[416px] overflow-hidden rounded-2xl bg-[#D53A3A]"
          >
            <Image
              src="/images/markets/public-companies/image_667.png"
              alt="Public company frequent questions and evidence guidance"
              fill
              sizes="(min-width: 1024px) 416px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
