import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const workflowSteps = [
  { num: "1", label: "Ask" },
  { num: "2", label: "Discover" },
  { num: "3", label: "Inspect" },
  { num: "4", label: "Build" },
  { num: "5", label: "Monitor" },
  { num: "6", label: "Reassess" },
];

export default function WhatWeAreBuilding() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <Container className="max-w-[1100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: What Talvrin is Building */}
          <div className="lg:col-span-7 flex flex-col justify-start items-start">
            <Reveal>
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="text-[#6C5CE7] text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide uppercase">
                  WHAT TALVRIN IS BUILDING
                </div>
                <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['IBM_Plex_Sans'] leading-[47.20px]">
                  Talvrin is building a source-<br />
                  linked research and<br />
                  monitoring platform for global<br />
                  public markets.
                </h2>
                <p className="pt-3 pb-2.5 text-[#5D5A72] text-base sm:text-lg font-normal font-['IBM_Plex_Sans'] leading-8">
                  The platform is designed to connect questions, evidence, context, preserved research views, and continuous monitoring so people and organizations can form more defensible views.
                </p>
                <a
                  href="#learn-more"
                  className="text-[#6C5CE7] text-sm font-semibold font-['IBM_Plex_Sans'] hover:underline inline-flex items-center gap-1"
                >
                  Learn More About Talvrin →
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: The Research Workflow */}
          <div className="lg:col-span-5 flex flex-col justify-start items-start w-full">
            <Reveal delay={0.2} className="w-full">
              <div className="flex flex-col justify-start items-start gap-4 w-full">
                <div className="text-[#5D5A72] text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wide">
                  THE RESEARCH WORKFLOW
                </div>
                <div className="w-full flex flex-col justify-start items-start">
                  {workflowSteps.map((step) => (
                    <div
                      key={step.num}
                      className="self-stretch py-3.5 border-b-[0.80px] border-slate-900/10 flex justify-start items-center gap-4"
                    >
                      <div className="size-7 bg-violet-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-900/10 flex justify-center items-center shrink-0">
                        <span className="text-[#6C5CE7] text-xs font-bold font-['IBM_Plex_Sans']">
                          {step.num}
                        </span>
                      </div>
                      <span className="text-slate-900 text-base font-semibold font-['IBM_Plex_Sans']">
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}