"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "Does global architecture mean all jurisdictions are supported?",
    answer:
      "No. Talvrin’s architecture is designed to extend globally, but coverage is confirmed separately, jurisdiction by jurisdiction and dimension by dimension, in the registry above.",
  },
  {
    question: "What does Verified Supported mean?",
    answer:
      "Legal, operational and data-rights context has been reviewed and confirmed for at least one coverage dimension. Each record names an owner, a review date and a source class, and keeps its limitations visible next to the claim.",
  },
  {
    question: "What does In Assessment mean?",
    answer:
      "Active legal and data-rights review is underway but not concluded. It is never shown as current access and carries no promised completion date.",
  },
  {
    question: "What is Architecture-ready, and why isn’t it shown as a record?",
    answer:
      "It means the platform could extend to a jurisdiction in principle. Because no coverage claim follows from that alone, architecture-ready jurisdictions are not published as records on this page.",
  },
  {
    question: "Does selecting a jurisdiction here change what I’m entitled to see?",
    answer:
      "No. This page is informational. Access to licensed content is enforced server-side from your account’s entitlement and permitted use, not from any selection made in a browser.",
  },
  {
    question: "What happens if a jurisdiction’s status is corrected or withdrawn?",
    answer:
      "The record moves to Temporarily Restricted or is updated with a new review date. Transactional actions are removed, and the prior status and reason are preserved rather than silently deleted.",
  },
  {
    question: "How is this different from Market Coverage?",
    answer:
      "Market Coverage describes which asset classes and data types Talvrin covers. Supported Jurisdictions shows where that coverage has actually been confirmed, jurisdiction by jurisdiction.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Answer-first FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:grid-cols-[minmax(0,840px)_minmax(0,373px)] xl:justify-between">
          <Reveal delay={0.1} className="border-b border-ink/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `sj-faq-${index}`;
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
                    <p
                      id={panelId}
                      className="max-w-[720px] pb-5 text-base leading-[26px] text-slate-600"
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </Reveal>

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[373/558] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src={`${IMG}/jurisdictions-faq-handshake.webp`}
              alt="Two colleagues shaking hands and smiling in an office"
              fill
              sizes="(min-width: 1280px) 373px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
