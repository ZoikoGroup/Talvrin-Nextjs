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
            Build research that stays connected to the evidence.
          </h2>
          <p className="max-w-xl text-base text-white/75 sm:text-lg">
            And know where to look when that evidence changes.
          </p>
          <div className="flex flex-col items-center gap-3 pt-1 sm:flex-row">
            <LinkButton href="/product/platform-overview" variant="onDark">
              Explore the Platform
            </LinkButton>
            <Link
              href="/resources/contact-support"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Contact Support
            </Link>
          </div>
          <p className="max-w-xl pt-1 text-sm text-white/55">
            Research and intelligence platform. No trade execution. No manufactured investment
            recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
