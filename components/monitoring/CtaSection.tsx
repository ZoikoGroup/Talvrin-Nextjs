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
            Stay connected to the evidence that can change your view.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 max-w-[700px] text-base leading-7 text-gray-600">
            Monitoring links a saved research question to its sources, so you
            return only when something genuinely warrants another look.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
        >
          <LinkButton href="/request-access" variant="primary" className="px-7 py-[15px]">
            Request Access
          </LinkButton>
          <Link
            href="/product/how-talvrin-works"
            className="inline-flex items-center justify-center rounded-lg border-2 border-ink/15 bg-white px-7 py-[15px] text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink/40 hover:bg-ink/5"
          >
            See How Talvrin Works
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
