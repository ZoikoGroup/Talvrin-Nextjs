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
    y: 30,
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

const problems = [
  {
    number: "01",
    title: "Duplicated source gathering",

    description: (
      <>
        Multiple analysts repeat the same
        <br className="hidden md:block" />
        discovery and verification work.
      </>
    ),

    solution: (
      <>
        Preserve source-linked evidence
        <br className="hidden md:block" />
        around a research object.
      </>
    ),
  },

  {
    number: "02",
    title: "Inconsistent evidence sets",

    description: (
      <>
        Different people may reason from
        <br className="hidden md:block" />
        different source versions or context.
      </>
    ),

    solution: (
      <>
        Make source identity, date, period,
        <br className="hidden md:block" />
        jurisdiction, and version visible.
      </>
    ),
  },

  {
    number: "03",
    title: "Weak institutional memory",

    description: (
      <>
        Reasoning can disappear when people
        <br className="hidden md:block" />
        change roles or documents are lost.
      </>
    ),

    solution: (
      <>
        Preserve the research view and
        <br className="hidden md:block" />
        evidence relationship over time.
      </>
    ),
  },

  {
    number: "04",
    title: "Review friction",

    description: (
      <>
        Reviewers must reconstruct why a
        <br className="hidden md:block" />
        conclusion was reached.
      </>
    ),

    solution: (
      <>
        Provide a navigable source trail and
        <br className="hidden md:block" />
        explicit interpretation layers.
      </>
    ),
  },
];

/* =========================================================
   PROBLEM CARD
========================================================= */

type ProblemCardProps = {
  number: string;
  title: string;
  description: ReactNode;
  solution: ReactNode;
  index: number;
};

function ProblemCard({
  number,
  title,
  description,
  solution,
  index,
}: ProblemCardProps) {
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
        min-h-[236px]
        bg-white
        rounded-2xl
        border
        border-slate-900/10
        p-7
        flex
        flex-col
      "
    >
      {/* NUMBER */}

      <div
        className="
          self-stretch
          text-indigo-500/40
          text-sm
          font-bold
          font-['IBM_Plex_Sans']
          tracking-wide
        "
      >
        {number}
      </div>

      {/* TITLE */}

      <div className="pt-2">
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

      {/* DESCRIPTION */}

      <div className="pt-1 pb-1.5">
        <p
          className="
            self-stretch
            text-gray-600
            text-sm
            font-normal
            font-['IBM_Plex_Sans']
            leading-6
          "
        >
          {description}
        </p>
      </div>

      {/* SOLUTION */}

      <div
        className="
          mt-auto
          pt-3.5
          border-t-[0.8px]
          border-slate-900/10
          flex
          items-start
          gap-2
        "
      >
        {/* YELLOW INDICATOR */}

        <div
          className="
            w-3
            h-1
            mt-[7px]
            shrink-0
            bg-yellow-600
          "
        />

        {/* SOLUTION TEXT */}

        <p
          className="
            text-slate-900
            text-xs
            font-medium
            font-['IBM_Plex_Sans']
            leading-5
          "
        >
          {solution}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TeamResearchProblem() {
  return (
    <section
      className="
        relative
        w-full
        bg-violet-50
        overflow-hidden
      "
    >
      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          w-full
          max-w-[1440px]
          mx-auto
          px-6
          sm:px-8
          lg:px-[80px]
          py-[72px]
          lg:py-[96.1px]
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="
            w-full
            max-w-[780px]
          "
        >
          {/* EYEBROW */}

          <motion.div
            variants={fadeUp}
            className="
              text-indigo-500
              text-xs
              font-bold
              font-['IBM_Plex_Sans']
              tracking-wide
            "
          >
            THE TEAM RESEARCH PROBLEM
          </motion.div>

          {/* HEADING */}

          <motion.h2
            variants={fadeUp}
            className="
              mt-[22px]
              max-w-[780px]
              text-slate-900
              text-[32px]
              sm:text-[40px]
              lg:text-5xl
              font-bold
              font-['IBM_Plex_Sans']
              leading-[1.08]
              lg:leading-[48.72px]
              tracking-[-0.02em]
            "
          >
            Fragmented individual research
            <br className="hidden lg:block" />
            doesn&apos;t scale into a team capability.
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            variants={fadeUp}
            className="
              mt-5
              max-w-[780px]
              text-gray-600
              text-sm
              sm:text-base
              font-normal
              font-['IBM_Plex_Sans']
              leading-6
              lg:leading-7
            "
          >
            Duplicated work, inconsistent evidence, weak institutional memory,
            review friction, and manual
            <br className="hidden lg:block" />
            rechecking — five costs of research that never became a shared,
            reusable object.
          </motion.p>
        </motion.div>

        {/* ===================================================
            CONTENT GRID

            DESKTOP:
            630px LEFT
            630px RIGHT
            20px GAP
            TOTAL = 1280px
        =================================================== */}

        <div
          className="
            mt-[60px]
            lg:mt-[57px]
            grid
            grid-cols-1
            lg:grid-cols-[630px_630px]
            gap-5
          "
        >
          {/* =================================================
              LEFT — FOUR PROBLEM CARDS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
              lg:gap-[14px]
            "
          >
            {problems.map((problem, index) => (
              <ProblemCard
                key={problem.number}
                number={problem.number}
                title={problem.title}
                description={problem.description}
                solution={problem.solution}
                index={index}
              />
            ))}
          </div>

          {/* =================================================
              RIGHT — IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: smoothEase,
              delay: 0.15,
            }}
            className="
              relative
              w-full
              h-[420px]
              sm:h-[500px]
              lg:h-[494px]
              bg-white
              rounded-2xl
              border
              border-slate-900/10
              overflow-hidden
            "
          >
            <Image
              src="/images/solutions/research-teams/image.png"
              alt="Research team collaboration"
              fill
              priority
              sizes="630px"
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}