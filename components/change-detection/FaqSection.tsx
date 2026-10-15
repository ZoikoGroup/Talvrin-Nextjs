"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const faqItems = [
  {
    question: "What is Change Detection?",
    answer:
      "Change Detection is the Talvrin research capability concept for identifying meaningful differences in source-linked information and making those differences inspectable in context — publisher, timing, and what specifically changed.",
  },
  {
    question: "How is it different from Monitoring?",
    answer:
      "Monitoring keeps a research view connected to relevant evidence over time. Change Detection explains an observed difference once it appears — detection never quietly configures a watch, and monitoring never invents an explanation.",
  },
  {
    question: "Does a change alert give investment advice?",
    answer:
      "No. A change signal is a reason to inspect evidence — never a trade or investment signal, and never a recommendation to buy, sell or hold.",
  },
  {
    question: "Does it cover every source?",
    answer:
      "No. Available source sets depend on released coverage and data rights. Where a licensed source is not accessible, Change Detection shows “Availability not confirmed” rather than a global-coverage claim.",
  },
  {
    question: "Does AI decide which change matters?",
    answer:
      "No. AI can help discover, compare and explain changes, but materiality is weighed against your research question and the judgment stays with you. AI output is never presented as a materiality score.",
  },
  {
    question: "What happens when a source is corrected?",
    answer:
      "The correction is labeled as its own class of change and shown against the earlier version, which stays identifiable. It does not automatically change your research conclusion.",
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
              const panelId = `change-detection-faq-${index}`;
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
              src="/images/product/change-detection/change-detection-faq-boardroom.webp"
              alt="Team gathered around a laptop in a glass-walled meeting room"
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
