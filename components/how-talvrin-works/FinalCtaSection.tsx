import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-b border-[#171335]/[0.08] bg-[#f6f5fb] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-[700px] text-center">
          <Reveal>
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#171335] sm:text-4xl lg:text-[42px]">
              Start with a question worth
              <br />
              investigating.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-[#5d5a72] sm:text-[17px]">
              See the evidence, build a research view you can revisit, and come back when something meaningful changes.
            </p>
          </Reveal>

          {/* Buttons */}
          <Reveal
            delay={0.15}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/request-access"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#171335] px-7 py-3.5 text-base font-semibold text-[#f6f5fb] transition-all duration-200 hover:bg-[#24204a] hover:shadow-md sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171335]"
            >
              Request Access
            </Link>
            <Link
              href="/product/research-workspace"
              className="inline-flex w-full items-center justify-center rounded-lg border border-[#171335]/25 bg-transparent px-7 py-3.5 text-base font-semibold text-[#171335] transition-all duration-200 hover:border-[#171335]/50 hover:bg-black/5 sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171335]"
            >
              Explore Research Workspace
            </Link>
          </Reveal>

          {/* Disclaimer Footnote */}
          <Reveal delay={0.2} className="mt-7">
            <p className="text-sm leading-snug text-[#5d5a72]">
              Research and intelligence platform. No trade execution. No manufactured investment recommendations.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
