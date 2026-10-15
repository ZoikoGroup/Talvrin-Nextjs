import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const assists = [
  "Discovery and navigation across evidence",
  "Comparison across sources and versions",
  "Summarization of source material",
  "Surfacing contradictions and change",
];

export default function AiGovernanceSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">AI Governance</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[800px]">
            AI helps you navigate the evidence. It does not become the evidence.
          </SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-12 lg:grid-cols-2 lg:items-start lg:gap-10">
          <Reveal delay={0.2}>
            <p className="text-sm font-bold text-accent-violet">Talvrin AI may assist with</p>
            <ul className="mt-4 flex flex-col gap-3">
              {assists.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-base text-ink">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-violet"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.3}
            className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl bg-ink sm:aspect-[640/169]"
          >
            <Image
              src="/images/product/research-workspace/research-workspace-ai-governance-office.webp"
              alt="Two colleagues reviewing material in a dimly lit evening office"
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
