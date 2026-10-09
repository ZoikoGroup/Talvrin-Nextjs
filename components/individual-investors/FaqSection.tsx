"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMAGE_DIR, SectionIntro } from "./shared";

const faqs = [
  {
    question: "What is Talvrin for individual investors?",
    answer:
      "Talvrin is an evidence-led public-market research and monitoring platform designed to help serious individual investors organize research around sources, context, a research view, and meaningful subsequent changes.",
  },
  {
    question: "Does Talvrin tell me what to buy or sell?",
    answer:
      "No. Talvrin does not provide buy/sell/hold recommendations, stock tips, price targets, or trade execution. It helps you inspect evidence and build your own view — judgment stays with you.",
  },
  {
    question: "How can Talvrin improve my personal investment research?",
    answer:
      "By keeping research organized around your question, keeping source evidence inspectable and distinct from commentary and AI output, preserving the reasoning behind a view, and surfacing evidence changes that may call for reassessment.",
  },
  {
    question: "Does Talvrin remove uncertainty from investing?",
    answer:
      "No. Markets remain uncertain. Talvrin aims to make the evidence behind a view clearer and easier to revisit — not to predict outcomes or guarantee results.",
  },
  {
    question: "How does Talvrin use AI?",
    answer:
      "AI assists with search, summarization, comparison, organization, and surfacing contradictions or changes. It is never the authoritative source: generated content stays visibly separate from source evidence, and if an answer can't be grounded in inspectable evidence, Talvrin says so.",
  },
  {
    question: "Which markets can individual investors research?",
    answer:
      "Coverage is stated per market or domain as Deep Coverage, Supported, Limited/Beta, Planned, or Architecture-ready. A global architecture does not imply global coverage — see Market Coverage for the current, governed status.",
  },
  {
    question: "Can Talvrin monitor research after I finish an analysis?",
    answer:
      "Monitoring is designed to keep a research view connected to its evidence and surface meaningful changes for reassessment. Specific alert channels, cadence, and notification behavior remain product dependencies.",
  },
  {
    question: "Is this only for professional investors?",
    answer:
      "No. Talvrin is built for anyone who wants evidence-led research, including serious individual investors. Professionals and teams have their own Solutions pages with workflows suited to their needs.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Answer-First FAQ" tone="amber" title="Frequently asked, answered first." />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:grid-cols-[minmax(0,840px)_minmax(0,413px)] xl:gap-6">
          <Reveal delay={0.1} className="border-b border-ink/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `ii-faq-panel-${index}`;
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
                    <p id={panelId} className="max-w-[720px] pb-5 text-[15px] leading-[26px] text-muted">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </Reveal>

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[413/654] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src={`${IMAGE_DIR}/individual-investors-faq-presenter.webp`}
              alt="A professional presenting to colleagues in a modern office"
              fill
              sizes="(min-width: 1280px) 413px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
