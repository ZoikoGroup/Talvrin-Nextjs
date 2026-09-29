import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rows = [
  {
    label: "Question",
    body: "A public-company or security research question.",
    note: 'No "should I buy?" template.',
  },
  {
    label: "Entity Identity",
    body: "Registry-resolved company / issuer / security context.",
    note: "No invented ticker or venue.",
  },
  {
    label: "Primary Filing",
    body: "Named company or regulatory filing.",
    note: "Publication + reporting period + jurisdiction + version visible.",
  },
  {
    label: "Issuer Disclosure",
    body: "Named company communication where permitted.",
    note: "Source class and rights state visible.",
  },
  {
    label: "Contextual Source",
    body: "Official, regulatory, or market context where relevant.",
    note: "No conflation with company-authored material.",
  },
  {
    label: "Interpretation",
    body: "Evidence relationship and current research view.",
    note: "Fact / analysis / AI / user content separated.",
  },
  {
    label: "Monitoring Delta",
    body: "What is new, amended, superseded, or unchanged since review.",
    note: "No target price, rating, or price prediction.",
  },
];

export default function FilingExampleSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Company / Filing Research Example</SectionEyebrow>
          <SectionHeading>
            Don&apos;t just show the company story. Show the filing, the period, and what changed.
          </SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-7">
            QUESTION: What changed in the evidence behind this company view since the last review?
            An illustrative, source-grounded proof — never a forecast, rating, or target price.
          </SectionLede>
        </Reveal>

        <div className="mt-10">
          {rows.map((row, index) => (
            <Reveal
              key={row.label}
              delay={index * 0.03}
              className="grid grid-cols-1 gap-2 border-b border-ink/10 py-4 md:grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)] md:items-start md:gap-4"
            >
              <span className="w-fit min-w-[176px] rounded-md border border-ink/20 bg-surface px-4 py-1.5 text-center text-xs font-bold text-ink">
                {row.label}
              </span>
              <p className="text-base text-slate-700">{row.body}</p>
              <p className="text-sm text-slate-600">{row.note}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          <Link
            href="/product/monitoring"
            className="inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-2"
          >
            Review Changes
          </Link>
          <Link
            href="/product/evidence"
            className="inline-flex items-center justify-center text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
          >
            View Evidence Timeline →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
