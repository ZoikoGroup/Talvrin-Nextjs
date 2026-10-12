"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "What are Talvrin Market Explainers?",
    answer:
      "Evidence-linked explanations of public-market concepts, institutions, mechanics, and relationships designed to help users understand the “why” behind market research.",
  },
  {
    question: "Are Market Explainers investment advice?",
    answer:
      "No. They are research and educational content, not trade execution, stock tips, or manufactured buy/sell recommendations.",
  },
  {
    question: "What makes them different from generic finance explainers?",
    answer:
      "Each explainer is designed around evidence, context, source provenance, material updates, and clear boundaries between explanation and underlying source material.",
  },
  {
    question: "Where do the sources come from?",
    answer:
      "Sources can include official institutions, regulators, central banks, public organizations, licensed providers, and other governed high-authority sources where appropriate.",
  },
  {
    question: "How often are explainers updated?",
    answer:
      "Updates happen when evidence, source material, methodology, or other material context changes. A timestamp is used to represent a meaningful lifecycle event rather than to manufacture freshness.",
  },
  {
    question: "Does Talvrin use AI to write explainers?",
    answer:
      "AI may assist with discovery, organization, comparison, summarization, or drafting under editorial review. It does not become the authoritative evidence source.",
  },
  {
    question: "Do explainers cover every market and jurisdiction?",
    answer:
      "No. Coverage is governed and explicitly stated. Talvrin does not imply blanket coverage where a market, jurisdiction, source, or concept is unsupported.",
  },
  {
    question: "Can I use an explainer as the final answer to a research question?",
    answer:
      "An explainer is an orientation and understanding layer. For serious research, users should inspect the current evidence, source context, and relevant underlying materials.",
  },
];

export default function AnswerFirstFaq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

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
          sm:px-8
          sm:py-20
          lg:px-8
          lg:py-[96px]
          xl:px-0
        "
      >
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="w-full">
          {/* Eyebrow */}

          <div
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-indigo-500
            "
          >
            ANSWER-FIRST FAQ
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              max-w-[760px]
              font-['IBM_Plex_Sans']
              text-[36px]
              font-bold
              leading-[1.12]
              tracking-[-0.02em]
              text-slate-900

              sm:text-[42px]

              lg:text-5xl
              lg:leading-[48.3px]
            "
          >
            Frequently asked, answered first.
          </h2>
        </div>

        {/* =====================================================
            MAIN CONTENT

            DESKTOP

            FAQ                         IMAGE
            ┌───────────────────────┐   ┌──────────────┐
            │ FAQ                   │   │              │
            │                       │   │              │
            │                       │   │    IMAGE     │
            │                       │   │              │
            └───────────────────────┘   └──────────────┘

            Mobile:
            FAQ
            ↓
            IMAGE
        ===================================================== */}

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
            xl:gap-x-[38px]
          "
        >
          {/* =================================================
              FAQ LIST
          ================================================= */}

          <div className="w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="
                    border-b
                    border-slate-900/10
                  "
                >
                  {/* Question row */}

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
                    "
                  >
                    {/* Question */}

                    <span
                      className="
                        min-w-0
                        font-['IBM_Plex_Sans']
                        text-base
                        font-semibold
                        leading-6
                        text-slate-900
                      "
                    >
                      {faq.question}
                    </span>

                    {/* Plus / Minus */}

                    <span
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
                        leading-none
                        text-gray-600
                      "
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer */}

                  <div
                    className={`
                      grid
                      transition-[grid-template-rows,opacity]
                      duration-300
                      ease-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="
                          max-w-[720px]
                          pb-5
                          font-['IBM_Plex_Sans']
                          text-base
                          font-normal
                          leading-6
                          text-gray-600
                        "
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =================================================
              SIDE IMAGE
          ================================================= */}

          <div
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
              xl:h-[627px]
            "
          >
            <Image
              src="/images/research/market-explainers/image7.png"
              alt="Talvrin market research professional"
              fill
              priority={false}
              sizes="
                (max-width: 1023px) 100vw,
                384px
              "
              className="
                object-cover
                object-center
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}