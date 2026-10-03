import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rows = [
  {
    label: "Pricing & plans",
    detail: "Not confirmed by an approved pricing source; routes to an approved pricing or contact destination once one exists.",
  },
  {
    label: "Launch & availability date",
    detail: "Never invented — see Release Notes or an official announcement once approved.",
  },
  {
    label: "Support SLA & hours",
    detail: "Never invented — Contact Support or an approved support policy is authoritative.",
  },
  {
    label: "API availability",
    detail: "Never inferred from navigation alone — see approved developer Documentation only once released.",
  },
  {
    label: "Security certification",
    detail: "Never inferred here — the Security / Trust Center is authoritative once published.",
  },
  {
    label: "Exact market & data coverage",
    detail: "Uses the governed Coverage authority rather than a summary from architecture alone.",
  },
  {
    label: "Regulatory / legal status",
    detail: "Handled by approved legal authority only; this FAQ does not provide legal interpretation.",
  },
  {
    label: "Customer outcomes & performance",
    detail: "Testimonials, savings, returns or adoption figures are never invented here.",
  },
];

export default function UnansweredSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container className="max-w-[1048px]">
        <Reveal>
          <SectionEyebrow tone="amber">
            Questions this FAQ doesn&apos;t answer
          </SectionEyebrow>
          <SectionHeading size="md">Some questions stay unresolved on purpose.</SectionHeading>
          <SectionLede>
            Rather than improvise, these areas route to their own authoritative source once one is
            approved and published.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <div className="flex flex-col rounded-2xl border border-ink/10 bg-white px-6 pt-7 pb-2">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-2 border-b border-ink/10 py-4 sm:flex-row sm:gap-5"
              >
                <h3 className="w-full shrink-0 text-sm font-bold text-ink sm:w-56">
                  {row.label}
                </h3>
                <p className="min-w-0 flex-1 text-sm leading-5 text-muted">{row.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
