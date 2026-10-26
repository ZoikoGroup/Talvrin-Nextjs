"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "How do I report a Talvrin security concern?",
    answer:
      "Use the \"Report a security concern\" form in the Minimum Safe Report section below. It's the approved route for a potential weakness, an exposed secret, token, or key.",
  },
  {
    question: "What should I include in a report?",
    answer:
      "A short summary of the issue, the affected Talvrin surface, and what you observed — in plain language. High-level details only.",
  },
  {
    question: "What should I never send?",
    answer:
      "Passwords or passphrases, one-time or recovery codes, payment or banking credentials, API keys/tokens/private keys, or unnecessary personal or confidential data.",
  },
  {
    question: "Can I send exploit details or attachments?",
    answer:
      "No. Exploit payloads, proof-of-concept, logs, and files move only through an approved secure-detail channel, never through this field set.",
  },
  {
    question: "Is this a bug-bounty or safe-harbor program?",
    answer:
      "No. Talvrin does not publish a response-time commitment, bug-bounty program, safe-harbor policy, or CVE process here until approved security governance establishes one.",
  },
  {
    question: "What if I can't sign in?",
    answer:
      "Security Contact is never the account-recovery intake. Go to Account Support for sign-in and access issues instead.",
  },
];

export default function AnswerFirstFaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">Answers First</SectionEyebrow>
          <SectionHeading>Security Contact frequently asked questions.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,800px)_minmax(0,333px)] lg:items-start lg:justify-between">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `security-contact-faq-${index}`;
              return (
                <Reveal key={faq.question} delay={index * 0.04}>
                  <div className="rounded-xl border border-ink/10 bg-surface">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        className="w-full px-5 py-[18.8px] text-left text-base font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                      >
                        {faq.question}
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

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[333/412] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src={`${IMG}/security-contact-faq-team.webp`}
              alt="A colleague presenting to a small team in a meeting room"
              fill
              sizes="(min-width: 1024px) 333px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
