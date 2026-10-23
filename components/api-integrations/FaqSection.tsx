"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "Is the Talvrin API live today?",
    answer:
      "No. This page describes the governance model and intended capability shape for Talvrin’s external API and integrations. No live endpoint, sandbox credential, SDK or webhook delivery exists yet — availability will be stated here only once it is genuinely released.",
  },
  {
    question: "What will I actually be able to connect to?",
    answer:
      "The capability groups are Evidence & Provenance, Research Workflows and Entitlements & Rights. Each is currently in specification and will only be offered once it passes every release gate — a scoped product capability, not a general-purpose market-data feed.",
  },
  {
    question: "Does connecting to the API change what data rights I have?",
    answer:
      "No. A technically successful request never changes licensing or entitlement. Display, export, redistribution and AI-use permissions are evaluated independently, per data class, against your contract and the source terms.",
  },
  {
    question: "Is evidence provenance preserved through the API?",
    answer:
      "That is the design requirement. Evidence is intended to return with its source identity, jurisdiction, licence terms, freshness rule, validation state and version history attached — the same record the product shows, filtered by your rights.",
  },
  {
    question: "What security model will the API use?",
    answer:
      "The design references are OAuth 2.0 authorization-code with PKCE, short-lived scoped tokens, object-level authorization checks, TLS everywhere, signed webhooks and per-tenant quotas. These are implementation references, not claims that a certification has been obtained.",
  },
  {
    question: "How do I register interest or request an integration assessment?",
    answer:
      "Use Request Integration Assessment to tell us about your intended workflow. We will evaluate fit against the capability registry and your contract before anything ships — no credentials are issued ahead of release.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-32 bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Answer-first FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end xl:grid-cols-[minmax(0,840px)_minmax(0,378px)] xl:gap-12">
          <Reveal delay={0.1} className="border-b border-ink/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `api-faq-${index}`;
              return (
                <div key={faq.question} className="border-t border-ink/10 first:border-t-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left sm:gap-6"
                  >
                    <span className="text-base font-semibold text-ink">{faq.question}</span>
                    <span className="shrink-0 text-xl font-light text-slate-500" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p id={panelId} className="max-w-[720px] pb-5 text-base leading-[26px] text-slate-600">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </Reveal>

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[378/514] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src={`${IMG}/api-faq-team.webp`}
              alt="Four colleagues laughing together in an office"
              fill
              sizes="(min-width: 1280px) 378px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
