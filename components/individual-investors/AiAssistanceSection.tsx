import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CheckLine, CrossLine, IMAGE_DIR, SectionIntro } from "./shared";

const pairs = [
  { does: "Search and evidence discovery", isNot: "An authoritative source" },
  { does: "Source summarization", isNot: "A guaranteed fact" },
  { does: "Document comparison", isNot: "Investment advice" },
  { does: "Research organization", isNot: "A substitute for source inspection" },
  {
    does: "Explanation and contradiction surfacing",
    isNot: "A guarantee of completeness, accuracy, or investment outcome",
  },
  { does: "Change identification", isNot: "A buy/sell/hold recommendation" },
];

function PairCard({ does, isNot }: (typeof pairs)[number]) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-ink/10 bg-white p-6">
      <CheckLine bold>{does}</CheckLine>
      <CrossLine>{isNot}</CrossLine>
    </div>
  );
}

export default function AiAssistanceSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="AI Assistance, Not AI Authority"
            tone="amber"
            title="AI should help you navigate evidence — not replace it."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pairs.slice(0, 3).map((pair, index) => (
            <Reveal key={pair.does} delay={index * 0.05} className="h-full">
              <PairCard {...pair} />
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative hidden overflow-hidden rounded-2xl border border-ink/10 lg:row-span-2 lg:block"
          >
            <Image
              src={`${IMAGE_DIR}/individual-investors-ai-assistance-handshake.webp`}
              alt="A smiling professional shaking hands across a desk"
              fill
              sizes="(min-width: 1024px) 305px, 100vw"
              className="object-cover"
            />
          </Reveal>

          {pairs.slice(3).map((pair, index) => (
            <Reveal key={pair.does} delay={(index + 3) * 0.05} className="h-full">
              <PairCard {...pair} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-6 max-w-[760px]">
          <p className="text-sm leading-6 text-muted">
            Generated output doesn&apos;t become authoritative because it&apos;s fluent or persuasive.
            If Talvrin can&apos;t ground an answer in inspectable evidence, it says so rather than
            guessing.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
