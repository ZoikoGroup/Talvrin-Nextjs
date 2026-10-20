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
      "A source-linked research destination for discovering central-bank institutions, their official source families and evidence — part of the Markets › Source Universe sequence, positioned alongside Regulators, Economic Statistics and Public Companies.",
  },
  {
    question: "Which institutions does Talvrin cover?",
    answer:
      "Coverage is governed by the entity registry and the Coverage Registry. Institutions shown in the finder reflect registry presence only — depth of source coverage is confirmed separately before it is claimed.",
  },
  {
    question: "Are the sources official?",
    answer:
      "Yes. Every evidence item links back to the issuing institution's own publication — statements, minutes, speeches and reports — rather than a third-party summary standing in for the source.",
  },
  {
    question: "What does \"coverage\" mean here?",
    answer:
      "Coverage describes which institutions, source families and document types have been verified and released by the Coverage Registry — never an assumption that a bank or document type is supported by default.",
  },
  {
    question: "Can I see official statements, minutes or speeches?",
    answer:
      "Where rights and registry confirmation permit, each source family is displayed with its original publication, issuer, date and version — distinct from any Talvrin summary.",
  },
  {
    question: "How are schedule changes or corrected documents handled?",
    answer:
      "Every change is classified into one of eight explicit states — new, updated, corrected, superseded, schedule changed, canceled/delayed, source unavailable, or materiality pending — so nothing disappears silently.",
  },
  {
    question: "Can I monitor changes to central-bank evidence?",
    answer:
      "Monitoring follows approved research and source scope. It tracks whether evidence changed, not a guaranteed real-time notification channel.",
  },
  {
    question: "Is this investment advice?",
    answer:
      "No. Central-bank publications are evidence; Talvrin's interpretation is not the issuing authority, and nothing on this page constitutes advice or a prediction.",
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
              src="/images/markets-central-banks/markets-central-banks-faq-photo.webp"
              alt="A researcher reviewing central-bank evidence on a monitor"
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
