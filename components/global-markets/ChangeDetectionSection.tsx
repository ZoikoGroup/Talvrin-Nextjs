import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const changes: { badge: string; tone: "amber" | "violet" | "slate"; text: string; impact: string }[] = [
  { badge: "New", tone: "amber", text: "Official inflation release, first market", impact: "High impact" },
  { badge: "Updated", tone: "violet", text: "Central-bank communication, second market", impact: "Medium impact" },
  { badge: "Unchanged", tone: "slate", text: "Sovereign issuance calendar", impact: "No material change" },
];

const badgeStyles = {
  amber: "bg-accent-amber/14 text-accent-amber",
  violet: "bg-accent-violet/14 text-accent-violet",
  slate: "bg-slate-500/12 text-slate-600",
} as const;

export default function ChangeDetectionSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Change Detection</SectionEyebrow>
          <SectionHeading>Markets move. More importantly, the evidence moves.</SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div>
            <Reveal className="rounded-2xl bg-white p-7 sm:p-8">
              <h3 className="text-xl font-bold text-ink">Research View: Two-Market Policy Comparison</h3>
              <p className="mt-1 text-[13px] text-slate-500">Last reviewed: 03 September 2026</p>

              <p className="mt-5 text-xs font-bold uppercase tracking-wide text-slate-500">
                Since Last Review
              </p>

              <div className="mt-2 divide-y divide-ink/8 border-t border-ink/8">
                {changes.map((change) => (
                  <div key={change.text} className="flex items-center justify-between gap-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={clsx(
                          "rounded-md px-2.5 py-1 text-[11px] font-bold",
                          badgeStyles[change.tone]
                        )}
                      >
                        {change.badge.toUpperCase()}
                      </span>
                      <span className="text-[15px] font-medium text-ink">{change.text}</span>
                    </div>
                    <span className="shrink-0 text-[13px] text-slate-500">{change.impact}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <Link
                  href="/product/monitoring"
                  className="inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-2"
                >
                  Review Changes
                </Link>
                <Link
                  href="/research/economic-calendar"
                  className="text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
                >
                  View Evidence Timeline →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600">
                Evidence-change monitoring asks whether the information supporting a research view
                changed — it is a different capability from market-price alerts, which require
                separate, explicitly governed availability.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative min-h-[260px] overflow-hidden rounded-2xl lg:min-h-0">
            <Image
              src="/images/global-markets/global-markets-change-detection-meeting.webp"
              alt="Research team reviewing evidence on a large wall display"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
