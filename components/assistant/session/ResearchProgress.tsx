"use client";

import clsx from "clsx";
import {
  Check,
  Circle,
  Loader2,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import type { ResearchJobView } from "@/lib/assistant/types";
import { RESEARCH_STAGES } from "@/lib/assistant/taxonomy";
import { Pill } from "@/components/assistant/ui/Badge";
import { Button } from "@/components/assistant/ui/Button";

export default function ResearchProgress({
  job,
  cancelling,
  onCancel,
}: {
  job: ResearchJobView;
  cancelling: boolean;
  onCancel: () => void;
}) {
  const current = job.stageIndex;

  return (
    <section
      aria-labelledby="progress-heading"
      aria-busy="true"
      className="rounded-2xl border border-as-line bg-as-panel/70 p-4 sm:p-6"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-iris-soft">
            Research conversation
          </p>
          <h2
            id="progress-heading"
            className="mt-1 text-lg font-semibold tracking-tight text-platinum"
          >
            {cancelling ? "Stopping research…" : "Checking eligible sources and evidence…"}
          </h2>
          <p
            aria-live="polite"
            className="mt-1 text-[13px] leading-6 text-haze"
          >
            Step {job.stageIndex + 1} of {job.stageCount}:{" "}
            <span className="text-platinum/85">{job.stage.label}</span>
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Pill tone="neutral">
            <ShieldCheck aria-hidden="true" className="h-3 w-3" />
            Policy on
          </Pill>
        </div>
      </div>


      <p className="mt-3 rounded-lg border border-as-line/60 bg-midnight-soft/40 px-3 py-2 text-[13px] leading-6 text-haze">
        {job.stage.detail}
      </p>

      <ol className="mt-4 space-y-0.5" aria-label="Research stages">
        {RESEARCH_STAGES.map((stage, index) => {
          const complete = index < current;
          const active = index === current;
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
              <span className="min-w-0 flex-1">
                <span
                  className={clsx(
                    "block text-[13px] font-medium leading-5",
                    active
                      ? "text-platinum"
                      : complete
                        ? "text-platinum/70"
                        : "text-haze/60"
                  )}
                >
                  {stage.label}
                </span>
                {active ? (
                  <span className="mt-0.5 block text-[12px] leading-5 text-haze">
                    {stage.detail}
                  </span>
                ) : null}
              </span>
              <span
                className={clsx(
                  "mt-1 shrink-0 font-mono text-[11px] uppercase tracking-wider",
                  complete
                    ? "text-ok"
                    : active
                      ? "text-iris-soft"
                      : "text-haze/40"
                )}
              >
                {complete ? "Done" : active ? "Active" : "Waiting"}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="mt-4 flex flex-col gap-3 border-t border-as-line/60 pt-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] leading-5 text-haze/80">
          Progress is reported by the server. No claim is published early, and a
          partial answer is never used to preview the result.
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={onCancel}
          loading={cancelling}
          icon={<XCircle aria-hidden="true" className="h-3.5 w-3.5" />}
          className="shrink-0"
        >
          {cancelling ? "Stopping research…" : "Cancel research"}
        </Button>
      </div>
    </section>
  );
}
