import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function WhatWeAreBuilding() {
  const steps = ["ASK", "DISCOVER", "INSPECT", "BUILD", "MONITOR", "REASSESS"];

  return (
    <section id="what-we-are-building" className="bg-[#171335] py-20 lg:py-32">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-center">
        
        {/* Left Text Content */}
        <div className="flex-1 space-y-6">
          <Reveal>
            <p className="text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide text-[#B98132] uppercase">
              WHAT WE ARE BUILDING
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold font-['IBM_Plex_Sans'] leading-[47.20px] text-violet-50">
              A research workspace that stays<br />
              connected to the evidence.
            </h2>
            <div className="mt-4 text-base font-normal font-['IBM_Plex_Sans'] leading-7 text-violet-50/70">
              <span className="block sm:whitespace-nowrap">Talvrin brings source-linked evidence, research organization and continuous monitoring into one</span>
              <span className="block sm:whitespace-nowrap">global workspace &mdash; moving from discovery to evidence, evidence to context, and context to an</span>
              <span className="block sm:whitespace-nowrap">ongoing, monitored view rather than an isolated answer.</span>
            </div>
          </Reveal>

          {/* Steps Tags with Arrows - Strictly in 1 Line */}
          <Reveal delay={0.2} className="pt-2">
            <div className="flex flex-row items-center gap-2.5 flex-nowrap overflow-x-auto pb-2">
              {steps.map((tag, idx) => (
                <div key={tag} className="flex items-center gap-2.5 shrink-0">
                  <div className="rounded-[999px] bg-violet-50/5 px-4 py-2.5 outline outline-1 outline-offset-[-1px] outline-violet-50/20 flex flex-col justify-start items-start">
                    <span className="text-xs font-semibold font-['IBM_Plex_Sans'] text-violet-50">
                      {tag}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <span className="text-violet-50/40 text-xs">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <a href="#" className="mt-2 inline-block text-sm font-semibold font-['IBM_Plex_Sans'] text-[#B4A8FF] hover:underline">
              Explore Talvrin Market Intelligence &rarr;
            </a>
          </Reveal>
        </div>

        {/* Right Image Container */}
        <div className="flex-1 flex justify-center lg:justify-end lg:ml-12">
          <Reveal delay={0.4}>
            <div className="w-full max-w-[414px] h-[414px] overflow-hidden rounded-2xl bg-white outline outline-1 outline-violet-50/10">
              <Image
                src="/about-talvrin/image 63.png"
                alt="What We Are Building"
                width={414}
                height={414}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>

      </Container>
    </section>
  );
}