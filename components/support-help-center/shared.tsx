import { ReactNode } from "react";
import clsx from "clsx";

export const IMAGE_DIR = "/images/support/help-center";

/** Uppercase amber pill used for destinations and topics that aren't live yet. */
export function NotYetAvailable({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "inline-block w-fit whitespace-nowrap rounded-full bg-accent-amber/12 px-2 py-[3px] text-[10px] font-bold uppercase tracking-[0.5px] text-[#8a5a00]",
        className
      )}
    >
      Not Yet Available
    </span>
  );
}

/** Secondary hero/CTA button on dark backgrounds (outlined). */
export const outlineOnDark =
  "inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-[15px] text-base font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5";

export function CardShell({
  children,
  muted,
  tone = "white",
  className,
}: {
  children: ReactNode;
  /** Unavailable destinations render slightly faded, as in the design. */
  muted?: boolean;
  tone?: "white" | "surface";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex h-full flex-col rounded-2xl border border-ink/10",
        tone === "white" ? "bg-white" : "bg-surface",
        muted && "opacity-75",
        className
      )}
    >
      {children}
    </div>
  );
}
