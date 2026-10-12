"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const layers = [
  {
    title: "Source evidence",
    description:
      "External or governed source; authority depends on source/context.",
    label: (
      <>
        Source / Official source /
        <br />
        Licensed source
      </>
    ),
  },
  {
    title: "Talvrin normalization",
    description:
      "Talvrin structured representation of source material.",
    label: (
      <>
        Normalized / structured by
        <br />
        Talvrin
      </>
    ),
  },
  {
    title: "Talvrin analysis",
    description:
      "Talvrin-authored or product-generated interpretation.",
    label: (
      <>
        Talvrin analysis /
        <br />
        interpretation
      </>
    ),
  },
  {
    title: "AI-assisted output",
    description:
      "Model-assisted content under Talvrin policy controls.",
    label: (
      <>
        AI-assisted; evidence links
        <br />
        remain visible
      </>
    ),
  },
];

export default function InterpretationLayers() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        text-slate-900
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
          lg:py-[96px]
          xl:px-20
        "
      >
        <div className="mx-auto w-full max-w-[1280px]">
          {/* =====================================================
              HEADER
          ===================================================== */}

          <motion.div
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
                INTERPRETATION LAYERS
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-3
                max-w-[760px]
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
              Source, normalization, analysis, AI
              <br className="hidden sm:block" />
              and notes stay visually distinct.
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[800px]
                font-['IBM_Plex_Sans']
                text-[15px]
                font-normal
                leading-7
                text-gray-600

                sm:text-[16px]
              "
            >
              Every layer carries its own ownership and its own required
              label — never styled as if it were the source itself.
            </p>
          </motion.div>

          {/* =====================================================
              LAYERS GRID
          ===================================================== */}

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:mt-[76px]
              lg:grid-cols-3
              xl:grid-cols-5
              xl:gap-[16px]
            "
          >
            {/* Four interpretation cards */}
            {layers.map((layer, index) => (
              <InterpretationCard
                key={layer.title}
                title={layer.title}
                description={layer.description}
                label={layer.label}
                index={index}
              />
            ))}

            {/* =================================================
                IMAGE CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.97,
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
                duration: 0.7,
                delay: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                h-full
                min-h-[246px]
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-slate-900/10
                bg-violet-50
                sm:min-h-[246px]
                lg:h-full
                lg:min-h-[246px]
                xl:h-[246px]
              "
            >
              <Image
                src="/images/research/talvrin-methodology/image1.png"
                alt="Talvrin research interpretation layers"
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 240px"
                className="
                  object-cover
                  object-center
                "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   INTERPRETATION CARD
=============================================================== */

function InterpretationCard({
  title,
  description,
  label,
  index,
}: {
  title: string;
  description: string;
  label: React.ReactNode;
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
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
        h-full
        min-h-[246px]
        w-full
        flex-col
        rounded-2xl
        border
        border-slate-900/10
        bg-violet-50
        p-5
        font-['IBM_Plex_Sans']
      "
    >
      {/* Title */}
      <h3
        className="
          text-[15px]
          font-bold
          leading-5
          text-slate-900

          sm:text-[16px]
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-2.5
          text-[13px]
          font-normal
          leading-5
          text-gray-600

          sm:text-[14px]
        "
      >
        {description}
      </p>

      {/* Label */}
      <div className="mt-auto pt-4">
        <div
          className="
            inline-flex
            max-w-full
            rounded-full
            bg-indigo-500/10
            px-2.5
            py-1.5
          "
        >
          <span
            className="
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
      </div>
    </motion.article>
  );
}