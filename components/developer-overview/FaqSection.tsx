"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is Talvrin Developers?",
    answer:
      "A developer resource area for Talvrin's evidence-led public-markets research platform. Each released capability is shown from the approved developer resource registry above.",
  },
  {
    question: "Does Talvrin have a public API?",
    answer:
      "No public API is released at this time. If and when one is released, it will appear in the registry above with a canonical technical reference.",
  },
  {
    question: "What developer resources are available right now?",
    answer:
      "None are publicly listed yet. This page shows the full planned taxonomy with each destination's real state, so nothing unreleased is presented as live.",
  },
  {
    question: "How does Talvrin handle evidence and provenance?",
    answer:
      "Provenance links, version, timing, jurisdiction and coverage context are preserved through developer surfaces wherever the released contract exposes them, and generated interpretation stays labeled separately from evidence.",
  },
  {
    question: "Is Talvrin a trading API?",
    answer:
      "No. Talvrin is a research and intelligence platform. There is no trade execution and no manufactured investment recommendations.",
  },
  {
    question: "How do I authenticate?",
    answer:
      "Public authentication guidance is not established here. Credential formats, token flows and scopes will only appear alongside an approved, published Authentication reference.",
  },
  {
    question: "Is global architecture the same as global API or data coverage?",
    answer:
      "No. The architecture is designed for global public markets, but released coverage and licensing scope are stated separately — architecture is never presented as universal live coverage.",
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

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end xl:grid-cols-[minmax(0,1fr)_413px] xl:gap-11">
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
                    <p className="max-w-[720px] pb-5 text-base leading-6 text-slate-600">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </Reveal>

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[413/538] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src="/images/developers/developer-overview/developer-overview-faq-pair.webp"
              alt="Two colleagues discussing work at a laptop"
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
