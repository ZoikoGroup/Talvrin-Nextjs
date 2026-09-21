import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F5FB] py-24 sm:py-32">
      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <h2 className="max-w-3xl max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[54px] leading-[1.12]">
            Use AI to navigate the evidence — without turning it into the
            evidence.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            Explore how Talvrin AI Assistance can help you discover, organize,
            compare and understand evidence — while keeping every source
            independently inspectable.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <LinkButton href="/request-access" variant="primary">
            Request Access
          </LinkButton>
          <Link
            href="/explore-evidence"
            className="inline-flex items-center justify-center rounded-lg border-2 border-ink/15 px-7 py-[15px] text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink/40 hover:bg-ink/5"
          >
            Explore Evidence
          </Link>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-8 text-xs text-ink/50">
            Research and intelligence platform. No trade execution. No
            manufactured investment recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
