"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is the Talvrin Research Library?",
    answer:
      "A public discovery surface for approved TALVRIN research content, designed to help users find evidence-led research by topic, market, jurisdiction, category, and publication history.",
  },
  {
    question: "How is Research Library different from Market Intelligence?",
    answer:
      "The Research Library is the governed discovery and retrieval surface for approved research content. Market Intelligence is a separate research destination focused on curated market intelligence and editorial analysis.",
  },
  {
    question: "What information appears on each result?",
    answer:
      "Each result is designed to expose the information needed to judge relevance, including its category, headline, answer-first summary, author or editor where applicable, published or updated date, jurisdiction or market, sources, canonical URL, status, and an appropriate open action.",
  },
  {
    question: "Does the library contain investment recommendations?",
    answer:
      "No. The Research Library is a research and intelligence discovery surface, not a recommendation engine. Its purpose is to help users find and understand approved research and its supporting evidence.",
  },
  {
    question: "How current is the research?",
    answer:
      "Research items expose truthful publication and materially updated dates. Archived, corrected, or superseded items remain clearly labeled when retained rather than being presented as current research.",
  },
  {
    question: "Can AI write library entries automatically?",
    answer:
      "AI may help with discovery, query interpretation, synonym assistance, and summarization grounded in visible library items. It cannot invent research items, authors, sources, dates, citations, or claim coverage that does not exist in the governed index.",
  },
  {
    question: "Can I filter by market or jurisdiction?",
    answer:
      "Yes, where the Content Registry contains the relevant governed fields. Category, market or jurisdiction, and date facets appear only when those fields are available rather than being fabricated to populate the interface.",
  },
  {
    question: "Does the library include every Research page?",
    answer:
      "No. Research destinations such as Economic Calendar, Central Banks, Policy & Regulation, and Talvrin Methodology can remain separate public surfaces. Library inclusion requires explicit eligibility in the Content Registry.",
  },
];

export default function ResearchLibraryFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full overflow-hidden bg-violet-50">
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          py-16
          sm:px-7
          sm:py-20
          lg:px-8
          lg:py-[96px]
          xl:px-0
        "
      >
        {/* ============================================================
            HEADER
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full"
        >
          {/* EYEBROW */}

          <div className="w-full">
            <span
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                tracking-[0.08em]
                text-indigo-500
              "
            >
              ANSWER-FIRST FAQ
            </span>
          </div>

          {/* TITLE */}

          <div className="max-w-[760px] pt-3">
            <h2
              className="
                font-['IBM_Plex_Sans']
                text-[38px]
                font-bold
                leading-[1.08]
                tracking-[-0.025em]
                text-slate-900
                sm:text-[44px]
                sm:leading-[48.3px]
                lg:text-5xl
              "
            >
              Frequently asked, answered first.
            </h2>
          </div>
        </motion.div>

        {/* ============================================================
            FAQ + IMAGE
        ============================================================ */}

        <div
          className="
            mt-7
            grid
            w-full
            grid-cols-1
            gap-8
            lg:grid-cols-[minmax(0,1fr)_340px]
            lg:items-start
            lg:gap-8
            xl:grid-cols-[minmax(0,840px)_384px]
            xl:gap-[45px]
          "
        >
          {/* ==========================================================
              FAQ LIST
          ========================================================== */}

          <div className="w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    border-b
                    border-slate-900/10
                  "
                >
                  {/* ==================================================
                      QUESTION BUTTON
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-6
                      py-5
                      text-left
                      outline-none
                      focus-visible:ring-2
                      focus-visible:ring-indigo-500
                      focus-visible:ring-offset-2
                    "
                  >
                    <span
                      className="
                        font-['IBM_Plex_Sans']
                        text-base
                        font-semibold
                        leading-6
                        text-slate-900
                      "
                    >
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        font-['IBM_Plex_Sans']
                        text-xl
                        font-normal
                        text-gray-600
                      "
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* ==================================================
                      ANSWER
                  ================================================== */}

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
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="max-w-[720px] pb-5">
                          <p
                            className="
                              font-['IBM_Plex_Sans']
                              text-base
                              font-normal
                              leading-6
                              text-gray-600
                            "
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* ==========================================================
              IMAGE
          ========================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              h-[400px]
              w-full
              overflow-hidden
              rounded-2xl
              bg-pink-700
              sm:h-[500px]
              lg:h-full
              lg:min-h-[520px]
              lg:w-full
              xl:h-[607px]
              xl:w-[384px]
            "
          >
            <Image
              src="/images/research/research-library/image7.png"
              alt="TALVRIN Research Library"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 384px"
              className="
                object-cover
                object-center
                transition-transform
                duration-700
                ease-out
                hover:scale-[1.03]
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}