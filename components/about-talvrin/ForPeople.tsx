import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function ForPeople() {
  return (
    <>
            {/* For People */}
            <section className="bg-[#F6F5FB] py-16 lg:py-24">
              <div className="mx-auto w-full max-w-[1309px] px-4 sm:px-6 lg:px-8">
                <Reveal>
                  <p className="text-[#6C5CF7] text-xs font-bold font-['IBM_Plex_Sans'] tracking-widest uppercase">FOR PEOPLE</p>
                  <h2 className="mt-4 max-w-[800px] text-[#171335] text-[32px] sm:text-[36px] lg:text-[40px] font-bold font-['IBM_Plex_Sans'] leading-[1.2] lg:leading-[48px]">
                    What difference can Talvrin make to<br className="hidden md:block" />
                    personal investment research?
                  </h2>
                  <p className="mt-4 text-[#5D5A72] text-[15px] sm:text-base font-normal font-['IBM_Plex_Sans'] leading-[28px] max-w-[850px]">
                    Access to information alone does not create clarity. Talvrin gives serious self-directed investors a<br className="hidden lg:block" />
                    more disciplined way to investigate markets &mdash; moving past &quot;What should I buy?&quot; toward evidence,<br className="hidden lg:block" />
                    contradictions and the assumptions behind a view. It will not remove uncertainty from investing; it<br className="hidden lg:block" />
                    helps people understand that uncertainty with better evidence and a research process they can<br className="hidden lg:block" />
                    revisit.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Row 1 */}
                    <div className="rounded-2xl bg-white p-7 outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm flex flex-col justify-start text-left">
                      <p className="text-[15px] font-medium font-['IBM_Plex_Sans'] leading-[24px] text-[#171335]">
                        Reduce the time spent moving<br className="hidden xl:block" />
                        between fragmented sources.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-7 outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm flex flex-col justify-start text-left">
                      <p className="text-[15px] font-medium font-['IBM_Plex_Sans'] leading-[24px] text-[#171335]">
                        Make it easier to distinguish source<br className="hidden xl:block" />
                        evidence from commentary and<br className="hidden xl:block" />
                        generated interpretation.
                      </p>
                    </div>

                    {/* Row 2 */}
                    <div className="rounded-2xl bg-white p-7 outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm flex flex-col justify-start text-left">
                      <p className="text-[15px] font-medium font-['IBM_Plex_Sans'] leading-[24px] text-[#171335]">
                        Highlight meaningful new evidence<br className="hidden xl:block" />
                        rather than adding to notification noise.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-7 outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm flex flex-col justify-start text-left">
                      <p className="text-[15px] font-medium font-['IBM_Plex_Sans'] leading-[24px] text-[#171335]">
                        Encourage deliberate, evidence-led<br className="hidden xl:block" />
                        decision-making rather than headline-<br className="hidden xl:block" />
                        driven reactions.
                      </p>
                    </div>

                    {/* Image Spanning Row 1 and 2 */}
                    <div className="rounded-2xl bg-white outline outline-1 outline-offset-[-1px] outline-slate-900/10 shadow-sm overflow-hidden lg:col-start-3 lg:row-start-1 lg:row-span-2 min-h-[250px]">
                      <Image
                        src="/about-talvrin/image 64.png"
                        alt="For People"
                        width={398}
                        height={224}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.4}>
                  <a href="#" className="mt-10 inline-flex items-center text-[15px] font-bold font-['IBM_Plex_Sans'] text-[#6C5CF7] group hover:text-[#5b4be0] transition-colors">
                    Explore Talvrin for Investors
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
