"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import {
  AlertTriangle,
  Bell,
  BellOff,
  CheckCircle2,
  Circle,
  EyeOff,
  Inbox,
  Lock,
  Pause,
  Play,
  RefreshCw,
  XCircle,
} from "lucide-react";
import type {
  AlertChannel,
  AlertDraft,
  AlertPreflight,
  AlertRule,
  AlertRuleInput,
  NotificationCategory,
  NotificationItem,
  UpdatesResponse,
} from "@/lib/assistant/types";
import {
  ALERT_CADENCES,
  ALERT_CHANNELS,
  ALERT_TRIGGERS,
  cadenceLabel,
  triggerLabel,
} from "@/lib/assistant/alerts-catalog";
import { FIXTURE_LABEL } from "@/lib/assistant/taxonomy";
import { formatDateTime } from "@/lib/assistant/format";
import {
  ApiError,
  DEMO_ACCOUNT_HEADERS,
  apiJson,
  loadAlertDrafts,
  newIdempotencyKey,
  removeAlertDraft,
  saveAlertDraft,
} from "@/lib/assistant/client";
import { useDemoMode } from "@/components/assistant/shell/DemoModeProvider";
import { useAssistantPrefs } from "@/components/assistant/shell/AssistantPrefsProvider";
import { Pill } from "@/components/assistant/ui/Badge";
import { Button, ButtonLink } from "@/components/assistant/ui/Button";
import { Dialog } from "@/components/assistant/ui/Dialog";
import { Checkbox, FormAlert, Select } from "@/components/assistant/ui/Field";
import { Callout, EmptyState, Skeleton } from "@/components/assistant/ui/Misc";
import { PageIntro, PageShell, Panel, SectionHeader } from "@/components/assistant/ui/Panel";

/* WF-09 §12 approved copy. */
const COPY = {
  guest: "Updates about this research appear while this session is open. Saved alerts require an account.",
  empty: "No updates yet",
  gone: "This update is no longer available",
  unavailable: "Updates unavailable",
  enabled: "Alert enabled. You can change delivery settings or pause it at any time.",
  pushOff: "Browser notifications are off. You can still view updates in your Talvrin inbox where available.",
} as const;

const FILTERS: { id: NotificationCategory | "ALL"; label: string }[] = [
  { id: "ALL", label: "All" },
  { id: "RESEARCH", label: "Research" },
  { id: "EVIDENCE", label: "Evidence" },
  { id: "SERVICE", label: "Service" },
];

const STATUS_TONE: Record<AlertRule["status"], "ok" | "warn" | "neutral" | "danger"> = {
  ACTIVE: "ok",
  PAUSED: "warn",
  DISABLED: "neutral",
  EXPIRED: "danger",
};

const EMPTY_INPUT: AlertRuleInput = {
  subject_ref: "",
  trigger: "",
  cadence: "DAILY_DIGEST",
  channels: ["IN_APP"],
  quiet_hours: { enabled: false, start: "22:00", end: "07:00", time_zone: "UTC" },
};

type LoadState =
  | { state: "loading" }
  | { state: "ready"; data: UpdatesResponse }
  | { state: "error"; status: number; message: string; retryAfter?: number };

function errorMessage(error: unknown): { status: number; message: string; retryAfter?: number } {
  if (error instanceof ApiError) {
    if (error.status === 401) return { status: 401, message: "Sign in to see account updates. Private updates are not previewed." };
    if (error.status === 403) return { status: 403, message: "These updates are not available for this account." };
    if (error.status === 404) return { status: 404, message: COPY.gone };
    if (error.status === 409) return { status: 409, message: "This item changed in another view. Its status has been reloaded." };
    if (error.status === 429) {
      return {
        status: 429,
        message: `Too many requests. Try again${error.retryAfterSeconds ? ` in ${error.retryAfterSeconds} seconds` : " shortly"}.`,
        retryAfter: error.retryAfterSeconds,
      };
    }
    return { status: error.status, message: error.message };
  }
  return { status: 503, message: COPY.unavailable };
}

/* ------------------------------------------------------------------ */
/* Guest view                                                           */
/* ------------------------------------------------------------------ */

function GuestUpdates({ onDemo }: { onDemo: () => void }) {
  return (
    <PageShell width="wide" className="pt-8">
      <PageIntro
        eyebrow="Public research · Updates"
        title="Updates and alerts"
        lead={COPY.guest}
        meta={
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone="warn" dot>Guest · no saved inbox</Pill>
            <Pill>No background follow-up</Pill>
            <Pill>No email or push</Pill>
          </div>
        }
        actions={
          <ButtonLink href="/assistant/access?intent=sign_in&return=%2Fassistant%2Fupdates" size="sm">
            Sign in
          </ButtonLink>
        }
      />
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
        <div className="space-y-4">
          <Panel className="p-5">
            <div className="flex items-start gap-3">
              <Lock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-warn" />
              <div>
                <h2 className="text-[15px] font-semibold text-platinum">Guest updates are not a mailbox</h2>
                <p className="mt-1 text-[14px] leading-7 text-haze">
                  Progress belongs to the research page that is open now. If the tab
                  closes or the guest session ends, Talvrin cannot deliver the result
                  later. Nothing here enrolls you in email, push, monitoring or a
                  cross-device inbox.
                </p>
              </div>
            </div>
          </Panel>
          <Panel className="p-5">
            <h2 className="text-[15px] font-semibold text-platinum">What each capability needs</h2>
            <ul className="mt-3 divide-y divide-as-line/60">
              {[
                ["In-session status", "Available on the open research page"],
                ["Account inbox", "Sign-in and an account feature release"],
                ["Source-change alerts", "Sign-in, consent and a server-committed rule"],
                ["Email delivery", "A verified address and category consent"],
                ["Browser notifications", "Your permission and a registered device"],
              ].map(([name, needs]) => (
                <li key={name} className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:justify-between">
                  <span className="text-[14px] font-medium text-platinum">{name}</span>
                  <span className="text-[13px] text-haze">{needs}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
        <aside className="space-y-3">
          <Panel className="p-4">
            <p className="text-[13px] leading-6 text-haze">
              A synthetic demo account shows how the inbox and alert rules behave.
              It is not a real sign-in and stores no personal data.
            </p>
            <Button size="sm" variant="secondary" className="mt-3" onClick={onDemo}>
              Explore the demo account
            </Button>
          </Panel>
          <p className="font-mono text-[11px] uppercase leading-5 tracking-[0.1em] text-haze/70">{FIXTURE_LABEL}</p>
        </aside>
      </div>
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* Inbox detail                                                         */
/* ------------------------------------------------------------------ */

function UpdateDetail({
  item,
  timeZone,
  locale,
  onOpen,
  onHide,
  opening,
  headingRef,
}: {
  item: NotificationItem;
  timeZone: string;
  locale: string;
  onOpen: () => void;
  onHide: () => void;
  opening: boolean;
  headingRef?: React.Ref<HTMLHeadingElement>;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <Pill tone="neutral">{item.category.toLowerCase()}</Pill>
        {item.access_state === "RESTRICTED" ? <Pill tone="warn">Access changed</Pill> : null}
      </div>
      <h2 ref={headingRef} tabIndex={-1} className="mt-2 text-[17px] font-semibold text-platinum focus:outline-none">
        {item.display.title}
      </h2>
      <p className="mt-2 text-[14px] leading-7 text-platinum/85">{item.display.body}</p>

      <dl className="mt-4 space-y-1.5 text-[13px]">
        <div className="flex justify-between gap-3">
          <dt className="text-haze">Event recorded</dt>
          <dd className="text-right text-platinum/85">{formatDateTime(item.created_at_utc, timeZone, locale)}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="text-haze">Source published</dt>
          <dd className="text-right text-platinum/85">
            {item.source_as_of_utc ? formatDateTime(item.source_as_of_utc, timeZone, locale) : "Not applicable"}
          </dd>
        </div>
      </dl>

      {item.job ? (
        <section aria-labelledby={`timeline-${item.notification_id}`} className="mt-4">
          <h3 id={`timeline-${item.notification_id}`} className="text-[13px] font-semibold text-platinum">Job timeline</h3>
          <ol className="mt-2 space-y-1">
            {item.job.timeline.map((step) => (
              <li key={step.state} className="flex items-center gap-2 text-[13px]">
                {step.at_utc ? (
                  <CheckCircle2 aria-hidden="true" className="h-3.5 w-3.5 text-ok" />
                ) : (
                  <Circle aria-hidden="true" className="h-3.5 w-3.5 text-haze/50" />
                )}
                <span className={step.at_utc ? "text-platinum/85" : "text-haze"}>
                  {step.state.replaceAll("_", " ").toLowerCase()}
                </span>
                <span className="ml-auto text-[12px] text-haze">
                  {step.at_utc ? formatDateTime(step.at_utc, timeZone, locale) : "Not yet"}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-2 text-[13px] leading-6 text-haze">{item.job.status_text}</p>
        </section>
      ) : null}

      <section aria-labelledby={`delivery-${item.notification_id}`} className="mt-4">
        <h3 id={`delivery-${item.notification_id}`} className="text-[13px] font-semibold text-platinum">Delivery</h3>
        <ul className="mt-1.5 space-y-1">
          {item.delivery.map((delivery) => (
            <li key={delivery.channel} className="text-[13px] text-haze">
              <span className="text-platinum/85">{ALERT_CHANNELS.find((channel) => channel.id === delivery.channel)?.label}</span>:{" "}
              {delivery.status.toLowerCase()}
              {delivery.at_utc ? ` · ${formatDateTime(delivery.at_utc, timeZone, locale)}` : ""}
              {delivery.reason ? ` · ${delivery.reason}` : ""}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-4 rounded-lg border border-as-line/60 bg-midnight-soft/40 px-3 py-2 text-[12px] leading-5 text-haze">
        Opening re-checks your access and the current source version. Content may be
        withheld if rights changed. Policy {item.policy_version}.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button size="sm" onClick={onOpen} loading={opening}>Open</Button>
        <Button size="sm" variant="ghost" onClick={onHide} icon={<EyeOff aria-hidden="true" className="h-3.5 w-3.5" />}>
          Hide from inbox
        </Button>
      </div>
      <p className="mt-2 text-[12px] leading-5 text-haze/80">
        Hiding removes the item from this inbox view. It does not delete records the
        service is required to keep.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Account view                                                         */
/* ------------------------------------------------------------------ */

export default function UpdatesExperience() {
  const router = useRouter();
  const { mode, setMode, ready } = useDemoMode();
  const { prefs } = useAssistantPrefs();

  const [filter, setFilter] = useState<NotificationCategory | "ALL">("ALL");
  const [inbox, setInbox] = useState<LoadState>({ state: "loading" });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mobileDetail, setMobileDetail] = useState(false);
  const [opening, setOpening] = useState(false);
  const [status, setStatus] = useState("");
  const [itemError, setItemError] = useState<string | null>(null);
  const detailHeading = useRef<HTMLHeadingElement>(null);

  const [rules, setRules] = useState<AlertRule[]>([]);
  const [subjects, setSubjects] = useState<{ ref: string; label: string; ticker: string }[]>([]);
  const [rulesError, setRulesError] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<AlertDraft[]>([]);

  const [input, setInput] = useState<AlertRuleInput>(EMPTY_INPUT);
  const [preflight, setPreflight] = useState<AlertPreflight | null>(null);
  const [checking, setChecking] = useState(false);
  const [consent, setConsent] = useState(false);
  const [committing, setCommitting] = useState(false);
  const [builderError, setBuilderError] = useState<string | null>(null);
  const [builderStatus, setBuilderStatus] = useState("");
  const commitKey = useRef("");

  const [resumeRule, setResumeRule] = useState<AlertRule | null>(null);
  const [resumePreflight, setResumePreflight] = useState<AlertPreflight | null>(null);
  const [resumeConsent, setResumeConsent] = useState(false);
  const [resumeError, setResumeError] = useState<string | null>(null);

  const [pushPermission, setPushPermission] = useState<"unsupported" | NotificationPermission>("unsupported");

  useEffect(() => {
    setInput((current) => ({
      ...current,
      quiet_hours: { ...current.quiet_hours, time_zone: prefs.timeZone || "UTC" },
    }));
  }, [prefs.timeZone]);

  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window && "serviceWorker" in navigator) {
      setPushPermission(Notification.permission);
    }
    setDrafts(loadAlertDrafts());
  }, []);

  const loadInbox = useCallback(async () => {
    setInbox({ state: "loading" });
    try {
      const data = await apiJson<UpdatesResponse>("/api/assistant/updates", {
        headers: DEMO_ACCOUNT_HEADERS,
      });
      setInbox({ state: "ready", data });
    } catch (error) {
      setInbox({ state: "error", ...errorMessage(error) });
    }
  }, []);

  const loadRules = useCallback(async () => {
    setRulesError(null);
    try {
      const data = await apiJson<{
        rules: AlertRule[];
        subjects: { ref: string; label: string; ticker: string }[];
      }>("/api/assistant/alerts", {
        headers: DEMO_ACCOUNT_HEADERS,
      });
      setRules(data.rules);
      setSubjects(data.subjects);
    } catch (error) {
      setRulesError(errorMessage(error).message);
    }
  }, []);

  useEffect(() => {
    if (!ready || mode !== "account") return;
    void loadInbox();
    void loadRules();
  }, [ready, mode, loadInbox, loadRules]);

  /* Any edit invalidates the eligibility check. */
  const inputKey = JSON.stringify(input);
  useEffect(() => {
    setPreflight(null);
    setConsent(false);
    commitKey.current = "";
  }, [inputKey]);

  const data = inbox.state === "ready" ? inbox.data : null;
  const visible = useMemo(
    () => (data ? data.items.filter((item) => filter === "ALL" || item.category === filter) : []),
    [data, filter]
  );
  const selected = data?.items.find((item) => item.notification_id === selectedId) ?? null;
  const unreadInScope =
    filter === "ALL" ? data?.unread_count ?? 0 : data?.unread_by_category[filter] ?? 0;

  function selectItem(item: NotificationItem) {
    setSelectedId(item.notification_id);
    setItemError(null);
    if (window.matchMedia("(max-width: 1023px)").matches) setMobileDetail(true);
    else window.requestAnimationFrame(() => detailHeading.current?.focus());
  }

  async function markAllRead() {
    if (!data || !unreadInScope) return;
    const scopeLabel = FILTERS.find((item) => item.id === filter)?.label ?? "All";
    const previous = data;
    // Optimistic, with rollback on failure (AC-31).
    setInbox({
      state: "ready",
      data: {
        ...data,
        items: data.items.map((item) =>
          filter === "ALL" || item.category === filter ? { ...item, status: "READ" } : item
        ),
      },
    });
    try {
      const result = await apiJson<{ changed: string[]; response: UpdatesResponse }>(
        "/api/assistant/updates/read",
        { method: "POST", headers: DEMO_ACCOUNT_HEADERS, body: JSON.stringify({ category: filter }) }
      );
      setInbox({ state: "ready", data: result.response });
      setStatus(`${result.changed.length} update${result.changed.length === 1 ? "" : "s"} in “${scopeLabel}” marked read.`);
    } catch (error) {
      setInbox({ state: "ready", data: previous });
      setStatus(`Not marked read. ${errorMessage(error).message}`);
    }
  }

  async function openSelected() {
    if (!selected) return;
    setOpening(true);
    setItemError(null);
    try {
      const result = await apiJson<{ href: string }>(
        `/api/assistant/updates/${encodeURIComponent(selected.notification_id)}/open`,
        { method: "POST", headers: DEMO_ACCOUNT_HEADERS }
      );
      router.push(result.href);
    } catch (error) {
      const { message, status: code } = errorMessage(error);
      setItemError(code === 403 && error instanceof ApiError ? error.message : message);
      void loadInbox();
    } finally {
      setOpening(false);
    }
  }

  async function hideSelected() {
    if (!selected) return;
    try {
      await apiJson(`/api/assistant/updates/${encodeURIComponent(selected.notification_id)}`, {
        method: "PATCH",
        headers: DEMO_ACCOUNT_HEADERS,
        body: JSON.stringify({ hidden: true, version: selected.version }),
      });
      setStatus("Update hidden from this inbox.");
      setSelectedId(null);
      setMobileDetail(false);
      void loadInbox();
    } catch (error) {
      setItemError(errorMessage(error).message);
      void loadInbox();
    }
  }

  /* Alert builder ---------------------------------------------------- */

  async function runPreflight() {
    setChecking(true);
    setBuilderError(null);
    try {
      const result = await apiJson<AlertPreflight>("/api/assistant/alerts/preflight", {
        method: "POST",
        headers: DEMO_ACCOUNT_HEADERS,
        body: JSON.stringify({ rule: input }),
      });
      setPreflight(result);
      setBuilderStatus(
        result.decision === "BLOCKED"
          ? "Eligibility check found blocking issues. The alert cannot be enabled as configured."
          : "Eligibility checked. Review the details and confirm consent to enable."
      );
    } catch (error) {
      setBuilderError(errorMessage(error).message);
    } finally {
      setChecking(false);
    }
  }

  async function commit() {
    if (!preflight?.preflight_token) return;
    if (!commitKey.current) commitKey.current = newIdempotencyKey();
    setCommitting(true);
    setBuilderError(null);
    try {
      await apiJson<{ rule: AlertRule }>("/api/assistant/alerts", {
        method: "POST",
        headers: { ...DEMO_ACCOUNT_HEADERS, "idempotency-key": commitKey.current },
        body: JSON.stringify({ rule: input, preflight_token: preflight.preflight_token, consent }),
      });
      // Only now, after the server acknowledged the commit (AC-12).
      setBuilderStatus(COPY.enabled);
      setInput({ ...EMPTY_INPUT, quiet_hours: { ...EMPTY_INPUT.quiet_hours, time_zone: prefs.timeZone || "UTC" } });
      void loadRules();
    } catch (error) {
      if (error instanceof ApiError && error.code === "PREFLIGHT_STALE") setPreflight(null);
      setBuilderError(`Not enabled. ${errorMessage(error).message} Your settings are still here as a draft.`);
    } finally {
      setCommitting(false);
    }
  }

  function keepDraft() {
    saveAlertDraft(input);
    setDrafts(loadAlertDrafts());
    setBuilderStatus("Saved as a local draft on this device. A draft is not active and sends nothing.");
  }

  async function transition(rule: AlertRule, action: "pause" | "unsubscribe") {
    try {
      await apiJson(`/api/assistant/alerts/${encodeURIComponent(rule.rule_id)}`, {
        method: "PATCH",
        headers: DEMO_ACCOUNT_HEADERS,
        body: JSON.stringify({ action, version: rule.version }),
      });
      setStatus(action === "pause" ? "Alert paused." : "Unsubscribed from this alert.");
    } catch (error) {
      setStatus(errorMessage(error).message);
    }
    void loadRules();
  }

  async function startResume(rule: AlertRule) {
    setResumeRule(rule);
    setResumePreflight(null);
    setResumeConsent(false);
    setResumeError(null);
    try {
      const result = await apiJson<AlertPreflight>("/api/assistant/alerts/preflight", {
        method: "POST",
        headers: DEMO_ACCOUNT_HEADERS,
        body: JSON.stringify({ rule }),
      });
      setResumePreflight(result);
    } catch (error) {
      setResumeError(errorMessage(error).message);
    }
  }

  async function confirmResume() {
    if (!resumeRule || !resumePreflight?.preflight_token) return;
    try {
      await apiJson(`/api/assistant/alerts/${encodeURIComponent(resumeRule.rule_id)}`, {
        method: "PATCH",
        headers: DEMO_ACCOUNT_HEADERS,
        body: JSON.stringify({
          action: "resume",
          version: resumeRule.version,
          preflight_token: resumePreflight.preflight_token,
          consent: resumeConsent,
        }),
      });
      setStatus("Alert resumed after a fresh eligibility check.");
      setResumeRule(null);
    } catch (error) {
      setResumeError(errorMessage(error).message);
    }
    void loadRules();
  }

  async function requestPush() {
    // Called synchronously from the user's click (WF-09 §4.2).
    if (!("Notification" in window)) return;
    const result = await Notification.requestPermission();
    setPushPermission(result);
  }

  function toggleChannel(id: AlertChannel) {
    setInput((current) => ({
      ...current,
      channels: current.channels.includes(id)
        ? current.channels.filter((item) => item !== id)
        : [...current.channels, id],
    }));
  }

  if (!ready) {
    return (
      <PageShell width="wide" className="pt-8">
        <div aria-busy="true"><Skeleton className="h-40" /></div>
      </PageShell>
    );
  }

  if (mode !== "account") return <GuestUpdates onDemo={() => setMode("account")} />;

  const canCommit = Boolean(preflight?.preflight_token) && preflight?.decision !== "BLOCKED" && consent;

  return (
    <PageShell width="wide" className="pt-8">
      <p aria-live="polite" className="sr-only">{status}</p>
      <PageIntro
        eyebrow="Demo account · Updates"
        title="Updates and alerts"
        lead="Research, evidence and service updates for this account. Updates follow validated sources and digest cadences; nothing here is real-time market data."
        meta={
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone="iris" dot>
              {data ? `${data.unread_count} unread` : "Loading"}
            </Pill>
            <Pill>Synthetic demo account</Pill>
          </div>
        }
      />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
        {/* Inbox */}
        <section aria-labelledby="inbox-heading" className="min-w-0 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 id="inbox-heading" className="text-[16px] font-semibold text-platinum">Inbox</h2>
            <Button
              size="sm"
              variant="secondary"
              disabled={!unreadInScope}
              onClick={() => void markAllRead()}
            >
              Mark {unreadInScope || ""} {filter === "ALL" ? "updates" : `“${FILTERS.find((item) => item.id === filter)?.label}” updates`} read
            </Button>
          </div>
          <div role="group" aria-label="Filter updates" className="flex gap-1.5 overflow-x-auto pb-1">
            {FILTERS.map((item) => {
              const count = item.id === "ALL" ? data?.unread_count ?? 0 : data?.unread_by_category[item.id] ?? 0;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={filter === item.id}
                  onClick={() => setFilter(item.id)}
                  className={clsx(
                    "inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-[13px] font-medium",
                    filter === item.id ? "border-iris bg-iris/15 text-platinum" : "border-as-line text-haze hover:text-platinum"
                  )}
                >
                  {item.label}
                  {count ? <span className="rounded-full bg-iris/30 px-1.5 text-[11px] text-platinum">{count}<span className="sr-only"> unread</span></span> : null}
                </button>
              );
            })}
          </div>

          {inbox.state === "loading" ? (
            <div aria-busy="true" className="space-y-2">
              <Skeleton className="h-16" />
              <Skeleton className="h-16" />
              <Skeleton className="h-16" />
            </div>
          ) : inbox.state === "error" ? (
            <Callout
              tone="warn"
              title={inbox.status === 401 ? "Sign in required" : COPY.unavailable}
              action={
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="secondary" onClick={() => void loadInbox()} icon={<RefreshCw aria-hidden="true" className="h-3.5 w-3.5" />}>
                    Try again
                  </Button>
                  <ButtonLink size="sm" variant="ghost" href="/assistant/help">Get help</ButtonLink>
                </div>
              }
            >
              {inbox.message}
            </Callout>
          ) : !visible.length ? (
            <EmptyState
              icon={<Inbox aria-hidden="true" className="h-7 w-7" />}
              title={COPY.empty}
              description="When research, evidence or service events occur for this account, they appear here."
              action={
                <div className="flex flex-wrap justify-center gap-2">
                  <ButtonLink href="/assistant/settings" size="sm" variant="secondary">Settings</ButtonLink>
                  <ButtonLink href="/assistant" size="sm">Ask a research question</ButtonLink>
                </div>
              }
            />
          ) : (
            <ul className="space-y-2">
              {visible.map((item) => (
                <li key={item.notification_id}>
                  <button
                    type="button"
                    onClick={() => selectItem(item)}
                    aria-current={selectedId === item.notification_id ? "true" : undefined}
                    className={clsx(
                      "flex min-h-11 w-full items-start gap-3 rounded-xl border p-3.5 text-left transition-colors",
                      selectedId === item.notification_id ? "border-iris/50 bg-iris/[0.07]" : "border-as-line/70 bg-as-panel/40 hover:border-iris/40"
                    )}
                  >
                    <span aria-hidden="true" className={clsx("mt-1.5 h-2 w-2 shrink-0 rounded-full", item.status === "UNREAD" ? "bg-iris-soft" : "bg-transparent")} />
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className={clsx("text-[14px] text-platinum", item.status === "UNREAD" ? "font-semibold" : "font-medium")}>
                          {item.display.title}
                        </span>
                        <span className="sr-only">{item.status === "UNREAD" ? "Unread." : "Read."}</span>
                        {item.access_state === "RESTRICTED" ? <Lock aria-label="Access changed" className="h-3.5 w-3.5 text-warn" /> : null}
                      </span>
                      <span className="mt-0.5 line-clamp-2 block text-[13px] leading-6 text-haze">{item.display.body}</span>
                      <span className="mt-0.5 block text-[12px] text-haze/80">
                        {item.category.toLowerCase()} · {formatDateTime(item.created_at_utc, prefs.timeZone, prefs.numberLocale)}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Desktop detail */}
          {selected ? (
            <Panel className="hidden p-5 lg:block">
              {itemError ? <div className="mb-3"><FormAlert title="Could not open">{itemError}</FormAlert></div> : null}
              <UpdateDetail
                item={selected}
                timeZone={prefs.timeZone}
                locale={prefs.numberLocale}
                onOpen={() => void openSelected()}
                onHide={() => void hideSelected()}
                opening={opening}
                headingRef={detailHeading}
              />
            </Panel>
          ) : null}
        </section>

        {/* Rules and builder */}
        <aside className="min-w-0 space-y-4">
          <Panel className="p-4" >
            <div id="rules">
              <SectionHeader title="Alert rules" description="Server-held, versioned rules. Status changes are confirmed by the server." />
            </div>
            {rulesError ? <FormAlert title={COPY.unavailable}>{rulesError}</FormAlert> : null}
            {rules.length ? (
              <ul className="space-y-2">
                {rules.map((rule) => (
                  <li key={rule.rule_id} className="rounded-xl border border-as-line/70 bg-midnight-soft/40 p-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-[13px] font-semibold text-platinum">{triggerLabel(rule.trigger)}</p>
                      <Pill tone={STATUS_TONE[rule.status]}>{rule.status.toLowerCase()} · v{rule.version}</Pill>
                    </div>
                    <p className="mt-0.5 text-[12px] leading-5 text-haze">{rule.subject_label}</p>
                    <p className="text-[12px] leading-5 text-haze">
                      {cadenceLabel(rule.cadence)} · {rule.channels.map((id) => ALERT_CHANNELS.find((item) => item.id === id)?.label).join(", ")}
                      {rule.quiet_hours.enabled ? ` · quiet ${rule.quiet_hours.start}–${rule.quiet_hours.end} ${rule.quiet_hours.time_zone}` : ""}
                    </p>
                    {rule.status_reason ? <p className="mt-1 text-[12px] leading-5 text-warn">{rule.status_reason}</p> : null}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {rule.status === "ACTIVE" ? (
                        <Button size="sm" variant="ghost" onClick={() => void transition(rule, "pause")} icon={<Pause aria-hidden="true" className="h-3.5 w-3.5" />}>
                          Pause
                        </Button>
                      ) : null}
                      {rule.status === "PAUSED" ? (
                        <Button size="sm" variant="ghost" onClick={() => void startResume(rule)} icon={<Play aria-hidden="true" className="h-3.5 w-3.5" />}>
                          Resume…
                        </Button>
                      ) : null}
                      {!rule.unsubscribed && rule.status !== "EXPIRED" ? (
                        <Button size="sm" variant="ghost" onClick={() => void transition(rule, "unsubscribe")} icon={<BellOff aria-hidden="true" className="h-3.5 w-3.5" />}>
                          Unsubscribe
                        </Button>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            ) : !rulesError ? (
              <p className="text-[13px] text-haze">No alert rules yet.</p>
            ) : null}
          </Panel>

          <Panel className="p-4">
            <SectionHeader title="Create an alert" description="Choose a canonical subject and a supported event. Checks run before anything is enabled." />
            <div className="space-y-4">
              <div>
                <label htmlFor="alert-subject" className="mb-1 block text-[13px] font-medium text-platinum">Subject</label>
                <Select
                  id="alert-subject"
                  value={input.subject_ref}
                  onChange={(event) => setInput({ ...input, subject_ref: event.target.value })}
                >
                  <option value="">Choose a subject</option>
                  {subjects.map((subject) => (
                    <option key={subject.ref} value={subject.ref}>{subject.label}</option>
                  ))}
                </Select>
              </div>

              <fieldset>
                <legend className="text-[13px] font-medium text-platinum">Event</legend>
                <div className="mt-1.5 space-y-1.5">
                  {ALERT_TRIGGERS.map((trigger) => (
                    <label key={trigger.id} className={clsx("flex min-h-11 items-start gap-2 rounded-lg border px-3 py-2", trigger.available ? "cursor-pointer" : "cursor-not-allowed opacity-60", input.trigger === trigger.id ? "border-iris/50 bg-iris/[0.06]" : "border-as-line/60")}>
                      <input
                        type="radio"
                        name="alert-trigger"
                        disabled={!trigger.available}
                        checked={input.trigger === trigger.id}
                        onChange={() => setInput({ ...input, trigger: trigger.id })}
                        className="mt-1 h-4 w-4 accent-[#6f5bff]"
                      />
                      <span>
                        <span className="block text-[13px] font-medium text-platinum">{trigger.label}</span>
                        <span className="block text-[12px] leading-5 text-haze">{trigger.available ? trigger.semantics : trigger.reason}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-[13px] font-medium text-platinum">Cadence</legend>
                <div className="mt-1.5 space-y-1.5">
                  {ALERT_CADENCES.map((cadence) => (
                    <label key={cadence.id} className={clsx("flex min-h-11 cursor-pointer items-start gap-2 rounded-lg border px-3 py-2", input.cadence === cadence.id ? "border-iris/50 bg-iris/[0.06]" : "border-as-line/60")}>
                      <input
                        type="radio"
                        name="alert-cadence"
                        checked={input.cadence === cadence.id}
                        onChange={() => setInput({ ...input, cadence: cadence.id })}
                        className="mt-1 h-4 w-4 accent-[#6f5bff]"
                      />
                      <span>
                        <span className="block text-[13px] font-medium text-platinum">{cadence.label}</span>
                        <span className="block text-[12px] leading-5 text-haze">{cadence.description}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-[13px] font-medium text-platinum">Quiet hours</legend>
                <Checkbox
                  checked={input.quiet_hours.enabled}
                  onChange={(enabled) => setInput({ ...input, quiet_hours: { ...input.quiet_hours, enabled } })}
                  label="Hold deliveries during quiet hours"
                  description={`Time zone: ${input.quiet_hours.time_zone}. Daylight-saving changes follow the zone's rules.`}
                />
                {input.quiet_hours.enabled ? (
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <label className="text-[12px] text-haze">
                      From
                      <input type="time" value={input.quiet_hours.start} onChange={(event) => setInput({ ...input, quiet_hours: { ...input.quiet_hours, start: event.target.value } })} className="mt-1 h-11 w-full rounded-lg border border-as-line bg-midnight-soft px-2 text-[13px] text-platinum" />
                    </label>
                    <label className="text-[12px] text-haze">
                      Until
                      <input type="time" value={input.quiet_hours.end} onChange={(event) => setInput({ ...input, quiet_hours: { ...input.quiet_hours, end: event.target.value } })} className="mt-1 h-11 w-full rounded-lg border border-as-line bg-midnight-soft px-2 text-[13px] text-platinum" />
                    </label>
                  </div>
                ) : null}
              </fieldset>

              <fieldset>
                <legend className="text-[13px] font-medium text-platinum">Delivery</legend>
                <div className="mt-1.5 space-y-1.5">
                  {ALERT_CHANNELS.map((channel) => (
                    <div key={channel.id}>
                      <Checkbox
                        checked={input.channels.includes(channel.id)}
                        onChange={() => toggleChannel(channel.id)}
                        disabled={!channel.available}
                        label={channel.label}
                        description={channel.available ? channel.description : `${channel.description} ${channel.reason ?? ""}`}
                      />
                      {channel.id === "PUSH" ? (
                        <div className="ml-7 mt-1 rounded-lg border border-as-line/60 bg-midnight-soft/30 p-2.5 text-[12px] leading-5 text-haze">
                          {pushPermission === "unsupported" ? (
                            "This browser does not support web notifications here."
                          ) : pushPermission === "denied" ? (
                            <>{COPY.pushOff} To change this, open your browser&apos;s site settings for this page.</>
                          ) : pushPermission === "granted" ? (
                            "Browser permission is granted, but device registration is not available in this build, so nothing is sent."
                          ) : (
                            <>
                              Browser notifications need your permission. You can turn them off at any time in
                              your browser settings.{" "}
                              <button type="button" onClick={() => void requestPush()} className="inline-flex min-h-11 items-center font-semibold text-iris-soft hover:text-white">
                                Enable browser notifications
                              </button>
                            </>
                          )}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </fieldset>

              {preflight ? (
                <ul aria-label="Eligibility checks" className="space-y-1.5">
                  {preflight.checks.map((check) => (
                    <li key={check.id} className={clsx("flex items-start gap-2 rounded-lg border px-3 py-2", check.status === "PASS" ? "border-ok/25 bg-ok/[0.04]" : check.status === "WARN" ? "border-warn/30 bg-warn/[0.05]" : "border-danger/30 bg-danger/[0.05]")}>
                      {check.status === "PASS" ? <CheckCircle2 aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 text-ok" /> : check.status === "WARN" ? <AlertTriangle aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 text-warn" /> : <XCircle aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 text-danger" />}
                      <span className="text-[12px] leading-5">
                        <span className="font-semibold text-platinum">{check.title}</span>{" "}
                        <span className="sr-only">{check.status === "PASS" ? "passed" : check.status === "WARN" ? "needs review" : "blocked"}.</span>
                        <span className="text-haze">{check.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {preflight && preflight.decision !== "BLOCKED" ? (
                <Checkbox
                  checked={consent}
                  onChange={setConsent}
                  label="I want these alert updates for this subject"
                  description="You can pause or unsubscribe at any time. Essential account messages are separate."
                />
              ) : null}

              <p role="status" className="text-[13px] leading-6 text-platinum/85">{builderStatus}</p>
              {builderError ? <FormAlert title="Alert not enabled">{builderError}</FormAlert> : null}

              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="secondary" loading={checking} onClick={() => void runPreflight()} icon={<Bell aria-hidden="true" className="h-3.5 w-3.5" />}>
                  {preflight ? "Check again" : "Check eligibility"}
                </Button>
                <Button size="sm" disabled={!canCommit} loading={committing} onClick={() => void commit()}>
                  Enable alert
                </Button>
                <Button size="sm" variant="ghost" onClick={keepDraft}>Keep as draft</Button>
              </div>
            </div>

            {drafts.length ? (
              <div className="mt-4 border-t border-as-line/60 pt-3">
                <p className="text-[13px] font-semibold text-platinum">Local drafts</p>
                <p className="text-[12px] leading-5 text-haze">Drafts stay on this device, are never active and send nothing.</p>
                <ul className="mt-2 space-y-1.5">
                  {drafts.map((draft) => (
                    <li key={draft.draft_id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-as-line/60 px-3 py-2 text-[12px] text-haze">
                      <span>
                        <Pill tone="neutral">Draft</Pill>{" "}
                        {draft.trigger ? triggerLabel(draft.trigger) : "No event"} · {subjects.find((item) => item.ref === draft.subject_ref)?.ticker ?? "No subject"}
                      </span>
                      <span className="flex gap-1">
                        <Button size="sm" variant="ghost" onClick={() => setInput({ subject_ref: draft.subject_ref, trigger: draft.trigger, cadence: draft.cadence, channels: draft.channels, quiet_hours: draft.quiet_hours })}>Load</Button>
                        <Button size="sm" variant="ghost" onClick={() => { removeAlertDraft(draft.draft_id); setDrafts(loadAlertDrafts()); }}>Discard</Button>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Panel>
          <p className="font-mono text-[11px] uppercase leading-5 tracking-[0.1em] text-haze/70">{FIXTURE_LABEL}</p>
        </aside>
      </div>

      {/* Mobile full-screen detail; focus moves to the heading, returns on close. */}
      <Dialog
        open={mobileDetail && Boolean(selected)}
        onClose={() => setMobileDetail(false)}
        title={selected?.display.title ?? "Update"}
        eyebrow="Update"
        width="md"
      >
        {selected ? (
          <>
            {itemError ? <div className="mb-3"><FormAlert title="Could not open">{itemError}</FormAlert></div> : null}
            <UpdateDetail
              item={selected}
              timeZone={prefs.timeZone}
              locale={prefs.numberLocale}
              onOpen={() => void openSelected()}
              onHide={() => void hideSelected()}
              opening={opening}
            />
          </>
        ) : null}
      </Dialog>

      <Dialog
        open={Boolean(resumeRule)}
        onClose={() => setResumeRule(null)}
        title="Resume this alert?"
        eyebrow="Fresh eligibility check"
        width="md"
      >
        {resumeError ? <FormAlert title="Cannot resume">{resumeError}</FormAlert> : null}
        {!resumePreflight && !resumeError ? <p role="status" className="text-[13px] text-haze">Checking eligibility…</p> : null}
        {resumePreflight ? (
          <div className="space-y-3">
            <ul className="space-y-1.5">
              {resumePreflight.checks.map((check) => (
                <li key={check.id} className="text-[12px] leading-5 text-haze">
                  <span className="font-semibold text-platinum">{check.title}</span> ({check.status.toLowerCase()}): {check.detail}
                </li>
              ))}
            </ul>
            {resumePreflight.decision !== "BLOCKED" ? (
              <Checkbox
                checked={resumeConsent}
                onChange={setResumeConsent}
                label="I want these alert updates again"
              />
            ) : (
              <p className="text-[13px] text-warn">This alert stays paused because a blocking check remains.</p>
            )}
            <div className="flex gap-2">
              <Button size="sm" disabled={!resumeConsent || resumePreflight.decision === "BLOCKED"} onClick={() => void confirmResume()}>
                Resume alert
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setResumeRule(null)}>Keep paused</Button>
            </div>
          </div>
        ) : null}
      </Dialog>

      <p className="mt-6 text-[12px] text-haze/80">
        Read and unread markers describe this inbox only; they are not market-data freshness.{" "}
        <Link href="/assistant/help" className="text-iris-soft hover:text-white">How updates work</Link>
      </p>
    </PageShell>
  );
}
