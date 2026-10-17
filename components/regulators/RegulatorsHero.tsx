"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef } from "react";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

export default function RegulatorsHero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.9],
    [1, 0.75]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 20]
  );

  return (
    <section
      ref={heroRef}
      className="relative isolate w-full overflow-hidden bg-[#171335] text-[#F6F5FB]"
    >
      {/* Background Gradients from Figma */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_6%,rgba(108,92,231,0.22)_0%,rgba(108,92,231,0)_65%),radial-gradient(circle_at_90%_82%,rgba(185,129,50,0.14)_0%,rgba(185,129,50,0)_60%)]"
      />

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-[80px]"
      >
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12 xl:gap-16">
          {/* Left Column: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col items-start gap-4 max-w-[620px]"
          >
            {/* Tag */}
            <span className="font-sans text-[13px] font-bold uppercase tracking-[0.09em] text-[#B98132]">
              MARKETS / SOURCE UNIVERSE
            </span>

            {/* Main Heading */}
            <h1 className="font-sans text-[36px] font-bold leading-[1.1] tracking-[-0.01em] text-[#F6F5FB] sm:text-[44px] md:text-[50px] lg:text-[56px] lg:leading-[61.6px]">
              Regulatory sources,
              <br />
              connected to the
              <br />
              evidence behind
              <br />
              market decisions.
            </h1>

            {/* Lead Paragraph 1 */}
            <p className="pt-2 font-sans text-[17px] font-normal leading-[1.6] text-[rgba(246,245,251,0.72)] sm:text-[19px] sm:leading-[30.4px]">
              Explore regulator-issued public-market documents in their
              institutional, jurisdictional and historical context. TALVRIN is
              being designed to connect source publications with research and
              monitoring while making released coverage clear.
            </p>

            {/* Lead Paragraph 2 */}
            <p className="font-sans text-[14px] font-normal leading-[1.6] text-[rgba(246,245,251,0.55)] sm:text-[15px] sm:leading-[24px]">
              Inspect what an authority published, which version applies, when
              it was issued or became effective, and how subsequent documents
              may change the evidence base — where the underlying sources are
              licensed and supported.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/how-talvrin-works"
                className="inline-flex items-center justify-center rounded-lg bg-[#F6F5FB] px-7 py-4 font-sans text-[16px] font-semibold text-[#171335] shadow-sm transition-all hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2 focus:ring-offset-[#171335]"
              >
                Explore How TALVRIN Works
              </Link>
              <Link
                href="#workflow"
                className="inline-flex items-center justify-center rounded-lg border border-[rgba(246,245,251,0.3)] bg-transparent px-7 py-4 font-sans text-[16px] font-semibold text-[#F6F5FB] transition-all hover:border-[rgba(246,245,251,0.6)] hover:bg-[rgba(246,245,251,0.05)] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2 focus:ring-offset-[#171335]"
              >
                Explore Research Workflow
              </Link>
            </div>

            {/* Disclaimer */}
            <p className="pt-2 font-sans text-[13px] font-normal leading-[1.5] text-[rgba(246,245,251,0.55)] sm:text-[14px]">
              AI may help organize and explain source material; the regulator
              publication remains the source of record. Information for
              research, not legal, regulatory, investment, or compliance advice.
            </p>
          </motion.div>

          {/* Right Column: Visual Card */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: smoothEase, delay: 0.15 }}
            className="relative flex w-full justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] overflow-hidden rounded-2xl border border-[rgba(246,245,251,0.14)] bg-[rgba(246,245,251,0.04)] p-2 shadow-2xl backdrop-blur-sm sm:p-3">
              <div className="relative aspect-[500/586] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/markets/regulators/hero-regulatory-evidence.png"
                  alt="Regulatory evidence sources and authority hierarchy"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
