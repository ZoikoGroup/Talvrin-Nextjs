import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section className="bg-ink py-16 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[640px] flex-col items-center gap-[18px] text-center">
          <h2 className="text-3xl font-bold leading-[1.2] text-white sm:text-4xl lg:text-[34px] lg:leading-[40.8px]">
            Questions about a specific change?
          </h2>
          <div className="flex w-full flex-col items-stretch gap-4 pt-1 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/resources/contact-support" variant="onDark" className="px-7 py-[15px] text-base">
              Contact Support
            </LinkButton>
            <Link
              href="/resources/documentation"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-[15px] text-base font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Browse Documentation
            </Link>
          </div>
          <p className="max-w-[600px] pt-1 text-sm text-white/55">
            Release Notes is a factual change record, not a marketing feed. No invented releases,
            dates or versions.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
