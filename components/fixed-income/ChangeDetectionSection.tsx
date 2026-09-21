import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const changes: {
  badge: string;
  tone: "amber" | "violet" | "slate";
  text: string;
  impact: string;
}[] = [
  {
    badge: "New",
    tone: "amber",
    text: "Federal Reserve policy communication",
    impact: "High potential impact",
  },
  {
    badge: "Updated",
    tone: "violet",
    text: "Revised official inflation data, reference period changed",
    impact: "Medium potential impact",
  },
  {
    badge: "Unchanged",
    tone: "slate",
    text: "U.S. Treasury financing / issuance calendar",
    impact: "No material change",
  },
];

const badgeStyles = {
  amber: "bg-accent-amber/14 text-accent-amber",
  violet: "bg-accent-violet/14 text-accent-violet",
  slate: "bg-slate-500/12 text-slate-600",
} as const;

export default function ChangeDetectionSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Change Detection</SectionEyebrow>
          <SectionHeading>Markets move. More importantly, the evidence moves.</SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-[720px_565px] lg:items-start">
          <div>
            <Reveal className="rounded-2xl bg-surface px-8 pb-8 pt-[24px]">
              <h3 className="text-xl font-bold text-ink">Research View: U.S. Treasury Yield Outlook</h3>
              <p className="mt-1 text-[13px] text-slate-500">Last reviewed: 28 August 2026</p>

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
                <a
                  href="/product/monitoring"
                  className="inline-flex items-center justify-center rounded-lg bg-ink px-[22px] py-[13px] text-sm font-semibold text-white transition-colors hover:bg-ink-2"
                >
                  Review Changes
                </a>
                <a
                  href="/product/evidence"
                  className="text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
                >
                  View Evidence Timeline →
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-sm leading-[22.4px] text-slate-600">
                Evidence-change monitoring asks whether the information supporting a rates view
                changed — it is a different capability from market-price alerts, which require
                separate, explicitly governed availability. Where price data is unavailable or not
                licensed, a price response is never inferred from an evidence change.
              </p>
            </Reveal>
          </div>

          <Reveal
            delay={0.15}
            className="relative min-h-[260px] overflow-hidden rounded-2xl lg:aspect-[565/409] lg:min-h-0"
          >
            <Image
              src="/images/markets/fixed-income/fixed-income-change-detection-meeting.webp"
              alt="Research team reviewing evidence together in an office"
              fill
              sizes="(min-width: 1024px) 565px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
