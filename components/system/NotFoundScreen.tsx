"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

const glitchTransition = {
  duration: 2.6,
  repeat: Infinity,
  repeatDelay: 2.4,
  ease: "easeInOut" as const,
};

const tickerItems = [
  "TLVRN 404.00 ▼ −100.00%",
  "PAGE NOT FOUND",
  "SYMBOL DELISTED",
  "NO EVIDENCE ON RECORD",
];

function TickerTrack() {
  return (
    <div className="flex shrink-0 items-center gap-x-10 pr-10" aria-hidden="true">
      {tickerItems.map((item) => (
        <span
          key={item}
          className="whitespace-nowrap text-xs font-bold uppercase tracking-widest text-[#F0605A]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function DecliningChart() {
  return (
    <div className="relative mx-auto flex w-full max-w-xs items-center justify-center gap-3 sm:max-w-sm">
      <svg viewBox="0 0 320 110" className="h-20 w-full sm:h-24" aria-hidden="true">
        <line x1="0" y1="27" x2="320" y2="27" stroke="white" strokeOpacity="0.07" />
        <line x1="0" y1="55" x2="320" y2="55" stroke="white" strokeOpacity="0.07" />
        <line x1="0" y1="83" x2="320" y2="83" stroke="white" strokeOpacity="0.07" />

        <motion.path
          d="M0,68 L28,52 L56,60 L84,34 L112,44 L140,22 L168,33 L196,52 L224,46 L252,66 L280,92 L320,108"
          fill="none"
          stroke="#F0605A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.4 }}
        />
        <motion.circle
          cx={320}
          cy={108}
          r={4}
          fill="#F0605A"
          animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1, 1, 0.5] }}
          transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.58, 0.62, 0.85, 1] }}
        />
      </svg>

      <motion.span
        className="shrink-0 text-sm font-bold text-[#F0605A]"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.58, 0.62, 0.85, 1] }}
      >
        −100.00%
      </motion.span>
    </div>
  );
}

export default function NotFoundScreen() {
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-ink py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(650px 460px at 18% 15%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%), radial-gradient(520px 400px at 85% 85%, rgba(185,129,50,0.14), rgba(185,129,50,0) 60%)",
        }}
      />

      <Container className="relative text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-accent-amber">Error 404</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-6 w-fit select-none" aria-hidden="true">
            <span className="block text-[110px] font-bold leading-none tracking-tight text-white sm:text-[150px]">
              404
            </span>
            <motion.span
              className="absolute inset-0 block text-[110px] font-bold leading-none tracking-tight text-accent-violet mix-blend-screen sm:text-[150px]"
              animate={{ x: [0, 4, -4, 2, 0], opacity: [0, 0.55, 0, 0.45, 0] }}
              transition={glitchTransition}
            >
              404
            </motion.span>
            <motion.span
              className="absolute inset-0 block text-[110px] font-bold leading-none tracking-tight text-accent-amber mix-blend-screen sm:text-[150px]"
              animate={{ x: [0, -4, 4, -2, 0], opacity: [0, 0.45, 0, 0.55, 0] }}
              transition={{ ...glitchTransition, delay: 0.15 }}
            >
              404
            </motion.span>
            <motion.span
              className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
              animate={{ top: ["0%", "100%", "0%"], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.18} className="mt-2">
          <DecliningChart />
        </Reveal>

        <Reveal delay={0.26}>
          <h1 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            This page has no supporting evidence.
          </h1>
        </Reveal>

        <Reveal delay={0.34}>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/70">
            The page you&rsquo;re looking for doesn&rsquo;t exist, has moved, or was never
            published.
          </p>
        </Reveal>

        <Reveal delay={0.42} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LinkButton href="/" variant="brand">
            Back to Home
          </LinkButton>
          <LinkButton href="/product/overview" variant="onDark">
            Explore the Product
          </LinkButton>
        </Reveal>

        <Reveal delay={0.5} className="mt-12 overflow-hidden border-y border-white/8 py-3">
          <div className="flex w-max animate-marquee">
            <TickerTrack />
            <TickerTrack />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
