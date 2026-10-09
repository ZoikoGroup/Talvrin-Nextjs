import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";

const context = [
  {
    label: "Publication time",
    detail: "Display source publication timestamp; include timezone where material.",
  },
  {
    label: "Effective / reference period",
    detail: "Shown separately when the evidence applies to another date or period.",
  },
  {
    label: "Reporting / economic period",
    detail: "Exposed when material to filings, economic data, fiscal data or policy.",
  },
  {
    label: "Retrieval / ingestion time",
    detail: "Internal/conditional; public only where meaningful — never used to call a source \"current.\"",
  },
  { label: "Jurisdiction", detail: "Exposed when meaning depends on legal, economic or market context." },
  {
    label: "Last reviewed",
    detail: "Applies to Talvrin’s interpretation or standard review, not source publication.",
  },
];

export default function TimeContextSection() {
  return (
    <section id="time-context" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Published and Effective Are Different Questions"
            title="Time, version and jurisdiction stay visible when meaning changes."
          >
            Unknown or not-supplied context is kept explicit — it is never silently promoted to a
            confident state.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-4">
          <dl className="overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:pt-7">
            {context.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-1.5 border-b border-ink/10 px-5 py-4 last:border-b-0 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-4"
              >
                <dt className="text-base font-bold text-ink">{row.label}</dt>
                <dd className="text-sm leading-5 text-muted md:pt-0.5">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
