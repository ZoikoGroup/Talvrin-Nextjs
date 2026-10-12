"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const provenanceCards = [
  {
    positive: "Discover, organize, and compare evidence",
    negative: "Become the authoritative evidence source",
  },
  {
    positive: "Summarize content grounded to visible sources",
    negative: "Silently replace editorial accountability",
  },
  {
    positive: "Help a user compare grounded concepts",
    negative: "Blend distinct evidence without provenance",
  },
  {
    positive: "Assist drafting under editorial review",
    negative: "Publish without named editorial ownership",
  },
];

export default function AIEditorialProvenance() {
  return (
    <section className="w-full overflow-hidden bg-white text-slate-900">
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
              text-indigo-500
            "
          >
            AI &amp; EDITORIAL PROVENANCE
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
            AI may help you explore a concept. It
            <br className="hidden sm:block" />
            cannot become the evidence.
          </h2>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div
          className="
            mt-12
            grid
            w-full
            grid-cols-1
            gap-8
            lg:grid-cols-2
            lg:gap-6
            xl:grid-cols-[minmax(0,630px)_minmax(0,630px)]
            xl:gap-5
          "
        >
          {/* =================================================
              LEFT — 2 × 2 CARDS
          ================================================= */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-1
              xl:grid-cols-2
            "
          >
            {provenanceCards.map((card, index) => (
              <motion.article
                key={card.positive}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  flex
                  min-h-[154px]
                  w-full
                  flex-col
                  gap-3.5
                  rounded-2xl
                  border
                  border-slate-900/10
                  bg-violet-50
                  p-6
                "
              >
                {/* Positive */}

                <div
                  className="
                    flex
                    w-full
                    items-start
                    gap-2.5
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      shrink-0
                      pt-[2.8px]
                      font-['Segoe_UI_Symbol']
                      text-sm
                      leading-5
                      text-indigo-500
                    "
                  >
                    ✓
                  </span>

                  <p
                    className="
                      min-w-0
                      font-['IBM_Plex_Sans']
                      text-sm
                      font-semibold
                      leading-5
                      text-slate-900

                      sm:text-base
                      sm:leading-6
                    "
                  >
                    {card.positive}
                  </p>
                </div>

                {/* Negative */}

                <div
                  className="
                    flex
                    w-full
                    items-start
                    gap-2.5
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      shrink-0
                      pt-[2.8px]
                      font-['Segoe_UI_Symbol']
                      text-sm
                      leading-5
                      text-pink-800
                    "
                  >
                    ✕
                  </span>

                  <p
                    className="
                      min-w-0
                      font-['IBM_Plex_Sans']
                      text-sm
                      font-normal
                      leading-5
                      text-gray-600
                    "
                  >
                    {card.negative}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* =================================================
              RIGHT — IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[260px]
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-slate-900/10
              bg-violet-50
              sm:min-h-[300px]
              lg:h-full
              lg:min-h-[320px]
              xl:h-[320px]
            "
          >
            <Image
              src="/images/research/market-explainers/image4.png"
              alt="Editorial review and AI-assisted research"
              fill
              sizes="(max-width: 1023px) 100vw, 630px"
              className="
                object-cover
                object-center
              "
            />
          </motion.div>
        </div>

        {/* =====================================================
            FOOTNOTE
        ===================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
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
            delay: 0.2,
          }}
          className="
            max-w-[780px]
            pt-4
            font-['IBM_Plex_Sans']
            text-sm
            font-normal
            leading-6
            text-gray-600
          "
        >
          Source evidence, Talvrin&apos;s explanation, and any AI contribution
          stay visually and semantically distinguishable on every explainer —
          never silently blended.
        </motion.p>
      </div>
    </section>
  );
}