"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "Are there any public Data APIs today?",
    answer:
      "Not currently. This catalog will list only interfaces published through the approved Data API Registry, each linked to its own canonical documentation and lifecycle state.",
  },
  {
    question: "How is coverage different from availability?",
    answer:
      "Availability says an interface is released. Coverage says which markets, jurisdictions, or asset classes that interface actually supports. They come from different governed sources and are never collapsed into one badge.",
  },
  {
    question: "Will filters ever hide unpublished datasets?",
    answer:
      "No. Filters operate on public metadata for published interfaces only. Nothing unpublished is hidden behind a filter, because nothing unpublished is listed in the first place.",
  },
  {
    question: "How does Talvrin handle evidence and provenance in a Data API?",
    answer:
      "Where a released contract exposes source, time, jurisdiction, or generated-vs-evidence fields, the catalog describes exactly those fields and how lineage can be inspected — it never manufactures provenance semantics.",
  },
  {
    question: "What happens if I need enterprise or entitlement-gated access?",
    answer:
      "Each interface will name a public-safe access class, such as documentation-visible, account, or entitlement-required. For anything beyond that, raise an enterprise enquiry — entitlement logic is never exposed publicly.",
  },
  {
    question: "Where do I check operational status or recent changes?",
    answer:
      "A public Developer Status source and a maintained Changelog are not released yet, so no interface here carries an operational badge. Once they exist, this catalog will link to them directly.",
  },
  {
    question: "Where do I go until a Data API is released?",
    answer:
      "Start with API Documentation to see how released interfaces will be structured, or the Developer Overview for every planned destination and its real current state.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Answer-First FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end xl:grid-cols-[minmax(0,840px)_minmax(0,381px)] xl:gap-11">
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
            className="relative hidden aspect-[381/538] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src="/images/developers/data-APIs/data-apis-faq-presentation.webp"
              alt="Presenter showing charts on a screen to colleagues"
              fill
              sizes="(min-width: 1280px) 381px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
