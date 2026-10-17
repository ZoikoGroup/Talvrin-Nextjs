import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function EconomicStatisticsHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-[108px] pb-[86px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px 420px at 16% 6%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(560px 420px at 90% 82%, rgba(185,129,50,0.14), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,570.4px)_minmax(0,500px)] lg:gap-x-[99.2px]">
        <div>
          <Reveal>
            <p className="text-[13px] font-bold uppercase tracking-[1.17px] text-accent-amber">
              Markets / Source Universe
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-[33px]">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.56px] text-white sm:text-5xl lg:text-[56px] lg:leading-[61.6px]">
              Economic statistics, connected to the source and its context.
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="mt-[23.2px]">
            <p className="max-w-[560px] text-[19px] leading-[30.4px] text-white/72">
              Explore the official economic evidence behind public-market research. Understand
              which organization published a statistic, what it measures, when it applies, and
              how reported figures can change.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-4">
            <p className="max-w-[540px] text-sm leading-6 text-white/55">
              {
                "TALVRIN's Economic Statistics destination is designed to help researchers navigate approved official statistical sources and connect their definitions, reporting periods, releases and revisions to inspectable research evidence."
              }
            </p>
          </Reveal>

          <Reveal
            delay={0.4}
            className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <LinkButton href="/markets/market-coverage" variant="onDark">
              View Market Coverage
            </LinkButton>
            <a
              href="/how-talvrin-works"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Explore How Talvrin Works
            </a>
          </Reveal>

          <Reveal delay={0.5} className="mt-5">
            <p className="max-w-[560px] text-sm text-white/55">
              AI may assist interpretation; the underlying official source and methodology remain
              independently inspectable. Research infrastructure only — not investment advice,
              trading services or guarantees of market outcomes.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mt-[41px] aspect-[500/574] w-full overflow-hidden rounded-2xl border border-white/14 bg-white/4"
        >
          <Image
            src="/images/economic-statistics/economic-statistics-hero-meeting.webp"
            alt="Analyst presenting economic data charts to colleagues in a meeting room"
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
