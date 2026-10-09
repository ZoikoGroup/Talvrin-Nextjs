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
    question: "What is Talvrin System Status?",
    answer:
      "A public view of operational health, active incidents, and planned maintenance for approved Talvrin customer-facing services. It reports what an authoritative operational source says — nothing hand-typed or assumed.",
  },
  {
    question: "Does \"Operational\" mean every feature will work for me?",
    answer:
      "No. Operational health is separate from your account access, permissions, data entitlements, and market coverage. A healthy status never proves a specific request, account, or dataset will succeed.",
  },
  {
    question: "Why does this page say the status source is unavailable?",
    answer:
      "No authoritative status source is connected for this build yet. Rather than show a guessed \"all systems operational,\" the page shows an honest unknown state until a governed source exists.",
  },
  {
    question: "Where should I go if status is healthy but I still have a problem?",
    answer:
      "Use the destination that matches your symptom: Account Support for sign-in or access, Report a Problem for product or data issues, Accessibility Support for barriers, or Contact Support if you're not sure.",
  },
  {
    question: "Does Talvrin publish uptime or SLA figures here?",
    answer:
      "No. No uptime percentage or service-level commitment is published on this page, and none will be implied until an approved source and policy exist.",
  },
  {
    question: "Can I subscribe to status updates?",
    answer:
      "Not yet. Subscriptions will only open once a governed notification service can actually deliver updates — we won't collect an email or phone number before then.",
  },
  {
    question: "Is System Status accessible?",
    answer:
      "Status is always shown as text, never by color alone, and the page is built to work with a keyboard and screen readers. If something blocks you, use Accessibility Support.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Answers First"
            tone="amber"
            title="System Status frequently asked questions."
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,800px)_minmax(0,463px)] lg:justify-between">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `status-faq-${index}`;
              return (
                <Reveal key={faq.question} delay={index * 0.04}>
                  <div
                    className={clsx(
                      "rounded-xl border bg-surface transition-colors",
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
            className="relative mx-auto aspect-[463/482] w-full max-w-[463px] overflow-hidden rounded-2xl lg:mx-0"
          >
            <Image
              src={`${IMAGE_DIR}/system-status-faq-support-agent.webp`}
              alt="A support agent wearing a headset working at a computer"
              fill
              sizes="(min-width: 1024px) 463px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
