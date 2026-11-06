"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "Who can request access to Talvrin?",
    answer:
      "Self-directed investors, investment professionals, research teams, and anyone with an emerging use case. Choose the closest path above and the form adjusts to what's needed.",
  },
  {
    question: "Is Talvrin available to individual investors?",
    answer:
      "Yes. Talvrin serves self-directed investors as well as professionals, and a personal email is accepted when you request access.",
  },
  {
    question: "Does requesting access guarantee an account?",
    answer:
      "No. Access is currently controlled. A request starts a review against the current access and eligibility rules — it does not guarantee approval or a response time.",
  },
  {
    question: "Is Talvrin a trading platform?",
    answer: "No. Talvrin is a research and intelligence platform. It does not execute trades.",
  },
  {
    question: "Does Talvrin provide investment advice?",
    answer:
      "No. Talvrin does not provide suitability rankings or investment recommendations. You remain responsible for your own decisions.",
  },
  {
    question: "Does Talvrin use AI?",
    answer:
      "Yes, to help discover, organize, compare and summarize evidence. AI never becomes the evidence or the decision-maker — sources stay visible.",
  },
  {
    question: "Which markets are available?",
    answer:
      "Talvrin is built for global public markets, but released coverage is explicit and governed. See Market Coverage for what is currently available.",
  },
  {
    question: "I need enterprise access — where should I go?",
    answer:
      "Use Enterprise Enquiries for organization-scale evaluation, procurement, security, or data-rights review.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container className="max-w-[1132px]">
        <Reveal className="max-w-[800px]">
          <SectionEyebrow>Answers First</SectionEyebrow>
          <SectionHeading>Request Access frequently asked questions.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,290px)] lg:items-start">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `request-access-faq-${index}`;
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

          <Reveal delay={0.2} className="relative hidden aspect-[290/553] overflow-hidden rounded-2xl bg-white lg:block">
            <Image
              src={`${IMG}/request-access-faq-professional.png`}
              alt="A professional walking through an office corridor"
              fill
              sizes="290px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
