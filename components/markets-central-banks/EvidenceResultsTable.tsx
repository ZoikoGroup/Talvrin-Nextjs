import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const fields = [
  {
    label: "Date",
    body: "Official published date, shown separately from any reporting period it concerns.",
  },
  {
    label: "Title",
    body: "Human-readable official document title, never a generated substitute.",
  },
  {
    label: "Issuer",
    body: "Named institution or publishing body — kept separate from third-party commentary.",
  },
  {
    label: "Jurisdiction",
    body: "Stable jurisdiction entity tied to the issuing institution.",
  },
  {
    label: "Source type",
    body: "Governed source-family taxonomy — statement, minutes, speech, report or other verified class.",
  },
  {
    label: "Reporting period",
    body: "The period the evidence concerns, when distinct from its publication date.",
  },
  {
    label: "Status",
    body: "Current / corrected / superseded / withdrawn / restricted, exactly as the source supports.",
  },
];

export default function EvidenceResultsTable() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Evidence Results Table</SectionEyebrow>
          <SectionHeading>What an evidence row will show — never fewer fields, never a guess.</SectionHeading>
          <p className="mt-5 max-w-[800px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            Sort by official published date, entity or family; filter by date and language once
            verified. Column headers stay semantic and source-type / rights status stay explicit.
          </p>
        </Reveal>

        <div className="mt-10">
          <p className="pb-3 text-xs font-bold uppercase tracking-[0.72px] text-slate-600">
            Evidence Row Contract
          </p>

          <div className="divide-y divide-ink/10 border-t border-ink/10">
            {fields.map((field, index) => (
              <Reveal key={field.label} delay={index * 0.03}>
                <div className="grid grid-cols-1 gap-3 py-[18px] sm:grid-cols-[200px_minmax(0,1fr)] sm:items-start sm:gap-4">
                  <span className="inline-flex w-fit shrink-0 items-center rounded-md border border-ink/16 bg-white px-4 py-2 text-center text-[13px] font-bold text-ink">
                    {field.label}
                  </span>
                  <p className="text-[15px] text-ink-soft">{field.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-6 rounded-[14px] bg-white p-7">
            <p className="text-[15px] font-semibold text-ink-soft">
              There are no published evidence records yet.
            </p>
            <p className="mt-2 text-sm leading-[22.4px] text-slate-600">
              Live evidence rows will follow this exact contract, with every field sourced from a
              governed registry rather than a fabricated placeholder.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
