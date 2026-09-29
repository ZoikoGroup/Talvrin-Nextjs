import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-ink/10 bg-white py-14 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Build macro research that stays connected to the releases behind it.
          </h2>
          <p className="max-w-[680px] text-base leading-6 text-slate-600">
            Explore how Talvrin can help you research economic releases, policy decisions, and
            central-bank communication, inspect the supporting evidence, and monitor what changes
            next.
          </p>
          <div className="mt-3 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="#macro-research" variant="primary">
              Explore Macro Research
            </LinkButton>
            <LinkButton href="#coverage-truth" variant="secondary">
              View Market Coverage
            </LinkButton>
          </div>
          <p className="max-w-[680px] text-sm text-slate-600">
            Research and intelligence platform. No economic forecasts. No trade execution.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
