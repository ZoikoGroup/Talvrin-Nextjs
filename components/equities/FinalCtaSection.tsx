import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-ink/10 bg-surface py-14 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Build equity research that stays connected to the company evidence.
          </h2>
          <p className="max-w-[680px] text-base leading-6 text-slate-600">
            Explore how Talvrin can help you research public companies and equity securities,
            inspect the supporting evidence, and monitor what changes next.
          </p>
          <div className="mt-3 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="#equity-research" variant="primary">
              Explore Equity Research
            </LinkButton>
            <LinkButton href="#coverage-truth" variant="secondary">
              View Market Coverage
            </LinkButton>
          </div>
          <p className="max-w-[680px] text-sm text-slate-600">
            Research and intelligence platform. No trade execution. No manufactured stock
            recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
