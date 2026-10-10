"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const accessibilityItems = [
  {
    title: "Semantic results",
    description:
      "Search results use list semantics with a logical heading hierarchy — no grid-only or infinite-scroll-only navigation.",
  },
  {
    title: "Keyboard & focus",
    description:
      "Filters, chips, and pagination stay keyboard operable with predictable focus movement.",
  },
  {
    title: "Stable canonicals",
    description:
      "Query and filter parameter pages stay non-indexable by default; only curated pages are eligible.",
  },
  {
    title: "Core Web Vitals",
    description:
      "Search hero and initial results never wait on a heavy client bundle.",
  },
  {
    title: "No-JS resilience",
    description:
      "Headline links and core metadata work without client-side enhancement.",
  },
  {
    title: "No crawl traps",
    description:
      "Faceted URL combinations never proliferate into thin, duplicate pages.",
  },
];

export default function AccessibilitySeoPerformance() {
  return (
    <section className="w-full overflow-hidden bg-white">
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
          lg:py-[95.61px]
          xl:px-0
        "
      >
        {/* ============================================================
            EYEBROW
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <span
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                tracking-[0.08em]
                text-yellow-600
              "
            >
              ACCESSIBILITY, SEO &amp; PERFORMANCE
            </span>
          </div>

          {/* ==========================================================
              HEADING
          ========================================================== */}

          <div className="max-w-[780px] pt-3">
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
              Findable by people, screen readers,
              <br className="hidden sm:block" />
              and search engines alike.
            </h2>
          </div>

          {/* ==========================================================
              DESCRIPTION
          ========================================================== */}

          <div className="max-w-[800px] pt-2">
            <p
              className="
                font-['IBM_Plex_Sans']
                text-base
                font-normal
                leading-7
                text-gray-600
              "
            >
              Original research and stable entities beat content volume —
              the library never trades discoverability for a content-farm
              shortcut.
            </p>
          </div>
        </motion.div>

        {/* ============================================================
            CARDS + IMAGE
        ============================================================ */}

        <div
          className="
            mt-10
            grid
            w-full
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-5
            xl:grid-cols-[repeat(3,minmax(0,1fr))_500px]
            xl:grid-rows-[minmax(184px,auto)_minmax(184px,auto)]
          "
        >
          {/* ==========================================================
              CARD 1
          ========================================================== */}

          <AccessibilityCard
            title="Semantic results"
            description="Search results use list semantics with a logical heading hierarchy — no grid-only or infinite-scroll-only navigation."
            index={0}
          />

          {/* ==========================================================
              CARD 2
          ========================================================== */}

          <AccessibilityCard
            title="Keyboard & focus"
            description="Filters, chips, and pagination stay keyboard operable with predictable focus movement."
            index={1}
          />

          {/* ==========================================================
              CARD 3
          ========================================================== */}

          <AccessibilityCard
            title="Stable canonicals"
            description="Query and filter parameter pages stay non-indexable by default; only curated pages are eligible."
            index={2}
          />

          {/* ==========================================================
              CARD 4
          ========================================================== */}

          <AccessibilityCard
            title="Core Web Vitals"
            description="Search hero and initial results never wait on a heavy client bundle."
            index={3}
          />

          {/* ==========================================================
              CARD 5
          ========================================================== */}

          <AccessibilityCard
            title="No-JS resilience"
            description="Headline links and core metadata work without client-side enhancement."
            index={4}
          />

          {/* ==========================================================
              CARD 6
          ========================================================== */}

          <AccessibilityCard
            title="No crawl traps"
            description="Faceted URL combinations never proliferate into thin, duplicate pages."
            index={5}
          />

          {/* ==========================================================
              IMAGE
              SPANS BOTH ROWS
          ========================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
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
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              order-first
              h-[360px]
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-slate-900/10
              bg-violet-50
              sm:order-none
              sm:col-span-2
              lg:col-start-4
              lg:row-start-1
              lg:row-span-2
              lg:h-[384px]
            "
          >
            <Image
              src="/images/research/research-library/image6.png"
              alt="TALVRIN research collaboration"
              fill
              priority
              sizes="500px"
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
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   CARD COMPONENT
================================================================== */

type AccessibilityCardProps = {
  title: string;
  description: string;
  index: number;
};

function AccessibilityCard({
  title,
  description,
  index,
}: AccessibilityCardProps) {
  return (
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        flex
        min-h-[184px]
        w-full
        flex-col
        items-start
        rounded-2xl
        border
        border-slate-900/10
        bg-violet-50
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-slate-900/15
      "
    >
      {/* TITLE */}

      <h3
        className="
          font-['IBM_Plex_Sans']
          text-base
          font-bold
          leading-6
          text-slate-900
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}

      <p
        className="
          mt-2
          font-['IBM_Plex_Sans']
          text-sm
          font-normal
          leading-5
          text-gray-600
        "
      >
        {description}
      </p>
    </motion.div>
  );
}