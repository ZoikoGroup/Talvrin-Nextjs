import { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

type Tone = "amber" | "violet";

export const IMG = "/watchlists-alerts";

export function SectionEyebrow({ tone = "violet", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <p
      className={clsx(
        "text-xs font-bold uppercase tracking-widest",
        tone === "amber" ? "text-accent-amber" : "text-accent-violet"
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
        "mt-3 max-w-[740px] text-3xl font-bold tracking-tight sm:text-4xl sm:leading-[1.15]",
        inverted ? "text-white" : "text-ink",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionLede({ inverted, children }: { inverted?: boolean; children: ReactNode }) {
  return (
    <p
      className={clsx(
        "mt-4 max-w-[780px] text-base leading-7",
        inverted ? "text-white/70" : "text-slate-600"
      )}
    >
      {children}
    </p>
  );
}

/** Small rounded chips used for state lists (rule states, builder states, …). */
export function Chips({
  items,
  label,
  tone = "neutral",
  surface = "bg-white",
}: {
  items: string[];
  label?: string;
  tone?: "neutral" | "warning";
  surface?: string;
}) {
  return (
    <div>
      {label && (
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-600">{label}</p>
      )}
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className={clsx(
              "rounded-full border px-3 py-1.5 text-xs font-semibold",
              tone === "warning"
                ? "border-pink-800/20 bg-pink-800/10 text-pink-800"
                : clsx("border-ink/10 text-ink", surface)
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Coloured status badge used in triage, research-view and availability lists. */
export const BADGE = {
  amber: "bg-accent-amber/10 text-accent-amber",
  violet: "bg-accent-violet/10 text-accent-violet",
  rose: "bg-pink-800/10 text-pink-800",
  ink: "bg-ink/10 text-ink",
  slate: "bg-slate-600/10 text-slate-600",
} as const;

export type BadgeTone = keyof typeof BADGE;

export function StateRows({
  rows,
  outlined,
}: {
  rows: { label: string; tone: BadgeTone; body: string }[];
  /** Outlined badges on a white panel (availability) vs filled badges (triage). */
  outlined?: boolean;
}) {
  return (
    <dl>
      {rows.map((r) => (
        <div
          key={r.label}
          className="grid grid-cols-1 gap-2 border-b border-ink/10 py-4 sm:grid-cols-[150px_minmax(0,1fr)] sm:items-center sm:gap-4"
        >
          <dt>
            <span
              className={clsx(
                "inline-block rounded-md px-4 py-1.5 text-center text-xs font-bold sm:block",
                outlined ? clsx("border bg-white", OUTLINE[r.tone]) : BADGE[r.tone]
              )}
            >
              {r.label}
            </span>
          </dt>
          <dd className="text-base text-slate-700">{r.body}</dd>
        </div>
      ))}
    </dl>
  );
}

const OUTLINE: Record<BadgeTone, string> = {
  amber: "border-accent-amber/40 text-accent-amber",
  violet: "border-accent-violet/40 text-accent-violet",
  rose: "border-pink-800/30 text-pink-800",
  ink: "border-ink/30 text-ink",
  slate: "border-slate-600/30 text-slate-600",
};

/** Text-and-photo module layout shared by most sections on this page. */
export function ModuleSection({
  id,
  eyebrow,
  tone,
  heading,
  lede,
  image,
  imageAlt,
  imageWidth = 312,
  surface,
  children,
}: {
  id?: string;
  eyebrow: string;
  tone: Tone;
  heading: ReactNode;
  lede: ReactNode;
  image: string;
  imageAlt: string;
  /** Desktop width of the photo column in px. */
  imageWidth?: number;
  surface: "white" | "surface";
  children?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "scroll-mt-24 py-16 sm:py-24",
        surface === "white" ? "bg-white" : "bg-surface"
      )}
    >
      <Container>
        <div
          style={{ ["--img-w" as string]: `${imageWidth}px` }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_var(--img-w)] lg:gap-3"
        >
          <div>
            <Reveal>
              <SectionEyebrow tone={tone}>{eyebrow}</SectionEyebrow>
              <SectionHeading>{heading}</SectionHeading>
              <SectionLede>{lede}</SectionLede>
            </Reveal>
            {children && (
              <Reveal delay={0.1} className="mt-8">
                {children}
              </Reveal>
            )}
          </div>

          <Reveal
            delay={0.2}
            className="relative hidden min-h-[260px] overflow-hidden rounded-2xl lg:block"
          >
            <Image src={`${IMG}/${image}`} alt={imageAlt} fill sizes={`${imageWidth}px`} className="object-cover" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/** Simple card grid of title + body tiles. */
export function TileGrid({
  tiles,
  columns = 3,
  tileClass = "bg-surface",
}: {
  tiles: { title?: string; body: string }[];
  columns?: 2 | 3;
  tileClass?: string;
}) {
  return (
    <ul className={clsx("grid grid-cols-1 gap-3", columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2")}>
      {tiles.map((t) => (
        <li key={t.body} className={clsx("flex flex-col gap-1.5 rounded-xl px-5 py-4", tileClass)}>
          {t.title && <h3 className="text-base font-bold text-ink">{t.title}</h3>}
          <p className={clsx("leading-5", t.title ? "text-sm text-slate-600" : "pb-4 text-sm text-slate-700")}>
            {t.body}
          </p>
        </li>
      ))}
    </ul>
  );
}
