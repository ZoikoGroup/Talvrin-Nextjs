"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is Talvrin for investment professionals?",
    answer:
      "Talvrin is a source-linked research and monitoring platform designed to help analysts, portfolio professionals, and researchers investigate markets and securities with inspectable evidence and context, preserve a research view, and monitor the underlying information for meaningful change.",
  },
  {
    question: "How can Talvrin improve professional investment research?",
    answer:
      "By keeping the path back to the evidence intact. Research stays organized around the question, the source chain is preserved rather than rebuilt, and monitoring surfaces changes that may require reassessment — so less time goes into reconstruction and more into interpretation.",
  },
  {
    question: "Does Talvrin provide investment recommendations or execute trades?",
    answer:
      "No. There is no trade execution, no buy/sell/hold rating, no target price, and no portfolio action. A research view is a synthesis with its supporting and challenging evidence, not a recommendation.",
  },
  {
    question: "Can I inspect the sources behind Talvrin research?",
    answer:
      "Yes. Every evidence card carries source identity, class, original title, publication time, effective or reference period, jurisdiction, version state, rights, and its relationship to the question — with a route to open the source where permitted.",
  },
  {
    question: "How does Talvrin use AI for professional research?",
    answer:
      "AI assists with search and evidence discovery, document and source summarization, research organization, and explaining relationships or surfacing contradictions. It is never the authoritative evidence source, and generated content carries a persistent provenance label distinct from source evidence.",
  },
  {
    question: "Does Talvrin replace analysts?",
    answer:
      "No. Judgment and responsibility remain human. Talvrin organizes evidence and keeps it reviewable; the professional reassesses the view.",
  },
  {
    question: "Can Talvrin help with team review and institutional memory?",
    answer:
      "It makes the basis of a view inspectable, so colleagues and governance functions can see why a conclusion was reached, and it preserves evidence and reasoning beyond a single session or analyst. That is not a built-in approval, audit, or compliance workflow.",
  },
  {
    question: "Which markets and datasets are available?",
    answer:
      "Coverage comes from the governed Coverage Registry and is stated per market or domain as Deep Coverage, Supported, Limited/Beta, Planned, or Architecture-ready. A global architecture does not imply global coverage.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Answer-First FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:grid-cols-[minmax(0,840px)_minmax(0,399px)] xl:gap-11">
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
            className="relative hidden aspect-[399/653] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src="/images/solutions/investment-professionals/ip-faq-interview.webp"
              alt="Two colleagues in conversation across a meeting table"
              fill
              sizes="(min-width: 1280px) 399px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
