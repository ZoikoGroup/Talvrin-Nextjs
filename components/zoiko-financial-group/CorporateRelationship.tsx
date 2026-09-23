import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function CorporateRelationship() {
  return (
    <section className="w-full bg-[#F6F5FB] py-20 lg:py-24 border-b border-slate-900/10">
      <Container className="max-w-[1120px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-wider text-[#6C5CE7] font-['IBM_Plex_Sans']">
              THE CORPORATE RELATIONSHIP
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 font-['IBM_Plex_Sans'] sm:text-4xl lg:text-[44px] lg:leading-[50px]">
              Three names. One clear relationship.
            </h2>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-[#5D5A72] font-['IBM_Plex_Sans'] leading-relaxed">
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Zoiko Financial Group is the parent organization of Zoiko Markets. Talvrin is a trading
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                name of Zoiko Markets.
              </span>
            </p>
          </Reveal>
        </div>

        {/* 2-Column Content: Left Hierarchy Cards + Right Image (Tight Gap) */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
          {/* Left Column: 3 Cards connected with vertical lines */}
          <div className="w-full max-w-[440px] flex flex-col items-center shrink-0">
            <Reveal delay={0.2} className="w-full flex flex-col items-center">
              {/* Card 1: Parent Organization */}
              <div className="w-full p-5 bg-white rounded-2xl border border-slate-900/10 shadow-xs flex flex-col items-center text-center gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5D5A72] font-['IBM_Plex_Sans']">
                  PARENT ORGANIZATION
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-900 font-['IBM_Plex_Sans']">
                  Zoiko Financial Group
                </span>
              </div>

              {/* Vertical connector 1 */}
              <div className="w-[1.5px] h-5 bg-slate-900/20" />

              {/* Card 2: Company within ZFG */}
              <div className="w-full p-5 bg-white rounded-2xl border border-slate-900/10 shadow-xs flex flex-col items-center text-center gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5D5A72] font-['IBM_Plex_Sans']">
                  COMPANY WITHIN ZOIKO FINANCIAL GROUP
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-900 font-['IBM_Plex_Sans']">
                  Zoiko Markets
                </span>
              </div>

              {/* Vertical connector 2 */}
              <div className="w-[1.5px] h-5 bg-slate-900/20" />

              {/* Card 3: Trading Name */}
              <div className="w-full p-5 bg-[#171335] rounded-2xl border border-white/10 shadow-xs flex flex-col items-center text-center gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B4A8FF] font-['IBM_Plex_Sans']">
                  TRADING NAME
                </span>
                <span className="text-base sm:text-lg font-bold text-[#F6F5FB] font-['IBM_Plex_Sans']">
                  Talvrin
                </span>
                <span className="text-xs text-[#F6F5FB]/75 font-['IBM_Plex_Sans']">
                  a trading name of Zoiko Markets
                </span>
              </div>

              {/* Links below hierarchy */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="/zoiko-financial-group"
                  className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6C5CE7] font-['IBM_Plex_Sans'] hover:underline"
                >
                  <span>About Zoiko Markets</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block shrink-0 transition-transform group-hover:translate-x-1 text-[#6C5CE7]"><path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link
                  href="/about-talvrin"
                  className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6C5CE7] font-['IBM_Plex_Sans'] hover:underline"
                >
                  <span>About Talvrin</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block shrink-0 transition-transform group-hover:translate-x-1 text-[#6C5CE7]"><path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Image (Tightly Positioned next to cards) */}
          <div className="w-full max-w-[560px] flex justify-center">
            <Reveal delay={0.3} className="w-full">
              <div className="relative aspect-[560/360] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/zoiko-financial-group/image 91.png"
                  alt="Corporate Relationship"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
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