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

const assistanceCards = [
  {
    title: (
      <>
        Discovery — reduce duplicated
        <br />
        source hunting
      </>
    ),
    negative: <>An authoritative source</>,
  },

  {
    title: (
      <>
        Organization around the shared
        <br />
        research question
      </>
    ),
    negative: <>A hidden transformation layer</>,
  },

  {
    title: (
      <>
        Comparison across documents
        <br />
        and versions
      </>
    ),
    negative: <>An unreviewable conclusion</>,
  },

  {
    title: (
      <>
        Change identification worth
        <br />
        review
      </>
    ),
    negative: (
      <>
        An automatic materiality or priority
        <br />
        oracle
      </>
    ),
  },

  {
    title: (
      <>
        Relationship explanation — how
        <br />
        evidence supports or challenges a
        <br />
        view
      </>
    ),
    negative: (
      <>
        Investment advice, approval authority,
        <br />
        or team decision-maker
      </>
    ),
  },

  {
    title: (
      <>
        Summarization to help teammates
        <br />
        understand evidence faster
      </>
    ),
    negative: <>A replacement for source inspection</>,
  },
];

/* =========================================================
   CARD
========================================================= */

type AssistanceCardProps = {
  title: React.ReactNode;
  negative: React.ReactNode;
  index: number;
};

function AssistanceCard({
  title,
  negative,
  index,
}: AssistanceCardProps) {
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
        delay: index * 0.06,
      }}
      className="
        w-full
        h-[140px]
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
        gap-3.5
        overflow-hidden
      "
    >
      {/* ===================================================
          POSITIVE
      =================================================== */}

      <div
        className="
          self-stretch
          flex
          justify-start
          items-start
          gap-2.5
        "
      >
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

        <div
          className="
            min-w-0
            flex-1
            flex
            flex-col
            justify-start
            items-start
          "
        >
          <p
            className="
              text-slate-900
              text-sm
              font-semibold
              font-['IBM_Plex_Sans']
              leading-5
            "
          >
            {title}
          </p>
        </div>
      </div>

      {/* ===================================================
          NEGATIVE
      =================================================== */}

      <div
        className="
          self-stretch
          flex
          justify-start
          items-start
          gap-2.5
        "
      >
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
              text-xs
              font-normal
              font-['IBM_Plex_Sans']
              leading-4
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

export default function AIAssistanceResearchTeams() {
  return (
    <section
      className="
        relative
        w-full
        bg-violet-50
        overflow-hidden
      "
    >
      {/* ===================================================
          MAIN SECTION
      =================================================== */}

      <div
        className="
          relative
          w-full
          max-w-[1440px]
          min-h-[822.3px]
          mx-auto
          px-6
          sm:px-8
          lg:px-0
          py-20
          lg:py-0
        "
      >
        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          className="
            w-full
            lg:w-[1280px]
            lg:left-[80px]
            lg:top-[96.49px]
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
              amount: 0.25,
            }}
            variants={fadeUp}
            className="
              w-full
              text-indigo-500
              text-xs
              font-bold
              font-['IBM_Plex_Sans']
              tracking-wide
            "
          >
            AI ASSISTANCE FOR RESEARCH TEAMS
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
              max-w-[1000px]
              mt-[16.4px]
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
              AI helps the team move faster. It does
              <br className="hidden lg:block" />
              not become team consensus.
            </h2>
          </motion.div>

          {/* =================================================
              CARDS + IMAGE

              DESKTOP:
              320 + 320 + 320 + 320
              ROW 1 = 140px
              GAP    = 12px
              ROW 2 = 140px
              
              IMAGE = 292px
              So image exactly matches both rows.
          ================================================= */}

          <div
            className="
              mt-10
              lg:mt-[18px]

              grid
              grid-cols-1
              sm:grid-cols-2

              lg:grid-cols-[320px_320px_320px_320px]
              lg:grid-rows-[140px_140px]

              gap-3
            "
          >
            {/* =================================================
                CARD 1
            ================================================= */}

            <AssistanceCard
              title={assistanceCards[0].title}
              negative={assistanceCards[0].negative}
              index={0}
            />

            {/* =================================================
                CARD 2
            ================================================= */}

            <AssistanceCard
              title={assistanceCards[1].title}
              negative={assistanceCards[1].negative}
              index={1}
            />

            {/* =================================================
                CARD 3
            ================================================= */}

            <AssistanceCard
              title={assistanceCards[2].title}
              negative={assistanceCards[2].negative}
              index={2}
            />

            {/* =================================================
                IMAGE
            ================================================= */}

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
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: smoothEase,
              }}
              className="
                relative

                w-full
                h-[292px]

                lg:w-[320px]
                lg:h-[292px]

                lg:col-start-4
                lg:row-start-1
                lg:row-span-2

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
                src="/images/solutions/research-teams/image6.png"
                alt="AI assistance for research teams"
                fill
                priority
                sizes="320px"
                className="
                  object-cover
                  object-center
                "
              />
            </motion.div>

            {/* =================================================
                CARD 4
            ================================================= */}

            <AssistanceCard
              title={assistanceCards[3].title}
              negative={assistanceCards[3].negative}
              index={3}
            />

            {/* =================================================
                CARD 5
            ================================================= */}

            <AssistanceCard
              title={assistanceCards[4].title}
              negative={assistanceCards[4].negative}
              index={4}
            />

            {/* =================================================
                CARD 6
            ================================================= */}

            <AssistanceCard
              title={assistanceCards[5].title}
              negative={assistanceCards[5].negative}
              index={5}
            />
          </div>

          {/* =================================================
              AI TEAM RULE BOX
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

              mt-4

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
            {/* =================================================
                LABEL
            ================================================= */}

            <div
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
                AI TEAM RULE
              </div>
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <div
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
                  text-violet-50/80
                  text-sm
                  font-normal
                  font-['IBM_Plex_Sans']
                  leading-6
                "
              >
                Generated content stays visually distinct from authoritative
                evidence and preserves a navigable source path. If evidence is
                insufficient or contradictory, the interface says so rather
                than manufacturing
                <br className="hidden lg:block" />
                team consensus.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}