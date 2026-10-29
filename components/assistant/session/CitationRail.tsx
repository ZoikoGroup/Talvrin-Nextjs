"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, FileSearch } from "lucide-react";
import type {
  FeatureFlagState,
  PublishedAnswer,
  RightsState,
  SourceRecord,
} from "@/lib/assistant/types";
import { RightsBadge, TierBadge } from "@/components/assistant/ui/Badge";

/**
 * Compact numbered source list beside the answer (WF-02 C08). Detail lives
 * in the evidence inspector; this rail only orients the reader.
 */
export default function CitationRail({
  answer,
  sources,
  answerRef,
  onInspect,
  exportsState = "OFF",
}: {
  answer: PublishedAnswer;
  sources: SourceRecord[];
  answerRef: string;
  onInspect: (claimId?: string, sourceId?: string) => void;
  /** WF-02 C11: export is reserved; shown only when its release flag allows. */
  exportsState?: FeatureFlagState;
}) {
  const [expanded, setExpanded] = useState(false);
  // The most restrictive rights state actually present, never a blanket
  // "display permitted" (WF-02 marker 08, WF-03 §6.2).
  const order: RightsState[] = ["DENIED", "METADATA_ONLY", "LINK_ONLY", "EXCERPT_ONLY", "FULL"];
  const rightsState: RightsState =
    order.find((state) => sources.some((source) => source.rights.state === state)) ?? "METADATA_ONLY";

  return (
    <section
      aria-labelledby="sources-heading"
      className="rounded-2xl border border-as-line bg-as-panel/60 p-4 lg:sticky lg:top-24"
    >
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls="numbered-sources"
        onClick={() => setExpanded((value) => !value)}
        className="flex min-h-11 w-full items-center justify-between gap-2 text-left lg:pointer-events-none"
      >
        <h2 id="sources-heading" className="text-[15px] font-semibold text-platinum">
          Sources ({sources.length})
        </h2>
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 text-haze transition-transform lg:hidden ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      <div id="numbered-sources" className={expanded ? "mt-2" : "mt-2 hidden lg:block"}>
        {sources.length ? (
          <ol className="space-y-1">
            {sources.map((source, index) => (
              <li key={source.id}>
                <button
                  type="button"
                  onClick={() => onInspect(undefined, source.id)}
                  className="flex min-h-11 w-full items-start gap-2.5 rounded-lg px-1.5 py-2 text-left transition-colors hover:bg-white/[0.04]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-as-line bg-midnight/60 font-mono text-[11px] text-haze">
                    {index + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[14px] font-medium leading-5 text-platinum/90">
                      {source.shortTitle}
                    </span>
                    <span className="mt-0.5 flex flex-wrap items-center gap-1.5 text-[12px] text-haze">
                      {source.publisher}
                      <TierBadge tier={source.tier} />
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-[13px] leading-6 text-haze">
            No source supports a factual claim in this answer.
          </p>
        )}

        {sources.length ? (
          <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-as-line/60 pt-3 text-[12px] text-haze">
            <RightsBadge state={rightsState} />
            <span>{answer.claims.length} claims</span>
          </div>
        ) : null}

        <div className="mt-3 flex flex-col gap-1.5">
          <button
            type="button"
            onClick={() => onInspect()}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-as-line bg-midnight-soft/50 px-3 text-[13px] font-semibold text-platinum transition-colors hover:border-iris/50"
          >
            <FileSearch aria-hidden="true" className="h-3.5 w-3.5" />
            Open evidence inspector
          </button>
          {exportsState !== "OFF" ? (
            <Link
              href={`/assistant/export?ref=${encodeURIComponent(answerRef)}`}
              className="inline-flex min-h-11 items-center justify-center gap-1.5 text-[13px] font-medium text-iris-soft hover:text-white"
            >
              Export citation package{exportsState === "PREVIEW" ? " (preview)" : ""}
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
