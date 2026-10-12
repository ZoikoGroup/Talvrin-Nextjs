"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Market Structure",
    description: (
      <>
        Approved research about
        <br className="hidden lg:block" />
        market structure and
        <br className="hidden lg:block" />
        mechanics, where published.
      </>
    ),
    note: (
      <>
        No live microstructure analytics
        <br className="hidden lg:block" />
        implied.
      </>
    ),
  },
  {
    title: "Fixed Income",
    description: (
      <>
        Approved fixed-income and
        <br className="hidden lg:block" />
        rates research.
      </>
    ),
    note: (
      <>
        Fixed Income remains its own
        <br className="hidden lg:block" />
        Research destination too.
      </>
    ),
  },
  {
    title: "Central Banks",
    description: (
      <>
        Approved research on central-
        <br className="hidden lg:block" />
        bank communications and
        <br className="hidden lg:block" />
        policy context.
      </>
    ),
    note: (
      <>
        Distinct from the dedicated Central
        <br className="hidden lg:block" />
        Banks destination.
      </>
    ),
  },
  {
    title: "Macro",
    description: (
      <>
        Approved macroeconomic
        <br className="hidden lg:block" />
        research.
      </>
    ),
    note: (
      <>
        No deterministic forecasts without
        <br className="hidden lg:block" />
        methodology authority.
      </>
    ),
  },
  {
    title: "Regulation & Policy",
    description: (
      <>
        Approved regulation and policy
        <br className="hidden lg:block" />
        research.
      </>
    ),
    note: (
      <>
        Policy &amp; Regulation remains its own
        <br className="hidden lg:block" />
        destination.
      </>
    ),
  },
  {
    title: "Methodology",
    description: (
      <>
        Research and methodology
        <br className="hidden lg:block" />
        explainer content.
      </>
    ),
    note: (
      <>
        Talvrin Methodology stays canonical
        <br className="hidden lg:block" />
        for method definitions.
      </>
    ),
  },
  {
    title: "Evidence & Data",
    description: (
      <>
        Research on evidence quality,
        <br className="hidden lg:block" />
        provenance and data
        <br className="hidden lg:block" />
        interpretation.
      </>
    ),
    note: (
      <>
        Never exposes restricted data or
        <br className="hidden lg:block" />
        internal architecture.
      </>
    ),
  },
  {
    title: "Companies & Filings",
    description: (
      <>
        Approved company and filing
        <br className="hidden lg:block" />
        research.
      </>
    ),
    note: (
      <>
        No unsupported issuer coverage
        <br className="hidden lg:block" />
        claims.
      </>
    ),
  },
];

export default function BrowseByCategory() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* ============================================================
          MAIN CONTAINER
      ============================================================ */}

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
          lg:py-[96px]
          xl:px-0
        "
      >
        {/* ============================================================
            SECTION HEADER
        ============================================================ */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
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

          <div className="flex w-full flex-col items-start">
            <span
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                leading-4
                tracking-[0.08em]
                text-indigo-500
              "
            >
              Browse by Category
            </span>
          </div>

          {/* Heading */}

          <div className="w-full max-w-[780px] pt-5">
            <h2
              className="
                font-['IBM_Plex_Sans']
                text-[40px]
                font-bold
                leading-[1.08]
                tracking-[-0.025em]
                text-slate-900
                sm:text-[44px]
                sm:leading-[48.72px]
                lg:text-5xl
              "
            >
              Eight source-backed editorial
              <br className="hidden sm:block" />
              categories.
            </h2>
          </div>

          {/* Description */}

          <div className="w-full max-w-[780px] pt-2">
            <p
              className="
                font-['IBM_Plex_Sans']
                text-base
                font-normal
                leading-7
                text-gray-600
              "
            >
              Categories are editorial, not routes. Central Banks, Policy
              &amp; Regulation, and Talvrin Methodology remain their own
              dedicated Research destinations even where they also apply as
              a library category.
            </p>
          </div>
        </motion.div>

        {/* ============================================================
            DESKTOP / LARGE TABLET LAYOUT
           
            4 CARDS + IMAGE
            4 CARDS + IMAGE
           
            240px × 5 columns
            20px gaps
            = 1280px total
        ============================================================ */}

        <div
          className="
            mt-10
            hidden
            w-full
            xl:grid
            xl:grid-cols-[repeat(5,minmax(0,1fr))]
            xl:grid-rows-[minmax(225px,auto)_minmax(225px,auto)]
            xl:gap-5
          "
        >
          {/* ==========================================================
              ROW 1 — CARD 1
          ========================================================== */}

          <CategoryCard
            index={0}
            title={categories[0].title}
            description={categories[0].description}
            note={categories[0].note}
          />

          {/* ==========================================================
              ROW 1 — CARD 2
          ========================================================== */}

          <CategoryCard
            index={1}
            title={categories[1].title}
            description={categories[1].description}
            note={categories[1].note}
          />

          {/* ==========================================================
              ROW 1 — CARD 3
          ========================================================== */}

          <CategoryCard
            index={2}
            title={categories[2].title}
            description={categories[2].description}
            note={categories[2].note}
          />

          {/* ==========================================================
              ROW 1 — CARD 4
          ========================================================== */}

          <CategoryCard
            index={3}
            title={categories[3].title}
            description={categories[3].description}
            note={categories[3].note}
          />

          {/* ==========================================================
              IMAGE — RIGHT SIDE
              SPANS BOTH ROWS
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
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              row-span-2
              h-full
              min-h-0
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-slate-900/10
              bg-violet-50
            "
          >
            <Image
              src="/images/research/research-library/image.png"
              alt="Research collaboration"
              fill
              priority
              sizes="240px"
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
              ROW 2 — CARD 5
          ========================================================== */}

          <CategoryCard
            index={4}
            title={categories[4].title}
            description={categories[4].description}
            note={categories[4].note}
          />

          {/* ==========================================================
              ROW 2 — CARD 6
          ========================================================== */}

          <CategoryCard
            index={5}
            title={categories[5].title}
            description={categories[5].description}
            note={categories[5].note}
          />

          {/* ==========================================================
              ROW 2 — CARD 7
          ========================================================== */}

          <CategoryCard
            index={6}
            title={categories[6].title}
            description={categories[6].description}
            note={categories[6].note}
          />

          {/* ==========================================================
              ROW 2 — CARD 8
          ========================================================== */}

          <CategoryCard
            index={7}
            title={categories[7].title}
            description={categories[7].description}
            note={categories[7].note}
          />
        </div>

        {/* ============================================================
            TABLET / MOBILE LAYOUT

            On smaller screens:
            - image becomes normal content
            - cards become 2 columns on tablet
            - cards become 1 column on mobile
        ============================================================ */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            xl:hidden
          "
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              index={index}
              title={category.title}
              description={category.description}
              note={category.note}
            />
          ))}

          {/* Mobile/tablet image */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[280px]
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-slate-900/10
              bg-violet-50
              sm:col-span-2
              lg:col-span-1
              lg:min-h-[225px]
            "
          >
            <Image
              src="/images/research/research-library/image.png"
              alt="Research collaboration"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 33vw"
              className="
                object-cover
                object-center
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   CATEGORY CARD
================================================================== */

type CategoryCardProps = {
  index: number;
  title: string;
  description: React.ReactNode;
  note: React.ReactNode;
};

function CategoryCard({
  index,
  title,
  description,
  note,
}: CategoryCardProps) {
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
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        flex
        h-full
        min-h-[225px]
        w-full
        flex-col
        rounded-2xl
        border
        border-slate-900/10
        bg-violet-50
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-slate-900/20
      "
    >
      {/* ------------------------------------------------------------
          TITLE
      ------------------------------------------------------------ */}

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

      {/* ------------------------------------------------------------
          DESCRIPTION
      ------------------------------------------------------------ */}

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

      {/* ------------------------------------------------------------
          NOTE
      ------------------------------------------------------------ */}

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