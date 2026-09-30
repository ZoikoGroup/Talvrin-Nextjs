"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

/*
 * Replace this with the actual image you saved for this section.
 *
 * Example:
 * /images/research/economic-calendar/image4.png
 */
const FAQ_IMAGE = "/images/research/economic-calendar/image4.png";

const faqs = [
  {
    question: "What is the Talvrin Economic Calendar?",
    answer:
      "A research-oriented calendar for scheduled and released macroeconomic events, designed to keep timing, source provenance, revisions and research context visible.",
  },
  {
    question: "Does Talvrin show economic releases in my time zone?",
    answer:
      "Yes. Scheduled and published times are presented with an explicit active time zone so that release timing is not ambiguous.",
  },
  {
    question: "Where do the economic data and release times come from?",
    answer:
      "Economic event information and release timing come from approved and governed sources. Source provenance and applicable rights are kept visible where relevant.",
  },
  {
    question: "What does consensus mean?",
    answer:
      "Consensus is an estimate or aggregation from an identified provider or governed methodology. It is presented separately from official actual and previous values.",
  },
  {
    question: "How are revisions handled?",
    answer:
      "When an authoritative source revises or corrects a value, the revision state and history remain traceable rather than silently overwriting the earlier information.",
  },
  {
    question: "Is the Economic Calendar investment advice?",
    answer:
      "No. The Economic Calendar is a research and evidence surface. It does not turn an economic release into a buy or sell instruction or claim that a release will produce a specific market move.",
  },
];

export default function EconomicCalendarFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="relative overflow-hidden bg-violet-50">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="w-full"
        >
          {/* Eyebrow */}
          <div className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
            ANSWER-FIRST FAQ
          </div>

          {/* Heading */}
          <h2 className="max-w-[760px] pt-3 font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-[42px] lg:text-5xl lg:leading-[48.3px]">
            Economic Calendar questions,
            <br className="hidden sm:block" />
            answered directly.
          </h2>
        </motion.div>

        {/* =====================================================
            FAQ + IMAGE
        ===================================================== */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,840px)_minmax(320px,384px)] lg:items-start lg:gap-8">
          {/* ===================================================
              FAQ LIST
          =================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: "easeOut",
            }}
            className="w-full"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b-[0.8px] border-slate-900/10"
                >
                  {/* Question button */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-['IBM_Plex_Sans'] text-base font-semibold text-slate-900">
                      {faq.question}
                    </span>

                    <span
                      className={`flex size-6 shrink-0 items-center justify-center text-gray-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="size-5" strokeWidth={1.5} />
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[720px] pb-5 font-['IBM_Plex_Sans'] text-base font-normal leading-6 text-gray-600">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* ===================================================
              IMAGE
          =================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: "easeOut",
            }}
            className="relative mx-auto aspect-square w-full max-w-[384px] overflow-hidden rounded-2xl bg-red-600 lg:mt-[48px]"
          >
            <Image
              src={FAQ_IMAGE}
              alt="Economic calendar research"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 384px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}