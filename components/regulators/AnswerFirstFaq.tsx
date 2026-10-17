"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is this page?",
    answer:
      "A source-linked research destination for discovering public-market regulatory authorities, their official document families and evidence — part of the Markets › Source Universe sequence, alongside Central Banks, Economic Statistics and Public Companies.",
  },
  {
    question: "Which regulators does Talvrin cover?",
    answer:
      "Coverage is governed by the entity registry and approved coverage scope. Regulators in the directory are identified by authority, jurisdiction, and official document families once verified by the Coverage Registry.",
  },
  {
    question: "Are the documents official?",
    answer:
      "Yes. Talvrin connects strictly to original official publications and records from verified issuing authorities, maintaining original titles, identifiers, and direct source links wherever permitted.",
  },
  {
    question: "Does \"published\" mean a rule is in effect?",
    answer:
      "No. A publication date simply records when the regulator released the document. Effective dates, comment periods, and phased implementation timelines are tracked and displayed separately, never inferred from publication timing.",
  },
  {
    question: "Is this compliance advice?",
    answer:
      "No. Talvrin is a research and market-intelligence workspace. Information is provided for research and monitoring purposes and does not constitute legal, regulatory, compliance, or investment advice.",
  },
  {
    question: "Can I monitor changes to a regulator’s publications?",
    answer:
      "Yes. The monitoring handoff tracks eight explicit change states — including new releases, updates, corrections, supersessions, and withdrawals — so changes to regulatory evidence never occur silently.",
  },
  {
    question: "What happens when a document is withdrawn or superseded?",
    answer:
      "Withdrawn or superseded documents remain visibly preserved in the record with explicit status labels and provenance timestamps, ensuring historical auditability rather than disappearing from coverage.",
  },
];

export default function AnswerFirstFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F6F5FB] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[80px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          <span className="font-sans text-[13px] font-bold tracking-[0.08em] text-[#B98132]">
            ANSWER-FIRST FAQ
          </span>
          <h2 className="max-w-[760px] font-sans text-[30px] font-bold leading-[1.16] text-[#171335] sm:text-[36px] md:text-[42px] md:leading-[48.3px]">
            Frequently asked, answered first.
          </h2>
        </div>

        {/* Content Grid: Accordion FAQ on left, Visual showcase on right */}
        <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_minmax(0,400px)] xl:grid-cols-[1fr_minmax(0,416px)]">
          {/* FAQ Accordion */}
          <div className="divide-y divide-[rgba(23,19,53,0.1)] border-b border-[rgba(23,19,53,0.1)]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 text-left font-sans text-[16px] font-semibold text-[#171335] transition-colors hover:text-[#6C5CE7] sm:text-[17px]"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[22px] font-normal text-[#5D5A72] shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 max-w-[720px] font-sans text-[15px] font-normal leading-[1.6] text-[#5D5A72] sm:text-[16px] sm:leading-[25.6px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative hidden overflow-hidden rounded-2xl bg-[#D53A3A] shadow-lg lg:block lg:h-[540px] xl:h-[583px]"
          >
            <Image
              src="/images/markets/regulators/adjacent-macro-economics.png"
              alt="Regulatory FAQ & documentation insights"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1200px) 400px, 416px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
