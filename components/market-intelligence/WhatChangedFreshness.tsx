"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type FreshnessItem = {
  label: string;
  description: string;
  note: string;
  labelClass: string;
  badgeClass: string;
};

const freshnessItems: FreshnessItem[] = [
  {
    label: "PUBLISHED",
    description: "First public release of the research item.",
    note: "Immutable original publish date",
    labelClass: "text-gray-600",
    badgeClass: "bg-gray-600/10",
  },
  {
    label: "MATERIALLY UPDATED",
    description: "Analysis, evidence, or conclusion changed.",
    note: "Original + updated date shown",
    labelClass: "text-indigo-500",
    badgeClass: "bg-indigo-500/10",
  },
  {
    label: "CORRECTED",
    description: "A material factual correction was made.",
    note: "Transparent correction note",
    labelClass: "text-pink-800",
    badgeClass: "bg-pink-800/10",
  },
  {
    label: "REVIEWED",
    description: "An intentional editorial review occurred.",
    note: "Shown only if policy defines the event",
    labelClass: "text-gray-600",
    badgeClass: "bg-gray-600/10",
  },
  {
    label: "ARCHIVED",
    description: "Retained for historical value, not current.",
    note: "Clear archived state, no current claim",
    labelClass: "text-yellow-600",
    badgeClass: "bg-yellow-600/10",
  },
  {
    label: "RETRACTED",
    description: "Withdrawn under editorial or legal policy.",
    note: "Transparent state and reason preserved",
    labelClass: "text-pink-800",
    badgeClass: "bg-pink-800/10",
  },
];

function FreshnessRow({
  item,
  index,
}: {
  item: FreshnessItem;
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.055,
        ease: "easeOut",
      }}
      className="
        flex
        w-full
        flex-col
        gap-3
        border-b
        border-slate-900/10
        py-4
        font-['IBM_Plex_Sans']
        lg:flex-row
        lg:items-center
        lg:justify-between
        lg:gap-8
      "
    >
      {/* Left side */}
      <div
        className="
          flex
          min-w-0
          flex-col
          items-start
          gap-3
          sm:flex-row
          sm:items-center
        "
      >
        {/* Status badge */}
        <span
          className={`
            inline-flex
            shrink-0
            rounded-md
            px-2.5
            py-1
            text-xs
            font-bold
            leading-4
            ${item.badgeClass}
            ${item.labelClass}
          `}
        >
          {item.label}
        </span>

        {/* Description */}
        <p
          className="
            text-sm
            font-medium
            leading-6
            text-slate-900
            sm:text-base
          "
        >
          {item.description}
        </p>
      </div>

      {/* Right note */}
      <p
        className="
          shrink-0
          text-xs
          font-normal
          leading-5
          text-gray-600
          lg:max-w-[290px]
          lg:text-right
        "
      >
        {item.note}
      </p>
    </motion.div>
  );
}

export default function WhatChangedFreshness() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /*
   * Subtle scroll-driven movement.
   * Keeps the Figma layout intact while adding depth.
   */
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [28, -24]
  );

  const cardY = useTransform(
    scrollYProgress,
    [0, 1],
    [18, -14]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-violet-50
      "
    >
      {/* =========================================================
          SUBTLE BACKGROUND RADIAL
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background:
            "radial-gradient(circle at 10% 0%, rgba(99,102,241,0.07) 0%, rgba(99,102,241,0) 52%)",
        }}
      />

      {/* =========================================================
          MAIN CONTENT
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

          <motion.div
            initial={{
              opacity: 0,
              y: 14,
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
              text-indigo-500
            "
          >
            WHAT CHANGED / FRESHNESS ARCHITECTURE
          </motion.div>

          {/* =====================================================
              HEADING
          ====================================================== */}

          <motion.h2
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
              duration: 0.55,
              delay: 0.05,
              ease: "easeOut",
            }}
            className="
              mt-3
              max-w-[780px]
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
            Current, not cosmetically fresh.
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
              duration: 0.55,
              delay: 0.1,
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
            Published, updated, corrected, and archived states reflect real
            editorial events only — never an automatic timestamp bump used as
            an SEO tactic.
          </motion.p>

          {/* =====================================================
              STATUS CARD
          ====================================================== */}

          <motion.div
            style={{ y: cardY }}
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.99,
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
              delay: 0.12,
              ease: "easeOut",
            }}
            className="
              mt-7
              w-full
              rounded-2xl
              border
              border-slate-900/10
              bg-white
              px-5
              pt-5
              pb-2
              sm:px-7
              sm:pt-7
              lg:mt-7
              lg:px-7
              lg:pt-9
            "
          >
            {freshnessItems.map((item, index) => (
              <FreshnessRow
                key={item.label}
                item={item}
                index={index}
              />
            ))}
          </motion.div>

          {/* =====================================================
              FOOTNOTE
          ====================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 14,
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
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="
              mt-3
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-gray-600
            "
          >
            Typography fixes, link cleanup, metadata edits, and image changes
            are never classified as material research updates.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}