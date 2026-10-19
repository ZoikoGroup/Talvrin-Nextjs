import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const events = [
  {
    label: "MPC SUMMARY · 19 Sep 2026",
    body: "Publication date and effective date are the same — a policy statement takes effect at announcement.",
  },
  {
    label: "GILT ISSUANCE CALENDAR · 31 Jul 2026",
    body: "Published 31 Jul 2026; the financing plan it describes covers a separate forward period, shown as the effective window.",
  },
  {
    label: "PUBLIC SECTOR FINANCES · 20 Sep 2026",
    body: "Published 20 Sep 2026 but reports on August 2026 — publication date and reference period are tracked separately.",
  },
];

export default function TemporalContextSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Temporal &amp; Event Context</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[760px]">
            Publication, effective and observation dates are different questions.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600">
            No timeline event is shown without a source-linked timestamp, and no
            temporal coincidence implies causality. Monetary Policy Committee
            decisions are never conflated with gilt-specific yields.
          </p>
        </Reveal>

        <dl className="mt-8 sm:mt-10">
          {events.map((event, index) => (
            <Reveal
              key={event.label}
              delay={0.05 * (index + 1)}
              className="grid grid-cols-1 gap-x-4 gap-y-2 border-b border-ink/10 py-4 md:grid-cols-[290px_minmax(0,1fr)] md:items-start"
            >
              <dt className="inline-flex w-fit items-center justify-center rounded-md border border-ink/20 bg-surface px-4 py-1.5 text-center text-xs font-bold text-ink md:w-full">
                {event.label}
              </dt>
              <dd className="text-sm leading-6 text-slate-700 sm:text-base">{event.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
