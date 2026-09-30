"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ResearchCategory = {
  title: string;
  description: string;
  note: string;
};

const categories: ResearchCategory[] = [
  {
    title: "Market Structure",
    description:
      "Explains market mechanics, institutions, liquidity, issuance, and structure topics when evidence supports it.",
    note: "No live microstructure analytics or trading tools implied.",
  },
  {
    title: "Fixed Income",
    description:
      "Source-linked research on rates, sovereigns, credit, and fixed-income topics within released coverage.",
    note: "No blanket bond universe or pricing claims.",
  },
  {
    title: "Central Banks",
    description:
      "Research on central-bank communications, decisions, and policy context.",
    note: "Economic Calendar / Central Banks remain separate product modules.",
  },
  {
    title: "Macro",
    description:
      "Evidence-led macroeconomic research and cross-market context.",
    note: "No deterministic forecasts or nowcasts without methodology authority.",
  },
  {
    title: "Regulation & Policy",
    description:
      "Research on policy and regulatory evidence and market implications.",
    note: "The Policy & Regulation destination remains its own Research module.",
  },
  {
    title: "Methodology",
    description:
      "Original research explaining Talvrin’s evidence and research methods.",
    note: "Talvrin Methodology remains canonical for stable method definitions.",
  },
  {
    title: "Evidence & Data",
    description:
      "Research on evidence quality, provenance, data interpretation, revisions, and rights.",
    note: "Never exposes restricted data or internal architecture.",
  },
  {
    title: "Companies & Filings",
    description:
      "Research grounded in company filings and other governed company evidence.",
    note: "No unsupported issuer or security coverage claims.",
  },
];

function CategoryCard({
  category,
  index,
}: {
  category: ResearchCategory;
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
        delay: index * 0.05,
        ease: "easeOut",
      }}
      className="
        flex
        min-h-[247px]
        flex-col
        rounded-2xl
        border
        border-slate-900/10
        bg-violet-50
        p-6
        font-['IBM_Plex_Sans']
      "
    >
      {/* Title */}
      <h3 className="text-base font-bold leading-6 text-slate-900">
        {category.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm font-normal leading-5 text-gray-600">
        {category.description}
      </p>

      {/* Bottom note */}
      <div className="mt-auto border-t border-slate-900/10 pt-3">
        <p className="text-xs font-normal leading-4 text-yellow-600">
          {category.note}
        </p>
      </div>
    </motion.article>
  );
}

export default function ResearchCategories() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(
    scrollYProgress,
    [0, 1],
    [25, -20]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [25, -25]
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 10% 5%, rgba(99,102,241,0.035) 0%, rgba(99,102,241,0) 50%)",
        }}
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1278px]
          px-5
          py-20
          sm:px-8
          lg:px-0
          lg:py-[96px]
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div style={{ y: headingY }}>
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-[0.07em]
              text-yellow-600
            "
          >
            BROWSE RESEARCH CATEGORIES
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.05,
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
            Eight source-backed editorial
            <br className="hidden sm:block" />
            categories.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.12,
            }}
            className="
              mt-5
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-sm
              leading-6
              text-gray-600
              sm:text-base
              sm:leading-7
            "
          >
            These are editorial research categories, not standalone product
            modules — Central Banks, Policy &amp; Regulation, and Economic
            Calendar remain separate Research destinations.
          </motion.p>
        </motion.div>

        {/* =====================================================
            DESKTOP GRID
        ====================================================== */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
            xl:grid-cols-[repeat(4,minmax(0,240px))_240px]
            xl:grid-rows-[247px_247px]
            xl:gap-x-[19.6px]
            xl:gap-y-0
          "
        >
          {/* ===================================================
              FIRST 8 CARDS
              
              IMPORTANT:
              They occupy only the first 4 columns.
              The image is explicitly placed in column 5.
          ==================================================== */}

          {categories.map((category, index) => (
            <div
              key={category.title}
              className="
                xl:col-span-1
              "
            >
              <CategoryCard
                category={category}
                index={index}
              />
            </div>
          ))}

          {/* ===================================================
              RIGHT IMAGE

              column 5
              row 1 / span 2
          ==================================================== */}

          <motion.div
            style={{ y: imageY }}
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
              duration: 0.75,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              relative
              min-h-[474px]
              overflow-hidden
              rounded-2xl
              border
              border-slate-900/10
              bg-violet-50
              md:col-span-2
              xl:col-start-5
              xl:row-start-1
              xl:row-span-2
              xl:col-span-1
            "
          >
            <Image
              src="/images/research/market-intelligence/image1.png"
              alt="Talvrin research and market intelligence"
              fill
              priority={false}
              sizes="
                (max-width: 767px) 100vw,
                (max-width: 1279px) 100vw,
                240px
              "
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}