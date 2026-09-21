import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Mission() {
  return (
    <>
            {/* Our Mission */}
            <section id="mission" className="bg-slate-900 py-20 lg:py-32">
              <Container>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-[160px] items-start">
                  <Reveal className="flex-1 max-w-[500px]">
                    <p className="text-[#B98132] text-xs font-bold font-['IBM_Plex_Sans'] tracking-widest uppercase">OUR MISSION</p>
                    <h2 className="mt-5 text-[22px] sm:text-[22px] lg:text-[24px] font-bold font-['IBM_Plex_Sans'] leading-[36px] text-white">
                      To make trustworthy public-market<br className="hidden md:block" />
                      evidence easier to find, understand,<br className="hidden md:block" />
                      verify and continuously monitor &mdash; so<br className="hidden md:block" />
                      people and organizations can form more<br className="hidden md:block" />
                      defensible views.
                    </h2>
                  </Reveal>
                  <Reveal delay={0.2} className="flex-1 max-w-[500px]">
                    <p className="text-[#6C5CF7] text-xs font-bold font-['IBM_Plex_Sans'] tracking-widest uppercase">OUR VISION</p>
                    <h2 className="mt-5 text-[22px] sm:text-[22px] lg:text-[24px] font-bold font-['IBM_Plex_Sans'] leading-[36px] text-white">
                      A world in which every serious market view<br className="hidden md:block" />
                      can be traced to the evidence, understood in<br className="hidden md:block" />
                      context and continuously tested as that<br className="hidden md:block" />
                      evidence changes.
                    </h2>
                  </Reveal>
                </div>
                <Reveal delay={0.4} className="mt-16">
                  <div className="overflow-hidden rounded-2xl bg-white border-t border-violet-50/10">
                    <Image
                      src="/about-talvrin/image 66.png"
                      alt="Our Mission"
                      width={1258}
                      height={707}
                      className="w-full object-cover"
                    />
                  </div>
                </Reveal>
              </Container>
            </section>
    </>
  );
}
