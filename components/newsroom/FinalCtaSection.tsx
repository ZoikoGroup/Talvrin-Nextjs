import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow } from "./shared";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-ink/10 bg-white py-14 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[680px] flex-col items-center gap-4 text-center">
          <SectionEyebrow>Continue Exploring Talvrin</SectionEyebrow>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Review how Talvrin approaches public-market evidence, trust, and ongoing monitoring.
          </h2>
          <div className="mt-2 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/company/about-talvrin" variant="primary">
              About Talvrin
            </LinkButton>
            <LinkButton href="/trust/trust-center" variant="secondary">
              Explore the Trust Center
            </LinkButton>
          </div>
          <Link
            href="/company/press-media"
            className="text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
          >
            Press and Media →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
