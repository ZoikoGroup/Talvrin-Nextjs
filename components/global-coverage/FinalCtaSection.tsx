import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-ink/10 bg-white py-14 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            See what&apos;s released before you assume regional availability.
          </h2>
          <p className="max-w-[700px] text-base leading-6 text-slate-600">
            Request access to Talvrin, backed by coverage and regional pages that never overstate
            what is actually published.
          </p>
          <div className="mt-3 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/request-access" variant="primary" className="px-7 py-[15px] text-base">
              Request Access
            </LinkButton>
            <LinkButton href="#regions" variant="ghost" className="px-7 py-[15px] text-base">
              Back to Region Discovery
            </LinkButton>
          </div>
          <p className="max-w-[700px] text-sm text-slate-600">
            Research and intelligence platform. No trade execution, suitability ranking, asset
            allocation, or manufactured investment recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
