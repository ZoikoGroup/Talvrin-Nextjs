import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const steps = ["ASK", "DISCOVER", "INSPECT", "UNDERSTAND", "BUILD", "MONITOR", "REASSESS"];

const workflowItems = [
  {
    step: "ASK",
    desc: (
      <>
        Start with a market, issuer, security,
        <br />
        economic event, policy issue, filing, or
        <br />
        research question.
      </>
    ),
  },
  {
    step: "DISCOVER",
    desc: (
      <>
        Find relevant evidence and context
        <br />
        efficiently, using governed source,
        <br />
        coverage, and rights controls.
      </>
    ),
  },
  {
    step: "INSPECT",
    desc: (
      <>
        Open and review the underlying
        <br />
        evidence — source authority, timing,
        <br />
        period, jurisdiction, version, and
        <br />
        access state preserved.
      </>
    ),
  },
  {
    step: "MONITOR",
    desc: (
      <>
        Keep the evidence and assumptions
        <br />
        connected to the research object,
        <br />
        surfacing meaningful change without
        <br />
        notification noise.
      </>
    ),
  },
  {
    step: "REASSESS",
    desc: (
      <>
        Return when new information
        <br />
        changes the evidence base, with what
        <br />
        changed since the last meaningful
        <br />
        review shown clearly.
      </>
    ),
  },
  {
    step: "UNDERSTAND",
    desc: (
      <>
        Determine how evidence supports,
        <br />
        challenges, updates, or
        <br />
        contextualizes the question, kept
        <br />
        separate from analysis and AI
        <br />
        assistance.
      </>
    ),
  },
];

export default function WorkflowSection() {
  return (
    <section className="w-full bg-[#171335] py-20 lg:py-24 text-white">
      <Container className="max-w-[1320px]">
        <Reveal>
          <div className="flex flex-col justify-start items-start">
            <div className="text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide text-[#6C5CE7]">
              INVESTMENT RESEARCH WORKFLOW
            </div>
            <h2 className="mt-3 text-violet-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-['IBM_Plex_Sans'] leading-tight lg:leading-[48.72px] text-[#F6F5FB]">
              Research infrastructure, not portfolio
              <br className="hidden sm:inline" /> infrastructure.
            </h2>
          </div>
        </Reveal>

        {/* Stepper Bar with Arrow Connectors */}
        <Reveal delay={0.1} className="mt-10 overflow-x-auto pb-4">
          <div className="flex min-w-[760px] items-center gap-2.5">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-2.5">
                <div className="px-4 py-2 bg-violet-50/5 rounded-full outline outline-1 outline-offset-[-1px] outline-violet-50/20 inline-flex flex-col justify-start items-start">
                  <span className="text-violet-50 text-xs font-semibold font-['IBM_Plex_Sans'] text-[#F6F5FB]">
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-violet-50/30"
                  >
                    <path
                      d="M1 5H13M13 5L9 1M13 5L9 9"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Workflow Grid & Image */}
        <div className="mt-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Left: 3x2 items grid with exact 244px columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 w-full lg:w-[780px] shrink-0">
            {workflowItems.map((item, index) => (
              <Reveal key={item.step} delay={0.05 * index}>
                <div className="flex flex-col gap-2 w-full max-w-[245px]">
                  <span className="text-yellow-600 text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide uppercase text-[#B98132]">
                    {item.step}
                  </span>
                  <div className="text-violet-50/75 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 text-[#F6F5FB]/75">
                    {item.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right: Workflow Preview Image */}
          <Reveal delay={0.3} className="w-full lg:w-[507px] shrink-0">
            <div className="relative aspect-[507/264] w-full overflow-hidden rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 bg-white/5 shadow-sm">
              <Image
                src="/asset-managers/image 73.png"
                alt="Investment research workflow preview"
                fill
                sizes="(min-width: 1024px) 507px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
