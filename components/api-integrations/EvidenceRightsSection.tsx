import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rows = [
  {
    may: "Return evidence with its source registry identity, jurisdiction, licence terms and freshness rule attached.",
    never: "Convert a restricted document into a freely distributable fact.",
  },
  {
    may: "Expose validation states such as verified, derived-verified, conflicting, stale or unsupported.",
    never: "Flatten those states into a single confident numeric answer.",
  },
  {
    may: "Evaluate retrieve, store, cache, index, AI-use, display, export and redistribution permissions independently.",
    never: "Let a technically successful request bypass the rights engine.",
  },
  {
    may: "Expose supersession, correction and version history where approved.",
    never: "Silently overwrite a historical view when a source is revised.",
  },
  {
    may: "Deny a request and log the reason when rights or policy prohibit output.",
    never: "Return a “derived data” substitute to route around a restriction.",
  },
];

export default function EvidenceRightsSection() {
  return (
    <section id="evidence-rights" className="scroll-mt-32 bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Evidence &amp; rights</SectionEyebrow>
          <SectionHeading inverted>What must survive every API boundary.</SectionHeading>
          <SectionLede inverted className="max-w-[780px]">
            The API does not convert restricted documents into freely distributable facts. Rights
            and evidence states are enforced server-side before any response leaves Talvrin — never
            inferred from a technically successful request.
          </SectionLede>
        </Reveal>

        <div className="mt-10">
          <div className="hidden gap-4 pb-3 sm:grid sm:grid-cols-2">
            <p className="text-xs font-bold uppercase tracking-wide text-white/50">This API may</p>
            <p className="text-xs font-bold uppercase tracking-wide text-white/50">
              This API must never
            </p>
          </div>

          {rows.map((row, i) => (
            <Reveal
              key={row.may}
              delay={i * 0.04}
              className="grid grid-cols-1 gap-2 border-b border-white/10 py-4 sm:grid-cols-2 sm:gap-4"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white/50 sm:hidden">
                  May
                </p>
                <p className="text-sm leading-6 text-white sm:pr-10 sm:text-base">{row.may}</p>
              </div>
              <div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-white/50 sm:hidden">
                  Must never
                </p>
                <p className="text-sm leading-6 text-white/60 sm:text-base">{row.never}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
