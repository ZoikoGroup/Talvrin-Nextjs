import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const principles = [
  {
    title: "Evidence before assertion",
    desc: "Important conclusions should remain connected to the information supporting them.",
  },
  {
    title: "Source before summary",
    desc: "A convenient explanation must not erase the underlying source.",
  },
  {
    title: "Context before confidence",
    desc: "Dates, jurisdictions, versions and relationships can materially change meaning.",
  },
  {
    title: "Global by architecture",
    desc: "International capability is designed into the platform rather than bolted on later.",
  },
  {
    title: "Coverage before claims",
    desc: "Talvrin should describe what is actually supported, not market theoretical capability as live coverage.",
  },
  {
    title: "Judgment remains human",
    desc: "Talvrin can improve the information environment; users remain responsible for their decisions.",
  },
];

export default function Principles() {
  return (
    <>
            {/* Our Principles */}
            <section className="bg-white py-16 lg:py-24">
              <div className="mx-auto w-full max-w-[1310px] px-4 sm:px-6 lg:px-8">
                <Reveal>
                  <p className="text-[#6C5CF7] text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide uppercase">OUR PRINCIPLES</p>
                  <h2 className="mt-5 max-w-[800px] text-[32px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.2] lg:leading-[1.2] text-[#171335]">
                    The principles guiding Talvrin.
                  </h2>
                </Reveal>
                <div className="mt-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-between">
                  {/* Text Grid */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {principles.map((principle, idx) => (
                      <Reveal key={principle.title} delay={0.1 * idx}>
                        <div className="flex flex-col space-y-3">
                          <div className="h-[2px] w-8 bg-[#6C5CF7]" />
                          <h3 className="pt-1 text-[15px] sm:text-[16px] font-bold text-[#171335] leading-tight">{principle.title}</h3>
                          <p className="text-[14px] leading-[24px] text-[#5D5A72]">{principle.desc}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                  {/* Image */}
                  <Reveal delay={0.6} className="shrink-0 w-full max-w-[509px]">
                    <div className="overflow-hidden rounded-2xl bg-gray-100 w-full h-[386px]">
                      <Image
                        src="/about-talvrin/image 67.png"
                        alt="Our Principles"
                        width={509}
                        height={386}
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
