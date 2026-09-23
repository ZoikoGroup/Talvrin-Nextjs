import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const trustPillars = [
  {
    title: "Evidence provenance",
    desc: (
      <>
        <span className="block whitespace-normal sm:whitespace-nowrap">Trace important research outputs</span>
        <span className="block whitespace-normal sm:whitespace-nowrap">back to supporting material.</span>
      </>
    ),
  },
  {
    title: "Data rights",
    desc: (
      <>
        <span className="block whitespace-normal sm:whitespace-nowrap">Respect licensing, redistribution,</span>
        <span className="block whitespace-normal sm:whitespace-nowrap">access, and permitted-use controls.</span>
      </>
    ),
  },
  {
    title: "Regional governance",
    desc: (
      <>
        <span className="block whitespace-normal sm:whitespace-nowrap">Support jurisdiction-sensitive</span>
        <span className="block whitespace-normal sm:whitespace-nowrap">execution and data controls.</span>
      </>
    ),
  },
  {
    title: "Privacy",
    desc: (
      <>
        <span className="block whitespace-normal sm:whitespace-nowrap">Minimize unnecessary collection and</span>
        <span className="block whitespace-normal sm:whitespace-nowrap">provide clear data controls.</span>
      </>
    ),
  },
  {
    title: "AI governance",
    desc: (
      <>
        <span className="block whitespace-normal sm:whitespace-nowrap">Keep model output subordinate to</span>
        <span className="block whitespace-normal sm:whitespace-nowrap">evidence and policy controls.</span>
      </>
    ),
  },
  {
    title: "Security",
    desc: (
      <>
        <span className="block whitespace-normal sm:whitespace-nowrap">Protect identities, workspaces,</span>
        <span className="block whitespace-normal sm:whitespace-nowrap">services, and secrets.</span>
      </>
    ),
  },
];

export default function TrustDataRightsSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-24">
      <Container className="max-w-[1320px]">
        <Reveal>
          <div className="flex flex-col justify-start items-start">
            <div className="text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide text-[#6C5CE7]">
              TRUST &amp; DATA RIGHTS
            </div>
            <h2 className="mt-3 text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['IBM_Plex_Sans'] leading-tight lg:leading-[48.72px]">
              Asset-management research requires
              <br className="hidden sm:inline" /> institutional-grade controls.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] items-stretch">
          {/* Left Grid: 6 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-10">
            {trustPillars.map((item, index) => (
              <Reveal key={item.title} delay={0.05 * index}>
                <div className="flex flex-col items-start gap-2.5">
                  <div className="h-0.5 w-7 bg-[#6C5CE7]" />
                  <h3 className="mt-1 text-base font-bold font-['IBM_Plex_Sans'] text-[#171335]">
                    {item.title}
                  </h3>
                  <div className="text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                    {item.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right Image */}
          <Reveal delay={0.2} className="flex">
            <div className="relative aspect-[509/240] lg:aspect-auto w-full min-h-[220px] overflow-hidden rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 bg-[#F6F5FB] shadow-xs">
              <Image
                src="/asset-managers/image 76.png"
                alt="Institutional trust and data rights"
                fill
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
