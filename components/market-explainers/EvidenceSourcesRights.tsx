"use client";

import { motion } from "framer-motion";

const evidenceItems = [
  {
    title: "Source identity",
    description:
      "Named organization, publisher, issuer, regulator, central bank, or governed provider — never “web source.”",
  },
  {
    title: "Source class",
    description:
      "Primary, official, licensed, institutional, or other governed classification where supported.",
  },
  {
    title: "Original title",
    description: "Human-readable source title.",
  },
  {
    title: "Publication date/time",
    description: "Explicit, with timezone where material.",
  },
  {
    title: "Effective / reference period",
    description:
      "Separate from publication timing where meaning differs.",
  },
  {
    title: "Jurisdiction",
    description: "Exposed when materially relevant.",
  },
  {
    title: "Version / supersession",
    description:
      "Shown when a document has been revised or replaced.",
  },
  {
    title: "Evidence relationship",
    description:
      "Explains why the source defines, supports, updates, contradicts, or contextualizes the concept.",
  },
  {
    title: "Open source",
    description:
      "Deep link or governed viewer route when rights allow.",
  },
  {
    title: "Rights / access state",
    description:
      "Never exposes restricted content beyond permitted use.",
  },
];

export default function EvidenceSourcesRights() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-violet-50
        text-slate-900
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-6
          py-20

          sm:px-8
          sm:py-24

          lg:px-0
          lg:py-[96px]
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
            amount: 0.2,
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
              text-yellow-600
            "
          >
            EVIDENCE, SOURCES &amp; RIGHTS
          </div>

          {/* Heading */}

          <h2
            className="
              max-w-[780px]
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
            Every explainer cites evidence. No
            <br className="hidden sm:block" />
            explainer leaks it.
          </h2>

          {/* Description */}

          <p
            className="
              max-w-[800px]
              pt-5
              pb-10
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-7
              text-gray-600
            "
          >
            Direct answers are never mistaken for the underlying evidence,
            and restricted source text stays out of snippets, previews, and
            structured data.
          </p>
        </motion.div>

        {/* =====================================================
            EVIDENCE LIST
        ===================================================== */}

        <div className="w-full">
          {evidenceItems.map((item, index) => (
            <motion.div
              key={item.title}
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
                amount: 0.12,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                grid
                w-full
                grid-cols-1
                gap-2
                border-b
                border-slate-900/10
                py-4

                lg:grid-cols-[288px_minmax(0,1fr)]
                lg:items-start
                lg:gap-4
              "
            >
              {/* =================================================
                  LABEL
              ================================================= */}

              <div
                className="
                  min-w-0
                  font-['IBM_Plex_Sans']
                  text-base
                  font-semibold
                  leading-6
                  text-slate-900
                "
              >
                {item.title}
              </div>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <div
                className="
                  min-w-0
                  font-['IBM_Plex_Sans']
                  text-sm
                  font-normal
                  leading-6
                  text-gray-600
                "
              >
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}