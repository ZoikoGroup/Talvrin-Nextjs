"use client";

import clsx from "clsx";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Info,
  ShieldAlert,
} from "lucide-react";

export function Disclosure({
  title,
  summary,
  children,
  defaultOpen = false,
  className,
}: {
  title: ReactNode;
  summary?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}) {
  return (
    <details
      open={defaultOpen}
      className={clsx(
        "group rounded-xl border border-as-line/70 bg-midnight-soft/40",
        className
      )}
    >
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-platinum [&::-webkit-details-marker]:hidden">
        <span>
          {title}
          {summary ? (
            <span className="mt-0.5 block text-xs font-normal leading-5 text-haze">
              {summary}
            </span>
          ) : null}
        </span>
        <ChevronDown
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-haze transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="border-t border-as-line/60 px-4 py-3 text-sm leading-6 text-haze">
        {children}
      </div>
    </details>
  );
}

const calloutStyles = {
  info: {
    wrap: "border-info/30 bg-info/[0.07]",
    title: "text-info",
    icon: Info,
  },
  warn: {
    wrap: "border-warn/35 bg-warn/[0.07]",
    title: "text-warn",
    icon: AlertTriangle,
  },
  danger: {
    wrap: "border-danger/35 bg-danger/[0.07]",
    title: "text-danger",
    icon: ShieldAlert,
  },
  success: {
    wrap: "border-ok/35 bg-ok/[0.07]",
    title: "text-ok",
    icon: CheckCircle2,
  },
};

export function Callout({
  tone = "info",
  title,
  children,
  action,
  className,
}: {
  tone?: keyof typeof calloutStyles;
  title: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  const style = calloutStyles[tone];
  const Icon = style.icon;
  return (
    <div
      className={clsx(
        "rounded-xl border px-4 py-3.5 sm:px-5",
        style.wrap,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <Icon
          aria-hidden="true"
          className={clsx("mt-0.5 h-4.5 w-4.5 shrink-0", style.title)}
        />
        <div className="min-w-0 flex-1">
          <p className={clsx("text-sm font-semibold", style.title)}>{title}</p>
          <div className="mt-1 text-[13px] leading-6 text-platinum/85">
            {children}
          </div>
          {action ? <div className="mt-3">{action}</div> : null}
        </div>
      </div>
    </div>
  );
}

export function ProgressBar({
  value,
  label,
  tone = "iris",
  className,
}: {
  value: number;
  label: string;
  tone?: "iris" | "ok" | "warn" | "danger";
  className?: string;
}) {
  const colour = {
    iris: "bg-iris",
    ok: "bg-ok",
    warn: "bg-warn",
    danger: "bg-danger",
  }[tone];
  return (
    <div className={className}>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(value)}
        aria-label={label}
        className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]"
      >
        <div
          className={clsx("h-full rounded-full transition-[width] duration-500", colour)}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: {
  icon?: ReactNode;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center rounded-2xl border border-dashed border-as-line bg-as-panel/40 px-6 py-12 text-center",
        className
      )}
    >
      {icon ? <div className="mb-3 text-haze">{icon}</div> : null}
      <h3 className="text-base font-semibold text-platinum">{title}</h3>
      {description ? (
        <div className="mt-2 max-w-md text-sm leading-6 text-haze">
          {description}
        </div>
      ) : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        "as-motion-safe animate-pulse rounded-lg bg-white/[0.06]",
        className
      )}
    />
  );
}

export type StepStatus = "complete" | "current" | "upcoming" | "blocked";

export function Stepper({
  steps,
  label,
}: {
  steps: { id: string; label: string; description?: string; status: StepStatus }[];
  label: string;
}) {
  return (
    <ol aria-label={label} className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li
          key={step.id}
          className={clsx(
            "rounded-xl border px-3.5 py-3",
            step.status === "current" && "border-iris/50 bg-iris/[0.08]",
            step.status === "complete" && "border-ok/30 bg-ok/[0.05]",
            step.status === "blocked" && "border-danger/40 bg-danger/[0.06]",
            step.status === "upcoming" && "border-as-line/70 bg-midnight-soft/30"
          )}
        >
          <div className="flex items-center gap-2">
            {step.status === "complete" ? (
              <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-ok" />
            ) : (
              <span
                aria-hidden="true"
                className={clsx(
                  "flex h-5 w-5 items-center justify-center rounded-full border font-mono text-[12px]",
                  step.status === "current" &&
                    "border-iris bg-iris text-white",
                  step.status === "blocked" &&
                    "border-danger text-danger",
                  step.status === "upcoming" &&
                    "border-as-line text-haze"
                )}
              >
                {index + 1}
              </span>
            )}
            <span
              className={clsx(
                "text-[13px] font-medium",
                step.status === "current" ? "text-platinum" : "text-platinum/80"
              )}
            >
              {step.label}
            </span>
          </div>
          {step.description ? (
            <p className="mt-1 text-[11px] leading-5 text-haze">
              {step.description}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
