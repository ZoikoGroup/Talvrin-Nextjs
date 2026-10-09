import { ReactNode } from "react";
import clsx from "clsx";

export const IMAGE_DIR = "/images/trust/ai-principles";

type PillTone = "amber" | "neutral" | "violet" | "ink";

const pillTones: Record<PillTone, string> = {
  amber: "bg-accent-amber/12 text-[#8a5a00]",
  neutral: "bg-muted/10 text-muted",
  violet: "bg-accent-violet/10 text-accent-violet",
  ink: "bg-ink/10 text-ink",
};

/** Small uppercase status/label pill used across the page. */
export function Pill({
  children,
  tone = "amber",
  className,
}: {
  children: ReactNode;
  tone?: PillTone;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-block w-fit whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide",
        pillTones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
