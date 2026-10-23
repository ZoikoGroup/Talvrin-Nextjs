import { ReactNode } from "react";
import clsx from "clsx";

type Tone = "amber" | "violet";

const eyebrowTones: Record<Tone, string> = {
  amber: "text-accent-amber",
  violet: "text-accent-violet",
};

export const IMG = "/images/global/global-coverage";

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
        "mt-3 max-w-[780px] text-3xl font-bold tracking-tight sm:text-4xl sm:leading-[1.15] lg:text-[42px] lg:leading-[1.16]",
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
        "mt-5 max-w-[800px] text-base leading-7",
        inverted ? "text-white/70" : "text-slate-600",
        className
      )}
    >
      {children}
    </p>
  );
}

/** Label + description rows used by the status and safeguard tables. */
export function LabelledRows({
  rows,
  labelWidth = "lg:grid-cols-[210px_minmax(0,1fr)]",
}: {
  rows: { label: string; body: string; badge: string }[];
  labelWidth?: string;
}) {
  return (
    <dl>
      {rows.map((r) => (
        <div
          key={r.body}
          className={clsx("grid grid-cols-1 gap-3 border-b border-ink/10 py-5 lg:gap-4", labelWidth)}
        >
          <dt>
            <span
              className={clsx(
                "inline-block rounded-md border px-4 py-1.5 text-center text-xs font-bold lg:block",
                r.badge
              )}
            >
              {r.label}
            </span>
          </dt>
          <dd className="text-base text-slate-700">{r.body}</dd>
        </div>
      ))}
    </dl>
  );
}
