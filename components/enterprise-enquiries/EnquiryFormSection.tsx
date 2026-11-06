"use client";

import { FormEvent, ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { teamFits } from "./data";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const fieldClass =
  "w-full rounded-lg border border-ink/20 bg-white px-3.5 py-3 text-base text-ink placeholder:text-neutral-500 focus:border-ink/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet/40";

function Field({
  id,
  label,
  required,
  optional,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
        {required && " *"}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children}
    </div>
  );
}

export default function EnquiryFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No enterprise intake endpoint exists yet, so confirm locally rather
    // than implying the enquiry reached a reviewer.
    setSubmitted(true);
  }

  return (
    <section id="start-enquiry" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container className="grid max-w-[1132px] grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,720px)_minmax(0,340px)] lg:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Enterprise Intake</SectionEyebrow>
            <SectionHeading>Tell us about your evaluation.</SectionHeading>
            <p className="mt-4 max-w-[680px] text-base leading-6 text-muted">
              This form reaches a human reviewer, not a sales queue. Keep it concise — minimal fields now, a
              deeper conversation later if it&apos;s warranted.
            </p>
          </Reveal>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
            <p className="text-xs text-muted">Fields marked with an asterisk (*) are required.</p>

            <Field id="enterprise-category" label="Inquiry Category" required>
              <select id="enterprise-category" name="category" required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Select the closest description
                </option>
                {teamFits.map((fit) => (
                  <option key={fit.value} value={fit.value}>
                    {fit.title}
                  </option>
                ))}
              </select>
            </Field>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field id="enterprise-name" label="Full Name" required>
                <input id="enterprise-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
              </Field>
              <Field id="enterprise-email" label="Work Email" required>
                <input id="enterprise-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
              </Field>
              <Field id="enterprise-organization" label="Organization" required>
                <input
                  id="enterprise-organization"
                  name="organization"
                  type="text"
                  required
                  autoComplete="organization"
                  className={fieldClass}
                />
              </Field>
              <Field id="enterprise-role" label="Role" optional>
                <input
                  id="enterprise-role"
                  name="role"
                  type="text"
                  autoComplete="organization-title"
                  className={fieldClass}
                />
              </Field>
              <Field id="enterprise-region" label="Jurisdiction or Region" optional>
                <input id="enterprise-region" name="region" type="text" className={fieldClass} />
              </Field>
            </div>

            <Field id="enterprise-subject" label="Subject" required>
              <input id="enterprise-subject" name="subject" type="text" required className={fieldClass} />
            </Field>

            <Field id="enterprise-summary" label="Inquiry Summary" required>
              <textarea
                id="enterprise-summary"
                name="summary"
                required
                rows={4}
                placeholder="What are you evaluating, and what would help your team decide?"
                className={fieldClass}
              />
            </Field>

            <p className="-mt-2 text-xs text-muted">
              Do not include credentials, confidential holdings, unpublished research, or proprietary data. This
              form does not accept attachments.
            </p>

            <label className="flex items-start gap-2.5 text-sm leading-5 text-ink">
              <input type="checkbox" name="privacy" required className="mt-0.5 size-4 shrink-0 accent-ink" />
              <span>
                I have read the{" "}
                <Link href="/legal/privacy-notice" className="text-accent-violet hover:underline">
                  Privacy Notice
                </Link>
                . *
              </span>
            </label>

            <div className="flex flex-col gap-2 rounded-xl border border-ink/10 bg-white px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.6px] text-muted">Why we ask</p>
              <p className="text-sm leading-6 text-ink">
                Category and summary let a reviewer route your enquiry to the right internal owner on the first
                pass. Name and email let us reply. Nothing here is used for procurement scoring, lead-quality
                analytics, or any automated decision.
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-4 pt-1 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="rounded-lg bg-ink px-6 py-3.5 text-base font-semibold text-surface transition-colors hover:bg-ink-2"
              >
                Submit Enterprise Enquiry
              </button>
              <Link
                href="/legal/privacy-notice"
                className="text-center text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
              >
                Read the Privacy Notice →
              </Link>
            </div>

            {submitted && (
              <p role="status" className="rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm text-ink">
                This enterprise intake route is not connected yet, so nothing was sent and no reference was
                issued. Enterprise enquiry routing will be enabled before launch.
              </p>
            )}
          </form>
        </div>

        <Reveal
          delay={0.15}
          className="relative hidden aspect-[340/780] overflow-hidden rounded-2xl bg-white lg:mt-56 lg:block"
        >
          <Image
            src={`${IMG}/enterprise-enquiries-form-discussion.png`}
            alt="A team discussing an evaluation around a table of laptops"
            fill
            sizes="340px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
