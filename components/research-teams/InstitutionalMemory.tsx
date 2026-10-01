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
   DATA
========================================================= */

const memoryPoints = [
  "Preserve the question, evidence, context, research view, and relevant change history.",

  "Make prior reasoning discoverable through the research object rather than personal files.",

  "Keep source version and timing visible where material.",

  "\"Shared evidence base\" is the source-aligned term — \"single source of truth\" is avoided unless governance explicitly supports it.",
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function InstitutionalMemory() {
  return (
    <section
      className="
        relative
        w-full
        bg-slate-900
        overflow-hidden
      "
    >
      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          w-full
          max-w-[1440px]
          min-h-[678.2px]
          mx-auto
          px-6
          sm:px-8
          lg:px-0
          py-20
          lg:py-0
        "
      >
        {/* ===================================================
            CONTENT
        =================================================== */}

        <div
          className="
            w-full
            lg:w-[1280px]
            lg:max-w-[1320px]
            lg:absolute
            lg:left-[80px]
            lg:top-[96.1px]
            flex
            flex-col
            justify-start
            items-start
            gap-3
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
              INSTITUTIONAL MEMORY
            </div>
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
              lg:w-[1000px]
              lg:max-w-[780px]
              flex
              flex-col
              justify-start
              items-start
            "
          >
            <h2
              className="
                text-violet-50
                text-[32px]
                sm:text-[40px]
                lg:text-5xl
                font-bold
                font-['IBM_Plex_Sans']
                leading-[1.08]
                lg:leading-[48.72px]
              "
            >
              Reasoning shouldn&apos;t disappear when
             
              an analyst changes roles.
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
              lg:w-[780px]
              lg:max-w-[780px]
              pt-2
              pb-7
              flex
              flex-col
              justify-start
              items-start
            "
          >
            <p
              className="
                text-violet-50/70
                text-sm
                sm:text-base
                font-normal
                font-['IBM_Plex_Sans']
                leading-6
                lg:leading-7
              "
            >
              Institutional memory is a preserved research trail, not a
              promised archive, retention schedule, or legal
              <br className="hidden lg:block" />
              record.
            </p>
          </motion.div>

          {/* =================================================
              MEMORY PANEL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 28,
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
              ease: smoothEase,
            }}
            className="
              self-stretch
              px-7
              py-2
              bg-violet-50/5
              rounded-2xl
              outline
              outline-1
              outline-offset-[-1px]
              outline-violet-50/10
              flex
              flex-col
              justify-start
              items-start
            "
          >
            {memoryPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{
                  opacity: 0,
                  x: -12,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  ease: smoothEase,
                  delay: 0.15 + index * 0.08,
                }}
                className="
                  self-stretch
                  py-4
                  border-b-[0.8px]
                  border-violet-50/10
                  inline-flex
                  justify-start
                  items-start
                  gap-3.5
                  last:border-b-0
                "
              >
                {/* =========================================
                    INDIGO MARKER
                ========================================= */}

                <div
                  className="
                    shrink-0
                    pt-0.5
                    flex
                    flex-col
                    justify-start
                    items-start
                  "
                >
                  <div
                    className="
                      w-3
                      h-[4.92px]
                      bg-indigo-300
                    "
                  />
                </div>

                {/* =========================================
                    TEXT
                ========================================= */}

                <div
                  className="
                    flex-1
                    min-w-0
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
                      sm:text-base
                      font-normal
                      font-['IBM_Plex_Sans']
                      leading-6
                    "
                  >
                    {point}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}