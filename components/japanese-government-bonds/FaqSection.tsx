"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const faqItems = [
  {
    question: "What are Japanese Government Bonds (JGBs)?",
    answer:
      "JGBs are sovereign debt securities issued by Japan’s government through Ministry of Finance processes. Talvrin organizes source evidence around them, contingent on verified coverage.",
  },
  {
    question: "What can I research about Japanese Government Bonds on Talvrin?",
    answer:
      "You can inspect Japan Ministry of Finance issuance and auction evidence, Bank of Japan policy communication, official Japanese statistics, and explanatory/methodology material — all with visible source, timing and rights metadata.",
  },
  {
    question: "What distinguishes Ministry of Finance issuance from Bank of Japan policy?",
    answer:
      "The Ministry of Finance issues and manages JGBs; the Bank of Japan sets monetary policy and conducts market operations. Talvrin keeps the two as separate sources and never conflates a policy statement with issuance terms.",
  },
  {
    question: "What’s the difference between coupon-bearing, inflation-indexed and discount JGBs?",
    answer:
      "Coupon-bearing JGBs pay fixed interest, inflation-indexed JGBs adjust principal for consumer prices, and discount bills are issued below face value without coupons. Talvrin labels each evidence record with the instrument it concerns.",
  },
  {
    question: "How do I verify the evidence behind a Japanese Government Bonds research view?",
    answer:
      "Every evidence record carries its publisher, publication date, effective or reference period, version and rights state, with a path back to the original source where rights permit. Interpretation is labeled separately from source fact.",
  },
  {
    question: "Does Deep Coverage mean Talvrin has live JGB yields and prices?",
    answer:
      "No. Deep Coverage describes the depth of released source evidence. Live JGB yields, prices and auction results are not released, and data timeliness is delayed or snapshot per source.",
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
              const panelId = `jgb-faq-${index}`;
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
              src="/images/markets/japanese-government-bonds/jgb-faq-corridor.webp"
              alt="Two colleagues laughing as they walk along an office corridor"
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
