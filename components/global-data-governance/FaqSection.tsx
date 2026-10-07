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
    question: "What does Global Data Governance mean at Talvrin?",
    answer:
      "Applying appropriate controls across jurisdictions as individual markets, source sets, licensing arrangements and operational capabilities are actually ready — and preserving jurisdiction as context rather than flattening it into one global label.",
  },
  {
    question: "Does global architecture mean Talvrin is available everywhere?",
    answer:
      "No. A global architecture doesn't mean every market, dataset, residency option or service capability is live everywhere. Released coverage and limitations are stated explicitly.",
  },
  {
    question: "How does jurisdiction affect evidence?",
    answer:
      "Jurisdiction can change what information means and which controls apply. When it's a property of evidence, it travels with the evidence record and stays distinct from your own location.",
  },
  {
    question: "Does Talvrin offer data residency in specific countries?",
    answer:
      "The supplied materials don't establish where data is hosted. Residency, transfer mechanism, backup geography and subprocessor claims publish only from an approved source.",
  },
  {
    question: "How are data rights handled across jurisdictions?",
    answer:
      "Licensing, entitlement and permitted use stay enforceable inputs, and jurisdiction-sensitive rights are enforced from approved data. The detail lives in Data Rights.",
  },
  {
    question: "How does privacy vary by region?",
    answer:
      "Regional privacy experiences can differ where materially required, routed to an approved regional notice or control when live. Detailed privacy terms live on the Privacy page.",
  },
  {
    question: "How does AI fit into global governance?",
    answer:
      "AI may accelerate research, but it never becomes the evidence or the authority for jurisdictional governance, and it must not flatten jurisdiction, effective-date or version differences.",
  },
  {
    question: "How can enterprises verify regional governance claims?",
    answer:
      "Basic public facts stay public, without a lead form. Sensitive contractual or assurance material follows an approved sales/legal diligence workflow.",
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
            title="Global Data Governance frequently asked questions."
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,800px)_minmax(0,455px)] lg:justify-between">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `governance-faq-${index}`;
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
            className="relative mx-auto aspect-[455/553] w-full max-w-[455px] overflow-hidden rounded-2xl lg:mx-0"
          >
            <Image
              src={`${IMAGE_DIR}/governance-faq-colleagues.webp`}
              alt="Two colleagues working on a laptop in a bright atrium"
              fill
              sizes="(min-width: 1024px) 455px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
