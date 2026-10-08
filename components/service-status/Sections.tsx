import { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionIntro } from "../individual-investors/shared";
import { Banner } from "../data-rights/shared";
import { CardLink } from "../release-notes/shared";
import { Pill } from "../ai-principles/shared";
import { IMAGE_DIR } from "./HeroSection";

/** Shared shell: section background, intro, then whatever body the section needs. */
function Section({
  id,
  className,
  eyebrow,
  tone,
  title,
  lede,
  children,
}: {
  id: string;
  className: string;
  eyebrow: string;
  tone?: "violet" | "amber";
  title: string;
  lede?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-32 py-20 sm:py-24 ${className}`}>
      <Container>
        <Reveal>
          <SectionIntro eyebrow={eyebrow} tone={tone} title={title}>
            {lede}
          </SectionIntro>
        </Reveal>
        {children}
      </Container>
    </section>
  );
}

/** Dashed, centered notice used wherever a governed record is not yet published. */
function EmptyState({
  title,
  children,
  tone = "white",
}: {
  title: string;
  children: ReactNode;
  tone?: "white" | "surface";
}) {
  return (
    <div
      role="status"
      className={clsx(
        "flex flex-col items-center gap-2 rounded-2xl border border-dashed border-ink/20 px-5 py-8 text-center sm:p-8",
        tone === "white" ? "bg-white" : "bg-surface"
      )}
    >
      <p className="text-base font-bold text-ink">{title}</p>
      <p className="max-w-[560px] text-sm leading-6 text-muted">{children}</p>
    </div>
  );
}

/** Small uppercase heading above a group of record fields. */
function GroupLabel({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-muted">{children}</h3>;
}

/** One field of a governed record: monospace-ish key plus a short definition. */
function FieldCard({
  name,
  body,
  tone = "white",
}: {
  name: string;
  body: string;
  tone?: "white" | "surface";
}) {
  return (
    <div
      className={clsx(
        "flex h-full flex-col gap-1 rounded-[10px] border border-ink/10 p-4",
        tone === "white" ? "bg-white" : "bg-surface"
      )}
    >
      <h4 className="break-words text-[13px] font-bold text-ink">{name}</h4>
      <p className="text-[13px] leading-5 text-muted">{body}</p>
    </div>
  );
}

/** Photo cell that fills its grid area on desktop and becomes a banner below it. */
function GridPhoto({
  src,
  alt,
  sizes,
  layout,
}: {
  src: string;
  alt: string;
  sizes: string;
  /**
   * Aspect + grid-placement classes per breakpoint, kept in one prop so variants never
   * conflict. These photos are small originals, so they stay grid cells rather than
   * stretching into full-width (blurry) banners on smaller screens.
   */
  layout: string;
}) {
  return (
    <Reveal
      delay={0.2}
      className={clsx("relative overflow-hidden rounded-[10px] border border-ink/10", layout)}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </Reveal>
  );
}

/* ---------- Service health ---------- */

export function ServiceHealthSection() {
  return (
    <Section
      id="service-health"
      className="bg-white"
      eyebrow="Registry-Driven, Not Hand-Typed"
      title="A service health matrix renders from one governed registry."
      lede={`Designers and editors never invent service names. Each row consumes a governed Service Component object — if a component's state is unknown, the row says so rather than collapsing into "operational."`}
    >
      <Reveal delay={0.1} className="mt-4">
        <Banner
          src={`${IMAGE_DIR}/service-status-health-audience.webp`}
          alt="A woman raising her hand to ask a question in a seated audience"
          ratio="aspect-[1280/501]"
          className="bg-ink"
        />
      </Reveal>
      <Reveal delay={0.15} className="mt-3">
        <EmptyState title="No public Service Registry is currently connected." tone="surface">
          This page cannot display service names, groups or live states until an approved registry
          exists. Inventing them here would overstate current product truth.
        </EmptyState>
      </Reveal>
    </Section>
  );
}

/* ---------- Status vocabulary ---------- */

type StatusTone = "green" | "amber" | "orange" | "rose" | "violet" | "neutral" | "slate";

const statusToneClasses: Record<StatusTone, string> = {
  green: "border-green-700/30 text-green-700",
  amber: "border-accent-amber/30 text-accent-amber",
  orange: "border-yellow-700/30 text-yellow-700",
  rose: "border-pink-800/30 text-pink-800",
  violet: "border-accent-violet/30 text-accent-violet",
  neutral: "border-muted/30 text-muted",
  slate: "border-ink-soft/30 text-ink-soft",
};

const states: [string, StatusTone, string, string][] = [
  [
    "Operational",
    "green",
    "Source is current; the component is operating within public status policy.",
    "Positive but restrained text/icon; timestamp visible.",
  ],
  [
    "Degraded performance",
    "amber",
    "Service is available but a material performance or function impact is confirmed.",
    "Impact summary shown with an incident link.",
  ],
  [
    "Partial outage",
    "orange",
    "A subset of requests, capabilities or scope is unavailable.",
    "Affected scope specified only when confirmed.",
  ],
  [
    "Major outage",
    "rose",
    "Broad material unavailability according to approved impact criteria.",
    "Highest visual prominence; no sensational copy.",
  ],
  [
    "Maintenance",
    "violet",
    "Planned work with current or expected user impact.",
    "Distinct maintenance treatment and schedule, never styled as an outage.",
  ],
  [
    "Assessing / unknown",
    "neutral",
    "State or scope cannot yet be verified.",
    "Neutral, high-attention unknown treatment; never rendered as green.",
  ],
  [
    "Stale / source unavailable",
    "neutral",
    "The status source exceeds its freshness threshold or is unavailable.",
    "Explicit freshness warning; last-known state shown only with a stale label.",
  ],
  [
    "Resolved",
    "slate",
    "An incident ended after recovery validation.",
    "A history state; never used alone as current component health.",
  ],
];

export function StatusVocabularySection() {
  return (
    <Section
      id="status-vocabulary"
      className="bg-surface"
      eyebrow="State, Not Style, Drives Rendering"
      tone="amber"
      title="Eight states, each defined before it can render."
      lede="Every state has a visible text label and a defined meaning — color is always supplementary, never the sole signal."
    >
      <Reveal delay={0.1} className="mt-5">
        <p
          role="note"
          className="max-w-[740px] rounded-[10px] border border-ink/10 bg-white px-4 py-3.5 text-sm font-bold leading-5 text-muted"
        >
          <span className="text-ink">Taxonomy dependency:</span> these labels are common
          implementation patterns for design exploration, not confirmed Talvrin product facts. Final
          labels and definitions require an approved Status State Registry before launch.
        </p>
      </Reveal>
      <Reveal delay={0.15} className="mt-4">
        <dl>
          {states.map(([label, tone, meaning, rendering]) => (
            <div
              key={label}
              className="grid grid-cols-1 gap-2 border-b border-ink/10 py-4 md:grid-cols-[224px_minmax(0,1fr)] md:gap-x-4 lg:grid-cols-[224px_minmax(0,1fr)_minmax(0,1fr)]"
            >
              <dt>
                <span
                  className={clsx(
                    "inline-block w-fit rounded-md border bg-white px-4 py-1.5 text-center text-xs font-bold uppercase md:w-full",
                    statusToneClasses[tone]
                  )}
                >
                  {label}
                </span>
              </dt>
              <dd className="text-sm leading-[22px] text-ink-soft">{meaning}</dd>
              <dd className="text-sm leading-[22px] text-muted md:col-start-2 lg:col-start-auto">
                {rendering}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}

/* ---------- Active incidents ---------- */

const incidentFields = [
  ["incident_id", "Stable public identity; no duplicate canonical incidents."],
  ["public_title", "Confirmed-impact title, never a speculative cause."],
  ["public_state", "Lifecycle label from the approved Incident Lifecycle Registry."],
  ["impact_summary", "Current user-facing impact, stated in plain language."],
  ["started_at / latest_update_at", "Absolute timestamps with explicit timezone handling."],
  ["resolved_at", "Present only once the authoritative incident state is resolved."],
  ["disclosure_class", "Governs the security/privacy publication boundary."],
  ["affected_service_ids", "References public Service Registry components only."],
];

export function ActiveIncidentsSection() {
  return (
    <Section
      id="active-incidents"
      className="bg-white"
      eyebrow="One Governed Record, Never Ad Hoc Text"
      title="Active incident communication follows a single canonical record."
      lede="A confirmed-impact title, not a speculative cause, leads every incident. One record owns the narrative — it is never duplicated or contradicted elsewhere on the site."
    >
      <Reveal delay={0.1} className="mt-8">
        <EmptyState title="No active incident is currently published." tone="surface">
          This is a neutral status. It does not confirm that every system is unaffected — it means no
          governed incident record is currently available to publish.
        </EmptyState>
      </Reveal>

      <div className="mt-10">
        <GroupLabel>What every incident record will carry</GroupLabel>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[repeat(4,minmax(0,1fr))_240px] xl:gap-4">
          {incidentFields.map(([name, body], index) => (
            <Reveal key={name} delay={index * 0.03} className="h-full">
              <FieldCard name={name} body={body} tone="surface" />
            </Reveal>
          ))}
          <GridPhoto
            src={`${IMAGE_DIR}/service-status-incident-study.webp`}
            alt="Students reading and studying together in a sunny room"
            sizes="(min-width: 1280px) 240px, (min-width: 640px) 50vw, 100vw"
            layout="aspect-[245/198] xl:col-start-5 xl:row-span-2 xl:row-start-1 xl:aspect-auto"
          />
        </div>
      </div>
    </Section>
  );
}

/* ---------- Planned maintenance ---------- */

const maintenanceFields = [
  ["public_title", "Plain-language description of the scheduled work."],
  ["affected_service_ids", "Approved public components only."],
  ["expected_impact", "Plain-language statement of the planned effect."],
  ["updates[]", "Reschedule, cancellation or completion chronology."],
  ["planned_start / planned_end", "Timezone-aware window; end shown only when known."],
  ["maintenance_state", "Scheduled, in progress, extended, completed, canceled or postponed."],
];

export function PlannedMaintenanceSection() {
  return (
    <Section
      id="planned-maintenance"
      className="bg-surface"
      eyebrow="Never Styled Like an Outage"
      tone="amber"
      title="Scheduled work gets its own label, timeline and tone."
      lede="Planned maintenance is visually and semantically distinct from an unplanned incident. A canceled or rescheduled window preserves its chronology rather than disappearing without explanation."
    >
      <Reveal delay={0.1} className="mt-8">
        <EmptyState title="No planned maintenance is currently published.">
          A maintenance window appears here only from approved scheduling data — never as an estimate
          or placeholder date.
        </EmptyState>
      </Reveal>

      <div className="mt-10">
        <GroupLabel>What every maintenance record will carry</GroupLabel>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(3,minmax(0,1fr))_504px] xl:gap-4">
          {maintenanceFields.map(([name, body], index) => (
            <Reveal key={name} delay={index * 0.03} className="h-full">
              <FieldCard name={name} body={body} />
            </Reveal>
          ))}
          <GridPhoto
            src={`${IMAGE_DIR}/service-status-maintenance-team.webp`}
            alt="Three colleagues reviewing work on a laptop at an outdoor table"
            sizes="(min-width: 1280px) 504px, (min-width: 1024px) 33vw, (min-width: 640px) 100vw, 100vw"
            layout="aspect-[504/198] sm:col-span-2 lg:col-span-1 lg:aspect-video xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:aspect-auto"
          />
        </div>
      </div>
    </Section>
  );
}

/* ---------- Incident record ---------- */

export function IncidentRecordSection() {
  return (
    <Section
      id="incident-record"
      className="bg-white"
      eyebrow="Illustrative Communication Pattern"
      title="What an incident timeline will contain once published."
      lede="Confirmed facts and suspected cause are always kept separate. The pattern below shows the lifecycle shape — it is not a record of any real incident."
    >
      <Reveal delay={0.1} className="mt-4">
        <Banner
          src={`${IMAGE_DIR}/service-status-timeline-laptop.webp`}
          alt="A woman working on a laptop in a bright, plant-filled apartment"
          ratio="aspect-[1280/345]"
          className="border border-white/10 bg-ink"
        />
      </Reveal>
    </Section>
  );
}

/* ---------- Reliability metrics ---------- */

const metricFields = [
  ["Measurement scope", "The exact service(s) and boundary the metric covers."],
  ["Reporting period", "A defined window; no retroactive redefinition."],
  ["Methodology", "Denominator, exclusions and calculation method disclosed."],
  ["Source", "Authoritative telemetry system, named."],
  ["Last calculated", "A timestamp distinct from page render time."],
];

export function ReliabilityMetricsSection() {
  return (
    <Section
      id="reliability-metrics"
      className="bg-surface"
      eyebrow="Release-Gated, Like Any Reliability Claim"
      tone="amber"
      title="Uptime numbers appear only with an approved measurement contract."
      lede="A percentage without scope, window and exclusions misleads more than it informs. SLA and SLO are not interchangeable — a public percentage can be read contractually."
    >
      <Reveal delay={0.1} className="mt-10">
        <EmptyState title="Availability metrics are not currently published for Service Status.">
          A metric will appear only once Talvrin has an approved measurement scope, reporting window,
          denominator/exclusions, source and owner for the exact service and period.
        </EmptyState>
      </Reveal>

      <div className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {metricFields.map(([name, body], index) => (
          <Reveal key={name} delay={index * 0.04} className="h-full">
            <div className="flex h-full min-h-[148px] flex-col gap-1 rounded-[10px] border border-ink/10 bg-white p-4">
              <h3 className="text-[13px] font-bold text-ink">{name}</h3>
              <p className="text-[13px] leading-5 text-muted">{body}</p>
            </div>
          </Reveal>
        ))}
        <GridPhoto
          src={`${IMAGE_DIR}/service-status-metrics-plans.webp`}
          alt="Two people reviewing plans on a table in a dim studio"
          sizes="(min-width: 1280px) 202px, (min-width: 768px) 33vw, 100vw"
          layout="aspect-[202/148] sm:aspect-auto sm:min-h-[148px]"
        />
      </div>
    </Section>
  );
}

/* ---------- History ---------- */

export function HistorySection() {
  return (
    <section id="history" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:items-start xl:grid-cols-[minmax(0,780px)_484px] xl:justify-between">
          <div>
            <Reveal>
              <SectionIntro
                eyebrow="Confirmed or Unavailable — Never Assumed"
                title={`"No incidents" and "data unavailable" are never the same message.`}
              >
                History reflects a governed public-retention window and publication policy. It is never
                represented as a complete record of every internal operational event.
              </SectionIntro>
            </Reveal>
            <Reveal delay={0.1} className="mt-9">
              <div className="max-w-[632px] rounded-2xl border border-ink/10 bg-surface p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-accent-amber">Confirmed zero</p>
                <p className="mt-3 text-sm font-bold text-ink">
                  No published incidents were returned for the selected period.
                </p>
                <p className="mt-2.5 text-sm leading-[22px] text-muted">
                  Used only when the authoritative dataset affirmatively confirms zero complete records
                  for that window.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal
            delay={0.2}
            className="relative aspect-[484/386] w-full overflow-hidden rounded-2xl border border-ink/10"
          >
            <Image
              src={`${IMAGE_DIR}/service-status-history-table.webp`}
              alt="Two colleagues working on laptops at a long table in a concrete-walled room"
              fill
              sizes="(min-width: 1280px) 484px, (min-width: 1024px) 400px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Methodology ---------- */

export function MethodologySection() {
  return (
    <Section
      id="methodology"
      className="bg-surface"
      eyebrow="How to Read This Page"
      tone="amber"
      title="Freshness, scope and corrections, explained plainly."
      lede="A public operational state is a platform-level summary, not a guarantee that every account, network path or workflow is unaffected."
    >
      <Reveal delay={0.1} className="mt-4">
        <Banner
          src={`${IMAGE_DIR}/service-status-methodology-tablet.webp`}
          alt="Two colleagues reviewing a tablet together in a studio"
          ratio="aspect-[1280/383]"
        />
      </Reveal>
      <Reveal delay={0.15} className="mt-3">
        <div role="note" className="rounded-2xl border border-ink/10 bg-white px-6 py-6 sm:px-7">
          <p className="text-[15px] font-bold text-ink">No update-subscription channel is currently released</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Email, SMS, webhook and RSS alerts appear here only once a channel is released,
            privacy/security-reviewed and able to honor an unsubscribe path. Operational alerts will
            never be bundled with marketing consent.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- Trust links ---------- */

type TrustLink = { title: string; body: string; href?: string; current?: boolean };

const trustLinks: TrustLink[] = [
  {
    title: "Trust Center",
    body: "Single entry point for Talvrin’s overall trust model.",
    href: "/trust/trust-center",
  },
  {
    title: "Evidence Standards",
    body: "Evidence quality, source classification, and provenance detail.",
    href: "/trust/evidence-standards",
  },
  { title: "Data Sources", body: "Source classes, inventory, and currentness.", href: "/trust/data-sources" },
  {
    title: "Data Rights",
    body: "Licensing, entitlement, and permitted-use governance.",
    href: "/trust/data-rights",
  },
  {
    title: "Privacy",
    body: "Personal-data practices, controls and status-subscription privacy.",
    href: "/trust/privacy",
  },
  {
    title: "Global Data Governance",
    body: "Jurisdiction and cross-border governance.",
    href: "/trust/global-data-governance",
  },
  {
    title: "AI Principles",
    body: "AI assistance boundaries and provenance requirements.",
    href: "/trust/ai-principles",
  },
  {
    title: "Service Status",
    body: "Live operational state, incidents, planned maintenance and approved reliability history.",
    current: true,
  },
];

export function TrustLinksSection() {
  return (
    <Section
      id="trust-links"
      className="bg-white"
      eyebrow="The Final Trust Destination, Not a Standalone One"
      title="Service Status closes the Trust sequence. These pages own the rest."
      lede="Operational health is a distinct dimension from evidence quality, data rights, security posture, privacy practice, governance and AI boundaries."
    >
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[repeat(4,minmax(0,1fr))_243px]">
          {trustLinks.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="h-full">
              <div
                aria-current={item.current ? "page" : undefined}
                className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-5"
              >
                <h3 className="flex flex-wrap items-center gap-2 text-base font-bold text-ink">
                  {item.title}
                  {item.current && (
                    <Pill tone="violet" className="text-[10px]">
                      Current
                    </Pill>
                  )}
                </h3>
                <p className="text-[13px] leading-5 text-muted">{item.body}</p>
                {item.href && (
                  <div className="mt-auto pt-3">
                    <CardLink href={item.href}>{`Open ${item.title}`}</CardLink>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        <GridPhoto
          src={`${IMAGE_DIR}/service-status-trust-links-cafe.webp`}
          alt="A man reading by a sunny café window beside a laptop"
          sizes="(min-width: 1280px) 243px, (min-width: 640px) 50vw, 100vw"
          layout="aspect-[4/3] xl:col-start-5 xl:row-span-2 xl:row-start-1 xl:aspect-auto"
        />
      </div>
    </Section>
  );
}

/* ---------- Final CTA ---------- */

export function FinalCtaSection() {
  return (
    <section className="border-t border-ink/8 bg-white py-16 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[720px] flex-col items-center gap-[18px] text-center">
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[40px] lg:leading-[48px]">
            Evaluate Talvrin with operational truth you can trace to a governed source.
          </h2>
          <p className="max-w-[660px] text-base leading-[26px] text-muted">
            Explore a research platform built so current state, freshness and incident history stay
            honest, scoped and separate from marketing claims.
          </p>
          <div className="flex w-full flex-col items-stretch gap-4 pt-2 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/product/overview" className="px-7 py-[15px] text-base">
              Explore Talvrin
            </LinkButton>
            <LinkButton href="/resources/contact-support" variant="ghost" className="px-7 py-[15px] text-base">
              Contact Support
            </LinkButton>
          </div>
          <p className="max-w-[680px] pt-1 text-sm text-muted">
            Research and intelligence platform. No trade execution. No manufactured investment
            recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
