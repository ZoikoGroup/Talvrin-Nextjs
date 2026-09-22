"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is Talvrin?",
    answer:
      "Talvrin is a source-linked research and monitoring platform for global public markets. It helps users discover evidence, build research views, and monitor the underlying information for meaningful change.",
  },
  {
    question: "Who is Talvrin for?",
    answer:
      "Self-directed investors, investment professionals, research teams, and financial institutions who need to see the evidence behind a conclusion, not just the conclusion itself.",
  },
  {
    question: "Does Talvrin provide investment advice?",
    answer:
      "No. Talvrin is a research and intelligence platform. It does not execute trades or manufacture buy, sell, or hold recommendations.",
  },
  {
    question: "What makes Talvrin different from financial news?",
    answer:
      "Every claim links back to source-linked evidence, with provenance, timing, jurisdiction, and rights preserved rather than smoothed over.",
  },
  {
    question: "Does Talvrin use AI?",
    answer:
      "Yes, to assist with search, summarization, comparison, and change detection — always subordinate to sourced evidence, never as an authoritative source itself.",
  },
  {
    question: "Which markets does Talvrin cover?",
    answer:
      "Coverage expands through a governed market, jurisdiction, and source registry. Current coverage status is always stated explicitly rather than implied.",
  },
  {
    question: "Can Talvrin monitor research after I finish it?",
    answer:
      "Yes. A research view stays connected to its evidence, and Talvrin surfaces meaningful changes since your last review.",
  },
  {
    question: "Where does Talvrin get its information?",
    answer:
      "From primary, official, and licensed sources, each carrying a visible authority and rights classification on its evidence card.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Answer Engine</SectionEyebrow>
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

          <Reveal delay={0.2} className="relative hidden min-h-[420px] overflow-hidden rounded-2xl lg:block">
            <Image
              src="/images/home/Frame 52.png"
              alt="Team reviewing an AI governance framework presentation in a meeting room"
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
