"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is Partnerships for?",
    answer:
      "Exploring substantive, evidence-aligned collaboration with organizations in technology, research, complementary platforms, or institutional workflows. It is not a sales channel or a general contact route.",
  },
  {
    question: "Does Talvrin have a formal partner program with tiers or benefits?",
    answer:
      "No. Talvrin does not publish partner tiers, certifications, partner badges, or a partner roster until there is an approved basis for them. Conversations are qualified individually based on strategic and evidence fit.",
  },
  {
    question: "Does submitting this form guarantee a partnership, integration, or response?",
    answer:
      "No. A partnership enquiry reaches an internal reviewer, but submission does not imply acceptance, exclusivity, program eligibility, or commercial terms. Silence or review time is not a commitment.",
  },
  {
    question: "We want to integrate our product with Talvrin — does an API exist?",
    answer:
      "Technical integrations, connectors, and external APIs are evaluated on a case-by-case basis and are not publicly established today. Select “Technology / Integration” to discuss your workflow interoperability proposal.",
  },
  {
    question: "We supply market data or source content — is this the right route?",
    answer:
      "Data and source supply is not yet available as a self-serve partner route. If you have an established data or licensing proposal, select “Other Strategic Partnership” or use Contact Talvrin until a dedicated provider channel is live.",
  },
  {
    question: "Can we use the Talvrin name or logo once we're a partner?",
    answer:
      "No partner claims, logos, case studies, or public co-marketing are permitted without a fully executed, approved written partnership and rights agreement.",
  },
  {
    question: "How is this different from Enterprise Enquiries?",
    answer:
      "Enterprise Enquiries is for organizations evaluating Talvrin as a research and monitoring product for internal institutional use. Partnerships is for organizations proposing collaborative, interoperable, or strategic initiatives together with Talvrin.",
  },
  {
    question: "What shouldn't I include in my proposal?",
    answer:
      "Do not include confidential or proprietary information, specific commercial deal terms, credentials, or unpublished data in this form. High-level strategic fit is all that is needed for initial review.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <Container className="max-w-[1320px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_464px] lg:gap-16">
          {/* FAQ Accordion Area */}
          <div>
            <Reveal>
              <SectionEyebrow tone="violet">ANSWERS FIRST</SectionEyebrow>
              <SectionHeading>Partnerships frequently asked questions.</SectionHeading>
            </Reveal>

            <div className="mt-8 flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const panelId = `partnerships-faq-panel-${index}`;
                return (
                  <Reveal key={faq.question} delay={index * 0.03}>
                    <div className="rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-[#F6F5FB] transition-colors">
                      <h3>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="flex w-full items-center justify-between gap-4 px-5 py-[18px] text-left text-base font-semibold text-[#171335] focus-visible:outline-2 focus-visible:outline-[#171335]"
                        >
                          <span>{faq.question}</span>
                          <span
                            aria-hidden="true"
                            className="text-xl font-normal leading-none text-[#5D5A72]"
                          >
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                      </h3>
                      {isOpen && (
                        <div id={panelId} className="px-5 pb-5 pt-1">
                          <p className="text-[14px] leading-[22px] text-[#5D5A72]">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <Reveal delay={0.15} className="flex justify-center lg:justify-end">
            <div className="relative aspect-[464/553] w-full max-w-[464px] overflow-hidden rounded-[16px] bg-[#F64949]/10">
              <Image
                src={`${IMG}/partnerships-faq.png`}
                alt="Partnership questions overview"
                fill
                sizes="(max-width: 1024px) 100vw, 464px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
