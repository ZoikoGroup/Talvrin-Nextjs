"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const faqItems = [
  {
    question: "Does Talvrin claim every published fact is complete or error-free?",
    answer:
      "No. Source-origin and validation checks reduce error risk; they do not guarantee completeness or correctness. Evidence may be limited, and the interface is designed to never imply otherwise.",
  },
  {
    question: "What’s the difference between an originating record and licensed data?",
    answer:
      "An originating record comes directly from the issuer, regulator, exchange, central bank or statistics agency. Licensed data is structured or historical data from a commercial provider, usable only for the specific purposes its license covers.",
  },
  {
    question: "Why does an estimate stay labeled an estimate?",
    answer:
      "An estimate records what a named party projected at a point in time. It stays labeled as such even after actual figures arrive, so it is never mistaken for — or silently replaced by — a reported value.",
  },
  {
    question: "What happens when two official records disagree?",
    answer:
      "Both records and their scope are shown side by side. They are never averaged, voted on, or replaced with whichever is more favorable, and the disputed value is excluded from calculations until resolved.",
  },
  {
    question: "Why are publication date and effective date shown separately?",
    answer:
      "When a fact applied and when it was made public are different questions. Keeping them apart prevents an accounting period or legal effective window from being read as the date the information became known.",
  },
  {
    question: "Can licensed data always be redistributed?",
    answer:
      "No. Display, storage, derivation and redistribution are separate rights. A license to view data on screen does not include exports, API transport or third-party sharing unless the terms explicitly say so.",
  },
  {
    question: "What happens when a source is corrected or retracted?",
    answer:
      "The correction or retraction date and the affected claims are marked. Retracted items are removed from verified results and dependent calculations, while the earlier as-of view remains available and labeled.",
  },
  {
    question: "Does Talvrin publish a source-trust score?",
    answer:
      "No. Talvrin doesn’t blend authority, content type and verification into a single trust, completeness or reliability score. Each is shown on its own terms with concrete verification and coverage indicators.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Answer-First FAQ</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:items-stretch lg:gap-8 xl:grid-cols-[minmax(0,840px)_minmax(0,409px)] xl:justify-between">
          <div className="border-b border-ink/10">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `sm-faq-${index}`;
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
            className="relative hidden w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface lg:block lg:min-h-[560px]"
          >
            <Image
              src="/images/research/source-methodology/sm-faq-presenter.webp"
              alt="A man presenting printed charts to a colleague beside a laptop"
              fill
              sizes="(min-width: 1280px) 409px, (min-width: 1024px) 340px, 100vw"
              className="object-cover object-top"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
