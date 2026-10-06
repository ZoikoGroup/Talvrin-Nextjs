import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR } from "./shared";

const boundaries = [
  {
    title: "Not an authoritative source",
    body: "Generated interpretation is never styled or treated as if it were the original evidence.",
  },
  {
    title: "Not a guaranteed fact",
    body: "Fluent phrasing is not proof. Review the underlying source for anything consequential.",
  },
  {
    title: "Not investment advice",
    body: "Talvrin is research and market intelligence — not a recommendation engine.",
  },
  {
    title: "Not a substitute for source inspection",
    body: "A summary can shorten reading time; it cannot replace checking the source.",
  },
  {
    title: "Not a guarantee of completeness or accuracy",
    body: "Evidence can be partial, conflicting, or stale — and the page says so when it is.",
  },
  {
    title: "Not a buy/sell/hold recommendation",
    body: "No directional call is ever manufactured from AI-assisted output.",
  },
];

function BoundaryCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex h-full flex-col gap-2 rounded-xl border border-accent-amber/30 bg-surface p-5 pb-8">
      <h3 className="text-base font-bold text-ink">{title}</h3>
      <p className="text-sm leading-5 text-muted">{body}</p>
    </div>
  );
}

export default function BoundariesSection() {
  return (
    <section id="boundaries" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Prohibited Interpretations" tone="amber" title="What AI must never become.">
            Plain language, not a wall of legal text.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {boundaries.slice(0, 3).map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="h-full">
              <BoundaryCard {...item} />
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative order-last aspect-video overflow-hidden rounded-xl border border-accent-amber/30 sm:col-span-2 lg:order-none lg:col-span-1 lg:row-span-2 lg:aspect-auto"
          >
            <Image
              src={`${IMAGE_DIR}/ai-principles-boundaries-team.webp`}
              alt="Young colleagues smiling while working together at a laptop"
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          {boundaries.slice(3).map((item, index) => (
            <Reveal key={item.title} delay={(index + 3) * 0.05} className="h-full">
              <BoundaryCard {...item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
