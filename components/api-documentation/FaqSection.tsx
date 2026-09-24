"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "Is there a public Talvrin API today?",
    answer:
      "Not currently. This page will list released interfaces only after they pass the approved API Contract Registry and publication gates.",
  },
  {
    question: "What will this page show once an API is released?",
    answer:
      "Each operation will render from one governed structure: identity bar, purpose and prerequisites, parameters, evidence context, errors and limits, and lifecycle and related links. Blocks the contract does not define are omitted rather than invented.",
  },
  {
    question: "How will authentication work?",
    answer:
      "This page may note that authentication is required, but credential formats, scopes, token lifetime and flow belong to the separate approved Authentication reference, which is not yet released.",
  },
  {
    question: "Will examples ever contain real credentials or customer data?",
    answer:
      "No. Credentials, tokens and customer data are never echoed into examples, analytics, URLs or cached search results.",
  },
  {
    question: "How does Talvrin handle evidence and provenance in an API?",
    answer:
      "Where a released contract exposes source, time, jurisdiction, or generated-vs-evidence fields, the documentation describes exactly those fields — it never manufactures a field name or semantic to fill a section.",
  },
  {
    question: "Is Talvrin's global architecture the same as global API coverage?",
    answer:
      "No. The architecture is designed for global public markets, but that is never rendered as live API or data coverage. Released coverage is stated separately and only from a registry entry.",
  },
  {
    question: "Where do I go until an API is released?",
    answer:
      "Start with the Developer Overview, which lists every planned developer destination with its real current state, or raise an enterprise enquiry if you need to talk before anything ships.",
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

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end xl:grid-cols-[minmax(0,840px)_minmax(0,395px)] xl:gap-11">
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
            className="relative hidden aspect-[395/535] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src="/images/developers/API-documentation/api-documentation-faq-team.webp"
              alt="Colleagues reviewing work together at a long desk"
              fill
              sizes="(min-width: 1280px) 395px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
