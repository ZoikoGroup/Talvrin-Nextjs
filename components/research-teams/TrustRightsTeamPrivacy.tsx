"use client";

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
   DATA
========================================================= */

type TrustItemData = {
  title: string;
  description: ReactNode;
};

const trustItems: TrustItemData[] = [
  {
    title: "Evidence provenance",
    description: (
      <>
        Important outputs can be traced to supporting material.
      </>
    ),
  },
  {
    title: "Data rights",
    description: (
      <>
        Licensing and permitted-use constraints are respected — a shared
        object never bypasses entitlement.
      </>
    ),
  },
  {
    title: "Team access truth",
    description: (
      <>
        Talvrin does not claim every team member can access the same content
        unless entitlement behavior is approved.
      </>
    ),
  },
  {
    title: "Regional governance",
    description: (
      <>
        Jurisdiction-sensitive execution and data controls where claimed.
      </>
    ),
  },
  {
    title: "Privacy",
    description: (
      <>
        Research topics, sources, and notes are treated as potentially
        sensitive; analytics exclude raw research content by default.
      </>
    ),
  },
  {
    title: "AI governance",
    description: (
      <>
        Generated interpretation stays subordinate to evidence and policy.
      </>
    ),
  },
];

/* =========================================================
   TRUST ITEM
========================================================= */

type TrustItemProps = {
  item: TrustItemData;
  index: number;
};

function TrustItem({
  item,
  index,
}: TrustItemProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={fadeUp}
      transition={{
        delay: index * 0.07,
      }}
      className="
        flex
        h-full
        min-w-0
        flex-col
        items-start
        justify-start
        gap-2
      "
    >
      {/* INDIGO LINE */}

      <div
        aria-hidden="true"
        className="h-0.5 w-7 shrink-0 bg-indigo-500"
      />

      {/* TITLE */}

      <h3
        className="
          w-full
          break-words
          pt-1.5
          font-['IBM_Plex_Sans']
          text-base
          font-bold
          leading-6
          text-slate-900
        "
      >
        {item.title}
      </h3>

      {/* DESCRIPTION */}

      <p
        className="
          w-full
          break-words
          font-['IBM_Plex_Sans']
          text-sm
          font-normal
          leading-5
          text-gray-600
        "
      >
        {item.description}
      </p>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TrustRightsTeamPrivacy() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
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
          lg:px-12
          lg:py-20
          xl:px-20
          xl:py-[96px]
        "
      >
        <div className="w-full max-w-[1280px]">
          {/* EYEBROW */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
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
            TRUST, RIGHTS &amp; TEAM PRIVACY
          </motion.p>

          {/* HEADING */}

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="
              mt-5
              w-full
              max-w-[760px]
              font-['IBM_Plex_Sans']
              text-[clamp(1.8rem,3.5vw,3rem)]
              font-bold
              leading-[1.1]
              tracking-[-0.02em]
              text-slate-900
              sm:mt-6
            "
          >
            Shared evidence never bypasses rights or entitlements.
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="
              mt-4
              w-full
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-gray-600
              sm:mt-5
              sm:text-base
              sm:leading-7
            "
          >
            Research topics, sources, notes, and team interests can be
            sensitive organizational information. Analytics do not capture
            raw research content by default.
          </motion.p>

          {/* TRUST ITEMS */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="
              mt-8
              grid
              w-full
              grid-cols-1
              gap-x-6
              gap-y-8
              min-[480px]:grid-cols-2
              sm:mt-10
              sm:gap-x-8
              sm:gap-y-10
              lg:mt-12
              lg:grid-cols-3
              lg:gap-x-10
              lg:gap-y-12
              xl:mt-[52px]
            "
          >
            {trustItems.map((item, index) => (
              <TrustItem
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}