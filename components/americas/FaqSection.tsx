"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-coverage/shared";

const IMG = "/images/global/Americas";

const faqs = [
  {
    question: "Does Talvrin cover the United States, Canada or Mexico today?",
    answer:
      "No North American jurisdiction or source record is published yet. This page will state country-level availability directly, once released, rather than implying coverage from the region’s existence.",
  },
  {
    question: "Does Talvrin cover Brazil or other Latin American markets?",
    answer:
      "Not yet. Latin America and the Caribbean are shown as sub-regions until country-level records are approved, so no specific national dataset is implied.",
  },
  {
    question: "If the U.S. is supported one day, does that mean all of North America is covered?",
    answer:
      "No. The United States, Canada and Mexico each carry their own record. Availability in one never implies availability in another.",
  },
  {
    question: "What languages will Americas research be available in?",
    answer:
      "The English interface is available sitewide. Spanish, Portuguese and French source-language support is not yet verified for any Americas jurisdiction and will be listed here only once it is.",
  },
  {
    question: "How is this page different from Global Coverage?",
    answer:
      "Global Coverage describes every region at a high level. This page goes one level down for the Americas, listing its sub-areas and jurisdictions with their own status.",
  },
  {
    question: "I’m a security researcher — where do I report an issue?",
    answer:
      "Please use Security Contact for responsible disclosure rather than general support or enquiry channels.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Answer-first FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:grid-cols-[minmax(0,840px)_minmax(0,409px)] xl:justify-between">
          <Reveal delay={0.1} className="border-b border-ink/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `americas-faq-${index}`;
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
                    <p id={panelId} className="max-w-[720px] pb-5 text-base leading-6 text-slate-600">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </Reveal>

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[409/495] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src={`${IMG}/americas-faq-team.webp`}
              alt="Team gathered around a table in a meeting"
              fill
              sizes="(min-width: 1280px) 409px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
