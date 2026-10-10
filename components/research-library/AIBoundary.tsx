"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const boundaryItems = [
  {
    positive: "Query interpretation and synonym assistance",
    negative: "Creating nonexistent research items",
  },
  {
    positive: "Result summarization grounded to visible items",
    negative: "Inventing authors, sources, dates, or citations",
  },
  {
    positive: "Answering “what’s in the library” from the real index",
    negative: "Claiming exhaustive coverage beyond what’s indexed",
  },
  {
    positive: "Suggesting broader search terms on no results",
    negative: "Generating substitute research to fill the gap",
  },
  {
    positive: "Discovery enhancement over the approved index",
    negative: "Becoming the source of truth for inventory",
  },
  {
    positive: "Cross-item comparison in a grounded experience",
    negative: "Blending distinct research positions without provenance",
  },
];

export default function AIBoundary() {
  return (
    <section className="w-full overflow-hidden bg-violet-50">
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          py-16
          sm:px-7
          sm:py-20
          lg:px-8
          lg:py-[95.62px]
          xl:px-0
        "
      >
        {/* ============================================================
            HEADER
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full"
        >
          {/* EYEBROW */}

          <div className="w-full">
            <span
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                leading-4
                tracking-[0.08em]
                text-yellow-600
              "
            >
              AI Boundary
            </span>
          </div>

          {/* HEADING */}

          <div className="w-full max-w-[1000px] pt-3">
            <h2
              className="
                font-['IBM_Plex_Sans']
                text-[38px]
                font-bold
                leading-[1.08]
                tracking-[-0.025em]
                text-slate-900
                sm:text-[44px]
                sm:leading-[48.72px]
                lg:text-5xl
              "
            >
              AI may help you search the library. It
              <br className="hidden sm:block" />
              cannot invent what&apos;s in it.
            </h2>
          </div>
        </motion.div>

        {/* ============================================================
            CARDS + IMAGE
        ============================================================ */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-2
            lg:gap-5
            xl:grid-cols-4
          "
        >
          {/* ==========================================================
              CARD 1
          ========================================================== */}

          <BoundaryCard
            positive="Query interpretation and synonym assistance"
            negative="Creating nonexistent research items"
            index={0}
          />

          {/* ==========================================================
              CARD 2
          ========================================================== */}

          <BoundaryCard
            positive="Result summarization grounded to visible items"
            negative="Inventing authors, sources, dates, or citations"
            index={1}
          />

          {/* ==========================================================
              CARD 3
          ========================================================== */}

          <BoundaryCard
            positive="Answering “what’s in the library” from the real index"
            negative="Claiming exhaustive coverage beyond what’s indexed"
            index={2}
          />

          {/* ==========================================================
              IMAGE
          ========================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
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
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              order-first
              h-[280px]
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-slate-900/10
              bg-white
              sm:order-none
              sm:col-span-2
              lg:col-span-2
              lg:h-[320px]
              xl:col-span-1
              xl:row-span-2
              xl:h-full
              xl:min-h-[380px]
            "
          >
            <Image
              src="/images/research/research-library/image4.png"
              alt="Research collaboration"
              fill
              priority
              sizes="320px"
              className="
                object-cover
                object-center
                transition-transform
                duration-700
                ease-out
                hover:scale-[1.03]
              "
            />
          </motion.div>

          {/* ==========================================================
              CARD 4
          ========================================================== */}

          <BoundaryCard
            positive="Suggesting broader search terms on no results"
            negative="Generating substitute research to fill the gap"
            index={3}
          />

          {/* ==========================================================
              CARD 5
          ========================================================== */}

          <BoundaryCard
            positive="Discovery enhancement over the approved index"
            negative="Becoming the source of truth for inventory"
            index={4}
          />

          {/* ==========================================================
              CARD 6
          ========================================================== */}

          <BoundaryCard
            positive="Cross-item comparison in a grounded experience"
            negative="Blending distinct research positions without provenance"
            index={5}
          />
        </div>

        {/* ============================================================
            BASELINE STATEMENT
        ============================================================ */}

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
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-full
            max-w-[780px]
            pt-8
          "
        >
          <p
            className="
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-gray-600
            "
          >
            The library stays fully useful when AI is absent — accessible
            text search and category browse are the baseline, not the
            enhancement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================================================================
   BOUNDARY CARD
================================================================== */

type BoundaryCardProps = {
  positive: string;
  negative: string;
  index: number;
};

function BoundaryCard({
  positive,
  negative,
  index,
}: BoundaryCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
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
        duration: 0.55,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex
        min-h-[170px]
        w-full
        flex-col
        gap-3.5
        rounded-2xl
        border
        border-slate-900/10
        bg-white
        p-6
        transition-transform
        duration-300
        hover:-translate-y-1
      "
    >
      {/* POSITIVE */}

      <div className="flex w-full items-start gap-2.5">
        <span
          aria-hidden="true"
          className="
            shrink-0
            pt-[2px]
            text-sm
            font-bold
            leading-5
            text-indigo-500
          "
        >
          ✓
        </span>

        <p
          className="
            pr-1
            font-['IBM_Plex_Sans']
            text-base
            font-semibold
            leading-6
            text-slate-900
          "
        >
          {positive}
        </p>
      </div>

      {/* NEGATIVE */}

      <div className="flex w-full items-start gap-2.5">
        <span
          aria-hidden="true"
          className="
            shrink-0
            pt-[2px]
            text-sm
            font-bold
            leading-5
            text-red-500
          "
        >
          ×
        </span>

        <p
          className="
            font-['IBM_Plex_Sans']
            text-sm
            font-normal
            leading-5
            text-gray-600
          "
        >
          {negative}
        </p>
      </div>
    </motion.article>
  );
}