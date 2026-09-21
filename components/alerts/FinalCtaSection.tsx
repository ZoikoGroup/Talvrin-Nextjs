import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-ink/8 bg-surface py-14 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-[18px] text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[42px]">
            Stay connected to the research that needs your attention.
          </h2>
          <p className="max-w-[690px] text-base text-slate-600 sm:text-lg">
            Explore how Talvrin can connect approved monitoring conditions to clear, traceable
            alerts that return you to the evidence and research context.
          </p>
          <div className="mt-2 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/request-access" variant="primary">
              Request Access
            </LinkButton>
            <LinkButton href="/product/monitoring" variant="secondary">
              Explore Monitoring
            </LinkButton>
          </div>
          <p className="max-w-[700px] text-sm text-slate-500">
            Research and intelligence platform. No trade execution. No manufactured investment
            recommendations. Exact alert capabilities vary by approved product availability.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
