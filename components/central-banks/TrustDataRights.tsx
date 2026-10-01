"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const trustItems = [
  {
    title: "Evidence provenance",
    description:
      "Source identity and evidence path stay visible for every material claim.",
  },
  {
    title: "Timing integrity",
    description:
      "Scheduled, publication and effective timing stay separated and time-zone explicit.",
  },
  {
    title: "Jurisdiction governance",
    description:
      "Jurisdiction context stays explicit and links out to Supported Jurisdictions.",
  },
  {
    title: "Privacy",
    description:
      "Research and institutional interest are not inferred from routine interactions.",
  },
  {
    title: "Data & source rights",
    description:
      "Licensing, entitlement and permitted-use limits are respected.",
  },
  {
    title: "AI governance",
    description:
      "Model-assisted output stays subordinate to and distinguishable from official evidence.",
  },
];

export default function TrustDataRights() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 15%"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [30, 0]);

  const headerOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, 1]
  );

  const imageY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.05, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-slate-900"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-6
          py-20
          sm:px-8
          sm:py-24
          lg:px-0
          lg:py-[96px]
        "
      >
        {/* Header */}
        <motion.div
          style={{
            y: headerY,
            opacity: headerOpacity,
          }}
        >
          {/* Eyebrow */}
          <div
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-indigo-500
            "
          >
            TRUST &amp; DATA RIGHTS
          </div>

          {/* Heading */}
          <h2
            className="
              mt-4
              max-w-[760px]
              font-['IBM_Plex_Sans']
              text-[38px]
              font-bold
              leading-[42px]
              text-violet-50
              sm:text-[44px]
              sm:leading-[46px]
              lg:text-5xl
              lg:leading-[48.72px]
            "
          >
            Central-bank research requires
            <br className="hidden sm:block" />
            institutional-grade controls.
          </h2>
        </motion.div>

        {/* Main content */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[1fr_497.6px]
            lg:gap-6
          "
        >
          {/* Left content */}
          <div
            className="
              grid
              grid-cols-1
              gap-x-6
              gap-y-10
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {trustItems.map((item, index) => (
              <motion.div
                key={item.title}
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
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full max-w-[240px]"
              >
                {/* Accent line */}
                <div className="h-[2px] w-7 bg-indigo-500" />

                {/* Title */}
                <h3
                  className="
                    pt-1.5
                    font-['IBM_Plex_Sans']
                    text-base
                    font-bold
                    leading-6
                    text-violet-50
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-1
                    font-['IBM_Plex_Sans']
                    text-sm
                    font-normal
                    leading-5
                    text-violet-50/70
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
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
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              h-[280px]
              w-full
              overflow-hidden
              rounded-2xl
              bg-white
              sm:h-[360px]
              lg:h-[240px]
              lg:w-[497.6px]
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
                src="/images/markets/central-banks/image7.png"
                alt="Central-bank research institutional controls"
                fill
                priority={false}
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 100vw,
                  498px
                "
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}