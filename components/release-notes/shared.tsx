import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import { SectionEyebrow } from "../global-markets/shared";

export type Status = "available" | "unavailable" | "boundary";

const statusStyles: Record<Status, { label: string; className: string }> = {
  available: { label: "Available", className: "bg-teal-700/10 text-teal-700" },
  unavailable: { label: "Not Yet Available", className: "bg-accent-amber/12 text-[#8a5a00]" },
  boundary: { label: "Boundary", className: "bg-ink/8 text-muted" },
};

export function StatusBadge({ status }: { status: Status }) {
  const { label, className } = statusStyles[status];
  return (
    <span
      className={clsx(
        "shrink-0 whitespace-nowrap rounded-full px-2 py-[3px] text-[10px] font-bold tracking-[0.4px]",
        className
      )}
    >
      {label}
    </span>
  );
}

export function SectionIntro({
  eyebrow,
  tone = "violet",
  title,
  children,
  className,
}: {
  eyebrow: string;
  tone?: "violet" | "amber";
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <SectionEyebrow tone={tone}>{eyebrow}</SectionEyebrow>
      <h2 className="mt-3 max-w-[780px] text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl sm:leading-[1.12]">
        {title}
      </h2>
      {children && (
        <p className="mt-4 max-w-[760px] text-base leading-[25.6px] text-muted">{children}</p>
      )}
    </div>
  );
}

export function CardLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[13px] font-semibold text-accent-violet transition-colors hover:text-brand"
    >
      {children} →
    </Link>
  );
}

/** Muted italic placeholder used wherever a registry-backed list will eventually render. */
export function EmptyNote({ children }: { children: ReactNode }) {
  return <p className="text-xs italic text-muted">{children}</p>;
}
