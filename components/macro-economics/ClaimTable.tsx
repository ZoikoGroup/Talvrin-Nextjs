import clsx from "clsx";
import Reveal from "../ui/Reveal";

export type ClaimRow = {
  label: string;
  explains: string;
  assumes: string;
};

/**
 * The three-column "badge / allowed / not allowed" table used by the Scope,
 * Policy Contract, Monitoring Example, and Calendar sections. Below `lg` each
 * row stacks and the two column headings are repeated inline, so the pairing
 * survives.
 */
export default function ClaimTable({
  rows,
  badgeClassName,
  headings = ["May explain", "Must not assume"],
  showHeadings = true,
  inverted = false,
  showBadge = true,
}: {
  rows: ClaimRow[];
  badgeClassName?: string;
  headings?: [string, string];
  showHeadings?: boolean;
  inverted?: boolean;
  showBadge?: boolean;
}) {
  const columns = showBadge
    ? "lg:grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)]"
    : "lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]";

  return (
    <div>
      {showHeadings && (
        <Reveal className={clsx("hidden gap-4 pb-3 lg:grid", columns)}>
          {showBadge && <span />}
          {headings.map((heading) => (
            <p
              key={heading}
              className={clsx(
                "text-xs font-bold uppercase tracking-wide",
                inverted ? "text-white/50" : "text-slate-600"
              )}
            >
              {heading}
            </p>
          ))}
        </Reveal>
      )}

      {rows.map((row, index) => (
        <Reveal
          key={row.label}
          delay={index * 0.04}
          className={clsx(
            "grid grid-cols-1 gap-3 border-b py-5 lg:items-start lg:gap-4",
            columns,
            inverted ? "border-white/10" : "border-ink/10"
          )}
        >
          {showBadge && (
            <span
              className={clsx(
                "w-fit rounded-md border px-4 py-1.5 text-center text-xs font-bold lg:w-full",
                badgeClassName ??
                  (inverted
                    ? "border-white/20 bg-white/5 text-white"
                    : "border-ink/20 bg-white text-ink")
              )}
            >
              {row.label}
            </span>
          )}
          <div>
            <p
              className={clsx(
                "text-xs font-bold uppercase tracking-wide lg:hidden",
                inverted ? "text-white/50" : "text-slate-600"
              )}
            >
              {headings[0]}
            </p>
            <p
              className={clsx(
                "mt-1 text-base lg:mt-0",
                inverted ? "text-white/90" : "text-slate-700"
              )}
            >
              {row.explains}
            </p>
          </div>
          <div>
            <p
              className={clsx(
                "mt-2 text-xs font-bold uppercase tracking-wide lg:hidden",
                inverted ? "text-white/50" : "text-slate-600"
              )}
            >
              {headings[1]}
            </p>
            <p
              className={clsx("mt-1 text-sm lg:mt-0", inverted ? "text-white/60" : "text-slate-600")}
            >
              {row.assumes}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
