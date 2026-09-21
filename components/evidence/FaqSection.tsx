"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is Talvrin Evidence?",
    answer:
      "Talvrin Evidence is designed to keep public-market research connected to identifiable source material, provenance, timing, context and a path back to the underlying source where permitted.",
  },
  {
    question: "What information should an evidence item show?",
    answer:
      "Where available, an evidence item shows its source name, title and class, current access state, publication time and effective/reference period, jurisdiction, version or supersession, and its relationship to the research object.",
  },
  {
    question: 'Does an "official" or "primary" source mean the information is always correct?',
    answer:
      "No. A primary or official class describes where material comes from, only where the source registry supports that class. It does not mean the information is infallible, complete or current forever.",
  },
  {
    question: "Can I inspect the underlying source?",
    answer:
      "Where rights permit, you can move from interpretation to the underlying source, an approved excerpt or a governed viewer. Where access is not permitted, Talvrin shows only the metadata and actions allowed by policy.",
  },
  {
    question: "What happens when a source is restricted?",
    answer:
      "Restricted content is never labeled as open. Metadata and access state stay visible, and Talvrin never reconstructs restricted source content — by AI or otherwise — as if it were the source.",
  },
  {
    question: "Why does Talvrin separate publication time from the effective period?",
    answer:
      "When something was published and the period it describes can differ, and that difference shapes meaning. Talvrin shows both where known — and leaves unknowns unknown rather than inferring dates.",
  },
  {
    question: "How does Talvrin handle revised or superseded evidence?",
    answer:
      "Updated and superseded evidence carries a changed-state label and lineage. Older evidence stays visible in historical context, so evidence used in an earlier view remains identifiable.",
  },
  {
    question: "Does Talvrin use AI with evidence?",
    answer:
      "AI may assist with discovery, summarization and comparison where permitted. AI-assisted output is labeled, stays distinguishable from evidence, and the underlying sources remain separately inspectable.",
  },
  {
    question: "Does Talvrin assign a single confidence score to every source?",
    answer:
      "No. Talvrin describes evidence by provenance and context rather than generic quality badges. Source classes are applied only where the source registry supports them, and unclassified sources are never auto-upgraded.",
  },
  {
    question: "Does Evidence provide investment advice?",
    answer:
      "No. Talvrin is a research and intelligence platform. Evidence relationships and AI output do not constitute investment, legal, tax or other professional advice, or a recommendation to buy or sell any instrument.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Answer-First FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end xl:grid-cols-[minmax(0,1fr)_438px]">
          <Reveal delay={0.1} className="divide-y divide-ink/10 border-b border-ink/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left sm:gap-6 sm:py-5"
                  >
                    <span className="text-base font-semibold text-ink sm:text-[17px]">{faq.question}</span>
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

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[438/626] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src="/images/product/evidence/evidence-faq-analysts.webp"
              alt="Two colleagues reviewing research together on a laptop"
              fill
              sizes="(min-width: 1280px) 438px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
