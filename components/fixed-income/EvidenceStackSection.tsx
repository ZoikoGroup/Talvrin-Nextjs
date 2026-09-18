import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "../global-markets/shared";

function EvidenceCard({
  title,
  body,
  caption,
}: {
  title: string;
  body: string;
  caption: string;
}) {
  return (
    <div className="rounded-[14px] border border-ink/8 bg-white p-[27px]">
      <h3 className="text-[17px] font-bold text-ink">{title}</h3>
      <p className="mt-[10px] text-sm leading-[21.7px] text-slate-600">{body}</p>
      <p className="mt-[14px] border-t border-ink/8 pt-[13px] text-xs leading-[18px] text-accent-amber">
        {caption}
      </p>
    </div>
  );
}

export default function EvidenceStackSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Evidence Stack</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[42px] lg:leading-[1.16]">
            The evidence families behind a fixed-income view.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[242.71px_773px_242.71px] lg:gap-[25.6px]">
          <Reveal>
            <EvidenceCard
              title="Central-Bank / Policy"
              body="Policy communication; official statements where approved."
              caption="Source identity, publication time, jurisdiction, version, relationship to question."
            />
          </Reveal>

          <Reveal delay={0.08} className="relative min-h-[260px] overflow-hidden rounded-[14px] border border-ink/8 lg:min-h-0">
            <Image
              src="/images/fixed-income/fixed-income-evidence-stack-team.webp"
              alt="Two analysts reviewing evidence on a laptop in a research office"
              fill
              sizes="(min-width: 1024px) 773px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={0.16}>
            <EvidenceCard
              title="Methodology / Definitions"
              body="Benchmark or calculation explanation only where approved."
              caption="Named methodology source; no hidden model assumptions."
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
