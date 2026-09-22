import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const problems = [
  {
    tag: "Fragmented sourcing",
    today: (
      <>
        Research evidence is spread across tabs, documents, inboxes, spreadsheets,
        <br />
        and individual memory.
      </>
    ),
    response: "Organize research around governed evidence and a persistent research object.",
  },
  {
    tag: "Duplicated work",
    today: "Teams repeatedly reconstruct timelines and verify the same material.",
    response: "Preserve evidence relationships and prior reasoning so research can be revisited.",
  },
  {
    tag: "Inconsistent evidence",
    today: "Different people may work from different source versions or commentary layers.",
    response: "Expose source identity, date, period, version, jurisdiction, and rights.",
  },
  {
    tag: "Weak institutional memory",
    today: "Reasoning disappears when it lives only with an individual analyst or document.",
    response: "Preserve research views and evidence relationships over time.",
  },
  {
    tag: "Difficult reviewability",
    today: (
      <>
        Supervisors and governance functions struggle to inspect why a conclusion was
        <br />
        reached.
      </>
    ),
    response: "Make the source trail and research-view basis inspectable.",
  },
];

export default function TheProblemSection() {
  return (
    <section className="w-full bg-[#F6F5FB] py-20 lg:py-24">
      <Container className="max-w-[1320px]">
        <Reveal>
          <div className="flex flex-col justify-start items-start">
            <div className="text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide text-[#6C5CE7]">
              THE PROBLEM
            </div>
            <h2 className="mt-3 text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['IBM_Plex_Sans'] leading-tight lg:leading-[48.72px]">
              Fragmented research creates more
              <br className="hidden sm:inline" /> than inefficiency.
            </h2>
            <p className="mt-5 max-w-[1000px] text-base sm:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed text-[#5D5A72]">
              It creates duplicated work, inconsistent evidence, weak institutional memory, and difficulty reviewing
              <br className="hidden md:inline" /> why a conclusion was reached.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[1000px]">
            {/* Table Header */}
            <div className="grid grid-cols-[192px_minmax(580px,1.4fr)_minmax(0,1fr)] gap-6 pb-3">
              <div />
              <div className="text-gray-600 text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide uppercase">
                WHAT HAPPENS TODAY
              </div>
              <div className="text-gray-600 text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide uppercase">
                TALVRIN RESPONSE
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-900/10 border-t border-slate-900/10">
              {problems.map((item, index) => (
                <Reveal key={item.tag} delay={0.05 * index}>
                  <div className="grid grid-cols-[192px_minmax(580px,1.4fr)_minmax(0,1fr)] items-center gap-6 py-5">
                    <div>
                      <div className="min-w-[170px] px-4 py-2 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-slate-900/20 inline-flex flex-col justify-center items-center">
                        <span className="text-center text-slate-900 text-xs font-bold font-['IBM_Plex_Sans']">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                    <div className="text-slate-700 text-base font-normal font-['IBM_Plex_Sans'] leading-normal">
                      {item.today}
                    </div>
                    <div className="text-gray-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-normal text-[#5D5A72]">
                      {item.response}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
