"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "How should I contact Talvrin?",
    answer:
      "Choose the route that best matches your question. Specialist matters such as media, careers, privacy, security, accessibility, or legal enquiries should use the dedicated destination shown.",
  },
  {
    question: "What information should I include?",
    answer:
      "Include only what is needed to understand and route your question: the subject, your role or organization where relevant, and a clear description. Leave out credentials, financial account data and confidential market information.",
  },
  {
    question: "When will I receive a response?",
    answer:
      "No response time is promised. Submitting an enquiry does not guarantee a response, meeting, product access, commercial offer, support outcome, or timeline.",
  },
  {
    question: "How do I ask about Talvrin for my organization?",
    answer:
      "Use the general enquiry form and select an organizational evaluation or commercial conversation enquiry type, describing your organization and what you are assessing.",
  },
  {
    question: "Where do candidates get help?",
    answer:
      "Use the Careers destination for vacancies, applications, accommodations, and questions about whether a recruitment approach is genuine.",
  },
  {
    question: "How do I know a Talvrin communication is genuine?",
    answer:
      "Approved updates are published in the Newsroom with visible dates and an accountable owner. If a message is unexpected or asks for credentials or payment, treat it as unverified and check through a route on this page.",
  },
  {
    question: "Which company receives my enquiry?",
    answer:
      "Talvrin is a trading name of Zoiko Markets, a Zoiko Financial Group company, so an enquiry submitted here is received under that corporate relationship.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-32 bg-surface py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,840px)_minmax(0,404px)] lg:items-end lg:gap-12">
          <div>
            <Reveal>
              <SectionEyebrow tone="violet">Frequently Asked Questions</SectionEyebrow>
              <SectionHeading>
                Direct answers about contact routes, submissions, privacy, security, and official
                Talvrin communications.
              </SectionHeading>
            </Reveal>

            {/* The subnav's Company Context tab lands on the corporate-relationship answer. */}
            <span id="company-context" className="block scroll-mt-32" />
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
          </div>

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[404/558] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src="/images/company/contact/contact-faq-speaker.webp"
              alt="Speaker presenting to colleagues in a bright room"
              fill
              sizes="404px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
