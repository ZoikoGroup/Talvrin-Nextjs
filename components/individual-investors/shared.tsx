import { ReactNode } from "react";
import clsx from "clsx";
import { SectionEyebrow } from "../global-markets/shared";

export const IMAGE_DIR = "/images/solutions/individual-investors";

export function SectionIntro({
  eyebrow,
  tone = "violet",
  title,
  inverted,
  children,
  className,
}: {
  eyebrow: string;
  tone?: "violet" | "amber";
  title: ReactNode;
  inverted?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <SectionEyebrow tone={tone}>{eyebrow}</SectionEyebrow>
      <h2
        className={clsx(
          "mt-3 max-w-[800px] text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[48px] lg:leading-[1.015]",
          inverted ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {children && (
        <p
          className={clsx(
            "mt-5 max-w-[780px] text-base leading-7 sm:text-[17px]",
            inverted ? "text-white/70" : "text-muted"
          )}
        >
          {children}
        </p>
      )}
    </div>
  );
}

/** "What Talvrin does" line: violet check, ink text. */
export function CheckLine({ children, bold }: { children: ReactNode; bold?: boolean }) {
  return (
    <p className={clsx("flex gap-2.5 text-sm leading-[22px] text-ink", bold && "font-semibold")}>
      <span aria-hidden="true" className="shrink-0 text-accent-violet">
        ✓
      </span>
      <span>
        <span className="sr-only">Does: </span>
        {children}
      </span>
    </p>
  );
}

/** "What Talvrin does not claim" line: red cross, muted text. */
export function CrossLine({ children }: { children: ReactNode }) {
  return (
    <p className="flex gap-2.5 text-sm leading-[22px] text-muted">
      <span aria-hidden="true" className="shrink-0 text-red-600/80">
        ✕
      </span>
      <span>
        <span className="sr-only">Does not: </span>
        {children}
      </span>
    </p>
  );
}
