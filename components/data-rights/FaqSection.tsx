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
    question: "What does Data Rights mean at Talvrin?",
    answer:
      "It's how Talvrin treats licensing, entitlement, and permitted-use requirements as part of evidence governance — deciding what can be displayed, shared, exported, or kept, action by action and context by context.",
  },
  {
    question: "Does Talvrin having access mean every user can see the data?",
    answer:
      "No. Talvrin's access to a source is separate from your entitlement to it. Identity, workspace role, provider entitlement, and policy are evaluated as separate checks.",
  },
  {
    question: "Why can a source be visible but not openable?",
    answer:
      "Seeing that a source exists, or its permitted metadata, is a different right from opening or displaying its content. When no permitted source-open path exists, Talvrin shows the metadata and the limitation instead of a fabricated \"Open source\" action.",
  },
  {
    question: "Does Talvrin redistribute third-party data?",
    answer:
      "Only where the rights permit it. Exports, API responses, downloads, alerts, email, collaboration, and integrations each run their own rights check — permitted research use doesn't automatically permit redistribution.",
  },
  {
    question: "Does Data Rights describe my privacy rights?",
    answer:
      "No. This page covers rights over source content and evidence. Personal-data privacy rights are a separate trust domain covered by Privacy.",
  },
  {
    question: "Can AI use restricted source material?",
    answer:
      "Normalizing, analyzing, or AI-assisting a source never widens its rights. AI-assisted output can't display or redistribute restricted material the source itself couldn't.",
  },
  {
    question: "What happens when rights change?",
    answer:
      "The product updates through the governed rights registry, not hard-coded copy. The current limitation is shown, and permitted audit metadata or research history is preserved without exposing restricted content.",
  },
  {
    question: "Are all markets and sources licensed globally?",
    answer:
      "No. A global architecture doesn't mean global rights. Jurisdiction-sensitive rights are enforced from approved data, never assumed from geolocation.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Answers First" tone="amber" title="Data Rights frequently asked questions." />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,800px)_minmax(0,465px)] lg:justify-between">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `rights-faq-${index}`;
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
            className="relative mx-auto aspect-[465/553] w-full max-w-[465px] overflow-hidden rounded-2xl lg:mx-0"
          >
            <Image
              src={`${IMAGE_DIR}/data-rights-faq-team.webp`}
              alt="A smiling team standing together in a bright office"
              fill
              sizes="(min-width: 1024px) 465px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
