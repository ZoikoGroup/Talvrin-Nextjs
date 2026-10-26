"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "Does Talvrin have named institutional clients?",
    answer:
      "No institutional client counts, logos or testimonials are published on this page. Any such proof would require individual permission and is not implied by this architecture description.",
  },
  {
    question: "Can my organization get an account today?",
    answer:
      "Access follows the evaluation route above: a described requirement, qualification and routing, then a governed discussion before any commitment is made.",
  },
  {
    question: "Is Talvrin a trading or execution platform for institutions?",
    answer:
      "No. Talvrin is a research and intelligence platform. It does not execute trades or provide investment recommendations.",
  },
  {
    question: "How does Talvrin treat evidence differently across jurisdictions?",
    answer:
      "Jurisdiction context stays explicit per record, with authority-aligned references shown only where approved rather than inferred.",
  },
  {
    question: "Who is responsible for my organization’s regulated decisions?",
    answer:
      "The institution retains the decision and its responsibility. Talvrin's research supports judgment; it does not take it.",
  },
  {
    question: "How do I start a conversation with Talvrin?",
    answer:
      "Use the evaluation route above to describe your requirement, or route it directly to the responsible commercial owner for review.",
  },
];

export default function AnswerFirstFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow>Answer-First FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,840px)_minmax(0,404px)] lg:items-start lg:justify-between">
          <Reveal delay={0.1} className="border-b border-ink/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `gi-faq-${index}`;
              return (
                <div key={faq.question} className="border-t border-ink/10 first:border-t-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[17px] font-semibold text-ink">{faq.question}</span>
                    <span className="shrink-0 text-xl font-light text-muted" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p
                      id={panelId}
                      className="max-w-[720px] pb-5 text-base leading-[25.6px] text-muted"
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
            className="relative hidden aspect-[404/489] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src={`${IMG}/global-institutions-faq-meeting.webp`}
              alt="Two colleagues discussing documents across a table"
              fill
              sizes="(min-width: 1024px) 404px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
