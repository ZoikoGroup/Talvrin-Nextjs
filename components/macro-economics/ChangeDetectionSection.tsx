import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const changes = [
  {
    badge: "New",
    tone: "bg-accent-amber/15 text-yellow-800",
    text: "New official release, communication, or contextual evidence enters the set",
    impact: "Potential impact — review recommended",
    inlineImpact: false,
  },
  {
    badge: "Updated",
    tone: "bg-accent-violet/10 text-indigo-600",
    text: "Source content changed or a new communication updates the evidence base",
    impact: "Relationship to prior evidence shown",
    inlineImpact: false,
  },
  {
    badge: "Revised",
    tone: "bg-accent-violet/10 text-indigo-600",
    text: "Previously published economic evidence revised or benchmark-adjusted",
    impact: "Version/vintage lineage visible",
    inlineImpact: false,
  },
  {
    badge: "Superseded",
    tone: "bg-orange-800/10 text-orange-800",
    text: "Later authoritative evidence replaces prior material",
    impact: "Prior research trail preserved",
    inlineImpact: true,
  },
  {
    badge: "Unchanged",
    tone: "bg-ink/8 text-slate-600",
    text: "Important evidence remains materially unchanged",
    impact: "No material change",
    inlineImpact: true,
  },
];

export default function ChangeDetectionSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">Change Detection</SectionEyebrow>
          <SectionHeading>
            Releases get revised. Communications get updated. Talvrin keeps track.
          </SectionHeading>
        </Reveal>

        {/* The card carries a badge, a sentence and a trailing note on one row,
            so it keeps the full width until xl rather than splitting at lg. */}
        <div className="mt-9 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,720px)_minmax(0,534px)] xl:items-start xl:gap-8">
          <Reveal delay={0.1} className="rounded-2xl bg-white px-6 pb-6 pt-7 sm:px-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-ink">
                  Research View: U.K. Inflation → Monetary Policy Outlook
                </h3>
                <p className="mt-1 text-sm text-slate-600">Last reviewed: 03 September 2026</p>
              </div>
              <span className="rounded-md bg-surface px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wide text-slate-600">
                Example
              </span>
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wide text-slate-600">
              Since last review
            </p>

            <ul className="mt-2 divide-y divide-ink/8 border-t border-ink/8">
              {changes.map((change) => (
                <li
                  key={change.badge}
                  className={clsx(
                    "flex flex-col gap-1 py-3.5",
                    change.inlineImpact && "sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={clsx(
                        "shrink-0 rounded-md px-2.5 py-1 text-[11px] font-bold uppercase",
                        change.tone
                      )}
                    >
                      {change.badge}
                    </span>
                    <span className="text-[15px] font-medium text-ink">{change.text}</span>
                  </span>
                  <span
                    className={clsx("text-[13px] text-slate-600", change.inlineImpact && "shrink-0")}
                  >
                    {change.impact}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-5">
              <Link
                href="/product/monitoring"
                className="inline-flex items-center justify-center rounded-lg bg-ink px-[22px] py-[13px] text-sm font-semibold text-white transition-colors hover:bg-ink-2"
              >
                Review Changes
              </Link>
              <Link
                href="/product/evidence"
                className="inline-flex items-center justify-center text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
              >
                View Evidence Timeline →
              </Link>
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative aspect-[534/579] w-full max-w-[534px] overflow-hidden rounded-2xl xl:max-w-none"
          >
            <Image
              src="/images/markets/macro-economics/macro-change-detection-tablet.webp"
              alt="Two colleagues looking at a tablet together in an atrium"
              fill
              sizes="(min-width: 640px) 534px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-[860px] text-sm leading-6 text-slate-600">
            Evidence-change monitoring asks whether a release, communication, or policy record
            changed — a different capability from a price alert, which requires separately governed
            market-data availability. An alert always routes back to the research object and never
            implies a policy or market forecast.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
