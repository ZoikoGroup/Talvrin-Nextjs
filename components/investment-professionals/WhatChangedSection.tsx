import Link from "next/link";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const changes = [
  {
    badge: "New",
    tone: "bg-accent-amber/15 text-yellow-800",
    text: "Regulatory filing affecting reported segment margins",
    impact: "Potential impact — governed",
    inlineImpact: true,
  },
  {
    badge: "Updated",
    tone: "bg-accent-violet/10 text-indigo-600",
    text: "Official statistics revised, reference period changed",
    impact: "Version relationship shown",
    inlineImpact: true,
  },
  {
    badge: "Superseded",
    tone: "bg-orange-800/10 text-orange-800",
    text: "Prior guidance document replaced by amended release",
    impact: "Prior / current lineage preserved",
    inlineImpact: false,
  },
  {
    badge: "Unchanged",
    tone: "bg-ink/8 text-slate-600",
    text: "Company's stated capital-allocation policy",
    impact: "No material change",
    inlineImpact: true,
  },
];

export default function WhatChangedSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="violet">What Changed?</SectionEyebrow>
          <SectionHeading>Talvrin sells research continuity, not real-time alerts.</SectionHeading>
        </Reveal>

        <Reveal delay={0.1} className="mt-9 max-w-[720px] rounded-2xl bg-white px-6 pb-6 pt-7 sm:px-8">
          <h3 className="text-lg font-bold text-ink">
            Research View: Mid-Cap Industrials — Input Cost Outlook
          </h3>
          <p className="mt-1 text-sm text-slate-600">Last reviewed: 16 September 2026</p>

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
              Reassess the Research View
            </Link>
            <Link
              href="/product/evidence"
              className="inline-flex items-center justify-center text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
            >
              Open Evidence →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-[760px] text-sm leading-6 text-slate-600">
            Monitoring means staying connected to evidence and identifying changes that may require
            reassessment — never a trade signal, guaranteed materiality, or market-direction
            certainty.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
