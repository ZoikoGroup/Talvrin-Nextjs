"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const faqItems = [
  {
    question: "How are sources linked to a research answer?",
    answer:
      "Each evidence item carries source identity, original title, publication timing and, where relevant, an effective or reference period, jurisdiction and rights state — with a path back to the source where rights permit.",
  },
  {
    question: "Can I revisit a research view later?",
    answer:
      "A research view is designed as a durable, reviewable object. Saving and revisiting it is owned by Saved Research, and that handoff is only enabled once the capability is verified as available.",
  },
  {
    question: "Does AI replace the original sources?",
    answer:
      "No. AI may assist discovery, comparison, summarization and navigation, but generated output stays labeled, subordinate to the source and is never presented as primary evidence.",
  },
  {
    question: "Is Talvrin a trading platform?",
    answer:
      "No. Talvrin is a research and intelligence platform. It does not execute trades or provide manufactured investment recommendations.",
  },
  {
    question: "Can I start a real research question today?",
    answer:
      "The questions on this page are illustrative. A real, interactive query is gated behind an authenticated, approved workspace — request access to get started.",
  },
  {
    question: "What happens when sources disagree?",
    answer:
      "Both sources and their contextual differences stay visible. Contradictions are surfaced, never silently resolved into a single manufactured conclusion.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow>Answer-First FAQ</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 sm:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-start xl:grid-cols-[minmax(0,840px)_minmax(0,399px)] xl:justify-between">
          <div className="border-b border-ink/10">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `research-workspace-faq-${index}`;
              return (
                <div key={item.question} className="border-t border-ink/10 first:border-t-0">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:py-6"
                    >
                      {item.question}
                      <span aria-hidden="true" className="shrink-0 text-xl font-normal text-ink/50">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div id={panelId} hidden={!isOpen}>
                    <p className="max-w-[720px] pb-6 text-sm leading-7 text-gray-600 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Reveal
            delay={0.2}
            className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:aspect-[16/10] lg:sticky lg:top-24 lg:aspect-[399/515]"
          >
            <Image
              src="/images/product/research-workspace/research-workspace-faq-workshop.webp"
              alt="Smiling colleague leaning over a table to annotate notes during a workshop"
              fill
              sizes="(min-width: 1280px) 399px, (min-width: 1024px) 360px, 100vw"
              className="object-cover object-[center_25%]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
