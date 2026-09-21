"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What are Talvrin Alerts?",
    answer:
      "Talvrin Alerts is the notification layer designed to surface approved conditions that need attention and take users back to the relevant research, Monitoring context and evidence.",
  },
  {
    question: "Are Talvrin Alerts investment recommendations?",
    answer:
      "No. An alert tells you that an approved condition asks for your attention. It is not a trading signal, and it never gives buy, sell or hold instructions.",
  },
  {
    question: "Are Alerts the same as Monitoring?",
    answer:
      "No. Monitoring owns evidence-change detection, review workflow and materiality semantics. Alerts presents approved triggers and handles notification delivery, preferences and history where supported.",
  },
  {
    question: "Are Alerts the same as Watchlists?",
    answer:
      "No. Watchlists organize the research contexts and items you choose to keep in view. Alerts tells you when an approved condition on that research asks for your attention.",
  },
  {
    question: "Does Talvrin send price alerts?",
    answer:
      "Alerts operate only across currently supported monitored and source capabilities. Market-price alerts are a separate capability that requires explicitly governed availability.",
  },
  {
    question: 'What makes an alert "material"?',
    answer:
      "Alerts does not decide materiality. Materiality semantics are owned by Monitoring and only apply where an approved rule, reviewer or process exists.",
  },
  {
    question: "Which delivery channels are supported?",
    answer:
      "Supported delivery destinations depend on approved product availability. Alerts respects the preferences and destinations you configure within those supported options.",
  },
  {
    question: "Can I turn alerts off?",
    answer:
      "Yes. Alert preferences are yours to set, and AI never silently enables or disables alerts or expands recipients and channels without authorization.",
  },
  {
    question: "If I receive no alert, does that mean nothing changed?",
    answer:
      "No. Absence of an alert means no alert was delivered under your current configured scope — it does not prove nothing changed.",
  },
  {
    question: "How private are my alerts?",
    answer:
      "Sensitive previews default to minimum necessary context, recipient lists are never exposed unless the permission model allows it, and every private alert endpoint performs server-side authorization.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Answer-First FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end xl:grid-cols-[minmax(0,1fr)_425px] xl:gap-11">
          <Reveal delay={0.1} className="divide-y divide-ink/10 border-b border-ink/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left sm:gap-6 sm:py-5"
                  >
                    <span className="text-base font-semibold text-ink sm:text-[17px]">{faq.question}</span>
                    <span className="shrink-0 text-xl font-light text-slate-500" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="max-w-2xl pb-5 text-base leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </Reveal>

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[425/626] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src="/images/product/alerts/alerts-faq-team.webp"
              alt="Two colleagues reviewing an alert on a desktop monitor"
              fill
              sizes="(min-width: 1280px) 425px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
