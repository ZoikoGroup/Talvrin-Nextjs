import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type Tone = "amber" | "violet";

const eyebrowTones: Record<Tone, string> = {
  amber: "text-accent-amber",
  violet: "text-accent-violet",
};

export function SectionEyebrow({
  tone = "amber",
  children,
  className,
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={clsx("text-xs font-bold uppercase tracking-wide", eyebrowTones[tone], className)}>
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={clsx(
        "mt-3 text-3xl font-bold leading-10 tracking-tight text-ink sm:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionLede({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={clsx("mt-4 max-w-[760px] text-base leading-6 text-muted", className)}>
      {children}
    </p>
  );
}

export type Status = "Available" | "Boundary" | "Not Yet Available";

const statusStyles: Record<Status, string> = {
  Available: "bg-[#2E7D5B]/10 text-[#2E7D5B]",
  Boundary: "bg-ink/10 text-muted",
  "Not Yet Available": "bg-accent-amber/10 text-[#8A5A00]",
};

/** Pill badge used across the guidance / continue-learning cards. */
export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={clsx(
        "shrink-0 rounded-full px-2 py-[3px] text-[10px] font-bold uppercase tracking-wide",
        statusStyles[status]
      )}
    >
      {status}
    </span>
  );
}

const linkSizes = {
  xs: "text-xs",
  sm: "text-sm",
};

/** Accent link with the trailing arrow used on every card in the design. */
export function CardLink({
  href,
  children,
  size = "xs",
  className,
}: {
  href: string;
  children: ReactNode;
  size?: keyof typeof linkSizes;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center gap-1 font-semibold text-accent-violet transition-colors hover:text-ink",
        linkSizes[size],
        className
      )}
    >
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}
