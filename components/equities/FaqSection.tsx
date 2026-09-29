"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is Talvrin Equities?",
    answer:
      "Talvrin Equities is an evidence-led research destination for public-company and equity-security questions, designed to connect research views to inspectable filings, issuer disclosures, market context, and ongoing evidence monitoring.",
  },
  {
    question: "Does Talvrin provide stock tips or buy/sell/hold recommendations?",
    answer:
      "No. Talvrin is a research and intelligence platform. There are no ratings, target prices, or manufactured stock recommendations — the research view stays with you and the evidence behind it.",
  },
  {
    question: "Can I trade stocks through Talvrin?",
    answer:
      "No. There is no trade execution. Talvrin supports research, evidence inspection, and monitoring, not order placement or brokerage.",
  },
  {
    question: "Which equity markets and companies does Talvrin cover?",
    answer:
      "Coverage varies by market, jurisdiction, source rights, and released capability, and comes from the governed Coverage Registry. An Equities label never implies universal stock-market coverage.",
  },
  {
    question: "How does Talvrin handle company filings?",
    answer:
      "A filing is shown with its issuer identity, original title, publication time, reporting period, jurisdiction, version or amendment state, and rights — never hidden behind a summary.",
  },
  {
    question: "Does Talvrin track when a filing changes?",
    answer:
      "Yes. Evidence-change monitoring surfaces what is new, amended, superseded, or unchanged since your last review, with prior versions kept in the research trail.",
  },
  {
    question: "How does AI help with equity research?",
    answer:
      "AI may assist with discovery, comparison, summarization, change identification, and explaining evidence relationships. Generated content is labeled and kept distinct from source evidence.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Answer-First FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:grid-cols-[minmax(0,840px)_minmax(0,404px)] xl:gap-11">
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
            className="relative hidden aspect-[404/564] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src="/images/markets/equities/equities-faq-team.webp"
              alt="Three colleagues discussing work around a table"
              fill
              sizes="(min-width: 1280px) 404px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
