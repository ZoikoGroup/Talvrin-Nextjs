import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const fields = [
  {
    label: "Official name",
    body: "Approved canonical entity name and aliases from the registry — never an ad hoc rebranding.",
  },
  {
    label: "Institution type",
    body: "Central bank, monetary authority or another approved class — never a guessed taxonomy.",
  },
  {
    label: "Remit summary",
    body: "Summarized only from approved authoritative source material, with a source link where permitted.",
  },
  {
    label: "Published source types",
    body: "An institution-specific governed list from the Source Family registry — never assumed.",
  },
  {
    label: "Primary source domains",
    body: "Approved source registry only.",
  },
  {
    label: "Limitations",
    body: "Missing document types, latency, historical limits or jurisdiction-specific constraints shown explicitly when material.",
  },
];

export default function InstitutionProfileContract() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Institution Detail Template</SectionEyebrow>
          <SectionHeading>
            Stable identity, remit and source navigation — never a guessed taxonomy.
          </SectionHeading>
          <p className="mt-5 max-w-[780px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            Every institution page follows this field contract. Bracketed values populate only
            from approved registries and official sources.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[440px_minmax(0,1fr)] lg:gap-6">
          <Reveal className="relative min-h-[300px] overflow-hidden rounded-2xl bg-ink lg:aspect-[440/363]">
            <Image
              src="/images/markets-central-banks/markets-central-banks-institution-profile-photo.webp"
              alt="A central-bank building facade representing an institution profile"
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
