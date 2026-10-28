"use client";

import clsx from "clsx";
import { AlertTriangle, Clock3, Lock } from "lucide-react";
import type {
  Claim,
  MetricValue,
  Segment,
  TableRow,
} from "@/lib/assistant/types";

export function CitationChip({
  ordinals,
  claim,
  onInspect,
  compact = false,
}: {
  ordinals: number[];
  claim: Claim;
  onInspect: (claimId: string, sourceId?: string) => void;
  compact?: boolean;
}) {
  if (!ordinals.length) return null;
  return (
    <button
      type="button"
      onClick={() => onInspect(claim.id, claim.sourceIds[0])}
      aria-label={`Open evidence inspector for citation ${ordinals.join(", ")}: ${claim.text}`}
      className={clsx(
        "ml-0.5 inline-flex items-center rounded border border-iris/40 bg-iris/[0.12] align-super font-mono text-iris-soft transition-colors hover:border-iris hover:bg-iris/20 hover:text-white",
        compact ? "px-1 py-0 text-[11px]" : "px-1.5 py-0.5 text-[12px]"
      )}
    >
      {ordinals.join(",")}
    </button>
  );
}

export function CitationText({
  segments,
  claims,
  sourceOrder,
  onInspect,
  className,
}: {
  segments: Segment[];
  claims: Claim[];
  sourceOrder: string[];
  onInspect: (claimId: string, sourceId?: string) => void;
  className?: string;
}) {
  return (
    <span className={className}>
      {segments.map((segment, index) => {
        if (segment.kind === "text") {
          return <span key={index}>{segment.text}</span>;
        }
        if (segment.kind === "strong") {
          return (
            <strong key={index} className="font-semibold text-platinum">
              {segment.text}
            </strong>
          );
        }
        const claim = claims.find((item) => item.id === segment.claimId);
        if (!claim) {
          return (
            <span key={index} className="text-danger">
              [?]
            </span>
          );
        }
        const ordinals = claim.sourceIds
          .map((id) => sourceOrder.indexOf(id) + 1)
          .filter((value) => value > 0);
        return (
          <CitationChip
            key={index}
            claim={claim}
            ordinals={ordinals}
            onInspect={onInspect}
          />
        );
      })}
    </span>
  );
}

const metricStatus = {
  SHOWN: null,
  WITHHELD: {
    icon: Lock,
    label: "Withheld",
    className: "text-danger",
  },
  CONTESTED: {
    icon: AlertTriangle,
    label: "Contested",
    className: "text-danger",
  },
  STALE: {
    icon: Clock3,
    label: "Stale",
    className: "text-warn",
  },
  NOT_APPLICABLE: {
    icon: null,
    label: "Not applicable",
    className: "text-haze",
  },
} as const;

export function MetricGrid({
  metrics,
  claims,
  sourceOrder,
  onInspect,
}: {
  metrics: MetricValue[];
  claims: Claim[];
  sourceOrder: string[];
  onInspect: (claimId: string, sourceId?: string) => void;
}) {
  return (
    <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-as-line/80 bg-as-line/60 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => {
        const status = metricStatus[metric.status];
        const Icon = status?.icon ?? null;
        const claim = metric.claimId
          ? claims.find((item) => item.id === metric.claimId)
          : undefined;
        const ordinals = claim
          ? claim.sourceIds
              .map((id) => sourceOrder.indexOf(id) + 1)
              .filter((value) => value > 0)
          : [];
        return (
          <div key={metric.id} className="bg-as-panel/95 px-4 py-3.5">
            <dt className="flex items-center justify-between gap-2 text-[11px] font-medium uppercase tracking-[0.1em] text-haze">
              <span>{metric.label}</span>
              {status ? (
                <span
                  className={clsx(
                    "inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider",
                    status.className
                  )}
                >
                  {Icon ? <Icon aria-hidden="true" className="h-3 w-3" /> : null}
                  {status.label}
                </span>
              ) : null}
            </dt>
            <dd className="mt-2">
              {metric.status === "SHOWN" ? (
                <span className="flex flex-wrap items-baseline gap-1">
                  <span className="text-2xl font-semibold tracking-tight text-platinum">
                    {metric.value}
                  </span>
                  {metric.unit ? (
                    <span className="text-xs text-haze">{metric.unit}</span>
                  ) : null}
                  {claim ? (
                    <CitationChip
                      claim={claim}
                      ordinals={ordinals}
                      onInspect={onInspect}
                      compact
                    />
                  ) : null}
                </span>
              ) : (
                <span
                  className={clsx(
                    "inline-flex items-center gap-1.5 text-sm",
                    metric.status === "WITHHELD" || metric.status === "CONTESTED"
                      ? "text-danger"
                      : metric.status === "STALE"
                        ? "text-warn"
                        : "text-haze"
                  )}
                >
                  {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : null}
                  {metric.status === "WITHHELD"
                    ? "Withheld"
                    : metric.status === "CONTESTED"
                      ? "Contested"
                      : metric.status === "STALE"
                        ? "Stale"
                        : "Not applicable"}
                </span>
              )}
              {metric.asOf ? (
                <span className="mt-1 block font-mono text-[12px] text-haze/80">
                  As of {metric.asOf}
                </span>
              ) : null}
              {metric.reasonCode ? (
                <span className="mt-1 block text-[12px] uppercase tracking-wider text-haze/70">
                  {metric.reasonCode}
                </span>
              ) : null}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

export function AnswerTable({
  caption,
  columns,
  rows,
  note,
  claims,
  sourceOrder,
  onInspect,
}: {
  caption: string;
  columns: string[];
  rows: TableRow[];
  note?: string;
  claims: Claim[];
  sourceOrder: string[];
  onInspect: (claimId: string, sourceId?: string) => void;
}) {
  return (
    <figure className="min-w-0">
      <div className="as-scroll overflow-x-auto rounded-xl border border-as-line/80">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-as-line bg-midnight-soft/70">
              {columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="whitespace-nowrap px-3.5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-haze"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-as-line/60 last:border-0"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-3.5 py-3 text-left text-[13px] font-medium text-platinum"
                >
                  {row.header}
                </th>
                {row.cells.map((cell, index) => {
                  const claim = cell.claimId
                    ? claims.find((item) => item.id === cell.claimId)
                    : undefined;
                  return (
                    <td
                      key={`${row.id}-${index}`}
                      className={clsx(
                        "px-3.5 py-3 align-top text-[13px]",
                        cell.status === "SHOWN" && "text-platinum/90",
                        cell.status === "WITHHELD" && "text-danger",
                        cell.status === "CONTESTED" && "text-danger",
                        cell.status === "NOT_APPLICABLE" && "text-haze"
                      )}
                    >
                      {cell.status === "WITHHELD" ? (
                        <span className="inline-flex flex-col gap-1">
                          <span className="inline-flex items-center gap-1.5 font-medium">
                            <Lock aria-hidden="true" className="h-3.5 w-3.5" />
                            {cell.text ?? "Withheld"}
                          </span>
                          {cell.note ? (
                            <span className="text-[11px] leading-5 text-haze">
                              {cell.note}
                            </span>
                          ) : null}
                        </span>
                      ) : (
                        <span className="inline-flex flex-wrap items-center gap-1">
                          {cell.text ?? "—"}
                          {claim ? (
                            <CitationChip
                              claim={claim}
                              ordinals={claim.sourceIds
                                .map((id) => sourceOrder.indexOf(id) + 1)
                                .filter((value) => value > 0)}
                              onInspect={onInspect}
                              compact
                            />
                          ) : null}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-2 flex flex-col gap-1">
        <span className="text-[11px] text-haze">{caption}</span>
        {note ? (
          <span className="text-[11px] leading-5 text-haze/75">{note}</span>
        ) : null}
      </figcaption>
    </figure>
  );
}
