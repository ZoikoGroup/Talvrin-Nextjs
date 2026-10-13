import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-[#171335]/10 bg-[#f6f5fb] py-16 sm:py-20 lg:py-24">
      <Container className="max-w-[760px] text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-[#171335] sm:text-4xl lg:text-[42px] lg:leading-[1.18]">
            Come back to where the evidence
            <br className="hidden sm:inline" />
            {" "}actually stood.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-[700px] text-base leading-relaxed text-[#5d5a72] sm:text-[17px]">
            Saved Research keeps a question, its view and its sources together, so returning to a thesis means returning to the reasoning — not a blank page.
          </p>
        </Reveal>

        {/* Buttons Row */}
        <Reveal
          delay={0.15}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4"
        >
          <Link
            href="/request-access"
            className="inline-flex w-full items-center justify-center rounded-lg bg-[#171335] px-7 py-3.5 text-base font-semibold text-[#f6f5fb] transition-all duration-200 hover:bg-[#24204a] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171335] sm:w-auto"
          >
            Request Access
          </Link>
          <Link
            href="/how-talvrin-works"
            className="inline-flex w-full items-center justify-center rounded-lg border border-[#171335]/25 bg-transparent px-7 py-3.5 text-base font-semibold text-[#171335] transition-all duration-200 hover:border-[#171335]/60 hover:bg-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171335] sm:w-auto"
          >
            See How Talvrin Works
          </Link>
        </Reveal>

        {/* Footnote */}
        <Reveal delay={0.2} className="mt-8">
          <p className="text-sm leading-relaxed text-[#5d5a72]">
            Research and intelligence platform. No trade execution. No manufactured investment recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
