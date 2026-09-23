import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function GlobalArchitecture() {
  return (
    <section className="w-full bg-[#F6F5FB] py-20 lg:py-24 border-b border-slate-900/10">
      <Container className="max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (855px max width) */}
          <div className="lg:col-span-8 flex flex-col items-start max-w-[855px] w-full">
            <Reveal className="w-full">
              <p className="text-xs font-bold uppercase tracking-wide text-[#B98132] font-['IBM_Plex_Sans']">
                GLOBAL ARCHITECTURE
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[44px] lg:leading-[50px] font-bold text-slate-900 font-['IBM_Plex_Sans']">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Talvrin is being engineered for global
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  public markets.
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#5D5A72] font-['IBM_Plex_Sans'] leading-relaxed">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Individual markets, source sets, licensing arrangements, and jurisdictional requirements are intended to be
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  released progressively as evidence-quality and operational standards are met.
                </span>
              </p>
            </Reveal>

            {/* Scope Boundary Card (855px x 132px) */}
            <Reveal delay={0.2} className="w-full mt-6">
              <div className="w-full max-w-[855px] min-h-[132px] px-8 py-7 bg-white rounded-2xl border border-slate-900/10 shadow-xs flex flex-col justify-center gap-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B98132] font-['IBM_Plex_Sans']">
                  SCOPE BOUNDARY
                </p>
                <p className="text-sm sm:text-base text-slate-900 font-['IBM_Plex_Sans'] leading-relaxed">
                  <span className="block whitespace-normal lg:whitespace-nowrap">
                    This product architecture must not be interpreted as a statement about Zoiko Financial Group subsidiaries,
                  </span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">
                    office locations, regulated permissions, or live operations in any jurisdiction.
                  </span>
                </p>
              </div>
            </Reveal>

            {/* Action Link */}
            <Reveal delay={0.3} className="mt-6">
              <Link
                href="/markets/global-markets"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6C5CE7] font-['IBM_Plex_Sans'] hover:underline"
              >
                <span>View Current Market Coverage</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block shrink-0 transition-transform group-hover:translate-x-1 text-[#6C5CE7]"><path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </Reveal>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <Reveal delay={0.3} className="w-full max-w-[384px]">
              <div className="relative aspect-[384/384] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/zoiko-financial-group/image 93 (1).png"
                  alt="Global Architecture"
                  fill
                  sizes="(min-width: 1024px) 384px, 100vw"
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