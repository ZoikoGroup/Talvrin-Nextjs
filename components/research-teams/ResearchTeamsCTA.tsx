"use client";

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
   MAIN COMPONENT
========================================================= */

export default function ResearchTeamsCTA() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        border-t-[0.8px]
        border-slate-900/10
        bg-violet-50
      "
    >
      {/* SECTION CONTAINER */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          py-14
          min-[480px]:px-5
          sm:py-16
          md:px-8
          md:py-20
          lg:px-12
          xl:px-20
          xl:py-[88px]
        "
      >
        {/* CTA CONTENT */}

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[700px]
            flex-col
            items-center
            justify-start
            gap-4
          "
        >
          {/* HEADING */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="flex w-full flex-col items-center justify-start"
          >
            <h2
              className="
                w-full
                text-center
                font-['IBM_Plex_Sans']
                text-[clamp(1.8rem,3.5vw,3rem)]
                font-bold
                leading-[1.1]
                tracking-[-0.02em]
                text-slate-900
              "
            >
              Give your team a research capability, not another tool to
              maintain.
            </h2>
          </motion.div>

          {/* DESCRIPTION */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="flex w-full flex-col items-center justify-start"
          >
            <p
              className="
                w-full
                text-center
                font-['IBM_Plex_Sans']
                text-sm
                font-normal
                leading-6
                text-gray-600
                sm:text-base
                sm:leading-7
              "
            >
              Explore how Talvrin can help your team share evidence, preserve
              reasoning, and stay connected to what changes next.
            </p>
          </motion.div>

          {/* BUTTONS */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="
              flex
              w-full
              flex-col
              items-stretch
              justify-center
              gap-3
              pt-3
              min-[480px]:gap-4
              sm:flex-row
              sm:items-center
            "
          >
            {/* PRIMARY BUTTON */}

            <a
              href="#"
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                rounded-lg
                bg-slate-900
                px-5
                py-3.5
                text-center
                font-['IBM_Plex_Sans']
                text-sm
                font-semibold
                text-violet-50
                transition-colors
                duration-200
                hover:bg-slate-800
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-slate-900
                sm:w-auto
                sm:flex-1
                sm:px-5
                sm:text-base
                md:flex-none
                md:px-7
              "
            >
              Explore Research Teams
            </a>

            {/* SECONDARY BUTTON */}

            <a
              href="#"
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                rounded-lg
                px-5
                py-3.5
                text-center
                font-['IBM_Plex_Sans']
                text-sm
                font-semibold
                text-slate-900
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/25
                transition-colors
                duration-200
                hover:bg-white
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-slate-900
                sm:w-auto
                sm:flex-1
                sm:px-5
                sm:text-base
                md:flex-none
                md:px-7
              "
            >
              Explore Research Workspace
            </a>
          </motion.div>

          {/* DISCLAIMER */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="flex w-full flex-col items-center justify-start pt-0.5"
          >
            <p
              className="
                w-full
                text-center
                font-['IBM_Plex_Sans']
                text-xs
                font-normal
                leading-5
                text-gray-600
                sm:text-sm
              "
            >
              Research and intelligence. No trade execution. No manufactured
              investment recommendations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}