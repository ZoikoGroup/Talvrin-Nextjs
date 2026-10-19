import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function PublicCompaniesCtaSection() {
  return (
    <section className="border-t border-[#171335]/[0.08] bg-white py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-[#171335] sm:text-4xl lg:text-[42px] lg:leading-[48.3px]">
              Start with the original filing, not
              <br className="hidden sm:inline" />
              the headline.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-[#5D5A72] sm:text-[17px] sm:leading-[27.2px]">
              Browse the issuer registry, request access to the full research workflow, or review Talvrin&apos;s
              <br className="hidden sm:inline" />
              verified market coverage.
            </p>
          </Reveal>

          <Reveal
            delay={0.2}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4"
          >
            <Link
              href="#issuer-directory"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#171335] px-7 py-[16.8px] text-base font-semibold text-[#F6F5FB] transition-all duration-300 hover:bg-[#24204a] hover:shadow-lg sm:w-auto"
            >
              Browse the Issuer Directory
            </Link>
            <Link
              href="/request-access"
              className="inline-flex w-full items-center justify-center rounded-lg border border-[#171335]/25 bg-transparent px-7 py-[15.8px] text-base font-semibold text-[#171335] transition-colors duration-300 hover:border-[#171335]/60 hover:bg-[#171335]/5 sm:w-auto"
            >
              Request Access
            </Link>
            <Link
              href="/markets/market-coverage"
              className="inline-flex w-full items-center justify-center rounded-lg border border-[#171335]/25 bg-transparent px-7 py-[15.8px] text-base font-semibold text-[#171335] transition-colors duration-300 hover:border-[#171335]/60 hover:bg-[#171335]/5 sm:w-auto"
            >
              View Market Coverage
            </Link>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-7 text-sm text-[#5D5A72]">
              No advice or predictions. Company disclosures are evidence; Talvrin interpretation is not the issuer or regulator.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
