import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";

const context = [
  { label: "Publication time", detail: "Displayed with timezone where material." },
  {
    label: "Effective / reference period",
    detail: "Separated from publication time when the information applies to another period.",
  },
  {
    label: "Jurisdiction",
    detail: "Shown when legal, economic or market-structural meaning depends on place.",
  },
  {
    label: "Version / supersession",
    detail: "Exposed when a document or dataset is revised, replaced or superseded.",
  },
  {
    label: "Last verified",
    detail: "Used only if the registry truly records source verification/currentness.",
  },
  { label: "Unknown / not supplied", detail: "Kept explicit; never silently coerced into a confident state." },
];

export default function TimeVersionSection() {
  return (
    <section id="time-version" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Context Before Confidence"
            tone="amber"
            title="Time, version and jurisdiction stay visible when meaning changes."
          >
            Unknown or not-supplied context is kept explicit — it never gets silently coerced into a
            confident state.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-4">
          <dl className="overflow-hidden rounded-2xl border border-ink/10 bg-white sm:pt-7">
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
