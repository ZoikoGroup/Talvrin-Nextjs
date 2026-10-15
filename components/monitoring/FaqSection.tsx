"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const faqItems = [
  {
    question: "Is Monitoring the same as a price alert?",
    answer:
      "No. Monitoring tracks evidence connected to a research view — publication and primary-source changes — while a market-price move is treated as a separate signal category, never substituted for an evidence-change alert.",
  },
  {
    question: "Does Monitoring guarantee every meaningful change is caught?",
    answer:
      "No. Monitoring keeps a research object connected to relevant evidence within approved coverage. It does not guarantee completeness or promise real-time delivery without a governed source contract.",
  },
  {
    question: "Who decides whether a change matters?",
    answer:
      "You do. Monitoring and AI assistance can flag and contextualize a change, but significance and any reassessment of the research view remain a human judgment.",
  },
  {
    question: "What happens if a source becomes unavailable?",
    answer:
      "The source is marked as unavailable rather than treated as settled, and its last known state and timestamp remain visible.",
  },
  {
    question: "Can I set up email or push notifications?",
    answer:
      "Not yet. Scope, channel and cadence controls are proposed, pending confirmation — no email, push or SMS delivery is offered until a specific capability is confirmed and approved.",
  },
  {
    question: "How does Monitoring relate to Saved Research and Change Detection?",
    answer:
      "They are governed neighbors. Saved Research owns the persisted research object and Monitoring hands off to these destinations rather than duplicating their state — each handoff gated, conditional and explicit.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-[88px]">
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
              const panelId = `monitoring-faq-${index}`;
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
              src="/images/product/monitoring/monitoring-faq-meeting.webp"
              alt="Team in discussion around a meeting table in a bright, high-windowed office"
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
