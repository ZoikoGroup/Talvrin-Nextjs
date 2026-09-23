"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is the Talvrin Newsroom?",
    answer:
      "The Talvrin Newsroom is the official destination for approved Talvrin updates and source-linked perspectives. Each published item has a canonical page with visible dates and supporting context.",
  },
  {
    question: "What does Talvrin publish here?",
    answer:
      "Published topics may include approved company, product, research, evidence, monitoring, or trust updates. A category appears only when a verified public record exists.",
  },
  {
    question: "How are sources handled?",
    answer:
      "Sources remain connected to material factual claims wherever publication rights permit, so a reader can check what supports a statement rather than taking it on trust.",
  },
  {
    question: "What is the difference between Published and Updated?",
    answer:
      "Published is the date an item first appeared. Updated marks a later revision to that same canonical page, and material corrections stay visible with a date and a concise explanation.",
  },
  {
    question: "How do I contact Talvrin about another question?",
    answer:
      "Use the contact route below for media enquiries, correction reports, or questions about a specific publication. Newsroom content never infers spokesperson authority for a given item.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-32 bg-surface py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,840px)_minmax(0,398px)] lg:items-end lg:gap-12">
          <div>
            <Reveal>
              <SectionEyebrow tone="amber">Frequently Asked Questions</SectionEyebrow>
              <SectionHeading>
                Direct answers about Talvrin newsroom publications, sources, corrections,
                subscriptions, and media enquiries.
              </SectionHeading>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 border-b border-ink/10">
              {faqs.map((faq, index) => {
                const isOpen = index === openIndex;
                return (
                  <div key={faq.question} className="border-t border-ink/10 first:border-t-0">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left sm:gap-6 sm:py-5"
                    >
                      <span className="text-base font-semibold text-ink">{faq.question}</span>
                      <span className="shrink-0 text-xl font-light text-slate-500" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="max-w-[720px] pb-5 text-base leading-6 text-slate-600">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </Reveal>

            <Reveal delay={0.15}>
              <Link
                href="/company/contact"
                className="mt-6 inline-block text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
              >
                Contact Talvrin →
              </Link>
            </Reveal>
          </div>

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[398/514] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src="/images/company/newsroom/newsroom-faq-team.webp"
              alt="Three colleagues standing together outside an office building"
              fill
              sizes="398px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
