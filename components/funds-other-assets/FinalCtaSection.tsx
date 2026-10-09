import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section id="request-access" className="scroll-mt-24 border-t border-ink/10 bg-white py-14 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Be notified as fund and other-asset categories are released.
          </h2>
          <p className="max-w-[680px] text-base leading-6 text-slate-600">
            Request access to Talvrin, and explore how source-linked research and monitoring will
            apply to funds and other public-market assets as coverage expands.
          </p>
          <div className="mt-3 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/request-access" variant="primary">
              Request Access
            </LinkButton>
            <LinkButton href="#coverage-truth" variant="secondary">
              View Market Coverage
            </LinkButton>
          </div>
          <p className="max-w-[680px] text-sm text-slate-600">
            Research and intelligence platform. No trade execution, suitability ranking, asset
            allocation, or manufactured investment recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
