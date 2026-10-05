import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28 lg:py-[123px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(700px 500px at 12% 0%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 95% 100%, rgba(185,129,50,0.08), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,785px)_minmax(0,370px)] lg:justify-between">
        <div>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent-amber">
              Release Notes
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-6">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.56px] text-white sm:text-5xl lg:text-[56px] lg:leading-[61.6px]">
              See what changed in Talvrin.
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="mt-6">
            <p className="max-w-[720px] text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Follow meaningful Talvrin product changes, understand when they took effect, see who
              or what is affected, and find the documentation or migration guidance you need.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <LinkButton href="#latest-releases" variant="onDark" className="px-7 py-[15px] text-base">
              View latest release notes
            </LinkButton>
            <Link
              href="/resources/documentation"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-[15px] text-base font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Browse Documentation
            </Link>
            <Link
              href="/resources/contact-support"
              className="text-center text-[15px] font-semibold text-white/75 transition-colors hover:text-white"
            >
              or Contact Support →
            </Link>
          </Reveal>

          <Reveal delay={0.4} className="mt-6 max-w-[660px]">
            <p className="text-sm leading-6 text-white/60">
              Release Notes describe released product changes. Live incidents and maintenance belong
              to Service Status, and current coverage comes from governed coverage sources.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[370/379] w-full max-w-[370px] overflow-hidden rounded-2xl bg-white lg:mx-0"
        >
          <Image
            src="/images/resources/release-notes/release-notes-hero-meeting.webp"
            alt="A presenter walking a team through product updates around a meeting table"
            fill
            priority
            sizes="(min-width: 1024px) 370px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
