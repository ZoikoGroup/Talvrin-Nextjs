"use client";

import Image from "next/image";
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
   DATA
========================================================= */

const reviewabilityCards = [
  {
    title: "Source verification",

    positive: (
      <>
        Reviewer can follow the conclusion
        <br />
        back to evidence.
      </>
    ),

    negative: (
      <>
        No claim of formal sign-off or
        <br />
        attestation.
      </>
    ),
  },

  {
    title: "Version awareness",

    positive: (
      <>
        Reviewer can see revised or
        <br />
        superseded source context.
      </>
    ),

    negative: (
      <>
        No regulatory audit-trail claim unless
        <br />
        approved.
      </>
    ),
  },

  {
    title: "Reproducibility",

    positive: (
      <>
        The research object preserves
        <br />
        enough context to understand prior
        <br />
        reasoning.
      </>
    ),

    negative: (
      <>
        No guarantee of exact historical
        <br />
        reconstruction.
      </>
    ),
  },

  {
    title: "Interpretation clarity",

    positive: (
      <>
        Reviewer can distinguish evidence
        <br />
        from analysis, AI, and user content.
      </>
    ),

    negative: (
      <>
        No approval hierarchy or reviewer
        <br />
        role model implied.
      </>
    ),
  },
];

/* =========================================================
   REVIEWABILITY CARD
========================================================= */

type ReviewabilityCardProps = {
  title: string;
  positive: React.ReactNode;
  negative: React.ReactNode;
  index: number;
};

function ReviewabilityCard({
  title,
  positive,
  negative,
  index,
}: ReviewabilityCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay: index * 0.08,
      }}
      className="
        w-full
        min-h-[192px]
        lg:h-[192px]
        p-6
        bg-white
        rounded-2xl
        outline
        outline-1
        outline-offset-[-1px]
        outline-slate-900/10
        flex
        flex-col
        justify-start
        items-start
        gap-3
      "
    >
      {/* ===================================================
          TITLE
      =================================================== */}

      <div
        className="
          w-full
          flex
          flex-col
          justify-start
          items-start
        "
      >
        <h3
          className="
            w-full
            text-slate-900
            text-base
            font-bold
            font-['IBM_Plex_Sans']
            leading-6
          "
        >
          {title}
        </h3>
      </div>

      {/* ===================================================
          POSITIVE
      =================================================== */}

      <div
        className="
          w-full
          pt-0.5
          flex
          justify-start
          items-start
          gap-2.5
        "
      >
        {/* CHECK */}

        <div
          className="
            shrink-0
            pt-[2.8px]
            flex
            flex-col
            justify-start
            items-start
          "
        >
          <span
            className="
              text-indigo-500
              text-sm
              font-normal
              font-['Segoe_UI_Symbol']
            "
          >
            ✓
          </span>
        </div>

        {/* TEXT */}

        <div
          className="
            min-w-0
            flex
            flex-col
            justify-start
            items-start
          "
        >
          <p
            className="
              text-slate-700
              text-sm
              font-normal
              font-['IBM_Plex_Sans']
              leading-5
            "
          >
            {positive}
          </p>
        </div>
      </div>

      {/* ===================================================
          NEGATIVE
      =================================================== */}

      <div
        className="
          w-full
          flex
          justify-start
          items-start
          gap-2.5
        "
      >
        {/* CROSS */}

        <div
          className="
            shrink-0
            pt-[2.8px]
            flex
            flex-col
            justify-start
            items-start
          "
        >
          <span
            className="
              text-pink-800
              text-sm
              font-normal
              font-['Segoe_UI_Symbol']
            "
          >
            ✕
          </span>
        </div>

        {/* TEXT */}

        <div
          className="
            min-w-0
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
              font-normal
              font-['IBM_Plex_Sans']
              leading-5
            "
          >
            {negative}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Reviewability() {
  return (
    <section
      className="
        relative
        w-full
        bg-violet-50
        overflow-hidden
        lg:mb-[80px]
      "
    >
      {/* ===================================================
          DESKTOP / MAIN CONTAINER
      =================================================== */}

      <div
        className="
          w-full
          max-w-[1440px]
          min-h-[1040.9px]
          mx-auto
          relative
          px-6
          sm:px-8
          lg:px-0
          py-20
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
            lg:top-[96px]
            lg:absolute
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
              amount: 0.3,
            }}
            variants={fadeUp}
            className="
              w-full
              lg:w-[1280px]
              text-yellow-600
              text-xs
              font-bold
              font-['IBM_Plex_Sans']
              tracking-wide
            "
          >
            REVIEWABILITY
          </motion.div>

          {/* =================================================
              HEADING
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUp}
            className="
              w-full
              max-w-[1000px]
              mt-7
              lg:mt-[16.2px]
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
                lg:leading-[48.72px]
              "
            >
              A colleague can understand why the
              <br className="hidden lg:block" />
              view exists — without an invented
              <br className="hidden lg:block" />
              approval workflow.
            </h2>
          </motion.div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUp}
            className="
              w-full
              max-w-[780px]
              mt-5
              lg:mt-[25.2px]
              lg:pt-2
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
                lg:leading-7
              "
            >
              Reviewers can follow a conclusion back to its evidence. That is
              not the same as sign-off, attestation, or
              <br className="hidden lg:block" />
              a formal compliance workflow.
            </p>
          </motion.div>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div
            className="
              mt-10
              lg:mt-[89.8px]
              grid
              grid-cols-1
              lg:grid-cols-[630px_630px]
              gap-5
            "
          >
            {/* ===============================================
                LEFT — 4 CARDS
            =============================================== */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
                lg:gap-[16px]
              "
            >
              {reviewabilityCards.map((card, index) => (
                <ReviewabilityCard
                  key={card.title}
                  title={card.title}
                  positive={card.positive}
                  negative={card.negative}
                  index={index}
                />
              ))}
            </div>

            {/* ===============================================
                RIGHT — IMAGE
            =============================================== */}

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
                w-full
                h-[384px]
                lg:h-[384px]
                bg-white
                rounded-2xl
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/10
                overflow-hidden
              "
            >
              <Image
                src="/images/solutions/research-teams/image3.png"
                alt="Research team reviewability"
                fill
                priority
                sizes="630px"
                className="
                  object-cover
                  object-center
                "
              />
            </motion.div>
          </div>

          {/* =================================================
              NO APPROVAL-SYSTEM INVENTION
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              w-full
              lg:w-[1280px]
              mt-5
              lg:mt-[61.7px]
              px-6
              py-5
              bg-slate-900
              rounded-2xl
              flex
              flex-col
              justify-start
              items-start
              gap-2
            "
          >
            {/* LABEL */}

            <div
              className="
                w-full
                flex
                flex-col
                justify-start
                items-start
              "
            >
              <div
                className="
                  w-full
                  text-yellow-600
                  text-xs
                  font-bold
                  font-['IBM_Plex_Sans']
                  tracking-wide
                "
              >
                NO APPROVAL-SYSTEM INVENTION
              </div>
            </div>

            {/* DESCRIPTION */}

            <div
              className="
                w-full
                flex
                flex-col
                justify-start
                items-start
              "
            >
              <p
                className="
                  w-full
                  text-violet-50/80
                  text-sm
                  font-normal
                  font-['IBM_Plex_Sans']
                  leading-6
                "
              >
                Talvrin does not label UI as Approve, Reject, Assigned
                reviewer, Compliance sign-off, Investment Committee approved,
                Four-eyes check, or Attested unless that workflow is
                separately approved and
                <br className="hidden lg:block" />
                released.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}