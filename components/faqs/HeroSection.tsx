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
            "radial-gradient(600px 460px at 12% 0%, rgba(108,92,231,0.24), rgba(108,92,231,0) 65%)",
        }}
      />

      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,720px)_minmax(0,384px)] lg:justify-between lg:gap-16">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">FAQs</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Direct answers about Talvrin.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[720px] text-lg leading-8 text-white/90">
              Get clear answers about what Talvrin is, who it is for, how evidence and AI are
              handled, how research stays connected to change, and where to find deeper product,
              Trust or support guidance.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <LinkButton href="#featured" variant="onDark">
              Browse FAQs
            </LinkButton>
            <Link
              href="/product/overview"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Explore the Platform
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-[640px] text-sm leading-6 text-white/60">
              These answers summarize Talvrin product truth. Methodology, Trust, legal, coverage
              and operational pages remain authoritative for deeper or changing information.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white"
        >
          <Image
            src="/faq/image 319.png"
            alt="Analyst reviewing Talvrin research answers"
            fill
            priority
            sizes="(min-width: 1024px) 384px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
