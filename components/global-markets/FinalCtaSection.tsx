import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-ink/8 bg-white py-14 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-[18px] text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[42px]">
            Research global markets with evidence you can inspect.
          </h2>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg">
            Start with a question, follow it to source-linked evidence and jurisdictional
            context, and monitor what changes next.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <LinkButton href="/request-access" variant="primary">
              Explore Talvrin
            </LinkButton>
            <LinkButton href="/markets/market-coverage" variant="secondary">
              View Market Coverage
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
