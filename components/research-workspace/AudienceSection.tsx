import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const audiences = [
  {
    title: "Self-Directed Investor",
    body: "Start a defensible question and inspect evidence rather than receive a buy/sell instruction.",
  },
  {
    title: "Professional Researcher",
    body: "Navigate issuers, documents, macro indicators and historical timing with traceable context.",
  },
  {
    title: "Technical / Compliance Buyer",
    body: "Understand source lineage, entitlements, accessibility and integration boundaries.",
  },
  {
    title: "Portfolio / Investment Team",
    body: "Preserve assumptions and reviewable sources for human-led deliberation.",
  },
];

export default function AudienceSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Who It&apos;s For</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[720px]">
            Built for people who need a defensible question, not just an answer.
          </SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,630px)_minmax(0,630px)] xl:justify-between">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {audiences.map((audience, index) => (
              <Reveal
                key={audience.title}
                delay={0.05 * (index + 2)}
                className="rounded-2xl border border-ink/10 bg-white p-6"
              >
                <h3 className="text-base font-bold text-ink">{audience.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-gray-600">{audience.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative aspect-[630/313] w-full overflow-hidden rounded-2xl border border-ink/10 bg-ink lg:aspect-auto lg:min-h-[313px]"
          >
            <Image
              src="/images/product/research-workspace/research-workspace-audience-studio.webp"
              alt="Professional reviewing a printed page in a glass-walled engineering studio"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[70%_center]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
