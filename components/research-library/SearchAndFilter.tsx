"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SearchAndFilter() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-violet-50
      "
    >
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
          lg:py-[95.56px]
        "
      >
        {/* ============================================================
            SECTION HEADER
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
          {/* ========================================================
              EYEBROW
          ======================================================== */}

          <div className="w-full">
            <span
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                leading-4
                tracking-[0.08em]
                text-yellow-600
              "
            >
              Search &amp; Filter
            </span>
          </div>

          {/* ========================================================
              HEADING
          ======================================================== */}

          <div
            className="
              w-full
              max-w-[780px]
              pt-5
            "
          >
            <h2
              className="
                font-['IBM_Plex_Sans']
                text-[38px]
                font-bold
                leading-[1.08]
                tracking-[-0.025em]
                text-slate-900
                sm:text-[44px]
                sm:leading-[48.72px]
                lg:text-5xl
              "
            >
              Filter what&apos;s real. Never a fabricated
              <br className="hidden sm:block" />
              result to fill the page.
            </h2>
          </div>

          {/* ========================================================
              DESCRIPTION
          ======================================================== */}

          <div
            className="
              w-full
              max-w-[800px]
              pt-2
            "
          >
            <p
              className="
                font-['IBM_Plex_Sans']
                text-base
                font-normal
                leading-7
                text-gray-600
              "
            >
              Category, market/jurisdiction, and date facets appear only
              once the Content Registry stores a governed field for them.
              The interaction below is fully usable now — it just has no
              published inventory to return yet.
            </p>
          </div>
        </motion.div>

        {/* ============================================================
            IMAGE PANEL
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-10
            h-[320px]
            w-full
            overflow-hidden
            rounded-2xl
            bg-white
          "
        >
          <Image
            src="/images/research/research-library/image1.png"
            alt="Research Library search and filter"
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1279px) 100vw, 1280px"
            className="
              object-cover
              object-center
            "
          />
        </motion.div>

        {/* ============================================================
            RESULT CARD
        ============================================================ */}

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
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-3
            w-full
            rounded-2xl
            border
            border-slate-900/10
            bg-white
            px-6
            py-8
            sm:px-7
            lg:px-7
            lg:pb-8
            lg:pt-11
          "
        >
          {/* ========================================================
              RESULT LABEL
          ======================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              items-start
            "
          >
            <span
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                leading-4
                tracking-[0.08em]
                text-yellow-600
              "
            >
              Result
            </span>
          </div>

          {/* ========================================================
              RESULT TITLE
          ======================================================== */}

          <div className="w-full pt-0.5">
            <h3
              className="
                font-['IBM_Plex_Sans']
                text-base
                font-semibold
                leading-7
                text-slate-900
              "
            >
              There is no published Research Library inventory yet.
            </h3>
          </div>

          {/* ========================================================
              RESULT DESCRIPTION
          ======================================================== */}

          <div className="w-full">
            <p
              className="
                font-['IBM_Plex_Sans']
                text-base
                font-normal
                leading-6
                text-gray-600
              "
            >
              Every result card will carry the same required contract shown
              below — never a substitute headline, source, or date generated
              to fill an empty result.
            </p>
          </div>

          {/* ========================================================
              ACTION LINKS
          ======================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-2
              pt-2
              sm:flex-row
              sm:items-center
              sm:gap-3.5
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