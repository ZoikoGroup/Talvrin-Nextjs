"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is the Talvrin Changelog?",
    answer:
      "A public, source-governed record of approved developer-facing changes across Talvrin developer surfaces. Each entry states what changed, where, when it takes effect, whether you need to act, and where the authoritative documentation lives.",
  },
  {
    question: "What's the difference between “published” and “effective”?",
    answer:
      "Published is when the record appeared. Effective is when the change takes effect, which may be the same time, a future date, or not yet announced. Both are shown separately and never merged.",
  },
  {
    question: "How do I know if I need to do anything?",
    answer:
      "Every entry carries a developer action label set by the technical owner: no action required, review recommended, action required, or migration required. It is never inferred from the wording of the summary.",
  },
  {
    question: "Does a recent fix mean the service is healthy?",
    answer:
      "No. The changelog records durable change, not current health. Use Developer Status for live incidents and maintenance.",
  },
  {
    question: "Are version numbers defined here?",
    answer:
      "No. Public version references point at the owning surface. API, Data API and SDK documentation remain authoritative for what a version contains.",
  },
  {
    question: "What happens when an entry is corrected or replaced?",
    answer:
      "A corrected entry keeps its record with a visible correction note and time. A superseded entry stays published and links to the newer record that carries the current guidance.",
  },
  {
    question: "Is there a standard deprecation window?",
    answer:
      "No standard window is published. A deprecation states its replacement and its sunset date only once an approved date exists; until then it says the sunset date is not yet announced.",
  },
  {
    question: "Can I subscribe to changes?",
    answer:
      "Not yet. Email alerts, RSS or Atom feeds and webhooks are not available. No subscribe control is shown until delivery actually works.",
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

        <Reveal delay={0.1} className="mt-8 max-w-[920px] overflow-hidden rounded-2xl bg-surface">
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
                  <p className="max-w-[780px] px-5 pb-5 text-base leading-6 text-slate-600 sm:px-6">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
