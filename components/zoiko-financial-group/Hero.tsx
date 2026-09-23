import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#171335] py-16 lg:pt-[108px] lg:pb-[100px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(108,92,231,0.2)_0%,transparent_65%),radial-gradient(circle_at_85%_90%,rgba(185,129,50,0.12)_0%,transparent_60%)]"
      />
      <Container className="relative z-10 max-w-[1320px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-[40px]">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-wide text-[#B98132] font-['IBM_Plex_Sans']">
                ZOIKO FINANCIAL GROUP
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-[#F6F5FB] font-['IBM_Plex_Sans'] sm:text-5xl lg:text-[56px] lg:leading-[61.60px]">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Parent organization of
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Zoiko Markets.
                </span>
              </h1>
              <p className="mt-6 max-w-[620px] text-base sm:text-lg font-semibold leading-8 text-[#F6F5FB]/90 font-['IBM_Plex_Sans']">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Zoiko Financial Group is the parent organization of Zoiko Markets. Talvrin is a
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  trading name of Zoiko Markets.
                </span>
              </p>
              <p className="mt-4 max-w-[620px] text-sm sm:text-base font-normal leading-relaxed text-[#F6F5FB]/70 font-['IBM_Plex_Sans']">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  This page explains that verified corporate relationship and provides routes to the
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  company and product information connected to it.
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/zoiko-financial-group"
                className="inline-flex h-[50px] items-center justify-center rounded-[8px] bg-[#F6F5FB] px-6 text-sm sm:text-base font-semibold text-[#171335] font-['IBM_Plex_Sans'] transition-colors hover:bg-white shadow-xs"
              >
                About Zoiko Markets
              </Link>
              <Link
                href="/about-talvrin"
                className="inline-flex h-[50px] items-center justify-center rounded-[8px] border border-white/20 bg-transparent px-6 text-sm sm:text-base font-semibold text-[#F6F5FB] font-['IBM_Plex_Sans'] transition-colors hover:bg-white/10"
              >
                Explore Talvrin
              </Link>
              <Link
                href="/request-access"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#B4A8FF] font-['IBM_Plex_Sans'] hover:underline"
              >
                <span>Contact Talvrin</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block shrink-0 transition-transform hover:translate-x-1 text-[#B4A8FF]"
                >
                  <path
                    d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Reveal>
          </div>

          {/* Right Column: Image */}
          <div className="w-full flex justify-center lg:justify-end">
            <Reveal delay={0.3} className="w-full max-w-[500px]">
              <div className="relative aspect-[491/384] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/zoiko-financial-group/image 90 (1).png"
                  alt="Zoiko Financial Group"
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}