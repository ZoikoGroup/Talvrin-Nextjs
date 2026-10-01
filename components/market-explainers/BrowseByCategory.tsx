"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Market Structure",
    description:
      "How markets, venues, instruments, liquidity, pricing, settlement, and participants interact.",
    note: "Does not imply support for every venue or instrument.",
  },
  {
    title: "Fixed Income",
    description:
      "Concepts around bonds, yields, curves, duration, issuance, sovereign and credit mechanics.",
    note: "Avoids performance or trade recommendations.",
  },
  {
    title: "Central Banks",
    description:
      "Mandates, policy tools, communications, transmission, balance sheets, and decision frameworks.",
    note: "Separates official source facts from Talvrin explanation.",
  },
  {
    title: "Companies & Filings",
    description:
      "Financial reporting, filings, corporate actions, disclosure concepts, and source interpretation.",
    note: "Does not provide issuer-specific recommendation logic.",
  },
  {
    title: "Regulation & Policy",
    description:
      "Rules, policy processes, consultations, effective dates, and institutional context.",
    note: "Not legal advice; avoids user-specific applicability conclusions.",
  },
  {
    title: "Methodology",
    description:
      "How research, evidence, normalization, classification, and monitoring are handled.",
    note: "Links to Talvrin Methodology when available.",
  },
  {
    title: "Evidence & Data",
    description:
      "Source authority, provenance, revisions, timestamps, rights, and data concepts.",
    note: "Explains rights and limitations without exposing restricted data.",
  },
  {
    title: "Macro",
    description:
      "Inflation, growth, labor, fiscal, currency, and economic relationships.",
    note: "States context, time period, and jurisdiction where material.",
  },
];

export default function BrowseByCategory() {
  return (
    <section className="w-full overflow-hidden bg-white text-slate-900">
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
            BROWSE BY CATEGORY
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
            Eight governed topic families.
          </h2>

          {/* Description */}

          <p
            className="
              max-w-[780px]
              pt-2
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-7
              text-gray-600
            "
          >
            Categories are editorial topic families, not a claim of live
            market, jurisdiction, or product coverage.
            <br className="hidden sm:block" />
            Unsupported or empty categories stay hidden rather than published
            as placeholders.
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP GRID

            ┌─────────┬─────────┬─────────┬─────────┬─────────┐
            │ CARD 1  │ CARD 2  │ CARD 3  │ CARD 4  │  IMAGE  │
            ├─────────┼─────────┼─────────┼─────────┤  IMAGE  │
            │ CARD 5  │ CARD 6  │ CARD 7  │ CARD 8  │  IMAGE  │
            └─────────┴─────────┴─────────┴─────────┴─────────┘
        ===================================================== */}

        <div
          className="
            mt-12
            grid
            w-full
            grid-cols-1
            gap-4

            sm:grid-cols-2

            lg:grid-cols-4

            xl:grid-cols-[repeat(4,minmax(0,1fr))_240px]
            xl:grid-rows-[220px_220px]
          "
        >
          {/* =================================================
              IMAGE

              IMPORTANT:
              Explicitly placed in column 5
              and spans both rows.
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
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
              min-h-[420px]
              overflow-hidden
              rounded-2xl
              border
              border-slate-900/10
              bg-violet-50

              sm:col-span-2

              lg:col-span-2

              xl:col-span-1
              xl:col-start-5
              xl:row-span-2
              xl:row-start-1
              xl:min-h-0
            "
          >
            <Image
              src="/images/research/market-explainers/image.png"
              alt="Talvrin research discussion"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 240px"
              className="
                object-cover
                object-center
              "
            />
          </motion.div>

          {/* =================================================
              CARDS
          ================================================= */}

          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              note={category.note}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CATEGORY CARD
============================================================ */

type CategoryCardProps = {
  title: string;
  description: string;
  note: string;
  index: number;
};

function CategoryCard({
  title,
  description,
  note,
  index,
}: CategoryCardProps) {
  return (
    <motion.article
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
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex
        min-h-[220px]
        w-full
        flex-col
        rounded-2xl
        border
        border-slate-900/10
        bg-violet-50
        p-6
      "
    >
      {/* Title */}

      <h3
        className="
          font-['IBM_Plex_Sans']
          text-base
          font-bold
          leading-5
          text-slate-900
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-2.5
          font-['IBM_Plex_Sans']
          text-sm
          font-normal
          leading-5
          text-gray-600
        "
      >
        {description}
      </p>

      {/* Note */}

      <div
        className="
          mt-auto
          border-t
          border-slate-900/10
          pt-3
        "
      >
        <p
          className="
            font-['IBM_Plex_Sans']
            text-xs
            font-normal
            leading-4
            text-yellow-600
          "
        >
          {note}
        </p>
      </div>
    </motion.article>
  );
}