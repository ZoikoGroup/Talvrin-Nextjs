"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { categories, CategoryId, useReport } from "./ReportContext";

/** The tailored next step shown after Continue, keyed by the routing it implies. */
function NextStep({ category }: { category: CategoryId }) {
  if (category === "security") {
    return (
      <p className="text-base leading-6 text-ink">
        Don&apos;t submit vulnerability details through this form. Security Contact is not yet
        published for this build — please wait for an approved security route rather than sending
        sensitive details here.
      </p>
    );
  }
  if (category === "account") {
    return (
      <>
        <p className="text-base leading-6 text-ink">
          Sign-in, recovery, and access issues are handled by Account Support. You can still describe
          a product behavior below if it isn&apos;t about your own account access.
        </p>
        <Link href="/support/account-support" className="text-sm font-semibold text-accent-violet hover:text-brand">
          Go to Account Support →
        </Link>
      </>
    );
  }
  if (category === "accessibility") {
    return (
      <>
        <p className="text-base leading-6 text-ink">
          Accessibility Support is built for barriers like this — no disability or medical
          information required. You can also report it below.
        </p>
        <Link
          href="/support/accessibility-support"
          className="text-sm font-semibold text-accent-violet hover:text-brand"
        >
          Go to Accessibility Support →
        </Link>
      </>
    );
  }
  return (
    <p className="text-base leading-6 text-ink">
      Next step: describe the problem in the report form below. A text description is enough — no
      screenshot or file is required.
    </p>
  );
}

export default function CategoryPicker() {
  const { category, setCategory } = useReport();
  const [selected, setSelected] = useState<CategoryId | null>(null);

  function handleContinue() {
    if (!selected) return;
    setCategory(selected);
    // Security reports must not go through the form, so keep the visitor on the guidance.
    if (selected !== "security") {
      requestAnimationFrame(() =>
        document.getElementById("report-it")?.scrollIntoView({ behavior: "smooth", block: "start" })
      );
    }
  }

  return (
    <div>
      <fieldset className="pt-5">
        <legend className="sr-only">What&apos;s going wrong?</legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((item) => {
            const checked = selected === item.id;
            return (
              <label
                key={item.id}
                className={clsx(
                  "flex cursor-pointer items-start gap-3 rounded-[10px] border bg-white px-4 py-4 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ink has-[:focus-visible]:ring-offset-2",
                  checked ? "border-ink/50" : "border-ink/10 hover:border-ink/30"
                )}
              >
                {/* Figma: 16px white circle with a neutral-500 border in a 24px slot. */}
                <span className="flex w-6 shrink-0 pl-[5px] pr-[3px] pt-[3px]">
                  <input
                    type="radio"
                    name="problem-category"
                    value={item.id}
                    checked={checked}
                    onChange={() => setSelected(item.id)}
                    className="size-4 cursor-pointer appearance-none rounded-full border border-neutral-500 bg-white checked:bg-ink checked:shadow-[inset_0_0_0_4px_#fff] focus:outline-none"
                  />
                </span>
                <span className="flex flex-col gap-px">
                  <span className="text-base font-semibold text-ink">{item.title}</span>
                  <span className="text-xs leading-5 text-muted">{item.description}</span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="pb-7 pt-3">
        <button
          type="button"
          onClick={handleContinue}
          disabled={!selected}
          className="w-full rounded-lg bg-ink px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-ink-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          Continue
        </button>
      </div>

      <div aria-live="polite" className="border-t border-ink/10 pt-6">
        {category ? (
          <div className="flex flex-col items-center gap-3 text-center">
            <NextStep category={category} />
          </div>
        ) : (
          <p className="text-center text-base leading-6 text-muted">
            Choose what&apos;s going wrong above, then Continue to see a tailored next step.
          </p>
        )}
      </div>
    </div>
  );
}
