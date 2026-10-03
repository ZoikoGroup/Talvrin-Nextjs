import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type Tone = "amber" | "violet";

const eyebrowTones: Record<Tone, string> = {
  amber: "text-[#B98132]",
  violet: "text-[#6C5CE7]",
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
    <p
      className={clsx(
        "text-xs font-bold uppercase tracking-wide font-['IBM_Plex_Sans']",
        eyebrowTones[tone],
        className
      )}
    >
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
export function StatusBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        "shrink-0 rounded-full bg-accent-amber/10 px-2 py-[3px] text-[10px] font-bold tracking-wide text-[#8A5A00]",
        className
      )}
    >
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
        "group inline-flex items-center gap-1.5 font-semibold text-accent-violet font-['IBM_Plex_Sans']",
        linkSizes[size],
        className
      )}
    >
      <span>{children}</span>
      <svg
        width="11"
        height="11"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:translate-x-0.5"
      >
        <path
          d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export type FaqItem = { q: ReactNode; a: ReactNode };

/**
 * Stacked question/answer panel used by the category sections.
 * Rows are always open (the Figma shows them expanded, not accordioned).
 */
export function FaqList({
  items,
  inverted = false,
  children,
  className,
}: {
  items: FaqItem[];
  inverted?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-2xl border px-8 py-4",
        inverted ? "border-white/10 bg-[#1D1A3D]" : "border-ink/10 bg-white",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={clsx(
            "flex flex-col gap-2 py-5",
            idx !== items.length - 1 && (inverted ? "border-b border-white/10" : "border-b border-ink/10")
          )}
        >
          <h3 className={clsx("text-base font-bold font-['IBM_Plex_Sans']", inverted ? "text-white" : "text-ink")}>
            {item.q}
          </h3>
          <p className={clsx("text-sm sm:text-base leading-6 font-['IBM_Plex_Sans']", inverted ? "text-white/75" : "text-muted")}>
            {item.a}
          </p>
        </div>
      ))}
      {children}
    </div>
  );
}
