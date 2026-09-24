import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rows = [
  {
    maySay: "State that Talvrin's architecture is designed for global public markets.",
    mustNot: "Universal API or data coverage claims not backed by a released registry entry.",
  },
  {
    maySay:
      "Explain that a response field carries source, time, or jurisdiction context — if the contract defines it.",
    mustNot: "Invented field names, schemas, or evidence semantics the contract does not expose.",
  },
  {
    maySay: "Note that access or entitlement may govern availability at a high level.",
    mustNot: "Specific redistribution rights, vendors, or contract terms not supplied.",
  },
  {
    maySay:
      "Distinguish documented generated interpretation from source evidence, where the API exposes both.",
    mustNot: "Language that turns generated content into authoritative evidence.",
  },
  {
    maySay: "Confirm this page is research and intelligence infrastructure.",
    mustNot: "Any implication of trade execution or manufactured investment recommendations.",
  },
];

export default function EvidenceTruthSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Evidence, Coverage &amp; Data-Rights Truth</SectionEyebrow>
          <SectionHeading>
            Documentation follows the contract&apos;s evidence semantics — it doesn&apos;t invent
            its own.
          </SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-7">
            Where a released interface exposes source, time, jurisdiction, or
            generated-vs-evidence fields, this page documents exactly what the contract defines.
            Global architecture is never rendered as live API or data coverage.
          </SectionLede>
        </Reveal>

        <div className="mt-10">
          <div className="hidden gap-4 pb-3 sm:grid sm:grid-cols-2">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
              The documentation may say
            </p>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
              The documentation must not invent
            </p>
          </div>

          {rows.map((row, index) => (
            <Reveal
              key={row.maySay}
              delay={index * 0.04}
              className="grid grid-cols-1 gap-2 border-b border-ink/10 py-4 sm:grid-cols-2 sm:gap-4"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-600 sm:hidden">
                  May say
                </p>
                <p className="text-base text-ink">{row.maySay}</p>
              </div>
              <div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-slate-600 sm:hidden">
                  Must not invent
                </p>
                <p className="text-base text-slate-600">{row.mustNot}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.1}
          className="mt-8 rounded-xl border border-ink/10 bg-white px-5 py-4"
        >
          <p className="text-xs font-bold leading-5 text-slate-600">
            <span className="text-ink">Copy lock:</span> terms like &ldquo;real-time API,&rdquo;
            &ldquo;global market data API,&rdquo; &ldquo;institutional-grade API,&rdquo; or any
            uptime/coverage superlative appear only when an approved source explicitly supports the
            exact wording and scope.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
