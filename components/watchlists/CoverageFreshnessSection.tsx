import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const items = [
  {
    title: "Architecture vs. released",
    description:
      "A watched item may exist even when a specific monitoring/data capability is not released; the actual state is shown.",
  },
  {
    title: "Freshness",
    description: "Row timestamps are never used as proof that underlying research/evidence is current.",
  },
  {
    title: "Monitoring availability",
    description: 'Unavailable/limited is kept separate from "no changes".',
  },
  {
    title: "Rights / entitlement",
    description: "Membership never grants access to restricted evidence.",
  },
  {
    title: "Jurisdiction",
    description: "Exposed when materially relevant to the research context.",
  },
  {
    title: "Source availability",
    description: "If a source disappears, safe metadata/history is preserved per the Evidence contract.",
  },
  {
    title: "Service status",
    description: "Material outages use system/status communication, never silent stale data.",
  },
  {
    title: "Global claim",
    description:
      '"Global by architecture" is never turned into "every market supported in every watchlist".',
  },
];

export default function CoverageFreshnessSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Coverage, Freshness & Rights Truth</SectionEyebrow>
          <SectionHeading>Being watched is not the same as being covered.</SectionHeading>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-x-8 gap-y-8 border-t border-ink/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <h3 className="text-[15px] font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
