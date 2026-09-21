import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="bg-[#F6F5FB] py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1309px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[#6C5CF7] text-xs font-bold font-['IBM_Plex_Sans'] tracking-widest uppercase">
            WHO TALVRIN SERVES
          </p>
          <h2 className="mt-4 text-[#171335] text-[32px] sm:text-[36px] lg:text-[40px] font-bold font-['IBM_Plex_Sans'] leading-[1.2] lg:leading-[48px]">
            Built for people who need to know why.
          </h2>
          <p className="mt-4 text-[#5D5A72] text-[15px] sm:text-base font-normal font-['IBM_Plex_Sans'] leading-[28px] max-w-[800px]">
            Talvrin is designed for people and organizations that need to understand why something may be<br className="hidden md:inline" />
            true &mdash; not merely receive an answer.
          </p>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Row 1 Card 1 */}
            <div className="rounded-2xl bg-white p-7 outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm flex flex-col justify-start h-[206px]">
              <h3 className="text-[17px] font-bold text-[#171335] leading-snug">Self-Directed Investors</h3>
              <p className="mt-3 text-[14px] leading-[24px] text-[#5D5A72]">
                People who want greater depth, discipline and transparency in public-market research.
              </p>
            </div>

            {/* Row 1 Card 2 */}
            <div className="rounded-2xl bg-white p-7 outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm flex flex-col justify-start h-[206px]">
              <h3 className="text-[17px] font-bold text-[#171335] leading-snug">Investment Professionals</h3>
              <p className="mt-3 text-[14px] leading-[24px] text-[#5D5A72]">
                Analysts, portfolio professionals and researchers who need efficient access to source-linked evidence and context.
              </p>
            </div>

            {/* Row 1 Card 3 */}
            <div className="rounded-2xl bg-white p-7 outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm flex flex-col justify-start h-[206px]">
              <h3 className="text-[17px] font-bold text-[#171335] leading-snug">Research Teams</h3>
              <p className="mt-3 text-[14px] leading-[24px] text-[#5D5A72]">
                Teams that need repeatable workflows, shared evidence and continuous monitoring.
              </p>
            </div>

            {/* Row 1 Card 4 */}
            <div className="rounded-2xl bg-white p-7 outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm flex flex-col justify-start h-[206px]">
              <h3 className="text-[17px] font-bold text-[#171335] leading-snug">Asset Managers</h3>
              <p className="mt-3 text-[14px] leading-[24px] text-[#5D5A72]">
                Organizations seeking stronger research infrastructure across investment workflows.
              </p>
            </div>

            {/* Row 2 Card 1 */}
            <div className="rounded-2xl bg-white p-7 outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm flex flex-col justify-start h-[206px]">
              <h3 className="text-[17px] font-bold text-[#171335] leading-snug">Wealth &amp; Advisory Research Teams</h3>
              <p className="mt-3 text-[14px] leading-[24px] text-[#5D5A72]">
                Professionals who need evidence-led market intelligence to support their own analysis and client research processes.
              </p>
            </div>

            {/* Row 2 Card 2 */}
            <div className="rounded-2xl bg-white p-7 outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm flex flex-col justify-start h-[206px]">
              <h3 className="text-[17px] font-bold text-[#171335] leading-snug">Financial Institutions &amp; Enterprise</h3>
              <p className="mt-3 text-[14px] leading-[24px] text-[#5D5A72]">
                Organizations requiring scalable, governed and reviewable research capabilities across teams and markets.
              </p>
            </div>

            {/* Row 2 Image (Spans 2 columns on large screens) */}
            <div className="lg:col-span-2 overflow-hidden rounded-2xl bg-white outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm h-[206px] lg:h-auto">
              <Image
                src="/about-talvrin/image 65.png"
                alt="Who We Serve"
                width={654}
                height={367}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}