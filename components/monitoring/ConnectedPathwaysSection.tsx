import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

// Gated handoffs: shown as destinations, not links, until each capability is verified.
const pathways = [
  {
    eyebrow: "PERSISTENCE",
    title: "Saved Research",
    body: "Saved Research owns the canonical, persisted research object that Monitoring stays connected to — this page never duplicates that state.",
  },
  {
    eyebrow: "SOURCE CONTEXT",
    title: "Source Intelligence",
    body: "Source Intelligence owns provenance, classification and rights context for the evidence that Monitoring surfaces.",
  },
];

export default function ConnectedPathwaysSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-stretch lg:gap-10 xl:grid-cols-[minmax(0,1fr)_420px]">
        <div className="min-w-0">
          <Reveal>
            <SectionEyebrow>Connected Pathways</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading className="max-w-[720px]">
              Saved Research, Source Intelligence and Change Detection are the
              governed neighbors.
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600">
              Monitoring hands off to its own canonical destinations rather than
              duplicating their state — each one gated, conditional and
              explicit.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-2.5">
            {pathways.map((pathway, index) => (
              <Reveal
                key={pathway.title}
                delay={0.1 * (index + 2)}
                className="rounded-2xl border border-ink/10 bg-surface p-6 sm:p-7"
              >
                <p className="text-xs font-bold tracking-wide text-accent-amber">{pathway.eyebrow}</p>
                <h3 className="mt-2.5 text-lg font-bold text-ink">→ {pathway.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-gray-600">{pathway.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[420/438] w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:aspect-[16/10] lg:aspect-auto lg:min-h-[438px]"
        >
          <Image
            src="/images/product/monitoring/monitoring-pathways-meeting.webp"
            alt="Colleagues collaborating around a meeting table with laptops and papers"
            fill
            sizes="(min-width: 1280px) 420px, (min-width: 1024px) 360px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
