import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const changes = [
  {
    badge: "New",
    tone: "bg-accent-amber/15 text-yellow-800",
    text: "New governing document or provider disclosure enters the set",
    impact: "Potential impact — review recommended",
    inlineImpact: false,
  },
  {
    badge: "Updated",
    tone: "bg-accent-violet/10 text-indigo-600",
    text: "Source content changed, updating the evidence base",
    impact: "Relationship to prior evidence shown",
    inlineImpact: false,
  },
  {
    badge: "Revised",
    tone: "bg-accent-violet/10 text-indigo-600",
    text: "Previously published structural attribute revised",
    impact: "Version/effective-period lineage visible",
    inlineImpact: true,
  },
  {
    badge: "Superseded",
    tone: "bg-orange-800/10 text-orange-800",
    text: "Later authoritative document replaces prior material",
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
            Governing documents change. Talvrin keeps track of what changed and when.
          </SectionHeading>
        </Reveal>

        {/* The card carries a badge, a sentence and a trailing note on one row,
            so it keeps the full width until xl rather than splitting at lg. */}
        <div className="mt-9 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,720px)_minmax(0,539px)] xl:items-start xl:gap-8">
          <Reveal delay={0.1} className="rounded-2xl bg-white px-6 pb-6 pt-7 sm:px-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-ink">Research View: Registry-Resolved Vehicle</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Last reviewed: pending category release
                </p>
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
                    className={clsx(
                      "text-[13px] text-slate-600",
                      change.inlineImpact && "shrink-0"
                    )}
                  >
                    {change.impact}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative aspect-[539/482] w-full max-w-[539px] overflow-hidden rounded-2xl xl:max-w-none"
          >
            <Image
              src="/images/markets/funds-other-assets/funds-change-detection-signing.webp"
              alt="Two colleagues reviewing paperwork together at a table"
              fill
              sizes="(min-width: 640px) 539px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-[860px] text-sm leading-6 text-slate-600">
            Evidence-change monitoring asks whether a governing document, provider disclosure, or
            coverage state changed — never whether a price or return moved. An alert always routes
            back to the research object, never to a trade or allocation prompt.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
