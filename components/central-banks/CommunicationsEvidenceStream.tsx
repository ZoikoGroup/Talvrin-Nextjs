"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

type EvidenceCardProps = {
  index: number;
  title: React.ReactNode;
  description: React.ReactNode;
};

const cards = [
  {
    title: (
      <>
        Decision / Policy
        <br />
        Statement
      </>
    ),
    description: (
      <>
        Primary official evidence;
        <br />
        highest source prominence.
      </>
    ),
  },
  {
    title: <>Minutes / Account</>,
    description: (
      <>
        Linked to the relevant meeting
        <br />
        or decision where identity is
        <br />
        clear.
      </>
    ),
  },
  {
    title: (
      <>
        Press Conference /
        <br />
        Transcript
      </>
    ),
    description: (
      <>
        Uses the official source or a
        <br />
        permitted transcript,
        <br />
        distinguished from any Talvrin
        <br />
        summary.
      </>
    ),
  },
  {
    title: <>Speech / Testimony</>,
    description: (
      <>
        Displays speaker, role, title,
        <br />
        date/time, venue and official
        <br />
        source where available.
      </>
    ),
  },
  {
    title: <>Schedule Notice</>,
    description: (
      <>
        Treated as operational
        <br />
        evidence, not a policy
        <br />
        conclusion.
      </>
    ),
  },
  {
    title: (
      <>
        Correction / Revised
        <br />
        Document
      </>
    ),
    description: (
      <>
        Preserves the prior version
        <br />
        relationship when the source
        <br />
        identifies a correction or
        <br />
        supersession.
      </>
    ),
  },
  {
    title: <>Third-Party Commentary</>,
    description: (
      <>
        Never mixed into the official
        <br />
        evidence stream unless clearly
        <br />
        separated and governed as
        <br />
        analysis.
      </>
    ),
  },
  {
    title: <>Policy Report / Projections</>,
    description: (
      <>
        Linked as a separate evidence
        <br />
        object with reference period
        <br />
        and publication timing exposed.
      </>
    ),
  },
];

function EvidenceCard({
  index,
  title,
  description,
}: EvidenceCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.05,
            ease,
          },
        },
      }}
      className="
        flex
        min-h-[192px]
        h-full
        w-full
        flex-col
        rounded-2xl
        bg-white
        p-5
        outline
        outline-1
        outline-offset-[-1px]
        outline-slate-900/10
      "
    >
      <div
        className="
          self-stretch
          font-['IBM_Plex_Sans']
          text-base
          font-bold
          leading-[19px]
          text-slate-900
        "
      >
        {title}
      </div>

      <div
        className="
          mt-2.5
          self-stretch
          font-['IBM_Plex_Sans']
          text-sm
          font-normal
          leading-5
          text-gray-600
        "
      >
        {description}
      </div>
    </motion.div>
  );
}

export default function CommunicationsEvidenceStream() {
  return (
    <section className="w-full bg-violet-50">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-[96px] xl:px-[80px]">
        <div className="mx-auto w-full max-w-[1280px]">
          {/* =====================================================
              EYEBROW
          ====================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              uppercase
              tracking-wide
              text-indigo-500
            "
          >
            COMMUNICATIONS &amp; EVIDENCE STREAM
          </motion.div>

          {/* =====================================================
              HEADING
          ====================================================== */}

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              mt-3
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-[30px]
              font-bold
              leading-[1.1]
              tracking-[-0.02em]
              text-slate-900
              sm:text-[38px]
              md:text-[44px]
              lg:text-5xl
              lg:leading-[48.72px]
            "
          >
            Official documents before
            <br />
            interpretation.
          </motion.h2>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              mt-5
              max-w-[1000px]
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-7
              text-gray-600
            "
          >
            Central-bank research extends beyond a single decision. The
            stream preserves a chronological, source-governed evidence
            record rather than collapsing every item into undifferentiated
            &quot;news.&quot;
          </motion.p>

          {/* =====================================================
              RESPONSIVE GRID
          ====================================================== */}

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-[repeat(4,minmax(0,1fr))_240px]
              xl:grid-rows-[minmax(192px,auto)_minmax(192px,auto)]
              xl:gap-x-5
              xl:gap-y-[13px]
            "
          >
            {/* =================================================
                FIRST ROW
            ================================================== */}

            <EvidenceCard
              index={0}
              title={cards[0].title}
              description={cards[0].description}
            />

            <EvidenceCard
              index={1}
              title={cards[1].title}
              description={cards[1].description}
            />

            <EvidenceCard
              index={2}
              title={cards[2].title}
              description={cards[2].description}
            />

            <EvidenceCard
              index={3}
              title={cards[3].title}
              description={cards[3].description}
            />

            {/* =================================================
                SECOND ROW
            ================================================== */}

            <EvidenceCard
              index={4}
              title={cards[4].title}
              description={cards[4].description}
            />

            <EvidenceCard
              index={5}
              title={cards[5].title}
              description={cards[5].description}
            />

            <EvidenceCard
              index={6}
              title={cards[6].title}
              description={cards[6].description}
            />

            <EvidenceCard
              index={7}
              title={cards[7].title}
              description={cards[7].description}
            />

            {/* =================================================
                IMAGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className="
                relative
                hidden
                min-h-[192px]
                w-full
                overflow-hidden
                rounded-2xl
                bg-white
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/10
                lg:block
                xl:col-start-5
                xl:row-start-1
                xl:row-span-2
                xl:h-full
                xl:min-h-[397px]
                xl:w-[240px]
              "
            >
              <Image
                src="/images/markets/central-banks/image3.png"
                alt="Central bank communications and evidence"
                fill
                sizes="(max-width: 1279px) 33vw, 240px"
                priority={false}
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