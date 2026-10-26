import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG } from "./shared";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(640px 440px at 16% 6%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(560px 420px at 90% 82%, rgba(185,129,50,0.14), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,640px)_minmax(0,415px)] lg:justify-between lg:gap-10 lg:py-[108px]">
        <div>
          <Reveal>
            <p className="text-[13px] font-bold uppercase tracking-[1.17px] text-accent-amber">
              Global / Global Institutions
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 text-[34px] font-bold leading-[1.1] tracking-tight text-white sm:text-[44px] lg:text-[58px] lg:leading-[63.8px] lg:tracking-[-0.58px]">
              Global Institutions
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 max-w-[640px] text-lg leading-8 text-surface/72 lg:text-[19px] lg:leading-[30.4px]">
              Institutional research workflows across markets, with traceable evidence and
              governance.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 max-w-[620px] text-sm leading-6 text-surface/55 lg:text-[15px] lg:leading-6">
              Talvrin is building a source-linked research and monitoring workspace for global
              public markets. This page explains how institutions evaluate that architecture,
              without implying named clients, awards or partners.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-5 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/global/coverage"
              className="inline-flex items-center justify-center rounded-lg bg-surface px-7 py-4 text-center text-base font-semibold text-ink transition-colors hover:bg-white"
            >
              View Current Coverage
            </Link>
            <Link
              href="#how-talvrin-works"
              className="inline-flex items-center justify-center rounded-lg border border-surface/30 px-7 py-4 text-center text-base font-semibold text-surface transition-colors hover:border-surface/60 hover:bg-surface/5"
            >
              How Talvrin Works
            </Link>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-4 max-w-[620px] text-xs leading-5 text-surface/50">
              Market, source, language, and access availability depend on published verification.
              Research is not trade execution or investment advice. Security researcher? Use{" "}
              <Link href="/trust/security" className="text-surface/75 underline underline-offset-2">
                Security Contact
              </Link>{" "}
              for responsible disclosure.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[415/392] w-full max-w-[452px] overflow-hidden rounded-xl bg-white lg:mx-0 lg:justify-self-end"
        >
          <Image
            src={`${IMG}/global-institutions-hero-meeting.webp`}
            alt="Colleagues reviewing research evidence together in a meeting room"
            fill
            priority
            sizes="(min-width: 1024px) 415px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
