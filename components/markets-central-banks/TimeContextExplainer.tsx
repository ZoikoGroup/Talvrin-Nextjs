import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const fields = [
  {
    label: "Meeting Date",
    body: "When the policy-setting body convened — distinct from when any decision was publicly announced.",
  },
  {
    label: "Decision Publication",
    body: "When the official decision or statement was released to the public, with explicit time zone.",
  },
  {
    label: "Effective Date",
    body: "When an announced policy change actually takes effect, which can differ materially from the publication date.",
  },
  {
    label: "Revision / Correction",
    body: "When a prior release was corrected or restated — tracked separately, never overwriting the original timestamp.",
  },
];

export default function TimeContextExplainer() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Time-Context Explainer</SectionEyebrow>
          <SectionHeading>Meeting, publication, effective and revised dates are different questions.</SectionHeading>
          <p className="mt-5 max-w-[800px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            No timeline event is shown without a source-linked timestamp. Dates are never
            normalized into one ambiguous field — timezone and locale render alongside the
            retained canonical timestamp.
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
          {fields.map((field, index) => (
            <Reveal key={field.label} delay={index * 0.05}>
              <div className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-[190px_minmax(0,1fr)] sm:items-start sm:gap-4">
                <span className="inline-flex w-fit shrink-0 items-center rounded-md border border-ink/14 bg-surface px-4 py-2 text-center text-xs font-bold uppercase text-ink">
                  {field.label}
                </span>
                <p className="text-[15px] text-ink-soft">{field.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
