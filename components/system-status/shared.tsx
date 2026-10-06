import clsx from "clsx";

export const IMAGE_DIR = "/images/support/system-status";

/** Grey "unknown" dot — never green until an authoritative source reports health. */
export function UnknownDot({ size = "sm" }: { size?: "sm" | "lg" }) {
  return (
    <span
      aria-hidden="true"
      className={clsx("block shrink-0 rounded-full bg-gray-400", size === "lg" ? "size-3.5" : "size-2.5")}
    />
  );
}

/** Neutral grey pill used for every unknown / unavailable status. */
export function UnknownPill({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-block whitespace-nowrap rounded-full bg-zinc-400/20 px-2.5 py-1 text-xs font-bold tracking-wide text-gray-600",
        className
      )}
    >
      {children}
    </span>
  );
}
