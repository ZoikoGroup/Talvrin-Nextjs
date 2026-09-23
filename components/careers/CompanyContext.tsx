import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function CompanyContext() {
  return (
    <section className="w-full bg-[#F6F5FB] py-20 lg:py-24 border-b border-slate-900/10">
      <Container className="max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-[620px]">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-wide text-[#6C5CE7] font-['IBM_Plex_Sans']">
                COMPANY CONTEXT
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-[47.20px] text-slate-900 font-['IBM_Plex_Sans']">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Talvrin is a trading name of Zoiko Markets,
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  a Zoiko Financial Group company.
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#5D5A72] font-['IBM_Plex_Sans'] leading-7">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Each vacancy identifies its approved employing or hiring entity and does not infer that relationship from
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  the page brand alone.
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-6 sm:gap-8">
              <Link
                href="/zoiko-financial-group"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6C5CE7] font-['IBM_Plex_Sans'] hover:underline"
              >
                <span>About Zoiko Markets</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block shrink-0 transition-transform group-hover:translate-x-1 text-[#6C5CE7]"><path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link
                href="/zoiko-financial-group"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6C5CE7] font-['IBM_Plex_Sans'] hover:underline"
              >
                <span>Zoiko Financial Group</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block shrink-0 transition-transform group-hover:translate-x-1 text-[#6C5CE7]"><path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link
                href="/about-talvrin"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6C5CE7] font-['IBM_Plex_Sans'] hover:underline"
              >
                <span>About Talvrin</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block shrink-0 transition-transform group-hover:translate-x-1 text-[#6C5CE7]"><path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </Reveal>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delay={0.3} className="w-full max-w-[384px]">
              <div className="relative aspect-[384/288] w-full overflow-hidden rounded-2xl border border-slate-900/10 shadow-sm bg-slate-900">
                <Image
                  src="/Careers/image 105 (1).png"
                  alt="Company Context"
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