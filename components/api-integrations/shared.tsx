import { ReactNode } from "react";
import clsx from "clsx";

type Tone = "amber" | "violet";

const eyebrowTones: Record<Tone, string> = {
  amber: "text-accent-amber",
  violet: "text-accent-violet",
};

export const IMG = "/images/resources/api-integrations";

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
        "mt-3 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-[1.2]",
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
        "mt-5 max-w-[760px] text-base leading-6",
        inverted ? "text-white/70" : "text-slate-600",
        className
      )}
    >
      {children}
    </p>
  );
}

export function StatusPill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex shrink-0 items-center rounded-full bg-accent-amber/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-yellow-800",
        className
      )}
    >
      {children}
    </span>
  );
}
