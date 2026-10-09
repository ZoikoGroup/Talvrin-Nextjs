"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../release-notes/shared";
import { IMAGE_DIR } from "./shared";

const faqs = [
  {
    question: "Does Talvrin use AI?",
    answer:
      "Talvrin may use AI to help discover, organize, compare, summarize, and explain research material. Where a capability is available in a given workflow depends on the approved product capability registry, not this page.",
  },
  {
    question: "Is AI output the evidence?",
    answer:
      "No. AI-assisted output is interpretation, not evidence. It carries a persistent text label, and the underlying source material stays separately inspectable.",
  },
  {
    question: "Does Talvrin provide investment recommendations?",
    answer:
      "No. Talvrin is research and market intelligence — not a recommendation engine. No buy/sell/hold call or other directional recommendation is manufactured from AI-assisted output.",
  },
  {
    question: "Can I inspect the sources behind an AI-assisted output?",
    answer:
      "Yes. Material AI statements link to supporting evidence where it exists, so you can move from the output to the source card and the original source, then back to your research context.",
  },
  {
    question: "Does Talvrin guarantee accuracy or completeness?",
    answer:
      "No. Evidence can be partial, conflicting, restricted, or stale, and AI output can be wrong. Talvrin shows those states in plain language rather than hiding them behind a confidence score.",
  },
  {
    question: "Who remains responsible for decisions?",
    answer:
      "You do. Talvrin improves the information environment; it doesn't transfer decision responsibility to AI. In enterprise contexts, an organization's own review and approval processes remain authoritative.",
  },
  {
    question: "How are AI outputs distinguished from evidence?",
    answer:
      "Through the content-origin model: source evidence, Talvrin normalization, Talvrin analysis, AI-assisted output, and user-created content each keep a distinct text label — never color alone.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Answers First" tone="amber" title="AI Principles frequently asked questions." />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,780px)_minmax(0,476px)] lg:justify-between">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `ai-faq-${index}`;
              return (
                <Reveal key={faq.question} delay={index * 0.04}>
                  <div
                    className={clsx(
                      "rounded-xl border bg-surface transition-colors",
                      isOpen ? "border-ink/20" : "border-ink/10"
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        className="w-full rounded-xl px-5 py-4 text-left text-base font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div id={panelId} hidden={!isOpen} className="px-5 pb-5">
                      <p className="text-[15px] leading-6 text-muted">{faq.answer}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal
            delay={0.2}
            className="relative mx-auto aspect-[476/482] w-full max-w-[476px] overflow-hidden rounded-2xl lg:mx-0"
          >
            <Image
              src={`${IMAGE_DIR}/ai-principles-faq-whiteboard.webp`}
              alt="Three colleagues mapping ideas on a large wall display"
              fill
              sizes="(min-width: 1024px) 476px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
