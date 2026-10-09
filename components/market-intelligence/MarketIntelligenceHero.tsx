"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MarketIntelligenceHero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll-driven movement
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -55]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.96, 1.03]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#17143B] text-violet-50"
    >
      {/* Figma-style radial background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 14% 4%, rgba(99,102,241,0.20) 0%, rgba(99,102,241,0.08) 25%, rgba(99,102,241,0) 65%)",
        }}
      />

      {/* Subtle secondary glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[773px] w-full max-w-[1280px] items-center px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,560px)] lg:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            style={{ y: contentY }}
            className="flex max-w-[578px] flex-col items-start"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="text-xs font-bold tracking-[0.08em] text-indigo-500"
            >
              RESEARCH / MARKET INTELLIGENCE
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: "easeOut",
              }}
              className="mt-5 max-w-[580px] text-[42px] font-bold leading-[1.08] tracking-[-0.025em] text-violet-50 sm:text-[50px] lg:text-[60px] lg:leading-[1.063]"
            >
              Understand the
              <br />
              markets behind the
              <br />
              evidence.
            </motion.h1>

            {/* Main description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.16,
                ease: "easeOut",
              }}
              className="mt-6 max-w-[560px] text-base leading-7 text-violet-50/70 sm:text-lg sm:leading-8"
            >
              Evidence-led public-market research with direct answers,
              inspectable sources, clear context, and meaningful change kept
              visible.
            </motion.p>

            {/* Supporting description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.22,
                ease: "easeOut",
              }}
              className="mt-4 max-w-[560px] text-sm leading-6 text-violet-50/60 sm:text-base"
            >
              Read concise research, inspect the evidence, understand context
              and uncertainty, and follow what changes next.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
            >
              <a
                href="#market-intelligence"
                className="inline-flex min-h-[56px] items-center justify-center rounded-lg bg-violet-50 px-7 py-4 text-center text-base font-semibold text-slate-900 transition-transform duration-200 hover:-translate-y-0.5"
              >
                Browse Market Intelligence
              </a>

              <a
                href="/product/how-talvrin-works"
                className="inline-flex min-h-[56px] items-center justify-center rounded-lg border border-violet-50/30 px-7 py-4 text-center text-base font-semibold text-violet-50 transition-colors duration-200 hover:bg-violet-50/10"
              >
                See How Talvrin Works →
              </a>
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="mt-5 max-w-[560px] text-xs leading-5 text-violet-50/60 sm:text-sm"
            >
              Research and intelligence. No trade execution. No manufactured
              investment recommendations.
            </motion.p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            style={{
              y: imageY,
              scale: imageScale,
            }}
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="relative aspect-[560/620] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/research/market-intelligence/hero.png"
                alt="Market intelligence research"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}