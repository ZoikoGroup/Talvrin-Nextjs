import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const states = [
  {
    title: "Released / adoptable",
    dot: "bg-green-500",
    card: "Normal card with lifecycle text.",
    action: "Install and quick start enabled.",
  },
  {
    title: "Beta / limited",
    dot: "bg-accent-amber",
    card: "Visible limitation label.",
    action: "Install reflects eligibility and terms.",
  },
  {
    title: "Deprecated",
    dot: "bg-orange-500",
    card: "Warning plus a replacement if known.",
    action: "Migration primary; new adoption de-emphasized.",
  },
  {
    title: "No published SDKs",
    dot: "bg-slate-500",
    card: "Intentional empty state, not a search failure.",
    action: "Routes to API Documentation next.",
  },
  {
    title: "Registry stale",
    dot: "bg-slate-500",
    card: "Stale / unverified notice shown.",
    action: "Install CTA may be blocked per policy.",
  },
  {
    title: "Compatibility mismatch",
    dot: "bg-accent-violet",
    card: "Explicit mismatch stated.",
    action: "Supported range or alternate version if approved.",
  },
];

export default function StateMatrixSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">UI State Matrix</SectionEyebrow>
          <SectionHeading>Eight states, none borrowing another one&apos;s meaning.</SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-6">
            Lifecycle, compatibility, and access failures are always distinguishable — and never
            signaled by color alone.
          </SectionLede>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {states.map((state, index) => (
            <Reveal
              key={state.title}
              delay={index * 0.04}
              className="flex flex-col rounded-2xl border border-ink/10 bg-surface p-5"
            >
              <h3 className="flex items-center gap-2.5 text-base font-bold text-ink">
                <span className={clsx("size-2.5 shrink-0 rounded-full", state.dot)} aria-hidden="true" />
                {state.title}
              </h3>
              <p className="mt-4 border-t border-ink/10 pt-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                Catalog / card
              </p>
              <p className="mt-1 text-sm leading-5 text-slate-700">{state.card}</p>
              <p className="mt-3 border-t border-ink/10 pt-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                Detail / action
              </p>
              <p className="mt-1 text-sm leading-5 text-slate-700">{state.action}</p>
            </Reveal>
          ))}

          <Reveal
            delay={0.24}
            className="relative aspect-[3/2] overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-3 lg:aspect-[16/5] xl:col-span-1 xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:aspect-auto"
          >
            <Image
              src="/images/developers/SDKs/sdks-state-matrix-team.webp"
              alt="Team chatting around a meeting table"
              fill
              sizes="(min-width: 1280px) 307px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
