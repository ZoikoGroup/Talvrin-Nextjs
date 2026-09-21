import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const rows = [
  { label: "Review needed / pending review", value: "Short textual badge/state" },
  { label: "Change count since last review", value: "Concise count + time reference" },
  { label: "No governed changes shown", value: "Neutral state" },
  { label: "Monitoring unavailable", value: "Explicit unavailable state" },
];

export default function MonitoringHandoffSection() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Monitoring & Evidence Handoff</SectionEyebrow>
          <SectionHeading inverted>The watchlist row is a summary, not a second engine.</SectionHeading>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
          <Reveal className="rounded-2xl border border-white/12 bg-white/5 p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-violet">
              From Watchlist → Monitoring
            </p>
            <div className="mt-5 divide-y divide-white/10 border-t border-white/10">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="text-sm text-white/85">{row.label}</span>
                  <span className="text-sm text-white/50">{row.value}</span>
                </div>
              ))}
            </div>
            <Link
              href="/product/monitoring"
              className="mt-6 inline-block text-sm font-semibold text-accent-violet transition-colors hover:text-white"
            >
              → Open Monitoring context
            </Link>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative min-h-[260px] overflow-hidden rounded-2xl border border-white/12 lg:min-h-0"
          >
            <Image
              src="/images/product/watchlist/watchlist-monitoring-handoff.webp"
              alt="Team reviewing a low-code monitoring workflow on a large display"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-6">
          <p className="rounded-xl border border-accent-amber/25 bg-white/5 px-6 py-5 text-center text-sm font-semibold text-accent-amber">
            INVARIANT — Watchlists may display Monitoring-owned and Evidence-owned state, but
            cannot author, recompute, relabel, or silently downgrade it.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
