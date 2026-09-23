import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function EvidenceAndTrust() {
  return (
    <section className="w-full bg-white py-20 lg:py-24 border-b border-slate-900/10">
      <Container className="max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-[720px]">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-wide text-[#6C5CE7] font-['IBM_Plex_Sans']">
                EVIDENCE AND TRUST
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[44px] lg:leading-[50px] font-bold text-slate-900 font-['IBM_Plex_Sans']">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  The source should remain inspectable
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  behind the answer.
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5D5A72] font-['IBM_Plex_Sans'] leading-relaxed">
                Talvrin is being built around evidence provenance, contextual timing, continuous monitoring, and a clear separation between source material and generated interpretation.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="w-full mt-6">
              <div className="w-full p-5 sm:p-6 bg-[#F6F5FB] rounded-lg border-l-4 border-[#6C5CE7]">
                <p className="text-sm sm:text-base font-semibold text-slate-900 font-['IBM_Plex_Sans'] leading-relaxed">
                  AI can assist research. It does not become the evidence, and judgment remains human.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-6 sm:gap-8">
              <Link
                href="/product/evidence"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6C5CE7] font-['IBM_Plex_Sans'] hover:underline"
              >
                <span>Read the Evidence Standards</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block shrink-0 transition-transform group-hover:translate-x-1 text-[#6C5CE7]"><path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link
                href="/product/evidence"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6C5CE7] font-['IBM_Plex_Sans'] hover:underline"
              >
                <span>Explore the Talvrin Trust Center</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block shrink-0 transition-transform group-hover:translate-x-1 text-[#6C5CE7]"><path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </Reveal>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delay={0.3} className="w-full max-w-[384px]">
              <div className="relative aspect-[384/320] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/zoiko-financial-group/image 92 (1).png"
                  alt="Evidence and Trust"
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