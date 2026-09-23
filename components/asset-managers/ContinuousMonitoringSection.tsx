import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

export default function ContinuousMonitoringSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-24">
      <Container className="max-w-[1320px]">
        <Reveal>
          <div className="flex flex-col justify-start items-start">
            <div className="text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide text-[#6C5CE7]">
              CONTINUOUS MONITORING
            </div>
            <h2 className="mt-3 text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['IBM_Plex_Sans'] leading-tight lg:leading-[48.72px]">
              Markets move. More importantly, the
              <br className="hidden sm:inline" /> evidence moves.
            </h2>
          </div>
        </Reveal>

        {/* Top-aligned Grid: Left Card + Right Image */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          {/* Left Column: Interactive UI Mockup Card */}
          <Reveal delay={0.1} className="lg:col-span-7 flex flex-col justify-between">
            <div className="flex h-full flex-col justify-between rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 bg-[#F6F5FB] p-6 sm:p-8 shadow-xs">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-['IBM_Plex_Sans'] text-[#171335]">
                  Research View: Sovereign Credit Outlook
                </h3>
                <p className="mt-1 text-xs font-normal font-['IBM_Plex_Sans'] text-[#5D5A72]">
                  Last reviewed: 02 September 2026
                </p>

                <div className="mt-6 mb-3">
                  <p className="text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wider text-[#5D5A72]">
                    SINCE LAST REVIEW
                  </p>
                </div>

                <div className="divide-y divide-slate-900/10 border-y border-slate-900/10">
                  {/* Item 1 */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex rounded px-2 py-0.5 text-xs font-bold font-['IBM_Plex_Sans'] bg-[#B98132]/15 text-[#B98132]">
                        NEW
                      </span>
                      <span className="text-sm font-semibold font-['IBM_Plex_Sans'] text-[#171335]">
                        Rating-agency commentary on sovereign credit outlook
                      </span>
                    </div>
                    <span className="text-xs font-normal font-['IBM_Plex_Sans'] text-[#5D5A72] shrink-0">
                      High potential impact
                    </span>
                  </div>

                  {/* Item 2 */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex rounded px-2 py-0.5 text-xs font-bold font-['IBM_Plex_Sans'] bg-[#6C5CE7]/15 text-[#6C5CE7]">
                        UPDATED
                      </span>
                      <span className="text-sm font-semibold font-['IBM_Plex_Sans'] text-[#171335]">
                        Revised official statistics, reference period changed
                      </span>
                    </div>
                    <span className="text-xs font-normal font-['IBM_Plex_Sans'] text-[#5D5A72] shrink-0">
                      Medium potential impact
                    </span>
                  </div>

                  {/* Item 3 */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex rounded px-2 py-0.5 text-xs font-bold font-['IBM_Plex_Sans'] bg-slate-900/10 text-[#5D5A72]">
                        UNCHANGED
                      </span>
                      <span className="text-sm font-semibold font-['IBM_Plex_Sans'] text-[#171335]">
                        Central-bank policy stance
                      </span>
                    </div>
                    <span className="text-xs font-normal font-['IBM_Plex_Sans'] text-[#5D5A72] shrink-0">
                      No material change
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="rounded-lg bg-[#171335] px-5 py-2.5 text-xs font-bold font-['IBM_Plex_Sans'] text-[#F6F5FB] transition-colors hover:bg-slate-800"
                >
                  Review the Research View
                </button>
                <button
                  type="button"
                  className="text-xs font-bold font-['IBM_Plex_Sans'] text-[#6C5CE7] hover:underline"
                >
                  Open Evidence →
                </button>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Image */}
          <Reveal delay={0.2} className="lg:col-span-5 flex">
            <div className="relative aspect-[561/398] lg:aspect-auto w-full min-h-[300px] overflow-hidden rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 bg-[#F6F5FB] shadow-xs">
              <Image
                src="/asset-managers/image 75.png"
                alt="Continuous monitoring dashboard and alerts"
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Footnote below card & image */}
        <Reveal delay={0.25} className="mt-5">
          <p className="text-xs font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
            Monitoring is an evidence-change workflow. It is never a portfolio instruction, target return, risk signal, or
            <br className="hidden md:inline" /> guaranteed materiality — evidence-change alerts and market-price alerts remain separate concepts.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
