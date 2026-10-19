"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const faqItems = [
  {
    question: "What can I research about U.S. Treasuries on Talvrin?",
    answer:
      "You can inspect official Federal Reserve policy communication, U.S. Treasury financing and issuance evidence, related official statistics, and explanatory/methodology material — all with visible source, timing and rights metadata.",
  },
  {
    question: "How do I verify the evidence behind a U.S. Treasury research view?",
    answer:
      "Every evidence record carries its publisher, publication date, effective or reference period, version and rights state, with a path back to the original source where rights permit. Interpretation is labeled separately from source fact.",
  },
  {
    question: "Does Talvrin provide investment advice on U.S. Treasuries?",
    answer:
      "No. Talvrin is a research and intelligence platform. It does not execute trades, forecast yields or prices, or provide personalized investment recommendations.",
  },
  {
    question: "Can I monitor changes to U.S. Treasury evidence?",
    answer:
      "Yes, within released coverage. Monitoring keeps a research view connected to new publications, revisions and source changes, and Change Detection shows what differs against the version you last reviewed.",
  },
  {
    question: "Does Deep Coverage mean Talvrin has live Treasury yields and prices?",
    answer:
      "No. Deep Coverage describes the depth of released source evidence. Live Treasury yields, prices and auction results are not released, and data timeliness is delayed or snapshot per source.",
  },
  {
    question: "Which U.S. Treasury sources does Talvrin currently cover?",
    answer:
      "The Federal Reserve, the U.S. Treasury Department, and select official statistical agencies where approved. The coverage matrix above lists each category's status, update window and verification owner.",
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
              const panelId = `us-treasuries-faq-${index}`;
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
              src="/images/markets/us-treasuries/us-treasuries-faq-team.webp"
              alt="Four colleagues laughing together in a sunlit office"
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
