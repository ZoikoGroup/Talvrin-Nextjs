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
      style={{
        color: tone === "amber" ? "rgba(185, 129, 50, 1)" : "rgba(108, 92, 231, 1)",
      }}
    >
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

export function SectionLede({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <p
      className={clsx("mt-4 max-w-[760px] text-base leading-6 text-muted font-['IBM_Plex_Sans']", className)}
      style={style}
    >
      {children}
    </p>
  );
}

export type Status = "Available" | "Boundary" | "Not Yet Available";

const statusConfig: Record<Status, { bg: string; text: string }> = {
  Available: {
    bg: "rgba(46, 125, 91, 0.12)",
    text: "rgba(46, 125, 91, 1)",
  },
  Boundary: {
    bg: "rgba(23, 19, 53, 0.08)",
    text: "rgba(93, 90, 114, 1)",
  },
  "Not Yet Available": {
    bg: "rgba(185, 129, 50, 0.14)",
    text: "rgba(138, 90, 0, 1)",
  },
};

/** Pill badge used across the guidance / continue-learning cards. */
export function StatusBadge({ status, className }: { status: Status; className?: string }) {
  const config = statusConfig[status];
  return (
    <span
      className={clsx(
        "shrink-0 rounded-full px-2 py-[2px] text-[10px] font-bold tracking-wide font-['IBM_Plex_Sans']",
        className
      )}
      style={{
        backgroundColor: config.bg,
        color: config.text,
      }}
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
        "group inline-flex items-center gap-1.5 font-semibold font-['IBM_Plex_Sans']",
        linkSizes[size],
        className
      )}
      style={{ color: "rgba(108, 92, 231, 1)" }}
    >
      <span style={{ color: "rgba(108, 92, 231, 1)" }}>{children}</span>
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
          stroke="rgba(108, 92, 231, 1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
