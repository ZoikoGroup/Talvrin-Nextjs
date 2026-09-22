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

        <Reveal delay={0.2}>
          <h1 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            This page has no supporting evidence.
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/70">
            The page you&rsquo;re looking for doesn&rsquo;t exist, has moved, or was never
            published.
          </p>
        </Reveal>

        <Reveal delay={0.4} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LinkButton href="/" variant="brand">
            Back to Home
          </LinkButton>
          <LinkButton href="/product/overview" variant="onDark">
            Explore the Product
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
