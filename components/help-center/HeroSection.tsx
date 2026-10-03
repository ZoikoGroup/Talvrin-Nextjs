import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px 460px at 12% 0%, rgba(108,92,231,0.24), rgba(108,92,231,0) 65%)",
        }}
      />

      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-16">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Help Center</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Find the guidance you need to
              <br className="hidden sm:block" /> use Talvrin with confidence.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[720px] text-lg leading-8 text-white/90">
              Get task-based help for understanding Talvrin, working with evidence, building
              research views, monitoring change, and finding the right next step. Talvrin is a
              research and market-intelligence platform; Help Center content is not investment
              advice.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <LinkButton href="#quick-paths" variant="onDark">
              Browse help topics
            </LinkButton>
            <Link
              href="/resources/getting-started"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Start with Getting Started
            </Link>
            <Link
              href="/resources/contact-support"
              className="inline-flex items-center justify-center text-sm font-semibold text-white/75 transition-colors hover:text-white"
            >
              or Contact Support →
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-[660px] text-sm leading-6 text-white/60">
              Help content is maintained by Talvrin content and product owners. Feature
              availability and support channels follow current published product state.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[368/474] w-full overflow-hidden rounded-2xl border border-white/10 bg-white"
        >
          <Image
            src="/help-center/image 332.png"
            alt="Talvrin Help Center guidance overview"
            fill
            priority
            sizes="(min-width: 1024px) 440px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
