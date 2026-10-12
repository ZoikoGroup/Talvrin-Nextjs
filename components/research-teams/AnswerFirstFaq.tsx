"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";

/* =========================================================
   ANIMATION
========================================================= */

const smoothEase: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    question: "What is Talvrin for research teams?",
    answer:
      "Talvrin helps research teams create more repeatable, source-linked and monitorable public-market research workflows, with shared evidence and preserved reasoning.",
  },
  {
    question: "How can Talvrin reduce duplicated research work?",
    answer:
      "Talvrin helps teams organize research around shared evidence and reusable research objects, reducing repeated source gathering and fragmented individual workflows.",
  },
  {
    question: "Does Talvrin support collaboration?",
    answer:
      "Talvrin supports evidence-led collaboration by making research views, supporting evidence, and relevant context discoverable to the team.",
  },
  {
    question: "How does Talvrin support reviewability?",
    answer:
      "Reviewers can follow a conclusion back to its supporting evidence, while keeping evidence, analysis, and generated interpretation distinguishable.",
  },
  {
    question: "Can Talvrin preserve institutional knowledge?",
    answer:
      "Talvrin can preserve the research question, evidence, context, research view, and relevant change history through the research object.",
  },
  {
    question: "Does Talvrin replace analysts or research judgment?",
    answer:
      "No. AI assistance remains subordinate to evidence and policy, and generated interpretation does not become team consensus or replace research judgment.",
  },
  {
    question: "Is Talvrin a trading or recommendation platform?",
    answer:
      "Talvrin is research infrastructure for source-linked and governed research workflows. It does not represent itself as a trading or recommendation platform.",
  },
];

/* =========================================================
   FAQ ITEM
========================================================= */

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: FAQItemProps) {
  return (
    <div className="w-full border-b border-slate-900/10">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left sm:gap-6"
      >
        <span className="min-w-0 flex-1 break-words font-['IBM_Plex_Sans'] text-sm font-semibold leading-6 text-slate-900 sm:text-base">
          {question}
        </span>

        <span
          aria-hidden="true"
          className="flex h-6 w-6 shrink-0 items-center justify-center font-['IBM_Plex_Sans'] text-xl font-normal leading-none text-gray-600"
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
          duration: 0.35,
          ease: smoothEase,
        }}
        className="w-full overflow-hidden"
        aria-hidden={!isOpen}
      >
        <div className="w-full max-w-[720px] pb-5">
          <p className="font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600 sm:text-base sm:leading-7">
            {answer}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AnswerFirstFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 min-[480px]:px-5 sm:py-16 md:px-8 md:py-20 lg:px-12 xl:px-20 xl:py-24">
        <div className="w-full max-w-[1280px]">
          {/* EYEBROW */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600 sm:text-sm"
          >
            ANSWER-FIRST FAQ
          </motion.p>

          {/* HEADING */}

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="mt-4 w-full max-w-[760px] break-words font-['IBM_Plex_Sans'] text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900"
          >
            Frequently asked, answered first.
          </motion.h2>

          {/* FAQ AND IMAGE */}

          <div className="mt-8 grid w-full grid-cols-1 items-start gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,384px)] lg:gap-10 xl:mt-12 xl:gap-14 2xl:gap-[72px]">
            {/* FAQ LIST */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                  },
                },
              }}
              className="w-full min-w-0"
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index ? null : index
                    )
                  }
                />
              ))}
            </motion.div>

            {/* IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: 24,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.75,
                ease: smoothEase,
              }}
              className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-2xl bg-rose-500 sm:aspect-[5/3] lg:sticky lg:top-8 lg:aspect-[3/4] xl:aspect-[384/580]"
            >
              <Image
                src="/images/solutions/research-teams/image8.png"
                alt="Research team collaboration"
                fill
                priority
                sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 35vw, 384px"
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}