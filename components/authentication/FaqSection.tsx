"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "Is there a published authentication method today?",
    answer:
      "Not currently. This page describes governance and the identity/access model only. A concrete method publishes from the approved Authentication Method Registry, never from this page ahead of it.",
  },
  {
    question: "Why doesn't this page name a specific header, token, or endpoint?",
    answer:
      "Because no approved method exists yet. Naming a protocol, credential type, or endpoint here would be a guess, and a guess in authentication guidance is worse than an absence.",
  },
  {
    question: "Does a valid credential guarantee access to a market or dataset?",
    answer:
      "No. Authentication only proves identity or credential possession. Authorization, entitlement, coverage, and data rights are evaluated separately and can each fail on their own.",
  },
  {
    question: "What permissions will a method ask for?",
    answer:
      "Only the minimum required for the task, each with a public label and a stated purpose. Optional access is never preselected, and broader permission is requested only when a capability actually needs it.",
  },
  {
    question: "Can secrets ever appear in analytics or logs?",
    answer:
      "No. Credential material is excluded from URLs, analytics, logs, repositories, browser bundles, support screenshots and search indexes by default, and is redacted in error and debug views.",
  },
  {
    question: "What happens if I suspect a credential is compromised?",
    answer:
      "Revocation and rotation are prioritized immediately, alongside the approved security contact. The credential itself is never requested as proof of the problem.",
  },
  {
    question: "Will authentication guidance work without JavaScript?",
    answer:
      "Yes. Guidance stays server-rendered and linkable, and accessible verification and recovery paths are release-blocking rather than an exception handled later.",
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

        <Reveal delay={0.1} className="mt-8 max-w-[920px] overflow-hidden rounded-2xl border border-ink/10 bg-white">
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
      </Container>
    </section>
  );
}
