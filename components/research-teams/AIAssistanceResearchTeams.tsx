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
    title: "Discovery — reduce duplicated source hunting",
    negative: "An authoritative source",
  },
  {
    title: "Organization around the shared research question",
    negative: "A hidden transformation layer",
  },
  {
    title: "Comparison across documents and versions",
    negative: "An unreviewable conclusion",
  },
  {
    title: "Change identification worth review",
    negative: "An automatic materiality or priority oracle",
  },
  {
    title:
      "Relationship explanation — how evidence supports or challenges a view",
    negative:
      "Investment advice, approval authority, or team decision-maker",
  },
  {
    title: "Summarization to help teammates understand evidence faster",
    negative: "A replacement for source inspection",
  },
];

/* =========================================================
   CARD
========================================================= */

type AssistanceCardProps = {
  title: string;
  negative: string;
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
        amount: 0.1,
      }}
      variants={fadeUp}
      transition={{
        delay: index * 0.06,
      }}
      className="
        flex h-full min-w-0 flex-col items-start
        gap-3 rounded-2xl border border-slate-900/10
        bg-white p-5 sm:p-6 lg:p-5 xl:p-6
      "
    >
      {/* POSITIVE */}

      <div className="flex w-full min-w-0 items-start gap-2.5">
        <span
          aria-hidden="true"
          className="shrink-0 pt-0.5 font-['Segoe_UI_Symbol'] text-sm text-indigo-500"
        >
          ✓
        </span>

        <p className="min-w-0 flex-1 break-words font-['IBM_Plex_Sans'] text-sm font-semibold leading-5 text-slate-900">
          {title}
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

        <p className="min-w-0 flex-1 break-words font-['IBM_Plex_Sans'] text-xs font-normal leading-5 text-gray-600 sm:text-sm sm:leading-5">
          {negative}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AIAssistanceResearchTeams() {
  return (
    <section className="relative w-full overflow-hidden bg-violet-50">
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
            className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500 sm:text-sm"
          >
            AI ASSISTANCE FOR RESEARCH TEAMS
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
              font-['IBM_Plex_Sans'] font-bold
              text-[clamp(1.75rem,3.5vw,3rem)]
              leading-[1.1] tracking-[-0.02em]
              text-slate-900
            "
          >
            AI helps the team move faster. It does not become team consensus.
          </motion.h2>

          {/* CARDS AND IMAGE */}

          <div
            className="
              mt-8 grid w-full
              grid-cols-1 gap-4
              min-[520px]:grid-cols-2
              lg:grid-cols-3
              2xl:grid-cols-4
              lg:gap-4
            "
          >
            {assistanceCards.slice(0, 3).map((card, index) => (
              <AssistanceCard
                key={card.title}
                title={card.title}
                negative={card.negative}
                index={index}
              />
            ))}

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
              className="
                relative min-w-0 w-full
                aspect-[4/3] overflow-hidden
                rounded-2xl border border-slate-900/10
                bg-white
                min-[520px]:aspect-[5/3]
                lg:aspect-[4/3]
                2xl:aspect-auto 2xl:h-full
                2xl:min-h-[292px]
              "
            >
              <Image
                src="/images/solutions/research-teams/image6.png"
                alt="AI assistance for research teams"
                fill
                priority
                sizes="(max-width: 519px) calc(100vw - 32px), (max-width: 1023px) calc((100vw - 64px) / 2), (max-width: 1535px) calc((100vw - 112px) / 3), 302px"
                className="object-cover object-center"
              />
            </motion.div>

            {assistanceCards.slice(3).map((card, index) => (
              <AssistanceCard
                key={card.title}
                title={card.title}
                negative={card.negative}
                index={index + 3}
              />
            ))}
          </div>

          {/* AI TEAM RULE */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeUp}
            className="
              mt-5 flex w-full flex-col items-start
              gap-2 rounded-2xl bg-slate-900
              px-5 py-5 sm:px-6 sm:py-6
            "
          >
            <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600 sm:text-sm">
              AI TEAM RULE
            </p>

            <p className="w-full break-words font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-violet-50/80 sm:text-base">
              Generated content stays visually distinct from authoritative
              evidence and preserves a navigable source path. If evidence is
              insufficient or contradictory, the interface says so rather than
              manufacturing team consensus.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}