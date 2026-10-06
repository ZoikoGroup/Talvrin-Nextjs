import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../release-notes/shared";
import { IMAGE_DIR } from "./shared";

const placeholders = [
  {
    label: "Active incident card — awaiting source",
    body: "When connected, an active incident will show here with title, affected components, impact, and timestamped updates.",
  },
  {
    label: "Maintenance card — awaiting source",
    body: "When connected, planned maintenance will show here with its window, timezone, and expected impact.",
  },
];

const governance = [
  "Status is derived only from an approved operational source — never hand-typed or inferred from a single report.",
  "An unknown or stale source is shown honestly and never rendered as \"operational.\"",
  "Component names are public-safe abstractions — never internal service, vendor, or host names.",
];

export default function ActiveIncidentsSection() {
  return (
    <section id="current-status" className="scroll-mt-32 bg-surface py-20 sm:py-[88px]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,900px)_minmax(0,320px)] lg:justify-between">
        <div>
          <Reveal>
            <SectionIntro
              eyebrow="Active Incidents & Maintenance"
              title="No active incident or maintenance data is currently available."
              className="[&>p:last-child]:max-w-[680px]"
            >
              An authoritative Status Component Registry and incident feed haven&apos;t been connected
              for this build yet, so this section intentionally shows an honest unavailable state
              rather than a guessed &quot;all systems operational.&quot;
            </SectionIntro>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {placeholders.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.05} className="h-full">
                <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-ink/20 bg-white p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-gray-400">{item.label}</h3>
                  <p className="text-sm leading-6 text-gray-400">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-4">
            <div className="rounded-xl border border-ink/10 bg-surface p-5">
              <h3 className="text-xs font-bold uppercase tracking-wide text-muted">
                How this page is governed
              </h3>
              <ul className="mt-2.5 flex flex-col gap-2">
                {governance.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-5 text-ink">
                    <span aria-hidden="true" className="text-accent-violet">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[320/520] w-full max-w-[320px] overflow-hidden rounded-2xl lg:mx-0 lg:mt-4"
        >
          <Image
            src={`${IMAGE_DIR}/system-status-incidents.webp`}
            alt="Colleagues reviewing information together in an office"
            fill
            sizes="(min-width: 1024px) 320px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
