"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Facet = {
  title: string;
  description: string;
};

const facets: Facet[] = [
  {
    title: "Category",
    description:
      "Visible whenever populated from the approved editorial taxonomy.",
  },
  {
    title: "Market",
    description:
      "Only when the Content Registry stores a governed market field — never inferred from keywords.",
  },
  {
    title: "Jurisdiction",
    description:
      "Can carry multiple values; never conflated with a reader’s location.",
  },
  {
    title: "Asset class",
    description:
      "Only when editorial taxonomy defines it and articles are genuinely assigned.",
  },
  {
    title: "Author / editor",
    description:
      "Only where named public authorship exists.",
  },
  {
    title: "Date range",
    description:
      "Published and materially-updated dates can be filtered separately.",
  },
];

function FacetCard({
  facet,
  index,
}: {
  facet: Facet;
  index: number;
}) {
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
        duration: 0.5,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      className="
        flex
        min-h-[185px]
        flex-col
        rounded-2xl
        border
        border-slate-900/10
        bg-white
        p-6
        font-['IBM_Plex_Sans']
      "
    >
      <h3 className="text-base font-bold leading-6 text-slate-900">
        {facet.title}
      </h3>

      <p className="mt-2 text-sm font-normal leading-5 text-gray-600">
        {facet.description}
      </p>
    </motion.article>
  );
}

export default function ResearchFacets() {
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
      {/* Subtle background treatment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 4%, rgba(99,102,241,0.06) 0%, rgba(99,102,241,0) 52%)",
        }}
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1277px]
          px-5
          py-20
          sm:px-8
          lg:px-0
          lg:py-[95px]
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
              text-indigo-500
            "
          >
            TOPIC, MARKET &amp; JURISDICTION DISCOVERY
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
              delay: 0.05,
              ease: "easeOut",
            }}
            className="
              mt-5
              max-w-[780px]
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
            Facets appear only where they are
            <br className="hidden sm:block" />
            genuinely governed.
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
            A facet renders only once the Content Registry stores a real,
            editorially-assigned field for it — never inferred from keywords,
            and never mirrored automatically from platform coverage claims.
          </motion.p>

          {/* =====================================================
              FACET CARDS
          ====================================================== */}

          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-6
            "
          >
            {facets.map((facet, index) => (
              <FacetCard
                key={facet.title}
                facet={facet}
                index={index}
              />
            ))}
          </div>

          {/* =====================================================
              SEARCH BOUNDARY
          ====================================================== */}

          <motion.div
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              mt-4
              w-full
              rounded-2xl
              border
              border-slate-900/10
              bg-white
              p-6
              font-['IBM_Plex_Sans']
            "
          >
            <p
              className="
                text-xs
                font-bold
                tracking-[0.07em]
                text-slate-900
              "
            >
              SEARCH BOUNDARY
            </p>

            <p
              className="
                mt-2
                text-sm
                font-normal
                leading-6
                text-gray-600
                sm:text-base
              "
            >
              If a site-search capability is not confirmed, no internal
              search box is invented. Browsing by category and stable links is
              sufficient until search is product-approved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}