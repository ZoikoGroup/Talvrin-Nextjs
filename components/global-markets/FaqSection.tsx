"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is Talvrin Global Markets?",
    answer:
      "A public overview of how Talvrin approaches research across global public markets using source-linked evidence, jurisdictional context, governed coverage, research views, and continuous monitoring.",
  },
  {
    question: "Does Global Markets mean every market is supported?",
    answer:
      "No. This page explains the research approach and coverage model. Market Coverage owns the current, market-by-market capability status.",
  },
  {
    question: "What market areas does Talvrin organize?",
    answer: "Fixed Income, Equities, and Macro & Economics, each routing into market-specific research.",
  },
  {
    question: "How does Talvrin handle different jurisdictions?",
    answer:
      "Jurisdiction changes context — regulation, disclosure rules, and source authority — without becoming a directory on this page.",
  },
  {
    question: "What makes this different from financial news?",
    answer: "Every claim links back to source-linked evidence, with provenance and rights preserved.",
  },
  {
    question: "Does Talvrin provide investment advice or execute trades?",
    answer:
      "No. Talvrin is a research and intelligence platform — it does not execute trades or manufacture investment recommendations.",
  },
  {
    question: "How does AI fit into global-market research?",
    answer: "AI assists navigation of evidence; it remains subordinate to sourced facts and policy controls.",
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

        <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
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
                    <p className="max-w-2xl pb-5 text-base leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={0.2} className={clsx("relative hidden min-h-[420px] overflow-hidden rounded-2xl lg:block")}>
            <Image
              src="/images/markets/global-markets/global-markets-faq-handshake.webp"
              alt="Two colleagues shaking hands across a conference table"
              fill
              sizes="320px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
