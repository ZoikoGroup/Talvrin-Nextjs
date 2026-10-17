"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const faqs = [
  {
    question: "What is this page?",
    answer:
      "A source-linked research destination for discovering official economic-statistical evidence — part of the Markets › Source Universe sequence, alongside Central Banks, Regulators and Public Companies.",
  },
  {
    question: "Which statistical agencies does Talvrin cover?",
    answer:
      "Coverage is governed by the entity registry and the Coverage Registry. Agencies shown in the directory reflect registry presence only — depth of series coverage is confirmed separately before it is claimed.",
  },
  {
    question: "Are the published values real observations?",
    answer:
      "Yes, where displayed. Every figure links back to the issuing agency's own release — never a generated or estimated substitute standing in for the official source.",
  },
  {
    question: "How does Talvrin handle revisions?",
    answer:
      "Revisions and corrections are tracked as separate, dated events with the original vintage preserved — a current value never silently overwrites a prior one.",
  },
  {
    question: "What does “seasonally adjusted” mean here?",
    answer:
      "It reflects exactly what the issuing agency states about its own adjustment methodology — adjusted or not seasonally adjusted — shown explicitly rather than normalized or assumed.",
  },
  {
    question: "Is this investment advice?",
    answer:
      "No. Economic-statistics releases are evidence; Talvrin's interpretation is not the issuing authority, and nothing on this page constitutes advice or a prediction.",
  },
  {
    question: "Can I monitor changes to a series?",
    answer:
      "Monitoring follows approved research and source scope. It tracks whether a release or vintage changed, not a guaranteed real-time notification channel.",
  },
];

export default function AnswerFirstFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Answer-First FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,840fr)_minmax(0,423fr)]">
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
              src="/images/economic-statistics/economic-statistics-faq-video-call.webp"
              alt="A researcher on a video call while working at a laptop"
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
