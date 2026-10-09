"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../release-notes/shared";

const faqs = [
  {
    question: "What does privacy mean at Talvrin?",
    answer:
      "Minimizing unnecessary collection, explaining practices in plain language, exposing real controls, governing every material claim, and localizing only where regional law or product behavior materially differs.",
  },
  {
    question: "Does this page replace Talvrin’s Privacy Notice?",
    answer:
      "No. This page explains the public privacy model. An approved legal Privacy Notice remains authoritative for legal disclosures in its jurisdiction.",
  },
  {
    question: "What personal data does Talvrin collect?",
    answer:
      "Specific data categories are published only once an approved privacy source establishes them. This page doesn't pre-populate assumed categories such as email, IP address, or cookies.",
  },
  {
    question: "How long does Talvrin keep personal data?",
    answer:
      "No numeric retention period is published unless an approved retention schedule establishes it. Where it differs by jurisdiction, product state or contract, the scope and owner are shown.",
  },
  {
    question: "Does Talvrin use cookies or analytics?",
    answer:
      "Talvrin's standard is product-intent and comprehension measurement rather than behavioral surveillance, subject to applicable consent and routing. Specific tools are disclosed only when approved.",
  },
  {
    question: "Can I control privacy settings?",
    answer:
      "Controls appear only where a real, implemented route exists. If a control isn't available yet, the page says so rather than showing a dead-end button.",
  },
  {
    question: "Does privacy differ by country?",
    answer:
      "Only where it materially differs. The core narrative stays global when it's genuinely common; regional variants exist only for real differences in law, rights, data flow or notices.",
  },
  {
    question: "How does privacy relate to Security?",
    answer:
      "They're distinct, cross-linked disciplines. Security covers protection of accounts, workspaces and services; this page doesn't restate security controls or certifications.",
  },
  {
    question: "How does privacy relate to Data Rights?",
    answer:
      "Data Rights governs licensing, entitlement and permitted use of market/source data. Privacy covers personal data. The two are never conflated.",
  },
  {
    question: "Does AI change Talvrin’s privacy obligations?",
    answer:
      "No. AI assistance doesn't erase privacy rules, and training, retention or model-provider claims are not stated unless an approved source establishes them.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Answers First" tone="amber" title="Privacy frequently asked questions." />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,800px)_minmax(0,460px)] lg:justify-between">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `privacy-faq-${index}`;
              return (
                <Reveal key={faq.question} delay={index * 0.03}>
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
            className="relative aspect-video w-full overflow-hidden rounded-2xl lg:aspect-[460/694]"
          >
            <Image
              src="/images/trust/privacy/privacy-faq-handshake.webp"
              alt="Two smiling colleagues shaking hands in an office"
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
