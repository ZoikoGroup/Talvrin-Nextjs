import { ReactNode } from "react";
import clsx from "clsx";

export const IMAGE_DIR = "/images/trust/evidence-standards";

/** Bulleted statement list with a colored dot, used by the lineage and source-open sections. */
export function DotList({ items, tone }: { items: ReactNode[]; tone: "amber" | "violet" }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 text-[15px] leading-6 text-ink-soft">
          <span
            aria-hidden="true"
            className={clsx(
              "mt-2.5 size-1.5 shrink-0 rounded-full",
              tone === "amber" ? "bg-accent-amber" : "bg-accent-violet"
            )}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
