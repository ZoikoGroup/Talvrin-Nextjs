import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const mayAssistWith = [
  "Search & evidence discovery",
  "Summarization",
  "Comparison across sources",
  "Labeling suggestions",
  "Explanation",
];

const mustNot = [
  "Silently add or remove watchlist items, or subscribe a user to alerts.",
  'Infer a portfolio or create authoritative "priority" investment scores.',
  "Present a claim as watchlist truth if it cannot be supported by inspectable evidence.",
  "Commit organizational changes without explicit user confirmation.",
];

export default function AiBoundarySection() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">AI Assistance Boundary</SectionEyebrow>
          <SectionHeading inverted>
            AI can help organize context. It does not decide what you should follow.
          </SectionHeading>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-stretch">
          <Reveal className="rounded-2xl border border-white/12 bg-white/5 p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-violet">
              AI May Assist With
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {mayAssistWith.map((item) => (
                <span
                  key={item}
                  className="whitespace-nowrap rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white/85"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 border-t border-white/10 pt-5 text-xs font-bold uppercase tracking-widest text-accent-amber">
              AI Must Not
            </p>
            <ul className="mt-4 space-y-3">
              {mustNot.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/70">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-white/40" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative min-h-[260px] overflow-hidden rounded-2xl border border-white/12 lg:min-h-0"
          >
            <Image
              src="/images/product/watchlist/Background+Border (1).png"
              alt="Analysts working at a row of monitors displaying research dashboards"
              fill
              sizes="(min-width: 1024px) 340px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
