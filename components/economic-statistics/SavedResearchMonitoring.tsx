import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

export default function SavedResearchMonitoring() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Saved Research &amp; Monitoring Handoff</SectionEyebrow>
          <SectionHeading>
            Preserve the cited vintage — no automatic notification claim.
          </SectionHeading>
          <p className="mt-5 max-w-[780px] text-base leading-[27.2px] text-slate-600 sm:text-lg">
            Six explicit release and vintage states, so a revision, correction or withdrawal never
            disappears silently from saved research.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mt-7 min-h-[220px] overflow-hidden rounded-2xl border border-ink/8 bg-white sm:aspect-[1281/377.4]"
        >
          <Image
            src="/images/economic-statistics/economic-statistics-monitoring-handoff-office.webp"
            alt="Researchers working side by side at monitors in an open office"
            fill
            sizes="(min-width: 1024px) 1281px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
