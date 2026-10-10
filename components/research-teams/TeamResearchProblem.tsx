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

type Problem = {
  number: string;
  title: string;
  description: ReactNode;
  solution: ReactNode;
};

const problems: Problem[] = [
  {
    number: "01",
    title: "Duplicated source gathering",
    description: (
      <>
        Multiple analysts repeat the same discovery and verification work.
      </>
    ),
    solution: (
      <>
        Preserve source-linked evidence around a research object.
      </>
    ),
  },
  {
    number: "02",
    title: "Inconsistent evidence sets",
    description: (
      <>
        Different people may reason from different source versions or context.
      </>
    ),
    solution: (
      <>
        Make source identity, date, period, jurisdiction, and version visible.
      </>
    ),
  },
  {
    number: "03",
    title: "Weak institutional memory",
    description: (
      <>
        Reasoning can disappear when people change roles or documents are lost.
      </>
    ),
    solution: (
      <>
        Preserve the research view and evidence relationship over time.
      </>
    ),
  },
  {
    number: "04",
    title: "Review friction",
    description: (
      <>
        Reviewers must reconstruct why a conclusion was reached.
      </>
    ),
    solution: (
      <>
        Provide a navigable source trail and explicit interpretation layers.
      </>
    ),
  },
];

/* =========================================================
   PROBLEM CARD
========================================================= */

type ProblemCardProps = {
  problem: Problem;
  index: number;
};

function ProblemCard({
  problem,
  index,
}: ProblemCardProps) {
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
      className="flex min-h-[236px] w-full min-w-0 flex-col rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-6 lg:p-5 xl:p-6"
    >
      {/* NUMBER */}

      <span className="font-['IBM_Plex_Sans'] text-sm font-bold tracking-wide text-indigo-500/40">
        {problem.number}
      </span>

      {/* TITLE */}

      <h3 className="break-words pt-2 font-['IBM_Plex_Sans'] text-base font-bold leading-6 text-slate-900">
        {problem.title}
      </h3>

      {/* DESCRIPTION */}

      <p className="pb-4 pt-1 font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600">
        {problem.description}
      </p>

      {/* SOLUTION */}

      <div className="mt-auto flex min-w-0 items-start gap-2 border-t-[0.8px] border-slate-900/10 pt-3.5">
        <span
          aria-hidden="true"
          className="shrink-0 font-['IBM_Plex_Sans'] text-sm leading-5 text-amber-600"
        >
          →
        </span>

        <p className="min-w-0 flex-1 break-words font-['IBM_Plex_Sans'] text-xs font-medium leading-5 text-slate-900 sm:text-sm">
          {problem.solution}
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
    <section className="relative w-full overflow-hidden bg-violet-50">
      {/* MAIN CONTAINER */}

      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 min-[480px]:px-5 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-20 xl:py-[96px]">
        {/* HEADER */}

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
          className="w-full max-w-[780px]"
        >
          {/* EYEBROW */}

          <motion.p
            variants={fadeUp}
            className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500 sm:text-sm"
          >
            THE TEAM RESEARCH PROBLEM
          </motion.p>

          {/* HEADING */}

          <motion.h2
            variants={fadeUp}
            className="mt-5 w-full max-w-[780px] font-['IBM_Plex_Sans'] text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900 sm:mt-6"
          >
            Fragmented individual research doesn&apos;t scale into a team
            capability.
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            variants={fadeUp}
            className="mt-4 w-full max-w-[780px] font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600 sm:mt-5 sm:text-base sm:leading-7"
          >
            Duplicated work, inconsistent evidence, weak institutional memory,
            review friction, and manual rechecking — five costs of research
            that never became a shared, reusable object.
          </motion.p>
        </motion.div>

        {/* CONTENT GRID */}

        <div className="mt-8 grid w-full grid-cols-1 items-start gap-6 sm:mt-10 sm:gap-7 lg:mt-[57px] lg:grid-cols-2 lg:gap-6 xl:gap-8">
          {/* LEFT — FOUR PROBLEM CARDS */}

          <div className="grid w-full min-w-0 grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:gap-[14px]">
            {problems.map((problem, index) => (
              <ProblemCard
                key={problem.number}
                problem={problem}
                index={index}
              />
            ))}
          </div>

          {/* RIGHT — IMAGE */}

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
            className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-2xl border border-slate-900/10 bg-white sm:aspect-[5/4] lg:aspect-auto lg:h-[494px]"
          >
            <Image
              src="/images/solutions/research-teams/image.png"
              alt="Research team collaboration"
              fill
              priority
              sizes="(max-width: 479px) calc(100vw - 32px), (max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 50vw, 630px"
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}