"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const governanceItems = [
  {
    allowed: "Organizing scheduled events and official evidence",
    restricted: "The authoritative source",
  },
  {
    allowed: "Comparing statements or document versions",
    restricted: "A replacement for source inspection",
  },
  {
    allowed: "Summarizing minutes, speeches or reports under review",
    restricted: "An autonomous named analyst unless that is real",
  },
  {
    allowed: "Explaining institution-specific instruments in plain language",
    restricted: "A rate forecast or hawkish/dovish score",
  },
  {
    allowed: "Organizing cross-institution context",
    restricted: "A buy/sell/hold recommendation engine",
  },
  {
    allowed: "Flagging schedule or document changes",
    restricted: "A guaranteed materiality judgment",
  },
];

export default function AIGovernance() {
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

  const imageY = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-violet-50"
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
          {/* Header */}
          <motion.div
            style={{
              opacity: contentOpacity,
              y: contentY,
            }}
          >
            {/* Eyebrow */}
            <div
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                tracking-wide
                text-yellow-600
              "
            >
              AI GOVERNANCE
            </div>

            {/* Heading */}
            <h2
              className="
                mt-4
                max-w-[900px]
                font-['IBM_Plex_Sans']
                text-[30px]
                font-bold
                leading-[1.1]
                text-slate-900
                sm:text-[38px]
                sm:leading-[44px]
                md:text-[44px]
                lg:text-5xl
                lg:leading-[48.72px]
              "
            >
              AI may help organize and explain
              <br className="hidden sm:block" />
              the evidence. It does not become
              <br className="hidden sm:block" />
              the evidence.
            </h2>
          </motion.div>

        {/* Content */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {governanceItems.map((item, index) => (
            <motion.div
              key={item.allowed}
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
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                rounded-2xl
                border
                border-slate-900/10
                bg-white
                px-6
                py-6
              "
            >
              {/* Allowed */}
              <div className="flex items-start gap-2.5">
                <span
                  className="
                    pt-[2px]
                    font-['Segoe_UI_Symbol']
                    text-sm
                    text-indigo-500
                  "
                >
                  ✓
                </span>

                <p
                  className="
                    min-w-0
                    font-['IBM_Plex_Sans']
                    text-base
                    font-semibold
                    leading-6
                    text-slate-900
                  "
                >
                  {item.allowed}
                </p>
              </div>

              {/* Restricted */}
              <div className="mt-5 flex items-start gap-2.5">
                <span
                  className="
                    pt-[2px]
                    font-['Segoe_UI_Symbol']
                    text-sm
                    text-pink-800
                  "
                >
                  ✕
                </span>

                <p
                  className="
                    min-w-0
                    font-['IBM_Plex_Sans']
                    text-sm
                    font-normal
                    leading-5
                    text-gray-600
                  "
                >
                  {item.restricted}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Image */}
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
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[320px]
              overflow-hidden
              rounded-2xl
              border
              border-slate-900/10
              bg-white
              sm:min-h-[320px]
              lg:col-start-4
              lg:row-start-1
              lg:row-span-2
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
                src="/images/markets/central-banks/image6.png"
                alt="AI governance"
                fill
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  320px
                "
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}