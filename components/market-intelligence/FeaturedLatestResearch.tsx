"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const editorialCards = [
  {
    title: "Feature status",
    positive: "Editorially curated and source-current.",
    negative: '"Trending" based on engagement or volatility without editorial meaning.',
  },
  {
    title: "Headline",
    positive: "Specific, descriptive, non-clickbait.",
    negative: "Fear, greed, or FOMO framing.",
  },
  {
    title: "Freshness",
    positive: "Published / materially updated, real events only.",
    negative: "An automatic timestamp bump.",
  },
  {
    title: "Summary",
    positive: "Answer-first, one concise paragraph.",
    negative: "A teaser that withholds the answer to force a click.",
  },
];

export default function FeaturedLatestResearch() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /*
   * Subtle scroll-driven movement.
   * The values are intentionally small so the section
   * does not feel like an exaggerated parallax effect.
   */
  const headingY = useTransform(scrollYProgress, [0, 1], [30, -20]);
  const imageY = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [20, -15]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-violet-50"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 14% 5%, rgba(99,102,241,0.07) 0%, rgba(99,102,241,0) 55%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-24 xl:px-16">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          style={{ y: headingY }}
          className="w-full"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
            className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-[0.07em] text-indigo-500"
          >
            FEATURED &amp; LATEST RESEARCH
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="
              mt-5
              max-w-[1000px]
              font-['IBM_Plex_Sans']
              text-[28px]
              font-bold
              leading-[1.12]
              tracking-[-0.025em]
              text-slate-900
              sm:text-[36px]
              md:text-[42px]
              lg:text-[48px]
              lg:leading-[48.72px]
            "
          >
            Editorial importance, not engagement
            <br className="hidden sm:block" />
            ranking.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.6,
              delay: 0.16,
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
            A Featured label comes from editorial curation — never clicks,
            time-on-page, paid promotion, or price movement. Latest and
            Recently Updated reflect real publication and revision timing,
            never a cosmetic timestamp bump.
          </motion.p>
        </motion.div>

        {/* =========================================================
            MAIN CONTENT
        ========================================================== */}

        <motion.div
          style={{ y: cardsY }}
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]
            xl:grid-cols-[1fr_1fr_2.18fr]
            lg:gap-4
          "
        >
          {/* =====================================================
              LEFT SIDE — FOUR INFORMATION CARDS
          ====================================================== */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-1 xl:col-span-2">
            {editorialCards.map((card, index) => (
              <motion.article
                key={card.title}
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
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="
                  min-h-[190px]
                  rounded-2xl
                  border
                  border-slate-900/10
                  bg-white
                  px-6
                  py-6
                  font-['IBM_Plex_Sans']
                "
              >
                {/* Card title */}
                <h3 className="text-base font-bold leading-6 text-slate-900">
                  {card.title}
                </h3>

                {/* Positive */}
                <div className="mt-3 flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="
                      shrink-0
                      pt-[1px]
                      font-['Segoe_UI_Symbol']
                      text-sm
                      font-normal
                      text-indigo-500
                    "
                  >
                    ✓
                  </span>

                  <p className="text-sm font-normal leading-5 text-slate-700">
                    {card.positive}
                  </p>
                </div>

                {/* Negative */}
                <div className="mt-2.5 flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="
                      shrink-0
                      pt-[1px]
                      font-['Segoe_UI_Symbol']
                      text-sm
                      font-normal
                      text-pink-800
                    "
                  >
                    ✕
                  </span>

                  <p className="text-sm font-normal leading-5 text-gray-600">
                    {card.negative}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* =====================================================
              IMAGE
          ====================================================== */}

          <motion.div
            style={{ y: imageY }}
            initial={{
              opacity: 0,
              x: 40,
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
              ease: "easeOut",
            }}
            className="
              relative
              min-h-[300px]
              overflow-hidden
              rounded-2xl
              border
              border-slate-900/10
              bg-white
              sm:min-h-[360px]
              lg:min-h-[384px]
            "
          >
            <Image
              src="/images/research/market-intelligence/image.png"
              alt="Market intelligence research"
              fill
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 100vw,
                627px
              "
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* =========================================================
            STATUS CARD
        ========================================================== */}

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
            duration: 0.65,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="
            mt-4
            w-full
            rounded-2xl
            border
            border-slate-900/10
            bg-white
            px-6
            py-7
            sm:px-7
            sm:py-8
            font-['IBM_Plex_Sans']
          "
        >
          {/* Status label */}
          <p className="text-xs font-bold tracking-[0.07em] text-yellow-600">
            STATUS
          </p>

          {/* Status heading */}
          <h3 className="mt-2 text-base font-semibold leading-7 text-slate-900">
            There is no published Market Intelligence research yet.
          </h3>

          {/* Status description */}
          <p className="mt-1 text-sm font-normal leading-6 text-gray-600 sm:text-base">
            When research goes live, featured and latest items will appear
            here under this exact editorial contract — never a fabricated
            headline, source, author, or date.
          </p>
        </motion.div>
      </div>
    </section>
  );
}