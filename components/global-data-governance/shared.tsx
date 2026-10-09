import { ReactNode } from "react";
import clsx from "clsx";

export const IMAGE_DIR = "/images/trust/global-data-governance";

export type Row = { label: ReactNode; cells: ReactNode[] };

/**
 * Label + 1–2 description columns. Rows stack on small screens and become a grid
 * at md (two columns) or lg (three columns) so long text never gets squeezed.
 */
export function RowTable({
  rows,
  tone = "surface",
  labelClassName = "text-sm font-bold text-ink",
}: {
  rows: Row[];
  tone?: "surface" | "white";
  labelClassName?: string;
}) {
  const threeCol = rows.some((row) => row.cells.length > 1);
  return (
    <dl
      className={clsx(
        "overflow-hidden rounded-2xl border border-ink/10 pb-4 sm:pt-7",
        tone === "surface" ? "bg-surface" : "bg-white"
      )}
    >
      {rows.map((row, index) => (
        <div
          key={index}
          className={clsx(
            "grid grid-cols-1 gap-1.5 border-b border-ink/10 px-5 py-4",
            threeCol
              ? "lg:grid-cols-[240px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-4"
              : "md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-4"
          )}
        >
          <dt className={labelClassName}>{row.label}</dt>
          {row.cells.map((cell, cellIndex) => (
            <dd
              key={cellIndex}
              className={clsx(
                "text-sm leading-5",
                threeCol && cellIndex === 1 ? "text-ink-soft" : "text-muted"
              )}
            >
              {cell}
            </dd>
          ))}
        </div>
      ))}
    </dl>
  );
}

/** Dark ink callout with an amber uppercase label. */
export function DarkNote({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div role="note" className="rounded-2xl bg-ink p-6 sm:p-7">
      {label && <p className="text-xs font-bold uppercase tracking-wide text-accent-amber">{label}</p>}
      <div className={clsx("text-[15px] leading-6 text-white/80 sm:text-base", label && "mt-2.5")}>
        {children}
      </div>
    </div>
  );
}
