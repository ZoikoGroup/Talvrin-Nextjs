import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const fields = [
  {
    label: "PUBLICATION DATE",
    body: "When the source was released, shown with timezone where known. Never swapped for retrieval time.",
  },
  {
    label: "EFFECTIVE / REPORTING PERIOD",
    body: "The period or date the information actually describes — tracked separately from publication date.",
  },
  {
    label: "LAST VERIFIED",
    body: "When Talvrin last checked this source, distinguished from the date the source itself describes.",
  },
];

const drawerFields = [
  { title: "Publisher / source", body: "Named organization responsible for the material being compared." },
  { title: "Original URL", body: "Link to the source when licensing, security and availability permit." },
  { title: "License / access indication", body: "Public, permitted, restricted or unavailable, enforced per policy." },
  { title: "Version", body: "Which revision this is, and whether a newer source has since superseded it." },
  { title: "Jurisdiction", body: "Shown when known; left unresolved rather than inferred from an ambiguous label." },
];

export default function TimelineSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow>Timeline &amp; Provenance</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[800px]">
            When information changed and what period it concerns may be
            different questions.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600">
            Publication time, effective time and the time Talvrin last checked a
            source are tracked as separate fields, never collapsed into one
            date.
          </p>
        </Reveal>

        <dl className="mt-8 sm:mt-10">
          {fields.map((field, index) => (
            <Reveal
              key={field.label}
              delay={0.05 * (index + 1)}
              className="grid grid-cols-1 gap-x-4 gap-y-2 border-b border-ink/10 py-4 md:grid-cols-[220px_minmax(0,1fr)] md:items-start"
            >
              <dt className="inline-flex w-fit items-center justify-center rounded-md border border-ink/10 bg-surface px-4 py-1.5 text-center text-xs font-bold text-ink md:w-full">
                {field.label}
              </dt>
              <dd className="text-sm leading-6 text-gray-600 sm:text-base">{field.body}</dd>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={0.2} className="mt-10 rounded-2xl bg-ink p-6 sm:p-8">
          <p className="text-xs font-bold tracking-wide text-white/50">
            PROVENANCE DRAWER — FIELDS THAT TRAVEL WITH A CHANGE
          </p>
          <dl className="mt-4 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {drawerFields.map((field) => (
              <div key={field.title}>
                <dt className="text-sm font-bold text-white">{field.title}</dt>
                <dd className="mt-1 text-xs leading-5 text-white/60">{field.body}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
