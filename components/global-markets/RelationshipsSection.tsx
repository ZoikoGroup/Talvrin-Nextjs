import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

export default function RelationshipsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Cross-Market Relationships</SectionEyebrow>
          <SectionHeading>Reveal relationships without pretending to predict outcomes.</SectionHeading>
          <SectionLede>
            Rates, policy, currencies, companies, sovereigns, and economic evidence can interact.
            Talvrin labels the relationship — never a forecast.
          </SectionLede>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1fr)]">
          <Reveal className="flex flex-col gap-2.5 rounded-[14px] border border-ink/8 bg-surface p-7">
            <h3 className="text-lg font-bold text-ink">Rates / sovereigns</h3>
            <p className="text-[15px] leading-relaxed text-slate-600">
              Central-bank policy, inflation evidence, sovereign financing, and yield-market
              context.
            </p>
            <p className="mt-2 border-t border-ink/8 pt-4 text-[13px] leading-relaxed text-accent-amber">
              Source and timing layers shown — no causal certainty unless sourced and qualified.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative min-h-[260px] overflow-hidden rounded-[14px] border border-ink/8 bg-surface">
            <Image
              src="/images/global-markets/global-markets-relationships-map.webp"
              alt="Analysts reviewing a lit global market map on a table display"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-2.5 rounded-[14px] border border-ink/8 bg-surface p-7">
            <h3 className="text-lg font-bold text-ink">Source revision / market view</h3>
            <p className="text-[15px] leading-relaxed text-slate-600">
              A statistical release or official document may be revised or superseded.
            </p>
            <p className="mt-2 border-t border-ink/8 pt-4 text-[13px] leading-relaxed text-accent-amber">
              Version and supersession are exposed; prior context is preserved in evidence
              history.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
