import { ReactNode } from "react";
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
        "text-xs font-bold font-['IBM_Plex_Sans'] uppercase tracking-wide",
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
        "mt-3 text-3xl font-bold font-['IBM_Plex_Sans'] tracking-tight sm:text-4xl lg:text-[48px] lg:leading-[1.12]",
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
        "mt-5 max-w-3xl text-base sm:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed",
        inverted ? "text-[#F6F5FB]/70" : "text-[#5D5A72]",
        className
      )}
    >
      {children}
    </p>
  );
}
