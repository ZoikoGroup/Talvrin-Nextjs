import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const assists = [
  "Surfacing new or updated evidence tied to a saved question",
  "Contextualizing why a change may relate to the research view",
  "Summarizing a source revision alongside its original text",
  "Flagging contradictions across sources over time",
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
            AI can flag a change. It does not decide if it matters.
          </SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 lg:grid-cols-2 lg:items-end lg:gap-10">
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
            className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl bg-ink sm:aspect-[640/205]"
          >
            <Image
              src="/images/product/monitoring/monitoring-ai-governance-boardroom.webp"
              alt="Colleagues in discussion around a sunlit boardroom table"
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
