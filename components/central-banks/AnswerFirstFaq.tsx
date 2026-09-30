"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "What is Talvrin Central Banks?",
    answer:
      "A source-linked research destination for following central-bank institutions, policy events, official decisions, communications and evidence changes with timing and jurisdiction context.",
  },
  {
    question: "Does Talvrin predict central-bank decisions?",
    answer:
      "Talvrin presents source-linked information and documented evidence rather than predicting central-bank decisions.",
  },
  {
    question: "Where do meeting dates and policy decisions come from?",
    answer:
      "Meeting dates and policy decisions are presented from governed, source-linked institutional records and official publications.",
  },
  {
    question: "How does Talvrin handle different policy rates and instruments?",
    answer:
      "Different policy rates and instruments are preserved using institution-specific terminology, with normalization used only where the methodology permits comparison.",
  },
  {
    question: "Can I see official statements, minutes or speeches?",
    answer:
      "Where supported and permitted, official statements, minutes, speeches and related source evidence are surfaced with their source context.",
  },
  {
    question: "How are schedule changes or corrected documents handled?",
    answer:
      "Schedule changes, corrections and superseded documents are treated as explicit evidence changes so that revisions do not disappear silently.",
  },
  {
    question: "Is Central Banks investment advice?",
    answer:
      "No. Talvrin Central Banks is a source-linked research destination and does not provide investment advice.",
  },
  {
    question: "Does Talvrin cover every central bank?",
    answer:
      "No. Coverage depends on the governed Coverage Registry and the institutions and evidence classes supported by the service.",
  },
];

export default function AnswerFirstFaq() {
  const sectionRef = useRef<HTMLElement>(null);

  const [openIndex, setOpenIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 15%"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [30, 0]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-violet-50"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-6
          py-20
          sm:px-8
          sm:py-24
          lg:px-0
          lg:py-[96px]
        "
      >
        {/* Header */}
        <motion.div
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
          className="flex w-full flex-col items-start gap-3"
        >
          {/* Eyebrow */}
          <div
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-yellow-600
            "
          >
            ANSWER-FIRST FAQ
          </div>

          {/* Heading */}
          <h2
            className="
              max-w-[760px]
              font-['IBM_Plex_Sans']
              text-[38px]
              font-bold
              leading-[42px]
              text-slate-900
              sm:text-[44px]
              sm:leading-[46px]
              lg:text-5xl
              lg:leading-[48.3px]
            "
          >
            Frequently asked, answered first.
          </h2>
        </motion.div>

        {/* FAQ */}
        <div
          className="
            mt-10
            w-full
            max-w-[840px]
            lg:mt-7
          "
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 20,
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
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  w-full
                  border-b
                  border-slate-900/10
                "
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
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
                      text-base
                      font-semibold
                      leading-6
                      text-slate-900
                    "
                  >
                    {faq.question}
                  </span>

                  <span
                    className="
                      shrink-0
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
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}