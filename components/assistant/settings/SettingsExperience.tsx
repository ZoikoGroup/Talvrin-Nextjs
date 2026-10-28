"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import {
  AlertTriangle,
  BookOpenCheck,
  Check,
  Cookie,
  Database,
  Globe2,
  Lock,
  Monitor,
  RefreshCcw,
  RotateCcw,
  Save,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  Trash2,
  UserRound,
} from "lucide-react";
import type { AssistantPreferences } from "@/lib/assistant/types";
import {
  apiJson,
  DEFAULT_PREFS,
  readSessionEntryStatus,
  clearAlertDrafts,
} from "@/lib/assistant/client";
import {
  ASSET_CLASS_OPTIONS,
  changedEditableKeys,
  isValidTimeZone,
  LOCALE_OPTIONS,
  MARKET_OPTIONS,
  pickEditable,
  PREF_LABELS,
  sameEditable,
  THEME_OPTIONS,
  type EditablePrefKey,
  type SettingsCapabilities,
  type SettingsOption,
} from "@/lib/assistant/settings-contract";
import { formatDate, formatDateTime } from "@/lib/assistant/format";
import { FIXTURE_LABEL } from "@/lib/assistant/taxonomy";
import { useDemoMode } from "@/components/assistant/shell/DemoModeProvider";
import {
  accountHeaders,
  useAssistantPrefs,
} from "@/components/assistant/shell/AssistantPrefsProvider";
import {
  clearScopeLines,
  clearThisSession,
} from "@/components/assistant/history/clearSession";
import { Pill } from "@/components/assistant/ui/Badge";
import { Button, ButtonLink } from "@/components/assistant/ui/Button";
import { Dialog } from "@/components/assistant/ui/Dialog";
import { Checkbox, Select, Toggle } from "@/components/assistant/ui/Field";
import { Callout, Skeleton } from "@/components/assistant/ui/Misc";
import { PageIntro, PageShell, Panel } from "@/components/assistant/ui/Panel";

/* ------------------------------------------------------------------ */
/* Static option data                                                  */
/* ------------------------------------------------------------------ */

const DENSITY: {
  id: AssistantPreferences["answerDensity"];
  label: string;
  description: string;
}[] = [
  {
    id: "concise",
    label: "Concise",
    description: "Tighter type and spacing. Every claim, citation and caveat remains.",
  },
  {
    id: "standard",
    label: "Balanced",
    description: "Default reading density for evidence-heavy answers.",
  },
  {
    id: "detailed",
    label: "Detailed",
    description: "Larger type and more generous line spacing.",
  },
];

const EVIDENCE_DEPTH: {
  id: AssistantPreferences["evidenceDepth"];
  label: string;
  description: string;
}[] = [
  {
    id: "summary",
    label: "Summary first",
    description: "Evidence opens as a short summary. Every citation stays one step away.",
  },
  {
    id: "expanded",
    label: "Expanded evidence",
    description: "Evidence opens fully expanded by default.",
  },
];

const BASE_ZONES = [
  { id: "UTC", label: "UTC", detail: "Coordinated Universal Time" },
  { id: "Europe/London", label: "Europe/London", detail: "London · GMT/BST" },
  { id: "America/New_York", label: "America/New_York", detail: "New York · EST/EDT" },
  { id: "Asia/Singapore", label: "Asia/Singapore", detail: "Singapore · SGT" },
];

const NUMBER_LOCALES: AssistantPreferences["numberLocale"][] = ["en-GB", "en-US"];

const PREVIEW_INSTANT = "2026-10-24T08:24:00Z";

const REQUIRED_POLICIES: [string, string][] = [
  ["Authoritative sources only", "Approved issuers, regulators, central banks and licensed lineages."],
  ["Citations for material claims", "Material factual claims keep their evidence relationship."],
  ["Rights gates", "Display, quote, export and redistribution are checked separately on the server."],
  ["No advice", "No ranking, score, buy, sell or hold recommendation."],
  ["Gaps stay visible", "Coverage limits, conflicts and withholding cannot be hidden."],
];

const UNSAVED_COPY =
  "You have unsaved settings. Save changes or cancel to leave them unchanged.";
const SAVED_COPY = "Research display preferences saved";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function optionLabel(options: SettingsOption[], id: string) {
  return options.find((option) => option.id === id)?.label ?? id;
}

function describeValue(key: EditablePrefKey, prefs: AssistantPreferences): string {
  switch (key) {
    case "uiLocale":
      return optionLabel(LOCALE_OPTIONS, prefs.uiLocale);
    case "answerDensity":
      return DENSITY.find((d) => d.id === prefs.answerDensity)?.label ?? prefs.answerDensity;
    case "evidenceDepth":
      return EVIDENCE_DEPTH.find((d) => d.id === prefs.evidenceDepth)?.label ?? prefs.evidenceDepth;
    case "motion":
      return prefs.motion === "reduce" ? "Always reduce motion" : "Follow system";
    case "showTimestamps":
    case "readableData":
    case "followUpHints":
      return prefs[key] ? "On" : "Off";
    case "researchFocus":
      return prefs.researchFocus.length
        ? prefs.researchFocus.map((id) => optionLabel(ASSET_CLASS_OPTIONS, id)).join(", ")
        : "No focus";
    case "marketFocus":
      return prefs.marketFocus.length
        ? prefs.marketFocus.map((id) => optionLabel(MARKET_OPTIONS, id)).join(", ")
        : "No focus";
    default:
      return String(prefs[key]);
  }
}

function toggleId(list: string[], id: string, on: boolean) {
  return on ? (list.includes(id) ? list : [...list, id]) : list.filter((item) => item !== id);
}

type CapsState = "loading" | "ready" | "error";
type SaveState = "idle" | "saving" | "saved" | "error";

interface SaveProblem {
  title: string;
  message: string;
  requestId?: string;
  fields?: Record<string, string>;
  action?: "retry" | "signin" | "reload";
}

interface ConflictState {
  server: AssistantPreferences;
  keys: EditablePrefKey[];
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function SettingsExperience() {
  const router = useRouter();
  const { mode, ready } = useDemoMode();
  const {
    storedPrefs,
    hydrated,
    source,
    revision,
    systemReducedMotion,
    commitPrefs,
    reloadPrefs,
  } = useAssistantPrefs();
  const guest = mode === "guest";

  /* Capabilities (ST-04 / ST-05) ------------------------------------ */
  const [caps, setCaps] = useState<SettingsCapabilities | null>(null);
  const [capsState, setCapsState] = useState<CapsState>("loading");

  const loadCapabilities = useCallback(async () => {
    setCapsState("loading");
    try {
      const result = await apiJson<SettingsCapabilities>(
        "/api/assistant/settings/capabilities",
        { headers: accountHeaders(mode) }
      );
      setCaps(result);
      setCapsState("ready");
    } catch {
      // Fail closed: no account/private operation is offered.
      setCaps(null);
      setCapsState("error");
    }
  }, [mode]);

  useEffect(() => {
    if (!ready) return;
    void loadCapabilities();
  }, [ready, loadCapabilities]);

  /* Draft ----------------------------------------------------------- */
  const [draft, setDraft] = useState<AssistantPreferences>(storedPrefs);
  const editedRef = useRef(false);

  useEffect(() => {
    if (!hydrated) return;
    // Never overwrite a user's draft with refreshed server values (SET-27).
    if (!editedRef.current) setDraft(storedPrefs);
  }, [storedPrefs, hydrated]);

  useEffect(() => {
    editedRef.current = false;
  }, [mode]);

  const dirty = hydrated && !sameEditable(draft, storedPrefs);

  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [status, setStatus] = useState<string>("");
  const [problem, setProblem] = useState<SaveProblem | null>(null);
  const [conflict, setConflict] = useState<ConflictState | null>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const [focusProblem, setFocusProblem] = useState(false);

  useEffect(() => {
    if (!focusProblem) return;
    problemRef.current?.focus();
    setFocusProblem(false);
  }, [focusProblem]);

  function update(patch: Partial<AssistantPreferences>) {
    editedRef.current = true;
    setDraft((current) => ({ ...current, ...patch }));
    if (saveState === "saved") setSaveState("idle");
    setStatus("");
  }

  const accountBlocked =
    !guest && (capsState !== "ready" || source !== "synced" || !caps?.featureGates.persistentPreferences);

  async function save(): Promise<boolean> {
    if (!dirty || saveState === "saving") return false;
    if (!isValidTimeZone(draft.timeZone)) {
      setProblem({
        title: "Not saved",
        message: "Choose a valid time zone. Your previous value is still in effect.",
        fields: { timeZone: "Choose a valid IANA time zone." },
      });
      setSaveState("error");
      setFocusProblem(true);
      return false;
    }
    if (accountBlocked) {
      setProblem({
        title: "Not saved",
        message:
          "Account settings are unavailable right now, so nothing was saved. Your draft is kept on this page.",
        action: "reload",
      });
      setSaveState("error");
      setFocusProblem(true);
      return false;
    }
    setSaveState("saving");
    setProblem(null);
    setStatus("Saving…");
    const result = await commitPrefs(draft);
    if (result.ok) {
      editedRef.current = false;
      setConflict(null);
      setSaveState("saved");
      setStatus(
        guest
          ? `${SAVED_COPY} for this session.`
          : `${SAVED_COPY}. Revision ${result.revision ?? ""}`.trim()
      );
      return true;
    }
    setSaveState("error");
    setStatus("Not saved.");
    if (result.kind === "conflict") {
      if (result.server) {
        setConflict({
          server: result.server,
          keys: changedEditableKeys(draft, result.server),
        });
      }
      setProblem({
        title: "Not saved · settings changed elsewhere",
        message:
          "Your settings changed elsewhere. Review the updated values before saving again.",
        requestId: result.requestId,
      });
    } else if (result.kind === "auth") {
      setProblem({
        title: "Not saved · sign in again",
        message:
          "Your session has ended, so the change was not saved. Your draft is kept on this page until you leave it.",
        requestId: result.requestId,
        action: "signin",
      });
    } else if (result.kind === "forbidden") {
      setProblem({
        title: "Not saved · access changed",
        message:
          "These settings can no longer be saved for this account. Available controls have been checked again.",
        requestId: result.requestId,
      });
      void loadCapabilities();
    } else if (result.kind === "invalid") {
      setProblem({
        title: "Not saved · check these settings",
        message: result.message,
        fields: result.fields,
        requestId: result.requestId,
      });
    } else {
      setProblem({
        title: "Not saved",
        message: `${result.message} Your draft is kept on this page.`,
        requestId: result.requestId,
        action: "retry",
      });
    }
    setFocusProblem(true);
    return false;
  }

  function discard() {
    editedRef.current = false;
    setDraft(storedPrefs);
    setConflict(null);
    setProblem(null);
    setSaveState("idle");
    setStatus("Draft changes cancelled. Your saved settings are unchanged.");
  }

  function adoptServerValues() {
    if (!conflict) return;
    editedRef.current = false;
    setDraft(conflict.server);
    setConflict(null);
    setProblem(null);
    setSaveState("idle");
    setStatus("Updated values loaded. Nothing was overwritten.");
  }

  /* Restore defaults (SET-26 / F11) -------------------------------- */
  const [confirmDefaults, setConfirmDefaults] = useState(false);
  function applyDefaults() {
    update(pickEditable(DEFAULT_PREFS));
    setConfirmDefaults(false);
    setStatus("Defaults loaded into the draft. Save to apply them.");
  }

  /* Unsaved-change guard (§8.1) ------------------------------------ */
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  useEffect(() => {
    if (!dirty) return;
    const beforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }
      // Off-site navigation is handled by the browser's own prompt.
      if (url.origin !== window.location.origin) return;
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      setPendingHref(`${url.pathname}${url.search}${url.hash}`);
    };
    window.addEventListener("beforeunload", beforeUnload);
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("beforeunload", beforeUnload);
      document.removeEventListener("click", onClick, true);
    };
  }, [dirty]);

  function leaveWithoutSaving() {
    const href = pendingHref;
    editedRef.current = false;
    setDraft(storedPrefs);
    setPendingHref(null);
    if (href) router.push(href);
  }

  async function saveAndLeave() {
    const href = pendingHref;
    setPendingHref(null);
    const ok = await save();
    if (ok && href) router.push(href);
  }

  /* Data controls (SET-22) ----------------------------------------- */
  const [clearDialog, setClearDialog] = useState<"session" | "demo" | null>(null);
  const [clearCount, setClearCount] = useState(0);
  const [clearing, setClearing] = useState(false);
  const [dataNotice, setDataNotice] = useState<string | null>(null);
  const dataHeadingRef = useRef<HTMLHeadingElement>(null);
  const [focusData, setFocusData] = useState(false);

  useEffect(() => {
    if (!focusData) return;
    dataHeadingRef.current?.focus();
    setFocusData(false);
  }, [focusData]);

  function openClear(kind: "session" | "demo") {
    const status = readSessionEntryStatus();
    setClearCount(status.active.length + status.expiredCount);
    setClearDialog(kind);
  }

  async function confirmClear() {
    setClearing(true);
    if (clearDialog === "session") {
      const result = await clearThisSession();
      setDataNotice(
        `This session was cleared. ${result.itemCount} item${
          result.itemCount === 1 ? "" : "s"
        } removed from this tab. Display preferences, cookie choices and account data are unaffected.`
      );
    } else if (clearDialog === "demo") {
      clearAlertDrafts();
      setDataNotice(
        "Local alert drafts were removed from this browser. Server-held demo rules, research, settings and cookie choices are unaffected."
      );
    }
    setClearing(false);
    setClearDialog(null);
    setFocusData(true);
  }

  /* Locale detection (ST-20) --------------------------------------- */
  const [deviceZone, setDeviceZone] = useState("UTC");
  const [browserLanguage, setBrowserLanguage] = useState<string | null>(null);

  useEffect(() => {
    try {
      setDeviceZone(Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC");
    } catch {
      setDeviceZone("UTC");
    }
    try {
      setBrowserLanguage(navigator.language || null);
    } catch {
      setBrowserLanguage(null);
    }
  }, []);

  const zones = useMemo(() => {
    const list = [...BASE_ZONES];
    if (!list.some((zone) => zone.id === deviceZone)) {
      list.unshift({ id: deviceZone, label: deviceZone, detail: "This device's zone" });
    }
    if (!list.some((zone) => zone.id === draft.timeZone)) {
      list.push({ id: draft.timeZone, label: draft.timeZone, detail: "Current setting" });
    }
    return list;
  }, [deviceZone, draft.timeZone]);

  const locales = caps?.locales ?? LOCALE_OPTIONS;
  const assetClasses = caps?.assetClasses ?? ASSET_CLASS_OPTIONS;
  const markets = caps?.markets ?? MARKET_OPTIONS;
  const themes = caps?.themes ?? THEME_OPTIONS;
  const languageFallback =
    browserLanguage && !locales.some((l) => l.supported && browserLanguage.toLowerCase().startsWith(l.id.slice(0, 2).toLowerCase()))
      ? browserLanguage
      : null;

  const previewDate = formatDateTime(PREVIEW_INSTANT, draft.timeZone, draft.numberLocale);
  const previewNumber = new Intl.NumberFormat(draft.numberLocale, {
    maximumFractionDigits: 2,
  }).format(1234567.89);

  /* Explainer dialogs ---------------------------------------------- */
  const [whyOpen, setWhyOpen] = useState(false);

  const loading = !hydrated || capsState === "loading" || (!guest && source === "loading");
  const fieldErrors = problem?.fields ?? {};

  const modeChip = (() => {
    if (capsState === "loading") {
      return <Pill tone="neutral">Checking settings status…</Pill>;
    }
    if (capsState === "error") {
      return (
        <Pill tone="danger" dot>
          Restricted · settings service unavailable
        </Pill>
      );
    }
    if (caps?.status === "SIGNED_IN") {
      return (
        <Pill tone="iris" dot>
          Signed in (demo) · account settings
        </Pill>
      );
    }
    return (
      <Pill tone="warn" dot>
        Guest · Temporary
      </Pill>
    );
  })();

  return (
    <PageShell width="wide" className="pt-8">
      <PageIntro
        eyebrow="WF-07 · research settings and data controls"
        title="Research settings"
        lead="Change how research is presented. Authoritative sourcing, citations, rights checks and safety boundaries are required and cannot be changed."
        meta={
          <div className="flex flex-wrap items-center gap-2">
            {modeChip}
            {!guest && revision && source === "synced" ? (
              <Pill tone="neutral">Revision {revision}</Pill>
            ) : null}
            <Pill tone="ok">
              <ShieldCheck aria-hidden="true" className="h-3 w-3" />
              Integrity required
            </Pill>
          </div>
        }
        actions={
          <ButtonLink href="/assistant/help" variant="secondary" size="sm">
            Help
          </ButtonLink>
        }
      />

      {/* SET-03 / AC-05: persistence stated before the first change. */}
      {guest ? (
        <Callout tone="info" title="Temporary settings" className="mb-4">
          These display choices apply to this session. Sign in for account
          settings where available.
        </Callout>
      ) : capsState === "error" || source === "error" ? (
        <Callout
          tone="danger"
          title="Account settings unavailable"
          className="mb-4"
          action={
            <Button
              variant="secondary"
              size="sm"
              icon={<RefreshCcw aria-hidden="true" className="h-3.5 w-3.5" />}
              onClick={() => {
                void loadCapabilities();
                void reloadPrefs();
              }}
            >
              Try again
            </Button>
          }
        >
          Account settings could not be loaded. Values shown are the last ones
          displayed on this device, for presentation only. Saving is unavailable
          until settings load again.
        </Callout>
      ) : (
        <Callout tone="info" title="Account settings (demo)" className="mb-4">
          Changes are saved to the demo account only when you select Save and
          the server confirms them. Guest choices from earlier are not copied
          here.
        </Callout>
      )}

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="min-w-0 space-y-4" aria-busy={loading || undefined}>
          {loading ? (
            <div className="space-y-4" role="status" aria-label="Loading settings">
              {[0, 1, 2].map((item) => (
                <Panel key={item} className="space-y-3 p-5">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-3 w-full max-w-md" />
                  <Skeleton className="h-11 w-full" />
                </Panel>
              ))}
            </div>
          ) : (
            <>
              {/* Language, time and format (SET-04 to SET-07) */}
              <Section
                icon={<Globe2 aria-hidden="true" className="h-4 w-4" />}
                title="Language, time and format"
                description="Dates show in your chosen zone; the underlying instant stays the original UTC value. Formatting never converts a currency."
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div id="pref-uiLocale">
                    <label htmlFor="ui-locale" className="mb-1 block text-[12px] font-semibold text-platinum">
                      Interface language
                    </label>
                    <Select
                      id="ui-locale"
                      value={draft.uiLocale}
                      onChange={(event) =>
                        update({ uiLocale: event.target.value as AssistantPreferences["uiLocale"] })
                      }
                      aria-describedby="ui-locale-note"
                    >
                      {locales
                        .filter((locale) => locale.supported)
                        .map((locale) => (
                          <option key={locale.id} value={locale.id}>
                            {locale.label}
                          </option>
                        ))}
                    </Select>
                    <p id="ui-locale-note" className="mt-1 text-[11px] leading-5 text-haze">
                      {languageFallback
                        ? `Your browser prefers ${languageFallback}. That language is not supported yet, so the interface is shown in English (United States). `
                        : "English (United States) is the only supported interface language. "}
                      Source documents and quotes always stay in their original
                      language and are never translated as if they were
                      official originals.
                    </p>
                    <FieldError message={fieldErrors.uiLocale} />
                  </div>

                  <div id="pref-timeZone">
                    <label htmlFor="time-zone" className="mb-1 block text-[12px] font-semibold text-platinum">
                      Time zone
                    </label>
                    <Select
                      id="time-zone"
                      value={draft.timeZone}
                      onChange={(event) => update({ timeZone: event.target.value })}
                      aria-describedby="time-zone-note"
                    >
                      {zones.map((zone) => (
                        <option key={zone.id} value={zone.id}>
                          {zone.label} — {zone.detail}
                        </option>
                      ))}
                    </Select>
                    <p id="time-zone-note" className="mt-1 text-[11px] leading-5 text-haze">
                      Valid IANA zone. Observation and retrieval times stay
                      distinct, and ordering is not affected.
                    </p>
                    <FieldError message={fieldErrors.timeZone} />
                  </div>
                </div>

                <fieldset id="pref-numberLocale" className="mt-4">
                  <legend className="mb-1 text-[12px] font-semibold text-platinum">
                    Regional format
                  </legend>
                  <div className="grid gap-1.5 sm:grid-cols-2">
                    {NUMBER_LOCALES.map((id) => (
                      <label
                        key={id}
                        className={clsx(
                          "flex min-h-11 cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2",
                          draft.numberLocale === id
                            ? "border-iris/50 bg-iris/[0.06]"
                            : "border-as-line/60 hover:border-iris/40"
                        )}
                      >
                        <input
                          type="radio"
                          name="number-locale"
                          value={id}
                          checked={draft.numberLocale === id}
                          onChange={() => update({ numberLocale: id })}
                          className="h-4 w-4 accent-[#6f5bff]"
                        />
                        <span className="text-[12px] text-platinum">
                          <span className="font-semibold">{formatDate(PREVIEW_INSTANT, "UTC", id)}</span>
                          <span className="text-haze">
                            {" "}· {new Intl.NumberFormat(id, { maximumFractionDigits: 2 }).format(1234567.89)} · {id}
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                  <p className="mt-1 text-[11px] leading-5 text-haze">
                    Both formats group digits the same way; they differ in date
                    order. Currency labels always remain the source currency.
                  </p>
                </fieldset>

                <div id="pref-showTimestamps" className="mt-2 border-t border-as-line/60">
                  <Toggle
                    checked={draft.showTimestamps}
                    onChange={(next) => update({ showTimestamps: next })}
                    label="Show generated timestamps in the answer header"
                    description="As-of, retrieval and publication times always remain in the time context and evidence inspector, labelled separately with UTC."
                  />
                </div>

                <div className="mt-2 rounded-xl border border-as-line/70 bg-midnight-soft/50 px-3.5 py-3">
                  <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-haze/80">
                    Preview
                  </p>
                  <p className="mt-1 text-[13px] text-platinum">
                    {previewDate} · GBP {previewNumber}
                  </p>
                  <p className="mt-0.5 text-[11px] text-haze">
                    The same instant, 24 Oct 2026 08:24 UTC, shown in {draft.timeZone}.
                  </p>
                </div>
              </Section>

              {/* Reading and display (SET-08, SET-13 to SET-17) */}
              <Section
                icon={<SlidersHorizontal aria-hidden="true" className="h-4 w-4" />}
                title="Reading and display"
                description="These choices change presentation only. They cannot reduce citation granularity, hide a withheld value or suppress a required notice."
              >
                <RadioCards
                  id="pref-answerDensity"
                  legend="Answer density"
                  name="answer-density"
                  options={DENSITY}
                  value={draft.answerDensity}
                  onChange={(value) => update({ answerDensity: value })}
                  columns={3}
                />
                <FieldError message={fieldErrors.answerDensity} />

                <RadioCards
                  id="pref-evidenceDepth"
                  legend="Evidence depth"
                  name="evidence-depth"
                  options={EVIDENCE_DEPTH}
                  value={draft.evidenceDepth}
                  onChange={(value) => update({ evidenceDepth: value })}
                  columns={2}
                  className="mt-4"
                />
                <p className="mt-1 text-[11px] leading-5 text-haze">
                  The evidence inspector is always available, whichever you choose.
                </p>

                <RadioCards
                  id="pref-motion"
                  legend="Motion"
                  name="motion"
                  options={[
                    {
                      id: "system" as const,
                      label: "Follow system",
                      description: `Your device currently ${
                        systemReducedMotion ? "asks for" : "does not ask for"
                      } reduced motion.`,
                    },
                    {
                      id: "reduce" as const,
                      label: "Always reduce motion",
                      description: "Stops non-essential animation. Progress stays readable as text.",
                    },
                  ]}
                  value={draft.motion}
                  onChange={(value) => update({ motion: value })}
                  columns={2}
                  className="mt-4"
                />

                <div className="mt-3 divide-y divide-as-line/60 border-t border-as-line/60">
                  <div id="pref-readableData">
                    <Toggle
                      checked={draft.readableData}
                      onChange={(next) => update({ readableData: next })}
                      label="Readable data: tables first"
                      description="Show data as tables first, with a text alternative for every chart. Charts always keep a text alternative either way."
                    />
                  </div>
                  <div id="pref-followUpHints">
                    <Toggle
                      checked={draft.followUpHints}
                      onChange={(next) => update({ followUpHints: next })}
                      label="Show follow-up suggestions"
                      description="Hiding suggestions never removes caveats, gaps or required notices."
                    />
                  </div>
                </div>

                <div className="mt-3 rounded-xl border border-as-line/60 bg-midnight-soft/30 p-3">
                  <p className="flex items-center gap-1.5 text-[12px] font-semibold text-platinum">
                    <Monitor aria-hidden="true" className="h-3.5 w-3.5 text-iris-soft" />
                    Theme
                  </p>
                  <ul className="mt-1.5 space-y-1">
                    {themes.map((theme) => (
                      <li key={theme.id} className="flex flex-wrap items-baseline gap-x-2 text-[12px]">
                        <span className={theme.supported ? "text-platinum" : "text-haze"}>
                          {theme.label}
                        </span>
                        <span className="text-[11px] text-haze">
                          {theme.supported ? "In use · the only theme delivered" : theme.note}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-1.5 text-[11px] leading-5 text-haze">
                    Other themes appear here only once they are delivered with
                    approved contrast.
                  </p>
                </div>
              </Section>

              {/* Research focus (SET-09, SET-10) */}
              <Section
                icon={<Target aria-hidden="true" className="h-4 w-4" />}
                title="Research focus"
                description="A discovery preference for new questions. It never unlocks a dataset, hides evidence, or overrides rights and evidence rules."
              >
                <fieldset id="pref-researchFocus">
                  <legend className="text-[12px] font-semibold text-platinum">Asset focus</legend>
                  <div className="mt-2 grid gap-2.5 sm:grid-cols-2">
                    {assetClasses
                      .filter((option) => option.supported)
                      .map((option) => (
                        <Checkbox
                          key={option.id}
                          id={`focus-asset-${option.id}`}
                          label={option.label}
                          description={option.note}
                          checked={draft.researchFocus.includes(option.id)}
                          onChange={(on) =>
                            update({ researchFocus: toggleId(draft.researchFocus, option.id, on) })
                          }
                        />
                      ))}
                  </div>
                  <UnsupportedList options={assetClasses} />
                  <FieldError message={fieldErrors.researchFocus} />
                </fieldset>

                <fieldset id="pref-marketFocus" className="mt-4">
                  <legend className="text-[12px] font-semibold text-platinum">Market focus</legend>
                  <div className="mt-2 grid gap-2.5 sm:grid-cols-3">
                    {markets
                      .filter((option) => option.supported)
                      .map((option) => (
                        <Checkbox
                          key={option.id}
                          id={`focus-market-${option.id}`}
                          label={option.label}
                          checked={draft.marketFocus.includes(option.id)}
                          onChange={(on) =>
                            update({ marketFocus: toggleId(draft.marketFocus, option.id, on) })
                          }
                        />
                      ))}
                  </div>
                  <UnsupportedList options={markets} />
                  <FieldError message={fieldErrors.marketFocus} />
                </fieldset>
                <p className="mt-3 text-[11px] leading-5 text-haze">
                  Issuer domicile and market venue always come from the source
                  metadata. With no focus selected, questions use all covered
                  scopes.
                </p>
              </Section>

              {/* Required integrity (SET-11, SET-12, F04) */}
              <Section
                icon={<Lock aria-hidden="true" className="h-4 w-4 text-ok" />}
                title="Required integrity"
                description="These are not preferences. No display setting, account role or demo mode can change them."
                action={
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<BookOpenCheck aria-hidden="true" className="h-3.5 w-3.5" />}
                    onClick={() => setWhyOpen(true)}
                  >
                    Why required?
                  </Button>
                }
              >
                <ul className="grid gap-1.5 sm:grid-cols-2">
                  {REQUIRED_POLICIES.map(([title, body]) => (
                    <li
                      key={title}
                      className="flex items-start justify-between gap-2 rounded-lg border border-as-line/60 bg-midnight-soft/30 p-3"
                    >
                      <span>
                        <span className="block text-[12px] font-semibold text-platinum">{title}</span>
                        <span className="mt-0.5 block text-[11px] leading-5 text-haze">{body}</span>
                      </span>
                      <span className="shrink-0">
                        <Pill tone="ok">
                          <span aria-hidden="true">Required</span>
                          <span className="sr-only">Required, cannot be changed</span>
                        </Pill>
                      </span>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Research saving (SET-18, SET-23) */}
              <Section
                icon={<Save aria-hidden="true" className="h-4 w-4" />}
                title="Research saving"
                description="Saving a preference never saves research. Saving research is always a separate, explicit action."
              >
                <div className="flex flex-col gap-2 rounded-lg border border-as-line/60 bg-midnight-soft/30 p-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[12px] font-semibold text-platinum">Automatic research saving</p>
                    <p className="mt-0.5 text-[11px] leading-5 text-haze">
                      Not offered. It can only be introduced after a separate
                      approval and your explicit opt-in.
                    </p>
                  </div>
                  <Pill tone="neutral">
                    <span aria-hidden="true">Off · not offered</span>
                    <span className="sr-only">Off, not offered, cannot be changed</span>
                  </Pill>
                </div>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[11px] leading-5 text-haze">
                    Saved research can become unavailable if source rights or
                    access permissions change.
                  </p>
                  <ButtonLink
                    href={
                      guest
                        ? "/assistant/access?intent=open_saved&return=%2Fassistant%2Fhistory%3Fview%3Dsaved"
                        : "/assistant/history?view=saved"
                    }
                    variant="secondary"
                    size="sm"
                    className="shrink-0"
                    icon={guest ? <Lock aria-hidden="true" className="h-3.5 w-3.5" /> : undefined}
                  >
                    {guest ? "Saved research · sign in" : "Saved research"}
                  </ButtonLink>
                </div>
              </Section>

              {/* Data and privacy (SET-20 to SET-24) */}
              <Panel className="p-4 sm:p-5" id="data">
                <div className="flex items-start gap-3">
                  <Database aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-iris-soft" />
                  <div>
                    <h2
                      ref={dataHeadingRef}
                      tabIndex={-1}
                      className="text-[14px] font-semibold text-platinum focus:outline-none focus-visible:ring-2 focus-visible:ring-iris/40"
                    >
                      Data and privacy
                    </h2>
                    <p className="mt-0.5 text-[11px] leading-5 text-haze">
                      Each action has its own scope. Nothing here claims to
                      erase account records, lawful-retention records or data
                      on another device.
                    </p>
                  </div>
                </div>

                {dataNotice ? (
                  <div role="status" className="mt-3">
                    <Callout tone="success" title="Done">
                      {dataNotice}
                    </Callout>
                  </div>
                ) : null}

                <ul className="mt-4 divide-y divide-as-line/60">
                  <DataRow
                    title="Clear this session"
                    body="Removes this tab's temporary research and stops its links opening. Display preferences, cookie choices and account data are not affected."
                    action={
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => openClear("session")}
                        icon={<Trash2 aria-hidden="true" className="h-3.5 w-3.5" />}
                      >
                        Review and clear
                      </Button>
                    }
                  />
                  <DataRow
                    icon={<Cookie aria-hidden="true" className="h-3.5 w-3.5 text-haze" />}
                    title="Cookie choices"
                    body="Cookie and analytics consent is managed by the site consent center, separately from these preferences. Nothing on this page changes your consent."
                    action={
                      <ButtonLink href="/legal/cookie-notice" variant="secondary" size="sm">
                        Open cookie choices
                      </ButtonLink>
                    }
                  />
                  <DataRow
                    icon={<ShieldCheck aria-hidden="true" className="h-3.5 w-3.5 text-haze" />}
                    title="Privacy requests"
                    body={
                      <>
                        Requests to access, export or erase personal data go
                        through the site privacy process, which verifies your
                        identity and reports the status. This page does not
                        submit requests. See the{" "}
                        <Link
                          href="/legal/privacy-notice"
                          className="text-iris-soft underline decoration-iris/30 underline-offset-4"
                        >
                          privacy notice
                        </Link>
                        .
                      </>
                    }
                    action={
                      <ButtonLink href="/company/legal#privacy-choices" variant="secondary" size="sm">
                        Open privacy requests
                      </ButtonLink>
                    }
                  />
                  <DataRow
                    icon={<UserRound aria-hidden="true" className="h-3.5 w-3.5 text-haze" />}
                    title="Identity and access"
                    body={
                      guest
                        ? "You are using a temporary guest session. Signing in is handled by the access page, not by this settings page."
                        : "This is a demonstration account with no real identity. Sign-out and access are handled by the access page."
                    }
                    action={
                      <ButtonLink
                        href={guest ? "/assistant/access?intent=sign_in" : "/assistant/access"}
                        variant="secondary"
                        size="sm"
                      >
                        {guest ? "Sign in" : "Identity and access"}
                      </ButtonLink>
                    }
                  />
                  {!guest ? (
                    <DataRow
                      title="Clear demo alerts and read markers"
                      body="Removes demo alert rules and notification read markers from this browser. Research, settings and cookie choices are not affected."
                      action={
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => openClear("demo")}
                          icon={<Trash2 aria-hidden="true" className="h-3.5 w-3.5" />}
                        >
                          Review and clear
                        </Button>
                      }
                    />
                  ) : null}
                </ul>
              </Panel>
            </>
          )}

          {/* SET-25 / SET-26 / SET-27: persistent action group */}
          <div className="sticky bottom-3 z-10 space-y-2">
            {problem ? (
              <div
                ref={problemRef}
                tabIndex={-1}
                role="alert"
                className="rounded-2xl border border-danger/40 bg-midnight-soft p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-danger/40"
              >
                <p className="flex items-center gap-1.5 text-[13px] font-semibold text-danger">
                  <AlertTriangle aria-hidden="true" className="h-4 w-4" />
                  {problem.title}
                </p>
                <p className="mt-1 text-[12px] leading-5 text-platinum/85">{problem.message}</p>
                {problem.fields && Object.keys(problem.fields).length ? (
                  <ul className="mt-2 space-y-1 text-[12px]">
                    {Object.entries(problem.fields).map(([key, message]) => (
                      <li key={key}>
                        <a
                          href={`#pref-${key}`}
                          className="text-iris-soft underline decoration-iris/30 underline-offset-4"
                        >
                          {PREF_LABELS[key as EditablePrefKey] ?? key}
                        </a>
                        : {message}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {conflict ? (
                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full min-w-[420px] text-left text-[12px]">
                      <caption className="sr-only">Your draft compared with the updated saved values</caption>
                      <thead>
                        <tr className="text-haze">
                          <th scope="col" className="py-1 pr-3 font-semibold">Setting</th>
                          <th scope="col" className="py-1 pr-3 font-semibold">Your draft</th>
                          <th scope="col" className="py-1 font-semibold">Updated elsewhere</th>
                        </tr>
                      </thead>
                      <tbody>
                        {conflict.keys.length ? (
                          conflict.keys.map((key) => (
                            <tr key={key} className="border-t border-as-line/60">
                              <th scope="row" className="py-1.5 pr-3 font-medium text-platinum">
                                {PREF_LABELS[key]}
                              </th>
                              <td className="py-1.5 pr-3 text-platinum">{describeValue(key, draft)}</td>
                              <td className="py-1.5 text-platinum">{describeValue(key, conflict.server)}</td>
                            </tr>
                          ))
                        ) : (
                          <tr className="border-t border-as-line/60">
                            <td colSpan={3} className="py-1.5 text-haze">
                              Your draft already matches the updated values.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <Button variant="secondary" size="sm" onClick={adoptServerValues}>
                        Use updated values
                      </Button>
                      <Button size="sm" onClick={() => void save()}>
                        Save my draft over them
                      </Button>
                    </div>
                  </div>
                ) : null}

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {problem.action === "retry" ? (
                    <Button variant="secondary" size="sm" onClick={() => void save()}>
                      Try again
                    </Button>
                  ) : null}
                  {problem.action === "reload" ? (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        void loadCapabilities();
                        void reloadPrefs();
                      }}
                    >
                      Reload settings
                    </Button>
                  ) : null}
                  {problem.action === "signin" ? (
                    <ButtonLink
                      href="/assistant/access?intent=sign_in&return=%2Fassistant%2Fsettings"
                      variant="secondary"
                      size="sm"
                    >
                      Sign in again
                    </ButtonLink>
                  ) : null}
                  {problem.requestId ? (
                    <span className="font-mono text-[12px] text-haze">Ref {problem.requestId}</span>
                  ) : null}
                </div>
              </div>
            ) : null}

            <div className="flex flex-col gap-2 rounded-2xl border border-as-line bg-as-panel/95 p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="flex flex-wrap items-center gap-1.5 text-[12px] font-medium text-platinum">
                  {dirty ? (
                    <Pill tone="warn" dot>
                      Unsaved changes
                    </Pill>
                  ) : saveState === "error" ? (
                    <Pill tone="danger">Not saved</Pill>
                  ) : (
                    <span>No unsaved changes</span>
                  )}
                  {dirty && saveState === "error" ? <Pill tone="danger">Not saved</Pill> : null}
                </p>
                <p className="mt-1 text-[11px] leading-5 text-haze">
                  {dirty
                    ? UNSAVED_COPY
                    : guest
                      ? "Guest choices apply to this session only."
                      : "Saved settings come from the demo account settings service."}
                </p>
                <p role="status" aria-live="polite" className="mt-1 min-h-[1.25rem] text-[11px] text-ok">
                  {status && saveState === "saved" ? (
                    <span className="inline-flex items-center gap-1">
                      <Check aria-hidden="true" className="h-3 w-3" />
                      {status}
                    </span>
                  ) : saveState === "error" ? (
                    <span className="text-danger">{status}</span>
                  ) : (
                    <span className="text-haze">{status}</span>
                  )}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-1.5">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setConfirmDefaults(true)}
                  icon={<RotateCcw aria-hidden="true" className="h-3.5 w-3.5" />}
                  disabled={loading}
                >
                  Restore defaults
                </Button>
                <Button variant="secondary" size="sm" onClick={discard} disabled={!dirty}>
                  Cancel changes
                </Button>
                <Button
                  size="sm"
                  disabled={!dirty || loading || (!guest && accountBlocked)}
                  loading={saveState === "saving"}
                  onClick={() => void save()}
                  icon={<Check aria-hidden="true" className="h-3.5 w-3.5" />}
                  aria-describedby={!guest && accountBlocked ? "save-blocked-reason" : undefined}
                >
                  Save changes
                </Button>
              </div>
            </div>
            {!guest && accountBlocked && !loading ? (
              <p id="save-blocked-reason" className="px-1 text-[11px] text-haze">
                Saving is unavailable until account settings load. Your draft is kept on this page.
              </p>
            ) : null}
          </div>
        </div>

        <aside className="flex min-w-0 flex-col gap-3 lg:sticky lg:top-20">
          <Panel className="p-4">
            <div className="flex items-center gap-2">
              <ShieldCheck aria-hidden="true" className="h-4 w-4 text-iris-soft" />
              <h2 className="text-[12px] font-semibold text-platinum">Where settings are kept</h2>
            </div>
            <ul className="mt-2.5 space-y-2">
              {[
                {
                  title: guest ? "This session only" : "Demo account settings",
                  body: guest
                    ? "Guest choices are held for this browser tab and end with the session. They are not available on another device."
                    : "Saved through the settings service with a revision check. The demo service is in memory and has no real account behind it.",
                },
                {
                  title: "Never merged automatically",
                  body: "Guest choices never become account settings just because you sign in.",
                },
                {
                  title: "Consent is separate",
                  body: "Cookie and analytics consent lives in the site consent center, not here.",
                },
              ].map((item) => (
                <li key={item.title}>
                  <p className="text-[11px] font-semibold text-platinum/90">{item.title}</p>
                  <p className="mt-0.5 text-[11px] leading-5 text-haze">{item.body}</p>
                </li>
              ))}
            </ul>
          </Panel>

          {/* SET-19: only shipped channels. */}
          <Panel className="p-4">
            <h2 className="text-[12px] font-semibold text-platinum">Notifications</h2>
            <p className="mt-1.5 text-[11px] leading-5 text-haze">
              No notification channel is delivered in this build, so there are
              no notification preferences. Demo alerts stay inside the
              application.
            </p>
            <ButtonLink href="/assistant/updates" variant="secondary" size="sm" className="mt-3 w-full">
              Review demo alerts
            </ButtonLink>
          </Panel>

          <div className="flex items-start gap-2 rounded-xl border border-warn/25 bg-warn/[0.05] p-3.5">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warn" />
            <p className="text-[11px] leading-5 text-haze">
              A preference cannot make an ineligible user eligible, unlock a
              licensed value or suppress a required caveat. The server checks
              every mandatory gate again.
            </p>
          </div>

          <p className="font-mono text-[11px] uppercase leading-4 tracking-[0.1em] text-haze/60">
            {FIXTURE_LABEL}
          </p>
        </aside>
      </div>

      {/* F04: Why required? */}
      <Dialog
        open={whyOpen}
        onClose={() => setWhyOpen(false)}
        title="Why these safeguards are required"
        eyebrow="Required integrity"
        width="md"
        footer={
          <div className="flex justify-end">
            <Button variant="secondary" size="sm" onClick={() => setWhyOpen(false)}>
              Close
            </Button>
          </div>
        }
      >
        <p className="text-[13px] leading-6 text-platinum">
          Talvrin uses eligible authoritative sources and shows evidence for
          material factual claims. This safeguard cannot be disabled.
        </p>
        <ul className="mt-3 space-y-2 text-[12px] leading-5 text-haze">
          <li>
            Admissible sources are issuers, exchanges, central banks,
            regulators, government statistics and licensed source lineages.
          </li>
          <li>
            Citing a document shows where a claim came from; it does not by
            itself prove the claim was independently verified.
          </li>
          <li>
            Data rights are checked on the server for every answer and export.
            No setting, region, language or plan can widen them.
          </li>
        </ul>
        <p className="mt-3 text-[12px] leading-5 text-haze">
          More detail:{" "}
          <Link
            href="/assistant/help?article=help-citations"
            className="text-iris-soft underline decoration-iris/30 underline-offset-4"
          >
            how citations and sources work
          </Link>
          .
        </p>
      </Dialog>

      {/* SET-26 / F11: restore defaults with scope. */}
      <Dialog
        open={confirmDefaults}
        onClose={() => setConfirmDefaults(false)}
        title="Restore default display settings?"
        eyebrow="Restore defaults"
        description="This only changes the draft. Nothing is applied until you save."
        width="md"
        footer={
          <div className="flex flex-wrap justify-end gap-2">
            <Button variant="secondary" size="sm" onClick={() => setConfirmDefaults(false)}>
              Cancel
            </Button>
            <Button size="sm" onClick={applyDefaults}>
              Load defaults into draft
            </Button>
          </div>
        }
      >
        <ul className="space-y-1.5 text-[12px] leading-5 text-haze">
          <li>Resets language, time zone, regional format, reading, motion and research focus.</li>
          <li>Research in this session, saved research and privacy requests are not affected.</li>
          <li>Cookie and consent choices are not affected.</li>
          <li>Required integrity safeguards are not settings and do not change.</li>
        </ul>
      </Dialog>

      {/* SET-22 / F02 and demo data clear */}
      <Dialog
        open={clearDialog !== null}
        onClose={() => {
          if (!clearing) setClearDialog(null);
        }}
        title={clearDialog === "demo" ? "Clear demo alerts and read markers?" : "Clear this temporary session?"}
        eyebrow={clearDialog === "demo" ? "Demo data" : "Clear this session"}
        description="Review exactly what changes before you confirm."
        width="md"
        footer={
          <div className="flex flex-wrap justify-end gap-2">
            <Button variant="secondary" size="sm" onClick={() => setClearDialog(null)} disabled={clearing}>
              Cancel
            </Button>
            <Button variant="danger" size="sm" onClick={confirmClear} loading={clearing}>
              {clearDialog === "demo" ? "Clear demo data" : "Clear this session"}
            </Button>
          </div>
        }
      >
        <div className="rounded-xl border border-warn/25 bg-warn/[0.06] p-3.5">
          <p className="text-[12px] font-semibold text-warn">Scope</p>
          <ul className="mt-2 space-y-1.5 text-[12px] leading-5 text-haze">
            {(clearDialog === "demo"
              ? [
                  "Demo alert rules in this browser are removed.",
                  "Notification read markers in this browser are removed.",
                  "Research, settings and cookie choices are not affected.",
                  "No real account, identity or lawful-retention record exists or is affected.",
                ]
              : clearScopeLines(clearCount)
            ).map((item) => (
              <li key={item} className="flex items-start gap-1.5">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-haze" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Dialog>

      {/* §8.1 in-app navigation guard */}
      <Dialog
        open={pendingHref !== null}
        onClose={() => setPendingHref(null)}
        title="Leave with unsaved settings?"
        eyebrow="Unsaved changes"
        description={UNSAVED_COPY}
        width="md"
        footer={
          <div className="flex flex-wrap justify-end gap-2">
            <Button variant="secondary" size="sm" onClick={() => setPendingHref(null)}>
              Keep editing
            </Button>
            <Button variant="ghost" size="sm" onClick={leaveWithoutSaving}>
              Leave without saving
            </Button>
            <Button size="sm" onClick={() => void saveAndLeave()} disabled={!guest && accountBlocked}>
              Save changes
            </Button>
          </div>
        }
      >
        <p className="text-[12px] leading-5 text-haze">
          Changed: {changedEditableKeys(draft, storedPrefs).map((key) => PREF_LABELS[key]).join(", ") || "none"}.
        </p>
      </Dialog>
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* Local presentational pieces                                         */
/* ------------------------------------------------------------------ */

function Section({
  icon,
  title,
  description,
  action,
  children,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Panel className="p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 shrink-0 text-iris-soft">{icon}</span>
          <div>
            <h2 className="text-[14px] font-semibold text-platinum">{title}</h2>
            <p className="mt-0.5 text-[11px] leading-5 text-haze">{description}</p>
          </div>
        </div>
        {action}
      </div>
      <div className="mt-4">{children}</div>
    </Panel>
  );
}

function RadioCards<T extends string>({
  id,
  legend,
  name,
  options,
  value,
  onChange,
  columns,
  className,
}: {
  id: string;
  legend: string;
  name: string;
  options: { id: T; label: string; description: string }[];
  value: T;
  onChange: (value: T) => void;
  columns: 2 | 3;
  className?: string;
}) {
  return (
    <fieldset id={id} className={className}>
      <legend className="text-[12px] font-semibold text-platinum">{legend}</legend>
      <div className={clsx("mt-1.5 grid gap-1.5", columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2")}>
        {options.map((option) => (
          <label
            key={option.id}
            className={clsx(
              "flex min-h-[72px] cursor-pointer flex-col rounded-xl border p-3",
              value === option.id
                ? "border-iris/60 bg-iris/[0.07]"
                : "border-as-line/70 bg-midnight-soft/30 hover:border-iris/40"
            )}
          >
            <span className="flex items-center gap-2">
              <input
                type="radio"
                name={name}
                value={option.id}
                checked={value === option.id}
                onChange={() => onChange(option.id)}
                className="h-4 w-4 accent-[#6f5bff]"
              />
              <span className="text-[12px] font-semibold text-platinum">{option.label}</span>
            </span>
            <span className="mt-1 text-[11px] leading-5 text-haze">{option.description}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function UnsupportedList({ options }: { options: SettingsOption[] }) {
  const unsupported = options.filter((option) => !option.supported);
  if (!unsupported.length) return null;
  return (
    <p className="mt-2 text-[11px] leading-5 text-haze">
      Not in current coverage:{" "}
      {unsupported.map((option) => option.label).join(", ")}. Choosing them
      would not add data, so they are not offered.
    </p>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1 flex items-start gap-1.5 text-[11px] text-danger">
      <AlertTriangle aria-hidden="true" className="mt-0.5 h-3 w-3 shrink-0" />
      {message}
    </p>
  );
}

function DataRow({
  icon,
  title,
  body,
  action,
}: {
  icon?: ReactNode;
  title: string;
  body: ReactNode;
  action: ReactNode;
}) {
  return (
    <li className="flex flex-col gap-2 py-3 first:pt-0 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="flex items-center gap-1.5 text-[12px] font-medium text-platinum">
          {icon}
          {title}
        </p>
        <p className="mt-0.5 text-[11px] leading-5 text-haze">{body}</p>
      </div>
      <div className="shrink-0">{action}</div>
    </li>
  );
}
