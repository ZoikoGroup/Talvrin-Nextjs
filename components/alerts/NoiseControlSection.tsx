import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const safeguards = [
  {
    title: "Immutable Event ID",
    description: "One logical alert event always references one source event and configuration version.",
    boundary: "Retries never create duplicate history.",
  },
  {
    title: "Idempotent Delivery",
    description: "Repeated delivery attempts to the same destination are safe.",
    boundary: "No duplicate notifications from retry logic.",
  },
  {
    title: "Rate Control",
    description: "Delivery limits come from configuration and service policy.",
    boundary: "Not a designer guess at acceptable notification volume.",
  },
  {
    title: "Latency Language",
    description: "Freshness and delivery-speed claims show only when service contracts support them.",
    boundary: 'No "real-time" or "instant" promise without approval.',
  },
];

export default function NoiseControlSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionEyebrow tone="amber">Noise Control + Delivery Integrity</SectionEyebrow>
          <SectionHeading>Fewer, better notifications — governed, not guessed.</SectionHeading>
          <SectionLede className="max-w-[760px] sm:text-base sm:leading-7">
            Every safeguard below protects the same principle: more notifications is not the goal,
            and duplicate delivery is never mistaken for new evidence.
          </SectionLede>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,645px)]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {safeguards.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6"
              >
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2.5 text-base leading-6 text-slate-600">{item.description}</p>
                <p className="mt-3.5 border-t border-ink/10 pt-3 text-xs leading-5 text-accent-amber">
                  {item.boundary}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.15}
            className="relative aspect-[645/445] overflow-hidden rounded-2xl border border-ink/10 xl:aspect-auto"
          >
            <Image
              src="/images/product/alerts/alerts-noise-control-desk.webp"
              alt="Analyst taking notes at a desk beside a laptop and a planning whiteboard"
              fill
              sizes="(min-width: 1280px) 645px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
