"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is Talvrin for asset managers?",
    answer:
      "Talvrin is designed to provide stronger evidence-led research infrastructure across investment workflows by connecting research questions, source-linked evidence, research views, and ongoing monitoring.",
  },
  {
    question: "How can Talvrin improve asset-management research?",
    answer:
      "Talvrin makes public-market research more systematic, traceable, reviewable, reusable, and continuously monitorable without losing the underlying evidence.",
  },
  {
    question: "Does Talvrin manage portfolios or execute trades?",
    answer:
      "No. Talvrin is dedicated research infrastructure and does not perform portfolio management, order routing, trade execution, or order management.",
  },
  {
    question: "Does Talvrin make investment recommendations?",
    answer:
      "No. Talvrin organizes, traces, and monitors evidence. It does not provide buy, sell, or hold advice or automated portfolio recommendations.",
  },
  {
    question: "Can research be reviewed later?",
    answer:
      "Yes. Research views retain full source provenance, timestamps, versions, and reasoning trails so conclusions can be inspected and revisited over time.",
  },
  {
    question: "Does Talvrin support collaboration?",
    answer:
      "Collaboration capabilities are scoped to released features, allowing teams to share evidence foundations, notes, and research views under proper permission governance.",
  },
  {
    question: "Which markets and jurisdictions are supported?",
    answer:
      "Coverage spans major global public markets and sovereign debt jurisdictions, with explicit indicators for regional data rights and governance constraints.",
  },
  {
    question: "How does AI fit into asset-management research?",
    answer:
      "AI assistance is kept strictly subordinate to source evidence with clear provenance tags, never presenting model output as unverified fact or investment authority.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">ANSWER-FIRST FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-8 divide-y divide-slate-900/10 border-b border-slate-900/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={faq.question} delay={0.03 * index}>
                  <div>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors"
                    >
                      <span className="text-base sm:text-[17px] font-semibold font-['IBM_Plex_Sans'] text-[#171335]">
                        {faq.question}
                      </span>
                      <span
                        className="shrink-0 text-2xl font-light font-['IBM_Plex_Sans'] text-[#5D5A72]"
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-5 pr-6">
                        <p className="text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed text-[#5D5A72]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Right Column: Image */}
          <Reveal delay={0.2} className="lg:col-span-4 flex">
            <div className="relative aspect-[388/653] w-full overflow-hidden rounded-2xl border border-slate-900/10 bg-[#F6F5FB] shadow-sm">
              <Image
                src="/asset-managers/image 77.png"
                alt="Asset manager reviewing research and documentation"
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
