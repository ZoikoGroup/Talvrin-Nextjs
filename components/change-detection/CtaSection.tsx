import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function CtaSection() {
  return (
    <section className="border-t border-ink/10 bg-surface py-20 sm:py-24 lg:py-[88px]">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <h2 className="max-w-[640px] text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[42px] lg:leading-[1.16]">
            A change alert is a reason to inspect evidence — not a conclusion
            about what to do in markets.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 max-w-[700px] text-base leading-7 text-gray-600">
            Learn how Talvrin moves from a question to source-linked evidence to
            a view you can revisit when that evidence changes.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
        >
          <LinkButton href="/product/how-talvrin-works" variant="primary" className="px-7 py-[15px]">
            Learn the Workflow
          </LinkButton>
          <Link
            href="/product/monitoring"
            className="inline-flex items-center justify-center rounded-lg border-2 border-ink/15 bg-white px-7 py-[15px] text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink/40 hover:bg-ink/5"
          >
            Explore Monitoring
          </Link>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-6 text-xs text-gray-600 sm:text-sm">
            Research and intelligence platform. No trade execution. No
            manufactured investment recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
