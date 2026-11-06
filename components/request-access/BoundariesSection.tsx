import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function BoundariesSection() {
  return (
    <section id="boundaries" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="max-w-[1032px]">
        <Reveal>
          <SectionEyebrow tone="amber">Coverage &amp; Product Boundaries</SectionEyebrow>
          <SectionHeading>What access to Talvrin is not.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal className="flex flex-col gap-2.5 rounded-xl border border-ink/10 bg-surface p-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.6px] text-accent-violet">Coverage boundary</h3>
            <p className="text-sm leading-6 text-ink">
              Talvrin&apos;s global architecture is not the same as universal live market coverage. Released
              coverage is explicit and governed.
            </p>
            <Link
              href="/markets/market-coverage"
              className="text-xs font-semibold text-accent-violet transition-colors hover:text-ink"
            >
              View Market Coverage →
            </Link>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-2.5 rounded-xl border border-ink/10 bg-surface p-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.6px] text-accent-violet">Product boundary</h3>
            <p className="text-sm leading-6 text-ink">
              Talvrin is a research and intelligence platform — not trade execution, not a suitability ranking, and
              not an investment recommendation engine. You remain responsible for your own decisions.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
