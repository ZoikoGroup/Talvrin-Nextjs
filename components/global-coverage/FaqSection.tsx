"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What does “Global Coverage” mean on this page?",
    answer:
      "It is the single destination describing governed geographic and source coverage — which regions, institutions, and language/region settings are released, pending, or not yet available — without representing Talvrin’s global architecture as universal access.",
  },
  {
    question: "What does “global by architecture” mean?",
    answer:
      "Talvrin’s research and evidence architecture is designed so it can extend to public markets worldwide. That is a design choice, not a coverage claim — each region and source still needs its own verified, published record.",
  },
  {
    question: "Does Talvrin cover my country or region?",
    answer:
      "Check the region records on this page and Supported Jurisdictions for the current, governed status. If no verified record exists, the status is shown as unknown rather than assumed.",
  },
  {
    question: "How is Global Coverage different from Market Coverage?",
    answer:
      "Market Coverage describes which asset classes and data types are covered. Global Coverage describes where — which regions, institutions, and language/region settings — and their release state.",
  },
  {
    question: "How often is coverage information verified?",
    answer:
      "Each record carries its own last-verified timestamp, tied to an actual governance verification event rather than the date the page was rebuilt. There is no blanket refresh schedule promised for every record.",
  },
  {
    question: "What happens if a region isn’t published yet?",
    answer:
      "It is marked pending approval or not currently available and is never linked as a live destination. Its detail page appears only once its own record is approved and released.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Answer-first FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:grid-cols-[minmax(0,840px)_minmax(0,409px)] xl:justify-between">
          <Reveal delay={0.1} className="border-b border-ink/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `gc-faq-${index}`;
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
              src={`${IMG}/coverage-faq-colleague.webp`}
              alt="Smiling man holding a phone at a meeting table"
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
