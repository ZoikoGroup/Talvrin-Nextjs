import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6F5FB] py-24 sm:py-32">
      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[54px] leading-[1.12]">
            Build research that remains connected to the evidence.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            Explore how Talvrin connects evidence, research views, and
            monitoring into one platform — and see what's next for your
            research.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <LinkButton href="/explore" variant="primary">
            Explore Talvrin
          </LinkButton>
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center rounded-lg border-2 border-ink/15 px-7 py-[15px] text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink/40 hover:bg-ink/5"
          >
            See How Talvrin Works
          </Link>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-8 text-xs text-ink/50 font-medium">
            Research and intelligence platform. No trade execution. No
            manufactured investment recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
