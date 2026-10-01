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

const collaborationCards = [
  {
    title: "Shared evidence",

    positive: <>Give teams a shared evidence base.</>,

    negative: (
      <>
        Shared folders, permissions, access-
        <br />
        control inheritance, workspace sync
        <br />
        guarantees.
      </>
    ),
  },

  {
    title: "Better collaboration",

    positive: (
      <>
        Reduce parallel collections of tabs
        <br />
        and files.
      </>
    ),

    negative: (
      <>
        Real-time co-editing, comments,
        <br />
        mentions, presence indicators.
      </>
    ),
  },

  {
    title: "Scalable workflows",

    positive: (
      <>
        Create repeatable research
        <br />
        processes.
      </>
    ),

    negative: (
      <>
        Workflow automation builder, task
        <br />
        queues, SLAs, or templates.
      </>
    ),
  },

  {
    title: "Reviewability",

    positive: (
      <>
        Make it easier to inspect the basis of
        <br />
        a view.
      </>
    ),

    negative: (
      <>
        Approval/rejection states, reviewer
        <br />
        assignment, sign-off.
      </>
    ),
  },
];

/* =========================================================
   CARD
========================================================= */

type CollaborationCardProps = {
  title: string;
  positive: React.ReactNode;
  negative: React.ReactNode;
  index: number;
};

function CollaborationCard({
  title,
  positive,
  negative,
  index,
}: CollaborationCardProps) {
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
        w-full
        min-h-[192px]
        lg:h-[192px]
        p-6
        bg-violet-50
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
          self-stretch
          flex
          flex-col
          justify-start
          items-start
        "
      >
        <h3
          className="
            self-stretch
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
          self-stretch
          pt-0.5
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

export default function CollaborationBoundary() {
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
          MAIN CONTAINER
      =================================================== */}

      <div
        className="
          relative
          w-full
          max-w-[1440px]
          min-h-[829.41px]
          mx-auto
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
            lg:top-[95.9px]
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
              text-yellow-600
              text-xs
              font-bold
              font-['IBM_Plex_Sans']
              tracking-wide
            "
          >
            COLLABORATION BOUNDARY
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
              mt-[16.3px]
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
              Collaboration as an outcome — not a
              <br className="hidden lg:block" />
              chat app or project board.
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
              amount: 0.25,
            }}
            variants={fadeUp}
            className="
              w-full
              max-w-[800px]
              pt-2
              mt-[17.4px]
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
              Talvrin is designed as evidence-led research infrastructure.
              Every outcome below has safe, source-
              <br className="hidden lg:block" />
              backed wording — and a boundary we do not cross without separate
              approval.
            </p>
          </motion.div>

          {/* =================================================
              CONTENT GRID
          ================================================= */}

          <div
            className="
              mt-10
              lg:mt-[68.61px]
              grid
              grid-cols-1
              lg:grid-cols-[630px_630px]
              gap-5
            "
          >
            {/* ===============================================
                LEFT — CARDS
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
              {collaborationCards.map((card, index) => (
                <CollaborationCard
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
                lg:w-[630px]
                lg:h-[384px]
                bg-violet-50
                rounded-2xl
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/10
                overflow-hidden
              "
            >
              <Image
                src="/images/solutions/research-teams/image5.png"
                alt="Collaboration boundary"
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
        </div>
      </div>
    </section>
  );
}