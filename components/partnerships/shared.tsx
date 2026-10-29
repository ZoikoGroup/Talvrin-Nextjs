import { ReactNode } from "react";
import clsx from "clsx";

export const IMG = "/images/connect/partnerships";

type Tone = "amber" | "violet";

const eyebrowTones: Record<Tone, string> = {
  amber: "text-[#B98132]",
  violet: "text-[#6C5CE7]",
};

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
    <p
      className={clsx(
        "text-[13px] font-bold uppercase tracking-[0.08em] font-sans",
        eyebrowTones[tone],
        className
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  inverted = false,
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
        "mt-3 text-3xl font-bold leading-[1.2] tracking-tight font-sans sm:text-[36px] sm:leading-[43.2px]",
        inverted ? "text-[#F6F5FB]" : "text-[#171335]",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionLede({
  inverted = false,
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
        "mt-4 max-w-[720px] text-base leading-[25.6px] font-normal font-sans",
        inverted ? "text-[rgba(246,245,251,0.65)]" : "text-[#5D5A72]",
        className
      )}
    >
      {children}
    </p>
  );
}

type PillTone = "amber" | "green";

const pillStyles: Record<PillTone, string> = {
  amber: "bg-[rgba(185,129,50,0.14)] text-[#8A5A00]",
  green: "bg-[rgba(46,125,91,0.12)] text-[#2E7D5B]",
};

export function StatusPill({
  tone = "amber",
  children,
  className,
}: {
  tone?: PillTone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex w-fit shrink-0 items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.04em]",
        pillStyles[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
