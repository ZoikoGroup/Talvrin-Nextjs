import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-ink/10 bg-surface py-14 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Nothing to integrate yet — but the structure is exact.
          </h2>
          <p className="max-w-[660px] text-base leading-6 text-slate-600">
            Start with the current Developer Overview, or reach out about enterprise integration
            once you&apos;re ready to talk before anything ships.
          </p>
          <div className="mt-3 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/developers/overview" variant="primary">
              Developer Overview
            </LinkButton>
            <LinkButton href="/solutions/enterprise" variant="secondary">
              Enterprise Enquiries
            </LinkButton>
          </div>
          <p className="max-w-[680px] text-sm text-slate-600">
            Research and intelligence platform. No trade execution. No manufactured investment
            recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
