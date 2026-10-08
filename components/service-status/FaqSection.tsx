"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../release-notes/shared";
import { IMAGE_DIR } from "./HeroSection";

const faqs = [
  {
    question: "What does Talvrin Service Status show?",
    answer:
      "Current service availability, active incidents and planned maintenance — once a governed operational status source is connected. Until then, the page says plainly that status data is not yet available rather than showing a healthy state.",
  },
  {
    question: `Does "operational" mean every function will work for me?`,
    answer:
      "No. A public operational state is a platform-level summary. It doesn't guarantee that every account, network path or workflow is unaffected, and it is separate from authentication, entitlement and data coverage.",
  },
  {
    question: "What is the difference between an incident and planned maintenance?",
    answer:
      "An incident is unplanned impact confirmed by the status source. Planned maintenance is scheduled work with its own label, timeline and tone — it is never styled as an outage, and canceled or rescheduled windows keep their chronology.",
  },
  {
    question: "How current is the status information?",
    answer:
      "Each state will show a freshness timestamp from its source. If the source exceeds its freshness threshold or is unavailable, the page shows an explicit stale warning instead of the last-known state on its own.",
  },
  {
    question: "Why would a state show as unknown instead of healthy?",
    answer:
      "Because an unverified state is never rendered as green. If the state or scope can't yet be confirmed, the page shows it as assessing/unknown rather than assuming everything is fine.",
  },
  {
    question: "Does Talvrin publish an SLA or uptime percentage?",
    answer:
      "Not currently. A metric appears only once there is an approved measurement scope, reporting window, denominator and exclusions, source and owner for the exact service and period.",
  },
  {
    question: "Can I subscribe to service updates?",
    answer:
      "No update-subscription channel is released yet. Email, SMS, webhook or RSS alerts will appear only once a channel is privacy/security-reviewed and can honor an unsubscribe path — never bundled with marketing consent.",
  },
  {
    question: "Where should I go if status looks fine but I still have a problem?",
    answer:
      "Contact Support. A healthy platform-level state doesn't rule out an issue with your account or workflow, so support can look at your specific case.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Answers First" tone="amber" title="Service Status frequently asked questions." />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,800px)_minmax(0,462px)] lg:justify-between">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `service-status-faq-${index}`;
              return (
                <Reveal key={faq.question} delay={index * 0.03}>
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
            className="relative aspect-video w-full overflow-hidden rounded-2xl md:aspect-[21/9] lg:aspect-auto lg:min-h-[500px]"
          >
            <Image
              src={`${IMAGE_DIR}/service-status-faq-lounge.webp`}
              alt="Two colleagues reviewing a tablet together in a lounge"
              fill
              sizes="(min-width: 1024px) 462px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
