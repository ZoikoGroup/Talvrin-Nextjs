import type {
  AlertCadence,
  AlertChannel,
  AlertPreflight,
  AlertRule,
  AlertRuleInput,
  AlertTrigger,
  NotificationCategory,
  NotificationItem,
  PreflightCheck,
  UpdatesResponse,
} from "./types";
import { INSTRUMENTS } from "./comparison-data";
import {
  ALERT_CADENCES,
  ALERT_CHANNELS,
  ALERT_TRIGGERS,
  cadenceLabel,
} from "./alerts-catalog";

export {
  ALERT_CADENCES,
  ALERT_CHANNELS,
  ALERT_TRIGGERS,
  cadenceLabel,
  triggerLabel,
} from "./alerts-catalog";
import { opaqueId } from "./format";

/*
 * WF-09 mock notification service. Synthetic: every update below is an
 * invented example for interface review, not a real event, filing or
 * delivery. State is held in server memory per guest-session principal; a
 * production system uses a durable, tenant-scoped store and outbox.
 */

export const NOTIFICATION_POLICY_VERSION = "notify-policy-demo-2026-10";
export const CONSENT_VERSION = "alerts-consent-demo-v1";
const PREFLIGHT_TTL_MS = 10 * 60 * 1000;
const RULE_TTL_MS = 90 * 24 * 60 * 60 * 1000;

/* ------------------------------------------------------------------ */
/* Catalogues (client-safe)                                             */
/* ------------------------------------------------------------------ */

/** Canonical, entity-backed subjects (NTF-11). */
export const ALERT_SUBJECTS = INSTRUMENTS.map((instrument) => ({
  ref: instrument.canonicalId ?? instrument.id,
  label: `${instrument.name} · ${instrument.ticker} · ${instrument.exchange}`,
  ticker: instrument.ticker,
}));

/* ------------------------------------------------------------------ */
/* Fixtures                                                             */
/* ------------------------------------------------------------------ */

type Seed = Omit<
  NotificationItem,
  "status" | "hidden" | "version" | "tenant_scope" | "policy_version" | "correlation_ref"
> & { read?: boolean };

/** deeplink_ref → route. Resolved only on the server at open time (AC-06). */
const DEEPLINKS: Record<string, { href: string; restricted?: boolean }> = {
  "dl_research_ready": { href: "/assistant" },
  "dl_source_revision": { href: "/assistant/history" },
  "dl_alert_paused": { href: "/assistant/updates#rules" },
  "dl_rights_changed": { href: "/assistant/history", restricted: true },
  "dl_case_update": { href: "/assistant/help" },
  "dl_job_status": { href: "/assistant" },
};

const SEEDS: Seed[] = [
  {
    notification_id: "ntf_demo_001",
    event_kind: "RESEARCH_JOB_READY",
    category: "RESEARCH",
    subject_ref: "rs_demo_meridian",
    created_at_utc: "2026-10-24T08:24:00Z",
    source_as_of_utc: "2026-06-12T00:00:00Z",
    access_state: "ELIGIBLE_RECHECK_ON_OPEN",
    display: {
      title_key: "research.ready",
      body_key: "research.ready.body",
      title: "Research result ready (example)",
      body: "Your research result is ready to review. Source details and access are checked when opened.",
    },
    deeplink_ref: "dl_research_ready",
    delivery: [
      { channel: "IN_APP", status: "DELIVERED", at_utc: "2026-10-24T08:24:05Z", reason: null },
    ],
  },
  {
    notification_id: "ntf_demo_002",
    event_kind: "SOURCE_REVISION",
    category: "EVIDENCE",
    subject_ref: "src_demo_meridian_ar",
    created_at_utc: "2026-10-23T15:10:00Z",
    source_as_of_utc: "2026-10-23T14:02:00Z",
    access_state: "ELIGIBLE_RECHECK_ON_OPEN",
    display: {
      title_key: "evidence.revised",
      body_key: "evidence.revised.body",
      title: "Cited source revised (example)",
      body: "A source linked to your research changed. Review the updated evidence before relying on the answer.",
    },
    deeplink_ref: "dl_source_revision",
    delivery: [
      { channel: "IN_APP", status: "DELIVERED", at_utc: "2026-10-23T15:10:04Z", reason: null },
      { channel: "EMAIL", status: "SUPPRESSED", at_utc: null, reason: "No verified email address." },
    ],
  },
  {
    notification_id: "ntf_demo_003",
    event_kind: "ALERT_MATCH",
    category: "SERVICE",
    subject_ref: "rule_demo_paused",
    created_at_utc: "2026-10-22T09:05:00Z",
    source_as_of_utc: null,
    access_state: "ELIGIBLE_RECHECK_ON_OPEN",
    display: {
      title_key: "alert.paused",
      body_key: "alert.paused.body",
      title: "Alert paused (example)",
      body: "This alert is paused because its source or account eligibility has changed.",
    },
    deeplink_ref: "dl_alert_paused",
    delivery: [
      { channel: "IN_APP", status: "DELIVERED", at_utc: "2026-10-22T09:05:02Z", reason: null },
    ],
    read: true,
  },
  {
    notification_id: "ntf_demo_004",
    event_kind: "RIGHTS_REVOKED",
    category: "EVIDENCE",
    subject_ref: "src_demo_licensed_feed",
    created_at_utc: "2026-10-21T17:42:00Z",
    source_as_of_utc: null,
    access_state: "RESTRICTED",
    display: {
      title_key: "rights.changed",
      body_key: "rights.changed.body",
      title: "Access changed for a cited source (example)",
      body: "This update cannot display the underlying content because access or data-rights conditions changed.",
    },
    deeplink_ref: "dl_rights_changed",
    delivery: [
      { channel: "IN_APP", status: "DELIVERED", at_utc: "2026-10-21T17:42:03Z", reason: null },
    ],
    read: true,
  },
  {
    notification_id: "ntf_demo_005",
    event_kind: "RESEARCH_JOB_STATUS",
    category: "RESEARCH",
    subject_ref: "job_demo_followup",
    created_at_utc: "2026-10-20T11:18:00Z",
    source_as_of_utc: null,
    access_state: "ELIGIBLE_RECHECK_ON_OPEN",
    display: {
      title_key: "job.processing",
      body_key: "job.processing.body",
      title: "Follow-up still processing (example)",
      body: "Research is still processing. We will show a new status when information is available.",
    },
    deeplink_ref: "dl_job_status",
    delivery: [
      { channel: "IN_APP", status: "DELIVERED", at_utc: "2026-10-20T11:18:01Z", reason: null },
    ],
    job: {
      job_ref: "job_demo_followup",
      state: "AWAITING_SOURCE",
      timeline: [
        { state: "QUEUED", at_utc: "2026-10-20T11:10:00Z" },
        { state: "RUNNING", at_utc: "2026-10-20T11:12:00Z" },
        { state: "AWAITING_SOURCE", at_utc: "2026-10-20T11:18:00Z" },
        { state: "COMPLETE", at_utc: null },
      ],
      status_text: "Waiting for an official source to publish. No completion time is promised.",
    },
  },
  {
    notification_id: "ntf_demo_006",
    event_kind: "SUPPORT_CASE_UPDATE",
    category: "SERVICE",
    subject_ref: "case_demo",
    created_at_utc: "2026-10-19T10:02:00Z",
    source_as_of_utc: null,
    access_state: "ELIGIBLE_RECHECK_ON_OPEN",
    display: {
      title_key: "case.received",
      body_key: "case.received.body",
      title: "Report received for review (example)",
      body: "A reviewer received your report. This does not confirm that any claim was wrong.",
    },
    deeplink_ref: "dl_case_update",
    delivery: [
      { channel: "IN_APP", status: "DELIVERED", at_utc: "2026-10-19T10:02:01Z", reason: null },
    ],
    read: true,
  },
];

function seedItems(): NotificationItem[] {
  return SEEDS.map(({ read, ...seed }) => ({
    ...seed,
    tenant_scope: "principal",
    status: read ? "READ" : "UNREAD",
    hidden: false,
    version: 1,
    policy_version: NOTIFICATION_POLICY_VERSION,
    correlation_ref: opaqueId("corr"),
  }));
}

function seedRules(): AlertRule[] {
  const now = Date.parse("2026-10-22T09:05:00Z");
  return [
    {
      rule_id: "rule_demo_paused",
      version: 3,
      status: "PAUSED",
      status_reason: "This alert is paused because its source or account eligibility has changed.",
      subject_ref: ALERT_SUBJECTS[0]?.ref ?? "subject",
      subject_label: ALERT_SUBJECTS[0]?.label ?? "Example subject",
      trigger: "CITED_SOURCE_REVISION",
      cadence: "DAILY_DIGEST",
      channels: ["IN_APP"],
      quiet_hours: { enabled: false, start: "22:00", end: "07:00", time_zone: "UTC" },
      consent_version: CONSENT_VERSION,
      unsubscribed: false,
      created_at_utc: new Date(now - 7 * 864e5).toISOString(),
      updated_at_utc: new Date(now).toISOString(),
      expires_at_utc: new Date(now + RULE_TTL_MS).toISOString(),
      note: "Synthetic example rule held by the demo server.",
    },
  ];
}

/* ------------------------------------------------------------------ */
/* Principal-scoped store                                               */
/* ------------------------------------------------------------------ */

interface PrincipalState {
  items: NotificationItem[];
  rules: AlertRule[];
  preflights: Map<string, { fingerprint: string; expiresAt: number }>;
  idempotency: Map<string, { ruleId: string; fingerprint: string }>;
}

const principals = new Map<string, PrincipalState>();

export class NotificationError extends Error {
  readonly code: string;
  readonly status: number;
  constructor(code: string, message: string, status: number) {
    super(message);
    this.name = "NotificationError";
    this.code = code;
    this.status = status;
  }
}

function stateFor(principal: string): PrincipalState {
  let state = principals.get(principal);
  if (!state) {
    state = {
      items: seedItems(),
      rules: seedRules(),
      preflights: new Map(),
      idempotency: new Map(),
    };
    principals.set(principal, state);
    if (principals.size > 500) {
      const first = principals.keys().next().value;
      if (first) principals.delete(first);
    }
  }
  return state;
}

function expireRules(state: PrincipalState) {
  const now = Date.now();
  for (const rule of state.rules) {
    if (rule.status !== "EXPIRED" && Date.parse(rule.expires_at_utc) < now) {
      rule.status = "EXPIRED";
      rule.status_reason = "This alert reached its end date.";
      rule.version += 1;
    }
  }
}

/* Inbox -------------------------------------------------------------- */

export function listUpdates(
  principal: string,
  category: NotificationCategory | null
): UpdatesResponse {
  const state = stateFor(principal);
  const visible = state.items.filter((item) => !item.hidden);
  const unreadBy = (cat: NotificationCategory) =>
    visible.filter((item) => item.category === cat && item.status === "UNREAD").length;
  return {
    items: visible
      .filter((item) => !category || item.category === category)
      .sort((a, b) => b.created_at_utc.localeCompare(a.created_at_utc)),
    unread_count: visible.filter((item) => item.status === "UNREAD").length,
    unread_by_category: {
      RESEARCH: unreadBy("RESEARCH"),
      EVIDENCE: unreadBy("EVIDENCE"),
      SERVICE: unreadBy("SERVICE"),
    },
    hidden_count: state.items.length - visible.length,
    next_cursor: null,
    policy_version: NOTIFICATION_POLICY_VERSION,
  };
}

function findItem(state: PrincipalState, id: string): NotificationItem {
  const item = state.items.find((entry) => entry.notification_id === id);
  if (!item) {
    throw new NotificationError("UPDATE_NOT_FOUND", "This update is no longer available.", 404);
  }
  return item;
}

/**
 * Bulk read with a named scope (AC-31). Idempotent: already-read items are
 * unchanged. Returns the ids that changed so the client can reconcile.
 */
export function markRead(
  principal: string,
  scope: { ids?: string[]; category?: NotificationCategory | "ALL" }
): { changed: string[]; response: UpdatesResponse } {
  const state = stateFor(principal);
  const targets = state.items.filter(
    (item) =>
      !item.hidden &&
      item.status === "UNREAD" &&
      (scope.ids
        ? scope.ids.includes(item.notification_id)
        : scope.category === "ALL" || item.category === scope.category)
  );
  for (const item of targets) {
    item.status = "READ";
    item.version += 1;
  }
  return {
    changed: targets.map((item) => item.notification_id),
    response: listUpdates(principal, null),
  };
}

export function updateItem(
  principal: string,
  id: string,
  change: { hidden?: boolean; status?: "READ" | "UNREAD" },
  expectedVersion: number | null
): NotificationItem {
  const state = stateFor(principal);
  const item = findItem(state, id);
  if (expectedVersion !== null && expectedVersion !== item.version) {
    throw new NotificationError(
      "VERSION_CONFLICT",
      "This update changed in another view. Its status has been reloaded.",
      409
    );
  }
  if (typeof change.hidden === "boolean") item.hidden = change.hidden;
  if (change.status) item.status = change.status;
  item.version += 1;
  return item;
}

/** Re-checks access at open time and resolves the opaque deeplink (AC-06). */
export function openUpdate(principal: string, id: string): { href: string; item: NotificationItem } {
  const state = stateFor(principal);
  const item = findItem(state, id);
  if (item.hidden) {
    throw new NotificationError("UPDATE_NOT_FOUND", "This update is no longer available.", 404);
  }
  const link = DEEPLINKS[item.deeplink_ref];
  if (!link) {
    throw new NotificationError("UPDATE_NOT_FOUND", "This update is no longer available.", 404);
  }
  if (link.restricted || item.access_state === "RESTRICTED") {
    throw new NotificationError(
      "ACCESS_CHANGED",
      "This update cannot display the underlying content because access or data-rights conditions changed.",
      403
    );
  }
  if (item.status === "UNREAD") {
    item.status = "READ";
    item.version += 1;
  }
  return { href: link.href, item };
}

/* Alert rules -------------------------------------------------------- */

export function listAlerts(principal: string): AlertRule[] {
  const state = stateFor(principal);
  expireRules(state);
  return [...state.rules].sort((a, b) => b.updated_at_utc.localeCompare(a.updated_at_utc));
}

const TRIGGER_IDS = new Set(ALERT_TRIGGERS.map((item) => item.id));
const CADENCE_IDS = new Set(ALERT_CADENCES.map((item) => item.id));
const CHANNEL_IDS = new Set(ALERT_CHANNELS.map((item) => item.id));
const SUBJECT_REFS = new Set(ALERT_SUBJECTS.map((item) => item.ref));
const TIME = /^([01]\d|2[0-3]):[0-5]\d$/;

/** Strict normalisation: unknown enum values are rejected, not coerced. */
export function normaliseRuleInput(raw: unknown): AlertRuleInput {
  const body = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const quiet = (body.quiet_hours && typeof body.quiet_hours === "object"
    ? body.quiet_hours
    : {}) as Record<string, unknown>;
  const channels = Array.isArray(body.channels)
    ? [...new Set(body.channels.filter((value): value is AlertChannel => typeof value === "string" && CHANNEL_IDS.has(value as AlertChannel)))]
    : [];
  let zone = typeof quiet.time_zone === "string" ? quiet.time_zone : "UTC";
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: zone });
  } catch {
    zone = "INVALID";
  }
  return {
    subject_ref: typeof body.subject_ref === "string" ? body.subject_ref : "",
    trigger:
      typeof body.trigger === "string" && TRIGGER_IDS.has(body.trigger as AlertTrigger)
        ? (body.trigger as AlertTrigger)
        : "",
    cadence:
      typeof body.cadence === "string" && CADENCE_IDS.has(body.cadence as AlertCadence)
        ? (body.cadence as AlertCadence)
        : "",
    channels,
    quiet_hours: {
      enabled: quiet.enabled === true,
      start: typeof quiet.start === "string" && TIME.test(quiet.start) ? quiet.start : "22:00",
      end: typeof quiet.end === "string" && TIME.test(quiet.end) ? quiet.end : "07:00",
      time_zone: zone,
    },
  };
}

function fingerprintOf(input: AlertRuleInput): string {
  return JSON.stringify([
    input.subject_ref,
    input.trigger,
    input.cadence,
    [...input.channels].sort(),
    input.quiet_hours,
    CONSENT_VERSION,
    NOTIFICATION_POLICY_VERSION,
  ]);
}

/** NTF-13: concrete eligibility and non-eligible reasons before create. */
export function alertPreflight(principal: string, raw: unknown): AlertPreflight {
  const state = stateFor(principal);
  const input = normaliseRuleInput(raw);
  const checks: PreflightCheck[] = [];
  const trigger = ALERT_TRIGGERS.find((item) => item.id === input.trigger);

  checks.push({
    id: "subject",
    status: SUBJECT_REFS.has(input.subject_ref) ? "PASS" : "BLOCK",
    title: "Subject",
    detail: SUBJECT_REFS.has(input.subject_ref)
      ? "Resolved to one canonical public record."
      : "Choose a subject from the canonical list. Free-text subjects and URLs are not accepted.",
  });
  checks.push({
    id: "trigger",
    status: !trigger ? "BLOCK" : trigger.available ? "PASS" : "BLOCK",
    title: "Trigger",
    detail: !trigger
      ? "Choose a supported event type."
      : trigger.available
        ? `${trigger.label}: ${trigger.semantics}`
        : `${trigger.label} is not available. ${trigger.reason ?? ""}`.trim(),
  });
  checks.push({
    id: "cadence",
    status: input.cadence ? "PASS" : "BLOCK",
    title: "Cadence",
    detail: input.cadence
      ? `${cadenceLabel(input.cadence)}. Updates are delivered after source validation, not in real time.`
      : "Choose a supported digest cadence.",
  });
  if (!input.channels.length) {
    checks.push({ id: "channel", status: "BLOCK", title: "Delivery", detail: "Choose at least one delivery channel." });
  }
  for (const id of input.channels) {
    const channel = ALERT_CHANNELS.find((item) => item.id === id);
    checks.push({
      id: `channel-${id}`,
      status: channel?.available ? "PASS" : "BLOCK",
      title: channel?.label ?? id,
      detail: channel?.available
        ? channel.description
        : channel?.reason ?? "This channel is not available.",
    });
  }
  checks.push({
    id: "quiet-hours",
    status: input.quiet_hours.time_zone === "INVALID" ? "BLOCK" : "PASS",
    title: "Quiet hours",
    detail:
      input.quiet_hours.time_zone === "INVALID"
        ? "Choose a valid time zone."
        : input.quiet_hours.enabled
          ? `No delivery between ${input.quiet_hours.start} and ${input.quiet_hours.end} (${input.quiet_hours.time_zone}). Daylight-saving changes follow the zone's rules.`
          : "Off.",
  });
  checks.push({
    id: "plan",
    status: "WARN",
    title: "Plan and rights",
    detail:
      "Synthetic demo account. Each delivered update re-checks source rights; content may be withheld when opened.",
  });

  const blocked = checks.some((check) => check.status === "BLOCK");
  const decision: AlertPreflight["decision"] = blocked ? "BLOCKED" : "REVISE";
  const fingerprint = fingerprintOf(input);
  let token: string | null = null;
  if (!blocked) {
    token = opaqueId("apf");
    state.preflights.set(token, { fingerprint, expiresAt: Date.now() + PREFLIGHT_TTL_MS });
  }
  return { decision, checks, preflight_token: token, fingerprint };
}

function consumePreflight(state: PrincipalState, token: string, fingerprint: string) {
  const cached = state.preflights.get(token);
  if (!cached || cached.expiresAt < Date.now() || cached.fingerprint !== fingerprint) {
    throw new NotificationError(
      "PREFLIGHT_STALE",
      "Conditions changed. Check eligibility again before enabling the alert.",
      409
    );
  }
  state.preflights.delete(token);
}

/** Versioned, idempotent commit. Only this creates an Active rule (AC-12). */
export function commitAlert(
  principal: string,
  raw: unknown,
  token: string,
  consent: boolean,
  idempotencyKey: string
): { rule: AlertRule; replayed: boolean } {
  const state = stateFor(principal);
  const input = normaliseRuleInput(raw);
  const fingerprint = fingerprintOf(input);
  if (idempotencyKey) {
    const existing = state.idempotency.get(idempotencyKey);
    if (existing) {
      if (existing.fingerprint !== fingerprint) {
        throw new NotificationError(
          "IDEMPOTENCY_KEY_REUSED",
          "This request key was already used for a different alert.",
          409
        );
      }
      const rule = state.rules.find((item) => item.rule_id === existing.ruleId);
      if (rule) return { rule, replayed: true };
    }
  }
  if (!consent) {
    throw new NotificationError(
      "CONSENT_REQUIRED",
      "Confirm that you want these alert updates before enabling the rule.",
      422
    );
  }
  consumePreflight(state, token, fingerprint);
  const subject = ALERT_SUBJECTS.find((item) => item.ref === input.subject_ref);
  const now = Date.now();
  const rule: AlertRule = {
    rule_id: opaqueId("rule"),
    version: 1,
    status: "ACTIVE",
    status_reason: null,
    subject_ref: input.subject_ref,
    subject_label: subject?.label ?? input.subject_ref,
    trigger: input.trigger as AlertTrigger,
    cadence: input.cadence as AlertCadence,
    channels: input.channels,
    quiet_hours: input.quiet_hours,
    consent_version: CONSENT_VERSION,
    unsubscribed: false,
    created_at_utc: new Date(now).toISOString(),
    updated_at_utc: new Date(now).toISOString(),
    expires_at_utc: new Date(now + RULE_TTL_MS).toISOString(),
    note: "Synthetic demo rule held by the demo server. Nothing is delivered outside this inbox.",
  };
  state.rules.unshift(rule);
  if (idempotencyKey) state.idempotency.set(idempotencyKey, { ruleId: rule.rule_id, fingerprint });
  return { rule, replayed: false };
}

/** NTF-19 / NTF-20 server-enforced transitions. */
export function transitionAlert(
  principal: string,
  ruleId: string,
  action: "pause" | "resume" | "unsubscribe",
  expectedVersion: number,
  token: string | null,
  consent: boolean
): AlertRule {
  const state = stateFor(principal);
  expireRules(state);
  const rule = state.rules.find((item) => item.rule_id === ruleId);
  if (!rule) throw new NotificationError("RULE_NOT_FOUND", "This alert is no longer available.", 404);
  if (rule.version !== expectedVersion) {
    throw new NotificationError(
      "VERSION_CONFLICT",
      "This alert changed in another view. Its status has been reloaded.",
      409
    );
  }
  if (rule.status === "EXPIRED" || rule.unsubscribed) {
    throw new NotificationError(
      "RULE_INACTIVE",
      rule.unsubscribed ? "You unsubscribed from this alert. Create a new rule to receive it again." : "This alert has expired.",
      409
    );
  }
  if (action === "pause") {
    rule.status = "PAUSED";
    rule.status_reason = "Paused by you.";
  } else if (action === "unsubscribe") {
    rule.status = "DISABLED";
    rule.unsubscribed = true;
    rule.status_reason = "You unsubscribed. Essential account messages are not affected.";
  } else {
    // Resume requires a fresh preflight and consent (AC-33).
    if (!token) {
      throw new NotificationError("PREFLIGHT_REQUIRED", "Check eligibility again before resuming.", 409);
    }
    if (!consent) {
      throw new NotificationError("CONSENT_REQUIRED", "Confirm that you want these alert updates again.", 422);
    }
    consumePreflight(state, token, fingerprintOf(rule));
    rule.status = "ACTIVE";
    rule.status_reason = null;
    rule.consent_version = CONSENT_VERSION;
  }
  rule.version += 1;
  rule.updated_at_utc = new Date().toISOString();
  return rule;
}
