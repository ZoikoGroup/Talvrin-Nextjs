import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const fields = [
  {
    label: "Publication Date",
    body: "When the agency officially releases the figure, with explicit time zone — distinct from the period it describes.",
  },
  {
    label: "Reference Period",
    body: "The month, quarter or year the observation actually covers — never conflated with the publish date.",
  },
  {
    label: "Vintage / As-Of",
    body: "The exact version of the series being viewed; a current value never silently replaces prior vintages.",
  },
  {
    label: "Revision or Correction",
    body: "When an agency revises or corrects a prior figure — tracked as a separate, dated event with the original preserved.",
  },
];

export default function ReleaseVintageTimeline() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Release &amp; Vintage Timeline</SectionEyebrow>
          <SectionHeading>
            Publication, reference period and vintage are different questions.
          </SectionHeading>
          <p className="mt-5 max-w-[800px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            No timeline event is shown without a source-linked timestamp. A reference period is
            never inherited from a publication date, and methodology differences across agencies
            are disclosed before any comparison.
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
