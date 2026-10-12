"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

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
   ARCHITECTURE DATA
========================================================= */

const architectureLayers = [
  {
    title: "Authoritative / primary source",
    description: "Common factual reference point for the team.",
    badge: "Rights and version state visible",
  },
  {
    title: "Talvrin normalization",
    description: "Consistent structure applied for research.",
    badge: "Always distinguished from source material",
  },
  {
    title: "Human analysis / research view",
    description: "Preserved team reasoning.",
    badge: "Attribution shown only if capability exists",
  },
  {
    title: "AI-assisted interpretation",
    description:
      "Accelerates comparison, summarization, and change identification.",
    badge: "Never authoritative; source independently inspectable",
  },
  {
    title: "User / team notes",
    description: "Context and reasoning created by users.",
    badge: "Sharing / ownership mechanics not invented",
  },
];

/* =========================================================
   EVIDENCE DATA
========================================================= */

const evidenceDetails = [
  {
    title: "Source identity",
    description:
      'Named organization, publisher, issuer, regulator, or exchange; never a generic "web source."',
  },
  {
    title: "Source class",
    description:
      "Primary / official / licensed / institutional / other governed classification only.",
  },
  {
    title: "Original title",
    description:
      "Human-readable source title or document/event name preserved.",
  },
  {
    title: "Publication time",
    description: "Displayed with timezone where material.",
  },
  {
    title: "Effective / reference period",
    description:
      "Separate from publication time when the fact applies to a different period.",
  },
  {
    title: "Jurisdiction",
    description:
      "Explicit when legally, economically, or market-structurally relevant.",
  },
  {
    title: "Version / supersession",
    description:
      "Revision, replacement, or supersession identified where supported.",
  },
  {
    title: "Rights / access state",
    description:
      "Respects licensing, entitlement, and permitted-use rules — never exposes restricted content.",
  },
  {
    title: "Evidence relationship",
    description:
      "Explains whether the evidence supports, contradicts, updates, or contextualizes the object.",
  },
  {
    title: "Open source action",
    description:
      "Deep link or governed viewer route where permitted; never a fabricated endpoint.",
  },
];

/* =========================================================
   ARCHITECTURE CARD
========================================================= */

type ArchitectureCardProps = {
  title: string;
  description: string;
  badge: string;
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
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      variants={fadeUp}
      transition={{
        delay: index * 0.06,
      }}
      className="
        flex
        h-full
        min-h-[190px]
        min-w-0
        flex-col
        items-start
        rounded-2xl
        border
        border-slate-900/10
        bg-white
        p-4
        sm:min-h-[200px]
        sm:p-5
        lg:min-h-[220px]
        2xl:min-h-[230px]
      "
    >
      <h3
        className="
          w-full
          break-words
          font-['IBM_Plex_Sans']
          text-sm
          font-bold
          leading-5
          text-slate-900
          sm:text-base
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2.5
          w-full
          break-words
          font-['IBM_Plex_Sans']
          text-sm
          leading-5
          text-gray-600
        "
      >
        {description}
      </p>

      <div className="mt-auto max-w-full pt-5">
        <span
          className="
            inline-flex
            max-w-full
            items-start
            rounded-xl
            bg-indigo-500/10
            px-2.5
            py-2
            sm:rounded-full
          "
        >
          <span
            className="
              break-words
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              leading-4
              tracking-tight
              text-indigo-500
            "
          >
            {badge}
          </span>
        </span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   EVIDENCE ITEM
========================================================= */

type EvidenceItemProps = {
  title: string;
  description: string;
  index: number;
};

function EvidenceItem({
  title,
  description,
  index,
}: EvidenceItemProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      variants={fadeUp}
      transition={{
        delay: index * 0.045,
      }}
      className="
        flex
        min-w-0
        flex-col
        items-start
        gap-1
        border-b
        border-slate-900/10
        py-4
        sm:py-5
      "
    >
      <h3
        className="
          w-full
          break-words
          font-['IBM_Plex_Sans']
          text-sm
          font-semibold
          leading-5
          text-slate-900
          sm:text-base
        "
      >
        {title}
      </h3>

      <p
        className="
          w-full
          break-words
          font-['IBM_Plex_Sans']
          text-xs
          leading-5
          text-gray-600
          sm:text-sm
        "
      >
        {description}
      </p>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function SharedEvidenceArchitecture() {
  return (
    <section className="relative w-full overflow-hidden bg-violet-50">
      {/* MAIN CONTAINER */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          py-12
          min-[480px]:px-5
          sm:py-16
          md:px-8
          md:py-20
          lg:px-12
          xl:px-20
          xl:py-24
        "
      >
        {/* HEADER */}

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
          className="w-full max-w-[1280px]"
        >
          {/* EYEBROW */}

          <motion.p
            variants={fadeUp}
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-yellow-600
              sm:text-sm
            "
          >
            SHARED EVIDENCE ARCHITECTURE
          </motion.p>

          {/* HEADING */}

          <motion.h2
            variants={fadeUp}
            className="
              mt-3
              w-full
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-[clamp(1.8rem,4.2vw,3rem)]
              font-bold
              leading-[1.1]
              tracking-[-0.02em]
              text-slate-900
            "
          >
            One governed evidence base, not parallel tabs and files.
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            variants={fadeUp}
            className="
              mt-3
              w-full
              max-w-[800px]
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-gray-600
              sm:text-base
              sm:leading-7
            "
          >
            The public page describes &quot;shared evidence&quot; as an
            outcome, not database synchronization or real-time collaboration.
            Every layer keeps its own ownership and guardrail.
          </motion.p>
        </motion.div>

        {/* ARCHITECTURE CARDS */}

        <div
          className="
            mt-8
            grid
            w-full
            max-w-[1280px]
            grid-cols-1
            items-stretch
            gap-4
            min-[480px]:grid-cols-2
            sm:mt-10
            lg:grid-cols-3
            lg:gap-5
            2xl:grid-cols-5
          "
        >
          {architectureLayers.map((layer, index) => (
            <ArchitectureCard
              key={layer.title}
              title={layer.title}
              description={layer.description}
              badge={layer.badge}
              index={index}
            />
          ))}
        </div>

        {/* EVIDENCE DETAILS SECTION */}

        <div
          className="
            mt-10
            grid
            w-full
            max-w-[1280px]
            grid-cols-1
            items-start
            gap-7
            sm:mt-14
            sm:gap-9
            lg:mt-16
            xl:grid-cols-[minmax(0,384px)_minmax(0,1fr)]
            xl:gap-12
            2xl:mt-[79px]
            2xl:gap-[72px]
          "
        >
          {/* LEFT — IMAGE */}

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
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              ease: smoothEase,
            }}
            className="
              relative
              aspect-[4/3]
              w-full
              min-w-0
              overflow-hidden
              rounded-2xl
              bg-slate-900
              sm:aspect-[5/3]
              xl:aspect-[4/5]
            "
          >
            <Image
              src="/images/solutions/research-teams/image1.png"
              alt="Shared evidence architecture"
              fill
              priority
              sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) calc(100vw - 96px), 384px"
              className="object-cover object-center"
            />
          </motion.div>

          {/* RIGHT — EVIDENCE DETAILS */}

          <div
            className="
              grid
              w-full
              min-w-0
              grid-cols-1
              gap-x-6
              sm:grid-cols-2
              sm:gap-x-8
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