import { ReactNode } from "react";
import clsx from "clsx";

export const IMG = "/images/legal/cookie-preferences";

type Tone = "amber" | "violet";

const eyebrowTones: Record<Tone, string> = {
  amber: "text-accent-amber",
  violet: "text-accent-violet",
};

export function SectionEyebrow({
  tone = "violet",
  children,
  className,
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={clsx("text-xs font-bold uppercase tracking-[1.04px]", eyebrowTones[tone], className)}>
      {children}
    </p>
  );
}

export function SectionHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={clsx("mt-3 text-2xl font-bold leading-[1.25] text-ink sm:text-3xl sm:leading-9", className)}>
      {children}
    </h2>
  );
}
