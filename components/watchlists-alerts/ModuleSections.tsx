import Link from "next/link";
import { BADGE, Chips, ModuleSection, TileGrid, type BadgeTone } from "./shared";

export function WatchlistsSection() {
  return (
    <ModuleSection
      id="watchlists"
      surface="white"
      eyebrow="Module · Watchlists"
      tone="violet"
      heading="Organize the markets, issuers and research questions you follow."
      lede="A watchlist is a saved research universe, not a portfolio or a ranked recommendation. It can conceptually hold issuers, securities, economies, policy topics and saved source queries, so a recurring research interest doesn't need to be rebuilt from scratch."
      image="wa-watchlists-laptop.webp"
      imageAlt="Two colleagues looking at a laptop together"
    >
      <TileGrid
        tiles={[
          { title: "Issuer", body: "A company or entity whose disclosures and filings you follow." },
          { title: "Security", body: "A specific instrument tied to an issuer or sovereign." },
          { title: "Economy", body: "A country or region’s macro releases and policy evidence." },
        ]}
      />
      <p className="mt-5 text-xs text-slate-600">
        Example scopes above are visually labeled demonstration only — actual options depend on the
        rights and coverage manifest.
      </p>
      <Link
        href="/product/watchlists"
        className="mt-6 inline-block text-base font-semibold text-accent-violet transition-colors hover:text-ink"
      >
        Explore Watchlists →
      </Link>
    </ModuleSection>
  );
}

export function BuilderSection() {
  return (
    <ModuleSection
      surface="surface"
      eyebrow="Module · Watchlist builder"
      tone="amber"
      heading="Define a research universe that can be revisited."
      lede="A watchlist carries a name, description, constituents, visibility and an owner, with an audit trail of who last updated it. A real watchlist is never shown without sign-in and role-based access."
      image="wa-builder-discussion.webp"
      imageAlt="Man explaining an idea to a colleague"
      imageWidth={642}
    >
      <Chips
        items={["Saved", "Unsaved", "Duplicate name", "Over capacity", "Permission denied", "Revoked"]}
      />
    </ModuleSection>
  );
}

export function SourcesSection() {
  return (
    <ModuleSection
      surface="white"
      eyebrow="Module · Monitored sources"
      tone="violet"
      heading="Know what evidence is eligible for monitoring."
      lede="Only approved source classes are eligible for monitoring, and each is subject to data-feed rights, latency and coverage approval before a watchlist can be gated to it."
      image="wa-sources-desk.webp"
      imageAlt="Two colleagues reviewing a phone and laptop at a desk"
    >
      <TileGrid
        tiles={[
          { title: "Filings", body: "Issuer disclosures and regulatory filings from named publishers." },
          {
            title: "Monetary & economic releases",
            body: "Central-bank statements and official economic data.",
          },
          {
            title: "Policy & regulator notices",
            body: "Public policy and regulator publications affecting markets.",
          },
        ]}
      />
      <div className="mt-5">
        <Chips tone="warning" items={["Unsupported feed", "Partial source", "Stale timestamp"]} />
      </div>
    </ModuleSection>
  );
}

export function RulesSection() {
  return (
    <ModuleSection
      surface="surface"
      eyebrow="Module · Alert rules"
      tone="amber"
      heading="Follow changes that could affect your question."
      lede="Rules are deterministic and explainable — never a covert financial-recommendation engine. Illustrative triggers include:"
      image="wa-rules-dashboard.webp"
      imageAlt="Two colleagues discussing charts on a desktop monitor"
    >
      <TileGrid
        tileClass="bg-white"
        tiles={[
          { body: "A new primary release is published" },
          { body: "A source document is revised" },
          { body: "A saved rule condition is matched" },
        ]}
      />
      <div className="mt-6">
        <Chips
          label="Rule states"
          items={["Draft", "Valid", "Invalid", "Disabled", "Unsupported", "Active"]}
        />
      </div>
    </ModuleSection>
  );
}

export function DeliverySection() {
  return (
    <ModuleSection
      surface="white"
      eyebrow="Module · Delivery & preferences"
      tone="violet"
      heading="Choose how often you hear about a change."
      lede="Only independently approved and operational channels appear, each with explicit opt-in, opt-out and unsubscribe controls. No address or toggle is shown for a channel that isn't live."
      image="wa-delivery-table.webp"
      imageAlt="Overhead view of a team working around a table with laptops"
      imageWidth={419}
    >
      <TileGrid
        columns={2}
        tiles={[
          { title: "In-app", body: "Alerts appear inside the Talvrin workspace inbox." },
          { title: "Digest", body: "A periodic rollup instead of individual notifications." },
        ]}
      />
      <p className="mt-5 text-xs text-slate-600">
        Consent, batching, quiet hours and suppression are owner-bound and never silently changed.
      </p>
    </ModuleSection>
  );
}

const alertFields = [
  ["Watched object", "U.S. GDP, Q3 2026"],
  ["Triggering event", "Source revision"],
  ["Evidence link", "bea.gov (original release)"],
  ["Event time", "24 Oct 2026, 08:30 ET"],
  ["Publication time", "24 Oct 2026, 08:35 ET"],
  ["Effective period", "Q3 2026"],
  ["Rule", "Source revision — matched"],
  ["Summary label", "AI-assisted, source-linked"],
];

function ExampleTag() {
  return (
    <span className="shrink-0 rounded-full bg-surface px-2 py-[3px] text-xs font-semibold text-slate-600">
      ILLUSTRATIVE EXAMPLE
    </span>
  );
}

export function AlertEvidenceSection() {
  return (
    <ModuleSection
      surface="surface"
      eyebrow="Module · Alert evidence"
      tone="amber"
      heading="Why you received this alert."
      lede="Every alert card keeps the watched object, the triggering event and the original source link together, so the change is traceable back to its evidence."
      image="wa-evidence-tablet.webp"
      imageAlt="People gathered around a tablet showing a document"
      imageWidth={454}
    >
      <article className="max-w-[720px] rounded-2xl bg-white p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-base font-bold text-ink">Revised Q3 GDP release — United States</h3>
          <ExampleTag />
        </div>
        <dl className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {alertFields.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1">
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-600">{k}</dt>
              <dd className="text-sm text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </article>
      <p className="mt-5 text-xs text-slate-600">
        Source provenance and version are captured with every alert — no fabricated sample real
        company.
      </p>
    </ModuleSection>
  );
}

const assumptionLinks: { label: string; tone: BadgeTone; body: string }[] = [
  { label: "SUPPORTS", tone: "violet", body: "Latest policy statement language on holding rates steady" },
  { label: "UPDATES", tone: "amber", body: "Prior meeting’s minutes and dot-plot context" },
  { label: "CHALLENGES", tone: "rose", body: "Latest core inflation print running above forecast" },
];

export function ResearchViewSection() {
  return (
    <ModuleSection
      surface="surface"
      eyebrow="Module · Research-view link"
      tone="amber"
      heading="Connect alerts back to saved research."
      lede="New evidence can support, challenge or update a tracked assumption — but a saved view is never rewritten automatically without your review."
      image="wa-research-view-team.webp"
      imageAlt="Colleagues laughing together during an informal meeting"
      imageWidth={482}
    >
      <article className="max-w-[760px] rounded-2xl bg-white p-7">
        <h3 className="text-base font-bold text-ink">
          Saved assumption: Policy rate stays on hold through year end.
        </h3>
        <div className="mt-1.5">
          <ExampleTag />
        </div>
        <ul className="mt-4">
          {assumptionLinks.map((l) => (
            <li
              key={l.label}
              className="flex flex-wrap items-center gap-3.5 border-t border-ink/10 py-3.5"
            >
              <span className={`rounded-md px-2.5 py-[5px] text-xs font-bold tracking-wide ${BADGE[l.tone]}`}>
                {l.label}
              </span>
              <span className="text-sm text-slate-700">{l.body}</span>
            </li>
          ))}
        </ul>
      </article>
    </ModuleSection>
  );
}

export function NoiseControlSection() {
  return (
    <ModuleSection
      surface="surface"
      eyebrow="Module · Noise control"
      tone="amber"
      heading="Meaningful changes, not more noise."
      lede="Changes are deduplicated and grouped by source event, with an explainable severity label — not an unmeasured claim about accuracy or speed."
      image="wa-noise-review.webp"
      imageAlt="Woman reviewing drawings with a colleague"
      imageWidth={420}
    >
      <TileGrid
        columns={2}
        tileClass="bg-white"
        tiles={[
          { body: "Deduplication across overlapping source updates" },
          { body: "Explainable severity and change-type classification" },
        ]}
      />
      <div className="mt-6">
        <Chips
          label="Degraded-feed states"
          items={["Alert storm", "Delayed feed", "Rate limited", "Digest empty"]}
        />
      </div>
    </ModuleSection>
  );
}
