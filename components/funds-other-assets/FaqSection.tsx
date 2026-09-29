"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is Talvrin Funds & Other Assets?",
    answer:
      "It is the Talvrin Markets destination for evidence-led research on supported funds and other public-market asset categories, once those categories are actually released under Talvrin’s governed coverage architecture.",
  },
  {
    question: "Does Talvrin currently cover ETFs, mutual funds, REITs, or crypto?",
    answer:
      "No public fund or other-asset category is currently released for Talvrin Markets. Any category that appears here in future will come from the governed Asset and Coverage registries, never from convention.",
  },
  {
    question: "Why isn’t there any fund data on this page?",
    answer:
      "Because no category is released yet. Rather than invent a fund, ticker, price, NAV, or return to make the page feel complete, the current state is stated plainly.",
  },
  {
    question: "Does Talvrin rank or recommend funds?",
    answer:
      "No. There is no ranking, screening, suitability scoring, asset allocation, or manufactured investment recommendation. Talvrin is a research and intelligence platform.",
  },
  {
    question: 'Why did the label change from "Public-Market Assets"?',
    answer:
      "Funds & Other Assets describes what the destination governs — released fund and public-market asset categories — without implying that any particular asset class is already covered.",
  },
  {
    question: "How will Talvrin handle categories once they are released?",
    answer:
      "Each released category carries its registry-approved label and a public coverage state — Deep Coverage, Supported, Limited/Beta, Planned, or Architecture-Ready — with capability governed separately from coverage.",
  },
  {
    question: "What is the role of AI on this page?",
    answer:
      "AI may assist with discovering, comparing, summarizing, and organizing governed evidence. It never becomes the holdings, the benchmark, or a recommendation, and it does not fall back on generic fund knowledge when evidence is insufficient.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Answer-First FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:grid-cols-[minmax(0,840px)_minmax(0,405px)] xl:gap-11">
          <Reveal delay={0.1} className="border-b border-ink/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              return (
                <div key={faq.question} className="border-t border-ink/10 first:border-t-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left sm:gap-6 sm:py-5"
                  >
                    <span className="text-base font-semibold text-ink">{faq.question}</span>
                    <span className="shrink-0 text-xl font-light text-slate-500" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="max-w-[760px] pb-5 text-base leading-6 text-slate-600">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </Reveal>

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[405/583] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src="/images/markets/funds-other-assets/funds-faq-pair-standing.webp"
              alt="Two colleagues reviewing a document while standing in an office"
              fill
              sizes="(min-width: 1280px) 405px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
