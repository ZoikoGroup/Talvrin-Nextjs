import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

interface MonitoringRow {
  badge: string;
  tone: "amber" | "purple" | "slate";
  message: string;
  description: string;
}

const monitoringItems: MonitoringRow[] = [
  {
    badge: "NEW",
    tone: "amber",
    message:
      "A newly relevant governed source or evidence item entered the monitored evidence set.",
    description: "Readable state label; no color-only meaning.",
  },
  {
    badge: "UPDATED",
    tone: "purple",
    message: "A monitored source or evidence item changed or was superseded.",
    description: "Prior and current context exposed where available.",
  },
  {
    badge: "UNCHANGED",
    tone: "slate",
    message: "A monitored evidence item remains materially unchanged.",
    description: "Kept low emphasis; activity is never manufactured.",
  },
  {
    badge: "POTENTIAL IMPACT",
    tone: "slate",
    message:
      "A governed assessment that a change may affect the research view.",
    description:
      "Never presented as guaranteed materiality or investment outcome.",
  },
];

export default function ModuleMonitoringSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <Container className="relative">
        {/* Header content */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-amber-600">
              MODULE 03 · MONITORING
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Know when the evidence changes.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Keep a research view connected to the evidence and return when
              meaningful new information may strengthen, weaken, or
              contextualize the existing view — markets move, but more
              importantly, the evidence moves.
            </p>
          </Reveal>
        </div>

        {/* Table / List View */}
        <div className="mt-16 divide-y divide-ink/10 border-y border-ink/10">
          {monitoringItems.map((item, index) => {
            const badgeStyles =
              item.tone === "amber"
                ? "bg-[#FDF6EC] text-[#B87C24] border-[#F4E3C8]"
                : item.tone === "purple"
                  ? "bg-[#EEEDFB] text-[#6C5CE7] border-[#DCD9FA]"
                  : "bg-ink/5 text-ink/70 border-ink/10";

            return (
              <Reveal key={item.badge} delay={0.05 * (index + 1)}>
                <div className="grid grid-cols-1 gap-4 py-5 lg:grid-cols-12 lg:items-center lg:gap-6">
                  {/* Badge Column */}
                  <div className="lg:col-span-3">
                    <span
                      className={`inline-flex items-center rounded-md border px-3 py-1.5 text-xs font-bold tracking-wide uppercase ${badgeStyles}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Message Column */}
                  <div className="lg:col-span-5">
                    <p className="text-sm font-medium text-ink">
                      {item.message}
                    </p>
                  </div>

                  {/* Description Column */}
                  <div className="lg:col-span-4">
                    <p className="text-sm text-ink/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Link Footer */}
        <Reveal delay={0.3} className="mt-8">
          <Link
            href="/monitoring"
            className="inline-flex items-center text-sm font-semibold text-[#6C5CE7] transition-colors hover:text-ink"
          >
            Explore Monitoring →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
