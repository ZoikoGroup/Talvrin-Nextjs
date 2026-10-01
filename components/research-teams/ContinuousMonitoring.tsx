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
   MAIN COMPONENT
========================================================= */

export default function ContinuousMonitoring() {
  return (
    <section
      className="
        relative
        w-full
        bg-violet-50
        overflow-hidden
      "
    >
      {/* ===================================================
          MAIN SECTION CONTAINER
      =================================================== */}

      <div
        className="
          relative
          w-full
          max-w-[1440px]
          min-h-[829px]
          mx-auto
          px-6
          sm:px-8
          lg:px-0
          py-20
          lg:py-0
        "
      >
        {/* =================================================
            CONTENT WRAPPER
        ================================================= */}

        <div
          className="
            w-full
            lg:w-[1280px]
            lg:left-[80px]
            lg:top-[95.9px]
            lg:absolute
          "
        >
          {/* =================================================
              EYEBROW
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
              text-indigo-500
              text-xs
              font-bold
              font-['IBM_Plex_Sans']
              tracking-wide
            "
          >
            CONTINUOUS MONITORING FOR TEAMS
          </motion.div>

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
              w-full
              max-w-[1000px]
              mt-[16.3px]
            "
          >
            <h2
              className="
                text-slate-900
                text-[32px]
                sm:text-[40px]
                lg:text-5xl
                font-bold
                font-['IBM_Plex_Sans']
                leading-[1.08]
                lg:leading-[48.72px]
              "
            >
              Focus the team&apos;s attention on evidence
              <br className="hidden lg:block" />
              that may affect the view.
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
              w-full
              max-w-[780px]
              pt-2
              mt-[17.4px]
            "
          >
            <p
              className="
                text-gray-600
                text-sm
                sm:text-base
                font-normal
                font-['IBM_Plex_Sans']
                leading-6
                lg:leading-7
              "
            >
              Not a real-time alert feed. Monitoring keeps a shared research
              object connected to relevant evidence.
            </p>
          </motion.div>

          {/* =================================================
              IMAGE
          ================================================= */}

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: smoothEase,
            }}
            className="
              relative
              w-full
              h-[320px]
              lg:w-[1280px]
              lg:h-[320px]
              mt-10
              lg:mt-[40px]
              bg-white
              rounded-2xl
              outline
              outline-1
              outline-offset-[-1px]
              outline-slate-900/10
              overflow-hidden
            "
          >
            <Image
              src="/images/solutions/research-teams/image4.png"
              alt="Continuous monitoring for research teams"
              fill
              priority
              sizes="1280px"
              className="
                object-cover
                object-center
              "
            />
          </motion.div>

          {/* =================================================
              MONITORING BOUNDARY
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              w-full
              lg:w-[1280px]
              mt-5
              lg:mt-[18.2px]
              px-6
              py-5
              bg-slate-900
              rounded-2xl
              flex
              flex-col
              justify-start
              items-start
              gap-2
            "
          >
            {/* LABEL */}

            <div
              className="
                self-stretch
                flex
                flex-col
                justify-start
                items-start
              "
            >
              <div
                className="
                  self-stretch
                  text-yellow-600
                  text-xs
                  font-bold
                  font-['IBM_Plex_Sans']
                  tracking-wide
                "
              >
                MONITORING BOUNDARY
              </div>
            </div>

            {/* DESCRIPTION */}

            <div
              className="
                self-stretch
                flex
                flex-col
                justify-start
                items-start
              "
            >
              <p
                className="
                  self-stretch
                  text-violet-50/80
                  text-sm
                  font-normal
                  font-['IBM_Plex_Sans']
                  leading-6
                "
              >
                Monitoring can focus attention on changes that may affect a
                view. The sources do not define team assignment, escalation,
                inbox ownership, notification routing, or response SLAs —
                those mechanics
                <br className="hidden lg:block" />
                remain capability-gated.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}