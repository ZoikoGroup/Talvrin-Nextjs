"use client";

import { motion } from "framer-motion";

const principles = [
  "SOURCE-LINKED EXPLANATIONS",
  "DIRECT-ANSWER FIRST",
  "NON-COMMODITY CONTENT",
  "MATERIAL FRESHNESS ONLY",
  "ACCESSIBLE BY DEFAULT",
];

export default function ResearchPrinciplesBar() {
  return (
    <section
      className="
        w-full
        border-y
        border-slate-900/10
        bg-white
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[96px]
          w-full
          max-w-[1320px]
          flex-col
          items-center
          justify-center
          px-6
          py-6

          sm:px-8
          lg:px-10
        "
      >
        {/* =========================================
            DESKTOP / TABLET PRINCIPLES
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            flex-wrap
            items-center
            justify-center
            gap-x-6
            gap-y-3

            lg:gap-x-7
          "
        >
          {principles.map((item, index) => (
            <div
              key={item}
              className="
                flex
                shrink-0
                items-center
                gap-x-6

                lg:gap-x-7
              "
            >
              <span
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
                {item}
              </span>

              {/* Separator */}
              {index < principles.length - 1 && (
                <span
                  aria-hidden="true"
                  className="
                    font-['IBM_Plex_Sans']
                    text-base
                    font-normal
                    leading-4
                    text-slate-900/25
                  "
                >
                  ·
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* =========================================
            NOT INVESTMENT ADVICE
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 8,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.6,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-2
            flex
            items-center
            justify-center
          "
        >
          <span
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
            NOT INVESTMENT ADVICE
          </span>
        </motion.div>
      </div>
    </section>
  );
}