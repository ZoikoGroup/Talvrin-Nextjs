import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const columns = ["Component", "State", "Scope", "Last updated"];

export default function ComponentStatusSection() {
  return (
    <section id="component-status" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="amber">Developer Component Status</SectionEyebrow>
          <SectionHeading>Per-component status, from one public registry.</SectionHeading>
          <SectionLede className="max-w-[760px] sm:text-base sm:leading-6">
            Components are public-safe abstractions of developer capabilities, not internal
            services. Row order stays fixed so you can find a component in the same place during an
            incident.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-2xl border border-ink/10">
          <div className="grid grid-cols-2 gap-4 border-b border-ink/10 bg-surface px-6 py-3 sm:grid-cols-4">
            {columns.map((column) => (
              <p
                key={column}
                className="font-mono text-xs font-bold uppercase tracking-wide text-slate-600"
              >
                {column}
              </p>
            ))}
          </div>

          <div className="relative aspect-[3/2] w-full sm:aspect-[2/1] lg:aspect-[1276/288]">
            <Image
              src="/images/developers/developer-status/developer-status-components-conversation.webp"
              alt="Two colleagues talking beside a window with a city view"
              fill
              sizes="(min-width: 1310px) 1276px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
