import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { Button } from "../ui/Button";
import { SectionEyebrow, SectionHeading } from "./shared";

const changeRows = [
  { badge: "NEW", tone: "amber", label: "Official inflation release", impact: "High impact" },
  { badge: "UPDATED", tone: "violet", label: "Central-bank communication", impact: "Medium impact" },
  { badge: "UNCHANGED", tone: "slate", label: "Fiscal-policy evidence", impact: "No material change" },
] as const;

const badgeStyles = {
  amber: "bg-[#FDF6EC] text-[#B87C24]",
  violet: "bg-[#EEEDFB] text-accent-violet",
  slate: "bg-ink/5 text-ink/60",
};

export default function ChangeDetectionSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Change Detection</SectionEyebrow>
          <SectionHeading>Markets move. More importantly, the evidence moves.</SectionHeading>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-stretch">
          <Reveal delay={0.15} className="rounded-2xl border border-ink/8 bg-surface p-7">
            <h3 className="text-lg font-bold text-ink">
              Research View: U.K. Inflation → Monetary Policy Outlook
            </h3>
            <p className="mt-1 text-xs text-slate-500">Last reviewed: 24 August 2026</p>

            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-slate-500">
              Since Last Review
            </p>
            <div className="mt-3 space-y-3">
              {changeRows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-2 rounded-lg border border-ink/8 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${badgeStyles[row.tone]}`}
                    >
                      {row.badge}
                    </span>
                    <span className="text-sm font-medium text-ink">{row.label}</span>
                  </div>
                  <span className="text-xs text-slate-500">{row.impact}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-5">
              <Button variant="primary">Review Changes</Button>
              <Link
                href="/product/evidence"
                className="text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
              >
                View Evidence Timeline →
              </Link>
            </div>
          </Reveal>

          <Reveal
            delay={0.25}
            className="relative min-h-[280px] overflow-hidden rounded-2xl border border-ink/8 lg:min-h-0"
          >
            <Image
              src="/images/home/Frame 51.png"
              alt="Analyst reviewing a research-evidence flowchart on a large display"
              fill
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
