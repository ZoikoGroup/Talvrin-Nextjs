import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const events = [
  {
    label: "Market Price Change",
    payload: "Approved market-data source, state, timestamp, and rights.",
    forbidden: "That the underlying evidence necessarily changed.",
  },
  {
    label: "New Filing / Disclosure",
    payload: "Source identity, period, publication time, jurisdiction, relationship.",
    forbidden: "That the stock should rise or fall.",
  },
  {
    label: "Amendment / Restatement",
    payload: "Version lineage and the changed evidence.",
    forbidden: "Automatic rating or target-price revision.",
  },
  {
    label: "Context Change",
    payload: "Official, regulatory, or market context.",
    forbidden: "Causal certainty about company value.",
  },
  {
    label: "Research-View Revision",
    payload: "Reviewer/author provenance and supporting evidence.",
    forbidden: "Buy / sell / hold advice.",
  },
];

export default function SemanticSeparationSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Semantic Separation</SectionEyebrow>
          <SectionHeading>A price move is not proof that the evidence changed.</SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-6">
            And an evidence change is not proof that a price should move. Talvrin keeps these as
            separate events with separate required payloads.
          </SectionLede>
        </Reveal>

        <div className="mt-10">
          <div className="hidden gap-4 pb-3 md:grid md:grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)]">
            <span />
            <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
              Required payload
            </p>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
              Forbidden implication
            </p>
          </div>

          {events.map((event, index) => (
            <Reveal
              key={event.label}
              delay={index * 0.04}
              className="grid grid-cols-1 gap-2 border-b border-ink/10 py-5 md:grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)] md:items-start md:gap-4"
            >
              <span className="w-fit min-w-[176px] rounded-md border border-ink/20 bg-surface px-4 py-1.5 text-center text-xs font-bold text-ink">
                {event.label}
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-600 md:hidden">
                  Required payload
                </p>
                <p className="text-base text-slate-700">{event.payload}</p>
              </div>
              <div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-slate-600 md:hidden">
                  Forbidden implication
                </p>
                <p className="text-base text-slate-600">{event.forbidden}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
