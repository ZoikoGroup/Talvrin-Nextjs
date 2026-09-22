import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function TheProblem() {
  return (
    <>
            {/* The Problem */}
            <section className="bg-white py-16 lg:py-24">
              <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
                <Reveal>
                  <p className="text-[#B98132] text-xs font-bold font-['IBM_Plex_Sans'] tracking-widest uppercase">
                    THE PROBLEM
                  </p>
                  <h2 className="mt-5 text-[32px] sm:text-[36px] lg:text-[40px] font-bold font-['IBM_Plex_Sans'] leading-[1.2] lg:leading-[48px] text-[#171335]">
                    Research is fragmented &mdash; and the<br className="hidden sm:inline" /> evidence keeps moving.
                  </h2>
                  <p className="mt-4 text-[#5D5A72] text-[15px] sm:text-base font-normal font-['IBM_Plex_Sans'] leading-[28px] max-w-[850px]">
                    A serious market question can require dozens of disconnected sources. The reasoning is difficult to<br className="hidden lg:inline" />
                    preserve, and the evidence trail can disappear inside tabs, spreadsheets and inboxes. Talvrin is<br className="hidden lg:inline" />
                    designed to reduce that fragmentation without hiding the underlying sources.
                  </p>
                </Reveal>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                  {/* Column 1 */}
                  <Reveal delay={0.2} className="flex flex-col gap-[15px]">
                    <div className="rounded-xl border-l-[3px] border-[#6C5CF7] bg-[#F6F5FB] px-4 h-[89px] flex flex-col justify-center">
                      <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] font-medium font-['IBM_Plex_Sans'] leading-[20px] text-[#171335]">
                        Identify and preserve the source behind<br />
                        important information.
                      </p>
                    </div>
                    <div className="rounded-xl border-l-[3px] border-[#6C5CF7] bg-[#F6F5FB] px-4 h-[89px] flex flex-col justify-center">
                      <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] font-medium font-['IBM_Plex_Sans'] leading-[20px] text-[#171335]">
                        Preserve a research view so it can be<br />
                        revisited rather than rebuilt.
                      </p>
                    </div>
                  </Reveal>

                  {/* Column 2 */}
                  <Reveal delay={0.3} className="flex flex-col gap-[15px]">
                    <div className="rounded-xl border-l-[3px] border-[#6C5CF7] bg-[#F6F5FB] px-4 h-[89px] flex flex-col justify-center">
                      <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] font-medium font-['IBM_Plex_Sans'] leading-[20px] text-[#171335]">
                        Keep publication, effective and economic<br />
                        timing visible where it matters.
                      </p>
                    </div>
                    <div className="rounded-xl border-l-[3px] border-[#6C5CF7] bg-[#F6F5FB] px-4 h-[89px] flex flex-col justify-center">
                      <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] font-medium font-['IBM_Plex_Sans'] leading-[20px] text-[#171335]">
                        Monitor for meaningful changes instead of<br />
                        repeatedly checking everything manually.
                      </p>
                    </div>
                  </Reveal>

                  {/* Column 3 (Image) */}
                  <Reveal delay={0.4} className="flex justify-start">
                    <div className="w-full max-w-[345px] h-[193px] overflow-hidden rounded-xl bg-gray-100 shadow-sm">
                      <Image
                        src="/about-talvrin/image 62.png"
                        alt="The Problem graphic"
                        width={345}
                        height={193}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
    </>
  );
}
