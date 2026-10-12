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
  '"Shared evidence base" is the source-aligned term — "single source of truth" is avoided unless governance explicitly supports it.',
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function InstitutionalMemory() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      {/* MAIN CONTAINER */}

      <div
        className="
          relative mx-auto min-h-[678.2px] w-full max-w-[1440px]
          px-6 py-20 sm:px-8 lg:px-0 lg:py-0
        "
      >
        {/* CONTENT */}

        <div
          className="
            flex w-full flex-col items-start justify-start gap-3
            lg:absolute lg:left-[80px] lg:top-[96.1px]
            lg:w-[1280px] lg:max-w-[1320px]
          "
        >
          {/* EYEBROW */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="flex w-full flex-col items-start justify-start"
          >
            <div className="w-full font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
              INSTITUTIONAL MEMORY
            </div>
          </motion.div>

          {/* HEADING */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="
              flex w-full flex-col items-start justify-start
              lg:max-w-[780px]
            "
          >
            <h2
              className="
                font-['IBM_Plex_Sans'] text-[32px] font-bold
                leading-[1.08] text-violet-50
                sm:text-[40px]
                lg:text-5xl lg:leading-[48.72px]
              "
            >
              Reasoning shouldn&apos;t disappear when
              an analyst changes roles.
            </h2>
          </motion.div>

          {/* DESCRIPTION */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="
              flex w-full flex-col items-start justify-start
              pt-2 pb-7
              lg:max-w-[780px]
            "
          >
            <p
              className="
                font-['IBM_Plex_Sans'] text-sm font-normal
                leading-6 text-violet-50/70
                sm:text-base lg:leading-7
              "
            >
              Institutional memory is a preserved research trail, not a
              promised archive, retention schedule, or legal
              <br className="hidden lg:block" />
              record.
            </p>
          </motion.div>

          {/* MEMORY PANEL */}

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: smoothEase,
            }}
            className="
              flex w-full flex-col items-start justify-start self-stretch
              rounded-2xl bg-violet-50/5 px-6 py-2
              outline outline-1 outline-offset-[-1px]
              outline-violet-50/10
              sm:px-7
            "
          >
            {memoryPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  ease: smoothEase,
                  delay: 0.15 + index * 0.08,
                }}
                className="
                  inline-flex w-full items-start justify-start gap-3.5
                  self-stretch border-b-[0.8px] border-violet-50/10
                  py-4 last:border-b-0
                "
              >
                {/* RIGHT ARROW — MATCH FIGMA REFERENCE */}

                <div
                  className="
                    flex shrink-0 items-start justify-start
                    pt-0.5 font-['IBM_Plex_Sans']
                    text-base leading-5 text-indigo-300
                  "
                >
                  <span aria-hidden="true">→</span>
                </div>

                {/* TEXT */}

                <div className="flex min-w-0 flex-1 flex-col items-start justify-start">
                  <p
                    className="
                      w-full font-['IBM_Plex_Sans'] text-sm
                      font-normal leading-6 text-violet-50/80
                      sm:text-base
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