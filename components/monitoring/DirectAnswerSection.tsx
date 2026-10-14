import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const boundaries = [
  {
    title: "Monitoring boundary",
    body: "Monitoring keeps a research object connected to relevant evidence. It does not predict prices, guarantee completeness, or promise real-time delivery without a governed source contract.",
  },
  {
    title: "Alert boundary",
    body: "A market-price move and an evidence-change alert are treated as separate categories — a price signal is never substituted for a primary-source update.",
  },
];

export default function DirectAnswerSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-stretch lg:gap-10 xl:grid-cols-[minmax(0,1fr)_421px]">
        <div className="min-w-0">
          <Reveal>
            <SectionEyebrow>Direct Answer</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading>What Monitoring is for.</SectionHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[780px] text-base leading-7 text-slate-700 sm:text-lg">
              Monitoring connects a research question or preserved view to
              relevant source evidence over time. When updated evidence warrants
              attention, the researcher can inspect what changed and reassess
              the view.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
            {boundaries.map((item, index) => (
              <Reveal
                key={item.title}
                delay={0.1 * (index + 2)}
                className="rounded-2xl border border-ink/10 bg-surface p-5 sm:p-6"
              >
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-5 text-gray-600">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[421/400] w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:aspect-[16/10] lg:aspect-auto lg:min-h-[400px]"
        >
          <Image
            src="/images/product/monitoring/monitoring-direct-answer-laptop.webp"
            alt="Two colleagues laughing together while looking at a laptop"
            fill
            sizes="(min-width: 1280px) 421px, (min-width: 1024px) 360px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
