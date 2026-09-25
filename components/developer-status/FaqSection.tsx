"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is Talvrin Developer Status?",
    answer:
      "A public operational view of approved Talvrin developer-facing services, active incidents, maintenance, and recent public status records.",
  },
  {
    question: "Does “operational” mean my API request will succeed?",
    answer:
      "No. A healthy service does not prove your credential is valid, your workspace is entitled, or a market is covered. Those are separate checks with their own owners.",
  },
  {
    question: "How current is the status information?",
    answer:
      "Each status shows when its source last changed, with absolute times in UTC. Past the freshness threshold it is labeled stale and loses any positive treatment.",
  },
  {
    question: "Does the page show every Talvrin internal service?",
    answer:
      "No. Components are public-safe abstractions of developer capabilities, not internal services, and only approved public components appear.",
  },
  {
    question: "Why can status be “unknown”?",
    answer:
      "Because a state that cannot be verified is never defaulted to green. Assessing or unknown means the source has not confirmed a state yet.",
  },
  {
    question: "Does Developer Status show market or data coverage?",
    answer:
      "No. Coverage is a separate registry. Operational status is independent of data coverage, entitlement and API or SDK lifecycle.",
  },
  {
    question: "Where do I see API or SDK deprecations?",
    answer:
      "Lifecycle changes belong to the Changelog and the relevant API or SDK reference, not to operational status. A released method can be degraded without being deprecated.",
  },
  {
    question: "Where can I get help if status is healthy but I still have an error?",
    answer:
      "Use the diagnostic boundary above to match what you see to the right place to check, then contact support with your request ID if you remain blocked.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Answer-First FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:grid-cols-[minmax(0,840px)_minmax(0,400px)] xl:gap-11">
          <Reveal delay={0.1} className="overflow-hidden rounded-2xl bg-surface">
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
            className="relative hidden aspect-[400/627] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src="/images/developers/developer-status/developer-status-faq-celebration.webp"
              alt="Two colleagues celebrating outdoors"
              fill
              sizes="(min-width: 1280px) 400px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
