"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is the Talvrin methodology?",
    answer:
      "An evidence-first research method that keeps questions, source evidence, context, interpretation, research views and ongoing monitoring connected so users can reassess a view when material evidence changes.",
  },
  {
    question: "Does Talvrin rank every source with a confidence score?",
    answer:
      "No. The methodology does not manufacture a numerical confidence score, source-quality score, reliability percentage or fixed weighting model. Evidence remains inspectable and its context, provenance and relationships remain visible.",
  },
  {
    question: "How does Talvrin treat AI-generated output?",
    answer:
      "AI may assist with evidence discovery, summarization, comparison, organization and accessible explanation. AI-assisted output remains distinct from source evidence, with evidence links and provenance kept visible.",
  },
  {
    question: "How does Talvrin handle conflicting evidence?",
    answer:
      "Conflicting evidence remains visible as a research condition. Sources can be represented as supporting, contradicting, updating or contextualizing the research question rather than being silently collapsed into one answer.",
  },
  {
    question: "Why are publication date and effective period separate?",
    answer:
      "Publication time describes when a source became public. The effective or reference period describes when the underlying fact, policy, event or measurement applies. They can be materially different and should not be conflated.",
  },
  {
    question: "How does Talvrin handle updated or superseded sources?",
    answer:
      "Updates and supersession relationships remain part of the evidence trail where supported. Prior versions are not silently overwritten when publication governance permits a version or summary history.",
  },
  {
    question: "How does monitoring fit the methodology?",
    answer:
      "Monitoring keeps the research view connected to meaningful evidence changes. New, updated, unchanged, source-unavailable and materiality-pending states can be surfaced without turning every source change into generic alert noise.",
  },
  {
    question: "Does Talvrin provide investment advice?",
    answer:
      "The methodology does not turn research evidence into investment advice or buy/sell/hold recommendations. Comparisons and evidence relationships remain distinct from an investment recommendation.",
  },
  {
    question: "Is Talvrin global?",
    answer:
      "Coverage is described according to released and registry-approved scope. Architecture-ready capability is not treated as current live coverage, and geographic or market coverage should be stated only where approved.",
  },
  {
    question: "Can I inspect the underlying sources?",
    answer:
      "Where permitted by source rights and access rules, users can open the underlying source or a governed viewer and inspect provenance, publication timing, version, jurisdiction and other relevant evidence context.",
  },
];

export default function AnswerFirstFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-[96px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[760px]"
        >
          <div className="text-xs font-bold uppercase tracking-[0.08em] text-yellow-600 [font-family:'IBM_Plex_Sans']">
            ANSWER-FIRST FAQ
          </div>

          <h2 className="pt-3 text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-[44px] lg:text-5xl lg:leading-[48.3px] [font-family:'IBM_Plex_Sans']">
            Frequently asked, answered first.
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-7 lg:grid-cols-[minmax(0,840px)_384px] lg:items-start lg:gap-[45px]">
          {/* FAQ list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-slate-900/10"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="min-w-0 text-base font-semibold leading-6 text-slate-900 [font-family:'IBM_Plex_Sans']">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl font-normal leading-6 text-gray-600 [font-family:'IBM_Plex_Sans']"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[720px] pb-5 text-base font-normal leading-6 text-gray-600 [font-family:'IBM_Plex_Sans']">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto aspect-[384/773] w-full max-w-[384px] overflow-hidden rounded-2xl bg-slate-900 lg:mx-0"
          >
            <Image
              src="/images/research/talvrin-methodology/image5.png"
              alt="Professionals discussing research and evidence"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1023px) min(100vw - 40px, 384px), 384px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}