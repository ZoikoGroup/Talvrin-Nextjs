"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const faqItems = [
  {
    question: "What is Source Intelligence?",
    answer:
      "Source Intelligence is the source-context layer that helps researchers discover, inspect, compare and revisit the evidence behind a public-market question — publisher identity, timing, jurisdiction, version and rights, kept visible alongside any interpretation.",
  },
  {
    question: "Does a confirmed publisher mean the information is correct?",
    answer:
      "No. A confirmed publisher tells you who released the material and in what role. It does not verify the claim itself — that judgment stays with the researcher.",
  },
  {
    question: "What happens when a date or jurisdiction is unknown?",
    answer:
      "The field stays labeled unresolved or “Not provided” rather than inferred from ambiguous labels, so a missing value never looks confirmed.",
  },
  {
    question: "What if two sources disagree?",
    answer:
      "Both stay visible with a neutral relationship label such as “contradicts”, and their context is preserved. Talvrin shows the disagreement instead of resolving it for you.",
  },
  {
    question: "Can I always open the original source?",
    answer:
      "Only where rights permit. Otherwise Talvrin shows the permitted metadata and a rights-safe explanation — restricted content is never reconstructed.",
  },
  {
    question: "Does AI decide which source is correct?",
    answer:
      "No. AI can help discover, compare and explain sources, but it does not vouch for them. Generated interpretation is labeled distinctly and never replaces the original source.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow>Answer-First FAQ</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 sm:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-start xl:grid-cols-[minmax(0,840px)_minmax(0,399px)] xl:justify-between">
          <div className="border-b border-ink/10">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `source-intelligence-faq-${index}`;
              return (
                <div key={item.question} className="border-t border-ink/10 first:border-t-0">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:py-6"
                    >
                      {item.question}
                      <span aria-hidden="true" className="shrink-0 text-xl font-normal text-ink/50">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div id={panelId} hidden={!isOpen}>
                    <p className="max-w-[720px] pb-6 text-sm leading-7 text-gray-600 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Reveal
            delay={0.2}
            className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:aspect-[16/10] lg:sticky lg:top-24 lg:aspect-[399/515]"
          >
            <Image
              src="/images/product/source-intelligence/source-intelligence-faq-coffee.webp"
              alt="Colleagues chatting and laughing over coffee in a bright office"
              fill
              sizes="(min-width: 1280px) 399px, (min-width: 1024px) 360px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
