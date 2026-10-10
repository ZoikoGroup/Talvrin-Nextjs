"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

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
   DATA
========================================================= */

type ReviewabilityCardData = {
  title: string;
  positive: ReactNode;
  negative: ReactNode;
};

const reviewabilityCards: ReviewabilityCardData[] = [
  {
    title: "Source verification",
    positive: <>Reviewer can follow the conclusion back to evidence.</>,
    negative: <>No claim of formal sign-off or attestation.</>,
  },
  {
    title: "Version awareness",
    positive: <>Reviewer can see revised or superseded source context.</>,
    negative: <>No regulatory audit-trail claim unless approved.</>,
  },
  {
    title: "Reproducibility",
    positive: (
      <>
        The research object preserves enough context to understand prior
        reasoning.
      </>
    ),
    negative: <>No guarantee of exact historical reconstruction.</>,
  },
  {
    title: "Interpretation clarity",
    positive: (
      <>
        Reviewer can distinguish evidence from analysis, AI, and user content.
      </>
    ),
    negative: <>No approval hierarchy or reviewer role model implied.</>,
  },
];

/* =========================================================
   REVIEWABILITY CARD
========================================================= */

type ReviewabilityCardProps = {
  card: ReviewabilityCardData;
  index: number;
};

function ReviewabilityCard({
  card,
  index,
}: ReviewabilityCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={fadeUp}
      transition={{
        delay: index * 0.08,
      }}
      className="
        flex
        min-h-[192px]
        w-full
        min-w-0
        flex-col
        items-start
        justify-start
        gap-3
        rounded-2xl
        bg-white
        p-5
        outline
        outline-1
        outline-offset-[-1px]
        outline-slate-900/10
        sm:p-6
        lg:h-[192px]
        lg:p-5
        xl:p-6
      "
    >
      {/* TITLE */}

      <h3
        className="
          w-full
          break-words
          font-['IBM_Plex_Sans']
          text-base
          font-bold
          leading-6
          text-slate-900
        "
      >
        {card.title}
      </h3>

      {/* POSITIVE */}

      <div className="flex w-full min-w-0 items-start gap-2.5">
        <span
          aria-hidden="true"
          className="
            shrink-0
            pt-px
            font-['Segoe_UI_Symbol']
            text-sm
            text-indigo-500
          "
        >
          ✓
        </span>

        <p
          className="
            min-w-0
            flex-1
            break-words
            font-['IBM_Plex_Sans']
            text-sm
            font-normal
            leading-5
            text-slate-700
          "
        >
          {card.positive}
        </p>
      </div>

      {/* NEGATIVE */}

      <div className="flex w-full min-w-0 items-start gap-2.5">
        <span
          aria-hidden="true"
          className="
            shrink-0
            pt-px
            font-['Segoe_UI_Symbol']
            text-sm
            text-pink-800
          "
        >
          ✕
        </span>

        <p
          className="
            min-w-0
            flex-1
            break-words
            font-['IBM_Plex_Sans']
            text-sm
            font-normal
            leading-5
            text-gray-600
          "
        >
          {card.negative}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Reviewability() {
  return (
    <section className="relative mb-0 w-full overflow-hidden bg-violet-50">
      {/* MAIN CONTAINER */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          py-12
          min-[480px]:px-5
          sm:py-16
          md:px-8
          lg:px-12
          lg:py-20
          xl:px-20
          xl:py-[96px]
        "
      >
        <div className="w-full">
          {/* EYEBROW */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUp}
            className="
              w-full
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-yellow-600
              sm:text-sm
            "
          >
            REVIEWABILITY
          </motion.p>

          {/* HEADING */}

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUp}
            className="
              mt-5
              w-full
              max-w-[1000px]
              font-['IBM_Plex_Sans']
              text-[clamp(1.8rem,3.5vw,3rem)]
              font-bold
              leading-[1.1]
              tracking-[-0.02em]
              text-slate-900
              sm:mt-6
              lg:mt-[16px]
            "
          >
            A colleague can understand why the view exists — without an
            invented approval workflow.
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUp}
            className="
              mt-4
              w-full
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-gray-600
              sm:mt-5
              sm:text-base
              sm:leading-7
              lg:mt-[25px]
            "
          >
            Reviewers can follow a conclusion back to its evidence. That is
            not the same as sign-off, attestation, or a formal compliance
            workflow.
          </motion.p>

          {/* MAIN CONTENT */}

          <div
            className="
              mt-8
              grid
              w-full
              grid-cols-1
              items-start
              gap-5
              sm:mt-10
              lg:mt-[89px]
              lg:grid-cols-2
              lg:gap-5
              xl:gap-6
            "
          >
            {/* LEFT — CARDS */}

            <div
              className="
                grid
                w-full
                min-w-0
                grid-cols-1
                gap-4
                min-[480px]:grid-cols-2
                lg:grid-cols-2
              "
            >
              {reviewabilityCards.map((card, index) => (
                <ReviewabilityCard
                  key={card.title}
                  card={card}
                  index={index}
                />
              ))}
            </div>

            {/* RIGHT — IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: smoothEase,
              }}
              className="
                relative
                aspect-[4/3]
                w-full
                min-w-0
                overflow-hidden
                rounded-2xl
                bg-white
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/10
                sm:aspect-[5/3]
                lg:aspect-auto
                lg:h-[384px]
              "
            >
              <Image
                src="/images/solutions/research-teams/image3.png"
                alt="Research team reviewability"
                fill
                priority
                sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 50vw, 600px"
                className="object-cover object-center"
              />
            </motion.div>
          </div>

          {/* CTA */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              mt-5
              flex
              w-full
              flex-col
              items-start
              justify-start
              gap-2
              rounded-2xl
              bg-slate-900
              px-5
              py-5
              sm:px-6
              sm:py-6
              lg:mt-6
            "
          >
            {/* CTA LABEL */}

            <p
              className="
                w-full
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                tracking-wide
                text-yellow-600
                sm:text-sm
              "
            >
              NO APPROVAL-SYSTEM INVENTION
            </p>

            {/* CTA DESCRIPTION */}

            <p
              className="
                w-full
                break-words
                font-['IBM_Plex_Sans']
                text-sm
                font-normal
                leading-6
                text-violet-50/80
                sm:text-base
                sm:leading-7
              "
            >
              Talvrin does not label UI as Approve, Reject, Assigned reviewer,
              Compliance sign-off, Investment Committee approved, Four-eyes
              check, or Attested unless that workflow is separately approved
              and released.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}