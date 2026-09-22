import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function HowItWorks() {
  const stepsRow1 = [
    {
      num: "01",
      title: "Ask",
      desc: "Begin with a market, issuer, security, economic event, policy issue or research question.",
    },
    {
      num: "02",
      title: "Discover",
      desc: "Find relevant evidence and supporting context.",
    },
    {
      num: "03",
      title: "Inspect",
      desc: "Open and review the underlying sources.",
    },
    {
      num: "04",
      title: "Understand",
      desc: "See how individual pieces of evidence relate to the question being investigated.",
    },
    {
      num: "05",
      title: "Build",
      desc: "Develop and preserve a research view.",
    },
  ];

  const stepsRow2 = [
    {
      num: "06",
      title: "Monitor",
      desc: "Continue watching the evidence and assumptions that matter.",
    },
    {
      num: "07",
      title: "Reassess",
      desc: "Return when meaningful new information changes the evidence base.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-32">
      <div className="max-w-[1309px] mx-auto px-6 lg:px-0">
        
        {/* Header Content */}
        <Reveal>
          <p className="text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide text-[#B98132] uppercase">
            HOW IT WORKS
          </p>
          <h2 className="mt-4 text-slate-900 text-4xl sm:text-5xl font-bold font-['IBM_Plex_Sans'] leading-[50.60px]">
            From question to a monitored<br />
            view.
          </h2>
          <p className="mt-4 text-gray-600 text-base font-normal font-['IBM_Plex_Sans'] leading-7 max-w-[760px]">
            Research should not end when an answer is generated. Talvrin is designed around a continuing<br />
            evidence workflow.
          </p>
        </Reveal>

        {/* First Row: Steps 01 to 05 */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-start">
          {stepsRow1.map((step, idx) => (
            <Reveal key={step.num} delay={0.05 * (idx + 1)}>
              <div className="flex flex-col space-y-2">
                <span className="text-slate-900/20 text-4xl font-bold font-['IBM_Plex_Sans'] leading-none">
                  {step.num}
                </span>
                <h3 className="text-slate-900 text-lg font-bold font-['IBM_Plex_Sans']">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base font-normal font-['IBM_Plex_Sans'] leading-6">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Second Row: Steps 06 and 07 */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-start">
          {stepsRow2.map((step, idx) => (
            <Reveal key={step.num} delay={0.3 + 0.05 * idx}>
              <div className="flex flex-col space-y-2">
                <span className="text-slate-900/20 text-4xl font-bold font-['IBM_Plex_Sans'] leading-none">
                  {step.num}
                </span>
                <h3 className="text-slate-900 text-lg font-bold font-['IBM_Plex_Sans']">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base font-normal font-['IBM_Plex_Sans'] leading-6">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}