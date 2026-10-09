"use client";

import { FormEvent, useState } from "react";
import { issues, SignInAnswer, useAccountRequest } from "./AccountRequestContext";

const DETAILS_MAX = 2000;

/** Rough guard against pasted secrets: long unbroken tokens or key-like prefixes. */
const SECRET_PATTERN =
  /\b(sk|pk|api|key|token)[-_][A-Za-z0-9]{8,}|\b[A-Za-z0-9+/_-]{32,}\b|-----BEGIN [A-Z ]*PRIVATE KEY-----/i;

const fieldClass =
  "w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-base text-ink placeholder:text-neutral-500 focus:border-ink/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet/40";

export default function RequestForm() {
  const { issue, canSignIn } = useAccountRequest();
  const selectedIssue = issues.find((item) => item.id === issue);

  return (
    <>
      {/* Copy and line break exactly as in the Figma frame. */}
      <p className="pt-6 text-base leading-6 text-muted">
        Select an issue and answer whether you can sign in above to open the request form — this
        keeps your request
        <br className="hidden lg:block" /> routed correctly from the start.
      </p>

      {/* The form only opens once both routing answers are given, as the line above promises. */}
      {selectedIssue && canSignIn && (
        <RequestFormBody issueTitle={selectedIssue.title} canSignIn={canSignIn} />
      )}
    </>
  );
}

function RequestFormBody({
  issueTitle,
  canSignIn,
}: {
  issueTitle: string;
  canSignIn: SignInAnswer;
}) {
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const looksLikeSecret = SECRET_PATTERN.test(details);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (looksLikeSecret) return;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="request-form-title"
      className="mt-6 rounded-2xl border border-ink/10 bg-white p-5 sm:p-8"
    >
      <h3 id="request-form-title" className="text-lg font-bold text-ink">
        Account support request
      </h3>

      <dl className="mt-4 grid grid-cols-1 gap-3 rounded-xl bg-surface px-4 py-4 sm:grid-cols-2 sm:px-5">
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-muted">Issue</dt>
          <dd className="mt-1 text-[15px] font-semibold text-ink">{issueTitle}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-muted">Can sign in</dt>
          <dd className="mt-1 text-[15px] font-semibold text-ink">
            {canSignIn === "yes" ? "Yes" : "No"}
          </dd>
        </div>
      </dl>
      <a
        href="#your-issue"
        className="mt-2 inline-block text-xs font-semibold text-accent-violet hover:text-brand"
      >
        Change these answers ↑
      </a>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="request-name" className="text-sm font-semibold text-ink">
            Name
          </label>
          <input id="request-name" name="name" autoComplete="name" required className={fieldClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="request-email" className="text-sm font-semibold text-ink">
            Account email address
          </label>
          <input
            id="request-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="request-details" className="text-sm font-semibold text-ink">
          What happened?
        </label>
        <textarea
          id="request-details"
          name="details"
          required
          rows={5}
          maxLength={DETAILS_MAX}
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          aria-describedby="request-details-hint"
          aria-invalid={looksLikeSecret}
          placeholder="Describe what you see and when it started. Never include passwords, codes, or keys."
          className={fieldClass}
        />
        <div
          id="request-details-hint"
          className="flex flex-col gap-1 text-xs text-muted sm:flex-row sm:justify-between sm:gap-4"
        >
          <span
            role={looksLikeSecret ? "alert" : undefined}
            className={looksLikeSecret ? "font-semibold text-red-700" : ""}
          >
            {looksLikeSecret
              ? "This looks like it may contain a key, token, or code. Remove it before submitting."
              : "No attachments — don't link to files with sensitive content."}
          </span>
          <span className="shrink-0 sm:text-right">
            {details.length}/{DETAILS_MAX}
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <button
          type="submit"
          disabled={looksLikeSecret}
          className="rounded-lg bg-ink px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-ink-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-not-allowed disabled:opacity-50"
        >
          Submit request
        </button>
        <p className="text-xs text-muted">Submitting does not guarantee a response time.</p>
      </div>

      {/* No request service is connected on this build, so nothing is sent — say so plainly. */}
      {submitted && (
        <p
          role="status"
          className="mt-5 rounded-xl border border-accent-amber/30 bg-accent-amber/10 px-4 py-4 text-sm leading-6 text-[#8a5a00] sm:px-5"
        >
          Account requests can&apos;t be sent from this build yet — nothing was submitted. Please
          use{" "}
          <a href="/support/contact-support" className="font-semibold underline underline-offset-2">
            Contact Support
          </a>{" "}
          in the meantime.
        </p>
      )}
    </form>
  );
}
