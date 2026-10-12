"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type AnatomyItem = {
  title: string;
  description: string;
};

const anatomyItems: AnatomyItem[] = [
  {
    title: "HEADLINE & ANSWER",
    description:
      "A direct, answer-first summary readers can understand before any background.",
  },
  {
    title: "METADATA",
    description:
      "Author/editor, published date, materially-updated date, category, and market/jurisdiction where relevant.",
  },
  {
    title: "EVIDENCE TRAIL",
    description:
      "Named sources, source class, timing/period, version, and rights/access state.",
  },
  {
    title: "WHAT CHALLENGES THE VIEW",
    description:
      "Contradictory or limiting evidence, stated where material.",
  },
  {
    title: "WHAT CHANGED",
    description:
      "Meaningful evidence or editorial change since the prior relevant state.",
  },
  {
    title: "SOURCES & RELATED RESEARCH",
    description:
      "Citations, related Talvrin research, and the research boundary note.",
  },
];

const flowSteps = [
  "HEADLINE & ANSWER",
  "METADATA",
  "EVIDENCE TRAIL",
  "WHAT'S HAPPENING",
  "WHY IT MAY MATTER",
  "WHAT CHALLENGES THE VIEW",
  "WHAT CHANGED",
  "SOURCES & RELATED RESEARCH",
];

function FlowStep({
  label,
  index,
}: {
  label: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      className="flex shrink-0 items-center"
    >
      <div
        className="
          rounded-full
          border
          border-violet-50/20
          bg-violet-50/5
          px-4
          py-2.5
          font-['IBM_Plex_Sans']
          text-xs
          font-semibold
          leading-none
          text-violet-50
          whitespace-nowrap
        "
      >
        {label}
      </div>

      {index < flowSteps.length - 1 && (
        <span
          aria-hidden="true"
          className="
            mx-3
            text-sm
            text-violet-50/30
          "
        >
          →
        </span>
      )}
    </motion.div>
  );
}

function AnatomyItem({
  item,
  index,
}: {
  item: AnatomyItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      className="
        flex
        flex-col
        gap-1.5
        font-['IBM_Plex_Sans']
      "
    >
      <p
        className="
          text-xs
          font-bold
          tracking-[0.07em]
          text-yellow-600
        "
      >
        {item.title}
      </p>

      <p
        className="
          text-sm
          font-normal
          leading-5
          text-violet-50/75
        "
      >
        {item.description}
      </p>
    </motion.div>
  );
}

export default function ArticleAnatomy() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [35, -25]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [25, -30]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-slate-900
      "
    >
      {/* =========================================================
          SUBTLE BACKGROUND GLOW
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 4%, rgba(99,102,241,0.10) 0%, rgba(99,102,241,0) 58%)",
        }}
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1320px]
          px-4
          py-14
          sm:px-6
          sm:py-16
          md:px-8
          lg:px-12
          lg:py-24
          xl:px-16
        "
      >
        <motion.div style={{ y: contentY }}>
          {/* =====================================================
              EYEBROW
          ====================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-[0.07em]
              text-indigo-500
            "
          >
            MARKET INTELLIGENCE ARTICLE ANATOMY
          </motion.p>

          {/* =====================================================
              MAIN HEADING
          ====================================================== */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              delay: 0.06,
              ease: "easeOut",
            }}
            className="
              mt-5
              max-w-[800px]
              font-['IBM_Plex_Sans']
              text-[28px]
              font-bold
              leading-[1.12]
              tracking-[-0.025em]
              text-violet-50
              sm:text-[36px]
              md:text-[42px]
              lg:text-5xl
              lg:leading-[48.72px]
            "
          >
            Answer → context → evidence →
            <br className="hidden sm:block" />
            analysis → uncertainty → change
            <br className="hidden sm:block" />
            → sources.
          </motion.h2>

          {/* =====================================================
              FLOW NAVIGATION
          ====================================================== */}

          <div
            className="
              mt-8
              w-full
              overflow-x-auto
              pb-2
              scrollbar-none
            "
          >
            <div
              className="
                flex
                min-w-max
                items-center
                font-['IBM_Plex_Sans']
              "
            >
              {flowSteps.map((step, index) => (
                <FlowStep
                  key={step}
                  label={step}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* =====================================================
              LOWER CONTENT
          ====================================================== */}

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-[minmax(0,1.3fr)_minmax(300px,1fr)]
              xl:grid-cols-[minmax(0,765px)_minmax(0,494px)]
              lg:items-start
              lg:gap-8
              xl:gap-[18px]
            "
          >
            {/* ===================================================
                TEXT CONTENT
            ==================================================== */}

            <div
              className="
                grid
                grid-cols-1
                gap-y-8
                sm:grid-cols-2
                sm:gap-x-[21px]
                lg:grid-cols-2
                xl:grid-cols-3
                lg:gap-x-[21.2px]
                lg:gap-y-8
              "
            >
              {anatomyItems.map((item, index) => (
                <AnatomyItem
                  key={item.title}
                  item={item}
                  index={index}
                />
              ))}
            </div>

            {/* ===================================================
                IMAGE
            ==================================================== */}

            <motion.div
              style={{ y: imageY }}
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
                ease: "easeOut",
              }}
              className="
                relative
                aspect-[494.4/188]
                w-full
                overflow-hidden
                rounded-2xl
              "
            >
              <Image
                src="/images/research/market-intelligence/image2.png"
                alt="Market intelligence article research"
                fill
                sizes="
                  (max-width: 1023px) 100vw,
                  494px
                "
                className="
                  object-cover
                  object-center
                "
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}