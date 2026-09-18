import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rows = [
  {
    label: "Cross-border relationships",
    detail:
      "A company, sovereign, rate market, currency, regulator, and central bank can affect the same question.",
    note: "Evidence is organized around the research question, not one country silo.",
  },
  {
    label: "Different clocks",
    detail:
      "Publication date, effective date, reference period, market reaction time, and revisions can differ.",
    note: "Distinct time fields and version/supersession are preserved.",
  },
  {
    label: "Different authorities",
    detail:
      "Primary, official, licensed, institutional, and commentary sources carry different evidentiary weight.",
    note: "Source class and authority stay visible — never flattened into one feed.",
  },
  {
    label: "Different rights",
    detail: "Content availability differs by licensing, entitlement, and permitted use.",
    note: "Governed rights and access states control what is shown.",
  },
  {
    label: "Different coverage depth",
    detail:
      "A market may be deeply covered, supported, limited, planned, or only architecture-ready.",
    note: "Explicit coverage status is shown from the governed registry.",
  },
];

export default function WhyItsHardSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Cross-Market Complexity</SectionEyebrow>
          <SectionHeading>Why global research is hard.</SectionHeading>
          <SectionLede>
            A single question can span countries, sources, asset classes, and clocks at once.
            Talvrin is designed to keep that complexity organized around the research question —
            not hidden or flattened.
          </SectionLede>
        </Reveal>

        <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
          {rows.map((row, index) => (
            <Reveal key={row.label} delay={index * 0.05}>
              <div className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-[200px_minmax(0,1fr)_minmax(0,1fr)] sm:items-start sm:gap-4">
                <span className="inline-flex w-fit shrink-0 items-center rounded-md border border-ink/16 bg-white px-4 py-2 text-center text-xs font-bold text-ink">
                  {row.label}
                </span>
                <p className="text-sm text-ink/80 sm:text-[15px]">{row.detail}</p>
                <p className="text-sm text-slate-600">{row.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
