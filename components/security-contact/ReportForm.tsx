import type { ReactNode } from "react";

const fieldClass =
  "w-full rounded-lg border border-ink/18 bg-surface px-[14.8px] py-[12.8px] text-[15px] text-ink placeholder:text-neutral-500 focus:border-ink/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet/40";

const selectClass =
  "w-full appearance-none rounded-lg border border-ink/18 bg-surface px-[18.8px] py-[12.8px] text-[15px] text-ink focus:border-ink/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet/40";

function Field({
  id,
  label,
  badge,
  children,
}: {
  id: string;
  label: string;
  badge?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
        {badge && <span className="font-normal text-muted"> ({badge})</span>}
      </label>
      {children}
    </div>
  );
}

export default function ReportForm() {
  return (
    <form aria-labelledby="report-form-title" className="flex flex-col gap-5 pt-5">
      <div className="flex flex-col gap-5 pb-[18.6px]">
        <Field id="issue-type" label="Issue type">
          <select id="issue-type" defaultValue="not-sure" className={selectClass}>
            <option value="not-sure">Not sure</option>
            <option value="vulnerability">Potential security weakness</option>
            <option value="exposed-secret">Exposed secret, token, or key</option>
            <option value="other">Other</option>
          </select>
        </Field>

        <Field id="short-summary" label="Short summary" badge="required">
          <textarea
            id="short-summary"
            required
            rows={3}
            placeholder="Plain-language description — no secrets, no exploit payloads."
            className={fieldClass}
          />
        </Field>

        <Field id="affected-surface" label="Affected Talvrin surface">
          <select id="affected-surface" defaultValue="not-sure" className={selectClass}>
            <option value="not-sure">Not sure</option>
            <option value="web">Web application</option>
            <option value="api">API</option>
            <option value="mobile">Mobile</option>
            <option value="infrastructure">Infrastructure</option>
            <option value="other">Other</option>
          </select>
        </Field>

        <Field id="observed-behavior" label="Observed behavior" badge="required">
          <textarea
            id="observed-behavior"
            required
            rows={3}
            placeholder="What happened."
            className={fieldClass}
          />
        </Field>

        <Field id="potential-impact" label="Potential impact" badge="optional">
          <textarea
            id="potential-impact"
            rows={2}
            placeholder="Plain-language impact — we assign severity internally, not you."
            className={fieldClass}
          />
        </Field>

        <Field
          id="your-contact"
          label="Your contact"
          badge="optional — only for acknowledgment/follow-up"
        >
          <input
            id="your-contact"
            type="text"
            placeholder="Email or other contact method"
            className={fieldClass}
          />
        </Field>
      </div>

      <div className="rounded-xl border border-ink/10 bg-surface px-[20.8px] py-[18.2px]">
        <p className="text-[13px] leading-[20.8px] text-muted">
          Attachments, proof-of-concept, and log files are not accepted here. That capability appears
          only once an approved secure-detail channel is verified — never through a general-purpose
          field.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-y-4 pt-1">
        <button
          type="submit"
          disabled
          aria-disabled="true"
          className="cursor-not-allowed rounded-lg bg-ink px-[26px] py-[15px] text-base font-semibold text-surface opacity-55"
        >
          Submit report
        </button>
      </div>

      <p className="text-[13px] leading-[20.8px] text-muted">
        Submission is disabled until an approved Security Intake Channel is connected for this build.
        Nothing typed above is saved, transmitted, or logged.
      </p>
    </form>
  );
}
