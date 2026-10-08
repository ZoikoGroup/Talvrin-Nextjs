"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR } from "./HeroSection";

const faqs = [
  {
    question: "What is Talvrin for wealth and advisory research?",
    answer:
      "Talvrin provides evidence-led public-market research and monitoring intended to support professionals’ own analysis and client research processes.",
  },
  {
    question: "Does Talvrin provide personalized financial advice?",
    answer:
      "No. Talvrin is research and intelligence infrastructure. It does not provide personalized financial advice, client-specific recommendations, financial planning or trade execution — client-facing judgment stays with the professional.",
  },
  {
    question: "Can Talvrin help with client research?",
    answer:
      "It can help a professional understand evidence that may inform a client research process — for example, the general relevance of a policy or economic change. It never uses client names, accounts, holdings or goals.",
  },
  {
    question: "Can Talvrin determine whether an investment is suitable for a client?",
    answer:
      "No. Talvrin does not perform client profile matching, risk scoring, or suitability or fiduciary determinations.",
  },
  {
    question: "Does Talvrin create client-ready reports or messages?",
    answer:
      "No. There is no proposal, pitchbook, fact-sheet, client-report or communications-approval workflow. Research can be revisited or reused only according to released capabilities.",
  },
  {
    question: "How does Talvrin improve research quality?",
    answer:
      "By keeping the research question, evidence and view connected; separating source evidence from commentary, analysis and AI assistance; preserving context such as dates and jurisdictions; and surfacing meaningful evidence change for reassessment.",
  },
  {
    question: "How does AI fit into wealth and advisory research?",
    answer:
      "AI can assist with discovery, organization, comparison, summarization and surfacing changes or contradictions. It never becomes an authoritative source, a personalized advisor or a substitute for professional judgment.",
  },
  {
    question: "Which markets does Talvrin cover?",
    answer:
      "Talvrin is global by architecture, but current markets and datasets come from its governed public coverage state. See Market Coverage for what is currently supported.",
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

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:grid-cols-[minmax(0,840px)_minmax(0,407px)] xl:gap-6">
          <Reveal delay={0.1} className="border-b border-ink/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `war-faq-panel-${index}`;
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
            className="relative mx-auto aspect-[407/440] w-full max-w-[407px] overflow-hidden rounded-2xl lg:aspect-[407/627] lg:max-w-none"
          >
            <Image
              src={`${IMAGE_DIR}/wealth-advisory-faq-consultation.webp`}
              alt="An adviser holding a tablet listening to an older client across a table"
              fill
              sizes="(min-width: 1280px) 407px, (min-width: 1024px) 340px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
