import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const trustPillars = [
  {
    barColor: "bg-[#b98132]",
    title: "Evidence provenance",
    desc: "Every displayed cited source carries an authorized provenance reference where supported.",
  },
  {
    barColor: "bg-[#6c5ce7]",
    title: "Data rights",
    desc: "A revoked or expired license hides protected content while permitting safe explanatory messaging.",
  },
  {
    barColor: "bg-[#5b4fe0]",
    title: "Privacy",
    desc: "Research questions, source content and evidence references are excluded from public analytics.",
  },
];

export default function CoverageTrustSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="violet">COVERAGE & TRUST</SectionEyebrow>
          <SectionHeading>
            Preserved responsibly. Explicit about what access means.
          </SectionHeading>
        </Reveal>

        {/* 4 Columns Grid */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {trustPillars.map((pillar, idx) => (
            <Reveal key={pillar.title} delay={0.1 * (idx + 1)}>
              <div className="flex flex-col">
                {/* Horizontal divider */}
                <div className={`h-0.5 w-7 rounded-full ${pillar.barColor}`} />
                <h3 className="mt-4 text-base font-bold text-[#171335]">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-[21px] text-[#5d5a72]">
                  {pillar.desc}
                </p>
              </div>
            </Reveal>
          ))}

          {/* 4th Column: Image */}
          <Reveal delay={0.4}>
            <div className="relative aspect-[320/276] w-full overflow-hidden rounded-xl border border-[#5d5a72]/15 bg-[#f6f5fb] shadow-sm">
              <Image
                src="/images/saved-research/saved-research-coverage-trust.webp"
                alt="Preserved responsibly coverage and trust"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
