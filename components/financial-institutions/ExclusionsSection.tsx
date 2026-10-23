import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const exclusions = [
  {
    title: "Not brokerage, asset management or advisory",
    body: "No execution, suitability determinations, proprietary trading signals or investment recommendations.",
  },
  {
    title: "Not a regulatory compliance suite",
    body: "Does not imply transaction surveillance, regulatory reporting, AML/KYC or regulatory assurance.",
  },
];

export default function ExclusionsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start lg:gap-2.5">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Non-negotiable exclusions</SectionEyebrow>
            <SectionHeading>What Talvrin is not.</SectionHeading>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {exclusions.map((e, i) => (
              <Reveal
                key={e.title}
                as="article"
                delay={i * 0.08}
                className="rounded-2xl border-t border-ink/10 bg-surface px-6 py-6"
              >
                <h3 className="text-base font-bold text-ink">{e.title}</h3>
                <p className="mt-1.5 text-sm leading-[22px] text-slate-600">{e.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-[760px] text-sm font-semibold leading-6 text-ink">
              Research information only. No trading, brokerage, execution, individualized advice
              or regulatory compliance determination.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[420/249] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src={`${IMG}/fi-exclusions-colleague.webp`}
            alt="Smiling professional among colleagues in a bright office"
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
