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
            className="
              font-['IBM_Plex_Sans']
              text-xs font-bold tracking-wide text-indigo-500
              sm:text-sm
            "
          >
            CONTINUOUS MONITORING FOR TEAMS
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
              font-['IBM_Plex_Sans']
              text-[clamp(1.8rem,3.5vw,3rem)]
              font-bold leading-[1.1]
              tracking-[-0.02em] text-slate-900
            "
          >
            Focus the team&apos;s attention on evidence that may affect the
            view.
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              mt-4 w-full max-w-[780px]
              font-['IBM_Plex_Sans']
              text-sm font-normal leading-6 text-gray-600
              sm:text-base sm:leading-7
            "
          >
            Not a real-time alert feed. Monitoring keeps a shared research
            object connected to relevant evidence.
          </motion.p>

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
              relative mt-8 w-full min-w-0
              aspect-[4/3] overflow-hidden
              rounded-2xl border border-slate-900/10
              bg-white
              min-[480px]:aspect-[5/3]
              sm:mt-10
              lg:aspect-[4/1]
              xl:mt-[40px]
            "
          >
            <Image
              src="/images/solutions/research-teams/image4.png"
              alt="Continuous monitoring for research teams"
              fill
              priority
              sizes="(max-width: 479px) calc(100vw - 32px), (max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) calc(100vw - 96px), 1280px"
              className="object-cover object-center"
            />
          </motion.div>

          {/* MONITORING BOUNDARY */}

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
              px-5 py-5
              sm:px-6 sm:py-6
              xl:mt-[18px]
            "
          >
            {/* LABEL */}

            <p
              className="
                font-['IBM_Plex_Sans']
                text-xs font-bold tracking-wide text-yellow-600
                sm:text-sm
              "
            >
              MONITORING BOUNDARY
            </p>

            {/* DESCRIPTION */}

            <p
              className="
                w-full break-words
                font-['IBM_Plex_Sans']
                text-sm font-normal leading-6 text-violet-50/80
                sm:text-base sm:leading-7
              "
            >
              Monitoring can focus attention on changes that may affect a
              view. The sources do not define team assignment, escalation,
              inbox ownership, notification routing, or response SLAs — those
              mechanics remain capability-gated.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}