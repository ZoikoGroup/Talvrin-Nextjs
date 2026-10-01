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
        h-[192px]
        w-full
        flex-col
        rounded-2xl
        bg-white
        px-5
        pt-5
        pb-11
        outline
        outline-1
        outline-offset-[-1px]
        outline-slate-900/10

        sm:w-full

        lg:w-[240px]
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
      <div className="mx-auto w-full max-w-[1440px]">
        <div
          className="
            relative
            w-full
            px-6
            sm:px-8

            lg:h-[824.6px]
            lg:px-0
          "
        >
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[1280px]

              py-[64px]

              lg:h-[824.6px]
              lg:py-0
            "
          >
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

                lg:absolute
                lg:left-0
                lg:top-[96.03px]
                lg:w-[1280px]
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
                mt-5
                font-['IBM_Plex_Sans']
                text-[38px]
                font-bold
                leading-[1.08]
                tracking-[-0.02em]
                text-slate-900

                sm:text-5xl
                sm:leading-[48.72px]

                lg:absolute
                lg:left-0
                lg:top-[124.43px]
                lg:mt-0
                lg:w-[780px]
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
                max-w-[900px]
                font-['IBM_Plex_Sans']
                text-base
                font-normal
                leading-7
                text-gray-600

                lg:absolute
                lg:left-0
                lg:top-[242.43px]
                lg:mt-0
                lg:w-[1000px]
              "
            >
              Central-bank research extends beyond a single decision. The
              stream preserves a chronological, source-governed evidence
              record rather than collapsing every item into undifferentiated
              &quot;news.&quot;
            </motion.p>

            {/* =====================================================
                EXACT DESKTOP FIGMA GRID

                Content:
                1280px

                Columns:
                240px + 20px + 240px + 20px + 240px
                + 20px + 240px + 20px + 240px

                = 1280px

                Rows:
                192px
                13px gap
                192px
            ====================================================== */}

            <div
              className="
                mt-10

                grid
                grid-cols-1
                gap-4

                sm:grid-cols-2

                lg:absolute
                lg:left-0
                lg:top-[337.03px]
                lg:mt-0

                lg:h-[384px]
                lg:w-[1280px]

                lg:grid-cols-[240px_240px_240px_240px_240px]
                lg:grid-rows-[192px_192px]

                lg:gap-x-[20px]
                lg:gap-y-[13px]
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

                  Figma frame:
                  240px × 384px

                  IMPORTANT:
                  Do NOT use the previous 391px image with
                  left:-75px. That was causing the zoom.

                  The image now fills the actual 240×384 frame.
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

                  h-[384px]
                  w-[240px]

                  overflow-hidden
                  rounded-2xl

                  bg-white

                  outline
                  outline-1
                  outline-offset-[-1px]
                  outline-slate-900/10

                  lg:col-start-5
                  lg:row-start-1
                  lg:row-span-2
                  lg:block
                "
              >
                <Image
                  src="/images/markets/central-banks/image3.png"
                  alt="Central bank communications and evidence"
                  fill
                  sizes="240px"
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
      </div>
    </section>
  );
}