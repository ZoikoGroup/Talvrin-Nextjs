import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow } from "../alerts/shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-24 lg:py-[112px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(640px 440px at 16% 6%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(520px 380px at 92% 92%, rgba(185,129,50,0.12), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-10 xl:grid-cols-[minmax(0,740px)_minmax(0,445px)] xl:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Research / Source Methodology</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[56px] xl:text-[60px] xl:leading-[1.06]">
              Where our market evidence comes from.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[660px] text-base leading-7 text-white/75 sm:mt-6 sm:text-lg sm:leading-8">
              Understand how Talvrin finds, assesses, validates and presents
              sources — so every published fact can be examined in context.
            </p>
            <p className="mt-4 max-w-[660px] text-sm leading-6 text-white/60">
              This methodology describes the intended and approved rules;
              available features and coverage may vary by release.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <LinkButton href="#verification" variant="onDark" className="whitespace-nowrap px-7 py-[15px]">
              See how verification works
            </LinkButton>
            <Link
              href="#source-classes"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5 sm:text-base"
            >
              Understand source classes →
            </Link>
          </Reveal>

          <Reveal
            delay={0.4}
            className="mt-8 max-w-[720px] rounded-xl border border-white/10 bg-white/5 px-5 py-4 sm:px-6"
          >
            <p className="text-[11px] font-bold uppercase tracking-widest text-indigo-300">
              Core promise
            </p>
            <p className="mt-1.5 text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
              Show where a claim came from, what was checked, when it was true
              or known, and what remains uncertain. Evidence may be limited; the
              interface must never imply otherwise.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[445/530] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:aspect-[16/10] lg:aspect-[445/530]"
        >
          <Image
            src="/images/research/source-methodology/sm-hero-laptop-review.webp"
            alt="Three colleagues reviewing documents and a laptop at a meeting table"
            fill
            priority
            sizes="(min-width: 1280px) 445px, (min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
