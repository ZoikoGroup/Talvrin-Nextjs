"use client";

import { motion } from "framer-motion";

export default function ResearchLibraryCta() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        border-t
        border-slate-900/10
        bg-white
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1280px]
          flex-col
          items-center
          px-5
          py-20
          sm:px-7
          sm:py-24
          lg:min-h-[472.4px]
          lg:justify-center
          lg:px-0
          lg:py-0
        "
      >
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
            max-w-[700px]
            flex-col
            items-center
            gap-4
            text-center
          "
        >
          {/* ========================================================
              HEADING
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
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
                sm:leading-[48.3px]
                lg:text-5xl
              "
            >
              Search a library built to stay honest
             
              about what it contains.
            </h2>
          </motion.div>

          {/* ========================================================
              DESCRIPTION
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
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
              Browse the Research Library — source-linked, date-honest, and
              open without a lead-capture wall.
            </p>
          </motion.div>

          {/* ========================================================
              BUTTONS
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              w-full
              flex-col
              items-stretch
              justify-center
              gap-3.5
              pt-3.5
              sm:flex-row
              sm:items-start
            "
          >
            {/* PRIMARY BUTTON */}

            <a
              href="/research/research-library"
              className="
                inline-flex
                min-h-[56px]
                items-center
                justify-center
                rounded-lg
                bg-slate-900
                px-7
                py-4
                font-['IBM_Plex_Sans']
                text-base
                font-semibold
                leading-6
                text-violet-50
                transition-all
                duration-200
                hover:bg-slate-800
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-slate-900
                focus-visible:ring-offset-2
              "
            >
              Search the Research Library
            </a>

            {/* SECONDARY BUTTON */}

            <a
              href="/markets/market-intelligence"
              className="
                inline-flex
                min-h-[56px]
                items-center
                justify-center
                rounded-lg
                border
                border-slate-900/25
                bg-white
                px-7
                py-4
                font-['IBM_Plex_Sans']
                text-base
                font-semibold
                leading-6
                text-slate-900
                transition-all
                duration-200
                hover:border-slate-900/40
                hover:bg-slate-50
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-slate-900
                focus-visible:ring-offset-2
              "
            >
              Explore Market Intelligence
            </a>
          </motion.div>

          {/* ========================================================
              DISCLAIMER
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="w-full pt-0.5"
          >
            <p
              className="
                font-['IBM_Plex_Sans']
                text-sm
                font-normal
                leading-5
                text-gray-600
              "
            >
              Research and intelligence. No trade execution. No manufactured
              investment recommendations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}