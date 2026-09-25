import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(640px 440px at 16% 6%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 88% 88%, rgba(185,129,50,0.12), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,430px)] lg:gap-10 xl:grid-cols-[minmax(0,607px)_minmax(0,542px)] xl:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Developers · Authentication</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 text-4xl font-bold leading-[1.14] tracking-tight text-white sm:text-5xl lg:text-[48px]">
              Authenticate to Talvrin without widening access beyond what your application needs.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[560px] text-lg leading-7 text-white/70">
              Authentication proves identity or credential possession. Authorization, entitlement,
              coverage, and data rights are evaluated separately — a valid credential is never
              treated as universal access.
            </p>
          </Reveal>

          <Reveal
            delay={0.25}
            className="mt-5 max-w-[560px] rounded-[10px] border border-white/20 bg-white/5 px-4 pb-3.5 pt-5"
          >
            <p className="text-sm font-bold leading-5 text-white">
              No authentication method is currently published for this surface.{" "}
              <span className="text-white/80">
                Nothing below should be read as confirming a protocol, credential type, or endpoint.
              </span>
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <LinkButton href="#access-model" variant="onDark">
              Read the Access Model
            </LinkButton>
            <Link
              href="/developers/api-documentation"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              API Documentation
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-lg text-sm text-white/60">
              Research and intelligence platform. No trade execution. No manufactured investment
              recommendations.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[542/500] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:aspect-[542/635]"
        >
          <Image
            src="/images/developers/authentication/authentication-hero-tablet.webp"
            alt="Analyst using a tablet while a colleague presents a chart"
            fill
            priority
            sizes="(min-width: 1280px) 542px, (min-width: 1024px) 430px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
