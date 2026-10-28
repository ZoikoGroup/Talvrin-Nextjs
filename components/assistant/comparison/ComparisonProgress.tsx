"use client";

import clsx from "clsx";
import { Check, Circle, Loader2, ShieldCheck } from "lucide-react";
import type { ComparisonJobView } from "@/lib/assistant/types";
import { COMPARISON_STAGES } from "@/lib/assistant/taxonomy";
import { Pill } from "@/components/assistant/ui/Badge";

/**
 * PENDING view (WF-04 S17, WF-05 §5.1). Stage text only: there is no
 * percentage, because elapsed time is not evidence of progress.
 */
export default function ComparisonProgress({
  job,
}: {
  job: ComparisonJobView;
}) {
  return (
    <section
      aria-labelledby="comparison-progress-heading"
      aria-busy="true"
      className="rounded-2xl border border-as-line bg-as-panel/70 p-4 sm:p-6"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-iris-soft">
            Point-in-time comparison
          </p>
          <h2
            id="comparison-progress-heading"
            className="mt-1 text-lg font-semibold tracking-tight text-platinum"
          >
            Building your source-linked comparison…
          </h2>
          <p aria-live="polite" className="mt-1 text-[13px] leading-6 text-haze">
            Step {job.stageIndex + 1} of {job.stageCount}:{" "}
            <span className="text-platinum/85">{job.stage.label}</span>
          </p>
        </div>
        <Pill tone="neutral">
          <ShieldCheck aria-hidden="true" className="h-3 w-3" />
          Cell-level checks
        </Pill>
      </div>

      <p className="mt-4 rounded-lg border border-as-line/60 bg-midnight-soft/40 px-3 py-2 text-[13px] leading-6 text-haze">
        {job.stage.detail}
      </p>

      <ol className="mt-4 space-y-0.5" aria-label="Comparison stages">
        {COMPARISON_STAGES.map((stage, index) => {
          const complete = index < job.stageIndex;
          const active = index === job.stageIndex;
          return (
            <li
              key={stage.key}
              aria-current={active ? "step" : undefined}
              className={clsx(
                "flex items-start gap-2.5 rounded-lg px-2 py-1.5",
                active && "bg-iris/[0.07]"
              )}
            >
              <span
                aria-hidden="true"
                className={clsx(
                  "mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border",
                  complete && "border-ok/50 bg-ok/15 text-ok",
                  active && "border-iris bg-iris text-white",
                  !complete && !active && "border-as-line text-haze/50"
                )}
              >
                {complete ? (
                  <Check className="h-3 w-3" />
                ) : active ? (
                  <Loader2 className="as-motion-safe h-3 w-3 animate-spin" />
                ) : (
                  <Circle className="h-2 w-2" />
                )}
              </span>
              <span
                className={clsx(
                  "text-[13px] font-medium leading-5",
                  active
                    ? "text-platinum"
                    : complete
                      ? "text-platinum/70"
                      : "text-haze/70"
                )}
              >
                {stage.label}
                <span className="sr-only">
                  {complete ? " (done)" : active ? " (in progress)" : " (not started)"}
                </span>
              </span>
            </li>
          );
        })}
      </ol>

      <p className="mt-3 border-t border-as-line/60 pt-3 text-[12px] leading-5 text-haze/80">
        No cell is displayed until its source right, observation date and claim
        support have cleared validation. Withholding is a result, not an error.
      </p>
    </section>
  );
}
