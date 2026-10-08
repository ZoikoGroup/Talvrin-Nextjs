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
import { StateLabel, StateTone } from "../data-sources/shared";
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

/** Side photo that turns into a wide banner below the breakpoint where it sits beside the content. */
function SidePhoto({
  src,
  alt,
  width,
  xlRatio = "xl:aspect-auto",
}: {
  src: string;
  alt: string;
  /** Figma width of the photo column, used for `sizes`. */
  width: number;
  /** Aspect at xl; "auto" stretches to the row, a fixed ratio suits a centered row. */
  xlRatio?: string;
}) {
  return (
    <Reveal
      delay={0.2}
      className={clsx(
        "relative order-last aspect-video overflow-hidden rounded-2xl border border-ink/10 md:aspect-[21/9] xl:order-none",
        xlRatio
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`(min-width: 1280px) ${width}px, 100vw`}
        className="object-cover"
      />
    </Reveal>
  );
}

/* ---------- Principles ---------- */

const principles = [
  [
    "Protect the user and workspace",
    "Security exists to protect identities/accounts, workspaces, services, secrets and supporting systems.",
  ],
  [
    "Evidence before claim",
    "A security statement is publishable only when a named owner and current evidence support it.",
  ],
  ["Scope before assurance", "Every claim states what product, system, region or audience it actually covers."],
  [
    "Freshness before permanence",
    "Time-sensitive claims carry reviewed/currentness metadata rather than appearing evergreen.",
  ],
  [
    "Least disclosure needed",
    "Explain enough to support trust and procurement without publishing exploitable implementation detail.",
  ],
  [
    "Operational truth",
    "Availability belongs to authoritative service state; security wording never substitutes for live status data.",
  ],
];

export function PrinciplesSection() {
  return (
    <Section
      id="principles"
      className="bg-white"
      eyebrow="Doctrine, Not a Control Inventory"
      title="Seven principles, each with an implementation rule."
      lede="These principles govern what the page is allowed to say about security — not a list of controls Talvrin claims to run."
    >
      <div className="mt-10 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_500px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(([title, body], index) => (
            <Reveal key={title} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-ink/10 bg-surface p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-accent-amber">
                  Principle {index + 1}
                </p>
                <h3 className="text-lg font-bold leading-6 text-ink">{title}</h3>
                <p className="text-sm leading-[22px] text-ink-soft">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <SidePhoto
          src={`${IMAGE_DIR}/security-principles-review.webp`}
          alt="A woman reviewing printed documents beside a laptop in a team meeting"
          width={500}
        />
      </div>
    </Section>
  );
}

/* ---------- Claim lifecycle ---------- */

const stages = [
  ["Claim / question", "A candidate public security statement or question is identified."],
  ["Security owner", "A named accountable function takes ownership of the claim."],
  ["Evidence source", "The claim is matched to approved internal or external evidence."],
  ["Scope review", "The product, system, region or audience the claim actually covers is defined."],
  [
    "Legal / product review",
    "Legal/Compliance and Product review the claim where it carries regulatory or commercial weight.",
  ],
  ["Publication state", "The claim is marked draft, review, approved, withheld or withdrawn before it can render."],
  ["Review / expiry", "A reviewed date and, where policy requires, a next-review or expiry date are attached."],
  ["Update or retract", "Changed, superseded or withdrawn claims are updated or removed — never left stale."],
];

export function ClaimLifecycleSection() {
  return (
    <Section
      id="claim-lifecycle"
      className="bg-surface"
      eyebrow="Claim to Publication"
      tone="amber"
      title="Every public security claim follows the same eight stages."
      lede="A statement renders only once it has a named owner, approved evidence, a defined scope and current review status — resolved from the Security Claim Registry, never authored directly in the page."
    >
      <Reveal delay={0.1} className="mt-4">
        <ol className="overflow-hidden rounded-2xl border border-ink/10 bg-white sm:pt-7">
          {stages.map(([title, body], index) => (
            <li
              key={title}
              className="grid grid-cols-[40px_minmax(0,1fr)] gap-x-3 gap-y-1 border-b border-ink/10 px-5 py-4 last:border-b-0 md:grid-cols-[56px_minmax(0,280px)_minmax(0,1fr)] md:gap-4 xl:grid-cols-[56px_384px_minmax(0,1fr)]"
            >
              <span className="pt-0.5 text-xs font-bold text-accent-amber">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-bold text-ink">{title}</h3>
              <p className="col-start-2 text-sm leading-5 text-muted md:col-start-auto">{body}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

/* ---------- Security domains ---------- */

const domains = [
  [
    "Identity & account",
    "How account/identity protection is governed and which public capabilities are actually released.",
    "MFA, SSO, password policy, session controls, identity provider support.",
  ],
  [
    "Workspace & services",
    "High-level protection objective for research workspaces and services.",
    "Network segmentation, tenant isolation method, firewall/WAF specifics.",
  ],
  [
    "Secrets & configuration",
    "That sensitive system credentials/configuration are governed, if an approved claim exists.",
    "Key-vault vendor, rotation cadence, credential-storage architecture.",
  ],
  [
    "Secure development & change",
    "Approved public process commitments for software and change security.",
    "SAST/DAST tooling, mandatory review rules, exact pipeline.",
  ],
  [
    "Vulnerability management",
    "Approved governance or handling statement, and a reporting route if one is approved.",
    "Scan cadence, remediation SLAs, pentest frequency, bug bounty.",
  ],
  [
    "Monitoring / response",
    "Approved high-level operational security statement.",
    "24/7 SOC coverage, SIEM vendor, response-time metrics, staffing.",
  ],
  [
    "Resilience / recovery",
    "Approved resilience governance statement.",
    "Backups, RTO/RPO, DR regions, failover design, uptime percentage.",
  ],
  [
    "Third-party / supply chain",
    "Approved review and governance statement for external scripts and integrations.",
    "Vendor list, contractual controls, SBOM, continuous-monitoring claims.",
  ],
  [
    "Assurance / governance",
    "Approved policies, attestations or reviews with exact scope.",
    "SOC 2 / ISO / PCI / FedRAMP or audit claims unless current and approved.",
  ],
];

export function SecurityDomainsSection() {
  return (
    <Section
      id="security-domains"
      className="bg-white"
      eyebrow="Disclosure Categories, Not a Control List"
      title="Nine domains. Each renders only verified claims from the registry."
      lede={`A domain appearing on this page is an information-architecture category, not proof that a particular control exists. An empty domain shows a neutral "no public claim published" state rather than invented copy.`}
    >
      <Reveal delay={0.1} className="mt-4">
        <dl className="rounded-2xl bg-ink px-2 pb-2 sm:pt-11">
          {domains.map(([name, explain, notImplied]) => (
            <div
              key={name}
              className="grid grid-cols-1 gap-3 border-b border-white/10 px-4 py-5 last:border-b-0 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-5"
            >
              <dt>
                <span className="inline-block rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  {name}
                </span>
              </dt>
              <dd className="text-sm leading-5 text-white/80">
                <strong className="font-bold text-white">May explain:</strong> {explain}
              </dd>
              <dd className="text-sm leading-5 text-white/60">
                <strong className="font-bold text-orange-400">Not implied:</strong> {notImplied}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}

/* ---------- Evidence states ---------- */

const states: [string, StateTone, string, string][] = [
  [
    "Verified public claim",
    "green",
    "Current evidence supports the exact wording and scope.",
    "Renders normally with review/currentness metadata where useful.",
  ],
  [
    "Verified, non-public",
    "amber",
    "Evidence exists, but public disclosure is not approved.",
    "Claim does not render; routed to enterprise diligence only if approved.",
  ],
  [
    "Conditional",
    "amber",
    "True only within a named limitation or scope.",
    "The limitation is displayed directly adjacent to the claim.",
  ],
  [
    "Expired / superseded",
    "neutral",
    "Evidence or wording is no longer current.",
    "Removed from primary posture; replaced or archived per policy.",
  ],
  [
    "Withdrawn",
    "rose",
    "The accountable owner revoked approval.",
    "Removed immediately; no stale cached trust copy remains.",
  ],
  [
    "Unknown / unresolved",
    "rose",
    "No authoritative answer exists yet.",
    `Shows "not publicly stated" — never a positive or negative inference.`,
  ],
];

export function EvidenceStatesSection() {
  return (
    <Section
      id="evidence-states"
      className="bg-surface"
      eyebrow="State, Not Style, Drives Rendering"
      tone="amber"
      title="Six public states govern whether a claim appears at all."
      lede="If a claim's publication state, disclosure classification or evidence cannot be resolved, it does not render as a positive security assurance."
    >
      <div className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,854px)_412px] xl:items-center xl:justify-between">
        <Reveal delay={0.1}>
          <dl>
            {states.map(([label, tone, meaning, rendering]) => (
              <div
                key={label}
                className="grid grid-cols-1 gap-2 border-b border-ink/10 py-4 md:grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)] md:gap-4"
              >
                <dt>
                  <StateLabel label={label} tone={tone} />
                </dt>
                <dd className="text-sm leading-[22px] text-ink-soft">{meaning}</dd>
                <dd className="text-sm leading-[22px] text-muted">{rendering}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <SidePhoto
          src={`${IMAGE_DIR}/security-states-presentation.webp`}
          alt="A presenter walking colleagues through a chart in a meeting room"
          width={412}
          xlRatio="xl:aspect-[412/393]"
        />
      </div>
    </Section>
  );
}

/* ---------- Disclosure boundary ---------- */

const boundaries = [
  ["Approved high-level objective and scope", "Detailed infrastructure diagrams."],
  ["Named accountable security function, if approved", "Internal team rosters or on-call schedules."],
  ["Current public assurance statements", "Exploit-relevant configuration."],
  ["Approved policy or Trust-page link", "Unredacted audit findings or vulnerability details."],
  ["Service Status link for live availability", "Internal monitoring dashboards."],
  [
    `Outcome-focused "secrets are protected" statement`,
    "Token examples, credential formats, environment variables, hostnames.",
  ],
];

export function DisclosureBoundarySection() {
  return (
    <Section
      id="disclosure-boundary"
      className="bg-white"
      eyebrow="Least Disclosure Needed"
      title="Identity, workspace and secrets protection are explained — never diagrammed."
      lede="The page states the approved protection objective for accounts, workspaces, services and secrets. It does not expose implementation detail an attacker could use."
    >
      <div className="mt-4 grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,1fr)_282px]">
        <Reveal delay={0.1}>
          <dl className="h-full rounded-2xl bg-surface px-2 pb-2 sm:pt-11">
            {boundaries.map(([allowed, restricted]) => (
              <div
                key={allowed}
                className="grid grid-cols-1 gap-1.5 border-b border-ink/10 px-2 py-5 md:grid-cols-2 md:gap-4"
              >
                <dt className="text-sm font-bold text-green-700">
                  <span aria-hidden="true">✓ </span>
                  <span className="sr-only">May publish: </span>
                  {allowed}
                </dt>
                <dd className="text-sm leading-5 text-muted">
                  <strong className="font-bold text-red-700">Restricted:</strong> {restricted}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <SidePhoto
          src={`${IMAGE_DIR}/security-disclosure-briefing.webp`}
          alt="A presenter at a flip chart briefing colleagues around a table"
          width={282}
        />
      </div>
    </Section>
  );
}

/* ---------- Assurance ---------- */

const assuranceFields = [
  ["Assurance name", "Exact approved public name only."],
  ["Scope", "Exact organization/product/system scope; no broader implication."],
  ["Status", "Current / expired / superseded / withdrawn / conditional."],
  ["Validity / reviewed date", "Actual approved dates; no invented annual cadence."],
  ["Issuer / assessor", "Named only when disclosure rights and evidence permit."],
  ["Logo / mark", "Rendered only with approved usage rights."],
];

export function AssuranceSection() {
  return (
    <Section
      id="assurance"
      className="bg-surface"
      eyebrow="No Badge Without a Current Record"
      tone="amber"
      title="Certifications render only from a current, approved Assurance Registry record."
      lede="Every assurance entry carries an exact scope, status, reviewed date, and — where rights permit — issuer and artifact link. A logo never appears without usage rights."
    >
      <Reveal delay={0.1} className="mt-4">
        <Banner
          src={`${IMAGE_DIR}/security-assurance-discussion.webp`}
          alt="Two colleagues in a serious discussion by an office window"
          ratio="aspect-[1280/230]"
          className="border border-dashed border-ink/20"
        />
      </Reveal>
      <div className="mt-2 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {assuranceFields.map(([title, body], index) => (
          <Reveal key={title} delay={index * 0.04} className="h-full">
            <div className="flex h-full min-h-[110px] flex-col gap-1.5 rounded-xl border border-ink/10 bg-white p-4">
              <h3 className="text-sm font-bold text-ink">{title}</h3>
              <p className="text-[13px] leading-5 text-muted">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Notices & status ---------- */

export function NoticesStatusSection() {
  return (
    <Section
      id="notices-status"
      className="bg-white"
      eyebrow="Static Posture vs Live State"
      title="Availability lives on Service Status. Security never duplicates it."
      lede="A secure architecture and an operationally healthy service right now are different facts. This page states governed posture; live incidents and uptime belong elsewhere."
    >
      <Reveal delay={0.1} className="mt-4">
        <Banner
          src={`${IMAGE_DIR}/security-status-thinking.webp`}
          alt="A thoughtful older professional seated by an office window"
          ratio="aspect-[1280/302]"
        />
      </Reveal>
      <Reveal delay={0.15} className="mt-3">
        <div role="note" className="rounded-xl bg-surface px-6 py-5 sm:px-7">
          <p className="text-sm font-bold text-ink">No public security reporting channel is currently published</p>
          <p className="mt-1.5 text-[13px] leading-5 text-muted">
            Talvrin does not invent a security contact, form or bug-bounty route. A reporting section
            will appear here only once an approved channel, scope and legal wording exist.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- Enterprise diligence ---------- */

const diligenceItems = [
  [
    "Security governance overview",
    "How Talvrin maps public security claims to the Security Claim Registry.",
  ],
  [
    "Identity & access review",
    "Category-level summary of authentication and account-protection posture, once approved for disclosure.",
  ],
  [
    "Vulnerability & response overview",
    "Governance and reporting-route summary, once an approved process exists.",
  ],
  [
    "Assurance / certification detail",
    "Scope, status and artifact access for any current approved attestation.",
  ],
  ["Secure development summary", "How change and release security governance is evidenced."],
  [
    "Third-party review policy",
    "How external scripts, integrations and vendors are security/privacy reviewed.",
  ],
];

export function EnterpriseDiligenceSection() {
  return (
    <Section
      id="enterprise-diligence"
      className="bg-surface"
      eyebrow="Public Proof Before Gated Review"
      tone="amber"
      title="Core security facts stay ungated. Deeper materials, once they exist."
      lede="Procurement reviewers should never trade personal data for basic facts. Only genuinely confidential evidence is gated — and only through an approved diligence process."
    >
      <div className="mt-10 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_502px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diligenceItems.map(([title, body], index) => (
            <Reveal key={title} delay={index * 0.04} className="h-full">
              <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-white p-5">
                <h3 className="text-base font-bold leading-[22px] text-ink">{title}</h3>
                <p className="text-[13px] leading-5 text-muted">{body}</p>
                <div className="mt-auto pt-2">
                  <Pill>Not yet available</Pill>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <SidePhoto
          src={`${IMAGE_DIR}/security-diligence-meeting.webp`}
          alt="Business people meeting at a table in a busy open-plan office"
          width={502}
        />
      </div>
    </Section>
  );
}

/* ---------- Trust links ---------- */

type TrustLink = { title: string; body: string; href?: string };

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
    body: "Live operational status — this page never synthesizes or overrides it.",
    href: "/support/system-status",
  },
  {
    title: "Privacy",
    body: "Collection, controls, analytics/consent, and personal-data practices.",
    href: "/trust/privacy",
  },
];

export function TrustLinksSection() {
  return (
    <Section
      id="trust-links"
      className="bg-white"
      eyebrow="Owned Elsewhere, On Purpose"
      title="Security sets its boundary. These pages own the detail."
      lede="Personal-data rights, licensing and jurisdictional governance are distinct trust domains — this page does not restate their detail."
    >
      <div className="mt-10 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_243px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustLinks.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="h-full">
              <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-5">
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="text-[13px] leading-5 text-muted">{item.body}</p>
                <div className="mt-auto pt-3">
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
        <SidePhoto
          src={`${IMAGE_DIR}/security-trust-links-lounge.webp`}
          alt="Colleagues chatting in a colorful office lounge"
          width={243}
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
            Evaluate Talvrin with security claims you can trace to current evidence.
          </h2>
          <p className="max-w-[700px] text-base leading-[26px] text-muted">
            Explore a research platform built so security governance, scope and currentness stay
            visible, inspectable and separate from the evidence itself.
          </p>
          <div className="flex w-full flex-col items-stretch gap-4 pt-2 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/product/overview" className="px-7 py-[15px] text-base">
              Explore Talvrin
            </LinkButton>
            <LinkButton href="/trust/trust-center" variant="ghost" className="px-7 py-[15px] text-base">
              Explore Trust Center
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
