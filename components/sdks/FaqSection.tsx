"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "Are there any Talvrin SDKs available today?",
    answer:
      "Not yet. This page describes the registry contract and the card, install, and security rules an SDK must satisfy — never a guessed package ahead of an approved release.",
  },
  {
    question: "Why doesn't this page name a language or package?",
    answer:
      "Because no SDK Registry record exists yet. Naming a language, package or namespace here would be a guess, and a guess in install guidance leads developers to unverified code.",
  },
  {
    question: "Will installing an SDK grant me API access?",
    answer:
      "No. SDK availability never implies API entitlement, data rights, or market coverage. Those are separate decisions owned by the authentication, entitlement, rights and coverage authorities.",
  },
  {
    question: "How will deprecated versions be handled?",
    answer:
      "Deprecated records carry a warning and a replacement where known, with migration made primary and new adoption de-emphasized — never signaled by color alone.",
  },
  {
    question: "Can example code contain real credentials?",
    answer:
      "No. A code sample containing real credentials, customer identifiers or valid-looking secret material is a publication blocker. Samples use obvious non-secret placeholders.",
  },
  {
    question: "Will this page work without JavaScript?",
    answer:
      "Yes. Core availability, catalog, detail, install and reference content stay usable without client-side rendering, and remain usable at 320px width and 200% zoom.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Answer-First FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:grid-cols-[minmax(0,840px)_minmax(0,412px)] xl:gap-11">
          <Reveal delay={0.1} className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              return (
                <div key={faq.question} className="border-b border-ink/10 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:gap-6 sm:px-6 sm:py-5"
                  >
                    <span className="text-base font-semibold text-ink">{faq.question}</span>
                    <span className="shrink-0 text-xl font-light text-slate-500" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="max-w-[760px] px-5 pb-5 text-base leading-6 text-slate-600 sm:px-6">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </Reveal>

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[412/488] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src="/images/developers/SDKs/sdks-faq-presentation.webp"
              alt="Presenter speaking to a seated group"
              fill
              sizes="(min-width: 1280px) 412px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
