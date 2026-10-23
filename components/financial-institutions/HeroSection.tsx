import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { IMG, SectionEyebrow } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(640px 440px at 16% 6%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 88% 88%, rgba(185,129,50,0.10), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,578px)_minmax(0,500px)] lg:justify-between lg:gap-10">
        <div>
          <Reveal>
            <SectionEyebrow>Financial Institutions</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 text-4xl font-bold leading-[1.16] tracking-tight text-white sm:text-5xl sm:leading-[1.24]">
              Evidence you can examine. Research you can defend.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[560px] text-lg leading-8 text-white/70">
              Give institutional research teams a clearer view of the primary sources, assumptions
              and changes behind public-market information. Talvrin organizes evidence for
              independent analysis and accountable decisions.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 flex flex-col items-stretch gap-4 sm:items-start">
            <LinkButton href="#evidence" variant="onDark" className="px-7 py-[15px] text-base">
              Explore the evidence approach
            </LinkButton>
            <Link
              href="#enquiry"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-base font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Discuss institutional requirements
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 text-sm text-white/60">
              Displayed availability, controls and coverage depend on approved product scope.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[500/493] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
        >
          <Image
            src={`${IMG}/fi-hero-team.webp`}
            alt="Five colleagues smiling together in a modern office"
            fill
            priority
            sizes="(min-width: 1024px) 500px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
