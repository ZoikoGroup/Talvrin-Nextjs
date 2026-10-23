"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-coverage/shared";

const IMG = "/images/global/europe";

const faqs = [
  {
    question: "Does Talvrin cover the European Union, the UK or Switzerland today?",
    answer:
      "No European jurisdiction or source record is published yet. This page will state country-level availability directly, once released, rather than implying coverage from the region’s existence.",
  },
  {
    question: "What’s the difference between “the EU” and “Europe” on this page?",
    answer:
      "“The EU” means European Union member states only. “Europe” is wider and also includes non-EU jurisdictions such as the United Kingdom, Switzerland, Norway and Iceland, each tracked under its own record.",
  },
  {
    question:
      "If one EU member state is supported one day, does that mean all EU countries are covered?",
    answer:
      "No. Each member state carries its own record. EU membership is a legal fact, not a measure of what Talvrin has published.",
  },
  {
    question: "Will research be available in European languages other than English?",
    answer:
      "The English interface is available sitewide. Non-English source languages are not yet verified for any European jurisdiction, and a multilingual interface will appear only after translation approval.",
  },
  {
    question: "How is this page different from Global Coverage?",
    answer:
      "Global Coverage describes every region at a high level. This page goes one level down for Europe, listing its groupings and sub-regions with their own status.",
  },
  {
    question: "I’m a security researcher — where do I report an issue?",
    answer:
      "Please use Security Contact for responsible disclosure rather than general support or enquiry channels.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow>Answer-first FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked, answered first.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:grid-cols-[minmax(0,840px)_minmax(0,409px)] xl:justify-between">
          <Reveal delay={0.1} className="border-b border-ink/10">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `europe-faq-${index}`;
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
                    <p id={panelId} className="max-w-[720px] pb-5 text-base leading-6 text-slate-600">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </Reveal>

          <Reveal
            delay={0.2}
            className="relative hidden aspect-[409/495] overflow-hidden rounded-2xl lg:block"
          >
            <Image
              src={`${IMG}/europe-faq-whiteboard.webp`}
              alt="Colleagues discussing ideas at a whiteboard"
              fill
              sizes="(min-width: 1280px) 409px, 340px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
