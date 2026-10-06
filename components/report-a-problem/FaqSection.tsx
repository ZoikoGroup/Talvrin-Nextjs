"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../release-notes/shared";
import { IMAGE_DIR } from "./shared";

const faqs = [
  {
    question: "What should I report here?",
    answer:
      "Non-security problems with Talvrin: product or workflow behavior, data or content that looks wrong, performance, notifications, integrations, and anything else that isn't working as expected.",
  },
  {
    question: "What should I never send through this form?",
    answer:
      "Passwords, one-time or recovery codes, API keys, private keys, or other secrets — and never vulnerability details. Talvrin will never ask you for them here.",
  },
  {
    question: "Do I need to sign in to report a problem?",
    answer:
      "No. Reporting isn't blocked behind a sign-in step. If the problem is that you can't sign in or recover access, Account Support is the right route.",
  },
  {
    question: "Will I get a response time or a fix date?",
    answer:
      "No. Submitting a report doesn't guarantee a response time or a fix date — no service-level commitment is published yet.",
  },
  {
    question: "What if a lot of things seem broken, not just one thing?",
    answer:
      "It may be a broader, service-wide issue. An authoritative System Status isn't available in this build yet, so you can still report what you're seeing here.",
  },
  {
    question: "Do I need to attach a screenshot or file?",
    answer:
      "No. A text description is always enough. Attachments aren't supported yet — don't link to files that contain sensitive content.",
  },
  {
    question: "I think I found a security vulnerability — what do I do?",
    answer:
      "Don't submit it through this form. Security Contact is not yet published for this build, so please wait for an approved security route rather than sending details here.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Answers First"
            tone="amber"
            title="Report a Problem frequently asked questions."
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,800px)_minmax(0,460px)] lg:justify-between">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `report-faq-${index}`;
              return (
                <Reveal key={faq.question} delay={index * 0.04}>
                  <div
                    className={clsx(
                      "rounded-xl border bg-white transition-colors",
                      isOpen ? "border-ink/20" : "border-ink/10"
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        className="w-full rounded-xl px-5 py-4 text-left text-base font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div id={panelId} hidden={!isOpen} className="px-5 pb-5">
                      <p className="text-[15px] leading-6 text-muted">{faq.answer}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal
            delay={0.2}
            className="relative mx-auto aspect-[460/482] w-full max-w-[460px] overflow-hidden rounded-xl border border-ink/10 lg:mx-0"
          >
            <Image
              src={`${IMAGE_DIR}/report-a-problem-faq-team.webp`}
              alt="A professional leading a discussion at a conference table"
              fill
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
