import { ReactNode } from "react";
import clsx from "clsx";

export const IMG = "/images/connect/press-enquiries";

type Tone = "amber" | "violet";

const eyebrowTones: Record<Tone, string> = {
  amber: "text-accent-amber",
  violet: "text-accent-violet",
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
    <p className={clsx("text-xs font-bold uppercase tracking-[1.04px]", eyebrowTones[tone], className)}>
      {children}
    </p>
  );
}

export function SectionHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={clsx("mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-ink sm:text-4xl", className)}>
      {children}
    </h2>
  );
}

export function SectionLede({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={clsx("mt-4 max-w-[720px] text-base leading-6 text-muted", className)}>{children}</p>;
}

type PillTone = "amber" | "teal";

const pillTones: Record<PillTone, string> = {
  amber: "bg-accent-amber/10 text-[#8a5a00]",
  teal: "bg-teal-700/10 text-teal-700",
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
        "inline-flex w-fit shrink-0 items-center whitespace-nowrap rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-[0.5px]",
        pillTones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
