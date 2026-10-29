import type { AlertCadence, AlertChannel, AlertTrigger } from "./types";

/*
 * Client-safe WF-09 catalogues. No fixtures or source data, so the Updates
 * screen can import them without bundling server records. Subjects come
 * from GET /api/assistant/alerts.
 */

/** WF-09 §3.1 rule grammar with anti-overclaim labels. */
export const ALERT_TRIGGERS: {
  id: AlertTrigger;
  label: string;
  semantics: string;
  available: boolean;
  reason?: string;
}[] = [
  {
    id: "OFFICIAL_FILING",
    label: "New filing available",
    semantics: "A new validated, admissible issuer filing is published for the subject.",
    available: true,
  },
  {
    id: "OFFICIAL_MACRO_RELEASE",
    label: "Official release updated",
    semantics: "A published official economic series linked to the subject is updated.",
    available: true,
  },
  {
    id: "CITED_SOURCE_REVISION",
    label: "Research evidence changed",
    semantics: "A versioned source linked to your saved research changes.",
    available: true,
  },
  {
    id: "RESEARCH_JOB_STATUS",
    label: "Research follow-up update",
    semantics: "A bounded, authorized research job reaches a meaningful new state.",
    available: true,
  },
  {
    id: "MARKET_THRESHOLD",
    label: "Market threshold (gated)",
    semantics: "An approved licensed metric crosses a validated threshold.",
    available: false,
    reason: "Deferred until a licensed data source and delivery SLA are verified.",
  },
];

/** NTF-14: only cadences the pipeline supports. No "live" or "immediate". */
export const ALERT_CADENCES: { id: AlertCadence; label: string; description: string }[] = [
  {
    id: "DAILY_DIGEST",
    label: "Daily digest",
    description: "At most one summary per day, after source validation. Not real-time.",
  },
  {
    id: "HOURLY_DIGEST",
    label: "Hourly digest",
    description: "At most one summary per hour, after source validation. Not real-time.",
  },
];

export const ALERT_CHANNELS: {
  id: AlertChannel;
  label: string;
  description: string;
  available: boolean;
  reason?: string;
}[] = [
  {
    id: "IN_APP",
    label: "Talvrin inbox",
    description: "Shown in Updates for this account.",
    available: true,
  },
  {
    id: "EMAIL",
    label: "Email",
    description: "Requires a verified, principal-owned address and category consent.",
    available: false,
    reason: "No verified email address is held for the demo account.",
  },
  {
    id: "PUSH",
    label: "Browser notifications",
    description: "Requires browser permission from your gesture and a registered device.",
    available: false,
    reason: "Device registration is not available in this build.",
  },
];

export function triggerLabel(id: string): string {
  return ALERT_TRIGGERS.find((item) => item.id === id)?.label ?? id;
}

export function cadenceLabel(id: string): string {
  return ALERT_CADENCES.find((item) => item.id === id)?.label ?? id;
}

