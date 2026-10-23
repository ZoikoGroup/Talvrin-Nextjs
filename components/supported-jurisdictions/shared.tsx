import { ReactNode } from "react";
import clsx from "clsx";
import { STATUS_LABEL, STATUS_PILL, type Status } from "./data";

type Tone = "amber" | "violet";

const eyebrowTones: Record<Tone, string> = {
  amber: "text-accent-amber",
  violet: "text-accent-violet",
};

export const IMG = "/images/markets/supported-jurisdictions";

export function SectionEyebrow({
  tone = "violet",
  children,
  className,
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={clsx("text-xs font-bold uppercase tracking-widest", eyebrowTones[tone], className)}>
      {children}
    </p>
  );
}

export function SectionHeading({
  inverted,
  children,
  className,
}: {
  inverted?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={clsx(
        "mt-3 max-w-[780px] text-3xl font-bold tracking-tight sm:text-4xl sm:leading-[1.15]",
        inverted ? "text-white" : "text-ink",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionLede({
  inverted,
  children,
  className,
}: {
  inverted?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "mt-5 max-w-[780px] text-base leading-7",
        inverted ? "text-white/70" : "text-slate-600",
        className
      )}
    >
      {children}
    </p>
  );
}

export function StatusPill({
  status,
  children,
  className,
}: {
  status: Exclude<Status, "not-assessed">;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-bold",
        STATUS_PILL[status],
        className
      )}
    >
      {children ?? STATUS_LABEL[status]}
    </span>
  );
}
