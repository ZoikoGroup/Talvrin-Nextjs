"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is actually saved?",
    answer:
      "A saved research object preserves a question, the research view built around it, linked source references and the researcher’s own assumptions — not a copy of the underlying licensed source content itself.",
  },
  {
    question: "Does saving start monitoring?",
    answer:
      "No. Saving preserves the research view and its evidence context at a specific point in time. Monitoring is a separate, explicit action that actively tracks evidence updates and notifications.",
  },
  {
    question: "Can sources change after I save?",
    answer:
      "Yes. External sources may update, publish revisions, or change terms. Talvrin compares current evidence against the as-saved baseline so revisions are never silently folded into your historical view.",
  },
  {
    question: "How does AI affect a saved view?",
    answer:
      "AI can summarize the view, help locate related research, or explain structure, but AI outputs never replace the verified source evidence or alter saved historical records.",
  },
  {
    question: "Who can access my research?",
    answer:
      "Access is strictly governed by user roles, entitlement scopes, and organization permissions. Private research remains confidential to its owner unless explicitly shared within an authorized workspace.",
  },
  {
    question: "What happens if a source becomes unavailable?",
    answer:
      "If a source is withdrawn or licensing expires, protected content is hidden while preserving explanatory metadata and safe notices, ensuring no broken or misleading states.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="violet">ANSWER-FIRST FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_399px] lg:gap-12">
          {/* FAQ Accordion */}
          <Reveal delay={0.1} className="divide-y divide-[#171335]/10 border-t border-[#171335]/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-[#6c5ce7]"
                  >
                    <span className="text-[17px] font-semibold text-[#171335]">
                      {faq.question}
                    </span>
                    <span
                      className="shrink-0 text-2xl font-light text-[#5d5a72]"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="max-w-2xl pb-5 text-base leading-relaxed text-[#5d5a72]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </Reveal>

          {/* Right Image */}
          <Reveal delay={0.2} className="relative hidden min-h-[440px] overflow-hidden rounded-2xl border border-[#5d5a72]/15 bg-[#f6f5fb] lg:block">
            <Image
              src="/images/saved-research/saved-research-faq.webp"
              alt="Research team reviewing questions"
              fill
              sizes="399px"
              className="object-cover object-center"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
