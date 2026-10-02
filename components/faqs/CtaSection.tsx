import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function CtaSection() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-[640px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-white sm:text-4xl">
            Still have a question we haven&apos;t
            <br className="hidden sm:block" /> covered?
          </h2>

          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <LinkButton href="/resources/documentation" variant="onDark">
              Browse Documentation
            </LinkButton>
            <LinkButton
              href="/resources/contact-support"
              variant="ghost"
              className="border-white/30 text-white hover:border-white/60 hover:bg-white/5"
            >
              Contact Support
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
