import { ReactNode } from "react";
import clsx from "clsx";

export function SectionEyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={clsx("text-xs font-semibold uppercase tracking-wider text-brand", className)}>
      {children}
    </p>
  );
}

export function SectionHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={clsx("mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl", className)}>
      {children}
    </h2>
  );
}
