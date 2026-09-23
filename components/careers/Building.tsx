import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function Building() {
  const steps = [
    { num: "1", title: "Ask" },
    { num: "2", title: "Discover" },
    { num: "3", title: "Inspect" },
    { num: "4", title: "Build" },
    { num: "5", title: "Monitor" },
    { num: "6", title: "Reassess" },
  ];

  return (
    <section id="mission" className="w-full bg-white py-20 lg:py-24 border-b border-slate-900/10">
      <Container className="max-w-[1100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-wider text-[#6C5CE7] font-['IBM_Plex_Sans']">
                WHAT TALVRIN IS BUILDING
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 font-['IBM_Plex_Sans'] sm:text-4xl lg:text-[44px] lg:leading-[50px] max-w-xl">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  Talvrin is building a source-
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  linked research and
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  monitoring platform for global
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  public markets.
                </span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-[#5D5A72] font-['IBM_Plex_Sans'] leading-relaxed max-w-xl">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  The platform is designed to connect questions, evidence, context,
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  preserved research views, and continuous monitoring so people and
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  organizations can form more defensible views.
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8">
              <Link
                href="/about-talvrin"
                className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#6C5CE7] font-['IBM_Plex_Sans'] hover:underline"
              >
                <span>Learn More About Talvrin</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-x-1 shrink-0 text-[#6C5CE7]"
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
            </Reveal>
          </div>

          {/* Right Column: The Research Workflow */}
          <div className="lg:col-span-5 flex flex-col">
            <Reveal delay={0.3}>
              <p className="text-xs font-bold uppercase tracking-wider text-[#5D5A72] font-['IBM_Plex_Sans'] mb-4">
                THE RESEARCH WORKFLOW
              </p>
              <div className="flex flex-col border-t border-slate-900/10">
                {steps.map((step) => (
                  <div
                    key={step.num}
                    className="flex items-center gap-4 py-3.5 border-b border-slate-900/10"
                  >
                    <div className="size-7 rounded-full bg-[#F6F5FB] border border-slate-900/10 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-[#6C5CE7] font-['IBM_Plex_Sans']">
                        {step.num}
                      </span>
                    </div>
                    <span className="text-base font-semibold text-slate-900 font-['IBM_Plex_Sans']">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}