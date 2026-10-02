import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function CtaSection() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-[640px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-white sm:text-4xl">
            Ready to put the guidance to work?
          </h2>

          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <LinkButton href="/resources/getting-started" variant="onDark">
              Getting Started
            </LinkButton>
            <LinkButton
              href="/request-access"
              variant="ghost"
              className="border-white/30 text-white hover:border-white/60 hover:bg-white/5"
            >
              Request Access
            </LinkButton>
          </div>

          <p className="pt-1.5 text-sm text-white/60">
            Research and intelligence platform. No trade execution. No manufactured investment
            recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
