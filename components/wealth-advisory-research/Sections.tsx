import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR } from "./HeroSection";

/** Shared shell: section background, intro, then whatever body the section needs. */
function Section({
  id,
  className,
  eyebrow,
  tone,
  title,
  lede,
  inverted,
  children,
}: {
  id?: string;
  className: string;
  eyebrow: string;
  tone?: "violet" | "amber";
  title: string;
  lede?: ReactNode;
  inverted?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={clsx("scroll-mt-32 py-20 sm:py-24", className)}>
      <Container>
        <Reveal>
          <SectionIntro eyebrow={eyebrow} tone={tone} title={title} inverted={inverted}>
            {lede}
          </SectionIntro>
        </Reveal>
        {children}
      </Container>
    </section>
  );
}

/**
 * Small original photo placed as a grid cell. Classes for aspect and placement per breakpoint
 * live in one prop so variants never conflict, and the photo never stretches into a blurry banner.
 */
function GridPhoto({ src, alt, sizes, layout }: { src: string; alt: string; sizes: string; layout: string }) {
  return (
    <Reveal delay={0.2} className={clsx("relative overflow-hidden rounded-2xl border border-ink/10", layout)}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </Reveal>
  );
}

/* ---------- Pill table (problem, client process, continuity, context, reviewability) ---------- */

type PillRow = [string, ReactNode, ReactNode];

function PillTable({
  rows,
  headers,
  dark,
  pillTone = "white",
  pillWidth = "lg:grid-cols-[200px_minmax(0,1fr)_minmax(0,1fr)]",
}: {
  rows: PillRow[];
  headers?: [string, string];
  dark?: boolean;
  pillTone?: "white" | "surface";
  /** Grid template from lg up; wider first column for longer pill labels. */
  pillWidth?: string;
}) {
  const headerClass = clsx("text-xs font-bold uppercase tracking-wide", dark ? "text-white/50" : "text-muted");
  return (
    <div>
      {headers && (
        <div aria-hidden="true" className={clsx("hidden gap-4 pb-3 lg:grid", pillWidth)}>
          <span />
          <span className={headerClass}>{headers[0]}</span>
          <span className={headerClass}>{headers[1]}</span>
        </div>
      )}
      <dl>
        {rows.map(([label, middle, right]) => (
          <div
            key={label}
            className={clsx(
              // Tablet: pill beside the text, with the second column tucked under the first.
              "grid grid-cols-1 gap-2.5 border-b py-5 md:grid-cols-[200px_minmax(0,1fr)] md:gap-x-4 lg:gap-4",
              pillWidth,
              dark ? "border-white/10" : "border-ink/10"
            )}
          >
            <dt>
              <span
                className={clsx(
                  "inline-block w-fit rounded-md border px-4 py-1.5 text-center text-xs font-bold lg:w-full",
                  dark
                    ? "border-white/20 bg-white/5 text-white"
                    : pillTone === "white"
                      ? "border-ink/20 bg-white text-ink"
                      : "border-ink/10 bg-surface text-ink"
                )}
              >
                {label}
              </span>
            </dt>
            <dd className={clsx("text-[15px] leading-6 sm:text-base", dark ? "text-white/90" : "text-ink-soft")}>
              {headers && <span className={clsx("mb-1 block lg:hidden", headerClass)}>{headers[0]}</span>}
              {middle}
            </dd>
            <dd
              className={clsx(
                "text-sm leading-5 md:col-start-2 lg:col-start-auto",
                dark ? "text-white/60" : "text-muted"
              )}
            >
              {headers && <span className={clsx("mb-1 block lg:hidden", headerClass)}>{headers[1]}</span>}
              {right}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ---------- Trust bar ---------- */

const badges = [
  "Professional research, not personalized advice",
  "Evidence before client narrative",
  "Rights before redistribution",
  "Context before recommendation",
  "Monitoring before outreach",
  "Human judgment before AI authority",
];

export function TrustBarSection() {
  return (
    <section className="border-y border-ink/10 bg-white py-6 sm:py-7">
      {/* The separator dot sits centred in the gap, so it never widens the spacing. */}
      <Container className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 sm:gap-x-8 lg:gap-x-[58px] lg:gap-y-4">
        {badges.map((badge) => (
          <span
            key={badge}
            className="relative text-center text-xs font-semibold uppercase tracking-wide text-ink after:absolute after:-right-[31px] after:top-0 after:hidden after:text-ink/25 after:content-['·'] last:after:content-[''] lg:after:block"
          >
            {badge}
          </span>
        ))}
      </Container>
    </section>
  );
}

/* ---------- Outcomes ---------- */

const outcomes = [
  [
    "Evidence-led intelligence",
    "Research is organized around inspectable evidence rather than isolated answers.",
    "Supports analysis before client research use.",
  ],
  [
    "Stronger provenance",
    "Important conclusions stay connected to supporting sources.",
    "Explains the basis of a view without becoming advice.",
  ],
  [
    "Continuous monitoring",
    "Focus on changes that may affect an existing research view.",
    "Supports reassessment without alert noise.",
  ],
  [
    "Reusable research",
    "Makes research more systematic and reusable across professional workflows.",
    "No client-template or publishing automation implied.",
  ],
  [
    "Research continuity",
    "Preserve evidence and reasoning so a view can be revisited.",
    "Reduces reconstruction for recurring topics.",
  ],
  ["Reviewability", "Makes it easier to inspect why a conclusion was reached.", "Not a formal communications-approval claim."],
];

/** Card with title, body and an amber boundary note under a divider. */
function NoteCard({ title, body, note, tone }: { title: string; body: string; note: string; tone: "surface" | "white" }) {
  return (
    <div
      className={clsx(
        "flex h-full flex-col rounded-2xl border border-ink/10 p-6",
        tone === "surface" ? "bg-surface" : "bg-white"
      )}
    >
      <h3 className="pb-2.5 text-base font-bold text-ink">{title}</h3>
      <p className="flex-1 pb-3.5 text-sm leading-[22px] text-muted">{body}</p>
      <p className="border-t border-ink/10 pt-3 text-xs leading-[18px] text-accent-amber">{note}</p>
    </div>
  );
}

export function OutcomesSection() {
  return (
    <Section
      className="bg-white"
      eyebrow="Outcome Strip"
      tone="amber"
      title="Six source-backed outcomes for wealth and advisory research."
    >
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(3,minmax(0,1fr))_498px] xl:gap-x-6 xl:gap-y-1">
        {outcomes.map(([title, body, note], index) => (
          <Reveal key={title} delay={index * 0.05} className="h-full">
            <NoteCard title={title} body={body} note={note} tone="surface" />
          </Reveal>
        ))}
        <GridPhoto
          src={`${IMAGE_DIR}/wealth-advisory-outcomes-advisor.webp`}
          alt="A smiling adviser making notes in a brochure while meeting a client"
          sizes="(min-width: 1280px) 498px, (min-width: 640px) 100vw, 100vw"
          layout="aspect-[4/3] sm:col-span-2 sm:aspect-video lg:col-span-1 lg:aspect-square xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:aspect-auto"
        />
      </div>
    </Section>
  );
}

/* ---------- Problem ---------- */

export function ProblemSection() {
  return (
    <Section
      className="bg-surface"
      eyebrow="The Problem"
      title="Fragmented evidence creates more than inefficiency."
      lede="It creates conflicting commentary, lost context, research decay, and pressure to produce timely, defensible client research without manufacturing advice."
    >
      <Reveal delay={0.1} className="mt-10">
        <PillTable
          headers={["Why it matters", "Talvrin response"]}
          rows={[
            [
              "Fragmented evidence",
              "Professionals may reconstruct the same market story from many disconnected sources.",
              "Keep the research question, evidence, and view connected.",
            ],
            [
              "Conflicting commentary",
              "Headlines and generated content can blur source authority.",
              "Separate source evidence from commentary, Talvrin analysis, AI assistance, and user notes.",
            ],
            [
              "Context loss",
              "Dates, reporting periods, jurisdictions, and source versions can materially change interpretation.",
              "Preserve context as first-class evidence metadata.",
            ],
            [
              "Research decay",
              "A market view can become stale while the original reasoning stays hidden in files or tabs.",
              "Monitor relevant evidence and show meaningful change.",
            ],
            [
              "Client-research pressure",
              "Professionals need timely, defensible context for client research processes.",
              "Improve the evidence base without manufacturing advice or suitability conclusions.",
            ],
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ---------- Client research process ---------- */

export function ClientProcessSection() {
  return (
    <Section
      className="bg-ink"
      eyebrow="Professional Analysis → Client Research Process"
      tone="amber"
      title="Talvrin strengthens the research behind the process. The professional remains responsible for the client-facing judgment."
      inverted
    >
      <Reveal delay={0.1} className="mt-11">
        <PillTable
          dark
          headers={["Talvrin may support", "Talvrin must not imply"]}
          rows={[
            [
              "Research question",
              "Investigate a market, issuer, security, policy issue, economic event, filing, or evidence question.",
              "Client-specific recommendation request as the product default.",
            ],
            [
              "Evidence gathering",
              "Find and inspect governed public-market evidence.",
              "Automatic client suitability or fiduciary determination.",
            ],
            [
              "Research view",
              "Build and preserve a professional evidence-led view.",
              "Approved client recommendation or personalized portfolio decision.",
            ],
            [
              "Client research context",
              "Help the professional understand evidence that may inform a client research process.",
              "Client profile matching, goals planning, risk scoring, tax advice, or financial planning.",
            ],
            [
              "Reassessment",
              "Revisit the professional view when evidence changes.",
              "Automatic client communication, trade, rebalance, or outreach.",
            ],
          ]}
        />
      </Reveal>
      <Reveal delay={0.15} className="mt-7">
        <div role="note" className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs font-bold uppercase tracking-wide text-white">Client-process lock</p>
          <p className="mt-2 text-[15px] leading-6 text-white/70 sm:text-base">
            Talvrin supports a professional&apos;s own analysis and client research processes. That does
            not authorize end-client advice, client-facing recommendations, communications approval,
            suitability, planning, product selection, or account-specific workflows.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- Research workflow ---------- */

const steps = [
  ["Ask", "Start with a market, issuer, security, economic event, policy issue, filing, or research question."],
  ["Discover", "Find relevant evidence and supporting context using governed source, coverage, and rights controls."],
  ["Inspect", "Open and review underlying sources — timing, period, jurisdiction, version, and access context exposed."],
  [
    "Understand",
    "See how evidence supports, challenges, updates, or contextualizes the question, kept distinct from interpretation.",
  ],
  ["Build", "Develop and preserve a professional research view — no automatic client recommendation or suitability."],
  [
    "Monitor",
    "Continue watching evidence and assumptions that matter, surfacing meaningful change, not market-noise alerts.",
  ],
  ["Reassess", "Return when new information changes the evidence base; client action remains human and professional."],
];

export function WorkflowSection() {
  return (
    <Section
      id="research-workflow"
      className="bg-white"
      eyebrow="Research Workflow"
      title="Research infrastructure, not advisor automation."
    >
      <Reveal delay={0.1} className="mt-9">
        <ol aria-label="Workflow stages" className="flex flex-wrap items-center gap-2.5">
          {steps.map(([name], index) => (
            <li key={name} className="flex items-center gap-2.5">
              <span className="rounded-full border border-ink/10 bg-surface px-4 py-2.5 text-xs font-semibold uppercase text-ink">
                {name}
              </span>
              {index < steps.length - 1 && (
                <span aria-hidden="true" className="text-sm text-ink/30">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Reveal>
      <div className="mt-11 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-y-5">
        {steps.map(([name, body], index) => (
          <Reveal key={name} delay={index * 0.04}>
            <h3 className="text-xs font-bold uppercase tracking-wide text-accent-amber">{name}</h3>
            <p className="mt-1.5 text-sm leading-5 text-muted">{body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Research-object architecture ---------- */

const researchObjects = [
  ["Question", "Market / issuer / security / event / policy / filing / research question.", "Never anchored in a named client or account."],
  [
    "Evidence",
    "Source identity, class, title, time, period, jurisdiction, version, rights, relationship.",
    "Rights determine internal/client use; source stays inspectable.",
  ],
  ["Normalization", "Talvrin-derived structured representation where applicable.", "Clearly distinct from original source."],
  ["Analysis", "Human / Talvrin analysis where applicable.", "Not client advice or approved communication."],
  ["User research", "Professional notes or view.", "Never source fact or approved client statement."],
  ["Research view", "Current evidence-led synthesis plus last-reviewed state.", "Professional artifact, not a suitability conclusion."],
  ["Monitoring", "Evidence dependencies and change state.", "No client outreach or portfolio action."],
  [
    "AI-assisted interpretation",
    "Generated research assistance with persistent provenance.",
    "Never personalized advice or authoritative recommendation.",
  ],
];

export function ArchitectureSection() {
  return (
    <Section
      className="bg-surface"
      eyebrow="Evidence / Research-Object Architecture"
      tone="amber"
      title="Evidence, interpretation, and reasoning stay distinguishable."
      lede="Every research object separates source evidence from Talvrin's normalization, human analysis, AI-assisted interpretation, and user-created notes."
    >
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[repeat(4,minmax(0,1fr))_237px] xl:gap-x-6">
        {researchObjects.map(([title, body, note], index) => (
          <Reveal key={title} delay={index * 0.04} className="h-full">
            <NoteCard title={title} body={body} note={note} tone="white" />
          </Reveal>
        ))}
        <GridPhoto
          src={`${IMAGE_DIR}/wealth-advisory-architecture-review.webp`}
          alt="A smiling woman holding a printed report during a meeting"
          sizes="(min-width: 1280px) 237px, (min-width: 640px) 50vw, 100vw"
          layout="aspect-[4/3] xl:col-start-5 xl:row-span-2 xl:row-start-1 xl:aspect-auto"
        />
      </div>
    </Section>
  );
}

/* ---------- Research-view continuity ---------- */

export function ContinuitySection() {
  return (
    <Section
      className="bg-white"
      eyebrow="Research-View Continuity"
      title="Preserve the reasoning so a view can be revisited."
      lede="Continuity reduces repeated reconstruction for recurring research topics — never a regulated-retention or recordkeeping claim."
    >
      <Reveal delay={0.1} className="mt-10">
        <PillTable
          pillTone="surface"
          pillWidth="lg:grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)]"
          rows={[
            [
              "Return to prior reasoning",
              "Research view remains connected to evidence and assumptions.",
              "No promise of indefinite retention unless approved.",
            ],
            [
              "Know whether it is still current",
              "Last-reviewed and evidence-change context where supported.",
              "No cosmetic freshness.",
            ],
            [
              "Understand source changes",
              "Revisions, supersession, and new evidence remain visible.",
              "No silent evidence replacement.",
            ],
            [
              "Reuse professional analysis",
              "Research may be revisited or reused according to released capabilities.",
              "No invented client templates or publishing flows.",
            ],
            [
              "Preserve human judgment",
              "Professional interpretation remains identifiable.",
              "Never converted into a system-generated client recommendation.",
            ],
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ---------- Client research context ---------- */

const quote = (text: string) => <q className="italic">{text}</q>;

export function ClientContextSection() {
  return (
    <Section
      className="bg-surface"
      eyebrow="Client Research Context"
      tone="amber"
      title="General relevance only — intentionally constrained."
      lede="This layer shows how professional research can support a client research process without creating a client-specific advice product."
    >
      <Reveal delay={0.1} className="mt-10">
        <PillTable
          headers={["Example copy", "Do not add"]}
          rows={[
            [
              "Research relevance",
              quote("This evidence may be relevant when explaining the changing inflation / rate backdrop."),
              "Client name, account, holdings, goals, risk profile.",
            ],
            [
              "Evidence summary",
              quote("The research view is supported by these inspectable sources."),
              "Personalized product recommendation or security selection.",
            ],
            [
              "Uncertainty",
              quote("The evidence is mixed, incomplete, or has changed since last review."),
              "Guaranteed outcome or confident client promise.",
            ],
            [
              "Review cue",
              quote("Reassess the professional research view before reusing it."),
              "Automatic client outreach or pre-approved communication status.",
            ],
            [
              "Jurisdiction cue",
              quote("Jurisdictional context can change meaning."),
              "Legal or tax advice, or a jurisdiction-specific suitability conclusion.",
            ],
          ]}
        />
      </Reveal>
      <Reveal delay={0.15} className="mt-6">
        <div role="note" className="rounded-2xl border border-ink/10 bg-white p-6">
          <p className="text-xs font-bold uppercase tracking-wide text-ink">Sensitive-context rule</p>
          <p className="mt-2 text-[15px] leading-6 text-muted sm:text-base">
            Talvrin does not collect or expose client names, account numbers, holdings, goals, risk
            profiles, personal financial data, or advisor-client conversation content to demonstrate
            this page. Public proof uses generic professional research objects only.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- Monitoring ---------- */

const changes = [
  {
    tag: "New",
    tagClass: "bg-accent-amber/12 text-[#8a5a00]",
    text: "Central-bank commentary on the inflation outlook",
    note: "High research relevance",
  },
  {
    tag: "Updated",
    tagClass: "bg-accent-violet/12 text-[#5a48d8]",
    text: "Revised official statistics, reference period changed",
    note: "Medium research relevance",
  },
  {
    tag: "Unchanged",
    tagClass: "bg-ink/8 text-muted",
    text: "Policy-rate path consensus",
    note: "No material change",
  },
];

export function MonitoringSection() {
  return (
    <Section
      className="bg-white"
      eyebrow="Monitoring — What Changed"
      title="Know what changed in the evidence before deciding what to tell a client."
    >
      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] xl:grid-cols-[minmax(0,720px)_minmax(0,1fr)]">
        <Reveal delay={0.1} className="h-full">
          {/* Illustrative product preview — not live data. */}
          <div
            aria-label="Illustrative research view preview"
            className="flex h-full flex-col justify-center rounded-2xl border border-ink/10 bg-surface p-6 sm:p-8"
          >
            <h3 className="text-lg font-bold text-ink sm:text-xl">Research View: Inflation &amp; Rate-Path Backdrop</h3>
            <p className="mt-1 text-sm text-muted">Last reviewed: 02 September 2026</p>

            <p className="mt-6 text-xs font-bold uppercase tracking-wide text-muted">Since last review</p>
            <ul className="mt-2">
              {changes.map((change) => (
                <li
                  key={change.tag}
                  className="flex flex-col gap-1.5 border-b border-ink/10 py-3 sm:flex-row sm:items-center sm:gap-3"
                >
                  <span
                    className={`w-fit shrink-0 rounded-md px-2 py-1 text-[11px] font-bold uppercase tracking-wide ${change.tagClass}`}
                  >
                    {change.tag}
                  </span>
                  <span className="flex-1 text-[15px] font-medium text-ink">{change.text}</span>
                  <span className="shrink-0 text-[13px] text-muted">{change.note}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <LinkButton href="/product/watchlists" className="px-6 py-3">
                Review the Research View
              </LinkButton>
              <Link
                href="/product/evidence"
                className="text-center text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
              >
                Open Evidence →
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.2}
          className="relative aspect-[540/397] overflow-hidden rounded-2xl border border-ink/10 lg:aspect-auto lg:min-h-[340px]"
        >
          <Image
            src={`${IMAGE_DIR}/wealth-advisory-monitoring-conversation.webp`}
            alt="A smiling woman in conversation with a colleague"
            fill
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>

      <Reveal delay={0.25} className="mt-6 max-w-[720px]">
        <p className="text-sm leading-6 text-muted">
          Monitoring surfaces evidence change. It is never an automatic client outreach, message, trade,
          or rebalance trigger — evidence-change alerts and market-price alerts remain separate concepts.
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------- Reviewability ---------- */

export function ReviewabilitySection() {
  return (
    <Section
      className="bg-surface"
      eyebrow="Reviewability & Team Outcome"
      tone="amber"
      title="Inspect the basis of a view — not an invented approval workflow."
      lede="Colleagues and supervisors can inspect why a research conclusion was reached, where access permits. Formal communications approval and recordkeeping remain capability-gated."
    >
      <Reveal delay={0.1} className="mt-8">
        <PillTable
          headers={["Allowed public meaning", "Capability-gated — not invented"]}
          rows={[
            ["Traceable", "A research view can be navigated back to supporting evidence.", "Guaranteed correctness or completeness."],
            [
              "Reviewable",
              "Authorized colleagues or supervisors can inspect the evidence basis where released.",
              "Communications pre-approval or supervisory workflow.",
            ],
            ["Version-aware", "Source revisions and supersession remain visible.", "Immutable books-and-records system."],
            [
              "Last reviewed",
              "Meaningful professional research review context where supported.",
              "Approval timestamp or cosmetic freshness.",
            ],
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ---------- Coverage, jurisdiction & rights ---------- */

const coverageCards = [
  ["Global by architecture", "Talvrin may be described as global, multi-market, and multi-jurisdiction by design."],
  ["Coverage before claims", "Current markets and datasets come from governed public coverage state."],
  ["Jurisdiction context", "Shown where economic, regulatory, or market meaning materially depends on jurisdiction."],
  ["Data / source rights", "Licensing, access, redistribution, and permitted-use constraints are respected."],
];

export function CoverageSection() {
  return (
    <Section
      className="bg-white"
      eyebrow="Coverage, Jurisdiction & Rights"
      title="Global by architecture. Governed by rights and jurisdiction."
    >
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[repeat(4,minmax(0,1fr))_240px]">
        {coverageCards.map(([title, body], index) => (
          <Reveal key={title} delay={index * 0.05} className="h-full">
            <div className="flex h-full flex-col gap-2 rounded-2xl border border-ink/10 bg-surface p-6">
              <h3 className="text-base font-bold text-ink">{title}</h3>
              <p className="text-sm leading-[22px] text-muted">{body}</p>
            </div>
          </Reveal>
        ))}
        <GridPhoto
          src={`${IMAGE_DIR}/wealth-advisory-coverage-discussion.webp`}
          alt="A smiling adviser in glasses talking with a client across a desk"
          sizes="(min-width: 1280px) 240px, (min-width: 640px) 50vw, 100vw"
          layout="aspect-[240/194] sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[360px] lg:col-span-4 xl:col-span-1 xl:max-w-none xl:aspect-auto"
        />
      </div>
      <Reveal delay={0.15} className="mt-8">
        <div role="note" className="rounded-2xl border border-ink/10 bg-surface p-6 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-wide text-ink">Rights lock</p>
          <p className="mt-2 text-[15px] leading-6 text-muted sm:text-base">
            Client research processes create a distinct redistribution and use context. A source or
            excerpt available to a professional cannot be assumed copyable, distributable, or shown to
            an end client — rights and permitted use remain governed.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- AI governance ---------- */

const aiMay = [
  "Evidence discovery",
  "Evidence organization",
  "Document comparison",
  "Summarization",
  "Change identification",
  "Relationship explanation",
  "Contradiction surfacing",
];

const aiMustNot = [
  "Authoritative evidence source",
  "Personalized financial advisor",
  "Suitability or fiduciary decision maker",
  "Client recommendation generator",
  "Automatic client-contact trigger",
  "Guaranteed fact, forecast, or outcome",
  "Substitute for professional judgment",
];

function AiList({ title, items, allowed }: { title: string; items: string[]; allowed: boolean }) {
  return (
    <div>
      <h3 className="pb-2 text-xs font-bold uppercase tracking-wide text-muted">{title}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            className={clsx(
              "flex gap-2.5 border-b border-ink/10 py-3 text-[15px]",
              allowed ? "text-ink" : "text-muted"
            )}
          >
            <span aria-hidden="true" className={clsx("shrink-0", allowed ? "text-accent-violet" : "text-red-600/80")}>
              {allowed ? "✓" : "✕"}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AiGovernanceSection() {
  return (
    <Section
      className="bg-surface"
      eyebrow="AI Governance"
      tone="amber"
      title="AI accelerates research. It does not become the advisor."
    >
      <Reveal delay={0.1} className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 xl:gap-x-20">
        <AiList title="AI may assist with" items={aiMay} allowed />
        <AiList title="AI must not become" items={aiMustNot} allowed={false} />
      </Reveal>
      <Reveal delay={0.15} className="mt-6 max-w-[800px]">
        <p className="text-sm leading-6 text-muted">
          AI may accelerate professional research while the underlying evidence remains inspectable. It
          must not cross from research assistance into personalized client advice, suitability, product
          selection, or authoritative client communication.
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------- Trust & research privacy ---------- */

const trustItems = [
  ["Evidence provenance", "Important conclusions remain connected to supporting sources."],
  ["Data rights", "Respect licensing, redistribution, and internal/client-use boundaries."],
  ["Privacy", "Minimize data collection and protect professional and client research context."],
  ["AI governance", "Keep generated content subordinate to evidence and policy."],
  ["Operational transparency", "Coverage, source, service, and freshness states remain truthful."],
  ["Security", "Protect identities, workspaces, services, and secrets."],
];

export function TrustPrivacySection() {
  return (
    <Section
      className="bg-white"
      eyebrow="Trust & Research Privacy"
      title="Wealth and advisory research requires institutional-grade controls."
    >
      <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] xl:grid-cols-[minmax(0,1fr)_498px] xl:gap-6">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {trustItems.map(([title, body], index) => (
            <Reveal key={title} delay={index * 0.05}>
              <span aria-hidden="true" className="block h-0.5 w-7 bg-accent-violet" />
              <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-[22px] text-muted">{body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[498/234] w-full max-w-[498px] overflow-hidden rounded-2xl border border-ink/10 lg:mx-0"
        >
          <Image
            src={`${IMAGE_DIR}/wealth-advisory-trust-signing.webp`}
            alt="Three professionals reviewing and signing documents at a desk"
            fill
            sizes="(min-width: 1280px) 498px, (min-width: 1024px) 420px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- What Talvrin is not ---------- */

const notItems = [
  [
    "Not a personalized investment-advice engine",
    "Professional research support must not be mistaken for client-specific advice.",
  ],
  [
    "Not a suitability / fiduciary determination engine",
    "No client profile matching or regulated suitability conclusion is established.",
  ],
  [
    "Not a financial-planning platform",
    "No goals, cash-flow, retirement, tax, estate, insurance, or planning capability is established.",
  ],
  [
    "Not a CRM / client portal",
    "No contacts, households, meetings, tasks, or client-login capability is established.",
  ],
  [
    "Not a proposal / client-report generator",
    "No proposal, pitchbook, fact sheet, or approved client-report workflow is established.",
  ],
  [
    "Not a portfolio management / model portfolio system",
    "No account holdings, allocation, models, rebalancing, or performance accounting.",
  ],
  ["Not a trading platform", "No order capture, execution, routing, or trade lifecycle."],
  [
    "Not a communications compliance / books-and-records system",
    "Reviewability does not equal supervision, archiving, or regulated recordkeeping.",
  ],
];

export function WhatTalvrinIsNotSection() {
  return (
    <Section className="bg-ink" eyebrow="Explicit Boundary" tone="amber" title="What Talvrin is not." inverted>
      <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
        {notItems.map(([title, body], index) => (
          <Reveal key={title} as="li" delay={index * 0.04} className="border-t border-white/20 py-4">
            <h3 className="text-base font-bold leading-[22px] text-white">{title}</h3>
            <p className="mt-1.5 text-sm leading-[22px] text-white/60">{body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/* ---------- Adjacent solutions ---------- */

const adjacent = [
  {
    title: "Individual Investors",
    body: "Personal disciplined research and evidence transparency for a self-directed workflow.",
    href: "/solutions/individual-investors",
  },
  {
    title: "Investment Professionals",
    body: "Analysts and portfolio professionals needing efficient source-linked evidence and context.",
    href: "/solutions/investment-professionals",
  },
  {
    title: "Financial Institutions",
    body: "Scalable governed and reviewable research across teams and markets.",
    href: "/solutions/financial-institutions",
  },
  {
    title: "Research Teams",
    body: "Repeatable team research, shared evidence, and monitoring.",
    href: "/solutions/research-teams",
  },
];

export function AdjacentSolutionsSection() {
  return (
    <Section
      className="bg-surface"
      eyebrow="Adjacent Solutions"
      title="Not quite Wealth & Advisory Research? Find the right fit."
    >
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] xl:grid-cols-[minmax(0,1fr)_628px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {adjacent.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-ink/10 bg-white p-7">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="flex-1 text-sm leading-[22px] text-muted">{item.body}</p>
                <Link
                  href={item.href}
                  aria-label={`Learn more about ${item.title}`}
                  className="mt-2 text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
                >
                  Learn more →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal
          delay={0.2}
          className="relative aspect-[628/398] overflow-hidden rounded-2xl border border-ink/10 lg:aspect-auto"
        >
          <Image
            src={`${IMAGE_DIR}/wealth-advisory-adjacent-meeting.webp`}
            alt="Three professionals in a focused discussion around a table"
            fill
            sizes="(min-width: 1280px) 628px, (min-width: 1024px) 440px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- Final CTA ---------- */

export function FinalCtaSection() {
  return (
    <section className="border-t border-ink/8 bg-surface py-16 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[720px] flex-col items-center gap-[18px] text-center">
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[40px] lg:leading-[48px]">
            Strengthen the evidence behind professional analysis and client research processes.
          </h2>
          <p className="max-w-[680px] text-base leading-[26px] text-muted">
            See how Talvrin fits your research process — without turning research infrastructure into
            personalized advice.
          </p>
          <div className="flex w-full flex-col items-stretch gap-4 pt-2 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/request-access" className="px-7 py-[15px] text-base">
              Request Access
            </LinkButton>
            <LinkButton href="#research-workflow" variant="ghost" className="px-7 py-[15px] text-base">
              See How It Works
            </LinkButton>
          </div>
          <p className="max-w-[680px] pt-1 text-sm text-muted">
            Research and intelligence. No personalized financial advice. No suitability. No financial
            planning. No trade execution.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
