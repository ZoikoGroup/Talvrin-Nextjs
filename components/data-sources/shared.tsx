import clsx from "clsx";

export const IMAGE_DIR = "/images/trust/data-sources";

export type StateTone = "green" | "amber" | "rose" | "neutral";

const stateToneClasses: Record<StateTone, string> = {
  green: "border-green-700/30 text-green-700",
  amber: "border-accent-amber/30 text-accent-amber",
  rose: "border-pink-800/30 text-pink-800",
  neutral: "border-muted/30 text-muted",
};

/** Outlined uppercase state label used in the coverage table. */
export function StateLabel({ label, tone }: { label: string; tone: StateTone }) {
  return (
    <span
      className={clsx(
        "inline-block w-fit rounded-md border bg-white px-4 py-1.5 text-center text-xs font-bold uppercase md:w-full",
        stateToneClasses[tone]
      )}
    >
      {label}
    </span>
  );
}
