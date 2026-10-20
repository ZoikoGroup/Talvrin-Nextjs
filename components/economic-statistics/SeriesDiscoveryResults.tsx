import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const fields = [
  {
    label: "Official title",
    body: "Exact published indicator name — never a generated substitute.",
  },
  {
    label: "Issuing agency",
    body: "Named statistical agency or international body — never “data provider.”",
  },
  {
    label: "Economy / jurisdiction",
    body: "Stable country or region entity tied to the issuing authority.",
  },
  {
    label: "Frequency",
    body: "Monthly, quarterly or annual, exactly as the source publishes it.",
  },
  {
    label: "Units",
    body: "Index level, percent, percentage points or currency, always labeled.",
  },
  {
    label: "Seasonal adjustment",
    body: "Adjusted or not seasonally adjusted, shown explicitly, never assumed.",
  },
  {
    label: "Coverage status",
    body: "Deep coverage / supported / limited / planned, from the governed registry.",
  },
  {
    label: "Last verified",
    body: "Date the registry last confirmed the series record.",
  },
];

export default function SeriesDiscoveryResults() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Series Discovery Results</SectionEyebrow>
          <SectionHeading>
            What a series row will show — never fewer fields, never a guess.
          </SectionHeading>
          <p className="mt-5 max-w-[800px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            Sort by publication date, issuer or indicator family; filter by economy and topic once
            verified. Column headers stay semantic and coverage / rights status stay explicit.
          </p>
        </Reveal>

        <div className="mt-10">
          <p className="pb-3 text-xs font-bold uppercase tracking-[0.72px] text-slate-600">
            Series Row Contract
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
              There are no published series records yet.
            </p>
            <p className="mt-2 text-sm leading-[22.4px] text-slate-600">
              Live series rows will follow this exact contract, with every field sourced from a
              governed registry rather than a fabricated placeholder.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
