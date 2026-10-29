"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  Filter,
  Info,
  Lock,
  Search,
  ShieldCheck,
  X,
  XCircle,
} from "lucide-react";
import type {
  ComparisonCatalog,
  ComparisonCheck,
  ComparisonCurrencyMode,
  ComparisonJobView,
  ComparisonRepairCode,
  ComparisonRequest,
  InstrumentKind,
  InstrumentSearchResponse,
  InstrumentSearchResult,
  MetricDefinition,
  PreflightResult,
} from "@/lib/assistant/types";
import { FIXTURE_LABEL } from "@/lib/assistant/taxonomy";
import { formatDate } from "@/lib/assistant/format";
import { ApiError, apiJson, newIdempotencyKey } from "@/lib/assistant/client";
import { useDemoMode } from "@/components/assistant/shell/DemoModeProvider";
import { Pill } from "@/components/assistant/ui/Badge";
import { Button, ButtonLink } from "@/components/assistant/ui/Button";
import { Checkbox, FormAlert, Input } from "@/components/assistant/ui/Field";
import { Callout, Skeleton, Stepper, type StepStatus } from "@/components/assistant/ui/Misc";
import { Panel, SectionHeader } from "@/components/assistant/ui/Panel";

/* WF-04 §09 microcopy, verbatim. */
const COPY = {
  S01: "Choose at least two instruments to compare.",
  S02: "Searching supported public-market records…",
  S03: "No supported public record matches this search.",
  S04: "We found several matches. Choose an exchange and issuer.",
  S05: "That instrument is already included.",
  S06: "The public builder supports up to three instruments.",
  S07: "This metric does not apply to every selected instrument.",
  S13: "Checking evidence, definitions and access…",
  S14: "Ready to run. Review the selected methodology.",
  S15: "Conditions changed. Check again to continue.",
  S16: "The guest research limit has been reached.",
  S17: "Building your source-linked comparison…",
  S19: "This comparison could not be completed.",
  S20: "Your public session has ended. Start a new comparison.",
} as const;

const KIND_LABEL: Record<InstrumentKind, string> = {
  EQUITY: "Equities",
  FUND: "Funds",
  GOVERNMENT_BOND: "Government bonds",
};

const KIND_ORDER: InstrumentKind[] = ["EQUITY", "FUND", "GOVERNMENT_BOND"];

const STAGES = [
  { id: "instruments", label: "Instruments" },
  { id: "metrics", label: "Metrics" },
  { id: "alignment", label: "Alignment" },
  { id: "review", label: "Review" },
] as const;

type StageId = (typeof STAGES)[number]["id"];

const TARGET_STAGE: Record<ComparisonCheck["target"], StageId> = {
  entity_ids: "instruments",
  metric_ids: "metrics",
  time_basis: "alignment",
  display: "alignment",
  method_version: "alignment",
  publication_cutoff: "alignment",
  rights: "metrics",
  coverage: "alignment",
};

const checkTone = {
  PASS: {
    icon: CheckCircle2,
    wrap: "border-ok/25 bg-ok/[0.04]",
    text: "text-ok",
    label: "Pass",
  },
  WARN: {
    icon: AlertTriangle,
    wrap: "border-warn/30 bg-warn/[0.05]",
    text: "text-warn",
    label: "Review",
  },
  BLOCK: {
    icon: XCircle,
    wrap: "border-danger/30 bg-danger/[0.05]",
    text: "text-danger",
    label: "Blocked",
  },
} as const;

type SearchState =
  | { state: "idle" }
  | { state: "pending" }
  | { state: "done"; response: InstrumentSearchResponse }
  | { state: "error"; message: string };

function metricApplies(metric: MetricDefinition, selected: InstrumentSearchResult[]) {
  return selected.every((instrument) => metric.kinds.includes(instrument.kind));
}

function metricGated(metric: MetricDefinition, catalog: ComparisonCatalog | null) {
  if (!metric.gatedBy || !catalog) return false;
  const flags = catalog.featureFlags as Record<string, string>;
  return flags[metric.gatedBy] === "OFF";
}

export default function ComparisonBuilder() {
  const router = useRouter();
  const { mode } = useDemoMode();
  const listboxId = useId();

  const [catalog, setCatalog] = useState<ComparisonCatalog | null>(null);
  const [catalogError, setCatalogError] = useState<string | null>(null);

  const [stage, setStage] = useState<StageId>("instruments");
  const [selected, setSelected] = useState<InstrumentSearchResult[]>([]);
  const [metricIds, setMetricIds] = useState<string[]>([]);
  const [period, setPeriod] = useState("latest");
  const [currencyMode, setCurrencyMode] = useState<ComparisonCurrencyMode>("REPORTED");
  const [commonCurrency, setCommonCurrency] = useState<"GBP" | "USD" | "EUR">("GBP");
  const [methodKey, setMethodKey] = useState("");

  const [query, setQuery] = useState("");
  const [search, setSearch] = useState<SearchState>({ state: "idle" });
  const [listOpen, setListOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const [preflight, setPreflight] = useState<PreflightResult | null>(null);
  const [checking, setChecking] = useState(false);
  const [executing, setExecuting] = useState(false);
  const [ack, setAck] = useState(false);
  const [error, setError] = useState<{ title: string; message: string } | null>(null);
  const [announcement, setAnnouncement] = useState("");

  const preflightAbort = useRef<AbortController | null>(null);
  const searchAbort = useRef<AbortController | null>(null);
  const idempotencyKey = useRef<string>("");

  /* Catalogue and optional cloned draft (WF-05 RES-14 "Adjust comparison"). */
  const loadCatalog = useCallback(async () => {
    setCatalogError(null);
    try {
      const { catalog: loaded } = await apiJson<{ catalog: ComparisonCatalog }>(
        "/api/assistant/comparisons/catalog"
      );
      setCatalog(loaded);
      const approved = loaded.methods.find((method) => method.status === "APPROVED");
      if (approved) setMethodKey(`${approved.id}@${approved.version}`);

      const from = new URLSearchParams(window.location.search).get("from");
      if (from && /^cmp_[A-Za-z0-9]{6,40}$/.test(from)) {
        try {
          const { job } = await apiJson<{ job: ComparisonJobView }>(
            `/api/assistant/comparisons/${encodeURIComponent(from)}`
          );
          const ids = job.request.instrumentIds;
          const params = new URLSearchParams();
          ids.forEach((id) => params.append("id", id));
          const resolved = await apiJson<InstrumentSearchResponse>(
            `/api/assistant/instruments/search?${params.toString()}`
          );
          setSelected(resolved.results);
          setMetricIds(job.request.metricIds);
          setPeriod(job.request.period);
          setCurrencyMode(job.request.currencyMode);
          if (job.request.commonCurrency) setCommonCurrency(job.request.commonCurrency);
          setMethodKey(`${job.request.methodId}@${job.request.methodVersion}`);
          setAnnouncement("Previous comparison settings loaded. Nothing has been run.");
        } catch {
          setAnnouncement("The earlier comparison is no longer available. Start a new one.");
        }
      }
    } catch (caught) {
      setCatalogError(
        caught instanceof ApiError
          ? caught.message
          : "The comparison catalogue could not be loaded."
      );
    }
  }, []);

  useEffect(() => {
    void loadCatalog();
  }, [loadCatalog]);

  const [methodId, methodVersion] = methodKey.split("@");
  const method = catalog?.methods.find(
    (item) => item.id === methodId && item.version === methodVersion
  );

  const request = useMemo<ComparisonRequest>(
    () => ({
      instrumentIds: selected.map((item) => item.id),
      metricIds,
      period,
      currencyMode,
      commonCurrency: currencyMode === "COMMON" ? commonCurrency : null,
      metricCatalogVersion: catalog?.metricCatalogVersion ?? "",
      methodId: methodId ?? "",
      methodVersion: methodVersion ?? "",
      publicationCutoff: null,
    }),
    [selected, metricIds, period, currencyMode, commonCurrency, catalog, methodId, methodVersion]
  );
  // Local change detector only; the server computes the real fingerprint.
  const draftKey = JSON.stringify(request);

  useEffect(() => {
    preflightAbort.current?.abort();
    setPreflight(null);
    setAck(false);
    setError(null);
    idempotencyKey.current = "";
  }, [draftKey]);

  /* Drop metrics that no longer apply, and say so (no silent change). */
  useEffect(() => {
    if (!catalog) return;
    setMetricIds((current) => {
      const kept = current.filter((id) => {
        const metric = catalog.metrics.find((item) => item.id === id);
        return metric ? metricApplies(metric, selected) : false;
      });
      if (kept.length !== current.length) {
        const removed = current
          .filter((id) => !kept.includes(id))
          .map((id) => catalog.metrics.find((item) => item.id === id)?.label ?? id);
        setAnnouncement(
          `${COPY.S07} Removed: ${removed.join(", ")}.`
        );
      }
      return kept;
    });
  }, [selected, catalog]);

  /* Authorised resolver: debounced, min 2 characters (CMP-03). */
  useEffect(() => {
    const trimmed = query.trim();
    searchAbort.current?.abort();
    if (trimmed.length < 2) {
      setSearch({ state: "idle" });
      return;
    }
    const controller = new AbortController();
    searchAbort.current = controller;
    setSearch({ state: "pending" });
    const timer = window.setTimeout(async () => {
      try {
        const response = await apiJson<InstrumentSearchResponse>(
          `/api/assistant/instruments/search?q=${encodeURIComponent(trimmed)}`,
          { signal: controller.signal }
        );
        if (controller.signal.aborted) return;
        setSearch({ state: "done", response });
        setActiveIndex(response.results.length ? 0 : -1);
      } catch (caught) {
        if (controller.signal.aborted) return;
        setSearch({
          state: "error",
          message:
            caught instanceof ApiError && caught.code === "RATE_LIMITED"
              ? COPY.S16
              : "Search is unavailable. Try again.",
        });
      }
    }, 250);
    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  const results = search.state === "done" ? search.response.results : [];
  const ambiguous = search.state === "done" ? search.response.ambiguousTickers : [];
  const maxInstruments = catalog?.maxInstruments ?? 3;
  const maxMetrics = catalog?.maxMetrics ?? 4;

  function addInstrument(result: InstrumentSearchResult) {
    if (selected.some((item) => item.id === result.id)) {
      setAnnouncement(COPY.S05);
      return;
    }
    if (selected.length >= maxInstruments) {
      setAnnouncement(COPY.S06);
      return;
    }
    if (selected.length && selected[0].kind !== result.kind) {
      setAnnouncement(
        `${result.name} is a ${KIND_LABEL[result.kind].toLowerCase().replace(/s$/, "")}. The public builder compares instruments of one class only.`
      );
      return;
    }
    setSelected([...selected, result]);
    setQuery("");
    setListOpen(false);
    setAnnouncement(`${result.name} added. ${selected.length + 1} of ${maxInstruments} selected.`);
  }

  function removeInstrument(id: string) {
    const item = selected.find((entry) => entry.id === id);
    setSelected(selected.filter((entry) => entry.id !== id));
    if (item) setAnnouncement(`${item.name} removed from comparison.`);
  }

  function moveInstrument(index: number, delta: -1 | 1) {
    const target = index + delta;
    if (target < 0 || target >= selected.length) return;
    const next = [...selected];
    [next[index], next[target]] = [next[target], next[index]];
    setSelected(next);
    setAnnouncement(`${next[target].name} moved to position ${target + 1}.`);
  }

  function onSearchKey(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setListOpen(true);
      setActiveIndex((index) => Math.min(results.length - 1, index + 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(0, index - 1));
    } else if (event.key === "Enter") {
      if (listOpen && results[activeIndex]) {
        event.preventDefault();
        addInstrument(results[activeIndex]);
      }
    } else if (event.key === "Escape") {
      setListOpen(false);
    }
  }

  function toggleMetric(id: string) {
    setMetricIds((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length >= maxMetrics) {
        setAnnouncement(`Choose up to ${maxMetrics} metrics.`);
        return current;
      }
      return [...current, id];
    });
  }

  /* Stage validity (CMP-02) */
  const instrumentsValid = selected.length >= 2 && selected.length <= maxInstruments;
  const metricsValid = metricIds.length >= 1;
  const alignmentValid =
    Boolean(method && method.status === "APPROVED") &&
    !catalog?.periods.find((item) => item.id === period && item.gatedBy && (catalog.featureFlags as Record<string, string>)[item.gatedBy] === "OFF");
  const minimumValid = instrumentsValid && metricsValid && alignmentValid;

  function stageStatus(id: StageId): StepStatus {
    if (id === stage) return "current";
    const valid =
      id === "instruments"
        ? instrumentsValid
        : id === "metrics"
          ? metricsValid
          : id === "alignment"
            ? alignmentValid
            : Boolean(preflight && preflight.status !== "BLOCKED");
    if (preflight?.checks.some((check) => check.status === "BLOCK" && TARGET_STAGE[check.target] === id)) {
      return "blocked";
    }
    return valid ? "complete" : "upcoming";
  }

  function goTo(id: StageId) {
    setStage(id);
    window.requestAnimationFrame(() => {
      document.getElementById(`stage-${id}`)?.focus();
    });
  }

  async function runPreflight() {
    if (!minimumValid) return;
    preflightAbort.current?.abort();
    const controller = new AbortController();
    preflightAbort.current = controller;
    setChecking(true);
    setError(null);
    setAnnouncement(COPY.S13);
    const sentKey = draftKey;
    try {
      const result = await apiJson<PreflightResult>(
        "/api/assistant/comparisons/preflight",
        { method: "POST", body: JSON.stringify({ request }), signal: controller.signal }
      );
      if (controller.signal.aborted || sentKey !== draftKey) return;
      setPreflight(result);
      setAck(false);
      setStage("review");
      setAnnouncement(
        result.status === "READY"
          ? COPY.S14
          : result.status === "REVISE"
            ? `${result.warningCount} warning${result.warningCount === 1 ? "" : "s"} need review before running.`
            : `${result.blockingCount} blocking check${result.blockingCount === 1 ? "" : "s"}. The comparison cannot run as configured.`
      );
    } catch (caught) {
      if (controller.signal.aborted) return;
      setError({
        title: "Checks did not complete",
        message:
          caught instanceof ApiError && caught.code === "RATE_LIMITED"
            ? `${COPY.S16}${caught.retryAfterSeconds ? ` Try again in ${caught.retryAfterSeconds} seconds.` : ""}`
            : caught instanceof ApiError
              ? caught.message
              : "The preflight check could not be completed.",
      });
    } finally {
      if (preflightAbort.current === controller) setChecking(false);
    }
  }

  function cancelPreflight() {
    preflightAbort.current?.abort();
    setChecking(false);
    setAnnouncement("Checks cancelled. Nothing was run.");
  }

  async function runComparison() {
    if (!preflight?.decisionToken) return;
    if (!idempotencyKey.current) idempotencyKey.current = newIdempotencyKey();
    setExecuting(true);
    setError(null);
    setAnnouncement(COPY.S17);
    try {
      const result = await apiJson<{ job: ComparisonJobView }>(
        "/api/assistant/comparisons",
        {
          method: "POST",
          headers: { "idempotency-key": idempotencyKey.current },
          body: JSON.stringify({
            request,
            token: preflight.decisionToken,
            acknowledged: ack,
          }),
        }
      );
      router.push(`/assistant/compare/${result.job.ref}`);
    } catch (caught) {
      setExecuting(false);
      if (caught instanceof ApiError) {
        if (caught.code === "PREFLIGHT_STALE" || caught.code === "PREFLIGHT_EXPIRED") {
          setPreflight(null);
          idempotencyKey.current = "";
          setError({ title: "Check again", message: COPY.S15 });
          return;
        }
        if (caught.code === "RATE_LIMITED") {
          setError({ title: "Limit reached", message: COPY.S16 });
          return;
        }
        if (caught.status === 404) {
          setError({ title: "Session ended", message: COPY.S20 });
          return;
        }
        setError({
          title: COPY.S19,
          message: caught.retryable
            ? `${caught.message} Retrying uses the same request key, so it cannot start a duplicate job.`
            : caught.message,
        });
        if (caught.checks) {
          const checks = caught.checks as ComparisonCheck[];
          setPreflight((current) => (current ? { ...current, checks } : current));
        }
        return;
      }
      setError({ title: COPY.S19, message: "The comparison could not be started." });
    }
  }

  function applyRepair(check: ComparisonCheck) {
    const code: ComparisonRepairCode | undefined = check.repairCode;
    switch (code) {
      case "USE_REPORTED_CURRENCY":
        setCurrencyMode("REPORTED");
        setAnnouncement("Currency basis set to reported currencies. Check again to continue.");
        break;
      case "REMOVE_INELIGIBLE_METRICS":
      case "REMOVE_AFFECTED_METRICS":
        if (catalog) {
          setMetricIds((current) =>
            current.filter((id) => {
              const metric = catalog.metrics.find((item) => item.id === id);
              return metric && metricApplies(metric, selected) && !metricGated(metric, catalog);
            })
          );
        }
        setAnnouncement("Ineligible metrics removed. Check again to continue.");
        break;
      case "CHOOSE_APPROVED_METHOD": {
        const approved = catalog?.methods.find((item) => item.status === "APPROVED");
        if (approved) setMethodKey(`${approved.id}@${approved.version}`);
        setAnnouncement("Approved method selected. Check again to continue.");
        break;
      }
      case "CHOOSE_SUPPORTED_PERIOD":
        setPeriod("latest");
        setAnnouncement("Latest reported period selected. Check again to continue.");
        break;
      default:
        break;
    }
    goTo(TARGET_STAGE[check.target]);
  }

  const canRun =
    Boolean(preflight?.decisionToken) &&
    preflight?.status !== "BLOCKED" &&
    (preflight?.status !== "REVISE" || ack);

  /* Feature gate (WF-04 §1.3, A03, CMP-14). */
  if (catalogError) {
    return (
      <Callout
        tone="warn"
        title="Comparison is unavailable at present"
        action={
          <Button size="sm" variant="secondary" onClick={() => void loadCatalog()}>
            Try again
          </Button>
        }
      >
        {catalogError} You can continue with a single research question instead.
      </Callout>
    );
  }
  if (!catalog) {
    return (
      <div aria-busy="true" className="space-y-3">
        <Skeleton className="h-20" />
        <Skeleton className="h-64" />
      </div>
    );
  }
  if (catalog.featureFlags.comparison === "OFF") {
    return (
      <Panel className="p-6">
        <h2 className="text-lg font-semibold text-platinum">Unavailable at present</h2>
        <p className="mt-2 text-[14px] leading-6 text-haze">
          The public comparison builder has not been approved for release. No
          comparison runs from this page.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ButtonLink href="/assistant" size="sm">Ask a research question</ButtonLink>
          <ButtonLink href="/assistant/help" size="sm" variant="secondary">Browse help</ButtonLink>
        </div>
      </Panel>
    );
  }

  const selectedKinds = new Set(selected.map((item) => item.kind));
  const methods = catalog.methods.filter((item) => item.status === "APPROVED");

  return (
    <div className="space-y-4">
      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>

      {catalog.featureFlags.comparison === "PREVIEW" ? (
        <Callout tone="warn" title="Preview — not approved for release">
          This builder is shown for design review on synthetic fixtures. A
          completed run is not a sourced analysis of real markets.
        </Callout>
      ) : null}

      <Stepper
        label="Comparison progress"
        steps={STAGES.map((item, index) => ({
          id: item.id,
          label: item.label,
          description: `Step ${index + 1} of ${STAGES.length}`,
          status: stageStatus(item.id),
        }))}
      />
      <nav aria-label="Comparison steps" className="flex flex-wrap gap-2">
        {STAGES.map((item) => (
          <Button
            key={item.id}
            size="sm"
            variant={stage === item.id ? "primary" : "ghost"}
            aria-current={stage === item.id ? "step" : undefined}
            onClick={() => goTo(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <div className="min-w-0 space-y-4">
          {/* Stage 1 — Instruments */}
          <Panel className={clsx("p-4 sm:p-5", stage !== "instruments" && "hidden lg:block")}>
            <div id="stage-instruments" tabIndex={-1} className="focus:outline-none">
              <SectionHeader
                title="1 · Instruments"
                description="Search the public canonical register. Choose two or three instruments of the same class."
                actions={
                  <Pill tone={instrumentsValid ? "ok" : "warn"}>
                    {selected.length}/{maxInstruments} selected
                  </Pill>
                }
              />
            </div>

            <div className="relative">
              <label htmlFor="instrument-search" className="mb-1 block text-[13px] font-medium text-platinum">
                Find an instrument
              </label>
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute bottom-3.5 left-3 h-4 w-4 text-haze"
              />
              <Input
                id="instrument-search"
                role="combobox"
                aria-expanded={listOpen && results.length > 0}
                aria-controls={listboxId}
                aria-autocomplete="list"
                aria-activedescendant={
                  listOpen && results[activeIndex] ? `${listboxId}-${results[activeIndex].id}` : undefined
                }
                aria-describedby="instrument-search-hint"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setListOpen(true);
                }}
                onFocus={() => setListOpen(true)}
                onBlur={() => window.setTimeout(() => setListOpen(false), 150)}
                onKeyDown={onSearchKey}
                placeholder="Name, ticker, exchange or canonical ID"
                className="pl-9"
                autoComplete="off"
                maxLength={64}
              />
            </div>
            <p id="instrument-search-hint" className="mt-1 text-[12px] text-haze">
              Type at least 2 characters. Only records returned by the authorised resolver can be chosen.
            </p>

            <div role="status" aria-live="polite" className="mt-2 text-[13px]">
              {selected.length < 2 && search.state === "idle" ? (
                <p className="text-haze">{COPY.S01}</p>
              ) : null}
              {search.state === "pending" ? <p className="text-haze">{COPY.S02}</p> : null}
              {search.state === "done" && !results.length ? (
                <p className="text-warn">{COPY.S03}</p>
              ) : null}
              {search.state === "error" ? <p className="text-danger">{search.message}</p> : null}
              {ambiguous.length ? (
                <p className="text-warn">
                  {COPY.S04} ({ambiguous.join(", ")})
                </p>
              ) : null}
            </div>

            {listOpen && results.length ? (
              <div
                id={listboxId}
                role="listbox"
                aria-label="Matching instruments"
                className="mt-2 max-h-80 overflow-y-auto rounded-xl border border-as-line bg-midnight-soft/80 p-1.5"
              >
                {KIND_ORDER.map((kind) => {
                  const items = results.filter((item) => item.kind === kind);
                  if (!items.length) return null;
                  return (
                    <div key={kind} role="group" aria-label={KIND_LABEL[kind]}>
                      <p className="px-2 pb-1 pt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-haze/80">
                        {KIND_LABEL[kind]}
                      </p>
                      {items.map((item) => {
                        const index = results.indexOf(item);
                        const already = selected.some((entry) => entry.id === item.id);
                        return (
                          <div
                            key={item.id}
                            id={`${listboxId}-${item.id}`}
                            role="option"
                            aria-selected={index === activeIndex}
                            aria-disabled={already}
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => addInstrument(item)}
                            className={clsx(
                              "flex min-h-11 cursor-pointer items-start gap-2 rounded-lg px-2.5 py-2",
                              index === activeIndex ? "bg-iris/15" : "hover:bg-white/[0.04]",
                              already && "opacity-60"
                            )}
                          >
                            <span className="min-w-0 flex-1">
                              <span className="block text-[13px] font-semibold text-platinum">
                                {item.name}
                                {ambiguous.includes(item.ticker) ? (
                                  <span className="ml-2 text-[12px] font-normal text-warn">
                                    · {item.venueName}
                                  </span>
                                ) : null}
                              </span>
                              <span className="block font-mono text-[11px] uppercase tracking-wider text-haze">
                                {item.ticker} · {item.exchange} · {item.canonicalId}
                              </span>
                              {already ? (
                                <span className="block text-[12px] text-warn">{COPY.S05}</span>
                              ) : null}
                            </span>
                            {item.dataRights !== "FULL" ? (
                              <Lock aria-label="Metadata-only licence" className="mt-1 h-3.5 w-3.5 text-danger" />
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ) : null}

            {selected.length >= maxInstruments ? (
              <p className="mt-2 text-[13px] text-warn">{COPY.S06}</p>
            ) : null}

            {selected.length ? (
              <ol aria-label="Selected instruments" className="mt-4 space-y-2 border-t border-as-line/60 pt-4">
                {selected.map((item, index) => (
                  <li
                    key={item.id}
                    className="flex flex-wrap items-center gap-3 rounded-xl border border-as-line/70 bg-midnight-soft/40 p-3"
                  >
                    <span className="font-mono text-[12px] text-haze">{index + 1}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[14px] font-semibold text-platinum">{item.name}</span>
                      <span className="block font-mono text-[11px] uppercase tracking-wider text-haze">
                        {item.canonicalId} · {KIND_LABEL[item.kind]} · {item.venueName} · {item.currency}
                      </span>
                      {item.note ? (
                        <span className="mt-1 block text-[12px] leading-5 text-warn">{item.note}</span>
                      ) : null}
                    </span>
                    <span className="flex gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        aria-label={`Move ${item.name} up`}
                        disabled={index === 0}
                        onClick={() => moveInstrument(index, -1)}
                      >
                        <ArrowUp aria-hidden="true" className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        aria-label={`Move ${item.name} down`}
                        disabled={index === selected.length - 1}
                        onClick={() => moveInstrument(index, 1)}
                      >
                        <ArrowDown aria-hidden="true" className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        aria-label={`Remove ${item.name} from comparison`}
                        onClick={() => removeInstrument(item.id)}
                      >
                        <X aria-hidden="true" className="h-3.5 w-3.5" />
                      </Button>
                    </span>
                  </li>
                ))}
              </ol>
            ) : null}
            <div className="mt-4 flex justify-end lg:hidden">
              <Button size="sm" disabled={!instrumentsValid} onClick={() => goTo("metrics")}>
                Continue to metrics
              </Button>
            </div>
          </Panel>

          {/* Stage 2 — Metrics */}
          <Panel className={clsx("p-4 sm:p-5", stage !== "metrics" && "hidden lg:block")}>
            <div id="stage-metrics" tabIndex={-1} className="focus:outline-none">
              <SectionHeader
                title="2 · Metrics"
                description={`Only metrics defined for every selected instrument can be chosen (catalogue ${catalog.metricCatalogVersion}). Units and basis are shown so a percentage cannot be mistaken for an amount.`}
                actions={<Pill tone={metricsValid ? "ok" : "warn"}>{metricIds.length}/{maxMetrics}</Pill>}
              />
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {catalog.metrics.map((metric) => {
                const applicable = selected.length === 0 || metricApplies(metric, selected);
                const gated = metricGated(metric, catalog);
                const isSelected = metricIds.includes(metric.id);
                const disabled = !applicable || gated || selected.length < 1;
                const reasonId = `metric-reason-${metric.id}`;
                return (
                  <li key={metric.id}>
                    <button
                      type="button"
                      aria-pressed={isSelected}
                      aria-describedby={disabled ? reasonId : undefined}
                      disabled={disabled}
                      onClick={() => toggleMetric(metric.id)}
                      className={clsx(
                        "flex min-h-[64px] w-full items-start gap-2.5 rounded-xl border p-3 text-left transition-colors",
                        isSelected
                          ? "border-iris/60 bg-iris/[0.08]"
                          : "border-as-line/70 bg-midnight-soft/30 hover:border-iris/40",
                        disabled && "cursor-not-allowed opacity-55"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={clsx(
                          "mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border",
                          isSelected ? "border-iris bg-iris text-white" : "border-as-line bg-midnight/60"
                        )}
                      >
                        {isSelected ? <CheckCircle2 className="h-3 w-3" /> : null}
                      </span>
                      <span className="min-w-0">
                        <span className="flex flex-wrap items-center gap-1.5">
                          <span className="text-[13px] font-semibold text-platinum">{metric.label}</span>
                          <Pill tone="neutral">{metric.unit.replace("-", " ")}</Pill>
                        </span>
                        <span className="mt-0.5 block text-[12px] leading-5 text-haze">{metric.basis}</span>
                        {gated ? (
                          <span id={reasonId} className="mt-1 block text-[12px] leading-5 text-warn">
                            {metric.gateReason ?? "Not approved for public release."}
                          </span>
                        ) : !applicable ? (
                          <span id={reasonId} className="mt-1 block text-[12px] leading-5 text-warn">
                            {COPY.S07} Applies to {metric.kinds.map((kind) => KIND_LABEL[kind].toLowerCase()).join(" and ")}.
                          </span>
                        ) : selected.length < 1 ? (
                          <span id={reasonId} className="mt-1 block text-[12px] leading-5 text-haze">
                            Choose instruments first.
                          </span>
                        ) : null}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex justify-between lg:hidden">
              <Button size="sm" variant="ghost" onClick={() => goTo("instruments")}>Back</Button>
              <Button size="sm" disabled={!metricsValid} onClick={() => goTo("alignment")}>
                Continue to alignment
              </Button>
            </div>
          </Panel>

          {/* Stage 3 — Alignment */}
          <Panel className={clsx("p-4 sm:p-5", stage !== "alignment" && "hidden lg:block")}>
            <div id="stage-alignment" tabIndex={-1} className="focus:outline-none">
              <SectionHeader
                title="3 · Alignment"
                description="Period, currency basis and method stay editable until you run. Raw reporting dates are shown; nothing is silently aligned or converted."
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <fieldset>
                <legend className="text-[13px] font-semibold text-platinum">Period</legend>
                <div className="mt-1.5 space-y-1.5">
                  {catalog.periods.map((option) => {
                    const gated = Boolean(
                      option.gatedBy && (catalog.featureFlags as Record<string, string>)[option.gatedBy] === "OFF"
                    );
                    return (
                      <label
                        key={option.id}
                        className={clsx(
                          "flex min-h-11 items-start gap-2 rounded-lg border px-3 py-2",
                          gated ? "cursor-not-allowed opacity-60" : "cursor-pointer",
                          period === option.id ? "border-iris/50 bg-iris/[0.06]" : "border-as-line/60"
                        )}
                      >
                        <input
                          type="radio"
                          name="period"
                          value={option.id}
                          disabled={gated}
                          checked={period === option.id}
                          onChange={() => setPeriod(option.id)}
                          className="mt-1 h-4 w-4 accent-[#6f5bff]"
                        />
                        <span className="min-w-0">
                          <span className="block text-[13px] font-medium text-platinum">{option.label}</span>
                          <span className="block text-[12px] leading-5 text-haze">
                            {gated ? option.gateReason ?? "Not available in this release." : option.description}
                          </span>
                          {!gated && selected.length ? (
                            <ul className="mt-1 space-y-0.5">
                              {selected.map((item) => {
                                const bounds = item.periods[option.id];
                                return (
                                  <li key={item.id} className="font-mono text-[11px] text-haze">
                                    {item.ticker}:{" "}
                                    {bounds
                                      ? `${bounds.start ? `${formatDate(bounds.start)} – ` : ""}${formatDate(bounds.end)} (${bounds.label})`
                                      : "No record held for this period"}
                                  </li>
                                );
                              })}
                            </ul>
                          ) : null}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-[13px] font-semibold text-platinum">Units &amp; currency</legend>
                <div className="mt-1.5 space-y-1.5">
                  {catalog.currencyModes.map((option) => (
                    <label
                      key={option.id}
                      className={clsx(
                        "flex min-h-11 cursor-pointer items-start gap-2 rounded-lg border px-3 py-2",
                        currencyMode === option.id ? "border-iris/50 bg-iris/[0.06]" : "border-as-line/60"
                      )}
                    >
                      <input
                        type="radio"
                        name="currency-mode"
                        value={option.id}
                        checked={currencyMode === option.id}
                        onChange={() => setCurrencyMode(option.id)}
                        className="mt-1 h-4 w-4 accent-[#6f5bff]"
                      />
                      <span>
                        <span className="block text-[13px] font-medium text-platinum">{option.label}</span>
                        <span className="block text-[12px] leading-5 text-haze">{option.description}</span>
                      </span>
                    </label>
                  ))}
                </div>
                {currencyMode === "COMMON" ? (
                  <div className="mt-2">
                    <label htmlFor="common-currency" className="mb-1 block text-[12px] text-haze">
                      Target currency
                    </label>
                    <select
                      id="common-currency"
                      value={commonCurrency}
                      onChange={(event) => setCommonCurrency(event.target.value as "GBP" | "USD" | "EUR")}
                      className="h-11 w-full rounded-lg border border-as-line bg-midnight-soft px-2.5 text-[13px] text-platinum focus:border-iris/70 focus:outline-none"
                    >
                      <option value="GBP">GBP</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </select>
                    <p className="mt-1 text-[12px] leading-5 text-warn">
                      No approved FX source is configured. Preflight will block a
                      conversion rather than apply one silently.
                    </p>
                  </div>
                ) : null}
                {selectedKinds.size ? (
                  <p className="mt-2 text-[12px] leading-5 text-haze">
                    Reported currencies: {selected.map((item) => `${item.ticker} ${item.currency}`).join(" · ")}
                  </p>
                ) : null}
              </fieldset>
            </div>

            <fieldset className="mt-4 border-t border-as-line/60 pt-4">
              <legend className="text-[13px] font-semibold text-platinum">Method</legend>
              <div className="mt-1.5 grid gap-2 md:grid-cols-2">
                {methods.map((option) => {
                  const key = `${option.id}@${option.version}`;
                  return (
                    <label
                      key={key}
                      className={clsx(
                        "flex cursor-pointer items-start gap-2 rounded-lg border px-3 py-2.5",
                        methodKey === key ? "border-iris/50 bg-iris/[0.06]" : "border-as-line/60"
                      )}
                    >
                      <input
                        type="radio"
                        name="method"
                        value={key}
                        checked={methodKey === key}
                        onChange={() => setMethodKey(key)}
                        className="mt-1 h-4 w-4 accent-[#6f5bff]"
                      />
                      <span className="min-w-0">
                        <span className="block text-[13px] font-medium text-platinum">
                          {option.name} <span className="font-mono text-[11px] text-haze">{option.version}</span>
                        </span>
                        <span className="block text-[12px] leading-5 text-haze">{option.summary}</span>
                      </span>
                    </label>
                  );
                })}
              </div>
              {method ? (
                <div className="mt-3 grid gap-3 rounded-xl border border-as-line/60 bg-midnight-soft/30 p-3 md:grid-cols-2">
                  <div>
                    <p className="text-[12px] font-semibold text-platinum">Transformations</p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[12px] leading-5 text-haze">
                      {method.transformations.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p className="mt-2 text-[12px] text-haze">Rounding: {method.rounding}</p>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-platinum">Deliberately not done</p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[12px] leading-5 text-haze">
                      {method.omissions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
            </fieldset>
            <div className="mt-4 flex justify-between lg:hidden">
              <Button size="sm" variant="ghost" onClick={() => goTo("metrics")}>Back</Button>
              <Button size="sm" disabled={!alignmentValid} onClick={() => goTo("review")}>
                Continue to review
              </Button>
            </div>
          </Panel>
        </div>

        {/* Stage 4 — Review: preflight and run */}
        <aside className={clsx("min-w-0 lg:sticky lg:top-20", stage !== "review" && "hidden lg:block")}>
          <Panel variant="raised" className="p-4">
            <div id="stage-review" tabIndex={-1} className="flex items-center justify-between gap-2 focus:outline-none">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-iris-soft">Step 4</p>
                <h2 className="mt-0.5 text-[16px] font-semibold text-platinum">Review</h2>
              </div>
              <ShieldCheck aria-hidden="true" className="h-5 w-5 text-iris-soft" />
            </div>

            <dl className="mt-3 space-y-1.5 border-y border-as-line/60 py-3 text-[13px]">
              <div className="flex justify-between gap-3">
                <dt className="text-haze">Instruments</dt>
                <dd className="text-right text-platinum">
                  {selected.map((item) => item.ticker).join(", ") || "None"}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-haze">Metrics</dt>
                <dd className="text-right text-platinum">{metricIds.length}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-haze">Period</dt>
                <dd className="text-right text-platinum">
                  {catalog.periods.find((item) => item.id === period)?.label}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-haze">Currency</dt>
                <dd className="text-right text-platinum">
                  {currencyMode === "REPORTED" ? "As reported" : `Convert to ${commonCurrency}`}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-haze">Method</dt>
                <dd className="text-right text-platinum">
                  {method ? `${method.name} ${method.version}` : "Choose a method"}
                </dd>
              </div>
            </dl>

            {checking ? (
              <div role="status" className="mt-3 flex items-center justify-between gap-2 rounded-lg border border-info/30 bg-info/[0.06] px-3 py-2.5">
                <p className="text-[13px] text-platinum">{COPY.S13}</p>
                <Button size="sm" variant="ghost" onClick={cancelPreflight}>Cancel</Button>
              </div>
            ) : preflight ? (
              <div className="mt-3">
                <div
                  className={clsx(
                    "flex items-start gap-2 rounded-lg border px-3 py-2.5",
                    preflight.status === "READY" && "border-ok/30 bg-ok/[0.06]",
                    preflight.status === "REVISE" && "border-warn/30 bg-warn/[0.06]",
                    preflight.status === "BLOCKED" && "border-danger/30 bg-danger/[0.06]"
                  )}
                >
                  {preflight.status === "READY" ? (
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-ok" />
                  ) : preflight.status === "REVISE" ? (
                    <AlertTriangle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-warn" />
                  ) : (
                    <XCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
                  )}
                  <div>
                    <p className="text-[13px] font-semibold text-platinum">
                      {preflight.status === "READY"
                        ? COPY.S14
                        : preflight.status === "REVISE"
                          ? "Review required before running"
                          : "This comparison cannot run as configured"}
                    </p>
                    <p className="mt-0.5 text-[12px] leading-5 text-haze">
                      {preflight.blockingCount
                        ? `${preflight.blockingCount} blocking · ${preflight.warningCount} warning`
                        : preflight.warningCount
                          ? `${preflight.warningCount} warning${preflight.warningCount === 1 ? "" : "s"} need acknowledgement.`
                          : "No comparison has run yet."}
                      {preflight.expiresAt ? ` Decision valid until ${new Date(preflight.expiresAt).toLocaleTimeString()}.` : ""}
                    </p>
                  </div>
                </div>

                <ul className="mt-2 space-y-1.5">
                  {[...preflight.checks]
                    .sort((a, b) => ["BLOCK", "WARN", "PASS"].indexOf(a.status) - ["BLOCK", "WARN", "PASS"].indexOf(b.status))
                    .map((check) => {
                      const tone = checkTone[check.status];
                      const Icon = tone.icon;
                      return (
                        <li key={check.id} className={clsx("rounded-lg border px-3 py-2", tone.wrap)}>
                          <div className="flex items-start gap-1.5">
                            <Icon aria-hidden="true" className={clsx("mt-0.5 h-3.5 w-3.5 shrink-0", tone.text)} />
                            <div className="min-w-0 flex-1">
                              <p className="text-[12px] font-semibold text-platinum">
                                {check.title}
                                <span className={clsx("ml-1.5 font-mono text-[11px] uppercase tracking-wider", tone.text)}>
                                  {tone.label}
                                </span>
                              </p>
                              <p className="mt-0.5 text-[12px] leading-5 text-haze">{check.detail}</p>
                              {check.why ? (
                                <p className="mt-0.5 text-[12px] leading-5 text-haze">
                                  <span className="font-semibold text-platinum/85">Why: </span>
                                  {check.why}
                                </p>
                              ) : null}
                              {check.status !== "PASS" && (check.repairCode || check.target) ? (
                                <button
                                  type="button"
                                  onClick={() => applyRepair(check)}
                                  className="mt-1 inline-flex min-h-11 items-center text-[12px] font-semibold text-iris-soft hover:text-white"
                                >
                                  {check.repairLabel ?? `Review ${TARGET_STAGE[check.target]}`}
                                </button>
                              ) : null}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ul>

                {preflight.status === "REVISE" ? (
                  <div className="mt-3">
                    <Checkbox
                      id="ack-warnings"
                      checked={ack}
                      onChange={setAck}
                      label="I have reviewed the warnings"
                      description="Some fields cannot be shown; permitted results are labelled. Values stay on each instrument's own reporting basis."
                    />
                  </div>
                ) : null}
              </div>
            ) : (
              <p className="mt-3 text-[13px] leading-6 text-haze">
                Checks run on the server and resolve identity, applicability,
                period alignment, currency basis, source rights and method
                version before anything is calculated. Nothing on this page
                implies permission or verified data until they return.
              </p>
            )}

            {error ? (
              <div className="mt-3">
                <FormAlert title={error.title}>{error.message}</FormAlert>
              </div>
            ) : null}

            <div className="mt-3 flex flex-col gap-1.5">
              <Button
                variant="secondary"
                size="md"
                disabled={!minimumValid || checking}
                aria-describedby={!minimumValid ? "check-disabled-reason" : undefined}
                onClick={() => void runPreflight()}
                icon={<Filter aria-hidden="true" className="h-3.5 w-3.5" />}
              >
                {preflight ? "Check again" : "Check & continue"}
              </Button>
              {!minimumValid ? (
                <p id="check-disabled-reason" className="text-[12px] text-haze">
                  {!instrumentsValid ? COPY.S01 : !metricsValid ? "Choose at least one metric." : "Choose an approved method and a supported period."}
                </p>
              ) : null}
              <Button
                size="md"
                disabled={!canRun}
                loading={executing}
                onClick={() => void runComparison()}
                icon={!executing ? <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" /> : undefined}
              >
                Run comparison
              </Button>
            </div>

            <p className="mt-2 text-[12px] leading-5 text-haze/80">
              Running creates a point-in-time snapshot with per-cell provenance.
              {mode === "guest"
                ? " Guest output is temporary to this browser session."
                : " The demo account is synthetic; nothing is saved to a real account."}
            </p>
          </Panel>

          <div className="mt-3 space-y-3">
            <div className="rounded-xl border border-as-line/60 bg-midnight-soft/40 p-3.5">
              <p className="flex items-center gap-1.5 text-[13px] font-semibold text-platinum">
                <Info aria-hidden="true" className="h-3.5 w-3.5 text-haze" />
                Scope
              </p>
              <p className="mt-1 text-[12px] leading-5 text-haze">
                Research information only — not personalized investment advice.
                No ranking, score, winner or recommendation is produced.
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase leading-5 tracking-[0.1em] text-haze/70">
              {FIXTURE_LABEL}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
