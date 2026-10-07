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
    question: "Where does Talvrin get its information?",
    answer:
      "From governed source and data inputs, including authoritative sources and appropriately licensed information where applicable. Exact providers and live coverage appear only when registry-backed and publicly approved.",
  },
  {
    question: "Does Talvrin show the original source?",
    answer:
      "Where rights permit it. Source identity stays visible on evidence, and an original deep link or governed viewer is offered only when the current rights state allows it.",
  },
  {
    question: "Are all Talvrin sources official?",
    answer:
      "No. Sources are classified — for example primary, official, licensed, or institutional — as descriptive provenance metadata. A class isn't a quality score and doesn't guarantee completeness or timeliness.",
  },
  {
    question: "How does Talvrin show when a source changed?",
    answer:
      "Through currentness states such as updated, superseded, restricted, or retired, with version and supersession relationships kept visible and history preserved where material.",
  },
  {
    question: "Does global architecture mean every market is covered?",
    answer:
      "No. Coverage comes from the governed registry and is stated per market or domain. Architecture-ready capability is not presented as current source coverage.",
  },
  {
    question: "Does AI create Talvrin data sources?",
    answer:
      "No. AI can help navigate and summarize sources, but it never becomes the source and never synthesizes a source identity where registry metadata is absent.",
  },
  {
    question: "What is the difference between Data Sources and Data Rights?",
    answer:
      "Data Sources explains source identity, classification, provenance, and coverage. Data Rights covers licensing, entitlement, permitted use, and redistribution.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Answers First" tone="amber" title="Data Sources frequently asked questions." />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,800px)_minmax(0,444px)] lg:justify-between">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `sources-faq-${index}`;
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
            className="relative mx-auto aspect-[444/482] w-full max-w-[444px] overflow-hidden rounded-2xl lg:mx-0"
          >
            <Image
              src={`${IMAGE_DIR}/data-sources-faq-team.webp`}
              alt="Overhead view of three colleagues reviewing printed charts at a desk"
              fill
              sizes="(min-width: 1024px) 444px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
