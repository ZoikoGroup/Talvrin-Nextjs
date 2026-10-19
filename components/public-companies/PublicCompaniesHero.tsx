import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function PublicCompaniesHero() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-24"
      style={{ backgroundColor: "rgba(23, 19, 53, 1)" }}
    >
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_500px] lg:gap-16 xl:grid-cols-[570px_500px] xl:justify-between">
          <div>
            <Reveal>
              <p className="text-[13px] font-bold uppercase tracking-[0.09em] text-[#B98132]">
                MARKETS / SOURCE UNIVERSE / PUBLIC COMPANIES
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-[-0.01em] text-[#F6F5FB] sm:text-5xl lg:text-[56px] lg:leading-[61.6px]">
                Follow public-
                <br className="hidden sm:inline" />
                company evidence
                <br className="hidden sm:inline" />
                back to its source.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-[#F6F5FB]/[0.72] sm:text-[19px] sm:leading-[30.4px]">
                Discover issuer disclosures and supported company evidence
                <br className="hidden sm:inline" />
                with the original source, reporting period, publication context and
                <br className="hidden sm:inline" />
                changes kept visible. Availability depends on approved company,
                <br className="hidden sm:inline" />
                market and document coverage.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-4 text-sm leading-relaxed text-[#F6F5FB]/[0.55] sm:text-[15px] sm:leading-[24px]">
                TALVRIN is designed to connect public-company research questions to
                <br className="hidden sm:inline" />
                attributable issuer evidence, so researchers can inspect documents, preserve
                <br className="hidden sm:inline" />
                context and revisit their views as new information appears.
              </p>
            </Reveal>

            <Reveal
              delay={0.3}
              className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="#issuer-directory"
                className="inline-flex items-center justify-center rounded-lg bg-[#F6F5FB] px-7 py-[16.8px] text-center text-base font-semibold text-[#171335] transition-all duration-300 hover:bg-white hover:shadow-lg"
              >
                Explore Supported Company Evidence
              </Link>
              <Link
                href="/how-talvrin-works"
                className="inline-flex items-center justify-center rounded-lg border border-[#F6F5FB]/30 bg-transparent px-7 py-[15.8px] text-center text-base font-semibold text-[#F6F5FB] transition-colors duration-300 hover:border-[#F6F5FB]/60 hover:bg-[#F6F5FB]/5"
              >
                How Talvrin Works
              </Link>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="mt-6 text-xs leading-relaxed text-[#F6F5FB]/[0.55] sm:text-sm">
                AI may assist reading and organization. Source disclosures, not generated text, remain the
                <br className="hidden sm:inline" />
                authority. Research infrastructure only — not investment advice, trading services or a
                <br className="hidden sm:inline" />
                recommendation to buy, sell or hold any security.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="w-full">
            <div className="relative mx-auto aspect-[500/584] w-full max-w-[500px] overflow-hidden rounded-2xl border border-[#F6F5FB]/[0.14] bg-[#F6F5FB]/[0.04] lg:-translate-x-[45px]">
              <Image
                src="/images/markets/public-companies/image_661.png"
                alt="Public company source-linked evidence investigation and financial disclosure review"
                fill
                priority
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
