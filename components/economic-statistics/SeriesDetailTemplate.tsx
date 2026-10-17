import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const fields = [
  {
    label: "Official name & concept",
    body: "Approved canonical indicator name and concept definition — never a designer-invented label.",
  },
  {
    label: "Publisher / issuing agency",
    body: "Verified statistical agency or international body — never implied by category alone.",
  },
  {
    label: "Definition & methodology",
    body: "Summarized only from the agency's own methodology notes, with a source link where permitted.",
  },
  {
    label: "Units & seasonal adjustment",
    body: "Shown exactly as the source states them — never normalized without disclosure.",
  },
  {
    label: "Base period & reference",
    body: "Index base year or reference period stated explicitly, never assumed.",
  },
  {
    label: "Coverage state",
    body: "Deep coverage, supported, limited/beta or planned — architecture-readiness is never shown as live.",
  },
];

export default function SeriesDetailTemplate() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Series Detail Template</SectionEyebrow>
          <SectionHeading>
            Stable definition, units and methodology — never a guessed taxonomy.
          </SectionHeading>
          <p className="mt-5 max-w-[780px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            Every indicator page follows this field contract. Bracketed values populate only from
            approved registries and official sources.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[440px_minmax(0,1fr)] lg:gap-6">
          <Reveal className="relative min-h-[300px] overflow-hidden rounded-2xl bg-ink lg:aspect-[440/363.2]">
            <Image
              src="/images/economic-statistics/economic-statistics-series-detail-phone-call.webp"
              alt="An analyst on a phone call at a desk overlooking a city skyline"
              fill
              sizes="(min-width: 1024px) 440px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-1 gap-x-6 gap-y-[14px] sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field.label} className="border-b border-ink/8 pb-[15px] pt-[14px]">
                <h3 className="text-[15px] font-bold text-ink">{field.label}</h3>
                <p className="mt-[4px] text-[13px] leading-[19.5px] text-slate-600">{field.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
