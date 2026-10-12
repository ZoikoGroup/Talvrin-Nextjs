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

const collaborationCards = [
  {
    title: "Shared evidence",
    positive: "Give teams a shared evidence base.",
    negative:
      "Shared folders, permissions, access-control inheritance, workspace sync guarantees.",
  },
  {
    title: "Better collaboration",
    positive: "Reduce parallel collections of tabs and files.",
    negative:
      "Real-time co-editing, comments, mentions, presence indicators.",
  },
  {
    title: "Scalable workflows",
    positive: "Create repeatable research processes.",
    negative:
      "Workflow automation builder, task queues, SLAs, or templates.",
  },
  {
    title: "Reviewability",
    positive: "Make it easier to inspect the basis of a view.",
    negative:
      "Approval/rejection states, reviewer assignment, sign-off.",
  },
];

/* =========================================================
   CARD
========================================================= */

type CollaborationCardProps = {
  title: string;
  positive: ReactNode;
  negative: ReactNode;
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
        amount: 0.1,
      }}
      variants={fadeUp}
      transition={{
        delay: index * 0.08,
      }}
      className="
        flex h-full min-w-0 flex-col items-start
        gap-3 rounded-2xl border border-slate-900/10
        bg-violet-50 p-5 sm:p-6 lg:p-5
      "
    >
      {/* TITLE */}

      <h3
        className="
          w-full break-words
          font-['IBM_Plex_Sans']
          text-base font-bold leading-6 text-slate-900
        "
      >
        {title}
      </h3>

      {/* POSITIVE */}

      <div className="flex w-full min-w-0 items-start gap-2.5">
        <span
          aria-hidden="true"
          className="shrink-0 pt-0.5 font-['Segoe_UI_Symbol'] text-sm text-indigo-500"
        >
          ✓
        </span>

        <p className="min-w-0 flex-1 break-words font-['IBM_Plex_Sans'] text-sm leading-5 text-slate-700">
          {positive}
        </p>
      </div>

      {/* NEGATIVE */}

      <div className="flex w-full min-w-0 items-start gap-2.5">
        <span
          aria-hidden="true"
          className="shrink-0 pt-0.5 font-['Segoe_UI_Symbol'] text-sm text-pink-800"
        >
          ✕
        </span>

        <p className="min-w-0 flex-1 break-words font-['IBM_Plex_Sans'] text-sm leading-5 text-gray-600">
          {negative}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function CollaborationBoundary() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto w-full max-w-[1440px]
          px-4 py-12
          min-[480px]:px-5
          sm:py-16
          md:px-8 md:py-20
          lg:px-12
          xl:px-20 xl:py-24
        "
      >
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
            className="
              font-['IBM_Plex_Sans']
              text-xs font-bold tracking-wide text-yellow-600
              sm:text-sm
            "
          >
            COLLABORATION BOUNDARY
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
            className="
              mt-4 w-full max-w-[1000px]
              break-words
              font-['IBM_Plex_Sans']
              text-[clamp(1.8rem,3.5vw,3rem)]
              font-bold leading-[1.1]
              tracking-[-0.02em] text-slate-900
            "
          >
            Collaboration as an outcome — not a chat app or project board.
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              mt-4 w-full max-w-[800px]
              font-['IBM_Plex_Sans']
              text-sm font-normal leading-6 text-gray-600
              sm:text-base sm:leading-7
            "
          >
            Talvrin is designed as evidence-led research infrastructure.
            Every outcome below has safe, source-backed wording — and a
            boundary we do not cross without separate approval.
          </motion.p>

          {/* CARDS AND IMAGE */}

          <div
            className="
              mt-8 grid w-full
              grid-cols-1 items-stretch gap-4
              min-[520px]:grid-cols-2
              lg:mt-12
              xl:grid-cols-2 xl:gap-5
              2xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
            "
          >
            {/* LEFT — CARDS */}

            <div
              className="
                grid min-w-0 grid-cols-1
                gap-4
                sm:grid-cols-2
                lg:gap-4
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                ease: smoothEase,
              }}
              className="
                relative min-w-0 w-full
                aspect-[4/3] overflow-hidden
                rounded-2xl border border-slate-900/10
                bg-violet-50
                sm:aspect-[5/3]
                lg:aspect-[4/3]
                xl:aspect-auto xl:min-h-full
              "
            >
              <Image
                src="/images/solutions/research-teams/image5.png"
                alt="Collaboration boundary"
                fill
                priority
                sizes="(max-width: 519px) calc(100vw - 32px), (max-width: 1023px) calc((100vw - 64px) / 2), (max-width: 1439px) calc((100vw - 112px) / 2), 630px"
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}