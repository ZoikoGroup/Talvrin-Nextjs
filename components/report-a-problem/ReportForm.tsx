"use client";

import { FormEvent, ReactNode, useId, useState } from "react";
import clsx from "clsx";
import { categories, useReport } from "./ReportContext";

const DETAILS_MAX = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Rough guard against pasted secrets: key-like prefixes, long unbroken tokens, or PEM keys. */
const SECRET_PATTERN =
  /\b(sk|pk|api|key|token)[-_][A-Za-z0-9]{8,}|\b[A-Za-z0-9+/_-]{32,}\b|-----BEGIN [A-Z ]*PRIVATE KEY-----/i;

const fieldClass =
  "w-full rounded-lg border bg-white px-4 py-3 text-base text-ink placeholder:text-neutral-500 focus:border-ink/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet/40";

/** Step 2 intro line plus, once a non-security category is confirmed, the report form. */
export default function ReportForm() {
  const { category } = useReport();
  const selected = categories.find((item) => item.id === category);

  if (!selected) {
    return (
      <p className="max-w-[760px] text-base leading-6 text-muted">
        Choose what&apos;s going wrong above to open the report form — this keeps your report routed
        correctly from the start.
      </p>
    );
  }

  if (selected.id === "security") {
    return (
      <p
        role="note"
        className="max-w-[760px] rounded-xl border border-accent-amber/30 bg-accent-amber/10 px-5 py-4 text-sm leading-6 text-[#8a5a00]"
      >
        This form isn&apos;t for security issues. Security Contact is not yet published for this build
        — please don&apos;t send vulnerability details, exposed secrets, or credentials here.
      </p>
    );
  }

  // Remount when the category changes so a half-written report doesn't carry over silently.
  return <ReportFormBody key={selected.id} categoryTitle={selected.title} />;
}

function ReportFormBody({ categoryTitle }: { categoryTitle: string }) {
  const uid = useId();
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ details?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const looksLikeSecret = SECRET_PATTERN.test(`${task}\n${details}\n${location}`);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: typeof errors = {};
    if (!details.trim()) next.details = "Describe what happened so the report can be routed.";
    if (email.trim() && !EMAIL_PATTERN.test(email.trim())) {
      next.email = "Enter a valid email address, or leave this field blank.";
    }
    setErrors(next);
    setSubmitted(Object.keys(next).length === 0 && !looksLikeSecret);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby={`${uid}-title`}
      className="max-w-[760px] rounded-2xl border border-ink/10 bg-white p-5 sm:p-8"
    >
      <h3 id={`${uid}-title`} className="text-lg font-bold text-ink">
        Problem report
      </h3>
      <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <span className="font-semibold text-muted">Problem type:</span>
        <span className="font-semibold text-ink">{categoryTitle}</span>
        <a href="#whats-going-wrong" className="font-semibold text-accent-violet hover:text-brand">
          Change
        </a>
      </p>

      <div className="mt-6 flex flex-col gap-5">
        <Field id={`${uid}-task`} label="What were you trying to do?" hint="Optional. For example, the task or workflow you were in.">
          <textarea
            id={`${uid}-task`}
            rows={2}
            value={task}
            onChange={(event) => setTask(event.target.value)}
            aria-describedby={`${uid}-task-hint`}
            className={clsx(fieldClass, "resize-y border-ink/15")}
          />
        </Field>

        <Field
          id={`${uid}-details`}
          label="What happened?"
          hint="Required. Describe what you saw and what you expected instead."
          error={errors.details}
        >
          <textarea
            id={`${uid}-details`}
            rows={5}
            required
            maxLength={DETAILS_MAX}
            value={details}
            onChange={(event) => {
              setDetails(event.target.value);
              setSubmitted(false);
            }}
            aria-invalid={errors.details ? true : undefined}
            aria-describedby={`${uid}-details-hint${errors.details ? ` ${uid}-details-error` : ""}`}
            className={clsx(fieldClass, "resize-y", errors.details ? "border-red-600" : "border-ink/15")}
          />
          <span className="self-end text-xs text-muted">
            {details.length}/{DETAILS_MAX}
          </span>
        </Field>

        <Field id={`${uid}-location`} label="Where did it happen?" hint="Optional. A page name or link, without any personal or account details.">
          <input
            id={`${uid}-location`}
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            aria-describedby={`${uid}-location-hint`}
            className={clsx(fieldClass, "border-ink/15")}
          />
        </Field>

        <Field
          id={`${uid}-email`}
          label="Email for follow-up"
          hint="Optional. Leave blank if you don't want a reply."
          error={errors.email}
        >
          <input
            id={`${uid}-email`}
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={`${uid}-email-hint${errors.email ? ` ${uid}-email-error` : ""}`}
            className={clsx(fieldClass, "max-w-md", errors.email ? "border-red-600" : "border-ink/15")}
          />
        </Field>
      </div>

      {looksLikeSecret && (
        <p role="alert" className="mt-5 text-sm font-semibold text-red-700">
          This looks like it may contain a key, token, or code. Remove it before submitting.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <button
          type="submit"
          disabled={looksLikeSecret}
          className="rounded-lg bg-ink px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-ink-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-not-allowed disabled:opacity-50"
        >
          Submit report
        </button>
        <p className="text-xs text-muted">Submitting does not guarantee a response time or a fix date.</p>
      </div>

      {/* No report service is connected on this build, so nothing is sent — say so plainly. */}
      <div aria-live="polite">
        {submitted && (
          <p className="mt-5 rounded-xl border border-accent-amber/30 bg-accent-amber/10 px-4 py-4 text-sm leading-6 text-[#8a5a00] sm:px-5">
            Report submission isn&apos;t connected in this build yet, so nothing has been sent. Your text
            is still on this page if you want to copy it.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-base font-semibold text-ink">
        {label}
      </label>
      <p id={`${id}-hint`} className="text-sm text-muted">
        {hint}
      </p>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm font-semibold text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
