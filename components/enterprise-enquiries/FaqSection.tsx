"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is Enterprise Enquiries for?",
    answer:
      "Organizations evaluating Talvrin at scale — asset managers, bank research desks, advisory groups, and institutions with procurement, security, or data-rights review ahead of them.",
  },
  {
    question: "Does submitting this form guarantee a response, pilot, or contract?",
    answer:
      "No. A submission reaches a reviewer, but it is not an approval, pilot, contract, or commitment to a timeline.",
  },
  {
    question: "Can you complete our security questionnaire?",
    answer:
      "Choose “Security Questionnaire” and describe what your assessment covers. Only security and privacy posture that is formally established will be shared — nothing is promised in advance.",
  },
  {
    question: "Do you offer SSO, APIs, or data residency?",
    answer:
      "Not confirmed today. The Capability Truth table above shows what is source-supported and what is not established. Tell us what your evaluation needs and it becomes part of the review.",
  },
  {
    question: "Where can I see pricing or contract terms?",
    answer:
      "Pricing, plans, and contract terms are not yet established for enterprise use, so none are published here. A reviewer can discuss scope if a conversation is warranted.",
  },
  {
    question: "Which markets and regions does Talvrin cover?",
    answer:
      "Talvrin is architected for global markets, but released coverage is explicit and governed. Mention your jurisdiction in the form so a reviewer can answer accurately.",
  },
  {
    question: "What should I not include in the form?",
    answer:
      "Credentials, confidential holdings, unpublished research, or proprietary data. The form does not accept attachments.",
  },
  {
    question: "How is this different from Request Access or Contact Talvrin?",
    answer:
      "Request Access is for individual product access. Contact Talvrin handles general questions. This page is the intake for organization-scale evaluation.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container className="max-w-[1132px]">
        <Reveal className="max-w-[800px]">
          <SectionEyebrow>Answers First</SectionEyebrow>
          <SectionHeading>Enterprise Enquiries frequently asked questions.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)] lg:items-start">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `enterprise-enquiries-faq-${index}`;
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
              src={`${IMG}/enterprise-enquiries-faq-meeting.png`}
              alt="A team in discussion around a meeting table"
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
