"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const faqs = [
  {
    question: "What is Talvrin Fixed Income?",
    answer:
      "Talvrin Fixed Income is an evidence-led research destination for investigating fixed-income market questions through source-linked evidence, context, and continuous monitoring.",
  },
  {
    question: "Does Talvrin provide bond trading or execution?",
    answer:
      "No. Talvrin is a research and intelligence platform — it does not execute trades or manufacture bond recommendations.",
  },
  {
    question: "Does Talvrin tell users which bonds to buy or sell?",
    answer:
      "No. Talvrin explains evidence and context; it does not issue buy, sell, or hold recommendations.",
  },
  {
    question: "Which fixed-income markets does Talvrin cover?",
    answer:
      "Coverage is governed by the Coverage Registry. U.S. Treasuries and U.K. Gilts are the approved initial deep-coverage wedges; other markets follow explicit coverage states.",
  },
  {
    question: "How does Talvrin handle fixed-income sources?",
    answer:
      "Every evidence object carries a canonical source identity, publication time, jurisdiction, version, and its relationship to the research question.",
  },
  {
    question: "Can Talvrin monitor a fixed-income research view?",
    answer:
      "Yes. Change detection tracks whether the evidence supporting a rates view changed, separate from any market-price alerting.",
  },
  {
    question: "How does AI work in fixed-income research?",
    answer:
      "AI assists with discovery, summarization, and comparison of evidence. It does not become an authoritative source or provide investment advice.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Answer-First FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-[840px_423px]">
          <Reveal delay={0.1} className="divide-y divide-ink/10 border-t border-ink/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[17px] font-semibold text-ink">{faq.question}</span>
                    <span className="shrink-0 text-xl font-light text-slate-500" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="max-w-[720px] pb-5 text-base leading-[25.6px] text-slate-600">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={0.2} className="relative hidden min-h-[420px] overflow-hidden rounded-2xl lg:block">
            <Image
              src="/images/fixed-income/fixed-income-faq-speaker.webp"
              alt="A speaker presenting fixed-income research to colleagues"
              fill
              sizes="423px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
