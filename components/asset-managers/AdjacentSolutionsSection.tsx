import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const adjacentSolutions = [
  {
    title: "Investment Professionals",
    desc: (
      <>
        Individual analysts, portfolio
        <br />
        professionals, and researchers who
        <br />
        need efficient source-linked
        <br />
        evidence and context.
      </>
    ),
    href: "/solutions/investment-professionals",
  },
  {
    title: "Research Teams",
    desc: (
      <>
        Teams that need repeatable
        <br />
        workflows, shared evidence, and
        <br />
        monitoring.
      </>
    ),
    href: "/solutions/research-teams",
  },
  {
    title: "Enterprise",
    desc: (
      <>
        Broad organization deployment and
        <br />
        enterprise evaluation where
        <br />
        released.
      </>
    ),
    href: "/solutions/enterprise",
  },
  {
    title: "Wealth & Advisory Research",
    desc: (
      <>
        Evidence-led market intelligence
        <br />
        supporting analysis and client
        <br />
        research processes.
      </>
    ),
    href: "/solutions/wealth-advisory",
  },
];

export default function AdjacentSolutionsSection() {
  return (
    <section className="w-full bg-[#F6F5FB] py-20 lg:py-24">
      <Container className="max-w-[1320px]">
        <Reveal>
          <div className="flex flex-col justify-start items-start">
            <div className="text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide text-[#6C5CE7]">
              ADJACENT SOLUTIONS
            </div>
            <h2 className="mt-3 text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['IBM_Plex_Sans'] leading-tight lg:leading-[48.72px]">
              Not quite Asset Managers? Find the right fit.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[repeat(2,309px)_1fr] items-stretch">
          {/* Left 4 Cards in 2x2 Grid (Each card strictly 309px x 221px on desktop) */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-[642px]">
            {adjacentSolutions.map((item, index) => (
              <Reveal key={item.title} delay={0.05 * index} className="h-full">
                <div className="w-full lg:w-[309px] h-full lg:h-[221px] min-h-[221px] p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 flex flex-col justify-between items-start transition-shadow hover:shadow-md">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-['IBM_Plex_Sans'] text-[#171335]">
                      {item.title}
                    </h3>
                    <div className="mt-2.5 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#5D5A72]">
                      {item.desc}
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold font-['IBM_Plex_Sans'] text-[#6C5CE7] hover:underline"
                    >
                      <span>Learn more</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        <path
                          d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right Image */}
          <Reveal delay={0.2} className="flex h-full">
            <div className="relative aspect-[500/466] lg:aspect-auto w-full min-h-[320px] lg:min-h-[466px] overflow-hidden rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 bg-white shadow-xs">
              <Image
                src="/asset-managers/image 78.png"
                alt="Talvrin solutions for different financial roles"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
