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
        bg-violet-50
        border-t-[0.8px]
        border-slate-900/10
        overflow-hidden
      "
    >
      {/* ===================================================
          SECTION CONTAINER
      =================================================== */}

      <div
        className="
          relative
          w-full
          max-w-[1440px]
          min-h-[520.41px]
          mx-auto
        "
      >
        {/* =================================================
            CTA CONTENT
        ================================================= */}

        <div
          className="
            w-full
            max-w-[700px]

            mx-auto

            pt-[88.8px]

            px-6
            sm:px-8
            lg:px-0

            flex
            flex-col
            justify-start
            items-center

            gap-4
          "
        >
          {/* =================================================
              HEADING
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="
              self-stretch
              flex
              flex-col
              justify-start
              items-center
            "
          >
            <h2
              className="
                text-center
                text-slate-900

                text-[32px]
                sm:text-[40px]
                lg:text-5xl

                font-bold
                font-['IBM_Plex_Sans']

                leading-[1.08]
                lg:leading-[48.3px]
              "
            >
              Give your team a research
              <br />
              capability, not another tool
              <br />
              to maintain.
            </h2>
          </motion.div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="
              self-stretch
              flex
              flex-col
              justify-start
              items-center
            "
          >
            <p
              className="
                text-center
                text-gray-600

                text-sm
                sm:text-base

                font-normal
                font-['IBM_Plex_Sans']

                leading-6
                lg:leading-7
              "
            >
              Explore how Talvrin can help your team share evidence,
              preserve reasoning, and stay
              <br className="hidden lg:block" />
              connected to what changes next.
            </p>
          </motion.div>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="
              w-full
              pt-3.5

              flex
              flex-col
              sm:flex-row

              justify-center
              items-center

              gap-4
            "
          >
            {/* PRIMARY BUTTON */}

            <a
              href="#"
              className="
                w-full
                sm:w-auto

                px-7
                py-4

                bg-slate-900
                rounded-lg

                flex
                justify-center
                items-center

                text-center
                text-violet-50

                text-base
                font-semibold
                font-['IBM_Plex_Sans']

                transition-all
                duration-200

                hover:bg-slate-800
              "
            >
              Explore Research Teams
            </a>

            {/* SECONDARY BUTTON */}

            <a
              href="#"
              className="
                w-full
                sm:w-auto

                px-7
                py-4

                rounded-lg

                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/25

                flex
                justify-center
                items-center

                text-center
                text-slate-900

                text-base
                font-semibold
                font-['IBM_Plex_Sans']

                transition-all
                duration-200

                hover:bg-white
              "
            >
              Explore Research Workspace
            </a>
          </motion.div>

          {/* =================================================
              DISCLAIMER
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="
              self-stretch

              pt-0.5

              flex
              flex-col
              justify-start
              items-center
            "
          >
            <p
              className="
                text-center
                text-gray-600

                text-sm
                font-normal
                font-['IBM_Plex_Sans']

                leading-5
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