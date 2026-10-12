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

const solutions = [
  {
    title: "Investment Professionals",
    description:
      "Source-linked research and monitoring built for individual professional workflows.",
  },
  {
    title: "Asset Managers",
    description:
      "Research infrastructure across asset-management investment workflows.",
  },
  {
    title: "Financial Institutions",
    description:
      "Governed evidence and research capabilities for institutions.",
  },
];

/* =========================================================
   SOLUTION CARD
========================================================= */

type SolutionCardProps = {
  title: string;
  description: ReactNode;
  index: number;
};

function SolutionCard({
  title,
  description,
  index,
}: SolutionCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={fadeUp}
      transition={{
        delay: index * 0.08,
      }}
      className="flex h-full min-w-0 flex-col items-start rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-6 lg:p-5 xl:p-6"
    >
      <h3 className="w-full break-words font-['IBM_Plex_Sans'] text-base font-bold leading-6 text-slate-900 sm:text-lg">
        {title}
      </h3>

      <p className="mt-2 w-full break-words font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-gray-600 sm:text-base">
        {description}
      </p>

      <a
        href="#"
        className="mt-5 inline-flex items-center font-['IBM_Plex_Sans'] text-sm font-semibold leading-5 text-indigo-500 transition-opacity duration-200 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500"
      >
        Learn more{" "}
        <span className="ml-1" aria-hidden="true">
          →
        </span>
      </a>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AdjacentSolutions() {
  return (
    <section className="relative w-full overflow-hidden bg-violet-50">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-14 min-[480px]:px-5 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-20">
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
            className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500 sm:text-sm"
          >
            ADJACENT SOLUTIONS
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
            className="mt-4 w-full max-w-[1000px] break-words font-['IBM_Plex_Sans'] text-[clamp(1.75rem,3.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900"
          >
            Need organization or institution scale? Find the right fit.
          </motion.h2>

          {/* SOLUTIONS GRID */}

          <div className="mt-8 grid w-full grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:mt-[35px]">
            {/* INVESTMENT PROFESSIONALS */}

            <SolutionCard
              title={solutions[0].title}
              description={solutions[0].description}
              index={0}
            />

            {/* ASSET MANAGERS */}

            <SolutionCard
              title={solutions[1].title}
              description={solutions[1].description}
              index={1}
            />

            {/* FINANCIAL INSTITUTIONS */}

            <SolutionCard
              title={solutions[2].title}
              description={solutions[2].description}
              index={2}
            />

            {/* IMAGE */}

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
                duration: 0.8,
                ease: smoothEase,
              }}
              className="relative aspect-[5/3] w-full min-w-0 overflow-hidden rounded-2xl border border-slate-900/10 bg-white min-[520px]:aspect-[4/3] lg:aspect-auto lg:min-h-[192px] lg:h-full lg:self-stretch"
            >
              <Image
                src="/images/solutions/research-teams/image7.png"
                alt="Research professionals collaborating"
                fill
                priority
                sizes="(max-width: 519px) calc(100vw - 32px), (max-width: 1023px) calc((100vw - 64px) / 2), (max-width: 1279px) calc((100vw - 112px) / 4), (max-width: 1439px) calc((100vw - 160px) / 4), 302px"
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}