import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const card1 = {
  title: "Faster research",
  desc: (
    <>
      Spend less time
      <br />
      reconstructing information
      <br />
      and more time interpreting it.
    </>
  ),
  caveat: (
    <>
      No unsupported productivity
      <br />
      percentage.
    </>
  ),
};

const card2 = {
  title: "Stronger provenance",
  desc: (
    <>
      Keep important conclusions
      <br />
      connected to the sources
      <br />
      behind them.
    </>
  ),
  caveat: (
    <>
      Source path remains navigable
      <br />
      where rights permit.
    </>
  ),
};

const card3 = {
  title: "Institutional memory",
  desc: (
    <>
      Preserve evidence and
      <br />
      reasoning beyond individual
      <br />
      analysts and documents.
    </>
  ),
  caveat: (
    <>
      Not a promise of regulated
      <br />
      retention or immutable audit.
    </>
  ),
};

const card4 = {
  title: "Greater reviewability",
  desc: (
    <>
      Make it easier to inspect why
      <br />
      a research conclusion was
      <br />
      reached.
    </>
  ),
  caveat: (
    <>
      Not an approval, attestation, or
      <br />
      compliance-signoff system.
    </>
  ),
};

const card5 = {
  title: "Scalable workflows",
  desc: (
    <>
      Create more repeatable
      <br />
      research processes across
      <br />
      teams, markets, and
      <br />
      jurisdictions.
    </>
  ),
  caveat: (
    <>
      Not workflow automation unless
      <br />
      explicitly released.
    </>
  ),
};

const card6 = {
  title: "Continuous monitoring",
  desc: (
    <>
      Focus attention on changes
      <br />
      that may affect an existing
      <br />
      research view.
    </>
  ),
  caveat: (
    <>
      Not a price signal or rebalance
      <br />
      instruction.
    </>
  ),
};

export default function BusinessOutcomesSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-24">
      <Container className="max-w-[1480px]">
        <Reveal>
          <div className="flex flex-col justify-start items-start">
            <div className="text-yellow-600 text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide text-[#B98132]">
              BUSINESS OUTCOMES
            </div>
            <h2 className="mt-3 text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['IBM_Plex_Sans'] leading-tight lg:leading-[48.72px]">
              Seven source-backed outcomes for
              <br className="hidden sm:inline" /> asset-management research.
            </h2>
          </div>
        </Reveal>

        {/* 4-column layout: 3 columns of 242px x 214px cards + 1 column of 684px x 472px image */}
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-[44px] sm:grid-cols-2 lg:grid-cols-[repeat(3,242px)_684px] items-stretch justify-start">
          {/* Card 1 */}
          <Reveal delay={0.05} className="h-full">
            <div className="w-full lg:w-[242px] h-full lg:h-[214px] min-h-[214px] p-6 bg-[#F6F5FB] rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 flex flex-col justify-between items-start transition-shadow hover:shadow-md">
              <div className="self-stretch">
                <div className="self-stretch pb-2.5 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-slate-900 text-base font-bold font-['IBM_Plex_Sans']">
                    {card1.title}
                  </div>
                </div>
                <div className="self-stretch pb-3.5 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-gray-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                    {card1.desc}
                  </div>
                </div>
              </div>
              <div className="self-stretch pt-3 border-t-[0.80px] border-slate-900/10 flex flex-col justify-start items-start">
                <div className="justify-center text-yellow-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-4 text-[#B98132]">
                  {card1.caveat}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={0.1} className="h-full">
            <div className="w-full lg:w-[242px] h-full lg:h-[214px] min-h-[214px] p-6 bg-[#F6F5FB] rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 flex flex-col justify-between items-start transition-shadow hover:shadow-md">
              <div className="self-stretch">
                <div className="self-stretch pb-2.5 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-slate-900 text-base font-bold font-['IBM_Plex_Sans']">
                    {card2.title}
                  </div>
                </div>
                <div className="self-stretch pb-3.5 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-gray-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                    {card2.desc}
                  </div>
                </div>
              </div>
              <div className="self-stretch pt-3 border-t-[0.80px] border-slate-900/10 flex flex-col justify-start items-start">
                <div className="justify-center text-yellow-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-4 text-[#B98132]">
                  {card2.caveat}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={0.15} className="h-full">
            <div className="w-full lg:w-[242px] h-full lg:h-[214px] min-h-[214px] p-6 bg-[#F6F5FB] rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 flex flex-col justify-between items-start transition-shadow hover:shadow-md">
              <div className="self-stretch">
                <div className="self-stretch pb-2.5 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-slate-900 text-base font-bold font-['IBM_Plex_Sans']">
                    {card3.title}
                  </div>
                </div>
                <div className="self-stretch pb-3.5 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-gray-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                    {card3.desc}
                  </div>
                </div>
              </div>
              <div className="self-stretch pt-3 border-t-[0.80px] border-slate-900/10 flex flex-col justify-start items-start">
                <div className="justify-center text-yellow-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-4 text-[#B98132]">
                  {card3.caveat}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Image spanning 2 rows (684px x 472px) */}
          <Reveal delay={0.2} className="sm:col-span-2 lg:col-span-1 lg:row-span-2 flex h-full">
            <div className="relative w-full lg:w-[684px] h-[300px] lg:h-[472px] overflow-hidden rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 bg-[#F6F5FB] shadow-sm">
              <Image
                src="/asset-managers/image 72.png"
                alt="Research team outcomes and analytics"
                fill
                sizes="(min-width: 1024px) 684px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Card 4 */}
          <Reveal delay={0.25} className="h-full">
            <div className="w-full lg:w-[242px] h-full lg:h-[214px] min-h-[214px] p-6 bg-[#F6F5FB] rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 flex flex-col justify-between items-start transition-shadow hover:shadow-md">
              <div className="self-stretch">
                <div className="self-stretch pb-2.5 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-slate-900 text-base font-bold font-['IBM_Plex_Sans']">
                    {card4.title}
                  </div>
                </div>
                <div className="self-stretch pb-3.5 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-gray-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                    {card4.desc}
                  </div>
                </div>
              </div>
              <div className="self-stretch pt-3 border-t-[0.80px] border-slate-900/10 flex flex-col justify-start items-start">
                <div className="justify-center text-yellow-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-4 text-[#B98132]">
                  {card4.caveat}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 5 */}
          <Reveal delay={0.3} className="h-full">
            <div className="w-full lg:w-[242px] h-full lg:h-[214px] min-h-[214px] p-6 bg-[#F6F5FB] rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 flex flex-col justify-between items-start transition-shadow hover:shadow-md">
              <div className="self-stretch">
                <div className="self-stretch pb-2.5 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-slate-900 text-base font-bold font-['IBM_Plex_Sans']">
                    {card5.title}
                  </div>
                </div>
                <div className="self-stretch pb-3.5 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-gray-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                    {card5.desc}
                  </div>
                </div>
              </div>
              <div className="self-stretch pt-3 border-t-[0.80px] border-slate-900/10 flex flex-col justify-start items-start">
                <div className="justify-center text-yellow-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-4 text-[#B98132]">
                  {card5.caveat}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 6 */}
          <Reveal delay={0.35} className="h-full">
            <div className="w-full lg:w-[242px] h-full lg:h-[214px] min-h-[214px] p-6 bg-[#F6F5FB] rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 flex flex-col justify-between items-start transition-shadow hover:shadow-md">
              <div className="self-stretch">
                <div className="self-stretch pb-2.5 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-slate-900 text-base font-bold font-['IBM_Plex_Sans']">
                    {card6.title}
                  </div>
                </div>
                <div className="self-stretch pb-3.5 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-gray-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                    {card6.desc}
                  </div>
                </div>
              </div>
              <div className="self-stretch pt-3 border-t-[0.80px] border-slate-900/10 flex flex-col justify-start items-start">
                <div className="justify-center text-yellow-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-4 text-[#B98132]">
                  {card6.caveat}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
