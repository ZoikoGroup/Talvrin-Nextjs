import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CheckLine, CrossLine, IMAGE_DIR, SectionIntro } from "./shared";

const comparisons = [
  {
    label: "Vs. Financial News",
    is: "News reports developments; Talvrin organizes source evidence around a research question and keeps that evidence connected over time.",
    isNot: "\"Better than all news,\" \"replaces news,\" or unsupported speed/completeness claims.",
  },
  {
    label: "Vs. Generic AI Financial Assistant",
    is: "Talvrin keeps generated interpretation distinguishable from source material and centers provenance and monitoring.",
    isNot: "\"Hallucination-free,\" \"always accurate,\" or guaranteed completeness.",
  },
  {
    label: "Vs. Brokerage / Trading Platform",
    is: "Talvrin supports research and market intelligence rather than trade execution.",
    isNot: "Any suggestion you can place, route, optimize, or execute trades.",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="What Talvrin Is / Is Not"
            title="A clear category, without competitor attacks."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {comparisons.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-ink/10 bg-white p-6">
                <h3 className="text-xs font-bold uppercase tracking-wide text-muted">{item.label}</h3>
                <CheckLine>{item.is}</CheckLine>
                <CrossLine>{item.isNot}</CrossLine>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative min-h-[266px] overflow-hidden rounded-2xl border border-ink/10"
          >
            <Image
              src={`${IMAGE_DIR}/individual-investors-what-talvrin-is-handshake.webp`}
              alt="A smiling professional shaking hands across a meeting table"
              fill
              sizes="(min-width: 1024px) 305px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
