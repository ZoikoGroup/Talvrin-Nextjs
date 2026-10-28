"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is Press Enquiries for?",
    answer:
      "Professional coverage requests about Talvrin — fact checks, comment requests, on-record quotes, interview availability, corrections, and brand-asset permissions.",
  },
  {
    question: "Does submitting this form guarantee an interview, quote, or comment?",
    answer:
      "No. A submission reaches a reviewer, but it is not a commitment to respond, comment, or grant an interview or asset permission.",
  },
  {
    question: "How do I verify a quote or statement attributed to Talvrin?",
    answer:
      "Choose “Journalist Fact Check” in the form and include the exact wording and where you found it. A reviewer will confirm whether it is an approved company statement.",
  },
  {
    question: "Can I get the Talvrin logo or approved imagery?",
    answer:
      "Choose “Media Asset Permission” and describe the intended use. Assets are only used with written permission from an approved owner.",
  },
  {
    question: "How do I request a correction to a past statement?",
    answer:
      "Choose “Press Release Correction”, link the statement, and explain what appears to be wrong. Corrections are reviewed before anything is changed publicly.",
  },
  {
    question: "What if my request is embargoed or deadline-sensitive?",
    answer:
      "Tick the embargo box and add a “Response Needed By” date. Flagging an embargo does not bind Talvrin until a reviewer confirms it in writing.",
  },
  {
    question: "Where do I report a security incident instead?",
    answer:
      "Security questions — including press questions about a security matter — go through Security Contact, not this form.",
  },
  {
    question: "How is this different from Press and Media or Contact Talvrin?",
    answer:
      "Press and Media holds published resources and quick facts. Contact Talvrin handles general, non-media questions. This page is the intake for a specific media request.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container className="max-w-[1132px]">
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">Answers First</SectionEyebrow>
          <SectionHeading>Press Enquiries frequently asked questions.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)] lg:items-start">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `press-enquiries-faq-${index}`;
              return (
                <Reveal key={faq.question} delay={index * 0.04}>
                  <div className="rounded-xl border border-ink/10 bg-white">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-[18px] text-left text-base font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                      >
                        {faq.question}
                        <span aria-hidden="true" className="text-xl leading-none text-muted">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                    </h3>
                    <div id={panelId} hidden={!isOpen} className="px-5 pb-5">
                      <p className="text-sm leading-[21.7px] text-muted">{faq.answer}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2} className="relative hidden aspect-[295/553] overflow-hidden rounded-2xl lg:block">
            <Image
              src={`${IMG}/press-enquiries-faq-writer.png`}
              alt="A smiling writer taking notes at a desk"
              fill
              sizes="300px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
