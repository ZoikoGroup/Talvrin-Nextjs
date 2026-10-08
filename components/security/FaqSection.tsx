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
    question: "How does Talvrin approach security?",
    answer:
      "As part of the product architecture. Public security statements appear only once the claim, its scope, supporting evidence and review state are approved — never as marketing copy written directly into the page.",
  },
  {
    question: "What does the Security page cover?",
    answer:
      "Protection of identities/accounts, workspaces, services, secrets and supporting systems, plus the rules that decide which security claims can be published. Privacy, Data Rights, Global Data Governance and Service Status are separate Trust surfaces.",
  },
  {
    question: "Does Talvrin have specific security certifications?",
    answer:
      "No certification is listed on this page unless a current, approved Assurance Registry record exists for it, with exact scope, status and reviewed date. No badge or logo appears without that record and usage rights.",
  },
  {
    question: "Does Talvrin use encryption?",
    answer:
      "Specific encryption methods, algorithms or key-management details are not stated here unless an approved security claim establishes them. Where a claim is approved, it is published with its scope.",
  },
  {
    question: "Does Talvrin support MFA or SSO?",
    answer:
      "Identity features are named only once they are actually released and an approved claim exists. Until then, this page does not imply MFA, SSO or any specific identity-provider support.",
  },
  {
    question: "Where can I see live availability?",
    answer:
      "On Service Status. The Security page states governed posture only; it never shows or overrides live incidents or uptime.",
  },
  {
    question: "How do I report a security issue?",
    answer:
      "No public security reporting channel is currently published. A reporting route will appear on this page only once an approved channel, scope and legal wording exist — please don't send vulnerability details through general support forms.",
  },
  {
    question: "Does an empty certification or incident section mean none exist?",
    answer:
      "No. An empty section means no approved public claim has been published yet. It is a neutral \"not publicly stated\" state, not a positive or negative statement about what exists.",
  },
  {
    question: "Is Talvrin a trading platform?",
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
          <SectionIntro eyebrow="Answers First" tone="amber" title="Security frequently asked questions." />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,800px)_minmax(0,462px)] lg:justify-between">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `security-faq-${index}`;
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
            className="relative aspect-video w-full overflow-hidden rounded-2xl md:aspect-[21/9] lg:aspect-auto lg:min-h-[560px]"
          >
            <Image
              src={`${IMAGE_DIR}/security-faq-laptop.webp`}
              alt="Three friends laughing together over a laptop"
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
