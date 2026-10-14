"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is Talvrin’s research process?",
    answer:
      "Ask, discover, inspect, build, monitor, and reassess. These stages describe an evidence-led workflow that keeps a research view connected to its supporting sources.",
  },
  {
    question: "Does Talvrin make investment decisions?",
    answer:
      "No. Talvrin is a research and intelligence platform, not an execution venue or investment adviser. It does not provide trade execution, personalized portfolio advice, or manufactured investment recommendations. Decisions remain entirely with the researcher.",
  },
  {
    question: "What happens when evidence changes?",
    answer:
      "When an underlying source is revised or new contradictory evidence emerges, the monitoring layer flags the material change rather than silently mutating your saved view. You are prompted to inspect what changed, compare versions, and reassess your thesis.",
  },
  {
    question: "How does AI fit?",
    answer:
      "AI assists the research workflow by discovering candidate sources, comparing documents, flagging discrepancies, and explaining context in plain language. It operates within explicit trust boundaries — evidence remains fully inspectable and provenance is always preserved.",
  },
];

export default function FaqSection() {
  // First item open by default as in Figma
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggle = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header Block */}
        <div className="max-w-[760px]">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[1.2px] text-[#6c5ce7]">
              ANSWER-FIRST FAQ
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl font-bold leading-[1.18] tracking-tight text-[#171335] sm:text-4xl lg:text-[38px]">
              Frequently asked, answered first.
            </h2>
          </Reveal>
        </div>

        {/* 2-column Layout: Accordion on Left, Image Card on Right */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-14">
          {/* Accordion */}
          <div className="divide-y divide-[#171335]/10 border-t border-b border-[#171335]/10">
            {faqs.map((faq, idx) => {
              const isOpen = openIndexes.includes(idx);
              return (
                <Reveal key={faq.question} delay={0.15 + idx * 0.05}>
                  <div>
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="flex w-full items-center justify-between py-5 text-left transition-colors duration-150 hover:text-[#6c5ce7]"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[17px] font-semibold text-[#171335]">
                        {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className="ml-4 shrink-0 text-2xl font-light text-[#5d5a72] transition-transform duration-200"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-5">
                        <p className="text-[16px] leading-relaxed text-[#5d5a72]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Right Column: Image Card */}
          <Reveal delay={0.25} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] overflow-hidden rounded-2xl border border-[#171335]/[0.08] bg-[#f6f5fb] p-2 shadow-sm transition-all duration-200 hover:border-[#171335]/20 hover:shadow-md">
              <div className="relative aspect-[400/500] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/how-talvrin-works/faq-preview.png"
                  alt="Frequently asked questions preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
