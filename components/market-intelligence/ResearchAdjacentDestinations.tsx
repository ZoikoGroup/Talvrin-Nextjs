"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Destination = {
  title: string;
  description: string;
};

const destinations: Destination[] = [
  {
    title: "Research Library",
    description:
      "The broader research corpus and archive, once its own specification is approved.",
  },
  {
    title: "Economic Calendar",
    description:
      "Upcoming and released economic events with source context.",
  },
  {
    title: "Policy & Regulation",
    description:
      "Research on policy and regulatory evidence and market implications.",
  },
  {
    title: "Talvrin Methodology",
    description:
      "Stable explanation of Talvrin’s evidence and research methods.",
  },
  {
    title: "Central Banks",
    description:
      "Research on central-bank communications, decisions, and policy context.",
  },
  {
    title: "Market Explainers",
    description:
      "Clear, source-grounded explanations of market concepts.",
  },
];

function DestinationCard({
  destination,
  index,
}: {
  destination: Destination;
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        flex
        min-h-[190px]
        flex-col
        rounded-2xl
        border
        border-slate-900/10
        bg-violet-50
        px-6
        pt-6
        pb-7
        font-['IBM_Plex_Sans']
        transition-shadow
        duration-300
        hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]
      "
    >
      {/* Title */}
      <h3
        className="
          text-base
          font-bold
          leading-6
          text-slate-900
        "
      >
        {destination.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-2
          max-w-[205px]
          text-sm
          font-normal
          leading-5
          text-gray-600
        "
      >
        {destination.description}
      </p>

      {/* Link */}
      <a
        href="#"
        className="
          mt-auto
          inline-flex
          w-fit
          items-center
          pt-4
          text-xs
          font-semibold
          text-indigo-500
          transition-colors
          duration-200
          group-hover:text-indigo-600
        "
      >
        Learn more
        <span
          aria-hidden="true"
          className="
            ml-1
            transition-transform
            duration-200
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </a>
    </motion.article>
  );
}

export default function ResearchAdjacentDestinations() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /*
   * Very subtle scroll movement.
   * The layout itself stays stable like the Figma design.
   */
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [30, -25]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [20, -20]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.04, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-white
      "
    >
      {/* =========================================================
          SUBTLE BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background:
            "radial-gradient(circle at 7% 5%, rgba(99,102,241,0.035) 0%, rgba(99,102,241,0) 50%)",
        }}
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

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

          <motion.div
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
              text-yellow-600
            "
          >
            RESEARCH LIBRARY &amp; ADJACENT RESEARCH
          </motion.div>

          {/* =====================================================
              HEADING
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
              duration: 0.6,
              delay: 0.05,
              ease: "easeOut",
            }}
            className="
              mt-5
              max-w-[1273px]
              font-['IBM_Plex_Sans']
              text-[28px]
              font-bold
              leading-[1.12]
              tracking-[-0.025em]
              text-slate-900
              sm:text-[36px]
              md:text-[42px]
              lg:text-5xl
              lg:leading-[48.3px]
            "
          >
            Market Intelligence is curated and current.
            <br className="hidden lg:block" />
            Related destinations go deeper.
          </motion.h2>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
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
              duration: 0.55,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              mt-5
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-gray-600
              sm:text-base
              sm:leading-7
            "
          >
            Each destination links out only once its own module is live —
            never a dead or placeholder route.
          </motion.p>

          {/* =====================================================
              CARDS + IMAGE
          ====================================================== */}

          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-6
              lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,1fr)]
              xl:grid-cols-[778px_minmax(0,494.8px)]
              lg:items-start
              lg:gap-6
              xl:gap-0
            "
          >
            {/* ===================================================
                LEFT: 3 × 2 CARD GRID
            ==================================================== */}

            <div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                lg:grid-cols-2
                xl:grid-cols-3
                lg:gap-x-[17px]
                lg:gap-y-[16px]
              "
            >
              {destinations.map((destination, index) => (
                <DestinationCard
                  key={destination.title}
                  destination={destination}
                  index={index}
                />
              ))}
            </div>

            {/* ===================================================
                RIGHT IMAGE
            ==================================================== */}

            <motion.div
              style={{
                y: imageY,
              }}
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.75,
                ease: "easeOut",
              }}
              className="
                relative
                mt-2
                h-[320px]
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-slate-900/10
                bg-violet-50
                sm:h-[420px]
                lg:mt-0
                lg:h-[384px]
                xl:ml-[2px]
                xl:w-[494.8px]
              "
            >
              <motion.div
                style={{
                  scale: imageScale,
                }}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                "
              >
                <Image
                  src="/images/research/market-intelligence/image4.png"
                  alt="Research and market intelligence team"
                  fill
                  sizes="
                    (max-width: 1023px) 100vw,
                    495px
                  "
                  className="
                    object-cover
                    object-center
                  "
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}