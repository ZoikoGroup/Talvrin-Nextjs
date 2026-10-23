"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is Talvrin for financial institutions?",
    answer:
      "Talvrin helps institutional research teams examine the source, calculation, context and change history behind public-market claims. It supports decisions; it does not take them.",
  },
  {
    question: "Is this investment advice, brokerage or trading infrastructure?",
    answer:
      "No. Talvrin is a research and intelligence platform. It does not execute trades, make suitability determinations, provide proprietary trading signals or give investment recommendations.",
  },
  {
    question: "How is a number or claim validated?",
    answer:
      "Each claim stays linked to its originating source, with its date, calculation method and validation state visible. Reported and calculated figures are labelled separately, and unresolved conflicts or gaps are shown directly rather than filled with inferred values.",
  },
  {
    question: "Does Talvrin offer SSO, APIs or team collaboration for institutions?",
    answer:
      "Only where a capability has been released and approved for your scope. Institutional delivery options such as SSO, API access and collaboration features are shown as available only once they pass every release gate.",
  },
  {
    question: "What coverage and data rights apply?",
    answer:
      "Market, jurisdiction, instrument, refresh frequency and historical depth depend on approved coverage and source rights. Display and export permissions are enforced server-side, and contract-specific terms are handled privately.",
  },
  {
    question: "How do we start a conversation with Talvrin?",
    answer:
      "Use the institutional enquiry form below to share high-level requirements. Qualification, legal review and service scope are assessed case by case — submitting an enquiry does not guarantee eligibility or availability.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow>Answer-first FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end xl:grid-cols-[minmax(0,840px)_minmax(0,411px)] xl:justify-between">
          <Reveal delay={0.1} className="border-b border-ink/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `fi-faq-${index}`;
              return (
                <div key={faq.question} className="border-t border-ink/10 first:border-t-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left sm:gap-6"
                  >
                    <span className="text-base font-semibold text-ink">{faq.question}</span>
                    <span className="shrink-0 text-xl font-light text-slate-500" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p
                      id={panelId}
                      className="max-w-[720px] pb-5 text-base leading-[26px] text-slate-600"
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </Reveal>

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[411/488] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src={`${IMG}/fi-faq-laptop.webp`}
              alt="Two colleagues reviewing a laptop at a standing desk"
              fill
              sizes="(min-width: 1280px) 411px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
