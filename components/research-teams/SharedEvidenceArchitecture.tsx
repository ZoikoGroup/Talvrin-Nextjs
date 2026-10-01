"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* =========================================================
   ANIMATION
========================================================= */

const smoothEase: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

/* =========================================================
   ARCHITECTURE LAYERS
========================================================= */

const architectureLayers = [
  {
    title: (
      <>
        Authoritative / primary
        <br />
        source
      </>
    ),

    description: (
      <>
        Common factual reference
        <br />
        point for the team.
      </>
    ),

    badge: (
      <>
        Rights and version state
        <br />
        visible
      </>
    ),
  },

  {
    title: "Talvrin normalization",

    description: (
      <>
        Consistent structure applied for
        <br />
        research.
      </>
    ),

    badge: (
      <>
        Always distinguished from
        <br />
        source material
      </>
    ),
  },

  {
    title: (
      <>
        Human analysis / research
        <br />
        view
      </>
    ),

    description: "Preserved team reasoning.",

    badge: (
      <>
        Attribution shown only if
        <br />
        capability exists
      </>
    ),
  },

  {
    title: "AI-assisted interpretation",

    description: (
      <>
        Accelerates comparison,
        <br />
        summarization, and change
        <br />
        identification.
      </>
    ),

    badge: (
      <>
        Never authoritative; source
        <br />
        independently inspectable
      </>
    ),
  },

  {
    title: "User / team notes",

    description: (
      <>
        Context and reasoning created
        <br />
        by users.
      </>
    ),

    badge: (
      <>
        Sharing / ownership
        <br />
        mechanics not invented
      </>
    ),
  },
];

/* =========================================================
   EVIDENCE DETAILS
========================================================= */

const evidenceDetails = [
  {
    title: "Source identity",

    description: (
      <>
        Named organization, publisher, issuer, regulator, or
        <br className="hidden xl:block" />
        exchange; never a generic &quot;web source.&quot;
      </>
    ),
  },

  {
    title: "Source class",

    description: (
      <>
        Primary / official / licensed / institutional / other
        <br className="hidden xl:block" />
        governed classification only.
      </>
    ),
  },

  {
    title: "Original title",

    description: (
      <>
        Human-readable source title or document/event
        <br className="hidden xl:block" />
        name preserved.
      </>
    ),
  },

  {
    title: "Publication time",

    description: "Displayed with timezone where material.",
  },

  {
    title: "Effective / reference period",

    description: (
      <>
        Separate from publication time when the fact
        <br className="hidden xl:block" />
        applies to a different period.
      </>
    ),
  },

  {
    title: "Jurisdiction",

    description: (
      <>
        Explicit when legally, economically, or market-
        <br className="hidden xl:block" />
        structurally relevant.
      </>
    ),
  },

  {
    title: "Version / supersession",

    description: (
      <>
        Revision, replacement, or supersession identified
        <br className="hidden xl:block" />
        where supported.
      </>
    ),
  },

  {
    title: "Rights / access state",

    description: (
      <>
        Respects licensing, entitlement, and permitted-use
        <br className="hidden xl:block" />
        rules — never exposes restricted content.
      </>
    ),
  },

  {
    title: "Evidence relationship",

    description: (
      <>
        Explains whether the evidence supports,
        <br className="hidden xl:block" />
        contradicts, updates, or contextualizes the object.
      </>
    ),
  },

  {
    title: "Open source action",

    description: (
      <>
        Deep link or governed viewer route where
        <br className="hidden xl:block" />
        permitted; never a fabricated endpoint.
      </>
    ),
  },
];

/* =========================================================
   ARCHITECTURE CARD
========================================================= */

type ArchitectureCardProps = {
  title: ReactNode;
  description: ReactNode;
  badge: ReactNode;
  index: number;
};

function ArchitectureCard({
  title,
  description,
  badge,
  index,
}: ArchitectureCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        delay: index * 0.06,
      }}
      className="
        w-full
        h-[214px]
        p-5
        bg-white
        rounded-2xl
        border
        border-slate-900/10
        flex
        flex-col
        items-start
      "
    >
      {/* TITLE */}

      <div
        className="
          w-full
          text-slate-900
          text-base
          font-bold
          font-['IBM_Plex_Sans']
          leading-5
        "
      >
        {title}
      </div>

      {/* DESCRIPTION */}

      <div
        className="
          w-full
          mt-2.5
          text-gray-600
          text-sm
          font-normal
          font-['IBM_Plex_Sans']
          leading-5
        "
      >
        {description}
      </div>

      {/* BADGE */}

      <div
        className="
          mt-auto
          max-w-full
          pl-2.5
          pr-5
          pt-1.5
          pb-1
          bg-indigo-500/10
          rounded-[999px]
          inline-flex
          items-start
        "
      >
        <div
          className="
            text-indigo-500
            text-xs
            font-bold
            font-['IBM_Plex_Sans']
            tracking-tight
            leading-4
          "
        >
          {badge}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   EVIDENCE ITEM
========================================================= */

type EvidenceItemProps = {
  title: string;
  description: ReactNode;
  index: number;
};

function EvidenceItem({
  title,
  description,
  index,
}: EvidenceItemProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        delay: index * 0.045,
      }}
      className="
        w-full
        min-w-0
        py-3.5
        border-b-[0.8px]
        border-slate-900/10
        flex
        flex-col
        items-start
        gap-[3.45px]
      "
    >
      {/* TITLE */}

      <div
        className="
          w-full
          text-slate-900
          text-base
          font-semibold
          font-['IBM_Plex_Sans']
          leading-5
        "
      >
        {title}
      </div>

      {/* DESCRIPTION */}

      <div
        className="
          w-full
          text-gray-600
          text-xs
          font-normal
          font-['IBM_Plex_Sans']
          leading-5
        "
      >
        {description}
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function SharedEvidenceArchitecture() {
  return (
    <section
      className="
        relative
        w-full
        bg-violet-50
        overflow-hidden
      "
    >
      {/* =====================================================
          MAIN 1440PX SECTION
      ===================================================== */}

      <div
        className="
          w-full
          max-w-[1440px]
          mx-auto
          px-6
          sm:px-8
          lg:px-[80px]
          pt-[72px]
          pb-[72px]
          lg:pt-[96.3px]
          lg:pb-[96px]
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="
            w-full
            max-w-[1280px]
          "
        >
          {/* EYEBROW */}

          <motion.div
            variants={fadeUp}
            className="
              w-full
              text-yellow-600
              text-xs
              font-bold
              font-['IBM_Plex_Sans']
              tracking-wide
            "
          >
            SHARED EVIDENCE ARCHITECTURE
          </motion.div>

          {/* HEADING */}

          <motion.h2
            variants={fadeUp}
            className="
              w-full
              max-w-[780px]
              pt-3
              text-slate-900
              text-[32px]
              sm:text-[40px]
              lg:text-5xl
              font-bold
              font-['IBM_Plex_Sans']
              leading-[1.08]
              lg:leading-[48.72px]
              tracking-[-0.02em]
            "
          >
            One governed evidence base, not
            <br />
            parallel tabs and files.
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            variants={fadeUp}
            className="
              w-full
              max-w-[800px]
              pt-2
              text-gray-600
              text-sm
              sm:text-base
              font-normal
              font-['IBM_Plex_Sans']
              leading-6
              lg:leading-7
            "
          >
            The public page describes &quot;shared evidence&quot; as an
            outcome, not database synchronization or real-time
            <br className="hidden lg:block" />
            collaboration. Every layer keeps its own ownership and guardrail.
          </motion.p>
        </motion.div>

        {/* ===================================================
            FIVE ARCHITECTURE CARDS

            DESKTOP:
            240px × 5
            20px gaps

            240 + 20 + 240 + 20 + 240 + 20 + 240 + 20 + 240
            = 1280px
        =================================================== */}

        <div
          className="
            w-full
            max-w-[1280px]
            mt-7
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-5
          "
        >
          {architectureLayers.map((layer, index) => (
            <ArchitectureCard
              key={index}
              title={layer.title}
              description={layer.description}
              badge={layer.badge}
              index={index}
            />
          ))}
        </div>

        {/* ===================================================
            LOWER SECTION

            DESKTOP:
            IMAGE: 384px
            GAP: 113px
            CONTENT: 783px

            384 + 113 + 783 = 1280px
        =================================================== */}

        <div
          className="
            w-full
            max-w-[1280px]
            mt-[79px]
            grid
            grid-cols-1
            lg:grid-cols-[384px_minmax(0,1fr)]
            lg:gap-[113px]
            items-start
          "
        >
          {/* =================================================
              IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: smoothEase,
            }}
            className="
              relative
              w-full
              h-[480px]
              bg-slate-900
              rounded-2xl
              overflow-hidden
            "
          >
            <Image
              src="/images/solutions/research-teams/image1.png"
              alt="Shared evidence architecture"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 384px"
              className="
                object-cover
                object-center
              "
            />
          </motion.div>

          {/* =================================================
              RIGHT EVIDENCE AREA

              2 COLUMNS × 5 ROWS
          ================================================= */}

          <div
            className="
              w-full
              min-w-0
              mt-8
              lg:mt-0
              grid
              grid-cols-1
              sm:grid-cols-2
              sm:gap-x-10
              lg:gap-x-10
            "
          >
            {evidenceDetails.map((detail, index) => (
              <EvidenceItem
                key={detail.title}
                title={detail.title}
                description={detail.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}