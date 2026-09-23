import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function CorporateIdentity() {
  return (
    <section className="bg-[#171335] py-20 lg:py-28 relative overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(108,92,231,0.15)_0%,transparent_50%)]" />
      <Container className="relative z-10 max-w-[1320px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-wide text-[#B98132] font-['IBM_Plex_Sans']">
                COMPANY CONTEXT
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#F6F5FB] font-['IBM_Plex_Sans'] sm:text-4xl lg:text-[44px] lg:leading-[48px] max-w-xl">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Talvrin is a trading name of
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Zoiko Markets, a Zoiko Financial
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Group company.
                </span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-[#F6F5FB]/75 font-['IBM_Plex_Sans'] leading-relaxed max-w-2xl">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Every leadership title must identify the entity and public scope to which it applies.
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-6 sm:gap-8">
              <Link
                href="/zoiko-financial-group"
                className="group flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B4A8FF] hover:underline"
              >
                <span>About Zoiko Markets</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/zoiko-financial-group"
                className="group flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B4A8FF] hover:underline"
              >
                <span>Zoiko Financial Group</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/about-talvrin"
                className="group flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B4A8FF] hover:underline"
              >
                <span>About Talvrin</span>
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <Reveal delay={0.4} className="w-full max-w-[480px]">
              <div className="relative aspect-[447/270] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src="/Leadership/image 99 (1).png"
                  alt="Company Context"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
