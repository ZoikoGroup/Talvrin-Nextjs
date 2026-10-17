import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCta() {
  return (
    <section className="border-t border-ink/8 bg-white py-20 sm:py-24">
      <Container className="mx-auto max-w-[720px] text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[42px] lg:leading-[48.3px]">
            Start with the official release, not the headline.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-[18px]">
          <p className="text-base leading-[27.2px] text-slate-600 sm:text-lg">
            Browse the statistical source registry, request access to the full research workflow,
            or review {"Talvrin's"} verified market coverage.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <LinkButton href="/economic-statistics" variant="primary">
            Browse the Source Directory
          </LinkButton>
          <LinkButton href="/request-access" variant="secondary">
            Request Access
          </LinkButton>
          <LinkButton href="/markets/market-coverage" variant="ghost">
            View Market Coverage
          </LinkButton>
        </Reveal>

        <Reveal delay={0.3} className="mt-5">
          <p className="text-sm text-slate-600">
            No advice or predictions. Economic statistics are evidence; Talvrin interpretation is
            not the issuing authority.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
