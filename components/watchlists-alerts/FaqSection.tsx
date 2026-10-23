"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "Is an alert an investment signal?",
    answer:
      "No. It reports an evidence change for research review — never a buy, sell or hold recommendation, and never a guarantee that the change was discovered.",
  },
  {
    question: "What happens if a source is withdrawn or corrected?",
    answer:
      "The alert keeps the original source version it was based on, and a correction or withdrawal is surfaced as its own change. Your saved research view is never rewritten automatically.",
  },
  {
    question: "How quickly are alerts delivered?",
    answer:
      "Timing depends on each source’s publication and the approved feed for it. Every alert shows its event and publication times, and no delivery speed is promised until a service is released with a measured commitment.",
  },
  {
    question: "Can my team share a watchlist?",
    answer:
      "Where entitlement and access controls support it, shared watchlists use owner, editor and viewer roles under per-tenant authorization. Access changes take effect immediately.",
  },
  {
    question: "Is my watchlist data private?",
    answer:
      "Watchlists are visible only to their owner and anyone they are explicitly shared with in the same tenant. Every request is governed by server-side authorization and encryption — there is no cross-tenant visibility.",
  },
  {
    question: "Do I need to sign in to build a watchlist?",
    answer:
      "Yes. This page is a read-only educational view. Creating or managing a real watchlist is reserved for signed-in, approved users.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Answer-first FAQ</SectionEyebrow>
          <SectionHeading>What changes, timing and limitations.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:grid-cols-[minmax(0,840px)_minmax(0,389px)] xl:justify-between">
          <Reveal delay={0.1} className="border-b border-ink/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `wa-faq-${index}`;
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
            className="relative hidden aspect-[389/489] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src={`${IMG}/wa-faq-notebook.webp`}
              alt="Smiling woman writing in a notebook at a meeting table"
              fill
              sizes="(min-width: 1280px) 389px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
