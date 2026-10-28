import { ReactNode } from "react";
import clsx from "clsx";

export const IMG = "/images/security-contact";

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
    <p className={clsx("text-[13px] font-bold uppercase tracking-[1.04px]", eyebrowTones[tone], className)}>
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
  return (
    <p className={clsx("mt-4 max-w-[700px] text-base leading-[25.6px] text-muted", className)}>{children}</p>
  );
}

/** The amber "NOT YET AVAILABLE" pill used wherever a destination isn't connected for this build. */
export function UnavailablePill({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex w-fit items-center rounded-full bg-accent-amber/14 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.55px] text-[#8a5a00]",
        className
      )}
    >
      Not yet available
    </span>
  );
}
