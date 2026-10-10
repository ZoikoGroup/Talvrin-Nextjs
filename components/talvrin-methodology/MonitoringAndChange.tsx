"use client";

import { motion } from "framer-motion";

const monitoringStates = [
  {
    label: "NEW EVIDENCE",
    description:
      "Show source identity, publication time, relationship to the research object, and whether materiality review is complete.",
  },
  {
    label: "UPDATED EVIDENCE",
    description:
      "Preserve prior version or supersession relationship where available; do not overwrite history invisibly.",
  },
  {
    label: "UNCHANGED EVIDENCE",
    description:
      "Do not create noisy alerts solely to demonstrate activity.",
  },
  {
    label: "SOURCE UNAVAILABLE",
    description:
      "Expose availability/rights state; do not silently remove the evidence trail.",
  },
  {
    label: "MATERIALITY PENDING",
    description:
      "Use a pending/review state where a change exists but its significance is not yet established.",
  },
  {
    label: "RESEARCH REASSESSMENT",
    description:
      "Connect the changed evidence to assumptions or parts of the research view that may need review.",
  },
];

export default function MonitoringAndChange() {
  return (
    <section className="w-full overflow-hidden bg-[#F6F5FF] text-slate-900">
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
          lg:py-[95.64px]
          xl:px-20
        "
      >
        <div className="mx-auto w-full max-w-[1280px]">
          {/* =====================================================
              HEADER
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Eyebrow */}
            <div>
              <span
                className="
                  font-['IBM_Plex_Sans']
                  text-[12px]
                  font-bold
                  leading-4
                  tracking-[0.07em]
                  text-indigo-500
                "
              >
                MONITORING &amp; CHANGE
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-3
                max-w-[1000px]
                font-['IBM_Plex_Sans']
                text-[36px]
                font-bold
                leading-[1.12]
                tracking-[-0.025em]
                text-slate-900

                sm:text-[42px]

                lg:text-[48px]
                lg:leading-[48.72px]
              "
            >
              Research should remain connected to
              <br className="hidden sm:block" />
              what can change it.
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[780px]
                font-['IBM_Plex_Sans']
                text-[15px]
                font-normal
                leading-7
                text-gray-600

                sm:text-[16px]
              "
            >
              Evidence-change monitoring is distinct from price alerts or
              generic notification noise.
            </p>
          </motion.div>

          {/* =====================================================
              MONITORING TABLE
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-10
              rounded-2xl
              border
              border-slate-900/10
              bg-white
              px-5
              py-5

              sm:px-7
              sm:py-7
            "
          >
            <div className="flex flex-col">
              {monitoringStates.map((state, index) => (
                <MonitoringRow
                  key={state.label}
                  label={state.label}
                  description={state.description}
                  index={index}
                  isLast={index === monitoringStates.length - 1}
                />
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              MATERIALITY BOUNDARY
          ===================================================== */}

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
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-4
              rounded-2xl
              bg-slate-900
              px-5
              py-5

              sm:px-6
              sm:py-5
            "
          >
            {/* Eyebrow */}
            <div>
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
                MATERIALITY BOUNDARY
              </span>
            </div>

            {/* Description */}
            <p
              className="
                mt-2
                font-['IBM_Plex_Sans']
                text-[13px]
                font-normal
                leading-6
                text-violet-50/80

                sm:text-[14px]
              "
            >
              Materiality is a governed product concept. The methodology
              explains its states; it does not invent a formula or imply that
              every source update is material.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   MONITORING ROW
=============================================================== */

function MonitoringRow({
  label,
  description,
  index,
  isLast,
}: {
  label: string;
  description: string;
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -18,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        grid
        grid-cols-1
        gap-3
        py-4

        md:grid-cols-[160px_minmax(0,1fr)]
        md:items-center
        md:gap-6

        ${!isLast ? "border-b border-slate-900/10" : ""}
      `}
    >
      {/* State label */}
      <div className="flex items-start md:items-center">
        <span
          className="
            inline-flex
            min-h-[24px]
            items-center
            justify-center
            rounded-md
            bg-indigo-500/10
            px-3
            py-1

            font-['IBM_Plex_Sans']
            text-[10px]
            font-bold
            leading-4
            tracking-[0.04em]
            text-indigo-500

            sm:text-[11px]
          "
        >
          {label}
        </span>
      </div>

      {/* Description */}
      <p
        className="
          font-['IBM_Plex_Sans']
          text-[14px]
          font-normal
          leading-6
          text-slate-700

          sm:text-[15px]

          lg:text-[16px]
        "
      >
        {description}
      </p>
    </motion.div>
  );
}