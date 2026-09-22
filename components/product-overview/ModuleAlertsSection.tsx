import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function ModuleAlertsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <Container className="relative">
        {/* 3-Column Layout with parallel heights */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
          {/* Part 1: Title, Description, Link */}
          <Reveal className="flex flex-col h-full">
            <div>
              <span className="text-xs font-bold uppercase tracking-[1.2px] text-amber-600">
                MODULE 05 · ALERTS
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl">
                Bring relevant change to the user — with context.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-ink/70 sm:text-base">
                Where released, alerts can communicate approved monitored events
                and route the user back to the research object and evidence
                behind the change.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/alerts"
                className="inline-flex items-center text-sm font-semibold text-[#6C5CE7] transition-colors hover:text-ink"
              >
                Explore Alerts →
              </Link>
            </div>
          </Reveal>

          {/* Part 2: Evidence-change vs Price Alerts Card */}
          <Reveal delay={0.1} className="flex h-full">
            <div className="flex w-full flex-col rounded-2xl border border-ink/10 bg-[#F6F5FB] p-6 sm:p-8 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-[1px] text-ink">
                  EVIDENCE-CHANGE vs. PRICE ALERTS
                </span>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  Evidence-change alerts stay semantically separate from
                  market-price alerts. Triggers, channels, and delivery
                  mechanics are governed separately and are not implied
                  here.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Part 3: Featured Image */}
          <Reveal delay={0.2} className="flex h-full">
            <div className="relative w-full overflow-hidden rounded-2xl border border-ink/10 bg-[#F6F5FB] shadow-md">
              <Image
                src="/images/product/overview/alerts.png"
                alt="Colleagues collaborating and looking at a mobile phone together in an office"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
