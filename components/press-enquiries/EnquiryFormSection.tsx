"use client";

import { FormEvent, ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { situations } from "./data";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const fieldClass =
  "w-full rounded-lg border border-ink/20 bg-white px-3.5 py-3 text-base text-ink placeholder:text-neutral-500 focus:border-ink/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet/40";

// Only in-scope situations are offered here; the other-route ones point elsewhere.
const categories = situations.filter((situation) => !situation.otherRoute);

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
    // No press intake endpoint exists yet, so confirm locally rather than
    // implying the enquiry reached a reviewer.
    setSubmitted(true);
  }

  return (
    <section id="send-enquiry" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container className="grid max-w-[1132px] grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,720px)_minmax(0,340px)] lg:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Press Intake</SectionEyebrow>
            <SectionHeading>Tell us about your request.</SectionHeading>
            <p className="mt-4 max-w-[680px] text-base leading-6 text-muted">
              This form reaches a human reviewer, not a general inbox. Keep it concise — no attachments,
              credentials, or confidential material.
            </p>
          </Reveal>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
            <p className="text-xs text-muted">Fields marked with an asterisk (*) are required.</p>

            <Field id="press-category" label="Inquiry Category" required>
              <select id="press-category" name="category" required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Select the closest situation
                </option>
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.title}
                  </option>
                ))}
              </select>
            </Field>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field id="press-name" label="Full Name" required>
                <input id="press-name" name="name" type="text" required autoComplete="name" className={fieldClass} />
              </Field>
              <Field id="press-email" label="Professional Email" required>
                <input id="press-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
              </Field>
              <Field id="press-outlet" label="Publication / Outlet" required>
                <input
                  id="press-outlet"
                  name="outlet"
                  type="text"
                  required
                  placeholder="Independent or freelance welcome"
                  className={fieldClass}
                />
              </Field>
              <Field id="press-role" label="Role" optional>
                <input id="press-role" name="role" type="text" autoComplete="organization-title" className={fieldClass} />
              </Field>
              <Field id="press-region" label="Jurisdiction or Region" optional>
                <input id="press-region" name="region" type="text" className={fieldClass} />
              </Field>
              <Field id="press-deadline" label="Response Needed By" optional>
                <input id="press-deadline" name="deadline" type="date" className={fieldClass} />
              </Field>
            </div>

            <Field id="press-subject" label="Subject" required>
              <input id="press-subject" name="subject" type="text" required className={fieldClass} />
            </Field>

            <Field id="press-summary" label="Inquiry Summary" required>
              <textarea
                id="press-summary"
                name="summary"
                required
                rows={4}
                placeholder="What are you reporting on, and what would help you confirm it?"
                className={fieldClass}
              />
            </Field>

            <p className="-mt-2 text-xs text-muted">
              Do not include credentials, confidential sourcing, or unpublished data. This form does not
              accept attachments.
            </p>

            <label className="flex items-start gap-2.5 text-sm leading-5 text-ink">
              <input type="checkbox" name="embargoed" className="mt-0.5 size-4 shrink-0 accent-ink" />
              This request involves embargoed or time-sensitive information.
            </label>

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
              <p className="text-xs font-bold uppercase tracking-[0.6px] text-muted">
                Embargoes and AI, in plain terms
              </p>
              <p className="text-sm leading-6 text-ink">
                Flagging an embargo here does not bind Talvrin to it — a reviewer must confirm acceptance in
                writing before it&apos;s relied on.
              </p>
              <p className="text-sm leading-6 text-ink">
                AI may help organize and summarize public evidence on this site. It is never a spokesperson,
                and no AI output is an on-the-record company statement.
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-4 pt-1 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="rounded-lg bg-ink px-6 py-3.5 text-base font-semibold text-surface transition-colors hover:bg-ink-2"
              >
                Submit Press Enquiry
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
                This press intake route is not connected yet, so nothing was sent and no reference was
                issued. Press enquiry routing will be enabled before launch.
              </p>
            )}
          </form>
        </div>

        <Reveal
          delay={0.15}
          className="relative hidden aspect-[340/606] overflow-hidden rounded-2xl bg-white lg:mt-56 lg:block"
        >
          <Image
            src={`${IMG}/press-enquiries-form-conversation.png`}
            alt="Two professionals greeting each other in a bright office"
            fill
            sizes="340px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
