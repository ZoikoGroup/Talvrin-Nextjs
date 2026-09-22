import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#171335] py-16 lg:pt-[116px] lg:pb-[110px]">
        {/* Radial Gradients matching Figma */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(108,92,231,0.2)_0%,transparent_65%),radial-gradient(circle_at_85%_90%,rgba(185,129,50,0.12)_0%,transparent_60%)]" />

        {/* Design frame is 1425px wide with 78px margins (1268px content) */}
        <Container className="relative z-10 lg:max-w-[1332px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_469px] lg:gap-[40px]">

            {/* Left Column: Content */}
            <div className="flex flex-col">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-widest text-[#B98132] font-['IBM_Plex_Sans']">
                  ABOUT TALVRIN
                </p>

                {/* Heading: 2 lines, 56px/63px, #F6F5FB */}
                <h1 className="mt-6 text-4xl font-bold leading-[1.125] text-[#F6F5FB] font-['IBM_Plex_Sans'] sm:text-5xl lg:text-[56px]">
                  The evidence layer for<br className="hidden sm:inline" /> global public markets.
                </h1>

                {/* Description: 18px/31px, #F6F5FBBF with br tags after investors, and evidence */}
                <p className="mt-7 max-w-[751px] text-[17px] sm:text-lg leading-[31px] text-[#F6F5FBBF] font-['IBM_Plex_Sans'] font-normal">
                  Talvrin is building a source-linked research and monitoring platform that helps investors,<br className="hidden md:inline" />
                  finance professionals, research teams and institutions understand what the evidence<br className="hidden md:inline" />
                  says, why it matters and when it changes.
                </p>
              </Reveal>

              {/* CTA Buttons: 55px tall, rounded-[10px], 17px gap */}
              <Reveal delay={0.2} className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-[17px]">
                <button className="inline-flex h-[55px] items-center justify-center rounded-[10px] bg-[#F6F5FB] px-6 text-[17px] font-semibold text-[#171335] font-['IBM_Plex_Sans'] transition-colors hover:bg-white">
                  Request Access
                </button>
                <button className="group inline-flex h-[55px] items-center justify-center rounded-[10px] border border-[#F6F5FB]/[0.22] px-6 text-[17px] font-semibold text-[#F6F5FB] font-['IBM_Plex_Sans'] transition-colors hover:bg-[#F6F5FB]/10">
                  Explore How It Works
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 transition-transform group-hover:translate-x-1">
                    <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </Reveal>

              {/* Footer disclaimer: 13px/21px, #F6F5FB8C */}
              <Reveal delay={0.3}>
                <p className="mt-5 max-w-[700px] text-[13px] leading-[21px] text-[#F6F5FB8C] font-['IBM_Plex_Sans']">
                  Research and intelligence. No portfolio management. No trade execution. No manufactured investment recommendations.
                </p>
              </Reveal>
            </div>

            {/* Right Column: Image — fixed 469px column */}
            <div className="w-full">
              <Reveal delay={0.4}>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/about-talvrin/image 60.png"
                    alt="Two professionals reviewing research together at a desk"
                    width={469}
                    height={396}
                    className="h-auto w-full object-cover rounded-2xl"
                    priority
                  />
                </div>
              </Reveal>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
