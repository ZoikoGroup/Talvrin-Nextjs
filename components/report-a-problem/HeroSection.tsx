import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMAGE_DIR } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(800px 560px at 12% 0%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-8 xl:grid-cols-[minmax(0,705px)_minmax(0,498px)] xl:justify-between">
        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent-amber">Support</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.56px] text-white sm:text-5xl lg:text-6xl lg:leading-[61.6px]">
              Report a Problem
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-[680px] text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Use this page to report a non-security problem with Talvrin. Tell us what you were
              trying to do, what happened, and where it happened.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div
              role="note"
              className="flex max-w-[680px] items-start gap-3 rounded-xl border border-white/20 bg-white/10 px-5 pb-4 pt-5 sm:pt-6"
            >
              <span aria-hidden="true" className="pt-0.5 text-white">
                ⚑
              </span>
              <p className="text-[15px] leading-6 text-white sm:text-base">
                <strong className="font-bold">
                  Don&apos;t include passwords, one-time codes, recovery codes, API keys, private
                  keys, or other secrets.
                </strong>{" "}
                We will never ask you for them here.
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={0.3}
            className="flex flex-col items-stretch gap-4 pt-5 sm:flex-row sm:items-center"
          >
            <a
              href="#whats-going-wrong"
              className="rounded-lg bg-surface px-6 py-3.5 text-center text-base font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Report a problem
            </a>
            <a
              href="#known-issues"
              className="text-center text-sm font-semibold text-white/90 transition-colors hover:text-white sm:text-left"
            >
              Check System Status first →
            </a>
          </Reveal>

          <Reveal delay={0.4} className="flex flex-col gap-2 pt-1 text-sm font-semibold">
            <p className="text-white/60">
              Security issue? Security Contact is not yet published for this build — do not submit
              vulnerability details through this form.
            </p>
            <Link
              href="/support/account-support"
              className="w-fit text-white/70 transition-colors hover:text-white"
            >
              Can&apos;t sign in or recover access? Go to Account Support →
            </Link>
            <Link
              href="/support/accessibility-support"
              className="w-fit text-white/70 transition-colors hover:text-white"
            >
              Accessibility barrier? Go to Accessibility Support →
            </Link>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[498/507] w-full max-w-[498px] overflow-hidden rounded-2xl bg-white lg:mx-0"
        >
          <Image
            src={`${IMAGE_DIR}/report-a-problem-hero-meeting.webp`}
            alt="Two colleagues discussing work across an office table"
            fill
            priority
            sizes="(min-width: 1280px) 498px, (min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
