"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const layers = [
  {
    number: "01",
    title: "Direct answer",
    description:
      "A plain-English explanation that remains accurate out of context.",
  },
  {
    number: "02",
    title: "Why it matters",
    description:
      "The practical research relevance — without telling the user what action to take.",
  },
  {
    number: "03",
    title: "How it works",
    description:
      "Mechanism, actors, sequence, and relationships.",
  },
  {
    number: "04",
    title: "Example / scenario",
    description:
      "Illustrative, clearly labeled, and never a prediction or recommendation.",
  },
  {
    number: "05",
    title: "What can change the interpretation",
    description:
      "Context, jurisdiction, timing, regime, source revisions, or limitations.",
  },
  {
    number: "06",
    title: "Evidence and sources",
    description:
      "Primary or high-authority sources, inspectable where rights allow.",
  },
  {
    number: "07",
    title: "Related concepts",
    description:
      "Purposeful next concepts, not engagement bait.",
  },
  {
    number: "08",
    title: "Research handoff",
    description:
      "Links to deeper Talvrin research only where routes are approved.",
  },
];

export default function HowExplainerIsStructured() {
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
          lg:py-[95.65px]
          xl:px-0
        "
      >
        {/* =====================================================
            SECTION HEADER
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
            amount: 0.25,
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
            HOW AN EXPLAINER IS STRUCTURED
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
            A direct answer first. The mechanism,
            <br className="hidden sm:block" />
            context, and evidence right behind it.
          </h2>

          {/* Description */}

          <p
            className="
              max-w-[800px]
              pt-2
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-7
              text-gray-600
            "
          >
            Every explainer follows the same eight-layer anatomy below, never
            a dense wall of undifferentiated text.
          </p>
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
            items-start
            gap-8
            lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]
            lg:gap-8
            xl:grid-cols-[minmax(0,460px)_minmax(0,761px)]
            xl:gap-[59px]
          "
        >
          {/* =================================================
              LEFT IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              h-[320px]
              w-full
              overflow-hidden
              rounded-2xl
              bg-slate-900
              sm:h-[400px]
              lg:h-[384px]
              lg:w-full
              xl:w-[460px]
            "
          >
            <Image
              src="/images/research/market-explainers/image2.png"
              alt="Research explainer"
              fill
              sizes="(max-width: 1023px) 100vw, 460px"
              className="
                object-cover
                object-center
              "
            />
          </motion.div>

          {/* =================================================
              RIGHT — EIGHT LAYERS
          ================================================= */}

          <div className="flex w-full flex-col">
            {layers.map((layer, index) => (
              <motion.article
                key={layer.number}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-1
                  border-b
                  border-slate-900/10
                  py-3.5

                  ${
                    layer.number === "03" || layer.number === "07"
                      ? "pb-8"
                      : ""
                  }
                `}
              >
                {/* Number + title */}

                <div
                  className="
                    flex
                    w-full
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      shrink-0
                      font-['IBM_Plex_Sans']
                      text-xs
                      font-bold
                      leading-5
                      text-yellow-600
                    "
                  >
                    {layer.number}
                  </span>

                  <h3
                    className="
                      font-['IBM_Plex_Sans']
                      text-base
                      font-bold
                      leading-5
                      text-slate-900
                    "
                  >
                    {layer.title}
                  </h3>
                </div>

                {/* Description */}

                <p
                  className="
                    w-full
                    pb-[0.55px]
                    font-['IBM_Plex_Sans']
                    text-xs
                    font-normal
                    leading-5
                    text-gray-600
                  "
                >
                  {layer.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}