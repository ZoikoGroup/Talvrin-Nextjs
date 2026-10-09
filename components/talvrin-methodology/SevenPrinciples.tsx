"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Evidence before assertion",
    description:
      "Important conclusions should remain connected to the information supporting them.",
    practice:
      "Visible source identity, source route/viewer, evidence relationship, and provenance state.",
  },
  {
    title: "Source before summary",
    description:
      "A convenient explanation must not erase the underlying source.",
    practice:
      "Source access precedes or accompanies interpretation; source label never hidden behind AI text.",
  },
  {
    title: "Context before confidence",
    description:
      "Dates, jurisdictions, versions, periods, rights, and relationships can materially change meaning.",
    practice:
      "Publication time, effective/reference period, jurisdiction, version/supersession, and rights state where material.",
  },
  {
    title: "AI assistance, not AI authority",
    description:
      "AI may accelerate research without becoming the authoritative evidence source.",
    practice:
      "Persistent provenance treatment and separate labels for generated/model-assisted output.",
  },
  {
    title: "Coverage before claims",
    description:
      "Talvrin should describe what is actually supported, not theoretical capability as live coverage.",
    practice:
      "Coverage registry/status pattern and explicit limitations.",
  },
  {
    title: "Judgment remains human",
    description:
      "Talvrin can improve the information environment; users remain responsible for decisions.",
    practice:
      'No prescriptive investment recommendation language or "decision certainty" claims.',
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function SevenPrinciples() {
  return (
    <section
      id="method"
      className="
        relative
        scroll-mt-20
        w-full
        overflow-hidden
        bg-[#F6F5FF]
        text-slate-900
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1439.8px]
          px-6
          py-16

          sm:px-8
          sm:py-20

          lg:px-20
          lg:py-[95.6px]
        "
      >
        {/* =========================================================
            INTRO
        ========================================================= */}

        <div
          className="
            mx-auto
            w-full
            max-w-[1280px]
          "
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span
              className="
                font-['IBM_Plex_Sans']
                text-[12px]
                font-bold
                leading-[16px]
                tracking-[0.07em]
                text-[#D9A400]
              "
            >
              SEVEN PRINCIPLES
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.65,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-[13px]
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-[36px]
              font-bold
              leading-[1.12]
              tracking-[-0.025em]
              text-slate-900

              sm:text-[42px]

              lg:text-[48px]
              lg:leading-[48.72px]
            "
          >
            The methodology in one sentence.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-4
              max-w-[800px]
              font-['IBM_Plex_Sans']
              text-[15px]
              font-normal
              leading-7
              text-gray-600

              sm:text-[16px]
            "
          >
            Connect the question to the evidence, the evidence to its context,
            the context to a research view, and the research view to whatever
            changes the evidence next.
          </motion.p>

          {/* =========================================================
              PRINCIPLES GRID
          ========================================================= */}

          <div
            className="
              mt-[76px]
              grid
              grid-cols-1
              gap-[16px]

              sm:grid-cols-2

              lg:grid-cols-4
              lg:gap-[5px]
            "
          >
            {/* -------------------------------------------------------
                CARD 1
            ------------------------------------------------------- */}

            <PrincipleCard
              index={0}
              title={principles[0].title}
              description={principles[0].description}
              practice={principles[0].practice}
            />

            {/* -------------------------------------------------------
                CARD 2
            ------------------------------------------------------- */}

            <PrincipleCard
              index={1}
              title={principles[1].title}
              description={principles[1].description}
              practice={principles[1].practice}
            />

            {/* -------------------------------------------------------
                CARD 3
            ------------------------------------------------------- */}

            <PrincipleCard
              index={2}
              title={principles[2].title}
              description={principles[2].description}
              practice={principles[2].practice}
            />

            {/* -------------------------------------------------------
                IMAGE
            ------------------------------------------------------- */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.97,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                order-last
                min-h-[320px]
                overflow-hidden
                rounded-2xl
                border
                border-slate-900/10
                bg-white

                sm:col-span-2
                sm:min-h-[400px]

                lg:order-none
                lg:col-span-1
                lg:row-span-2
                lg:min-h-[462.6px]
              "
            >
              <Image
                src="/images/research/talvrin-methodology/image.png"
                alt="Talvrin methodology research"
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 320px"
                className="
                  object-cover
                  object-center
                "
              />
            </motion.div>

            {/* -------------------------------------------------------
                CARD 4
            ------------------------------------------------------- */}

            <PrincipleCard
              index={3}
              title={principles[3].title}
              description={principles[3].description}
              practice={principles[3].practice}
            />

            {/* -------------------------------------------------------
                CARD 5
            ------------------------------------------------------- */}

            <PrincipleCard
              index={4}
              title={principles[4].title}
              description={principles[4].description}
              practice={principles[4].practice}
            />

            {/* -------------------------------------------------------
                CARD 6
            ------------------------------------------------------- */}

            <PrincipleCard
              index={5}
              title={principles[5].title}
              description={principles[5].description}
              practice={principles[5].practice}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   PRINCIPLE CARD
=============================================================== */

function PrincipleCard({
  index,
  title,
  description,
  practice,
}: {
  index: number;
  title: string;
  description: string;
  practice: string;
}) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex
        min-h-[224px]
        w-full
        flex-col
        rounded-2xl
        border
        border-slate-900/10
        bg-white
        px-6
        py-6
        font-['IBM_Plex_Sans']
      "
    >
      {/* Title */}
      <h3
        className="
          text-[15px]
          font-bold
          leading-5
          text-slate-900

          sm:text-[16px]
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-[10px]
          text-[13px]
          font-normal
          leading-5
          text-gray-600

          sm:text-[14px]
        "
      >
        {description}
      </p>

      {/* Practice */}
      <div className="mt-auto pt-4">
        <p
          className="
            text-[11px]
            font-semibold
            leading-4
            text-indigo-500

            sm:text-[12px]
          "
        >
          <span className="font-bold">IN PRACTICE — </span>
          {practice}
        </p>
      </div>
    </motion.article>
  );
}