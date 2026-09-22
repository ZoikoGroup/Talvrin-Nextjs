import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function WhyNow() {
  return (
    <>
      {/* Why Now */}
      <section className="bg-[#F6F5FB] py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[1309px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-[#6C5CE7] text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide uppercase">WHY NOW</p>
            <h2 className="mt-5 text-[32px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.2] lg:leading-[1.2] text-[#171335]">
              Talvrin is being built at a point when four structural changes<br className="hidden md:block" />
              are converging.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl bg-white p-7 outline outline-1 outline-slate-900/10">
                <h3 className="text-base font-bold text-slate-900">Information volume is accelerating</h3>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  The amount of corporate, economic, regulatory and market information available to researchers continues to expand.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="h-full rounded-2xl bg-white p-7 outline outline-1 outline-slate-900/10">
                <h3 className="text-base font-bold text-slate-900">Markets are increasingly interconnected</h3>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  Serious research questions frequently cross sources, markets, entities and jurisdictions.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="h-full rounded-2xl bg-white p-7 outline outline-1 outline-slate-900/10">
                <h3 className="text-base font-bold text-slate-900">Research must remain current</h3>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  A defensible conclusion can weaken when new filings, policy changes or economic evidence appear.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="h-full overflow-hidden rounded-2xl bg-white outline outline-1 outline-slate-900/10">
                <Image
                  src="/about-talvrin/image 69.png"
                  alt="Why Now"
                  width={518}
                  height={345}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}