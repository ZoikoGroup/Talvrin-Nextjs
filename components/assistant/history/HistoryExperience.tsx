"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import {
  ArrowUpRight,
  Clock3,
  Download,
  FileWarning,
  FolderPlus,
  History,
  Lock,
  PencilLine,
  Plus,
  RefreshCcw,
  Save,
  Scale,
  Search,
  ShieldCheck,
  Trash2,
  X,
} from "lucide-react";
import type { AnswerStatus } from "@/lib/assistant/types";
import {
  loadConfig,
  readSessionEntryStatus,
  type SessionEntry,
} from "@/lib/assistant/client";
import { FIXTURE_LABEL, SCOPES, STATUS_META } from "@/lib/assistant/taxonomy";
import { formatDateTime } from "@/lib/assistant/format";
import { useDemoMode } from "@/components/assistant/shell/DemoModeProvider";
import { useAssistantPrefs } from "@/components/assistant/shell/AssistantPrefsProvider";
import { Pill, StatusBadge } from "@/components/assistant/ui/Badge";
import { Button, ButtonLink } from "@/components/assistant/ui/Button";
import { Dialog } from "@/components/assistant/ui/Dialog";
import { Callout, EmptyState } from "@/components/assistant/ui/Misc";
import { Input, Select } from "@/components/assistant/ui/Field";
import { PageIntro, PageShell, Panel } from "@/components/assistant/ui/Panel";
import { clearScopeLines, clearThisSession } from "./clearSession";

type StatusFilter = "ALL" | "READY" | "PARTIAL" | "CONFLICT" | "PROGRESS" | "CLOSED";
type SortId = "newest" | "oldest" | "title";

const STATUS_FILTERS: { id: StatusFilter; label: string }[] = [
  { id: "ALL", label: "All" },
  { id: "READY", label: "Ready" },
  { id: "PARTIAL", label: "Partial" },
  { id: "CONFLICT", label: "Conflict" },
  { id: "PROGRESS", label: "In progress" },
  { id: "CLOSED", label: "Closed" },
];

const SORTS: { id: SortId; label: string }[] = [
  { id: "newest", label: "Newest first" },
  { id: "oldest", label: "Oldest first" },
  { id: "title", label: "Title A–Z" },
];

const SEARCH_DEBOUNCE_MS = 250;
const SAVED_DISABLED_COPY = "Saved research is not available yet.";

function entryState(entry: SessionEntry): StatusFilter | string {
  if (entry.jobStatus === "RUNNING") return "PROGRESS";
  if (
    entry.jobStatus === "CANCELLED" ||
    entry.jobStatus === "EXPIRED" ||
    entry.jobStatus === "FAILED"
  ) {
    return "CLOSED";
  }
  return entry.answerState;
}

function stateLabel(entry: SessionEntry): string {
  if (entry.jobStatus === "RUNNING") return "In progress";
  if (entry.jobStatus === "CANCELLED") return "Cancelled";
  if (entry.jobStatus === "EXPIRED") return "Expired";
  if (entry.jobStatus === "FAILED") return "Failed";
  return STATUS_META[entry.answerState].label;
}

function scopeLabels(entry: SessionEntry): string {
  return entry.scopeIds
    .map((id) => SCOPES.find((scope) => scope.id === id)?.label ?? id)
    .join(" · ");
}

function time(value: string) {
  const parsed = new Date(value).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
}

/** Stable, deterministic order (WF-06 HIS-04, P0-34): ties break on ref. */
function compareEntries(sort: SortId) {
  return (a: SessionEntry, b: SessionEntry) => {
    let delta = 0;
    if (sort === "newest") delta = time(b.createdAt) - time(a.createdAt);
    else if (sort === "oldest") delta = time(a.createdAt) - time(b.createdAt);
    else delta = a.question.localeCompare(b.question, "en", { sensitivity: "base" });
    return delta !== 0 ? delta : a.ref.localeCompare(b.ref);
  };
}

type SavedFlag = "loading" | "ON" | "OFF";

export default function HistoryExperience({
  view = "session",
}: {
  view?: "session" | "saved";
}) {
  const { mode, ready } = useDemoMode();
  const guest = mode === "guest";

  return (
    <PageShell width="wide" className="pt-8">
      <PageIntro
        eyebrow={
          view === "saved"
            ? "WF-06 · saved research"
            : "WF-06 · this session"
        }
        title={view === "saved" ? "Saved research" : "This session"}
        lead={
          view === "saved"
            ? "Saved research needs an eligible account and an explicit save for each item. Nothing from a guest session is added automatically."
            : "Research here is temporary and is not available on another device. Signing in never imports it automatically."
        }
        meta={
          <div className="flex flex-wrap items-center gap-2">
            {guest ? (
              <Pill tone="warn" dot>
                Guest · Temporary
              </Pill>
            ) : (
              <>
                <Pill tone="iris" dot>
                  Demo account · no real identity
                </Pill>
                <Pill tone="neutral">Saved research · Disabled</Pill>
              </>
            )}
          </div>
        }
        actions={
          <ButtonLink
            href="/assistant"
            size="sm"
            icon={<Plus aria-hidden="true" className="h-3.5 w-3.5" />}
          >
            New research
          </ButtonLink>
        }
      />

      <ViewSwitch view={view} guest={guest} />

      {view === "saved" ? (
        <SavedView guest={guest} ready={ready} />
      ) : (
        <SessionView guest={guest} ready={ready} mode={mode} />
      )}
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* View switch (WF-06 HIS-01, signed-in annotation 03)                 */
/* ------------------------------------------------------------------ */

function ViewSwitch({ view, guest }: { view: "session" | "saved"; guest: boolean }) {
  const base =
    "inline-flex min-h-11 items-center gap-1.5 rounded-lg border px-3.5 text-[13px] font-semibold transition-colors";
  return (
    <nav aria-label="Research views" className="mb-4">
      <ul className="flex flex-wrap gap-1.5">
        <li>
          <Link
            href="/assistant/history"
            aria-current={view === "session" ? "page" : undefined}
            className={clsx(
              base,
              view === "session"
                ? "border-iris/60 bg-iris/[0.12] text-iris-soft"
                : "border-as-line text-haze hover:border-iris/40 hover:text-platinum"
            )}
          >
            <History aria-hidden="true" className="h-3.5 w-3.5" />
            This session
          </Link>
        </li>
        <li>
          {guest ? (
            <Link
              href="/assistant/access?intent=open_saved&return=%2Fassistant%2Fhistory%3Fview%3Dsaved"
              className={clsx(
                base,
                "border-as-line text-haze hover:border-iris/40 hover:text-platinum"
              )}
            >
              <Lock aria-hidden="true" className="h-3.5 w-3.5" />
              Saved research
              <span className="font-mono text-[12px] uppercase tracking-wider text-haze/80">
                Sign in required
              </span>
            </Link>
          ) : (
            <Link
              href="/assistant/history?view=saved"
              aria-current={view === "saved" ? "page" : undefined}
              className={clsx(
                base,
                view === "saved"
                  ? "border-iris/60 bg-iris/[0.12] text-iris-soft"
                  : "border-as-line text-haze hover:border-iris/40 hover:text-platinum"
              )}
            >
              <Save aria-hidden="true" className="h-3.5 w-3.5" />
              Saved research
              <span className="font-mono text-[12px] uppercase tracking-wider text-haze/80">
                Not available yet
              </span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* This session (guest list; also shown, unchanged, in demo-account)   */
/* ------------------------------------------------------------------ */

function SessionView({
  guest,
  ready,
  mode,
}: {
  guest: boolean;
  ready: boolean;
  mode: "guest" | "account";
}) {
  const router = useRouter();
  const { prefs } = useAssistantPrefs();
  const [entries, setEntries] = useState<SessionEntry[]>([]);
  const [expiredCount, setExpiredCount] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [queryInput, setQueryInput] = useState("");
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("ALL");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL");
  const [sort, setSort] = useState<SortId>("newest");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [clearing, setClearing] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const [clearNotice, setClearNotice] = useState<string | null>(null);
  const [focusHeading, setFocusHeading] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const savedReasonId = useId();

  const refresh = useCallback(() => {
    const status = readSessionEntryStatus();
    setEntries(status.active);
    setExpiredCount(status.expiredCount);
  }, []);

  useEffect(() => {
    if (!ready) return;
    refresh();
    setHydrated(true);
  }, [ready, mode, refresh]);

  // HIS-03: scoped, debounced query.
  useEffect(() => {
    const handle = window.setTimeout(() => setQuery(queryInput), SEARCH_DEBOUNCE_MS);
    return () => window.clearTimeout(handle);
  }, [queryInput]);

  useEffect(() => {
    if (!focusHeading) return;
    headingRef.current?.focus();
    setFocusHeading(false);
  }, [focusHeading]);

  const typeOptions = useMemo(() => {
    const present = new Set(entries.flatMap((entry) => entry.scopeIds));
    return SCOPES.filter((scope) => present.has(scope.id));
  }, [entries]);

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return entries
      .filter((entry) => {
        if (typeFilter !== "ALL" && !entry.scopeIds.includes(typeFilter as never)) {
          return false;
        }
        if (statusFilter !== "ALL" && entryState(entry) !== statusFilter) return false;
        if (!search) return true;
        return (
          entry.question.toLowerCase().includes(search) ||
          entry.ref.toLowerCase().includes(search)
        );
      })
      .sort(compareEntries(sort));
  }, [entries, query, typeFilter, statusFilter, sort]);

  const filtersActive =
    query.trim() !== "" || typeFilter !== "ALL" || statusFilter !== "ALL";

  // HIS-03 / §12: announce result counts without moving focus.
  useEffect(() => {
    if (!hydrated || !entries.length) return;
    setAnnouncement(
      filtersActive
        ? filtered.length
          ? `${filtered.length} of ${entries.length} items in this session match.`
          : "No matching items."
        : `${entries.length} item${entries.length === 1 ? "" : "s"} in this session.`
    );
  }, [filtered.length, entries.length, filtersActive, hydrated]);

  function clearSearch() {
    setQueryInput("");
    setQuery("");
    searchRef.current?.focus();
  }

  async function confirmClear() {
    setClearing(true);
    const result = await clearThisSession();
    setClearing(false);
    setConfirmOpen(false);
    refresh();
    setQueryInput("");
    setQuery("");
    setStatusFilter("ALL");
    setTypeFilter("ALL");
    const message =
      result.itemCount === 0
        ? "This session was cleared."
        : `This session was cleared. ${result.itemCount} item${
            result.itemCount === 1 ? "" : "s"
          } removed from this tab.`;
    const extra =
      result.unconfirmed > 0
        ? ` The server did not confirm ${result.unconfirmed} reference${
            result.unconfirmed === 1 ? "" : "s"
          }; this tab now uses a new session, so they cannot be opened from here.`
        : "";
    setClearNotice(message + extra);
    setAnnouncement(message + extra);
    setFocusHeading(true);
  }

  async function startNewSession() {
    await clearThisSession();
    router.push("/assistant");
  }

  const expiredState = hydrated && entries.length === 0 && expiredCount > 0;

  return (
    <>
      <p role="status" aria-live="polite" className="sr-only">
        {announcement}
      </p>

      {guest ? (
        <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-warn/25 bg-warn/[0.05] p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-2.5">
            <Lock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-warn" />
            <div>
              <p className="text-[12px] font-semibold text-platinum">
                Temporary session · not saved
              </p>
              <p className="mt-0.5 text-[11px] leading-5 text-haze">
                Research here is temporary and is not available on another
                device. Each item expires at the time shown on it and cannot be
                recovered afterwards. Signing in never adds these items to an
                account by itself.
              </p>
            </div>
          </div>
          <ButtonLink
            href="/assistant/access?intent=save&return=%2Fassistant%2Fhistory"
            variant="secondary"
            size="sm"
            className="shrink-0"
          >
            Sign in to choose research to save to your account
          </ButtonLink>
        </div>
      ) : (
        <div className="mb-4 flex flex-col gap-2.5 rounded-2xl border border-iris/25 bg-iris/[0.05] p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-2.5">
            <ShieldCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-iris-soft" />
            <div>
              <p id={savedReasonId} className="text-[12px] font-semibold text-platinum">
                {SAVED_DISABLED_COPY}
              </p>
              <p className="mt-0.5 text-[11px] leading-5 text-haze">
                Items below belong to this browser tab&apos;s temporary session.
                They are not saved research and are never added to the demo
                account without an explicit, item-by-item save.
              </p>
            </div>
          </div>
          <Link
            href="/assistant/settings#data"
            className="inline-flex min-h-11 shrink-0 items-center text-[11px] font-semibold text-iris-soft hover:text-white"
          >
            Data controls
          </Link>
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="min-w-0">
          {clearNotice ? (
            <Callout tone="success" title="Session cleared" className="mb-3">
              {clearNotice} Cleared research cannot be recovered.
            </Callout>
          ) : null}

          {hydrated && entries.length > 0 && expiredCount > 0 ? (
            <Callout tone="warn" title="Part of this session has ended" className="mb-3">
              {expiredCount} earlier item{expiredCount === 1 ? " has" : "s have"}{" "}
              expired and cannot be recovered or opened again.
            </Callout>
          ) : null}

          {entries.length > 0 ? (
            <Panel className="p-3 sm:p-4">
              <div className="grid gap-2.5 md:grid-cols-[minmax(0,1fr)_auto_auto] md:items-end">
                <div className="min-w-0">
                  <label
                    htmlFor="history-search"
                    className="mb-1 block text-[11px] font-semibold text-platinum"
                  >
                    Search this session
                  </label>
                  <div className="relative">
                    <Search
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-haze"
                    />
                    <Input
                      ref={searchRef}
                      id="history-search"
                      type="search"
                      value={queryInput}
                      onChange={(event) => setQueryInput(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Escape" && queryInput) {
                          event.preventDefault();
                          clearSearch();
                        }
                      }}
                      placeholder="Questions or references"
                      className="pl-9 pr-11"
                      autoComplete="off"
                      aria-describedby="history-search-note"
                    />
                    {queryInput ? (
                      <button
                        type="button"
                        onClick={clearSearch}
                        aria-label="Clear search"
                        className="absolute right-0 top-0 inline-flex h-11 w-11 items-center justify-center rounded-xl text-haze hover:text-platinum"
                      >
                        <X aria-hidden="true" className="h-4 w-4" />
                      </button>
                    ) : null}
                  </div>
                  <p id="history-search-note" className="mt-1 text-[12px] leading-4 text-haze/75">
                    Searches titles and references in this tab only. Nothing is
                    sent to a server.
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="history-type"
                    className="mb-1 block text-[11px] font-semibold text-platinum"
                  >
                    Type
                  </label>
                  <Select
                    id="history-type"
                    value={typeFilter}
                    onChange={(event) => setTypeFilter(event.target.value)}
                    className="md:w-48"
                  >
                    <option value="ALL">All types</option>
                    {typeOptions.map((scope) => (
                      <option key={scope.id} value={scope.id}>
                        {scope.label}
                      </option>
                    ))}
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="history-sort"
                    className="mb-1 block text-[11px] font-semibold text-platinum"
                  >
                    Sort
                  </label>
                  <Select
                    id="history-sort"
                    value={sort}
                    onChange={(event) => setSort(event.target.value as SortId)}
                    className="md:w-44"
                  >
                    {SORTS.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
              <div
                className="as-scroll mt-2.5 flex gap-1 overflow-x-auto pb-1"
                role="group"
                aria-label="Filter by status"
              >
                {STATUS_FILTERS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={statusFilter === option.id}
                    onClick={() => setStatusFilter(option.id)}
                    className={
                      statusFilter === option.id
                        ? "min-h-11 min-w-11 shrink-0 rounded-full border border-iris/60 bg-iris/[0.12] px-3 text-[11px] font-semibold text-iris-soft"
                        : "min-h-11 min-w-11 shrink-0 rounded-full border border-as-line bg-midnight-soft/40 px-3 text-[11px] font-medium text-haze hover:border-iris/40 hover:text-platinum"
                    }
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </Panel>
          ) : null}

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1">
            <h2
              ref={headingRef}
              id="session-list-heading"
              tabIndex={-1}
              className="text-[13px] font-semibold text-platinum focus:outline-none focus-visible:ring-2 focus-visible:ring-iris/40"
            >
              {hydrated
                ? entries.length
                  ? `Recent in this session · ${filtered.length} of ${entries.length}`
                  : "Recent in this session"
                : "Loading this session…"}
            </h2>
            {entries.length || expiredCount ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setConfirmOpen(true)}
                icon={<Trash2 aria-hidden="true" className="h-3.5 w-3.5" />}
                className="hover:!text-danger"
              >
                Clear this session
              </Button>
            ) : null}
          </div>

          {!hydrated ? (
            <div className="mt-3 space-y-2" aria-busy="true">
              {[0, 1].map((item) => (
                <div
                  key={item}
                  className="as-motion-safe h-32 animate-pulse rounded-2xl border border-as-line/60 bg-as-panel/40"
                />
              ))}
            </div>
          ) : expiredState ? (
            <div className="mt-3">
              <EmptyState
                icon={<Clock3 aria-hidden="true" className="h-7 w-7" />}
                title="This temporary session has ended."
                description="Its research cannot be recovered or opened on another device. Start a new session to ask a new question."
                action={
                  <Button size="sm" onClick={startNewSession}>
                    Start new session
                  </Button>
                }
              />
            </div>
          ) : filtered.length ? (
            <ul aria-labelledby="session-list-heading" className="mt-3 space-y-2">
              {filtered.map((entry) => (
                <SessionCard
                  key={entry.ref}
                  entry={entry}
                  guest={guest}
                  timeZone={prefs.timeZone}
                  locale={prefs.numberLocale}
                  savedReasonId={savedReasonId}
                />
              ))}
            </ul>
          ) : entries.length ? (
            <div className="mt-3">
              <EmptyState
                icon={<Search aria-hidden="true" className="h-7 w-7" />}
                title="No matching items."
                description={
                  typeFilter !== "ALL"
                    ? "Nothing in this session matches the search and status filter for the selected type. Clearing the search keeps your type selection."
                    : "Nothing in this session matches the current search and status filter."
                }
                action={
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setQueryInput("");
                      setQuery("");
                      setStatusFilter("ALL");
                      searchRef.current?.focus();
                    }}
                  >
                    Clear search
                  </Button>
                }
              />
            </div>
          ) : (
            <div className="mt-3">
              <EmptyState
                icon={<History aria-hidden="true" className="h-7 w-7" />}
                title="Nothing in this session yet."
                description="You have no research in this session yet. Start a new question."
                action={
                  <ButtonLink href="/assistant" size="sm">
                    Start a new question
                  </ButtonLink>
                }
              />
            </div>
          )}
        </div>

        <aside className="flex min-w-0 flex-col gap-3">
          <Panel className="p-4">
            <div className="flex items-center gap-2">
              <Scale aria-hidden="true" className="h-4 w-4 text-iris-soft" />
              <h2 className="text-[12px] font-semibold text-platinum">Comparisons</h2>
            </div>
            <p className="mt-1.5 text-[11px] leading-5 text-haze">
              Comparison snapshots are point-in-time and expire. Build a new one
              from the comparison surface; results are not converted into
              research history.
            </p>
            <ButtonLink
              href="/assistant/compare"
              variant="secondary"
              size="sm"
              className="mt-3 w-full"
            >
              Open comparison builder
            </ButtonLink>
          </Panel>

          <Panel className="p-4">
            <h2 className="text-[12px] font-semibold text-platinum">
              How this session works
            </h2>
            <ul className="mt-2 space-y-1.5">
              {[
                "Items are tied to this browser tab, not to an identity.",
                "They are not available on another device or in another tab.",
                "Signing in never imports them automatically. You choose each item to save once saving is available.",
                "Clearing this session stops its links opening immediately.",
                "Expired items cannot be recovered.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-[11px] leading-5 text-haze">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-haze/60"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Panel>

          <Callout tone="info" title="Export is separate">
            <span className="flex items-start gap-1.5">
              <FileWarning aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              <span>
                A research item is not the same as a citation package. Exports
                require an eligible account and a fresh rights check at
                generation.
              </span>
            </span>
          </Callout>

          <p className="font-mono text-[11px] uppercase leading-4 tracking-[0.1em] text-haze/60">
            {FIXTURE_LABEL}
          </p>
        </aside>
      </div>

      <Dialog
        open={confirmOpen}
        onClose={() => {
          if (!clearing) setConfirmOpen(false);
        }}
        title="Clear this temporary session?"
        eyebrow="Clear this session"
        description="Review exactly what changes. This is not the same as deleting saved research."
        width="md"
        footer={
          <div className="flex flex-wrap justify-end gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setConfirmOpen(false)}
              disabled={clearing}
            >
              Cancel
            </Button>
            <Button variant="danger" size="sm" onClick={confirmClear} loading={clearing}>
              Clear this session
            </Button>
          </div>
        }
      >
        <div className="rounded-xl border border-warn/25 bg-warn/[0.06] p-3.5">
          <p className="text-[12px] font-semibold text-warn">Scope</p>
          <ul className="mt-2 space-y-1.5 text-[12px] leading-5 text-haze">
            {clearScopeLines(entries.length + expiredCount).map((line) => (
              <li key={line} className="flex items-start gap-1.5">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-haze"
                />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </Dialog>
    </>
  );
}

function SessionCard({
  entry,
  guest,
  timeZone,
  locale,
  savedReasonId,
}: {
  entry: SessionEntry;
  guest: boolean;
  timeZone: string;
  locale: string;
  savedReasonId: string;
}) {
  const titleId = `entry-${entry.ref}-title`;
  const closed =
    entry.jobStatus === "RUNNING" ||
    entry.jobStatus === "CANCELLED" ||
    entry.jobStatus === "EXPIRED" ||
    entry.jobStatus === "FAILED";
  return (
    <li
      aria-labelledby={titleId}
      className="rounded-2xl border border-as-line bg-as-panel/60 p-4 transition-colors hover:border-as-line/90"
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {closed ? (
            <Pill tone={entry.jobStatus === "RUNNING" ? "iris" : "warn"}>
              {stateLabel(entry)}
            </Pill>
          ) : (
            <StatusBadge status={entry.answerState as AnswerStatus} />
          )}
          <Pill tone="neutral">{scopeLabels(entry)}</Pill>
          <Pill tone="warn">This session · Temporary</Pill>
        </div>
        <span className="font-mono text-[12px] text-haze/80">
          Created {formatDateTime(entry.createdAt, timeZone, locale)}
        </span>
      </div>

      <h3 id={titleId} className="mt-2 text-[15px] font-semibold leading-6 text-platinum">
        {entry.question}
      </h3>
      <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[12px] uppercase tracking-wider text-haze/80">
        <span>Ref {entry.ref}</span>
        <span className="inline-flex items-center gap-1">
          <Clock3 aria-hidden="true" className="h-3 w-3" />
          Expires {formatDateTime(entry.expiresAt, timeZone, locale)}
        </span>
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-as-line/60 pt-2.5">
        <ButtonLink
          href={`/assistant/session/${entry.ref}`}
          variant="secondary"
          size="sm"
          icon={<ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />}
          aria-describedby={titleId}
        >
          Open
        </ButtonLink>
        {entry.jobStatus === "READY" ? (
          guest ? (
            <ButtonLink
              href={`/assistant/access?intent=export&return=${encodeURIComponent(
                `/assistant/session/${entry.ref}`
              )}`}
              variant="ghost"
              size="sm"
              icon={<Lock aria-hidden="true" className="h-3.5 w-3.5" />}
            >
              Export needs an account
            </ButtonLink>
          ) : (
            <ButtonLink
              href={`/assistant/export?ref=${entry.ref}`}
              variant="ghost"
              size="sm"
              icon={<Download aria-hidden="true" className="h-3.5 w-3.5" />}
            >
              Export
            </ButtonLink>
          )
        ) : null}
        {guest ? (
          <ButtonLink
            href={`/assistant/access?intent=save&return=${encodeURIComponent(
              "/assistant/history"
            )}`}
            variant="ghost"
            size="sm"
            icon={<Lock aria-hidden="true" className="h-3.5 w-3.5" />}
          >
            Sign in to save
          </ButtonLink>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            disabled
            aria-describedby={savedReasonId}
            icon={<Save aria-hidden="true" className="h-3.5 w-3.5" />}
          >
            Save · not available yet
          </Button>
        )}
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Saved research (WF-06 §3, FEATURE_DISABLED / AUTH_REQUIRED)         */
/* ------------------------------------------------------------------ */

const GATED_CONTROLS: {
  id: string;
  label: string;
  icon: typeof Save;
  reason: string;
}[] = [
  {
    id: "HIS-10/11",
    label: "Save selected items",
    icon: Save,
    reason:
      "Needs an approved save flow with per-item selection and a fresh rights check (decisions D1, D2).",
  },
  {
    id: "HIS-13",
    label: "Save receipts",
    icon: ShieldCheck,
    reason: "Per-item saved, partial and denied receipts arrive with the save flow.",
  },
  {
    id: "HIS-14",
    label: "Rename",
    icon: PencilLine,
    reason: "Renaming applies only to saved items, which do not exist yet.",
  },
  {
    id: "HIS-15",
    label: "Collections",
    icon: FolderPlus,
    reason: "Folders and tags need an approved sharing and tenancy model (decision D5).",
  },
  {
    id: "HIS-17",
    label: "Recheck sources",
    icon: RefreshCcw,
    reason: "Snapshot and recheck rules depend on per-feed rights (decisions D2, D4).",
  },
  {
    id: "HIS-19",
    label: "Delete saved copy",
    icon: Trash2,
    reason:
      "Deletion needs an approved retention and erasure policy (decision D3). To remove temporary research, use Clear this session.",
  },
];

function SavedView({ guest, ready }: { guest: boolean; ready: boolean }) {
  const [flag, setFlag] = useState<SavedFlag>("loading");

  useEffect(() => {
    if (!ready || guest) return;
    let active = true;
    loadConfig()
      .then((config) => {
        if (active) setFlag(config.featureFlags?.savedResearch === "ON" ? "ON" : "OFF");
      })
      .catch(() => {
        // Fail closed: an unknown gate is treated as disabled.
        if (active) setFlag("OFF");
      });
    return () => {
      active = false;
    };
  }, [ready, guest]);

  if (!ready) {
    return (
      <div aria-busy="true" className="h-40 animate-pulse rounded-2xl border border-as-line/60 bg-as-panel/40 as-motion-safe" />
    );
  }

  if (guest) {
    return (
      <EmptyState
        icon={<Lock aria-hidden="true" className="h-7 w-7" />}
        title="Sign in to save your research."
        description="Saved research needs an eligible account. Signing in never imports this session's research; you would choose each item to save."
        action={
          <div className="flex flex-wrap justify-center gap-2">
            <ButtonLink
              href="/assistant/access?intent=open_saved&return=%2Fassistant%2Fhistory%3Fview%3Dsaved"
              size="sm"
            >
              Sign in
            </ButtonLink>
            <ButtonLink href="/assistant/history" variant="secondary" size="sm">
              Back to This session
            </ButtonLink>
          </div>
        }
      />
    );
  }

  if (flag === "loading") {
    return (
      <div aria-busy="true" role="status" className="rounded-2xl border border-as-line/60 bg-as-panel/40 p-6">
        <p className="text-[13px] text-haze">Checking whether saved research is available…</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
      <div className="min-w-0 space-y-3">
        <p role="status" className="sr-only">
          {flag === "ON" ? "No saved research yet." : SAVED_DISABLED_COPY}
        </p>
        {flag === "ON" ? (
          <EmptyState
            icon={<Save aria-hidden="true" className="h-7 w-7" />}
            title="No saved research yet."
            description="Create research, then explicitly save each eligible item. Nothing is saved automatically."
            action={
              <ButtonLink href="/assistant" size="sm">
                Start a new question
              </ButtonLink>
            }
          />
        ) : (
          <EmptyState
            icon={<Lock aria-hidden="true" className="h-7 w-7" />}
            title={SAVED_DISABLED_COPY}
            description="This demo account has no saved-research library. Research in This session stays temporary and is not shown here or relabelled as saved."
            action={
              <ButtonLink href="/assistant/history" variant="secondary" size="sm">
                Continue in This session
              </ButtonLink>
            }
          />
        )}

        <Panel className="p-4 sm:p-5">
          <h2 className="text-[13px] font-semibold text-platinum">Library controls</h2>
          <p className="mt-1 text-[11px] leading-5 text-haze">
            These controls stay disabled until the saved-research capability,
            identity integration, entitlements and retention policy are
            approved. Nothing below stores or deletes anything.
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {GATED_CONTROLS.map((control) => {
              const Icon = control.icon;
              const reasonId = `gated-${control.id.replace(/[^A-Za-z0-9]/g, "")}`;
              return (
                <li
                  key={control.id}
                  className="rounded-xl border border-as-line/60 bg-midnight-soft/30 p-3"
                >
                  <Button
                    variant="secondary"
                    size="sm"
                    disabled
                    aria-describedby={reasonId}
                    icon={<Icon aria-hidden="true" className="h-3.5 w-3.5" />}
                    className="w-full justify-start"
                  >
                    {control.label}
                  </Button>
                  <p id={reasonId} className="mt-1.5 text-[11px] leading-5 text-haze">
                    <span className="font-semibold text-platinum/85">Not available yet. </span>
                    {control.reason}
                  </p>
                </li>
              );
            })}
          </ul>
        </Panel>
      </div>

      <aside className="flex min-w-0 flex-col gap-3">
        <Callout tone="warn" title="Saved is not forever">
          Saved research can become unavailable if source rights or access
          permissions change. Saving never grants a right to redistribute
          source data.
        </Callout>
        <p className="font-mono text-[11px] uppercase leading-4 tracking-[0.1em] text-haze/60">
          {FIXTURE_LABEL}
        </p>
      </aside>
    </div>
  );
}
