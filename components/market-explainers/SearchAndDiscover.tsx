"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SearchAndDiscover() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-violet-50
        text-slate-900
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-6
          py-20

          sm:px-8
          sm:py-24

          lg:px-0
          lg:py-[96px]
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            flex-col
            items-start
          "
        >
          {/* Eyebrow */}

          <div
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-yellow-600
            "
          >
            SEARCH &amp; DISCOVER
          </div>

          {/* Heading */}

          <h2
            className="
              max-w-[780px]
              pt-3
              font-['IBM_Plex_Sans']
              text-[36px]
              font-bold
              leading-[1.12]
              tracking-[-0.02em]
              text-slate-900

              sm:text-[42px]

              lg:text-5xl
              lg:leading-[48.72px]
            "
          >
            Filter what&apos;s real. Never a fabricated
            <br className="hidden sm:block" />
            explainer to fill the page.
          </h2>

          {/* Description */}

          <p
            className="
              max-w-[800px]
              pt-2
              pb-7
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-7
              text-gray-600
            "
          >
            Category and sort facets appear only once governed editorial
            content exists behind them. The interaction below is fully
            usable now — it just has no published explainer inventory to
            return yet.
          </p>
        </motion.div>

        {/* =====================================================
            IMAGE BANNER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.8,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            h-[200px]
            w-full
            overflow-hidden
            rounded-2xl
            bg-white

            sm:h-[220px]

            lg:h-[240px]
          "
        >
          <Image
            src="/images/research/market-explainers/image1.png"
            alt="Market research professionals in an urban business environment"
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1279px) 100vw, 1280px"
            className="
              object-cover
              object-center
            "
          />
        </motion.div>

        {/* =====================================================
            RESULT CARD
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.75,
            delay: 0.14,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-3
            flex
            w-full
            flex-col
            items-start
            gap-2
            rounded-2xl
            border
            border-slate-900/10
            bg-white
            px-6
            pt-8
            pb-7

            sm:px-7
            sm:pt-9

            lg:mt-[10px]
            lg:px-7
            lg:pt-11
            lg:pb-8
          "
        >
          {/* Result label */}

          <div
            className="
              w-full
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-yellow-600
            "
          >
            RESULT
          </div>

          {/* Result heading */}

          <div
            className="
              w-full
              pt-0.5
              font-['IBM_Plex_Sans']
              text-base
              font-semibold
              leading-7
              text-slate-900
            "
          >
            There is no published Market Explainers inventory yet.
          </div>

          {/* Result description */}

          <p
            className="
              w-full
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-gray-600

              sm:text-base
            "
          >
            Every explainer will carry the same anatomy shown below — never a
            substitute definition generated to fill an empty result.
          </p>

          {/* Links */}

          <div
            className="
              flex
              w-full
              flex-wrap
              items-center
              gap-x-3.5
              gap-y-2
              pt-2
            "
          >
            <button
              type="button"
              className="
                font-['IBM_Plex_Sans']
                text-sm
                font-semibold
                text-indigo-500
                transition-colors
                duration-200
                hover:text-indigo-700
              "
            >
              Clear filters
            </button>

            <span
              aria-hidden="true"
              className="
                hidden
                text-slate-900/20
                sm:inline
              "
            >
              |
            </span>

            <button
              type="button"
              className="
                font-['IBM_Plex_Sans']
                text-sm
                font-semibold
                text-indigo-500
                transition-colors
                duration-200
                hover:text-indigo-700
              "
            >
              Explore Market Intelligence →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}