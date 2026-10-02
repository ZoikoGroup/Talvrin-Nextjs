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
  size = "lg",
  inverted,
  children,
  className,
}: {
  size?: "lg" | "md";
  inverted?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={clsx(
        "mt-3 font-bold leading-10 tracking-tight",
        size === "lg" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl",
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
        "mt-4 max-w-[760px] text-base leading-6",
        inverted ? "text-white/70" : "text-muted",
        className
      )}
    >
      {children}
    </p>
  );
}

/** Pill badge used on the trust / getting-help cards. */
export function StatusBadge({ children }: { children: ReactNode }) {
  return (
    <span className="shrink-0 rounded-full bg-accent-amber/10 px-2 py-[3px] text-[10px] font-bold uppercase tracking-wide text-[#8A5A00]">
      {children}
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
  size = "sm",
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

export type FaqItem = { q: string; a: string };

/**
 * Stacked question/answer panel used by the category sections.
 * Rows are always open (the Figma shows them expanded, not accordioned).
 */
export function FaqList({
  items,
  inverted = false,
  className,
}: {
  items: FaqItem[];
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-2xl border px-6 pt-7 pb-2",
        inverted ? "border-white/10 bg-[#1D1A3D]" : "border-ink/10 bg-white",
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.q}
          className={clsx(
            "flex flex-col gap-2 py-5 border-b",
            inverted ? "border-white/10" : "border-ink/10"
          )}
        >
          <h3 className={clsx("text-base font-bold", inverted ? "text-white" : "text-ink")}>
            {item.q}
          </h3>
          <p className={clsx("text-base leading-6", inverted ? "text-white/75" : "text-muted")}>
            {item.a}
          </p>
        </div>
      ))}
    </div>
  );
}
