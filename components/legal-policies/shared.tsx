import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import type { LegalDoc } from "./documents";

type Tone = "amber" | "violet";

const eyebrowTones: Record<Tone, string> = {
  amber: "text-accent-amber",
  violet: "text-accent-violet",
};

export const IMG = "/images/company/legal-policies";

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
    <p className={clsx("text-xs font-bold uppercase tracking-widest", eyebrowTones[tone], className)}>
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
        "mt-3 max-w-[780px] text-3xl font-bold tracking-tight sm:text-4xl sm:leading-[1.15]",
        inverted ? "text-white" : "text-ink",
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
        "mt-5 max-w-[780px] text-base leading-6",
        inverted ? "text-white/70" : "text-slate-600",
        className
      )}
    >
      {children}
    </p>
  );
}

export function DocCard({ doc, className }: { doc: LegalDoc; className?: string }) {
  return (
    <Link
      href={doc.href}
      className={clsx(
        "group flex h-full flex-col rounded-2xl border border-ink/10 bg-surface p-6 transition-colors hover:border-accent-violet/40",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-ink">{doc.title}</h3>
        <span className="shrink-0 rounded-full bg-ink/5 px-2 py-[3px] text-xs font-bold tracking-wide text-slate-600">
          {doc.version}
        </span>
      </div>
      <p className="mt-2.5 flex-1 pb-4 text-sm leading-6 text-slate-600">{doc.summary}</p>
      <span className="text-sm font-semibold text-ink transition-colors group-hover:text-accent-violet">
        Read the document →
      </span>
    </Link>
  );
}
