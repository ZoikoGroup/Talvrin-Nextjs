import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-ink/8 bg-white py-16 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[720px] flex-col items-center gap-[18px] text-center">
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[40px] lg:leading-[48px]">
            Build research that stays connected to the evidence.
          </h2>
          <p className="max-w-[700px] text-base leading-[26px] text-muted">
            Explore how Talvrin organizes provenance, context and change so a research view can be
            revisited when the underlying evidence changes. Core standards remain public; commercial
            actions follow proof rather than replace it.
          </p>
          <div className="flex w-full flex-col items-stretch gap-4 pt-2 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/request-access" className="px-7 py-[15px] text-base">
              Request Access
            </LinkButton>
            <LinkButton href="/trust/data-sources" variant="ghost" className="px-7 py-[15px] text-base">
              Explore Data Sources →
            </LinkButton>
          </div>
          <p className="max-w-[680px] pt-1 text-sm text-muted">
            Research and intelligence platform. No trade execution. No manufactured investment
            recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
