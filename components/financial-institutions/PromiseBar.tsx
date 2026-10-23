import { Fragment } from "react";

const promises = ["Trace the source", "Explain the number", "See what changed"];

export default function PromiseBar() {
  return (
    <section aria-label="What Talvrin helps you do" className="border-y border-ink/10 bg-white">
      <ul className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-6 sm:px-14">
        {promises.map((p, i) => (
          <Fragment key={p}>
            {i > 0 && (
              <li aria-hidden="true" className="text-base text-ink/25">
                ·
              </li>
            )}
            <li className="text-xs font-semibold uppercase tracking-wide text-ink">{p}</li>
          </Fragment>
        ))}
      </ul>
    </section>
  );
}
