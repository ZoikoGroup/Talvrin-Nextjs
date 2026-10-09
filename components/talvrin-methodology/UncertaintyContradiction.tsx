"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function UncertaintyContradiction() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-slate-900
        text-violet-50
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1439.8px]
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-8
          lg:py-[95.66px]
          xl:px-20
        "
      >
        <div className="mx-auto w-full max-w-[1280px]">
          {/* =====================================================
              EYEBROW
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
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span
              className="
                font-['IBM_Plex_Sans']
                text-[12px]
                font-bold
                leading-4
                tracking-[0.07em]
                text-[#D9A400]
              "
            >
              UNCERTAINTY &amp; CONTRADICTION
            </span>
          </motion.div>

          {/* =====================================================
              HEADING
          ===================================================== */}

          <motion.h2
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-3
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-[36px]
              font-bold
              leading-[1.12]
              tracking-[-0.025em]
              text-violet-50

              sm:text-[42px]

              lg:text-[48px]
              lg:leading-[48.72px]
            "
          >
            Explaining uncertainty beats
            <br className="hidden sm:block" />
            manufacturing certainty.
          </motion.h2>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <motion.p
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
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-5
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-[15px]
              font-normal
              leading-7
              text-violet-50/70

              sm:text-[16px]
            "
          >
            Conflicting evidence stays visible as a research condition rather
            than being collapsed into one answer.
          </motion.p>

          {/* =====================================================
              VISUAL PANEL
          ===================================================== */}

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
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mt-10
              h-[240px]
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-violet-50/10
              bg-violet-50/5

              sm:mt-12
              sm:h-[280px]

              lg:mt-[40px]
              lg:h-[320px]
            "
          >
            <motion.div
              initial={{
                scale: 1.04,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 1.1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                inset-0
                h-full
                w-full
              "
            >
              <Image
                src="/images/research/talvrin-methodology/image2.png"
                alt="Talvrin uncertainty and contradiction research visualization"
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 1280px"
                className="
                  object-cover
                  object-center

                  lg:object-[center_44%]
                "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}