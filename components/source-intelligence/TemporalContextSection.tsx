import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const fields = [
  {
    label: "PUBLICATION DATE",
    body: "When the source was released, shown with timezone where known. Never swapped for retrieval time.",
  },
  {
    label: "REPORTING / EFFECTIVE PERIOD",
    body: "The period or date the information actually describes — tracked as its own field, separate from publication date.",
  },
  {
    label: "JURISDICTION / ENTITY",
    body: "Explicit legal, geographic or issuer scope. Left unresolved rather than inferred from ambiguous labels.",
  },
  {
    label: "VERSION / SUPERSESSION",
    body: "Which revision this is, and whether a newer source has since superseded it.",
  },
  {
    label: "RETRIEVAL / REVIEW TIME",
    body: "When Talvrin last checked this source — distinguished from the date the source itself describes.",
  },
];

export default function TemporalContextSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Temporal &amp; Jurisdiction Context</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[640px]">
            &quot;Published&quot; and &quot;applies to&quot; are answered separately.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600">
            Publication date, reporting period, jurisdiction and entity scope are
            tracked as distinct fields. An unresolved field stays labeled
            unresolved rather than assumed.
          </p>
        </Reveal>

        <dl className="mt-8 sm:mt-12">
          {fields.map((field, index) => (
            <Reveal
              key={field.label}
              delay={0.05 * (index + 1)}
              className="grid grid-cols-1 gap-x-4 gap-y-2 border-b border-ink/10 py-4 md:grid-cols-[230px_minmax(0,1fr)] md:items-start"
            >
              <dt className="inline-flex w-fit items-center justify-center rounded-md border border-ink/10 bg-white px-4 py-1.5 text-center text-xs font-bold text-ink md:w-full">
                {field.label}
              </dt>
              <dd className="text-sm leading-6 text-gray-600 sm:text-base">{field.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
