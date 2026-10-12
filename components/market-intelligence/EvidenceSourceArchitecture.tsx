"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type SourceItem = {
  number: string;
  title: string;
  description: string;
};

const sourceItems: SourceItem[] = [
  {
    number: "01",
    title: "Source identity",
    description:
      "Named institution, issuer, authority, publisher, or governed data source.",
  },
  {
    number: "02",
    title: "Source class",
    description:
      "Primary, official, licensed, institutional, or other governed type.",
  },
  {
    number: "03",
    title: "Original title",
    description:
      "Human-readable source title — never paraphrased into a generic headline.",
  },
  {
    number: "04",
    title: "Published time",
    description:
      "Date/time with timezone where material.",
  },
  {
    number: "05",
    title: "Effective / reporting period",
    description:
      "Kept separate from publication time when it applies to another period.",
  },
  {
    number: "06",
    title: "Market / jurisdiction",
    description:
      "Explicit when meaning can differ across markets or jurisdictions.",
  },
  {
    number: "07",
    title: "Version / supersession",
    description:
      "Revised or superseded relationship shown when material.",
  },
  {
    number: "08",
    title: "Rights / access state",
    description:
      "Respects permitted use and restricted-access behavior.",
  },
  {
    number: "09",
    title: "Evidence relationship",
    description:
      "Supports, contradicts, updates, or contextualizes the analysis.",
  },
  {
    number: "10",
    title: "Open source action",
    description:
      "Deep link or governed viewer where permitted — the source never disappears behind a summary.",
  },
];

function SourceItem({
  item,
  index,
}: {
  item: SourceItem;
  index: number;
}) {
  return (
    <motion.article
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.045,
        ease: "easeOut",
      }}
      className="
        border-b
        border-slate-900/10
        py-3.5
        font-['IBM_Plex_Sans']
      "
    >
      {/* Number + title */}
      <div className="flex items-center gap-2">
        <span
          className="
            shrink-0
            text-xs
            font-bold
            text-yellow-600
          "
        >
          {item.number}
        </span>

        <h3
          className="
            text-base
            font-bold
            leading-6
            text-slate-900
          "
        >
          {item.title}
        </h3>
      </div>

      {/* Description */}
      <p
        className="
          mt-1
          text-xs
          font-normal
          leading-5
          text-gray-600
        "
      >
        {item.description}
      </p>
    </motion.article>
  );
}

export default function EvidenceSourceArchitecture() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [30, -20]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [35, -30]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-white
      "
    >
      {/* =========================================================
          SUBTLE BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 8% 4%, rgba(99,102,241,0.035) 0%, rgba(99,102,241,0) 50%)",
        }}
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1320px]
          px-4
          py-14
          sm:px-6
          sm:py-16
          md:px-8
          lg:px-12
          lg:py-24
          xl:px-16
        "
      >
        <motion.div style={{ y: contentY }}>
          {/* =====================================================
              EYEBROW
          ====================================================== */}

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
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-[0.07em]
              text-yellow-600
            "
          >
            EVIDENCE &amp; SOURCE ARCHITECTURE
          </motion.p>

          {/* =====================================================
              HEADING
          ====================================================== */}

          <motion.h2
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: 0.06,
              ease: "easeOut",
            }}
            className="
              mt-5
              max-w-[1000px]
              font-['IBM_Plex_Sans']
              text-[28px]
              font-bold
              leading-[1.12]
              tracking-[-0.025em]
              text-slate-900
              sm:text-[36px]
              md:text-[42px]
              lg:text-5xl
              lg:leading-[48.72px]
            "
          >
            Don&apos;t just cite. Preserve the path back
            <br className="hidden sm:block" />
            to the evidence.
          </motion.h2>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <motion.p
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: 0.12,
              ease: "easeOut",
            }}
            className="
              mt-5
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-gray-600
              sm:text-base
              sm:leading-7
            "
          >
            Every source panel carries identity, class, timing, period,
            jurisdiction, version, rights, and relationship — never a generic
            &quot;source&quot; label.
          </motion.p>

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}

          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-[minmax(300px,360px)_minmax(0,1fr)]
              xl:grid-cols-[384px_minmax(0,1fr)]
              lg:gap-8
              xl:gap-[98px]
            "
          >
            {/* ===================================================
                IMAGE
            ==================================================== */}

            <motion.div
              style={{ y: imageY }}
              initial={{
                opacity: 0,
                x: -30,
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
                duration: 0.75,
                ease: "easeOut",
              }}
              className="
                relative
                h-[360px]
                w-full
                overflow-hidden
                rounded-2xl
                bg-slate-900
                sm:h-[440px]
                lg:h-[484px]
              "
            >
              <Image
                src="/images/research/market-intelligence/image3.png"
                alt="Evidence and source architecture"
                fill
                sizes="
                  (max-width: 1023px) 100vw,
                  384px
                "
                className="
                  object-cover
                  object-center
                "
              />
            </motion.div>

            {/* ===================================================
                SOURCE DETAILS
            ==================================================== */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                sm:gap-x-8
                lg:gap-x-7
              "
            >
              {sourceItems.map((item, index) => (
                <SourceItem
                  key={item.number}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}