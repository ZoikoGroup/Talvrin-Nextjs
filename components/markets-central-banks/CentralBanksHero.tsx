import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function CentralBanksHero() {
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
              Follow central-bank evidence back to its source.
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="mt-[23.2px]">
            <p className="max-w-[560px] text-[19px] leading-[30.4px] text-white/72">
              Explore institution-published monetary-policy material with provenance, publication
              context and clear coverage status. Inspect what was published, preserve your research
              context, and revisit it when the underlying evidence changes.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-4">
            <p className="max-w-[540px] text-sm leading-6 text-white/55">
              {
                "TALVRIN's Central Banks destination is designed to organize source-linked monetary-policy evidence by institution, document type and date, subject to confirmed dataset rights and released coverage."
              }
            </p>
          </Reveal>

          <Reveal
            delay={0.4}
            className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <LinkButton href="/how-talvrin-works" variant="onDark">
              Explore How TALVRIN Works
            </LinkButton>
            <a
              href="/markets"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              View Market Coverage
            </a>
          </Reveal>

          <Reveal delay={0.5} className="mt-5">
            <p className="max-w-[560px] text-sm text-white/55">
              No advice or predictions. Central-bank publications are evidence; TALVRIN
              interpretation is not the issuing authority.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mt-[41px] aspect-[500/528] w-full overflow-hidden rounded-2xl border border-white/14 bg-white/4"
        >
          <Image
            src="/images/markets-central-banks/markets-central-banks-hero-meeting.webp"
            alt="Two analysts reviewing central-bank evidence together in an office"
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
