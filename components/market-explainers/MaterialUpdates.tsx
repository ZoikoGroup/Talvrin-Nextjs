"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MaterialUpdates() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        text-slate-900
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-8
          lg:py-[96px]
          xl:px-0
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
          className="flex w-full flex-col items-start"
        >
          {/* Eyebrow */}

          <div
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-indigo-500
            "
          >
            MATERIAL UPDATES
          </div>

          {/* Heading */}

          <h2
            className="
              max-w-[1000px]
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
            Updated when the evidence changes —
            <br className="hidden sm:block" />
            never to manufacture freshness.
          </h2>

          {/* Description */}

          <p
            className="
              max-w-[800px]
              pt-2
              pb-5
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-7
              text-gray-600
            "
          >
            A timestamp is evidence, not decoration. Six explicit lifecycle
            states so a correction or retirement never disappears silently or
            gets mistaken for current.
          </p>
        </motion.div>

        {/* =====================================================
            EMPTY STATE
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            items-center
            rounded-2xl
            border
            border-slate-900/10
            bg-violet-50
            px-6
            py-6

            sm:px-7

            lg:min-h-[80px]
          "
        >
          <p
            className="
              w-full
              font-['IBM_Plex_Sans']
              text-sm
              font-semibold
              leading-6
              text-slate-900

              sm:text-base
            "
          >
            There are no materially updated explainers to show yet — this
            section will populate only when a real, substantive change occurs.
          </p>
        </motion.div>

        {/* =====================================================
            IMAGE BANNER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.99,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            delay: 0.14,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-3
            h-[260px]
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-slate-900/10
            bg-violet-50

            sm:h-[320px]

            lg:h-[384px]
          "
        >
          <Image
            src="/images/research/market-explainers/image3.png"
            alt="Market research and evidence"
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1279px) 100vw, 1280px"
            className="
              object-cover
              object-center
            "
          />
        </motion.div>
      </div>
    </section>
  );
}