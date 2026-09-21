"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What are Talvrin Watchlists?",
    answer:
      "Talvrin Watchlists are designed to help users organize the public-market research contexts they choose to keep in view, with links back to related research, evidence and approved monitoring context.",
  },
  {
    question: "Are Watchlists a brokerage portfolio?",
    answer:
      "No. A Watchlist is a research organization tool. Membership does not imply ownership, a position, or a recommendation of any kind.",
  },
  {
    question: "What can I add to a Watchlist?",
    answer:
      "Only the item classes the approved capability registry supports — company/issuer research, securities/instruments, markets/macro context, economic events/releases, and saved research questions/views.",
  },
  {
    question: "How are Watchlists different from Monitoring?",
    answer:
      "Watchlists organize what you follow and summarize state; Monitoring owns evidence-change detection and the continuous connection between research views and relevant evidence.",
  },
  {
    question: "How are Watchlists different from Alerts?",
    answer:
      "Alerts are a future, approved delivery/notification layer for configured triggers. Watchlists own organization and context recovery, not outbound notification delivery.",
  },
  {
    question: "Does adding something to a Watchlist mean Talvrin recommends it?",
    answer:
      "No. A watched item is not a recommendation, signal, or automated conclusion — it reflects what you chose to follow.",
  },
  {
    question: "Does a Watchlist guarantee live coverage?",
    answer:
      "No. A watched item may exist even when a specific monitoring or data capability is not released; the actual coverage state is always shown explicitly.",
  },
  {
    question: "Can AI add items automatically?",
    answer:
      "No. AI may assist with search, summarization, and labeling suggestions, but it must not silently add or remove watchlist items or commit organizational changes without your explicit confirmation.",
  },
  {
    question: "Can teams share Watchlists?",
    answer:
      "Where the permission model supports it, a Watchlist can carry a personal, team, or workspace scope. Lists are private by default unless product policy states otherwise.",
  },
  {
    question: "What happens when I remove an item?",
    answer:
      "Removing an item only edits list membership. The underlying research, evidence, and monitoring state remain unchanged and unaffected.",
  },
  {
    question: "Are Watchlists investment advice?",
    answer:
      "No. Talvrin is a research and intelligence platform. Watchlists do not constitute investment, legal, tax, or other professional advice, or a recommendation to buy or sell any instrument.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#fff] py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Answer-First FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <Reveal delay={0.1} className="divide-y divide-ink/10 border-t border-ink/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[17px] font-semibold text-ink">{faq.question}</span>
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

          <Reveal delay={0.2} className="relative hidden min-h-[420px] overflow-hidden rounded-2xl lg:block">
            <Image
              src="/images/product/watchlist/Frame 45.webp"
              alt="Research team reviewing a workflow diagram at a table"
              fill
              sizes="320px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
