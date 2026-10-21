import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function CtaSection() {
  return (
    <section className="border-t border-ink/10 bg-surface py-20 sm:py-24 lg:py-[88px]">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <h2 className="max-w-[560px] text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[38px] lg:leading-[1.2]">
            Read the standard, then read the evidence.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 max-w-[680px] text-base leading-7 text-gray-600">
            Explore published research built on this methodology, with
            authority, rights, timing and source always in view.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
        >
          <LinkButton href="/research/research-library" variant="primary" className="px-7 py-[15px]">
            Explore published research
          </LinkButton>
          <Link
            href="/trust/evidence-standards"
            className="inline-flex items-center justify-center rounded-lg border border-ink/20 bg-white px-7 py-[15px] text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink/40 hover:bg-ink/5 sm:text-base"
          >
            See Evidence Standards
          </Link>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-6 max-w-[680px] text-xs text-gray-600 sm:text-sm">
            Source-origin and validation checks reduce error risk; they do not
            guarantee completeness or correctness.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
