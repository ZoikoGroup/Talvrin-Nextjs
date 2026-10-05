"use client";

import { FormEvent, useState } from "react";

/**
 * There is no published Help Content Registry yet, so a search can't return
 * articles. Rather than pretend, a submitted query shows the documented
 * "no search results" recovery state and points to the topic directory.
 */
export default function HelpSearch() {
  const [submittedQuery, setSubmittedQuery] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get("q")?.toString().trim() ?? "";
    setSubmittedQuery(query || null);
  }

  return (
    <form role="search" onSubmit={handleSubmit} className="w-full max-w-[600px]">
      <label htmlFor="help-search" className="text-xs font-semibold text-white/75">
        Search Help Center
      </label>
      <div className="mt-2 flex flex-col gap-2.5 sm:flex-row">
        <input
          id="help-search"
          name="q"
          type="search"
          autoComplete="off"
          placeholder="e.g. monitor evidence changes, reset sign-in"
          className="min-w-0 flex-1 rounded-lg bg-white px-4 py-3.5 text-base text-ink placeholder:text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet"
        />
        <button
          type="submit"
          className="rounded-lg bg-surface px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Search
        </button>
      </div>
      <p aria-live="polite" className="mt-3 min-h-0 text-sm leading-6 text-white/75 empty:hidden">
        {submittedQuery && (
          <>
            No Help Center articles match &ldquo;{submittedQuery}&rdquo; yet. Try the{" "}
            <a href="#topics" className="font-semibold text-white underline underline-offset-2">
              help topics
            </a>{" "}
            or{" "}
            <a href="/resources/faqs" className="font-semibold text-white underline underline-offset-2">
              FAQs
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
