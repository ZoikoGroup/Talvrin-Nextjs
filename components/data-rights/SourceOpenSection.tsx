import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";

const scenarios = [
  {
    scenario: "Open web / public authority source",
    action: "A direct link may be used when approved and safe.",
  },
  {
    scenario: "Licensed source with governed viewer",
    action: "A governed viewer opens only if entitlement and display rights permit it.",
  },
  {
    scenario: "External provider entitlement needed",
    action: "Routes to the provider or an approved flow only once contract and UX are established.",
  },
  {
    scenario: "No permitted source-open path",
    action:
      "No fabricated \"Open source\" action appears; permitted metadata and the limitation are shown instead.",
  },
  {
    scenario: "Rights state changed after prior review",
    action: "The current limitation is shown and permitted audit metadata or history is preserved.",
  },
];

const notes = [
  {
    title: "Rights changes are governed, not evergreen",
    body: "When a contract, entitlement or policy change affects an action, the product updates through the governed registry — never from hard-coded copy. Material changes are auditable: changed field, effective time, and user-impact where permitted.",
  },
  {
    title: "Global architecture is not global rights",
    body: "A source or market being architecture-ready, technically ingestible or discoverable does not prove Talvrin has rights to expose it in every geography, plan or workflow. Jurisdiction-sensitive rights are enforced from approved data, never geolocation guesswork.",
  },
];

export default function SourceOpenSection() {
  return (
    <section id="source-open" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Opening a Source Is a Rights Decision"
            title="A source-open action appears only when current rights state permits it."
          >
            No fabricated &quot;Open source&quot; action ever appears. When no permitted path exists,
            Talvrin shows permitted metadata and the limitation instead.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-4">
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white sm:pt-7">
            <table className="w-full border-collapse text-left">
              <thead className="hidden bg-ink md:table-header-group">
                <tr>
                  <th scope="col" className="w-[35%] px-5 py-3.5 text-xs font-bold uppercase tracking-wide text-white/70">
                    Scenario
                  </th>
                  <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide text-white/70">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((row) => (
                  <tr
                    key={row.scenario}
                    className="flex flex-col gap-1 border-b border-ink/10 px-5 py-4 last:border-b-0 md:table-row md:p-0"
                  >
                    <th scope="row" className="text-base font-bold text-ink md:px-5 md:py-4 md:align-top">
                      {row.scenario}
                    </th>
                    <td className="text-sm leading-5 text-muted md:px-5 md:py-4 md:align-top">
                      {row.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-2 md:grid-cols-2">
          {notes.map((note, index) => (
            <Reveal key={note.title} delay={0.15 + index * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-white p-5">
                <h3 className="text-base font-bold text-ink">{note.title}</h3>
                <p className="text-sm leading-6 text-muted">{note.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
