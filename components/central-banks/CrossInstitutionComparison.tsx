"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const comparisonPoints = [
  `Compare timing, governed policy instruments, coverage states and sourced decision history — never generic rankings of "more hawkish" or "more dovish."`,
  `Disclose mandate, instrument, meeting-cadence and publication differences that make direct comparison imperfect.`,
  `Use normalized fields only as a secondary analytical layer; original source terminology and values are always preserved.`,
  `No comparison page implies universal global coverage from a subset of released institutions.`,
];

export default function CrossInstitutionComparison() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 15%"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.3], [30, 0]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, 1]
  );

  const cardsY = useTransform(scrollYProgress, [0.1, 0.65], [40, 0]);

  const imageY = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-slate-900"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          py-14
          sm:px-6
          sm:py-16
          md:px-8
          lg:px-12
          lg:py-[96px]
          xl:px-[80px]
        "
      >
        <div className="mx-auto w-full max-w-[1280px]">
          {/* Eyebrow */}
          <motion.div
            style={{
              opacity: contentOpacity,
              y: contentY,
            }}
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-yellow-600
            "
          >
            CROSS-INSTITUTION COMPARISON — CONDITIONAL
          </motion.div>

          {/* Heading */}
          <motion.h2
            style={{
              opacity: contentOpacity,
              y: contentY,
            }}
            className="
              mt-4
              max-w-[1000px]
              font-['IBM_Plex_Sans']
              text-[30px]
              font-bold
              leading-[1.1]
              text-violet-50
              sm:text-[38px]
              sm:leading-[44px]
              md:text-[44px]
              lg:text-5xl
              lg:leading-[48.72px]
            "
          >
            High-value, high-risk — it ships only
            <br className="hidden lg:block" />
            when the data can compare like
            <br className="hidden lg:block" />
            with like.
          </motion.h2>

          {/* Description */}
          <motion.p
            style={{
              opacity: contentOpacity,
              y: contentY,
            }}
            className="
              mt-5
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-7
              text-violet-50/70
            "
          >
            Comparison never implies universal coverage from a subset of
            released institutions, and never ranks institutions as more or less
            &quot;hawkish&quot; without a transparent, approved methodology.
          </motion.p>

          {/* Cards */}
          <motion.div
            style={{
              y: cardsY,
            }}
            className="
              mt-10
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-5
            "
          >
          {comparisonPoints.map((point, index) => {
            const isImageCard = index === comparisonPoints.length;

            return (
              <motion.div
                key={index}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  min-h-[172px]
                  rounded-2xl
                  border
                  border-violet-50/10
                  bg-violet-50/5
                  px-6
                  py-6
                  font-['IBM_Plex_Sans']
                  text-base
                  font-normal
                  leading-6
                  text-violet-50/90
                  sm:min-h-[174px]
                  lg:min-h-[172px]
                "
              >
                {point}
              </motion.div>
            );
          })}

          {/* Image card */}
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[172px]
              overflow-hidden
              rounded-2xl
              border
              border-violet-50/10
              bg-violet-50/5
              sm:min-h-[174px]
              lg:min-h-[172px]
            "
          >
            <motion.div
              style={{
                y: imageY,
                scale: imageScale,
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/markets/central-banks/image5.png"
                alt="Cross-institution comparison"
                fill
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  240px
                "
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}