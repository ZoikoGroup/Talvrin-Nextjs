import clsx from "clsx";
import Reveal from "../ui/Reveal";

export type ClaimRow = {
  label: string;
  explains: string;
  assumes: string;
};

/**
 * The three-column "badge / may explain / must not assume" table used by the
 * Scope, Identity, and Illustrative sections. Below `lg` each row stacks and
 * the two column headings are repeated inline, so the pairing survives.
 */
export default function ClaimTable({
  rows,
  badgeClassName,
  headings = ["May explain", "Must not assume"],
  showHeadings = true,
}: {
  rows: ClaimRow[];
  badgeClassName?: string;
  headings?: [string, string];
  showHeadings?: boolean;
}) {
  return (
    <div>
      {showHeadings && (
        <Reveal className="hidden gap-4 pb-3 lg:grid lg:grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)]">
          <span />
          <p className="text-xs font-bold uppercase tracking-wide text-slate-600">{headings[0]}</p>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-600">{headings[1]}</p>
        </Reveal>
      )}

      {rows.map((row, index) => (
        <Reveal
          key={row.label}
          delay={index * 0.04}
          className="grid grid-cols-1 gap-3 border-b border-ink/10 py-5 lg:grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-4"
        >
          <span
            className={clsx(
              "w-fit rounded-md border px-4 py-1.5 text-center text-xs font-bold lg:w-full",
              badgeClassName ?? "border-ink/20 bg-white text-ink"
            )}
          >
            {row.label}
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-600 lg:hidden">
              {headings[0]}
            </p>
            <p className="mt-1 text-base text-slate-700 lg:mt-0">{row.explains}</p>
          </div>
          <div>
            <p className="mt-2 text-xs font-bold uppercase tracking-wide text-slate-600 lg:hidden">
              {headings[1]}
            </p>
            <p className="mt-1 text-sm text-slate-600 lg:mt-0">{row.assumes}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
