"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  AlertTriangle,
  ArrowUpRight,
  Check,
  Clipboard,
  Clock3,
  FileText,
  Lock,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import type {
  AttributionState,
  Claim,
  ClaimMapping,
  EvidencePackage,
  EvidenceSourceDetail,
  PublishedAnswer,
  SourceRecord,
} from "@/lib/assistant/types";
import { FIXTURE_LABEL, STATUS_META } from "@/lib/assistant/taxonomy";
import { formatDate, formatDateTime } from "@/lib/assistant/format";
import {
  ATTRIBUTION_COPY,
  CLAIM_MAPPING_COPY,
  CONTENT_CLASS_COPY,
  INSPECTOR_STATE_COPY,
  LOCATOR_UNAVAILABLE,
  NOT_AVAILABLE,
  SOURCE_ACCESS_RESTRICTED_COPY,
  TIER_COPY,
  TIME_LABELS,
  inspectorStateForError,
  resolutionCopy,
  type InspectorStateKey,
} from "@/lib/assistant/evidence-copy";
import { ApiError, apiJson } from "@/lib/assistant/client";
import { Pill, RightsBadge, StatusBadge, TierBadge } from "@/components/assistant/ui/Badge";
import { Button, ButtonLink } from "@/components/assistant/ui/Button";
import { Dialog } from "@/components/assistant/ui/Dialog";
import { Tabs, TabPanel } from "@/components/assistant/ui/Tabs";
import { KeyValue } from "@/components/assistant/ui/Panel";

/** Fallback mapping when a claim predates the WF-03 mapping field. */
function mappingOf(claim: Claim): ClaimMapping {
  if (claim.mapping) return claim.mapping;
  if (claim.verification === "CONTESTED") return "CONFLICTING";
  if (claim.verification === "UNSUPPORTED") return "NOT_FOUND";
  if (claim.verification === "PARTIAL") return "QUALIFIED";
  return "SUPPORTED";
}

/** Attribution for sources that predate the WF-03 field: never "verified". */
function attributionOf(source: Pick<SourceRecord, "attributionState" | "rights">): AttributionState {
  if (source.attributionState) return source.attributionState;
  return source.rights.state === "FULL" ? "PRIMARY_REVIEWED" : "LICENSED_DERIVED";
}

function display(value: string | null | undefined, timeZone: string, locale: string, withTime = false) {
  if (!value) return NOT_AVAILABLE;
  return withTime ? formatDateTime(value, timeZone, locale) : formatDate(value, timeZone, locale);
}

const CAPABILITIES: { key: keyof EvidenceSourceDetail["displayPolicy"]; label: string }[] = [
  { key: "metadata", label: "Metadata" },
  { key: "excerpt", label: "Excerpt" },
  { key: "embed", label: "Embed" },
  { key: "linkOut", label: "Open original" },
  { key: "download", label: "Download" },
  { key: "copyCitation", label: "Copy citation" },
];

type SourceState =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "ready"; detail: EvidenceSourceDetail }
  | { state: "error"; key: InspectorStateKey };

export default function EvidenceInspector({
  open,
  onClose,
  answer,
  sources,
  answerRef,
  initialClaimId,
  initialSourceId,
  timeZone = "UTC",
  locale = "en-GB",
  mode = "research",
}: {
  open: boolean;
  onClose: () => void;
  answer: PublishedAnswer | null;
  /** Rights-filtered records from the server (no restricted excerpts). */
  sources: SourceRecord[];
  answerRef: string;
  initialClaimId?: string;
  initialSourceId?: string;
  timeZone?: string;
  locale?: string;
  /** "research" re-checks evidence on the server; "comparison" uses the snapshot. */
  mode?: "research" | "comparison";
}) {
  const [tab, setTab] = useState("overview");
  const [claimId, setClaimId] = useState<string | undefined>(initialClaimId);
  const [sourceId, setSourceId] = useState<string | undefined>(initialSourceId);
  const [pkg, setPkg] = useState<EvidencePackage | null>(null);
  const [pkgState, setPkgState] = useState<"idle" | "opening" | "ready" | InspectorStateKey>("idle");
  const [sourceState, setSourceState] = useState<SourceState>({ state: "idle" });
  const [copyState, setCopyState] = useState<"idle" | "copied" | "denied">("idle");
  const [announcement, setAnnouncement] = useState("");

  /* Open: select the exact claim/source and fetch the versioned package. */
  const loadPackage = useCallback(async () => {
    if (!answer || mode !== "research") {
      setPkgState("ready");
      return;
    }
    setPkgState("opening");
    setAnnouncement(INSPECTOR_STATE_COPY.OPENING);
    try {
      const params = new URLSearchParams({ answerVersion: answer.answerVersion });
      const { evidence } = await apiJson<{ evidence: EvidencePackage }>(
        `/api/assistant/research/${encodeURIComponent(answerRef)}/evidence?${params.toString()}`
      );
      setPkg(evidence);
      setPkgState("ready");
      setAnnouncement(`Evidence loaded: ${evidence.claims.length} claims, ${evidence.sources.length} sources.`);
    } catch (error) {
      const key =
        error instanceof ApiError
          ? error.code === "ANSWER_REVOKED"
            ? "RIGHTS_REVOKED"
            : inspectorStateForError(error.status, error.code)
          : "ERROR";
      setPkgState(key);
      setAnnouncement(INSPECTOR_STATE_COPY[key]);
    }
  }, [answer, answerRef, mode]);

  useEffect(() => {
    if (!open) return;
    setClaimId(initialClaimId);
    setSourceId(initialSourceId);
    setCopyState("idle");
    setTab(initialClaimId ? "claims" : initialSourceId ? "source" : "overview");
    void loadPackage();
  }, [open, initialClaimId, initialSourceId, loadPackage]);

  /* Browser back closes the inspector first (WF-03 mobile 08). */
  useEffect(() => {
    if (!open) return;
    window.history.pushState({ talvrinInspector: true }, "", window.location.href);
    const onPop = () => onClose();
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [open, onClose]);

  /* Source detail re-checks rights at open time (WF-03 P-05, AC03, AC04). */
  useEffect(() => {
    if (!open || !sourceId || !answer) {
      setSourceState({ state: "idle" });
      return;
    }
    if (mode !== "research") {
      setSourceState({ state: "idle" });
      return;
    }
    let cancelled = false;
    setSourceState({ state: "loading" });
    apiJson<{ source: EvidenceSourceDetail }>(
      `/api/assistant/research/${encodeURIComponent(answerRef)}/sources/${encodeURIComponent(sourceId)}`
    )
      .then(({ source }) => {
        if (cancelled) return;
        setSourceState({ state: "ready", detail: source });
        const note = resolutionCopy(source.resolution);
        if (note) setAnnouncement(note);
      })
      .catch((error) => {
        if (cancelled) return;
        setSourceState({
          state: "error",
          key: error instanceof ApiError ? inspectorStateForError(error.status, error.code) : "ERROR",
        });
      });
    return () => {
      cancelled = true;
    };
  }, [open, sourceId, answer, answerRef, mode]);

  const selectedClaim = useMemo(
    () => answer?.claims.find((claim) => claim.id === claimId) ?? null,
    [answer, claimId]
  );
  const claimView = pkg?.claims.find((item) => item.claimId === claimId) ?? null;
  const ordinals = (claim: Claim) =>
    claim.sourceIds.map((id) => (answer?.sources.indexOf(id) ?? -1) + 1).filter((n) => n > 0);

  async function copyCitation(id: string) {
    const source = sources.find((item) => item.id === id);
    try {
      let text: string;
      if (mode === "research") {
        ({ text } = await apiJson<{ text: string }>("/api/assistant/citations/copy", {
          method: "POST",
          body: JSON.stringify({ answerRef, sourceId: id }),
        }));
      } else {
        // Snapshot mode: metadata only, never excerpt text.
        const n = (answer?.sources.indexOf(id) ?? -1) + 1;
        text = `[${n}] ${source?.publisher}. ${source?.title}. Published ${display(source?.documentDate, "UTC", "en-GB")}. Retrieved by Talvrin ${display(source?.retrievedAt, "UTC", "en-GB")}. ${FIXTURE_LABEL}.`;
      }
      await navigator.clipboard.writeText(text);
      setCopyState("copied");
      setAnnouncement("Citation copied.");
    } catch {
      setCopyState("denied");
      setAnnouncement("This citation cannot be copied under current access rights.");
    }
    window.setTimeout(() => setCopyState("idle"), 2000);
  }

  if (!answer) return null;

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "source", label: "Source", count: sources.length },
    { id: "claims", label: "Claims", count: answer.claims.length },
    { id: "method", label: "Method", count: answer.methods.length },
  ];
  const conflicts = pkg?.conflicts ?? answer.conflicts ?? [];
  const blocking = pkgState !== "idle" && pkgState !== "opening" && pkgState !== "ready";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Evidence inspector"
      eyebrow={`Answer version ${answer.answerVersion}`}
      description="What supports this answer, what current rights permit, and how derived values were calculated."
      width="inspector"
      closeLabel="Close evidence inspector"
      footer={
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="max-w-xs font-mono text-[11px] uppercase leading-5 tracking-[0.1em] text-haze/80">
            {FIXTURE_LABEL}
          </p>
          <ButtonLink
            href={{
              pathname: "/assistant/report",
              query: {
                [mode === "comparison" ? "comparisonRef" : "answerRef"]: answerRef,
                ...(claimId ? { claimId } : {}),
                ...(sourceId ? { sourceId } : {}),
              },
            }}
            variant="secondary"
            size="sm"
          >
            Report a claim
          </ButtonLink>
        </div>
      }
    >
      <p aria-live="polite" className="sr-only">{announcement}</p>

      {pkgState === "opening" ? (
        <p role="status" className="mb-3 text-[13px] text-haze">{INSPECTOR_STATE_COPY.OPENING}</p>
      ) : null}

      {blocking ? (
        <div className="rounded-xl border border-warn/30 bg-warn/[0.06] p-4">
          <p className="flex items-start gap-2 text-[14px] leading-6 text-platinum">
            <AlertTriangle aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-warn" />
            {INSPECTOR_STATE_COPY[pkgState as InspectorStateKey]}
          </p>
          <div className="mt-3 flex gap-2">
            {pkgState === "ERROR" || pkgState === "RATE_LIMITED" || pkgState === "NOT_FOUND" ? (
              <Button size="sm" variant="secondary" onClick={() => void loadPackage()} icon={<RefreshCw aria-hidden="true" className="h-3.5 w-3.5" />}>
                Retry
              </Button>
            ) : null}
            <Button size="sm" variant="ghost" onClick={onClose}>Return to the answer</Button>
          </div>
        </div>
      ) : (
        <>
          {/* EI-02 claim focus strip */}
          {selectedClaim ? (
            <section aria-label="Claim being inspected" className="mb-4 rounded-xl border border-iris/35 bg-iris/[0.06] p-3.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] text-haze">{selectedClaim.id}</span>
                {ordinals(selectedClaim).map((n) => (
                  <span key={n} className="rounded border border-iris/40 bg-iris/[0.12] px-1.5 font-mono text-[11px] text-iris-soft">[{n}]</span>
                ))}
                <Pill tone={CLAIM_MAPPING_COPY[mappingOf(selectedClaim)].tone}>
                  {CLAIM_MAPPING_COPY[mappingOf(selectedClaim)].label}
                </Pill>
              </div>
              <p className="mt-2 text-[14px] leading-6 text-platinum">
                “{claimView?.span ?? selectedClaim.span ?? selectedClaim.text}”
              </p>
              <p className="mt-1 text-[12px] leading-5 text-haze">
                {CLAIM_MAPPING_COPY[mappingOf(selectedClaim)].copy(ordinals(selectedClaim)[0])}
              </p>
            </section>
          ) : null}

          <div className="mb-3 flex flex-wrap items-center gap-2">
            <StatusBadge status={answer.status} />
            {mode === "comparison" ? <Pill tone="neutral">Comparison snapshot</Pill> : null}
            {pkg ? <Pill tone="neutral">Rights checked {formatDateTime(pkg.rightsCheckedAt, timeZone, locale)}</Pill> : null}
          </div>

          <Tabs items={tabs} active={tab} onChange={setTab} idBase="evidence" />

          {tab === "overview" ? (
            <TabPanel idBase="evidence" active="overview" className="pt-4">
              <div className="rounded-xl border border-as-line/80 bg-midnight-soft/40 p-4">
                <p className="text-[14px] font-semibold text-platinum">{STATUS_META[answer.status].label}</p>
                <p className="mt-1 text-[13px] leading-6 text-haze">{STATUS_META[answer.status].description}</p>
              </div>

              {!sources.length ? (
                <p className="mt-4 rounded-xl border border-dashed border-as-line p-4 text-[13px] text-haze">
                  {INSPECTOR_STATE_COPY.EMPTY}
                </p>
              ) : (
                <ul className="mt-4 space-y-1.5" aria-label="Sources in this answer">
                  {sources.map((source, index) => (
                    <li key={source.id}>
                      <button
                        type="button"
                        onClick={() => { setSourceId(source.id); setTab("source"); }}
                        className="flex min-h-11 w-full items-start gap-2 rounded-lg border border-as-line/70 bg-as-panel/50 p-2.5 text-left hover:border-iris/40"
                      >
                        <span className="font-mono text-[12px] text-haze">[{index + 1}]</span>
                        <span className="min-w-0">
                          <span className="block text-[13px] font-medium text-platinum">{source.shortTitle}</span>
                          <span className="block text-[12px] text-haze">{source.publisher} · {TIER_COPY[source.tier]}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <h3 className="mt-5 flex items-center gap-2 text-[14px] font-semibold text-platinum">
                <Clock3 aria-hidden="true" className="h-4 w-4 text-iris-soft" />
                Time context
              </h3>
              <div className="mt-2">
                <KeyValue
                  columns={2}
                  items={[
                    { label: TIME_LABELS.observedAt, value: display(answer.timeContext.observedAt ?? answer.timeContext.asOf, timeZone, locale) },
                    { label: TIME_LABELS.publishedAt, value: display(answer.timeContext.publishedAt, timeZone, locale) },
                    { label: TIME_LABELS.ingestedAt, value: display(answer.timeContext.ingestedAt, timeZone, locale, true) },
                    { label: TIME_LABELS.retrievedAt, value: display(answer.timeContext.retrievedAt, timeZone, locale, true) },
                    { label: TIME_LABELS.generatedAt, value: display(answer.timeContext.generatedAt, timeZone, locale, true) },
                    { label: "Time zone", value: timeZone },
                  ]}
                />
              </div>

              {conflicts.length ? (
                <section aria-labelledby="conflict-rail" className="mt-5">
                  <h3 id="conflict-rail" className="text-[14px] font-semibold text-platinum">{INSPECTOR_STATE_COPY.CONFLICT}</h3>
                  {conflicts.map((conflict) => (
                    <div key={conflict.id} className="mt-2 rounded-xl border border-warn/30 bg-warn/[0.05] p-3">
                      <p className="text-[13px] font-semibold text-platinum">{conflict.topic}</p>
                      <ul className="mt-1.5 space-y-1">
                        {conflict.entries.map((entry) => {
                          const source = sources.find((item) => item.id === entry.sourceId);
                          return (
                            <li key={entry.sourceId} className="text-[12px] leading-5 text-haze">
                              <span className="text-platinum/90">{source?.shortTitle ?? entry.sourceId}</span>: {entry.value} {entry.unit} · {entry.period} · {entry.status}. {entry.reason}
                            </li>
                          );
                        })}
                      </ul>
                      <p className="mt-1.5 text-[12px] text-haze">{conflict.nextAction}</p>
                    </div>
                  ))}
                </section>
              ) : null}

              <h3 className="mt-5 text-[14px] font-semibold text-platinum">Coverage and limits</h3>
              <ul className="mt-2 space-y-1">
                {[...answer.coverage.gaps, ...answer.limitations].map((item) => (
                  <li key={item} className="text-[13px] leading-6 text-haze">· {item}</li>
                ))}
              </ul>
            </TabPanel>
          ) : null}

          {tab === "source" ? (
            <TabPanel idBase="evidence" active="source" className="pt-4">
              <ul className="flex flex-wrap gap-1.5" aria-label="Choose a source">
                {sources.map((source, index) => (
                  <li key={source.id}>
                    <button
                      type="button"
                      aria-pressed={source.id === sourceId}
                      onClick={() => setSourceId(source.id)}
                      className={clsx(
                        "inline-flex min-h-11 items-center gap-1.5 rounded-lg border px-2.5 text-[12px]",
                        source.id === sourceId ? "border-iris/60 bg-iris/[0.08] text-platinum" : "border-as-line text-haze hover:text-platinum"
                      )}
                    >
                      [{index + 1}] {source.shortTitle}
                    </button>
                  </li>
                ))}
              </ul>

              {!sourceId ? (
                <p className="mt-4 text-[13px] text-haze">Choose a source to see its record, rights and locator.</p>
              ) : (
                (() => {
                  const record = sources.find((item) => item.id === sourceId);
                  if (!record) return <p className="mt-4 text-[13px] text-haze">{INSPECTOR_STATE_COPY.NOT_FOUND}</p>;
                  if (sourceState.state === "loading") {
                    return <p role="status" className="mt-4 text-[13px] text-haze">Checking current access for this source…</p>;
                  }
                  if (sourceState.state === "error") {
                    return <p className="mt-4 text-[13px] text-warn">{INSPECTOR_STATE_COPY[sourceState.key]}</p>;
                  }
                  const detail = sourceState.state === "ready" ? sourceState.detail : null;
                  const attribution = (detail?.taxonomy.attributionState ?? attributionOf(record)) as AttributionState;
                  const contentClass = detail?.taxonomy.contentClass ?? record.contentClass ?? null;
                  const excerpt = detail ? detail.excerpt : record.rights.display && record.rights.quote ? record.excerpt : null;
                  const locatorValue = detail ? detail.locator.value : record.locatorResolved === false ? null : record.locator;
                  const note = detail ? resolutionCopy(detail.resolution) : null;
                  const usedBy = answer.claims.filter((claim) => claim.sourceIds.includes(record.id));
                  return (
                    <div className="mt-4 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <TierBadge tier={record.tier} />
                        <RightsBadge state={detail?.rightsState ?? record.rights.state} />
                        <Pill tone={ATTRIBUTION_COPY[attribution].tone}>{ATTRIBUTION_COPY[attribution].label}</Pill>
                        {record.freshness !== "CURRENT" ? <Pill tone="warn">{record.freshness.toLowerCase()}</Pill> : null}
                      </div>
                      <h3 className="mt-2 text-[16px] font-semibold leading-6 text-platinum">{record.title}</h3>
                      <p className="mt-0.5 text-[13px] text-haze">{record.publisher} · {record.publisherType}</p>
                      <p className="mt-1 text-[12px] leading-5 text-haze">
                        {TIER_COPY[record.tier]}
                        {contentClass ? ` · ${CONTENT_CLASS_COPY[contentClass]}` : ""}. {ATTRIBUTION_COPY[attribution].detail}
                      </p>

                      {note ? (
                        <p className="mt-3 rounded-lg border border-warn/30 bg-warn/[0.06] px-3 py-2 text-[13px] text-platinum/90">{note}</p>
                      ) : null}

                      <dl className="mt-4 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
                        {[
                          ["Location in source", locatorValue ?? LOCATOR_UNAVAILABLE],
                          ["Record version", detail?.recordRevision ?? record.version ?? NOT_AVAILABLE],
                          ["Canonical document", detail?.canonicalDocId ?? record.canonicalDocId ?? NOT_AVAILABLE],
                          ["Jurisdiction", record.jurisdiction || NOT_AVAILABLE],
                          [TIME_LABELS.publishedAt, display(detail?.timestamps.publishedAt ?? record.documentDate, timeZone, locale)],
                          [TIME_LABELS.observedAt, display(detail?.timestamps.observedAt ?? record.observedAt, timeZone, locale)],
                          [TIME_LABELS.revisedAt, display(detail?.timestamps.revisedAt ?? record.revisedAt, timeZone, locale)],
                          [TIME_LABELS.retrievedAt, display(detail?.timestamps.retrievedAt ?? record.retrievedAt, timeZone, locale, true)],
                        ].map(([label, value]) => (
                          <div key={label} className="min-w-0">
                            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-haze/80">{label}</dt>
                            <dd className="mt-0.5 break-words text-[13px] leading-5 text-platinum/90">{value}</dd>
                          </div>
                        ))}
                      </dl>

                      {detail?.revisionOf ? (
                        <p className="mt-3 text-[12px] text-haze">Revises: {detail.revisionOf.title}</p>
                      ) : null}

                      <div className="mt-4">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-haze/80">What current access permits</p>
                        <ul className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                          {CAPABILITIES.map((capability) => {
                            const allowed = detail
                              ? detail.displayPolicy[capability.key]
                              : capability.key === "metadata" || (capability.key === "excerpt" && Boolean(excerpt)) || (capability.key === "copyCitation");
                            return (
                              <li key={capability.key} className={clsx("flex items-center gap-1.5 rounded-lg border px-2 py-1.5 text-[12px]", allowed ? "border-ok/25 bg-ok/[0.05] text-ok" : "border-as-line text-haze")}>
                                {allowed ? <Check aria-hidden="true" className="h-3 w-3" /> : <Lock aria-hidden="true" className="h-3 w-3" />}
                                {capability.label}: {allowed ? "Yes" : "No"}
                              </li>
                            );
                          })}
                        </ul>
                        <p className="mt-2 text-[12px] leading-5 text-haze">
                          {detail?.rightsReason.message ?? record.rights.rationale}
                        </p>
                      </div>

                      {excerpt ? (
                        <div className="mt-4 rounded-xl border border-as-line/80 bg-midnight-soft/60 p-3.5">
                          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-haze/80">Permitted excerpt</p>
                          <blockquote className="mt-2 border-l-2 border-iris/50 pl-3 text-[13px] leading-6 text-platinum/85">{excerpt}</blockquote>
                        </div>
                      ) : (
                        <p className="mt-4 rounded-xl border border-as-line bg-midnight-soft/40 p-3.5 text-[13px] leading-6 text-haze">
                          {SOURCE_ACCESS_RESTRICTED_COPY}
                        </p>
                      )}

                      <div className="mt-4 flex flex-wrap gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => void copyCitation(record.id)}
                          icon={copyState === "copied" ? <Check aria-hidden="true" className="h-3.5 w-3.5" /> : <Clipboard aria-hidden="true" className="h-3.5 w-3.5" />}
                        >
                          {copyState === "copied" ? "Citation copied" : copyState === "denied" ? "Copy not permitted" : "Copy citation"}
                        </Button>
                      </div>

                      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-haze/80">
                        Used by {usedBy.length} claim{usedBy.length === 1 ? "" : "s"}
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {usedBy.map((claim) => (
                          <li key={claim.id}>
                            <button
                              type="button"
                              onClick={() => { setClaimId(claim.id); setTab("claims"); }}
                              className="flex min-h-11 w-full items-start gap-2 rounded-lg border border-as-line/70 bg-as-panel/60 p-2.5 text-left hover:border-iris/50"
                            >
                              <ArrowUpRight aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-iris-soft" />
                              <span className="text-[13px] leading-5 text-platinum/85">{claim.text}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })()
              )}
            </TabPanel>
          ) : null}

          {tab === "claims" ? (
            <TabPanel idBase="evidence" active="claims" className="pt-4">
              <ul className="space-y-2">
                {answer.claims.map((claim) => {
                  const mapping = mappingOf(claim);
                  const meta = CLAIM_MAPPING_COPY[mapping];
                  const view = pkg?.claims.find((item) => item.claimId === claim.id);
                  const edges = view?.edges ?? claim.sourceIds.map((id) => ({ sourceRef: id, ordinal: (answer.sources.indexOf(id) + 1), relationship: mapping, qualification: null }));
                  return (
                    <li key={claim.id}>
                      <button
                        type="button"
                        onClick={() => setClaimId(claim.id)}
                        aria-pressed={claim.id === claimId}
                        className={clsx(
                          "w-full rounded-xl border p-3.5 text-left transition-colors",
                          claim.id === claimId ? "border-iris/60 bg-iris/[0.07]" : "border-as-line/70 bg-as-panel/50 hover:border-iris/40"
                        )}
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[11px] text-haze">{claim.id}</span>
                          <Pill tone={meta.tone}>{meta.label}</Pill>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-haze/80">{claim.materiality.toLowerCase()}</span>
                        </div>
                        <p className="mt-2 text-[13px] leading-6 text-platinum/90">{claim.text}</p>
                        <p className="mt-1 text-[12px] leading-5 text-haze">{meta.copy(ordinals(claim)[0])}</p>
                      </button>
                      {claim.id === claimId ? (
                        <ul className="mt-1.5 space-y-1 pl-3">
                          {edges.map((edge) => {
                            const source = sources.find((item) => item.id === edge.sourceRef);
                            return (
                              <li key={edge.sourceRef} className="text-[12px] leading-5 text-haze">
                                <button
                                  type="button"
                                  onClick={() => { setSourceId(edge.sourceRef); setTab("source"); }}
                                  className="inline-flex min-h-11 items-center gap-1.5 text-left text-platinum/90 hover:text-white"
                                >
                                  <FileText aria-hidden="true" className="h-3.5 w-3.5 text-haze" />
                                  [{edge.ordinal}] {source?.shortTitle ?? edge.sourceRef}
                                </button>{" "}
                                · {CLAIM_MAPPING_COPY[edge.relationship].label}
                                {edge.qualification ? ` · ${edge.qualification}` : ""}
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </TabPanel>
          ) : null}

          {tab === "method" ? (
            <TabPanel idBase="evidence" active="method" className="pt-4">
              {(() => {
                const methods = selectedClaim?.methodId
                  ? answer.methods.filter((method) => method.id === selectedClaim.methodId)
                  : selectedClaim
                    ? []
                    : answer.methods;
                if (!methods.length) {
                  return (
                    <p className="rounded-xl border border-dashed border-as-line p-5 text-center text-[13px] text-haze">
                      No Talvrin calculation was used for this claim.
                    </p>
                  );
                }
                return (
                  <div className="space-y-3">
                    {methods.map((method) => (
                      <div key={method.id} className="rounded-xl border border-as-line/80 bg-as-panel/50 p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-[14px] font-semibold text-platinum">{method.name}</h3>
                          <Pill tone="neutral">{method.id} · {method.version}</Pill>
                        </div>
                        <p className="mt-1.5 text-[13px] leading-6 text-haze">{method.summary}</p>
                        <dl className="mt-2 grid gap-2 text-[12px] leading-5 sm:grid-cols-2">
                          <div><dt className="text-haze/80">Units</dt><dd className="text-platinum/85">{method.units ?? NOT_AVAILABLE}</dd></div>
                          <div><dt className="text-haze/80">Rounding</dt><dd className="text-platinum/85">{method.rounding ?? NOT_AVAILABLE}</dd></div>
                          <div className="sm:col-span-2"><dt className="text-haze/80">Inputs</dt><dd className="text-platinum/85">{method.inputs.join(" · ")}</dd></div>
                          {method.inputFactRefs?.length ? (
                            <div className="sm:col-span-2"><dt className="text-haze/80">Input records</dt><dd className="font-mono text-platinum/85">{method.inputFactRefs.join(", ")}</dd></div>
                          ) : null}
                          {method.assumptions?.length ? (
                            <div className="sm:col-span-2"><dt className="text-haze/80">Assumptions</dt><dd className="text-platinum/85">{method.assumptions.join(" · ")}</dd></div>
                          ) : null}
                          <div className="sm:col-span-2"><dt className="text-haze/80">Limitations</dt><dd className="text-platinum/85">{method.limitations.join(" · ")}</dd></div>
                        </dl>
                      </div>
                    ))}
                  </div>
                );
              })()}
              <p className="mt-4 flex items-start gap-1.5 text-[12px] leading-5 text-haze/85">
                <ShieldCheck aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                The language model may explain a method but never computes or rounds a published number.{" "}
                <Link href="/assistant/help?article=help-methods" className="text-iris-soft underline decoration-iris/30 underline-offset-4">
                  How methods are versioned
                </Link>
              </p>
            </TabPanel>
          ) : null}
        </>
      )}
    </Dialog>
  );
}
