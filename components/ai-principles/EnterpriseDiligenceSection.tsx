import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR, Pill } from "./shared";

const materials = [
  {
    title: "AI governance overview",
    body: "How AI capability, model/provider, and coverage claims are governed end to end.",
  },
  {
    title: "Privacy",
    body: "Collection, controls, and personal-data handling relevant to AI-assisted features.",
  },
  { title: "Security", body: "Security controls and assurance posture appropriate for public disclosure." },
  { title: "Evidence standards", body: "How evidence is sourced, classified, and kept inspectable." },
  { title: "Service status", body: "Live operational status for the underlying platform." },
  {
    title: "Data rights",
    body: "Licensing, entitlement, and permitted-use boundaries that AI cannot expand.",
  },
];

function MaterialCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-white p-5">
      <h3 className="text-base font-bold text-ink">{title}</h3>
      <p className="text-[13px] leading-5 text-muted">{body}</p>
      <div className="mt-auto pt-1">
        <Pill>Not yet available</Pill>
      </div>
    </div>
  );
}

export default function EnterpriseDiligenceSection() {
  return (
    <section id="enterprise-diligence" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Procurement Without Invented Assurance"
            title="Enterprise diligence materials, once they exist."
          >
            No trust evidence should require a sales call if it&apos;s otherwise meant to be public.
            Certifications, audits, and model evaluations appear only when an approved trust registry
            says they are current.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,2fr)]">
          {materials.slice(0, 3).map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="h-full">
              <MaterialCard {...item} />
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative order-last aspect-video overflow-hidden rounded-xl border border-ink/10 sm:col-span-2 xl:order-none xl:col-span-1 xl:row-span-2 xl:aspect-auto"
          >
            <Image
              src={`${IMAGE_DIR}/ai-principles-enterprise-diligence.webp`}
              alt="Two colleagues discussing work on a laptop outdoors"
              fill
              sizes="(min-width: 1280px) 502px, 100vw"
              className="object-cover"
            />
          </Reveal>

          {materials.slice(3).map((item, index) => (
            <Reveal key={item.title} delay={(index + 3) * 0.05} className="h-full">
              <MaterialCard {...item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
