import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function CTA() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <Container>
        <Reveal className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center">
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-white sm:text-[34px] lg:text-[42px] lg:leading-[48.3px]">
            See what&apos;s actually released before you assume institutional scope.
          </h2>
          <p className="max-w-[640px] text-base leading-7 text-surface/72 lg:text-[17px] lg:leading-[27.2px]">
            Request access to Talvrin, or route a qualified requirement to the responsible
            commercial owner — backed by pages that never overstate what is published.
          </p>

          <div className="mt-2 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <Link
              href="#request-access"
              className="inline-flex items-center justify-center rounded-lg bg-surface px-7 py-4 text-center text-base font-semibold text-ink transition-colors hover:bg-white"
            >
              Request Access
            </Link>
            <Link
              href="/global/coverage"
              className="inline-flex items-center justify-center rounded-lg border border-surface/30 px-7 py-4 text-center text-base font-semibold text-surface transition-colors hover:border-surface/60 hover:bg-surface/5"
            >
              Back to Global Coverage
            </Link>
          </div>

          <p className="mt-2 max-w-[700px] text-sm leading-5 text-surface/55">
            Research and intelligence platform. No trade execution, suitability ranking, asset
            allocation, or manufactured investment recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
