"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const researchModules = [
  {
    title: "Market Intelligence",
    description: (
      <>
        Curated, current editorial
        <br className="hidden lg:block" />
        presentation of TALVRIN
        <br className="hidden lg:block" />
        research.
      </>
    ),
    index: 0,
  },
  {
    title: "Economic Calendar",
    description: (
      <>
        Upcoming and released
        <br className="hidden lg:block" />
        economic events with source
        <br className="hidden lg:block" />
        context.
      </>
    ),
    index: 1,
  },
  {
    title: "Central Banks",
    description: (
      <>
        Research on central-bank
        <br className="hidden lg:block" />
        communications, decisions,
        <br className="hidden lg:block" />
        and policy context.
      </>
    ),
    index: 2,
  },
  {
    title: "Talvrin Methodology",
    description: (
      <>
        Stable explanation of Talvrin&apos;s
        <br className="hidden lg:block" />
        evidence and research
        <br className="hidden lg:block" />
        methods.
      </>
    ),
    index: 3,
  },
  {
    title: "Policy & Regulation",
    description: (
      <>
        Research on policy and
        <br className="hidden lg:block" />
        regulatory evidence and
        <br className="hidden lg:block" />
        market implications.
      </>
    ),
    index: 4,
  },
  {
    title: "Market Explainers",
    description: (
      <>
        Clear, source-grounded
        <br className="hidden lg:block" />
        explanations of market
        <br className="hidden lg:block" />
        concepts.
      </>
    ),
    index: 5,
  },
];

export default function AdjacentResearchModules() {
  return (
    <section className="w-full overflow-hidden bg-slate-900">
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          py-20
          sm:px-7
          sm:py-24
          lg:px-0
          lg:py-[96px]
        "
      >
        {/* ============================================================
            HEADER
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full"
        >
          {/* EYEBROW */}

          <div className="w-full">
            <span
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                leading-4
                tracking-[0.08em]
                text-indigo-500
              "
            >
              Adjacent Research Modules
            </span>
          </div>

          {/* HEADING */}

          <div className="w-full pt-3">
            <h2
              className="
                font-['IBM_Plex_Sans']
                text-[38px]
                font-bold
                leading-[1.08]
                tracking-[-0.025em]
                text-violet-50
                sm:text-[44px]
                sm:leading-[48.3px]
                lg:text-5xl
              "
            >
              The library indexes. These destinations go deeper.
            </h2>
          </div>

          {/* DESCRIPTION */}

          <div className="w-full max-w-[780px] pt-2">
            <p
              className="
                font-['IBM_Plex_Sans']
                text-base
                font-normal
                leading-7
                text-violet-50/70
              "
            >
              Each destination links out only once its own module is live —
              never a dead or placeholder route.
            </p>
          </div>
        </motion.div>

        {/* ============================================================
            MAIN CONTENT
        ============================================================ */}

        <div
          className="
            mt-10
            grid
            w-full
            grid-cols-1
            gap-5
            lg:grid-cols-[minmax(0,3fr)_497.6px]
            lg:grid-rows-[182px_182px]
            lg:gap-5
          "
        >
          {/* ==========================================================
              MODULE CARDS
          ========================================================== */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:col-span-1
              lg:grid-cols-3
              lg:gap-5
            "
          >
            {researchModules.map((module) => (
              <ResearchModuleCard
                key={module.title}
                title={module.title}
                description={module.description}
                index={module.index}
              />
            ))}
          </div>

          {/* ==========================================================
              IMAGE
          ========================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              h-[360px]
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-violet-50/10
              bg-violet-50/5
              sm:h-[397px]
              lg:col-start-2
              lg:row-span-2
              lg:h-[384px]
            "
          >
            <Image
              src="/images/research/research-library/image5.png"
              alt="TALVRIN research collaboration"
              fill
              priority
              sizes="497.6px"
              className="
                object-cover
                object-center
                transition-transform
                duration-700
                ease-out
                hover:scale-[1.03]
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   RESEARCH MODULE CARD
================================================================== */

type ResearchModuleCardProps = {
  title: string;
  description: React.ReactNode;
  index: number;
};

function ResearchModuleCard({
  title,
  description,
  index,
}: ResearchModuleCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        flex
        min-h-[182px]
        w-full
        flex-col
        items-start
        rounded-2xl
        border
        border-violet-50/10
        bg-violet-50/5
        px-6
        pt-6
        pb-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-violet-50/20
        hover:bg-violet-50/[0.07]
      "
    >
      {/* ==========================================================
          TITLE
      ========================================================== */}

      <div className="w-full">
        <h3
          className="
            font-['IBM_Plex_Sans']
            text-base
            font-bold
            leading-6
            text-violet-50
          "
        >
          {title}
        </h3>
      </div>

      {/* ==========================================================
          DESCRIPTION
      ========================================================== */}

      <div className="w-full flex-1 pb-2 pt-1">
        <p
          className="
            font-['IBM_Plex_Sans']
            text-sm
            font-normal
            leading-5
            text-violet-50/70
          "
        >
          {description}
        </p>
      </div>

      {/* ==========================================================
          LINK
      ========================================================== */}

      <div className="pt-1">
        <span
          className="
            font-['IBM_Plex_Sans']
            text-xs
            font-semibold
            text-indigo-300
            transition-colors
            duration-200
            group-hover:text-indigo-200
          "
        >
          Learn more →
        </span>
      </div>
    </motion.article>
  );
}