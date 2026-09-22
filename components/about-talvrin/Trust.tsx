import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Trust() {
  return (
    <>
            {/* Trust */}
            <section className="bg-[#F6F5FB] py-16 lg:py-24 border-b border-gray-200">
              <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
                <Reveal>
                  <p className="text-[#B98132] text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide uppercase">TRUST</p>
                  <h2 className="mt-5 text-[32px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.2] lg:leading-[1.2] text-[#171335]">
                    Trust is part of the product.
                  </h2>
                  <p className="mt-6 max-w-[800px] text-base text-[#5D5A72] leading-[28px]">
                    A platform built around evidence must itself be open to scrutiny. Talvrin treats trust as an architectural<br className="hidden md:inline" /> requirement rather than a marketing slogan.
                  </p>
                </Reveal>
                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Reveal delay={0.2} className="space-y-6">
                    <div className="rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm">
                      <p className="text-[15px] font-medium leading-[26px] text-slate-900">
                        Evidence provenance &mdash; make the origin of important information visible.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm">
                      <p className="text-[15px] font-medium leading-[26px] text-slate-900">
                        Privacy &mdash; minimize unnecessary collection and provide clear controls.
                      </p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.3} className="space-y-6">
                    <div className="overflow-hidden rounded-2xl bg-white outline outline-1 outline-offset-[-1px] outline-slate-900/10 h-[280px]">
                      <Image
                        src="/about-talvrin/image 68.png"
                        alt="Trust"
                        width={400}
                        height={280}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Reveal>
                  <Reveal delay={0.4} className="space-y-6">
                    <div className="rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm">
                      <p className="text-[15px] font-medium leading-[26px] text-slate-900">
                        Security &mdash; protect accounts, workspaces and underlying services.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm">
                      <p className="text-[15px] font-medium leading-[26px] text-slate-900">
                        Responsible AI &mdash; keep generated interpretation distinguishable from authoritative evidence.
                      </p>
                    </div>
                  </Reveal>
                </div>
                <Reveal delay={0.5} className="mt-12 flex flex-wrap items-center gap-8">
                  <a href="#" className="flex items-center text-[14px] font-semibold text-[#6C5CF7] hover:text-[#5b4be0] hover:underline transition-colors group">
                    Explore the Trust Center
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5 transition-transform group-hover:translate-x-1">
                      <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="flex items-center text-[14px] font-semibold text-[#6C5CF7] hover:text-[#5b4be0] hover:underline transition-colors group">
                    Review Security
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5 transition-transform group-hover:translate-x-1">
                      <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="flex items-center text-[14px] font-semibold text-[#6C5CF7] hover:text-[#5b4be0] hover:underline transition-colors group">
                    Read Privacy
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5 transition-transform group-hover:translate-x-1">
                      <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </Reveal>
              </div>
            </section>
    </>
  );
}
