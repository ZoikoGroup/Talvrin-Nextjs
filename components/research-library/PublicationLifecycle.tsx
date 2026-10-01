"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PublicationLifecycle() {
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
          lg:py-[95.98px]
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
              Publication Lifecycle
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
              Published, updated, corrected,
              <br className="hidden sm:block" />
              archived — never cosmetically
              <br className="hidden sm:block" />
              refreshed.
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
              Six explicit states so a correction, supersession, or
              withdrawal never disappears silently or gets mistaken for
              current research.
            </p>
          </div>
        </motion.div>

        {/* ============================================================
            IMAGE
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.985,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-10
            h-[384px]
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-slate-900/10
            bg-white
          "
        >
          <Image
            src="/images/research/research-library/image3.png"
            alt="Publication lifecycle"
            fill
            priority
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