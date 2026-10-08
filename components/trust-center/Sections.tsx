import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionIntro } from "../individual-investors/shared";
import { Banner } from "../data-rights/shared";
import { CardLink } from "../release-notes/shared";
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

/** Photo that sits beside content from xl up and becomes a wide banner below it. */
function SidePhoto({
  src,
  alt,
  width,
  className,
}: {
  src: string;
  alt: string;
  /** Figma width of the photo column, used for `sizes`. */
  width: number;
  className?: string;
}) {
  return (
    <Reveal
      delay={0.2}
      className={clsx(
        "relative aspect-video overflow-hidden rounded-2xl border border-ink/10 md:aspect-[21/9] xl:aspect-auto",
        className
      )}
    >
      <Image src={src} alt={alt} fill sizes={`(min-width: 1280px) ${width}px, 100vw`} className="object-cover" />
    </Reveal>
  );
}

/** Small uppercase group heading above a set of cards. */
function GroupLabel({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 text-xs font-bold uppercase tracking-wide text-muted">{children}</h3>;
}

/* ---------- Doctrine ---------- */

const principles = [
  [
    "Evidence provenance",
    "Important outputs should remain traceable to supporting material.",
    "Do not call generated interpretation the evidence.",
  ],
  [
    "Data rights",
    "Licensing, entitlement, redistribution, access and permitted use require governed controls.",
    "Do not claim rights or redistribution permissions without the approved rights source.",
  ],
  [
    "Security",
    "Accounts, workspaces, services and secrets require protection.",
    "Do not publish control details or certification claims without security approval.",
  ],
  [
    "Privacy",
    "Unnecessary collection should be minimized and controls explained clearly.",
    "Do not infer lawful bases, retention, rights workflows or regional practices.",
  ],
  [
    "Global data governance",
    "Jurisdiction-sensitive controls matter in a global platform.",
    "Architecture capability is not the same as released regional coverage.",
  ],
  [
    "Responsible AI",
    "AI may assist research while evidence remains independently inspectable.",
    "No AI output is presented as an authoritative source.",
  ],
  [
    "Operational transparency",
    "Supported coverage, availability and service state should be communicated truthfully.",
    "No uptime percentage or incident-free claim without measured/contractual evidence.",
  ],
];

export function DoctrineSection() {
  return (
    <Section
      id="doctrine"
      className="bg-white"
      eyebrow="Seven Approved Principles, Each With a Boundary"
      title="Trust is architectural, not a marketing slogan."
      lede="Every material public trust claim must be source-backed, owned, reviewable, current and gated before publication. Each principle below carries an explicit boundary on what it does not permit."
    >
      <Reveal delay={0.1} className="mt-10">
        <dl>
          {principles.map(([name, body, boundary]) => (
            <div
              key={name}
              className="grid grid-cols-1 gap-1.5 border-b border-ink/10 py-5 md:grid-cols-[200px_minmax(0,1fr)] md:gap-x-6 lg:grid-cols-[256px_minmax(0,1fr)_minmax(0,1fr)] lg:px-1.5"
            >
              <dt className="text-base font-bold text-ink">{name}</dt>
              <dd className="text-sm leading-6 text-ink-soft">{body}</dd>
              <dd className="text-sm leading-5 text-muted md:col-start-2 lg:col-start-auto">
                <strong className="font-bold text-yellow-700">Boundary:</strong> {boundary}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}

/* ---------- Trust domains ---------- */

type Destination = { title: string; body: string; href: string; cta: string };

const evidenceAndData: Destination[] = [
  {
    title: "Evidence Standards",
    body: "How Talvrin separates source evidence, normalization, analysis, AI-assisted interpretation and user-created content.",
    href: "/trust/evidence-standards",
    cta: "Explore Evidence Standards",
  },
  {
    title: "Data Sources",
    body: "How governed source identity, authority, timing, jurisdiction and provenance are made understandable.",
    href: "/trust/data-sources",
    cta: "Explore Data Sources",
  },
  {
    title: "Data Rights",
    body: "How licensing, entitlement, redistribution, access and permitted-use boundaries are governed.",
    href: "/trust/data-rights",
    cta: "Explore Data Rights",
  },
];

const security: Destination = {
  title: "Security",
  body: "How Talvrin approaches protection of identities, workspaces, services and secrets.",
  href: "/trust/security",
  cta: "Explore Security",
};

const governance: Destination = {
  title: "Global Data Governance",
  body: "How Talvrin handles jurisdiction-sensitive data governance while separating architecture from released coverage.",
  href: "/trust/global-data-governance",
  cta: "Explore Global Data Governance",
};

const serviceStatus: Destination = {
  title: "Service Status",
  body: "Where current operational state can be inspected when an authoritative public status service exists.",
  href: "/support/system-status",
  cta: "View Service Status",
};

function DestinationCard({ item }: { item: Destination }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-xl border border-ink/10 bg-white p-5">
      <h4 className="text-base font-bold text-ink">{item.title}</h4>
      <p className="text-sm leading-5 text-muted">{item.body}</p>
      <div className="mt-auto">
        <CardLink href={item.href}>{item.cta}</CardLink>
      </div>
    </div>
  );
}

export function TrustDomainsSection() {
  return (
    <Section
      id="trust-domains"
      className="bg-surface"
      eyebrow="Every Route Resolves From the Approved Route Registry"
      tone="amber"
      title="Eight Trust destinations, grouped for recognition."
      lede="The Trust Center is a routing layer, not a replacement for the detailed specification each destination owns. Labels and order are governed; no destination is invented here."
    >
      <Reveal delay={0.1} className="mt-10">
        <GroupLabel>Evidence &amp; data</GroupLabel>
        <div className="grid grid-cols-1 gap-1.5 md:grid-cols-3">
          {evidenceAndData.map((item) => (
            <DestinationCard key={item.title} item={item} />
          ))}
        </div>
      </Reveal>

      <div className="mt-9 grid grid-cols-1 gap-1.5 xl:grid-cols-2">
        {/* Two cards sit side by side on tablets/laptops, then stack beside the photo at xl. */}
        <div className="grid grid-cols-1 gap-x-1.5 md:grid-cols-2 xl:flex xl:flex-col">
          <Reveal delay={0.1} className="flex flex-col">
            <GroupLabel>Protection &amp; privacy</GroupLabel>
            <DestinationCard item={security} />
          </Reveal>
          <Reveal delay={0.15} className="mt-9 flex flex-col md:mt-0 xl:mt-9">
            <GroupLabel>Governance &amp; AI</GroupLabel>
            <DestinationCard item={governance} />
          </Reveal>
        </div>
        <SidePhoto
          src={`${IMAGE_DIR}/trust-center-domains-team.webp`}
          alt="Three colleagues leaning in to look at a laptop together"
          width={637}
          className="mt-6 rounded-xl xl:mt-8"
        />
      </div>

      <Reveal delay={0.1} className="mt-9">
        <GroupLabel>Operations</GroupLabel>
        <DestinationCard item={serviceStatus} />
      </Reveal>
    </Section>
  );
}

/* ---------- How we prove trust ---------- */

export function HowWeProveTrustSection() {
  return (
    <Section
      id="how-we-prove-trust"
      className="bg-white"
      eyebrow="A Governed Claim Lifecycle, Not Editorial Copy"
      title="How a trust claim moves from principle to published fact."
      lede="Every material claim resolves through a governed object with scope, evidence, owner, review dates, state and supersession — never a copy block an editor invented."
    >
      <Reveal delay={0.1} className="mt-4">
        <Banner
          src={`${IMAGE_DIR}/trust-center-lifecycle-meeting.webp`}
          alt="A woman with a laptop leading a relaxed discussion with colleagues"
          ratio="aspect-[1280/384]"
          className="border border-white/10 bg-ink"
        />
      </Reveal>
    </Section>
  );
}

/* ---------- Evidence & rights ---------- */

const evidenceFields = [
  ["Source identity", "Who or what authored or issued the material."],
  ["Source class", "The governed category the source belongs to."],
  ["Publication / effective timing", "When the source material became valid or was published."],
  ["Jurisdiction", "Shown only where materially relevant to the evidence."],
  ["Version / supersession", "Whether a newer version replaces this material."],
  ["Rights / access state", "What permitted use and access the source allows."],
  ["Evidence relationship", "How an output traces back to its supporting material."],
];

const specLinks = [
  { title: "Evidence Standards", href: "/trust/evidence-standards" },
  { title: "Data Sources", href: "/trust/data-sources" },
  { title: "Data Rights", href: "/trust/data-rights" },
];

export function EvidenceRightsSection() {
  return (
    <Section
      id="evidence-rights"
      className="bg-surface"
      eyebrow="Interpretation Traces Back to Source"
      tone="amber"
      title="Trust starts with being able to inspect why."
      lede="Authoritative source material, Talvrin normalization, Talvrin analysis, AI-assisted interpretation and user-created notes stay visually and semantically separate — never color alone."
    >
      <div className="mt-9 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {evidenceFields.map(([title, body], index) => (
          <Reveal key={title} delay={index * 0.04} className="h-full">
            <div className="flex h-full min-h-[126px] flex-col gap-1 rounded-[10px] border border-ink/10 bg-white p-4">
              <h3 className="text-[13px] font-bold text-ink">{title}</h3>
              <p className="text-[13px] leading-5 text-muted">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-0">
        {specLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="group flex flex-col gap-[3px] rounded-[10px] bg-ink p-4 transition-colors hover:bg-ink/90"
          >
            <span className="text-sm font-bold text-white">{link.title}</span>
            <span className="text-xs text-white/70 transition-colors group-hover:text-white">
              Full specification →
            </span>
          </Link>
        ))}
      </Reveal>
    </Section>
  );
}

/* ---------- Security, privacy & governance ---------- */

const protectionDomains = [
  {
    title: "Security",
    objective: "Protect identities, workspaces, services and secrets.",
    withheld:
      "Invented encryption algorithms, SOC/ISO certifications, penetration-test outcomes, bug bounties, data-center detail, SSO/MFA specifics, key-management or incident claims.",
    href: "/trust/security",
  },
  {
    title: "Privacy",
    objective: "Minimize unnecessary collection and provide clear controls.",
    withheld:
      "Invented retention periods, lawful bases, rights-response times, cookie behavior, subprocessor lists, sale/sharing statements, DPO contact or regional compliance claims.",
    href: "/trust/privacy",
  },
];

export function SecurityPrivacyGovernanceSection() {
  return (
    <Section
      id="security-privacy-governance"
      className="bg-white"
      eyebrow="Approved Objectives Only — Not Invented Controls"
      title="Protection, privacy and jurisdiction-aware governance, stated plainly."
      lede="The Trust Center states the approved public objective for each domain and routes to the destination that owns verified controls and current wording — it never publishes technical detail solely to look transparent."
    >
      <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_420px]">
        {protectionDomains.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05} className="h-full">
            <div className="flex h-full min-h-[280px] flex-col gap-3 rounded-2xl border border-ink/10 bg-surface p-6 sm:p-[27px]">
              <h3 className="text-base font-bold text-ink">{item.title}</h3>
              <p className="text-sm leading-5 text-ink-soft">{item.objective}</p>
              <p className="text-xs leading-5 text-muted">
                <strong className="font-bold text-yellow-700">Will not publish:</strong> {item.withheld}
              </p>
              <div className="mt-auto pt-4">
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
                >
                  Open {item.title} →
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
        <SidePhoto
          src={`${IMAGE_DIR}/trust-center-protection-meeting.webp`}
          alt="Colleagues laughing around a meeting-room table with laptops"
          width={420}
          className="md:col-span-2 xl:col-span-1"
        />
      </div>
    </Section>
  );
}

/* ---------- Responsible AI ---------- */

export function ResponsibleAiSection() {
  return (
    <Section
      id="responsible-ai"
      className="bg-surface"
      eyebrow="AI Assists. It Does Not Become the Source."
      tone="amber"
      title="AI can help navigate the evidence. It does not become the evidence."
    >
      <Reveal delay={0.1} className="mt-5 sm:mt-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-ink md:grid-cols-2">
          <div className="border-white/10 md:border-r">
            <p className="border-b border-white/10 px-6 pb-6 pt-5 text-xs font-bold uppercase tracking-wide text-accent-violet">
              AI may assist with
            </p>
            <p className="px-6 py-6 text-sm leading-6 text-white/80 md:pb-10 md:pt-11">
              Search and discovery; organization; comparison; summarization; change identification;
              explanation; contradiction surfacing.
            </p>
          </div>
          {/* Right column is intentionally empty in the approved design. */}
          <div aria-hidden="true" className="hidden md:block">
            <div className="h-[61px] border-b border-white/10" />
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.15} className="mt-3">
        <p className="max-w-[780px] text-sm leading-6 text-muted">
          AI-assisted content carries persistent provenance treatment distinct from source evidence —
          text or icon, never color alone.
        </p>
        <div className="mt-4">
          <Link
            href="/trust/ai-principles"
            className="text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
          >
            Open AI Principles →
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- Operations ---------- */

const operationsCards = [
  ["Principle", "Communicate supported coverage, availability and service status truthfully."],
  ["Status source", "Only an authoritative service-status system may supply live operational state."],
  [
    "Metrics",
    "No numeric uptime, SLA, incident-free duration, RTO/RPO or recovery claim unless measured/contractual evidence and publication approval exist.",
  ],
];

export function OperationsSection() {
  return (
    <section id="operations" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_312px] xl:gap-3">
          <div>
            <Reveal>
              <SectionIntro
                eyebrow="Never Derived From Marketing Copy"
                title="Operational state comes only from an authoritative status service."
              >
                Supported coverage, availability and service state are communicated truthfully. No uptime
                percentage, SLA or incident-free claim appears without measured or contractual evidence.
              </SectionIntro>
            </Reveal>
            <div className="mt-9 grid grid-cols-1 gap-2.5 md:grid-cols-3">
              {operationsCards.map(([title, body], index) => (
                <Reveal key={title} delay={index * 0.05} className="h-full">
                  <div className="flex h-full min-h-[128px] flex-col gap-1.5 rounded-xl border border-ink/10 bg-surface p-[18px]">
                    <h3 className="text-[13px] font-bold text-ink">{title}</h3>
                    <p className="text-[13px] leading-5 text-muted">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <SidePhoto
            src={`${IMAGE_DIR}/trust-center-operations-lounge.webp`}
            alt="Colleagues chatting over coffee in a bright office lounge"
            width={312}
            className="rounded-xl xl:mt-1.5"
          />
        </div>
        <Reveal delay={0.1} className="mt-9">
          <Link
            href="/support/system-status"
            className="text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
          >
            View Service Status →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- Scope & limits ---------- */

const nonClaims = [
  `No "bank-grade," "military-grade," "enterprise-grade security," "fully compliant," "GDPR compliant," "SOC 2 certified," "ISO certified," "zero-trust," "zero incidents" or equivalent assurance language unless the exact claim and scope are evidenced and approved.`,
  "No implication that global architecture equals universal live market, data, privacy or jurisdiction coverage.",
  "No uptime or resilience promise beyond authoritative measured or contractual data.",
  "No customer logos, endorsements, audit quotes, rankings or awards without explicit publication rights and evidence.",
];

export function ScopeLimitsSection() {
  return (
    <section id="scope-limits" className="scroll-mt-32 bg-ink py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Explicit Boundaries, Not Fine Print" tone="amber" title="What this page will not claim." inverted>
            Making unsupported assurance language impossible to publish is part of the design, not a
            disclaimer bolted on afterward.
          </SectionIntro>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-3.5 xl:grid-cols-[minmax(0,1fr)_633px]">
          <ul className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
            {nonClaims.map((claim, index) => (
              <Reveal key={index} as="li" delay={index * 0.05} className="h-full">
                <p className="h-full rounded-xl border border-white/15 bg-white/5 p-5 text-sm leading-[22px] text-white/80">
                  {claim}
                </p>
              </Reveal>
            ))}
          </ul>
          <Reveal
            delay={0.2}
            className="relative aspect-video overflow-hidden rounded-xl border border-white/10 md:aspect-[21/9] xl:aspect-auto"
          >
            <Image
              src={`${IMAGE_DIR}/trust-center-limits-laptops.webp`}
              alt="Two colleagues smiling while working on laptops at a long table"
              fill
              sizes="(min-width: 1280px) 633px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Enterprise ---------- */

const reviewRoutes = [
  { label: "Security", href: "/trust/security" },
  { label: "Privacy", href: "/trust/privacy" },
  { label: "Data Rights", href: "/trust/data-rights" },
  { label: "Global Data Governance", href: "/trust/global-data-governance" },
  { label: "AI Principles", href: "/trust/ai-principles" },
  { label: "Service Status", href: "/support/system-status" },
  { label: "Evidence Standards", href: "/trust/evidence-standards" },
];

export function EnterpriseSection() {
  return (
    <section id="enterprise" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_304px] lg:gap-6 xl:gap-3">
          <div>
            <Reveal>
              <SectionIntro
                eyebrow="Public Trust Information, Never Lead-Gated"
                tone="amber"
                title="A fast path for procurement, security and privacy review."
              >
                Security, privacy, data-rights, governance, AI and operations reviewers can reach the
                relevant public material from this one stable surface, without a lead-capture form
                standing in front of it.
              </SectionIntro>
            </Reveal>
            <Reveal delay={0.1} className="mt-9 flex flex-wrap gap-2.5">
              {reviewRoutes.map((route) => (
                <Link
                  key={route.label}
                  href={route.href}
                  className="rounded-full border border-ink/15 bg-white px-[18px] py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
                >
                  {route.label}
                </Link>
              ))}
            </Reveal>
            <Reveal delay={0.15} className="mt-8">
              <LinkButton href="/company/contact" className="w-full px-[26px] py-3.5 sm:w-auto">
                Contact for enterprise evaluation
              </LinkButton>
            </Reveal>
          </div>
          <Reveal
            delay={0.2}
            className="relative mx-auto aspect-[304/355] w-full max-w-[304px] overflow-hidden rounded-2xl border border-ink/10 lg:mx-0"
          >
            <Image
              src={`${IMAGE_DIR}/trust-center-enterprise-founders.webp`}
              alt="Two smiling colleagues posing together in an office"
              fill
              sizes="304px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Final CTA ---------- */

export function FinalCtaSection() {
  return (
    <section className="border-t border-ink/8 bg-white py-16 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[720px] flex-col items-center gap-[18px] text-center">
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[40px] lg:leading-[48px]">
            Evaluate Talvrin with the evidence in view.
          </h2>
          <p className="max-w-[660px] text-base leading-[26px] text-muted">
            Explore the trust domains that matter to your research, procurement, governance or security
            review. Public trust information remains available without a lead gate.
          </p>
          <div className="flex w-full flex-col items-stretch gap-4 pt-2 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="#trust-domains" className="px-7 py-[15px] text-base">
              Explore Trust Domains
            </LinkButton>
            <LinkButton href="/company/contact" variant="ghost" className="px-7 py-[15px] text-base">
              Contact
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
