import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-ink/8 bg-surface py-14 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-[18px] text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[42px]">
            Build a view you can trace back to the source.
          </h2>
          <p className="max-w-[690px] text-base text-slate-600 sm:text-lg">
            Explore an evidence layer designed to keep public-market research connected to
            identifiable sources, provenance, timing and context — so you can inspect what supports
            a view, recognize what contradicts it, and return when the evidence changes.
          </p>
          <div className="mt-2 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/request-access" variant="primary">
              Request Access
            </LinkButton>
            <LinkButton href="/product/research-workspace" variant="secondary">
              Explore Research Workspace
            </LinkButton>
          </div>
          <p className="max-w-xl text-sm text-slate-500">
            Research and intelligence platform. No trade execution. No manufactured investment
            recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
