"use client";

import { motion } from "framer-motion";

const principles = [
  "SOURCE-LINKED",
  "TIMING-SEPARATED",
  "INSTITUTION-SPECIFIC INSTRUMENTS",
  "EVIDENCE BEFORE INTERPRETATION",
  "CHANGE-MONITORED",
];

export default function CentralBanksPrinciples() {
  return (
    <section
      className="
        relative
        w-full
        border-t-[0.8px]
        border-b-[0.8px]
        border-slate-900/10
        bg-white
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-16
          w-full
          max-w-[1320px]
          items-center
          justify-center
          px-4
          py-4
          sm:px-6
          sm:py-5
          md:px-8
          lg:px-0
        "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="
            flex
            w-full
            flex-wrap
            items-center
            justify-center
            gap-x-7
            gap-y-4
            lg:gap-x-7
            lg:gap-y-3
          "
        >
          {principles.map((principle, index) => (
            <div
              key={principle}
              className="
                flex
                items-center
                gap-7
              "
            >
              <motion.span
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 8,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1] as [
                        number,
                        number,
                        number,
                        number
                      ],
                    },
                  },
                }}
                className="
                  whitespace-nowrap
                  font-['IBM_Plex_Sans']
                  text-[11px]
                  font-semibold
                  leading-4
                  tracking-[0.06em]
                  text-slate-900
                  sm:text-xs
                "
              >
                {principle}
              </motion.span>

              {/* Separator */}
              {index < principles.length - 1 && (
                <motion.span
                  aria-hidden="true"
                  variants={{
                    hidden: {
                      opacity: 0,
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 0.4,
                      },
                    },
                  }}
                  className="
                    font-['IBM_Plex_Sans']
                    text-base
                    font-normal
                    leading-none
                    text-slate-900/25
                  "
                >
                  ·
                </motion.span>
              )}
            </div>
          ))}

          {/* NON-ADVISORY is positioned as second row in Figma */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 8,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1] as [
                    number,
                    number,
                    number,
                    number
                  ],
                },
              },
            }}
            className="
              basis-full
              text-center
            "
          >
            <span
              className="
                font-['IBM_Plex_Sans']
                text-[11px]
                font-semibold
                leading-4
                tracking-[0.06em]
                text-slate-900
                sm:text-xs
              "
            >
              NON-ADVISORY
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}