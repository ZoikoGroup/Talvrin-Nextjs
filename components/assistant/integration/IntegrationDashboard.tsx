import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  Bell,
  BookOpen,
  Check,
  Database,
  Download,
  FileCheck2,
  GitBranch,
  KeyRound,
  Layers,
  Lock,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  TestTube2,
  Workflow,
  X,
} from "lucide-react";
import { Pill } from "@/components/assistant/ui/Badge";
import { PageIntro, PageShell, Panel } from "@/components/assistant/ui/Panel";

interface Surface {
  wf: string;
  surface: string;
  route: string;
  api: string;
  state: string;
  open?: string;
  openLabel?: string;
  note: string;
}

const SURFACES: Surface[] = [
  {
    wf: "WF-01",
    surface: "Public research entry",
    route: "/assistant",
    api: "GET /api/assistant/config · POST /api/assistant/research (Idempotency-Key, 202, 429)",
    state: "Public · functional",
    open: "/assistant",
    note: "Scopes, limits and starter intents come from config and fail closed. Drafts hand off through tab storage, never the URL.",
  },
  {
    wf: "WF-02",
    surface: "Conversation and published answer",
    route: "/assistant/session/[ref]",
    api: "GET /research/[ref] · /answer · /copy · POST /turns · /cancel · DELETE /research/[ref]",
    state: "Public · functional",
    open: "/assistant",
    openLabel: "Start",
    note: "Polling with eventSeq stands in for SSE. Headline and summary are claim-bound. Revoked, rate-limited and failed states carry a request reference.",
  },
  {
    wf: "WF-03",
    surface: "Evidence Inspector",
    route: "/assistant/session/[ref]?panel=evidence",
    api: "GET /research/[ref]/evidence · /sources/[sourceId] · POST /citations/copy",
    state: "Public · functional",
    note: "Evidence is fetched per answer version and rights are re-checked on open. Excerpts are filtered on the server; attribution never says verified for licensed records.",
  },
  {
    wf: "WF-04",
    surface: "Comparison builder",
    route: "/assistant/compare",
    api: "GET /comparisons/catalog · GET /instruments/search · POST /comparisons/preflight",
    state: "Preview flag",
    open: "/assistant/compare",
    note: "Four-stage builder with authorised resolver, versioned method and repair routes. Blocked items stay blocked; bond yields are flag-gated off.",
  },
  {
    wf: "WF-05",
    surface: "Comparison results",
    route: "/assistant/compare/[ref]",
    api: "POST /comparisons (Idempotency-Key) · GET /comparisons/[ref]",
    state: "Preview flag",
    open: "/assistant/compare",
    openLabel: "Builder",
    note: "Typed cells (value, withheld, contested, not applicable), deltas only for eligible pairs with formula and denominator, mobile metric cards, no progress percentage.",
  },
  {
    wf: "WF-06",
    surface: "Research history and session management",
    route: "/assistant/history",
    api: "DELETE /research/[ref] on clear · tab-scoped session list",
    state: "Guest · scoped",
    open: "/assistant/history",
    note: "Saved research is flag-off and visibly locked. Guest items are never relabelled as saved; clearing revokes server reads.",
  },
  {
    wf: "WF-07",
    surface: "Settings and data controls",
    route: "/assistant/settings",
    api: "GET /settings/capabilities · GET/PUT /settings (revision, If-Match, 412)",
    state: "Guest · scoped",
    open: "/assistant/settings",
    note: "Draft/Save workflow. Integrity controls are fixed and shown locked. Clearing is scoped and explained.",
  },
  {
    wf: "WF-08",
    surface: "Help, support and research escalation",
    route: "/assistant/help · /assistant/report",
    api: "GET /api/assistant/help · POST /api/assistant/cases",
    state: "Public · functional",
    open: "/assistant/help",
    note: "Claim-safe report context, idempotent case receipt and explicit non-determination language.",
  },
  {
    wf: "WF-09",
    surface: "Updates, alerts and follow-up",
    route: "/assistant/updates",
    api: "GET /updates · POST /updates/read · PATCH/POST /updates/[id] · /alerts · /alerts/preflight · PATCH /alerts/[id]",
    state: "Guest gate · demo account",
    open: "/assistant/updates",
    note: "Server-held inbox and versioned rules. A rule is Active only after a server commit; drafts stay local. No scheduler, email or push delivery exists.",
  },
  {
    wf: "WF-10",
    surface: "Export, sharing and citation packages",
    route: "/assistant/export",
    api: "/exports/entitlement · POST /exports/preflight · /exports · GET/DELETE /exports/[id] · POST+GET /download (one-use token)",
    state: "Guest gate · demo account",
    open: "/assistant/export",
    note: "Server-held demo grant, pinned answer revision, typed CSV fact table, one-use download tokens re-authorised at fulfilment. Sharing is off.",
  },
  {
    wf: "WF-11",
    surface: "Authentication and entitlements",
    route: "/assistant/access",
    api: "GET /access/context · /access/entitlements · POST /access/evaluate · /auth/intents · /auth/logout",
    state: "Guest gate · demo account",
    open: "/assistant/access",
    note: "No identity provider, billing service or real entitlement. Sign-in, passkey and recovery are demonstration states.",
  },
  {
    wf: "WF-12",
    surface: "End-to-end integration handoff",
    route: "/assistant/integration",
    api: "No user API · traceability only",
    state: "Trace only",
    note: "Cross-screen invariants, ADR conflicts and release gates. This is not a thirteenth user feature.",
  },
];

const ADRS = [
  {
    id: "ADR-012-01",
    title: "Public research namespace",
    observed: [
      "WF-01: /api/public/assistant/research",
      "WF-02: /public/research/{jobRef}",
    ],
    issue:
      "The BFF namespace, job creation semantics and public identifier shape are not agreed. The demo uses /api/assistant/research only as an internal fixture.",
    needed:
      "Choose the public BFF namespace, creation verb, job reference semantics and versioning. Record compatibility and deprecation.",
  },
  {
    id: "ADR-012-02",
    title: "Comparison create/execute/read",
    observed: [
      "WF-04: /v1/public/comparisons and /preflight",
      "WF-05: /v1/public/research/comparisons/execute",
    ],
    issue:
      "Create, execute and read are spread across two path families. The demo standardises on /api/assistant/comparisons without claiming this is canonical.",
    needed:
      "Pick canonical create, execute, status and result endpoints; map aliases with a dated deprecation period.",
  },
  {
    id: "ADR-012-03",
    title: "Guest session identity and destruction",
    observed: [
      "WF-06: /v1/guest/session/items and /v1/research/library",
      "WF-07: /v1/chat/guest/session/clear",
    ],
    issue:
      "Production session ownership is unresolved. The demo binds every job, comparison and export to a per-tab session key header and deletes server jobs on clear; this is not an HttpOnly server session.",
    needed:
      "Agree anonymous session identity, retention, item-level clear semantics and the prohibition on cross-account reads.",
  },
  {
    id: "ADR-012-04",
    title: "Async job envelope for alerts and exports",
    observed: [
      "WF-09: /v1/alerts",
      "WF-10: /v1/research/{id}/exports and /shares",
    ],
    issue:
      "Two asynchronous surfaces need one envelope. The demo uses separate local stores and polling; there is no shared event or delivery contract.",
    needed:
      "Define a common accepted-job envelope, status model, idempotency key, delivery recheck points and audit trail.",
  },
  {
    id: "ADR-012-05",
    title: "One access decision vocabulary",
    observed: [
      "WF-11: /v1/access/evaluate",
      "WF-03: /public/research/{jobId}/evidence-access",
    ],
    issue:
      "The policy decision shape and capability audience differ between feature access and evidence access. The demo uses static synthetic capabilities.",
    needed:
      "Define a shared decision response with decision ID, reason codes, policy version, evaluated-at and accepted audiences.",
  },
  {
    id: "ADR-012-06",
    title: "Shared evidence/version typing",
    observed: [
      "WF-02: answerVersion and claimMap",
      "WF-05: comparison result version and evidence",
    ],
    issue:
      "The demo types PublishedAnswer.answerVersion but comparison results use ref/generatedAt without a shared evidence-version type.",
    needed:
      "Specify a common evidence object and version identifier across answer and comparison modalities before schema freeze.",
  },
];

const INVARIANTS = [
  {
    icon: ShieldCheck,
    title: "Evidence before publication",
    body: "No claim or metric publishes without a rights-eligible authoritative source, attribution state and reproducible lineage.",
  },
  {
    icon: Lock,
    title: "Rights are per action",
    body: "Fetch, store, derive, display, quote, export and redistribute are separate decisions. Unknown licence configuration denies.",
  },
  {
    icon: Scale,
    title: "Missing is not zero",
    body: "Missing, withheld, restricted, contested and unavailable remain visibly distinct. No estimate fills a rights gap.",
  },
  {
    icon: GitBranch,
    title: "Conflicts are surfaced",
    body: "Contradictory official facts are displayed together with provenance. They are never averaged into a synthetic value.",
  },
  {
    icon: AlertTriangle,
    title: "No advice or scores",
    body: "No buy, sell or hold language, issuer score, target price or personalised recommendation is generated.",
  },
  {
    icon: KeyRound,
    title: "Identity is not entitlement",
    body: "Authentication never substitutes for feature authorization, quota or source-specific rights.",
  },
  {
    icon: Workflow,
    title: "Immutable result versions",
    body: "Published answers and comparisons keep stable references. Reopening rechecks rights instead of serving stale private payloads.",
  },
  {
    icon: Layers,
    title: "Guest scope stays temporary",
    body: "Guest research is bound to one browser tab. Copied references do not open elsewhere. Signing in imports nothing without an explicit, per-item choice.",
  },
];

const RELEASE_GATES = [
  {
    id: "G1",
    title: "Wireframe approval",
    state: "Open",
    body: "All twelve documents remain PROPOSED. No deployment approval is implied by this build.",
  },
  {
    id: "G2",
    title: "API contract freeze",
    state: "Blocked",
    body: "The six ADR conflicts above require signed decisions, schema digests and code owners.",
  },
  {
    id: "G3",
    title: "Identity and entitlements",
    state: "Blocked",
    body: "No IdP, passkey provider, session service, commercial catalogue or effective-entitlement service is connected.",
  },
  {
    id: "G4",
    title: "Source rights and policy engine",
    state: "Blocked",
    body: "Synthetic source fixtures do not prove a licence. A policy decision service and per-source rights matrix are required.",
  },
  {
    id: "G5",
    title: "Delivery and retention",
    state: "Blocked",
    body: "No scheduler, verified channels, object store, signed manifests, malware scanning or revocation service exists.",
  },
  {
    id: "G6",
    title: "Accessibility and security evidence",
    state: "Open",
    body: "WCAG 2.2 AA manual QA, 320 px and 400% checks, threat-model tests and abuse/rate-limit evidence are still required.",
  },
];

const VERIFICATION = [
  {
    check: "TypeScript",
    command: "npx tsc --noEmit",
    status: "Passed locally",
    note: "No type errors after the conformance pass against WF-01 to WF-12.",
  },
  {
    check: "Production build",
    command: "npm run build",
    status: "Passed locally",
    note: "Must be re-run after the conformance pass. Manual UI sign-off is still required.",
  },
  {
    check: "CSV injection tests",
    command: "node --test tests/assistant/csv.test.mjs",
    status: "Automated",
    note: "Covers = + - @, tab, CR/LF, leading whitespace and full-width triggers. The spreadsheet open/save/reopen matrix (AC-30) is still manual.",
  },
  {
    check: "Manual browser journey",
    command: "Desktop · 390 px · 320 px · keyboard",
    status: "Required before release",
    note: "Not yet performed. Automated route and API checks are not a substitute for a human desktop, mobile, keyboard and 320 px pass.",
  },
  {
    check: "Assistive technology",
    command: "Screen reader · 200%/400% zoom",
    status: "Not evidenced",
    note: "Cannot be claimed from code inspection alone.",
  },
  {
    check: "Dependency audit",
    command: "npm audit",
    status: "Open · 4 advisories",
    note: "The pinned Next.js 16.3.5 tree reports one critical and three high advisories. A newer Next release is available, but the framework upgrade needs a separate compatibility review; this demo does not claim a clean audit.",
  },
];

const REPLACEMENTS = [
  {
    fixture: "lib/assistant/answers.ts, sources.ts, methods.ts",
    real: "Retrieval, verification, calculation and publication services",
  },
  {
    fixture: "lib/assistant/research-store.ts, comparison-store.ts",
    real: "Durable job store, queue and immutable result versions",
  },
  {
    fixture: "lib/assistant/exports.ts, artifacts.ts",
    real: "Hardened renderer, object store, signed manifest and revocation",
  },
  {
    fixture: "lib/assistant/notifications-data.ts, /api/assistant/updates, /alerts",
    real: "Event catalogue, scheduler, consent and verified delivery adapters",
  },
  {
    fixture: "components/assistant/shell/DemoModeProvider.tsx",
    real: "OIDC/PKCE or approved provider, rotated session and effective entitlements",
  },
  {
    fixture: "app/api/assistant/* (contract: docs/assistant/openapi.yaml)",
    real: "Versioned BFF gateway with policy decisions and the same typed error envelope",
  },
];

const NAV = [
  { href: "#trace", label: "Screen trace" },
  { href: "#adrs", label: "ADR conflicts" },
  { href: "#invariants", label: "Invariants" },
  { href: "#gates", label: "Release gates" },
  { href: "#verification", label: "Verification" },
  { href: "#replacement", label: "Replacement map" },
];

const STATE_TONE: Record<string, "ok" | "warn" | "danger" | "neutral"> = {
  "Public · functional": "ok",
  "Guest · scoped": "warn",
  "Guest gate · demo account": "warn",
  "Preview flag": "warn",
  "Trace only": "neutral",
};

export default function IntegrationDashboard() {
  return (
    <PageShell width="wide" className="pt-8">
      <PageIntro
        eyebrow="WF-12 · end-to-end integration and engineering handoff"
        title="A trace, not a release."
        lead="This is the terminal integration map, not a thirteenth user feature. It records what the demo implements, which cross-screen invariants hold, which API conflicts remain open and what evidence is still required before release."
        meta={
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone="warn" dot>
              PROPOSED · not approved for release
            </Pill>
            <Pill>12 of 12 · controlled handoff</Pill>
            <Pill tone="neutral">Talvrin Research Assistant</Pill>
          </div>
        }
        actions={
          <Link
            href="/assistant"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-as-line bg-as-panel/60 px-3 text-[11px] font-semibold text-platinum hover:border-iris/40"
          >
            Open the assistant
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        }
      />

      <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
        <aside className="lg:sticky lg:top-20">
          <Panel className="p-3">
            <p className="px-1 font-mono text-[11px] uppercase tracking-[0.14em] text-haze/70">
              Handoff index
            </p>
            <nav aria-label="Integration sections" className="mt-2">
              <ul className="space-y-0.5">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex min-h-11 items-center rounded-lg px-2.5 text-[12px] text-haze hover:bg-midnight-soft/60 hover:text-platinum"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Panel>

          <Panel className="mt-3 p-3">
            <p className="px-1 font-mono text-[11px] uppercase tracking-[0.14em] text-haze/70">
              Non-claims
            </p>
            <ul className="mt-1.5 space-y-1">
              {[
                "No deployed API",
                "No source partnership",
                "No licence grant",
                "No live price feed",
                "No subscription or SLA",
                "No legal or brand clearance",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-1.5 px-1 py-0.5 text-[11px] leading-4 text-haze/80"
                >
                  <X
                    aria-hidden="true"
                    className="mt-0.5 h-2.5 w-2.5 shrink-0 text-danger/80"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Panel>
        </aside>

        <div className="min-w-0 space-y-4">
          <section
            id="trace"
            aria-labelledby="trace-heading"
            className="scroll-mt-24"
          >
            <Panel className="overflow-hidden">
              <div className="border-b border-as-line/70 p-4 sm:p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-iris-soft">
                  02 · screen-to-route trace
                </p>
                <h2
                  id="trace-heading"
                  className="mt-1 text-lg font-semibold text-platinum"
                >
                  Eleven surfaces, one shared evidence boundary
                </h2>
                <p className="mt-1 text-[11px] leading-6 text-haze">
                  Each row still owns its detailed contract in the originating
                  wireframe. This page only reconciles routing, state and
                  cross-boundary checks.
                </p>
              </div>

              <ul className="divide-y divide-as-line/50">
                {SURFACES.map((row) => (
                  <li key={row.wf} className="p-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="font-mono text-[11px] font-semibold text-iris-soft">
                            {row.wf}
                          </span>
                          <h3 className="text-[12px] font-semibold text-platinum">
                            {row.surface}
                          </h3>
                          <Pill tone={STATE_TONE[row.state] ?? "neutral"}>
                            {row.state}
                          </Pill>
                        </div>
                        <p className="mt-1 break-all font-mono text-[11px] text-haze">
                          {row.route}
                        </p>
                        <p className="mt-1 break-all font-mono text-[11px] leading-4 text-haze/70">
                          {row.api}
                        </p>
                        <p className="mt-1 text-[12px] leading-5 text-haze">
                          {row.note}
                        </p>
                      </div>
                      {row.open ? (
                        <Link
                          href={row.open}
                          className="inline-flex min-h-11 shrink-0 items-center gap-1 rounded-lg px-2 text-[11px] font-medium text-iris-soft hover:bg-iris/[0.08] hover:text-white"
                        >
                          {row.openLabel ?? "Open"}
                          <ArrowUpRight aria-hidden="true" className="h-3 w-3" />
                        </Link>
                      ) : (
                        <span className="shrink-0 text-[11px] text-haze/60">
                          {row.wf === "WF-12" ? "This page" : "Needs a live record"}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Panel>
          </section>

          <section
            id="adrs"
            aria-labelledby="adrs-heading"
            className="scroll-mt-24"
          >
            <Panel className="p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-iris-soft">
                    07 · contract reconciliation
                  </p>
                  <h2
                    id="adrs-heading"
                    className="mt-1 text-lg font-semibold text-platinum"
                  >
                    Six conflicts. No silent winner.
                  </h2>
                  <p className="mt-1 max-w-2xl text-[11px] leading-6 text-haze">
                    Earlier documents propose different endpoints. A newer
                    mock-up is not a decision. Each conflict needs a signed ADR
                    with method, version, schema digest, guest boundary, rights
                    operation, idempotency and code owners.
                  </p>
                </div>
                <Pill tone="danger">6 unresolved</Pill>
              </div>

              <div className="mt-3 grid gap-2 xl:grid-cols-2">
                {ADRS.map((adr) => (
                  <article
                    key={adr.id}
                    className="rounded-xl border border-danger/20 bg-danger/[0.03] p-3.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-danger">
                        {adr.id}
                      </span>
                      <Pill tone="danger">Unresolved</Pill>
                    </div>
                    <h3 className="mt-1 text-[12px] font-semibold text-platinum">
                      {adr.title}
                    </h3>
                    <ul className="mt-1.5 space-y-1">
                      {adr.observed.map((item) => (
                        <li
                          key={item}
                          className="break-all font-mono text-[11px] leading-4 text-haze"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-1.5 text-[12px] leading-5 text-haze">
                      {adr.issue}
                    </p>
                    <p className="mt-1.5 border-t border-danger/15 pt-1.5 text-[11px] leading-4 text-platinum/80">
                      <span className="font-semibold text-warn">Needed: </span>
                      {adr.needed}
                    </p>
                  </article>
                ))}
              </div>
            </Panel>
          </section>

          <section
            id="invariants"
            aria-labelledby="invariants-heading"
            className="scroll-mt-24"
          >
            <Panel className="p-4 sm:p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-iris-soft">
                01 · cross-screen invariants
              </p>
              <h2
                id="invariants-heading"
                className="mt-1 text-lg font-semibold text-platinum"
              >
                What must survive every screen
              </h2>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {INVARIANTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-as-line/70 bg-midnight-soft/20 p-3"
                    >
                      <p className="flex items-center gap-1.5 text-[12px] font-semibold text-platinum">
                        <Icon
                          aria-hidden="true"
                          className="h-3.5 w-3.5 text-iris-soft"
                        />
                        {item.title}
                      </p>
                      <p className="mt-1 text-[11px] leading-4 text-haze">
                        {item.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Panel>
          </section>

          <section
            id="gates"
            aria-labelledby="gates-heading"
            className="scroll-mt-24"
          >
            <Panel className="p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-iris-soft">
                    14/15 · release readiness
                  </p>
                  <h2
                    id="gates-heading"
                    className="mt-1 text-lg font-semibold text-platinum"
                  >
                    Gates that are still closed
                  </h2>
                  <p className="mt-1 text-[11px] leading-6 text-haze">
                    A functional interface is not a launch decision. These gates
                    require named owners and dated evidence.
                  </p>
                </div>
                <Pill tone="warn">No release approval</Pill>
              </div>

              <ul className="mt-3 space-y-2">
                {RELEASE_GATES.map((gate) => (
                  <li
                    key={gate.id}
                    className="flex gap-2.5 rounded-xl border border-as-line/70 p-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-as-line bg-midnight-soft font-mono text-[11px] text-haze">
                      {gate.id}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <p className="text-[11px] font-semibold text-platinum">
                          {gate.title}
                        </p>
                        <Pill tone={gate.state === "Blocked" ? "danger" : "warn"}>
                          {gate.state}
                        </Pill>
                      </div>
                      <p className="mt-1 text-[11px] leading-4 text-haze">
                        {gate.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Panel>
          </section>

          <section
            id="verification"
            aria-labelledby="verification-heading"
            className="scroll-mt-24"
          >
            <div className="grid gap-2 md:grid-cols-2">
              <Panel className="p-4">
                <div className="flex items-center gap-2">
                  <TestTube2
                    aria-hidden="true"
                    className="h-4 w-4 text-iris-soft"
                  />
                  <h2
                    id="verification-heading"
                    className="text-[13px] font-semibold text-platinum"
                  >
                    Verification ledger
                  </h2>
                </div>
                <ul className="mt-3 space-y-2">
                  {VERIFICATION.map((item) => (
                    <li key={item.check} className="rounded-lg border border-as-line/60 p-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-[12px] font-semibold text-platinum">
                          {item.check}
                        </p>
                        <Pill
                          tone={
                            item.status.startsWith("Run") ||
                            item.status.startsWith("Passed")
                              ? "ok"
                              : item.status === "Not evidenced"
                                ? "danger"
                                : "warn"
                          }
                        >
                          {item.status}
                        </Pill>
                      </div>
                      <p className="mt-1 break-all font-mono text-[11px] text-haze/70">
                        {item.command}
                      </p>
                      <p className="mt-1 text-[11px] leading-4 text-haze">
                        {item.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </Panel>

              <Panel className="p-4">
                <div className="flex items-center gap-2">
                  <Database
                    aria-hidden="true"
                    className="h-4 w-4 text-iris-soft"
                  />
                  <h2 className="text-[13px] font-semibold text-platinum">
                    Demo boundaries
                  </h2>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {[
                    "All research, source and market values are synthetic fixtures.",
                    "Jobs, comparisons, cases and exports live in process memory.",
                    "Guest preferences and history use browser storage; they clear with the session.",
                    "Demo accounts, alerts and entitlement decisions are local simulations.",
                    "No analytics, ad tech or third-party prompt logging is configured.",
                    "The assistant surfaces are marked noindex.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-1.5 text-[11px] leading-5 text-haze"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-1 h-2.5 w-2.5 shrink-0 text-ok"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          </section>

          <section
            id="replacement"
            aria-labelledby="replacement-heading"
            className="scroll-mt-24"
          >
            <Panel className="p-4 sm:p-5">
              <div className="flex items-center gap-2">
                <Terminal
                  aria-hidden="true"
                  className="h-4 w-4 text-iris-soft"
                />
                <h2
                  id="replacement-heading"
                  className="text-[13px] font-semibold text-platinum"
                >
                  Fixture-to-service replacement map
                </h2>
              </div>
              <p className="mt-1 text-[12px] leading-5 text-haze">
                The demo API mirrors the documented object shapes so a real
                backend can replace fixtures without rewriting screens.
              </p>
              <div className="mt-3 divide-y divide-as-line/50 border-y border-as-line/50">
                {REPLACEMENTS.map((row) => (
                  <div
                    key={row.fixture}
                    className="grid gap-1 py-2.5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-4"
                  >
                    <p className="break-all font-mono text-[11px] leading-4 text-haze">
                      {row.fixture}
                    </p>
                    <p className="flex items-start gap-1.5 text-[11px] leading-4 text-platinum/85">
                      <FileCheck2
                        aria-hidden="true"
                        className="mt-0.5 h-3 w-3 shrink-0 text-iris-soft"
                      />
                      {row.real}
                    </p>
                  </div>
                ))}
              </div>
            </Panel>
          </section>

          <Panel className="p-4 sm:p-5" variant="flat">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-2.5">
                <ShieldAlert
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-warn"
                />
                <div>
                  <h2 className="text-[12px] font-semibold text-platinum">
                    Series closes here, not at launch
                  </h2>
                  <p className="mt-1 max-w-2xl text-[12px] leading-5 text-haze">
                    WF-12 is the reconciliation index. Product, Engineering,
                    Security, Data Rights, QA and Legal must still approve the
                    individual wireframes and the six ADRs. Until then, this build
                    is a demonstration of behaviour and boundaries only.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <Pill tone="warn">PROPOSED</Pill>
                <Pill tone="neutral">v1.0 · 24 Oct 2026</Pill>
              </div>
            </div>
          </Panel>

          <div className="flex flex-wrap gap-2 pb-4">
            {[
              { href: "/assistant/help", label: "Help", icon: BookOpen },
              { href: "/assistant/updates", label: "Updates", icon: Bell },
              { href: "/assistant/export", label: "Exports", icon: Download },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-as-line/70 bg-as-panel/50 px-2.5 text-[12px] text-haze hover:border-iris/40 hover:text-platinum"
                >
                  <Icon aria-hidden="true" className="h-3 w-3" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
