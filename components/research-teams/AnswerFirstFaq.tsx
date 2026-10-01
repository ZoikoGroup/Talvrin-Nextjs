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
    answer: (
      <>
        Talvrin helps research teams create more repeatable, source-linked
        and monitorable public-market
        <br className="hidden lg:block" />
        research workflows, with shared evidence and preserved reasoning.
      </>
    ),
  },

  {
    question: "How can Talvrin reduce duplicated research work?",
    answer: (
      <>
        Talvrin helps teams organize research around shared evidence and
        reusable research objects, reducing
        <br className="hidden lg:block" />
        repeated source gathering and fragmented individual workflows.
      </>
    ),
  },

  {
    question: "Does Talvrin support collaboration?",
    answer: (
      <>
        Talvrin supports evidence-led collaboration by making research views,
        supporting evidence, and relevant
        <br className="hidden lg:block" />
        context discoverable to the team.
      </>
    ),
  },

  {
    question: "How does Talvrin support reviewability?",
    answer: (
      <>
        Reviewers can follow a conclusion back to its supporting evidence,
        while keeping evidence, analysis,
        <br className="hidden lg:block" />
        and generated interpretation distinguishable.
      </>
    ),
  },

  {
    question: "Can Talvrin preserve institutional knowledge?",
    answer: (
      <>
        Talvrin can preserve the research question, evidence, context, research
        view, and relevant change
        <br className="hidden lg:block" />
        history through the research object.
      </>
    ),
  },

  {
    question: "Does Talvrin replace analysts or research judgment?",
    answer: (
      <>
        No. AI assistance remains subordinate to evidence and policy, and
        generated interpretation does not become
        <br className="hidden lg:block" />
        team consensus or replace research judgment.
      </>
    ),
  },

  {
    question: "Is Talvrin a trading or recommendation platform?",
    answer: (
      <>
        Talvrin is research infrastructure for source-linked and governed
        research workflows. It does not
        <br className="hidden lg:block" />
        represent itself as a trading or recommendation platform.
      </>
    ),
  },
];

/* =========================================================
   FAQ ITEM
========================================================= */

type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
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
    <div
      className="
        self-stretch
        border-b-[0.8px]
        border-slate-900/10
        flex
        flex-col
        justify-start
        items-start
      "
    >
      {/* =================================================
          QUESTION
      ================================================= */}

      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="
          self-stretch
          py-5
          flex
          justify-between
          items-center
          gap-6
          text-left
          cursor-pointer
        "
      >
        {/* QUESTION */}

        <span
          className="
            min-w-0
            flex-1
            text-slate-900
            text-base
            font-semibold
            font-['IBM_Plex_Sans']
            leading-6
          "
        >
          {question}
        </span>

        {/* PLUS / MINUS */}

        <span
          className="
            shrink-0
            w-5
            flex
            justify-center
            items-center
            text-gray-600
            text-xl
            font-normal
            font-['IBM_Plex_Sans']
            leading-none
          "
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* =================================================
          ANSWER
      ================================================= */}

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
      >
        <div
          className="
            w-full
            lg:w-[720px]
            max-w-[720px]
            pb-5
            flex
            flex-col
            justify-start
            items-start
          "
        >
          <p
            className="
              text-gray-600
              text-sm
              sm:text-base
              font-normal
              font-['IBM_Plex_Sans']
              leading-6
            "
          >
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
    <section
      className="
        relative
        w-full
        bg-white
        overflow-hidden
      "
    >
      {/* ===================================================
          SECTION CONTAINER
      =================================================== */}

      <div
        className="
          relative
          w-full
          max-w-[1440px]
          min-h-[868.4px]
          mx-auto

          px-6
          sm:px-8

          lg:px-0
          lg:py-0
        "
      >
        {/* =================================================
            CONTENT WRAPPER
        ================================================= */}

        <div
          className="
            w-full

            lg:w-[1280px]
            lg:left-[80px]
            lg:top-[96.03px]
            lg:absolute

            flex
            flex-col
            justify-start
            items-start
          "
        >
          {/* =================================================
              EYEBROW
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="
              self-stretch
              flex
              flex-col
              justify-start
              items-start
            "
          >
            <div
              className="
                self-stretch
                text-yellow-600
                text-xs
                font-bold
                font-['IBM_Plex_Sans']
                tracking-wide
              "
            >
              ANSWER-FIRST FAQ
            </div>
          </motion.div>

          {/* =================================================
              HEADING
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="
              w-full
              lg:w-[760px]
              lg:max-w-[760px]

              mt-[17px]

              flex
              flex-col
              justify-start
              items-start
            "
          >
            <h2
              className="
                text-slate-900
                text-[32px]
                sm:text-[40px]
                lg:text-5xl
                font-bold
                font-['IBM_Plex_Sans']
                leading-[1.08]
                lg:leading-[48.3px]
              "
            >
              Frequently asked, answered first.
            </h2>
          </motion.div>

          {/* =================================================
              MAIN TWO-COLUMN AREA
          ================================================= */}

          <div
            className="
              w-full

              mt-7

              flex
              flex-col

              lg:block
            "
          >
            {/* =================================================
                FAQ LIST
            ================================================= */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              variants={fadeUp}
              className="
                w-full

                lg:w-[840px]
                lg:max-w-[840px]

                flex
                flex-col
                justify-start
                items-start
              "
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

            {/* =================================================
                IMAGE
            ================================================= */}

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
                amount: 0.2,
              }}
              transition={{
                duration: 0.75,
                ease: smoothEase,
              }}
              className="
                relative

                w-full
                h-[420px]

                mt-10

                sm:h-[500px]

                lg:absolute
                lg:w-[384px]
                lg:h-[580px]

                lg:left-[881px]
                lg:top-[118px]

                bg-rose-500
                rounded-2xl
                overflow-hidden
              "
            >
              <Image
                src="/images/solutions/research-teams/image8.png"
                alt="Research team collaboration"
                fill
                priority
                sizes="384px"
                className="
                  object-cover
                  object-center
                "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}