import { ReactNode } from "react";
import clsx from "clsx";

type Tone = "amber" | "violet";

const eyebrowTones: Record<Tone, string> = {
  amber: "text-[#B98132]",
  violet: "text-[#6C5CE7]",
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
    <p
      className={clsx(
        "text-[13px] font-bold uppercase tracking-[0.08em]",
        eyebrowTones[tone],
        className
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  inverted,
  children,
  className,
}: {
  inverted?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={clsx(
        "text-3xl font-bold tracking-tight sm:text-4xl lg:text-[42px] lg:leading-[1.16]",
        inverted ? "text-[#F6F5FB]" : "text-[#171335]",
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
        "text-base leading-relaxed sm:text-[17px] sm:leading-[27.2px]",
        inverted ? "text-[#F6F5FB]/70" : "text-[#5D5A72]",
        className
      )}
    >
      {children}
    </p>
  );
}
