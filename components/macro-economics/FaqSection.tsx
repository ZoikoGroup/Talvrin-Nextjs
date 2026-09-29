"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is Talvrin Macro & Economics?",
    answer:
      "Talvrin Macro & Economics is an evidence-led research destination for economic releases, policy decisions, central-bank communications, and related public-market context.",
  },
  {
    question: "Does Talvrin forecast the economy?",
    answer:
      "No. There are no economic forecasts, rate calls, or meeting probabilities. Talvrin shows source-linked evidence and the relationships between it, never a prediction presented as Talvrin fact.",
  },
  {
    question: "How does Talvrin handle economic releases?",
    answer:
      "A release is shown with its source identity, publication time, reference period, jurisdiction, and revision or version state — publication time, reference period, and revision vintage are kept separate rather than flattened into one date.",
  },
  {
    question: "Does Talvrin track revisions?",
    answer:
      "Yes. Evidence-change monitoring surfaces what is new, updated, revised, superseded, or unchanged since your last review, with version and vintage lineage kept visible.",
  },
  {
    question: "Does Talvrin cover every country and central bank?",
    answer:
      "No. Coverage varies by country, institution, jurisdiction, source rights, and released capability, and comes from the governed Coverage Registry. A Macro & Economics label never implies universal coverage.",
  },
  {
    question: "How is the Economic Calendar related?",
    answer:
      "Economic Calendar is a separate destination. This page explains the relationship and links to it once released, without asserting its coverage, timing, alerts, consensus, or surprise metrics.",
  },
  {
    question: "Does Talvrin provide investment or policy advice?",
    answer:
      "No. Talvrin is a research and intelligence platform. There is no trade execution, investment advice, legal advice, or political advocacy — policy and regulatory material is presented as evidence with its jurisdiction context.",
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

        <Reveal delay={0.1} className="mt-8 max-w-[840px] border-b border-ink/10">
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
      </Container>
    </section>
  );
}
