"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "What is Talvrin Policy & Regulation?",
    answer:
      "A source-linked research surface for organizing policy and regulatory evidence relevant to public markets, with authority, jurisdiction, timing, version and source provenance kept visible.",
  },
  {
    question: "Does Talvrin provide legal advice?",
    answer:
      "No. Talvrin Policy & Regulation is a research and market-intelligence surface. It does not provide legal advice, compliance certification or legal determinations.",
  },
  {
    question: "Where does the information come from?",
    answer:
      "Information is organized from official policy and regulatory sources, with authority, jurisdiction, timing, version and source provenance kept visible wherever supported.",
  },
  {
    question: "How are policy changes tracked?",
    answer:
      "Policy changes are tracked through governed lifecycle and version states, including updates, supersession, withdrawal and source-availability changes where the underlying evidence supports them.",
  },
  {
    question:
      "What is the difference between publication date and effective date?",
    answer:
      "Publication date indicates when a source was published or made available. Effective date indicates when the source states that a policy, rule or change takes effect. They are shown as separate fields rather than being combined.",
  },
  {
    question: "Does Talvrin decide whether a rule applies to me?",
    answer:
      "No. Talvrin may provide jurisdiction, authority, timing and research context, but it does not determine whether a particular rule legally applies to an individual user.",
  },
  {
    question: "Can AI summarize regulatory documents?",
    answer:
      "AI may assist with discovering, organizing, comparing or summarizing regulatory documents. AI-assisted content remains clearly labeled and visually distinct from the official source, which remains the authoritative evidence.",
  },
  {
    question: "Which jurisdictions are covered?",
    answer:
      "Coverage depends on the governed jurisdiction, authority and source registries. The page distinguishes actual released coverage from planned or architecture-ready coverage rather than implying unsupported coverage.",
  },
];

export default function AnswerFirstFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        {/* Section heading */}
        <div className="w-full">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500">
            ANSWER-FIRST FAQ
          </p>

          <div className="w-full max-w-[760px] pt-3">
            <h2 className="font-['IBM_Plex_Sans'] text-[40px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-5xl sm:leading-[48.3px]">
              Frequently asked, answered first.
            </h2>
          </div>
        </div>

        {/* FAQ + Image */}
        <div className="mt-8 flex w-full flex-col gap-10 lg:mt-7 lg:flex-row lg:items-start lg:gap-12">
          {/* FAQ list */}
          <div className="w-full min-w-0 lg:max-w-[840px]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="w-full border-b-[0.8px] border-slate-900/10"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="min-w-0 font-['IBM_Plex_Sans'] text-base font-semibold leading-6 text-slate-900">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className="shrink-0 font-['IBM_Plex_Sans'] text-xl font-normal leading-none text-gray-600"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="max-w-[720px] pb-5 pr-8"
                    >
                      <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-6 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Image */}
          <div className="relative w-full shrink-0 overflow-hidden rounded-2xl bg-rose-400 sm:max-w-[628px] lg:w-[320px] lg:max-w-none">
            <div className="relative aspect-square w-full">
              <Image
                src="/images/research/policy-regulatory-intelligence/image8.png"
                alt="Talvrin Policy and Regulation research"
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 628px, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}