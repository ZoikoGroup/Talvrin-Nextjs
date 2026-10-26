import { ReactNode } from "react";
import clsx from "clsx";

type Tone = "amber" | "violet";

const eyebrowTones: Record<Tone, string> = {
  amber: "text-accent-amber",
  violet: "text-accent-violet",
};

export const IMG = "/images/global-institutions";

export function SectionEyebrow({
  tone = "violet",
  inverted,
  children,
  className,
}: {
  tone?: Tone;
  inverted?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "text-[13px] font-bold uppercase tracking-[1.04px]",
        inverted ? "text-accent-amber" : eyebrowTones[tone],
        className
      )}
    >
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
        "mt-3 max-w-[780px] text-3xl font-bold leading-[1.2] tracking-tight sm:text-4xl lg:text-[42px] lg:leading-[48.72px]",
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
        "mt-4 max-w-[800px] text-base leading-7 lg:text-[17px] lg:leading-[27.2px]",
        inverted ? "text-surface/72" : "text-muted",
        className
      )}
    >
      {children}
    </p>
  );
}
