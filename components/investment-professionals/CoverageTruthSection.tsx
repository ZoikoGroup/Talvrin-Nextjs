import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const states = [
  {
    label: "Deep Coverage",
    body: "High-confidence, production-supported research depth for the named market or domain.",
  },
  { label: "Supported", body: "Production-supported but narrower in depth than Deep Coverage." },
  { label: "Limited / Beta", body: "Available with explicit limitations shown near the relevant claim." },
  { label: "Planned", body: "Roadmap only — never presented as currently available." },
  {
    label: "Architecture-ready",
    body: "The architecture can support the category, but no coverage claim follows from this state alone.",
  },
];

export default function CoverageTruthSection() {
  return (
    <section id="coverage-truth" className="scroll-mt-24 bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="violet">Coverage Truth</SectionEyebrow>
          <SectionHeading>
            &quot;Global&quot; describes the architecture. Coverage is what&apos;s released.
          </SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {states.map((state, index) => (
            <Reveal
              key={state.label}
              delay={index * 0.04}
              className="rounded-2xl border border-ink/10 bg-white p-6"
            >
              <h3 className="text-base font-bold text-ink">{state.label}</h3>
              <p className="mt-2.5 text-sm leading-5 text-slate-600">{state.body}</p>
            </Reveal>
          ))}
        </div>

        {/* A wide band — it keeps the design's ratio at every width. */}
        <Reveal
          delay={0.15}
          className="relative mt-5 aspect-[1281/384] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/solutions/investment-professionals/ip-coverage-atrium.webp"
            alt="Three colleagues talking with coffee cups in a bright atrium"
            fill
            sizes="(min-width: 1310px) 1281px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
