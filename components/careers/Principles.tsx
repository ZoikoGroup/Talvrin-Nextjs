import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Principles() {
  return (
    <section id="principles" className="w-full bg-[#F6F5FB] py-20 lg:py-24 border-b border-slate-900/10">
      <Container className="max-w-[1320px]">
        {/* Header */}
        <div className="flex flex-col items-start max-w-4xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-wider text-[#6C5CE7] font-['IBM_Plex_Sans']">
              PRINCIPLES SHAPING THE WORK
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 font-['IBM_Plex_Sans'] sm:text-4xl lg:text-[44px] lg:leading-[50px]">
              <span className="block whitespace-normal lg:whitespace-nowrap">
                The product is being designed around
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                evidence, judgment, trust, and
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                truthful coverage.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5D5A72] font-['IBM_Plex_Sans'] leading-relaxed">
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Evidence provenance, inspectable sources, contextual timing, responsible AI, human judgment,
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                security, privacy, and truthful coverage shape the standards relevant to building Talvrin.
              </span>
            </p>
          </Reveal>
        </div>

        {/* 3-Column Grid: Left 2 Cards, Center Image, Right 2 Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column (2 Cards) */}
          <div className="lg:col-span-3 flex flex-col gap-6 justify-between">
            <Reveal delay={0.1} className="h-full">
              <div className="h-full p-6 bg-white rounded-2xl border border-slate-900/10 shadow-xs flex flex-col justify-start">
                <h3 className="text-base font-bold text-slate-900 font-['IBM_Plex_Sans']">
                  Evidence before assertion
                </h3>
                <p className="mt-2 text-sm text-[#5D5A72] font-['IBM_Plex_Sans'] leading-relaxed">
                  <span className="block whitespace-normal lg:whitespace-nowrap">
                    Important conclusions should remain
                  </span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">
                    connected to supporting information.
                  </span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="h-full">
              <div className="h-full p-6 bg-white rounded-2xl border border-slate-900/10 shadow-xs flex flex-col justify-start">
                <h3 className="text-base font-bold text-slate-900 font-['IBM_Plex_Sans']">
                  Judgment remains human
                </h3>
                <p className="mt-2 text-sm text-[#5D5A72] font-['IBM_Plex_Sans'] leading-relaxed">
                  <span className="block whitespace-normal lg:whitespace-nowrap">
                    People remain responsible for
                  </span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">
                    interpretation and decisions.
                  </span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Center Column: Image */}
          <div className="lg:col-span-6 flex justify-center">
            <Reveal delay={0.3} className="w-full h-full">
              <div className="relative aspect-[610/340] min-h-[300px] w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src="/Careers/image 103 (1).png"
                  alt="Principles shaping the work"
                  fill
                  sizes="(min-width: 1024px) 610px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column (2 Cards) */}
          <div className="lg:col-span-3 flex flex-col gap-6 justify-between">
            <Reveal delay={0.4} className="h-full">
              <div className="h-full p-6 bg-white rounded-2xl border border-slate-900/10 shadow-xs flex flex-col justify-start">
                <h3 className="text-base font-bold text-slate-900 font-['IBM_Plex_Sans']">
                  AI assistance, not AI authority
                </h3>
                <p className="mt-2 text-sm text-[#5D5A72] font-['IBM_Plex_Sans'] leading-relaxed">
                  <span className="block whitespace-normal lg:whitespace-nowrap">
                    AI may accelerate work without
                  </span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">
                    becoming the evidence.
                  </span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.5} className="h-full">
              <div className="h-full p-6 bg-white rounded-2xl border border-slate-900/10 shadow-xs flex flex-col justify-start">
                <h3 className="text-base font-bold text-slate-900 font-['IBM_Plex_Sans']">
                  Coverage before claims
                </h3>
                <p className="mt-2 text-sm text-[#5D5A72] font-['IBM_Plex_Sans'] leading-relaxed">
                  <span className="block whitespace-normal lg:whitespace-nowrap">
                    Describe what is actually supported,
                  </span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">
                    not theoretical capability as live
                  </span>
                  <span className="block whitespace-normal lg:whitespace-nowrap">
                    coverage.
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}