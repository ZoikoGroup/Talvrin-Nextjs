import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const memoryRows = [
  {
    tag: "Revisit a view",
    desc: (
      <>
        Research view and evidence relationships remain recoverable according to
        <br />
        released product behavior.
      </>
    ),
    scope: "Retention duration and storage policy.",
  },
  {
    tag: "Understand prior basis",
    desc: (
      <>
        Source version, time, jurisdiction, and interpretation provenance remain
        <br />
        visible.
      </>
    ),
    scope: "Immutable audit/event log.",
  },
  {
    tag: "See what changed",
    desc: "Monitoring delta connects later evidence to the prior research state.",
    scope: "Automated materiality or portfolio impact.",
  },
  {
    tag: "Reuse research",
    desc: (
      <>
        Users and teams may reuse research according to released permissions and
        <br />
        workflow.
      </>
    ),
    scope: "Templates, cloning, org library, sharing scope.",
  },
  {
    tag: "Preserve org knowledge",
    desc: (
      <>
        Research can outlive a single browser session or document, reducing
        <br />
        reconstruction.
      </>
    ),
    scope: "Legal hold, archive tier, compliance recordkeeping.",
  },
];

export default function InstitutionalMemorySection() {
  return (
    <section className="w-full bg-white py-20 lg:py-24">
      <Container className="max-w-[1320px]">
        <Reveal>
          <div className="flex flex-col justify-start items-start">
            <div className="text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide text-[#6C5CE7]">
              INSTITUTIONAL MEMORY
            </div>
            <h2 className="mt-3 text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['IBM_Plex_Sans'] leading-tight lg:leading-[48.72px]">
              Preserve reasoning beyond individual
              <br className="hidden sm:inline" /> analysts and documents.
            </h2>
            <p className="mt-5 max-w-[1000px] text-base sm:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed text-[#5D5A72]">
              Research continuity — never a regulated-recordkeeping or indefinite-retention claim.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[1000px]">
            <div className="divide-y divide-slate-900/10 border-t border-slate-900/10">
              {memoryRows.map((item, index) => (
                <Reveal key={item.tag} delay={0.05 * index}>
                  <div className="grid grid-cols-[220px_minmax(560px,1.4fr)_minmax(0,1fr)] items-center gap-6 py-5">
                    <div>
                      <div className="min-w-[200px] px-4 py-2 bg-[#F6F5FB] rounded-md outline outline-1 outline-offset-[-1px] outline-slate-900/20 inline-flex flex-col justify-center items-center">
                        <span className="text-center text-slate-900 text-xs font-bold font-['IBM_Plex_Sans']">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                    <div className="text-slate-700 text-base font-normal font-['IBM_Plex_Sans'] leading-normal">
                      {item.desc}
                    </div>
                    <div className="text-gray-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-normal text-[#5D5A72]">
                      {item.scope}
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
