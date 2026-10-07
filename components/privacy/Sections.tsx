import { ReactNode } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionIntro } from "../individual-investors/shared";
import { Banner } from "../data-rights/shared";
import { DotList } from "../evidence-standards/shared";
import { CardLink } from "../release-notes/shared";
import { Pill } from "../ai-principles/shared";
import { DarkNote, Row, RowTable } from "../global-data-governance/shared";
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

const triples = (items: [string, string, string][]): Row[] =>
  items.map(([label, a, b]) => ({ label, cells: [a, b] }));
const pairs = (items: [string, string][]): Row[] =>
  items.map(([label, detail]) => ({ label, cells: [detail] }));

/* ---------- Doctrine ---------- */

const principles = [
  ["Minimize", "Collect only what the approved purpose and product workflow require."],
  ["Explain", "Use plain language, scoped claims and links to authoritative privacy documentation."],
  ["Control", "Expose clear choices only where real controls or request pathways exist."],
  ["Govern", "Give every material privacy claim an owner, evidence reference, scope and review state."],
  ["Localize", "Adapt privacy experiences only where regional law, policy or product behavior materially differs."],
];

export function DoctrineSection() {
  return (
    <Section
      id="doctrine"
      className="bg-white"
      eyebrow="Five Privacy Doctrine Principles"
      title="Privacy should be understandable before it asks for trust."
      lede="Where specific data categories, purposes, retention periods, regional rules, vendors or rights are not established by approved privacy sources, Talvrin says so rather than implying certainty."
    >
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {principles.map(([title, body], index) => (
          <Reveal key={title} delay={index * 0.05} className="h-full">
            <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-ink/10 bg-surface p-6">
              <h3 className="text-base font-bold text-ink">{title}</h3>
              <p className="text-sm leading-5 text-muted">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="mt-7">
        <Banner
          src={`${IMAGE_DIR}/privacy-doctrine-team.webp`}
          alt="Colleagues smiling while working on laptops around a table"
          ratio="aspect-[1280/347]"
          className="bg-ink"
        />
      </Reveal>
    </Section>
  );
}

/* ---------- Privacy map ---------- */

export function PrivacyMapSection() {
  return (
    <Section
      id="privacy-map"
      className="bg-surface"
      eyebrow="One Privacy Domain, Seven Neighboring Surfaces"
      tone="amber"
      title="Privacy owns personal-data practices. It cross-links the rest."
      lede="Data Rights governs licensing, entitlement and permitted use of market/source data — not personal privacy rights. The two trust domains are never conflated."
    >
      <Reveal delay={0.1} className="mt-4">
        <RowTable
          tone="white"
          rows={triples([
            [
              "Privacy",
              "Public privacy doctrine, claim governance, routes to notices/controls, regional transparency pattern.",
              "Detailed legal notice wording unless separately approved.",
            ],
            [
              "Security",
              "Cross-link to protection of accounts, workspaces and services.",
              "Security controls, certifications, penetration-testing claims.",
            ],
            [
              "Data Rights",
              "Cross-link rights/access for market/source data licensing.",
              "Personal-data privacy rights or legal rights unless separately established.",
            ],
            [
              "Global Data Governance",
              "Cross-link jurisdictional governance architecture.",
              "Specific localization/transfer mechanisms not supplied.",
            ],
            [
              "AI Principles",
              "Privacy boundary for AI-related data claims; separates generated output from authority.",
              "Training-data policy, prompt retention, model-provider details unless approved.",
            ],
            [
              "Service Status",
              "Operational availability transparency.",
              "Incident history, uptime or privacy-incident metrics unless approved.",
            ],
            [
              "Legal Privacy Notice",
              "Authoritative jurisdiction-specific legal disclosure when approved.",
              "Marketing rewrite of legal obligations.",
            ],
          ])}
        />
      </Reveal>
      <Reveal delay={0.15} className="mt-3">
        <DarkNote>
          <strong className="font-bold text-white">Terminology lock:</strong> Data Rights
          (licensing/entitlement/permitted use of market/source data) is never conflated with privacy
          rights concerning personal data. They are separate trust domains.
        </DarkNote>
      </Reveal>
    </Section>
  );
}

/* ---------- Collection ---------- */

export function CollectionSection() {
  return (
    <Section
      id="collection"
      className="bg-white"
      eyebrow="The Principle Is Supplied. The Inventory Is Not."
      title="A data-minimization model, populated only from an approved registry."
      lede="Talvrin's supplied doctrine establishes the principle — minimize unnecessary collection — not an implementation inventory. The UI describes the model without pretending to know exact categories until privacy/legal owners approve them."
    >
      <Reveal delay={0.1} className="mt-4">
        <RowTable
          rows={triples([
            ["Purpose summary", "Plain-language reason for a collection/use category.", "Approved purpose registry or authoritative notice."],
            ["Collection state", "Required / optional / conditional / not applicable where supported.", "Product + privacy confirmation."],
            ["Data category", "Human-readable category, never guessed from UI fields.", "Approved data inventory."],
            [
              "Source of data",
              "User-provided / account-generated / device/service / third party only if verified.",
              "Approved inventory and vendor mapping.",
            ],
            [
              "Retention summary",
              "Shows only an approved retention rule or routes to authoritative notice.",
              "Approved retention schedule.",
            ],
            ["Sharing / disclosure", "Only approved recipient/category language.", "Vendor/subprocessor/privacy review."],
            ["Regional variation", "Visible where processing materially differs.", "Legal/compliance approval."],
            ["Last reviewed", "Real review date; no cosmetic freshness.", "Content governance record."],
          ])}
        />
      </Reveal>
      <Reveal delay={0.15} className="mt-3">
        <DarkNote label="Do not invent">
          No table on this page is pre-populated with assumed categories such as email, IP address,
          cookies, usage telemetry, or billing data unless an approved Talvrin privacy source
          establishes them.
        </DarkNote>
      </Reveal>
    </Section>
  );
}

/* ---------- Controls ---------- */

const controlStates = [
  ["Control available", "Label the action clearly; explain destination and effect."],
  ["Control unavailable", "No CTA shown; an authoritative alternative route appears if one exists."],
  ["Signed-out", "Never implies account-specific settings are available."],
  ["No JavaScript", "Core privacy narrative and legal links remain accessible."],
  ["Region-specific", "Explains that availability varies; shows only a verified regional path."],
  ["Error", "Privacy information is preserved; retry/help route shown without leaking user data."],
];

export function ControlsSection() {
  return (
    <Section
      id="controls"
      className="bg-surface"
      eyebrow="Live Controls Only — Never a Decorative Toggle"
      tone="amber"
      title="Clear choices, rendered only when a real control exists."
      lede="Every control family below maps to an implemented route or it does not appear. A missing control becomes an honest absence state, never a dead-end CTA."
    >
      <Reveal delay={0.1} className="mt-4">
        <RowTable
          tone="white"
          rows={triples([
            [
              "Account/privacy settings",
              "Direct deep link only if the setting exists and is publicly supported.",
              "No dead-end CTA.",
            ],
            [
              "Consent choices",
              "Clear affirmative/decline options where applicable; equivalent access to core content.",
              "No dark patterns or preselected optional consent.",
            ],
            [
              "Cookie/tracking preferences",
              "Routes to an approved consent manager if implemented.",
              "Banner never obscures focus or core content.",
            ],
            [
              "Communications preferences",
              "Routes only if supported.",
              "Subscribed/unsubscribed state is never inferred on the public page.",
            ],
            [
              "Data request / rights route",
              "Exposes only approved request mechanisms and applicable scope.",
              "No promised rights, deadlines or outcomes not established by legal owner.",
            ],
            [
              "Workspace/admin controls",
              "Describes only published capabilities.",
              "No private admin/security architecture on a public page.",
            ],
            [
              "Contact/privacy inquiry",
              "Uses approved destination/contact details only.",
              "No invented email addresses or phone numbers.",
            ],
          ])}
        />
      </Reveal>

      <div className="mt-7 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,310px)]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {controlStates.map(([title, body], index) => (
            <Reveal key={title} delay={index * 0.04} className="h-full">
              <div className="flex h-full flex-col gap-1.5 rounded-xl border border-ink/10 bg-white p-4">
                <h3 className="text-xs font-bold text-ink">{title}</h3>
                <p className="text-sm leading-5 text-muted">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal
          delay={0.2}
          className="relative aspect-video overflow-hidden rounded-xl border border-ink/10 bg-white lg:aspect-auto lg:min-h-[248px]"
        >
          <Image
            src={`${IMAGE_DIR}/privacy-controls-lounge.webp`}
            alt="Colleagues talking together in a sunlit lounge"
            fill
            sizes="(min-width: 1024px) 310px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- Analytics ---------- */

export function AnalyticsSection() {
  return (
    <Section
      id="analytics"
      className="bg-white"
      eyebrow="Measurement, Not Surveillance"
      title="Product-intent measurement, subject to consent and routing."
      lede="Talvrin's homepage standard calls for product-intent and comprehension measurement rather than invasive behavioral surveillance, with qualified page views subject to applicable consent and routing rules."
    >
      <Reveal delay={0.1} className="mt-4">
        <RowTable
          rows={triples([
            [
              "Page analytics",
              "Measures page performance and comprehension with stable, versioned events.",
              "Approved analytics contract.",
            ],
            [
              "Consent/routing",
              "Honors applicable consent and regional routing before qualified analytics collection.",
              "Approved consent architecture.",
            ],
            ["Third-party tags", "Minimized; privacy/security review before adding.", "Vendor/tag approval."],
            [
              "Sensitive-event design",
              "Never encodes free-text personal data, research content or secrets into analytics payloads.",
              "Analytics schema review.",
            ],
            [
              "Conversion tracking",
              "Tracks CTA intent at an aggregate event level; avoids hidden cross-context profiling.",
              "Privacy owner approval.",
            ],
            ["RUM/performance", "Collects only approved performance telemetry.", "Performance + privacy review."],
          ])}
        />
      </Reveal>
      <Reveal delay={0.15} className="mt-3">
        <DarkNote label="Privacy analytics rule">
          This page itself must not create the surveillance problem it is trying to explain.
        </DarkNote>
      </Reveal>
    </Section>
  );
}

/* ---------- Third parties ---------- */

export function ThirdPartiesSection() {
  return (
    <Section
      id="third-parties"
      className="bg-surface"
      eyebrow="Registry-Driven Disclosure, Policy-Owned Durations"
      tone="amber"
      title="Third parties, retention and deletion — disclosed, not guessed."
      lede="No numeric retention period is published unless an approved retention schedule establishes it. No vendor appears unless its disclosure is approved and useful to users."
    >
      <Reveal delay={0.1} className="mt-10">
        <h3 className="text-xs font-bold uppercase tracking-wide text-ink">Third-party transparency pattern</h3>
        <Banner
          src={`${IMAGE_DIR}/privacy-third-parties-circle.webp`}
          alt="A group of people talking in a circle in a bright room"
          ratio="aspect-[1280/334]"
          className="mt-3 border border-ink/10"
        />
      </Reveal>
      <Reveal delay={0.15} className="mt-10">
        <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-ink">
          Retention and deletion pattern
        </h3>
        <DotList
          tone="violet"
          items={[
            "No numeric retention period is published unless the approved retention schedule establishes it.",
            "Retention of account data, research content, logs, analytics, backups and legal holds is distinguished only if the policy inventory supports those categories.",
            "Where a public legal notice is authoritative, this page summarizes briefly and links rather than duplicating unstable legal text.",
            "If retention differs by jurisdiction, product state or contract, scope and owner are exposed instead of one collapsed global claim.",
            "Deletion CTAs map to implemented user/admin/legal workflows; there is no decorative \"Delete my data\" button.",
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ---------- Regional ---------- */

export function RegionalSection() {
  return (
    <Section
      id="regional"
      className="bg-white"
      eyebrow="Global by Architecture. Scoped by Law."
      title="Regional privacy experiences, only where materially different."
      lede="This Privacy page may summarize; an approved legal Privacy Notice remains authoritative for legal disclosures in its jurisdiction."
    >
      <Reveal delay={0.1} className="mt-4">
        <RowTable
          rows={pairs([
            ["Country-neutral core", "The trust narrative stays global when it is genuinely common."],
            [
              "Regional variants",
              "Created only when privacy law, product behavior, rights, data flow, notices or support materially differ.",
            ],
            ["hreflang", "Used only for true localized alternates."],
            [
              "Legal notice",
              "This page may summarize; the approved legal Privacy Notice remains authoritative for legal disclosures.",
            ],
            [
              "Rights language",
              "GDPR/CCPA or other regime-specific rights are not listed unless legal owner confirms applicability and wording.",
            ],
            [
              "Transfers",
              "SCCs, adequacy, DPF, localization or other transfer mechanisms are not claimed without approved evidence.",
            ],
            ["Controller/processor role", "Corporate role is never inferred; published only from legal/privacy authority."],
            ["Contact", "Uses approved privacy contact details only."],
          ])}
        />
      </Reveal>
      <Reveal delay={0.15} className="mt-3">
        <DarkNote label="Global rule">
          Talvrin may be global by architecture; privacy claims still need jurisdiction-specific truth
          where material.
        </DarkNote>
      </Reveal>
    </Section>
  );
}

/* ---------- AI ---------- */

export function AiSection() {
  return (
    <Section
      id="ai"
      className="bg-surface"
      eyebrow="AI Assistance Does Not Erase Privacy Rules"
      tone="amber"
      title="No unsupported training, retention or provider claims."
      lede="AI may assist research while the underlying evidence remains inspectable — but common expectations about model training or data handling are not Talvrin facts unless a source establishes them."
    >
      <Reveal delay={0.1} className="mt-4">
        <Banner
          src={`${IMAGE_DIR}/privacy-ai-team.webp`}
          alt="A smiling team working together on laptops"
          ratio="aspect-[1280/445]"
          className="border border-ink/10"
        />
      </Reveal>
    </Section>
  );
}

/* ---------- Enterprise ---------- */

const enterpriseRows: [string, string, string][] = [
  ["Understand privacy posture", "Read the Privacy / Trust narrative.", "Public"],
  ["Review legal disclosure", "View the approved Privacy Notice.", "Route must exist"],
  ["Assess security relationship", "Explore Security.", "Approved trust route"],
  ["Assess source licensing", "Explore Data Rights.", "Approved trust route"],
  ["Assess regional governance", "Explore Global Data Governance.", "Only after published"],
  ["Enterprise diligence", "Request approved privacy documentation / contact route.", "Only if program exists"],
  ["Product evaluation", "Request Access / Explore Talvrin based on launch state.", "Lifecycle CTA rule"],
];

export function EnterpriseSection() {
  return (
    <Section
      id="enterprise"
      className="bg-white"
      eyebrow="A Qualification Surface, Not a Fear-Based Funnel"
      title="Procurement-relevant privacy information, reachable without a sales form."
      lede="Privacy reduces procurement friction by making authoritative information easier to reach — not by gating basic trust material behind qualification."
    >
      <Reveal delay={0.1} className="mt-4">
        <RowTable
          rows={enterpriseRows.map(([label, action, state]) => ({
            label,
            cells: [
              action,
              <span key="state" className="text-xs font-bold uppercase tracking-wide text-accent-amber">
                {state}
              </span>,
            ],
          }))}
        />
      </Reveal>
      <Reveal delay={0.15} className="mt-3">
        <DarkNote label="No dark patterns">
          Core privacy information, legal notices, preference controls, and rights/contact paths are
          never hidden behind lead forms or sales qualification.
        </DarkNote>
      </Reveal>
    </Section>
  );
}

/* ---------- Handoffs ---------- */

type Handoff = { title: string; body: string; href?: string };

const handoffs: Handoff[] = [
  { title: "Evidence Standards", body: "How evidence is sourced, classified and presented.", href: "/trust/evidence-standards" },
  {
    title: "Data Sources",
    body: "Source identity, classification, provenance and coverage governance.",
    href: "/trust/data-sources",
  },
  {
    title: "Data Rights",
    body: "Licensing, entitlement, permitted-use and access-control principles.",
    href: "/trust/data-rights",
  },
  {
    title: "AI Principles",
    body: "How model-assisted output remains distinguishable from source evidence.",
    href: "/trust/ai-principles",
  },
  {
    title: "Service Status",
    body: "Authoritative operational state for source/platform services.",
    href: "/support/system-status",
  },
  { title: "Security", body: "Security controls and assurance posture appropriate for public disclosure." },
];

export function HandoffsSection() {
  return (
    <Section
      id="handoffs"
      className="bg-surface"
      eyebrow="One Principle, Clear Ownership Elsewhere"
      tone="amber"
      title="Privacy explains the model. These pages own the detail."
      lede="This page is not a substitute for a jurisdiction-specific legal Privacy Notice, security controls documentation, or data-rights contracts."
    >
      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {handoffs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="h-full">
              <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-white p-5">
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="text-[13px] leading-5 text-muted">{item.body}</p>
                <div className="mt-auto pt-2">
                  {item.href ? (
                    <CardLink href={item.href}>{`Open ${item.title}`}</CardLink>
                  ) : (
                    <Pill>Not yet published</Pill>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal
          delay={0.2}
          className="relative aspect-video overflow-hidden rounded-xl border border-ink/10 lg:aspect-auto lg:min-h-[337px]"
        >
          <Image
            src={`${IMAGE_DIR}/privacy-handoffs-meeting.webp`}
            alt="Students and a mentor talking around a table in a classroom"
            fill
            sizes="(min-width: 1024px) 502px, 100vw"
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
            Privacy that stays scoped, dated and owned.
          </h2>
          <p className="max-w-[700px] text-base leading-[26px] text-muted">
            Explore how Talvrin minimizes collection, exposes real controls, and keeps every material
            privacy claim traceable to an owner and a review date.
          </p>
          <div className="flex w-full flex-col items-stretch gap-4 pt-2 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/request-access" className="px-7 py-[15px] text-base">
              Request Access
            </LinkButton>
            <LinkButton href="/trust/data-rights" variant="ghost" className="px-7 py-[15px] text-base">
              Explore Data Rights →
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

