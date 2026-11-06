import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#171335] py-16 sm:py-20 lg:py-24">
      {/* Background Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at 12% 0%, rgba(108, 92, 231, 0.2) 0%, rgba(108, 92, 231, 0) 65%), radial-gradient(circle at 92% 90%, rgba(185, 129, 50, 0.12) 0%, rgba(185, 129, 50, 0) 60%)`,
        }}
      />

      <Container className="relative z-10 max-w-[1320px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_392px] xl:gap-16">
          {/* Left Column */}
          <div className="flex flex-col">
            <Reveal>
              <p className="text-[13px] font-bold uppercase tracking-[0.09em] text-[#B98132]">
                TALVRIN / CONNECT
              </p>
              <h1 className="mt-3 text-4xl font-bold leading-[1.1] tracking-[-0.01em] text-[#F6F5FB] sm:text-5xl lg:text-[56px] lg:leading-[61.6px]">
                Build useful connections
                <br />
                around better market
                <br />
                evidence.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[785px] text-lg leading-[1.65] text-[rgba(246,245,251,0.85)] sm:text-[19px] sm:leading-[31.35px]">
                Talvrin welcomes partnership conversations that can strengthen evidence-led
                <br className="hidden md:inline" />
                public-market research, responsible data use, institutional workflows, or
                <br className="hidden md:inline" />
                complementary technology — where there&apos;s a clear strategic fit.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-4 max-w-[785px] text-base leading-[25.6px] text-[rgba(246,245,251,0.65)]">
                This is a discovery and qualification route, not a formal partner program. We don&apos;t publish
                <br className="hidden md:inline" />
                partner tiers, certifications, or a partner roster until there&apos;s an approved basis for them.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#start-enquiry"
                className="inline-flex items-center justify-center rounded-[8px] bg-[#F6F5FB] px-[26px] py-[15px] text-base font-semibold text-[#171335] transition-all duration-200 hover:bg-white hover:shadow-md"
              >
                Explore a Partnership
              </a>
              <Link
                href="/trust/evidence-standards"
                className="text-sm font-semibold text-[rgba(246,245,251,0.85)] transition-colors duration-200 hover:text-white"
              >
                Review Trust & Evidence Principles →
              </Link>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-5 text-[13px] leading-[20.8px] text-[rgba(246,245,251,0.5)]">
                A partnership enquiry does not imply acceptance, exclusivity, program eligibility, or commercial terms.
              </p>
            </Reveal>
          </div>

          {/* Right Hero Image Card */}
          <Reveal delay={0.2} className="flex justify-center lg:justify-end">
            <div className="relative aspect-[392/499] w-full max-w-[392px] overflow-hidden rounded-[16px] bg-white shadow-xl">
              <Image
                src={`${IMG}/partnerships-hero.png`}
                alt="Build useful connections around better market evidence"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 392px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
