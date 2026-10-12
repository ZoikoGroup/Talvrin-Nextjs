"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
  question: string;
  answer?: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is Talvrin Market Intelligence?",
    answer:
      "A public research destination for source-linked, evidence-led analysis of global public-market topics, designed to expose the evidence, context, and meaningful changes behind the research.",
  },
  {
    question: "How is Market Intelligence different from financial news?",
    answer:
      "Market Intelligence is structured around evidence, source context, methodology, and meaningful changes rather than simply reporting market events as news.",
  },
  {
    question: "Does Talvrin provide investment recommendations?",
    answer:
      "No. Talvrin Market Intelligence is designed as an evidence-led research destination and does not present buy, sell, or hold recommendations.",
  },
  {
    question: "What sources does Talvrin use?",
    answer:
      "Research uses governed public, institutional, official, and other permitted sources where the relevant evidence and source provenance can be established.",
  },
  {
    question: "Does Talvrin use AI to write market intelligence?",
    answer:
      "AI may assist parts of the editorial workflow, such as source discovery, document comparison, summarization, and drafting support. It does not become the evidence or replace authoritative sources.",
  },
  {
    question: "How does Talvrin keep research current?",
    answer:
      "Research freshness is based on meaningful editorial events such as publication, material updates, corrections, reviews, archival changes, or retractions rather than cosmetic timestamp changes.",
  },
  {
    question: "Which markets does Market Intelligence cover?",
    answer:
      "Coverage depends on the markets, jurisdictions, topics, and research categories for which governed editorial evidence is available.",
  },
  {
    question: "Where can I find more Talvrin research?",
    answer:
      "Additional research is available through Talvrin's research destinations and related editorial modules when those destinations are live and approved.",
  },
];

export default function AnswerFirstFaq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full bg-violet-50">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          py-14
          sm:px-6
          sm:py-16
          md:px-8
          lg:px-12
          lg:py-24
          xl:px-20
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="w-full">
          <div
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-[0.07em]
              text-yellow-600
            "
          >
            ANSWER-FIRST FAQ
          </div>

          <h2
            className="
              mt-3
              max-w-[760px]
              font-['IBM_Plex_Sans']
              text-[28px]
              font-bold
              leading-[1.12]
              tracking-[-0.025em]
              text-slate-900
              sm:text-[36px]
              md:text-[42px]
              lg:text-5xl
              lg:leading-[48.3px]
            "
          >
            Frequently asked, answered first.
          </h2>
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-8
            lg:mt-[28px]
            lg:grid-cols-[minmax(0,1fr)_320px]
            lg:items-start
            lg:gap-8
            xl:grid-cols-[840px_384px]
            xl:gap-[36px]
          "
        >
          {/* =================================================
              FAQ LIST
          ================================================== */}

          <div className="w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="
                    w-full
                    border-b
                    border-slate-900/10
                  "
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-6
                      py-5
                      text-left
                    "
                  >
                    <span
                      className="
                        font-['IBM_Plex_Sans']
                        text-sm
                        font-semibold
                        leading-6
                        text-slate-900
                        sm:text-base
                      "
                    >
                      {faq.question}
                    </span>

                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        text-gray-600
                      "
                    >
                      {isOpen ? (
                        <Minus
                          size={18}
                          strokeWidth={1.5}
                        />
                      ) : (
                        <Plus
                          size={18}
                          strokeWidth={1.5}
                        />
                      )}
                    </span>
                  </button>

                  {/* =========================================
                      ANSWER
                  ========================================== */}

                  <div
                    id={`faq-answer-${index}`}
                    className={`
                      grid
                      transition-[grid-template-rows,opacity]
                      duration-300
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      {faq.answer && (
                        <p
                          className="
                            max-w-[720px]
                            pb-5
                            font-['IBM_Plex_Sans']
                            text-sm
                            font-normal
                            leading-6
                            text-gray-600
                            sm:text-base
                          "
                        >
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =================================================
              IMAGE
          ================================================== */}

          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-2xl
              bg-violet-50
              aspect-[420/627]
              lg:aspect-auto
              lg:h-[627px]
            "
          >
            <Image
              src="/images/research/market-intelligence/image6.png"
              alt="Talvrin research team reviewing market intelligence"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 384px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}