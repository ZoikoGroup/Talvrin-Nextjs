import { ReactNode } from "react";
import clsx from "clsx";

type Tone = "amber" | "violet";

const eyebrowTones: Record<Tone, string> = {
  amber: "text-[#b98132]",
  violet: "text-[#6c5ce7]",
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
        "text-[13px] font-bold uppercase tracking-[1.2px]",
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
        "mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[38px] lg:leading-[1.2]",
        inverted ? "text-[#f6f5fb]" : "text-[#171335]",
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
        "mt-4 max-w-3xl text-base sm:text-[17px] sm:leading-[1.6]",
        inverted ? "text-[#f6f5fb]/75" : "text-[#5d5a72]",
        className
      )}
    >
      {children}
    </p>
  );
}
