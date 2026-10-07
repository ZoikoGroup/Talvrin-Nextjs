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
    question: "What does Talvrin mean by evidence-first research?",
    answer:
      "Important conclusions stay connected to the source evidence behind them, with a navigable path from the research view back to that evidence wherever the product supports the relationship.",
  },
  {
    question: "What evidence metadata does Talvrin aim to preserve?",
    answer:
      "Source identity and class, original title, publication time, effective or reference period, jurisdiction, version state, rights/access state, evidence relationship, provenance layer, change state, and limitations — each conditional on registry support and publication approval.",
  },
  {
    question: "Does Talvrin treat AI output as evidence?",
    answer:
      "No. AI-assisted interpretation is a separate, persistently labeled layer with source links where relevant. It never receives source-authority styling or guaranteed-fact wording.",
  },
  {
    question: "How does Talvrin handle conflicting evidence?",
    answer:
      "It shows the conflict as-is, keeping contradicting evidence visible and equally navigable rather than forcing a synthesis into certainty.",
  },
  {
    question: "Does a recently retrieved source mean it is current?",
    answer:
      "No. Retrieval or ingestion time is never used to call a source current. Publication time, effective period, and version state are kept as separate facts.",
  },
  {
    question: "Does Talvrin expose every source publicly?",
    answer:
      "No. Rights/access state constrains what can be displayed, linked, quoted, cached, or exported. Restricted content is never exposed beyond permitted use.",
  },
  {
    question: "Does Talvrin guarantee completeness or accuracy?",
    answer:
      "No. Evidence can be partial, conflicting, restricted, or superseded, and those states are shown in plain language. There's no confidence or quality score without an approved methodology.",
  },
  {
    question: "Can I inspect the original source?",
    answer:
      "Where rights permit it, through a descriptive deep link or governed viewer. If access is restricted, the state and the next permitted action are explained instead of a broken link.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Answers First"
            tone="amber"
            title="Evidence Standards frequently asked questions."
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,800px)_minmax(0,440px)] lg:justify-between">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `evidence-faq-${index}`;
              return (
                <Reveal key={faq.question} delay={index * 0.04}>
                  <div
                    className={clsx(
                      "rounded-xl border bg-white transition-colors",
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
            className="relative mx-auto aspect-[440/553] w-full max-w-[440px] overflow-hidden rounded-2xl lg:mx-0"
          >
            <Image
              src={`${IMAGE_DIR}/evidence-standards-faq-colleague.webp`}
              alt="A smiling professional leaning over a desk in a meeting"
              fill
              sizes="(min-width: 1024px) 440px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
