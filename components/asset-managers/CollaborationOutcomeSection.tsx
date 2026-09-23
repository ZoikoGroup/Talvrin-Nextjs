import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const collabRows = [
  {
    tag: "Shared evidence base",
    safe: (
      <>
        Teams can work from a common evidence foundation where released
        <br />
        capabilities permit.
      </>
    ),
    gated: "Shared workspaces, comments, @mentions, co-editing, presence.",
  },
  {
    tag: "Reusable research",
    safe: "Research can become easier to revisit and reuse across an organization.",
    gated: "Templates, cloning, libraries, org-wide search scope.",
  },
  {
    tag: "Reviewability",
    safe: (
      <>
        Colleagues, supervisors, and governance functions can inspect the basis of a
        <br />
        view.
      </>
    ),
    gated: "Approval chains, reviewer assignment, attestations.",
  },
  {
    tag: "Scalable workflows",
    safe: (
      <>
        Research processes can become more repeatable across teams, markets, and
        <br />
        jurisdictions.
      </>
    ),
    gated: "Workflow automation, tasks, queues, SLAs, escalation.",
  },
  {
    tag: "Institutional memory",
    safe: "Evidence and reasoning can persist beyond individual files and analysts.",
    gated: "Retention policy, legal hold, archive tiers.",
  },
];

export default function CollaborationOutcomeSection() {
  return (
    <section className="w-full bg-[#F6F5FB] py-20 lg:py-24">
      <Container className="max-w-[1320px]">
        <Reveal>
          <div className="flex flex-col justify-start items-start">
            <div className="text-yellow-600 text-xs font-bold font-['IBM_Plex_Sans'] tracking-wide text-[#B98132]">
              COLLABORATION OUTCOME
            </div>
            <h2 className="mt-3 text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['IBM_Plex_Sans'] leading-tight lg:leading-[48.72px]">
              A shared evidence base — mechanics
              <br className="hidden sm:inline" /> remain capability-gated.
            </h2>
            <p className="mt-5 max-w-[1000px] text-base sm:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed text-[#5D5A72]">
              Collaboration is described as an outcome. Comments, co-editing, approvals, and org libraries are
              <br className="hidden md:inline" /> shown only when a released capability supports them.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[1000px]">
            {/* Table Header */}
            <div className="grid grid-cols-[220px_minmax(540px,1.4fr)_minmax(0,1fr)] gap-6 pb-3 text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wide text-[#5D5A72]">
              <div />
              <div>SAFE PUBLIC LANGUAGE</div>
              <div>CAPABILITY-GATED — NOT INVENTED</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-900/10 border-t border-slate-900/10">
              {collabRows.map((item, index) => (
                <Reveal key={item.tag} delay={0.05 * index}>
                  <div className="grid grid-cols-[220px_minmax(540px,1.4fr)_minmax(0,1fr)] items-center gap-6 py-5">
                    <div>
                      <div className="min-w-48 px-8 py-1.5 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-slate-900/20 inline-flex flex-col justify-start items-center">
                        <div className="text-center justify-center text-slate-900 text-xs font-bold font-['IBM_Plex_Sans']">
                          {item.tag}
                        </div>
                      </div>
                    </div>
                    <div className="text-slate-700 text-base font-normal font-['IBM_Plex_Sans'] leading-normal">
                      {item.safe}
                    </div>
                    <div className="text-gray-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-normal text-[#5D5A72]">
                      {item.gated}
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
