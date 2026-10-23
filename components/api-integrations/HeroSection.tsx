import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { IMG, SectionEyebrow } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(640px 440px at 14% 4%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 88% 88%, rgba(185,129,50,0.10), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,414px)] lg:gap-14">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Resources · Documentation</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 text-4xl font-bold leading-[1.18] tracking-tight text-white sm:text-5xl sm:leading-[1.26]">
              Connect trusted market research to your workflows.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[700px] text-lg leading-8 text-white/80">
              Controlled, permission-aware access to Talvrin evidence and research outputs — scoped
              by contract, entitlement, market and data rights. Availability depends on where each
              capability sits in our release process, shown exactly as it stands below.
            </p>
          </Reveal>

          <Reveal
            delay={0.25}
            className="mt-5 max-w-[700px] rounded-[10px] border border-white/20 bg-white/5 px-4 pb-3.5 pt-5"
          >
            <p className="text-sm font-bold leading-5 text-white">
              No live endpoint, sandbox credential, SDK or webhook delivery exists yet.{" "}
              <span className="text-white/80">
                This page documents the governance, security and evidence model this capability
                must meet before any of that ships.
              </span>
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <LinkButton href="#capabilities" variant="onDark" className="px-7 py-[15px] text-base">
              Explore documented capabilities
            </LinkButton>
            <Link
              href="/resources/contact-support"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-base font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Request integration assessment
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 text-sm text-white/60">
              Research and intelligence platform. No trade execution. No manufactured investment
              recommendations.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[414/501] w-full overflow-hidden rounded-2xl bg-white/5"
        >
          <Image
            src={`${IMG}/api-hero-analyst.webp`}
            alt="Smiling analyst with glasses seated in a bright office"
            fill
            priority
            sizes="(min-width: 1024px) 414px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
