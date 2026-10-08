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
    question: "What is the Talvrin Trust Center?",
    answer:
      "The public entry point for understanding how Talvrin approaches evidence provenance, governed data use, data rights, security, privacy, global data governance, responsible AI and operational transparency. It routes to the page that owns each domain's detail.",
  },
  {
    question: "Why does Talvrin treat trust as part of the product?",
    answer:
      "Because a platform built around evidence must itself be open to scrutiny. Material trust claims are published only when their scope, owner, evidence basis and review state are approved — the same discipline the product applies to research.",
  },
  {
    question: "Does Talvrin publish security or compliance certifications?",
    answer:
      "Only when a current, approved assurance record exists with an exact scope, status and reviewed date. This page does not claim SOC 2, ISO or any other certification without that record. See Security for how assurance claims are governed.",
  },
  {
    question: "How does Talvrin handle data rights?",
    answer:
      "Licensing, entitlement, redistribution, access and permitted use are governed through controls owned by the Data Rights page. Rights or redistribution permissions are never claimed without an approved rights source.",
  },
  {
    question: "How does Talvrin use AI?",
    answer:
      "AI may assist with search, organization, comparison, summarization, change identification, explanation and contradiction surfacing. It never becomes the evidence: AI-assisted content carries provenance treatment distinct from source material.",
  },
  {
    question: "Is Talvrin globally available?",
    answer:
      "Talvrin is designed as a global platform, but global architecture is not the same as released coverage. Live markets, datasets and jurisdiction-specific capabilities are stated explicitly as they become available.",
  },
  {
    question: "Where can I see service status?",
    answer:
      "On Service Status. Live operational state comes only from an authoritative status service — this page never states uptime percentages or incident-free claims.",
  },
  {
    question: "Does Talvrin provide investment advice?",
    answer:
      "No. Talvrin is a research and intelligence platform. It does not execute trades or provide manufactured investment recommendations.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Answers First" tone="amber" title="Trust Center frequently asked questions." />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,800px)_minmax(0,468px)] lg:justify-between">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `trust-center-faq-${index}`;
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
              src={`${IMAGE_DIR}/trust-center-faq-hallway.webp`}
              alt="Two colleagues walking down an office corridor, one pointing ahead"
              fill
              sizes="(min-width: 1024px) 468px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
