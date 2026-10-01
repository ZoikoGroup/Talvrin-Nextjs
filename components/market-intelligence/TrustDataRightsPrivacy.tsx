"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type TrustItem = {
  title: string;
  description: string;
};

const trustItems: TrustItem[] = [
  {
    title: "Evidence provenance",
    description:
      "Source identity and evidence path stay visible for important claims.",
  },
  {
    title: "Data rights",
    description:
      "Licensing, entitlement, excerpt, and redistribution limits are respected.",
  },
  {
    title: "Privacy",
    description:
      "Sensitive research intent is not collected merely for editorial analytics.",
  },
  {
    title: "Global data governance",
    description:
      "Market/jurisdiction context and released coverage remain truthful.",
  },
  {
    title: "Operational transparency",
    description:
      "Published, updated, archived, and coverage states remain truthful.",
  },
];

function TrustItem({
  item,
  index,
}: {
  item: TrustItem;
  index: number;
}) {
  return (
    <motion.article
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
        duration: 0.45,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      className="
        w-full
        font-['IBM_Plex_Sans']
      "
    >
      {/* Figma: 28 × 2px indigo line */}
      <div className="h-0.5 w-7 bg-indigo-500" />

      <h3
        className="
          pt-1.5
          text-base
          font-bold
          leading-6
          text-slate-900
        "
      >
        {item.title}
      </h3>

      <p
        className="
          mt-1
          max-w-[240px]
          text-sm
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

export default function TrustDataRightsPrivacy() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [25, -20]
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
          SUBTLE BACKGROUND
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
            "radial-gradient(circle at 8% 5%, rgba(99,102,241,0.055) 0%, rgba(99,102,241,0) 48%)",
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
          max-w-[1275px]
          px-5
          py-20
          sm:px-8
          lg:px-0
          lg:py-[95.9px]
        "
      >
        <motion.div style={{ y: contentY }}>
          {/* =====================================================
              EYEBROW
          ====================================================== */}

          <motion.div
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
              text-indigo-500
            "
          >
            TRUST, DATA RIGHTS &amp; PRIVACY
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
              max-w-[760px]
              font-['IBM_Plex_Sans']
              text-[36px]
              font-bold
              leading-[1.08]
              tracking-[-0.025em]
              text-slate-900
              sm:text-[42px]
              lg:text-5xl
              lg:leading-[48.72px]
            "
          >
            Editorial credibility built on
            <br className="hidden sm:block" />
            governance, not badges.
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
            Reading behavior can still reveal market interests. Analytics
            measure editorial usability and navigation, not individual
            investment intent.
          </motion.p>

          {/* =====================================================
              TRUST PRINCIPLES
          ====================================================== */}

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-y-10
              sm:grid-cols-2
              sm:gap-x-10
              lg:mt-[45px]
              lg:grid-cols-5
              lg:gap-x-[21px]
              lg:gap-y-0
            "
          >
            {trustItems.map((item, index) => (
              <TrustItem
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}