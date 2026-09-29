import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const families = [
  {
    title: "Company Filings",
    body: "Regulatory filings and company reports where a governed source exists.",
    fields:
      "Issuer identity, original title, publication time, reporting period, jurisdiction, version/amendment, rights.",
  },
  {
    title: "Issuer Disclosures",
    body: "Company announcements, releases, presentations, and transcripts where governed and permitted.",
    fields:
      "Source identity, publication time, original material, rights/access, evidence relationship.",
  },
  {
    title: "Market Context",
    body: "Approved market evidence where licensed and governed.",
    fields: "Data state, source, timestamp, rights; no live implication without support.",
  },
  {
    title: "Research / Commentary",
    body: "Governed institutional or editorial context where approved.",
    fields: "Never visually merged with primary evidence.",
  },
];

export default function EvidenceStackSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionEyebrow tone="violet">Equity Evidence Stack</SectionEyebrow>
          <SectionHeading>The evidence families behind a company or security view.</SectionHeading>
        </Reveal>

        {/* On the widest screens the photo sits between the second and third family, as designed. */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {families.map((family, index) => (
            <Reveal
              key={family.title}
              delay={index * 0.05}
              className={`flex flex-col rounded-2xl border border-ink/10 bg-white p-6 ${
                index >= 2 ? "xl:col-start-auto" : ""
              }`}
            >
              <h3 className="text-base font-bold text-ink">{family.title}</h3>
              <p className="mt-2.5 text-sm leading-5 text-slate-600">{family.body}</p>
              <p className="mt-auto border-t border-ink/10 pt-3 text-xs leading-4 text-accent-amber">
                {family.fields}
              </p>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-ink/10 sm:col-span-2 lg:col-span-3 lg:aspect-[16/5] xl:order-none xl:col-span-1 xl:col-start-3 xl:row-start-1 xl:aspect-auto"
          >
            <Image
              src="/images/markets/equities/equities-evidence-stack-meeting.webp"
              alt="Colleagues talking across a table in a bright meeting room"
              fill
              sizes="(min-width: 1280px) 238px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
