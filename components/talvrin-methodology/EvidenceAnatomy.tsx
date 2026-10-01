"use client";

import { motion } from "framer-motion";

const evidenceFields = [
  {
    label: "Source identity",
    description:
      'Name the organization, publisher, issuer, regulator, central bank, exchange, or other governed source; never use only "web source."',
  },
  {
    label: "Source class",
    description:
      "Primary / official / licensed / institutional / other governed classification only where supported by the source registry.",
  },
  {
    label: "Original title",
    description:
      "Preserve human-readable source title or document/event name.",
  },
  {
    label: "Publication time",
    description:
      "Display with timezone where material.",
  },
  {
    label: "Effective / reference period",
    description:
      "Separate from publication time when the fact applies to a different period.",
  },
  {
    label: "Jurisdiction / market",
    description:
      "Expose when legally, economically, or market-structurally relevant.",
  },
  {
    label: "Version / supersession",
    description:
      "Identify revision, replacement, withdrawal, or supersession where supported.",
  },
  {
    label: "Rights / access state",
    description:
      "Respect licensing, entitlement, redistribution, and permitted-use rules.",
  },
  {
    label: "Evidence relationship",
    description:
      "Explain whether the evidence supports, contradicts, updates, or contextualizes the research object.",
  },
  {
    label: "Open source action",
    description:
      "Deep link or governed viewer route when permitted; do not fabricate endpoints.",
  },
];

export default function EvidenceAnatomy() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#F6F5FF]
        text-slate-900
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1439.8px]
          px-6
          py-16

          sm:px-8
          sm:py-20

          lg:px-20
          lg:py-[96px]
        "
      >
        <div className="mx-auto w-full max-w-[1280px]">
          {/* =====================================================
              SECTION INTRO
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
                  text-[#D9A400]
                "
              >
                EVIDENCE ANATOMY
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-3
                max-w-[740px]
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
              Every piece of evidence carries the
              <br className="hidden sm:block" />
              same fields.
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[760px]
                font-['IBM_Plex_Sans']
                text-[15px]
                font-normal
                leading-7
                text-gray-600

                sm:text-[16px]
              "
            >
              Provenance and context fields are preserved on every record —
              never inferred, never invented.
            </p>
          </motion.div>

          {/* =====================================================
              EVIDENCE FIELDS
          ===================================================== */}

          <div className="mt-10 lg:mt-[40px]">
            {evidenceFields.map((field, index) => (
              <EvidenceRow
                key={field.label}
                label={field.label}
                description={field.description}
                index={index}
              />
            ))}
          </div>

          {/* =====================================================
              NO SCORE INVENTION
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-8
              w-full
              rounded-2xl
              bg-slate-900
              px-6
              py-6

              sm:px-7
              sm:py-6
            "
          >
            {/* Label */}
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
                NO SCORE INVENTION
              </span>
            </div>

            {/* Description */}
            <p
              className="
                mt-2.5
                max-w-[1180px]
                font-['IBM_Plex_Sans']
                text-[14px]
                font-normal
                leading-6
                text-violet-50/90

                sm:text-[15px]

                lg:text-[16px]
              "
            >
              The methodology does not manufacture a numerical confidence
              score, source-quality score, reliability percentage or fixed
              weighting model. A future governed scoring model would require
              its own approved methodology contract before exposure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   EVIDENCE ROW
=============================================================== */

function EvidenceRow({
  label,
  description,
  index,
}: {
  label: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.045,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        grid
        grid-cols-1
        gap-2
        border-b
        border-slate-900/10
        py-4

        md:grid-cols-[224px_minmax(0,1fr)]
        md:items-start
        md:gap-4
      "
    >
      {/* Label */}
      <div>
        <h3
          className="
            font-['IBM_Plex_Sans']
            text-[15px]
            font-semibold
            leading-6
            text-slate-900

            sm:text-[16px]
          "
        >
          {label}
        </h3>
      </div>

      {/* Description */}
      <div>
        <p
          className="
            font-['IBM_Plex_Sans']
            text-[13px]
            font-normal
            leading-5
            text-gray-600

            sm:text-[14px]
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}