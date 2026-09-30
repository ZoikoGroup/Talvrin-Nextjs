"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhatChangedMonitoring() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 15%"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);

  const contentY = useTransform(scrollYProgress, [0, 0.35], [25, 0]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, 1]
  );

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-violet-50"
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
            text-indigo-500
          "
        >
          &quot;WHAT CHANGED?&quot; MONITORING
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
            text-[38px]
            font-bold
            leading-[42px]
            text-slate-900
            sm:text-[44px]
            sm:leading-[46px]
            lg:text-5xl
            lg:leading-[48.72px]
          "
        >
          Policy research stays current when
          <br className="hidden sm:block" />
          the source changes.
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
            text-gray-600
          "
        >
          Eight explicit change states, so a correction or supersession never
          disappears silently.
        </motion.p>

        {/* Image */}
        <motion.div
          initial={{
            opacity: 0,
            y: 45,
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
            mt-10
            h-[280px]
            w-full
            overflow-hidden
            rounded-2xl
            bg-white
            outline
            outline-1
            -outline-offset-1
            outline-slate-900/10
            sm:h-[380px]
            md:h-[440px]
            lg:h-[487.8px]
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
              src="/images/markets/central-banks/image4.png"
              alt="Policy research monitoring"
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}