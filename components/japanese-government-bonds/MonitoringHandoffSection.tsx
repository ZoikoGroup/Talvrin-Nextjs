import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const changes = [
  {
    state: "NEW",
    tone: "bg-accent-amber/15 text-accent-amber",
    item: "Bank of Japan policy communication",
    impact: "High potential impact",
  },
  {
    state: "UPDATED",
    tone: "bg-accent-violet/15 text-accent-violet",
    item: "Revised Japan public finance statistics figures, reference period changed",
    impact: "Medium potential impact",
  },
  {
    state: "UNCHANGED",
    tone: "bg-ink/10 text-gray-600",
    item: "JGB issuance / auction calendar",
    impact: "No material change",
  },
];

const changeTypes = [
  {
    title: "New publication",
    body: "A new document appears from a covered source — shown as NEW, not merged into prior evidence.",
  },
  {
    title: "Revised item",
    body: "A prior release is corrected or restated — both versions remain inspectable.",
  },
  {
    title: "Source unavailability",
    body: "A source becomes temporarily unreachable — flagged, never silently dropped.",
  },
  {
    title: "Evidence reclassification",
    body: "A document’s category or relationship changes — the change itself is recorded.",
  },
];

export default function MonitoringHandoffSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Monitoring / Change Detection Handoff</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[760px]">
            Watch for meaningful changes in Japanese Government Bonds evidence.
          </SectionHeading>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] xl:grid-cols-[minmax(0,720px)_minmax(0,538px)]">
          <Reveal delay={0.2} className="rounded-2xl bg-surface px-5 py-8 sm:px-8 sm:py-12">
            <h3 className="text-lg font-bold text-ink sm:text-xl">Research View: Japanese Government Bond Issuance Outlook</h3>
            <p className="mt-1 text-sm text-gray-600">Last reviewed: 14 September 2026</p>
            <p className="mt-6 text-xs font-bold tracking-wide text-gray-600">SINCE LAST REVIEW</p>
            <ul className="mt-2">
              {changes.map((change) => (
                <li
                  key={change.state}
                  className="flex flex-col gap-2 border-b border-ink/10 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div className="flex items-start gap-2.5 sm:items-center">
                    <span
                      className={clsx(
                        "shrink-0 rounded-md px-2 py-1 text-[11px] font-bold tracking-wide",
                        change.tone
                      )}
                    >
                      {change.state}
                    </span>
                    <span className="text-sm text-ink sm:text-base">{change.item}</span>
                  </div>
                  <span className="shrink-0 text-xs text-gray-600 sm:text-sm">{change.impact}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <LinkButton href="/product/change-detection" variant="primary">
                Explore Change Detection
              </LinkButton>
              <Link
                href="/product/monitoring"
                className="text-center text-sm font-semibold text-accent-violet transition-colors hover:text-brand sm:text-left"
              >
                Explore Monitoring →
              </Link>
            </div>
          </Reveal>

          <Reveal
            delay={0.25}
            className="relative aspect-[538/426] w-full overflow-hidden rounded-2xl bg-surface lg:aspect-auto lg:min-h-[426px]"
          >
            <Image
              src="/images/markets/japanese-government-bonds/jgb-monitoring-conversation.webp"
              alt="Two colleagues smiling over coffee at a marble table"
              fill
              sizes="(min-width: 1280px) 538px, (min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {changeTypes.map((type, index) => (
            <Reveal
              key={type.title}
              delay={0.04 * (index + 1)}
              className="rounded-2xl border border-ink/10 bg-surface p-5"
            >
              <h3 className="text-sm font-bold text-ink sm:text-base">{type.title}</h3>
              <p className="mt-2 text-sm leading-5 text-gray-600">{type.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
