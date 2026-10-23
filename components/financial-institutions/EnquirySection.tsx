"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const interests = [
  "Institutional research evaluation",
  "Evidence and source methodology",
  "Coverage and data rights",
  "Security and governance review",
  "API, SSO or integrations",
  "Commercial terms",
  "Other",
];

const teamTypes = [
  "Sell-side / research",
  "Bank treasury / markets research",
  "Risk research",
  "Credit research",
  "Research operations / platform",
  "Other",
];

const fieldClasses =
  "mt-1.5 w-full rounded-lg border border-ink/20 bg-white px-3.5 py-3 text-base text-ink placeholder:text-slate-500 focus:border-ink/40 focus:outline-none focus:ring-2 focus:ring-accent-violet/30";

const labelClasses = "block text-sm font-semibold text-ink";

export default function EnquirySection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No enquiry endpoint exists yet, so confirm locally rather than implying it was sent.
    setSubmitted(true);
  }

  return (
    <section id="enquiry" className="scroll-mt-24 border-t border-ink/10 bg-white py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,720px)_minmax(0,412px)] lg:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Request an institutional discussion</SectionEyebrow>
            <SectionHeading>Tell us about your research requirements.</SectionHeading>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Qualification, legal review and service scope are assessed case by case. Submitting
              an enquiry does not guarantee a response, eligibility or availability.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <p className="text-xs text-slate-600">Fields marked with an asterisk (*) are required.</p>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-5">
              <div>
                <label htmlFor="fi-email" className={labelClasses}>
                  Work email *
                </label>
                <input
                  id="fi-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={fieldClasses}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fi-org" className={labelClasses}>
                    Organization *
                  </label>
                  <input
                    id="fi-org"
                    name="organization"
                    required
                    autoComplete="organization"
                    className={fieldClasses}
                  />
                </div>
                <div>
                  <label htmlFor="fi-name" className={labelClasses}>
                    Full name *
                  </label>
                  <input id="fi-name" name="name" required autoComplete="name" className={fieldClasses} />
                </div>

                <div>
                  <label htmlFor="fi-interest" className={labelClasses}>
                    Primary interest *
                  </label>
                  <select
                    id="fi-interest"
                    name="interest"
                    required
                    defaultValue=""
                    className={fieldClasses}
                  >
                    <option value="" disabled>
                      Select an interest
                    </option>
                    {interests.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="fi-country" className={labelClasses}>
                    Country / region *
                  </label>
                  <input
                    id="fi-country"
                    name="country"
                    required
                    autoComplete="country-name"
                    className={fieldClasses}
                  />
                </div>

                <div>
                  <label htmlFor="fi-team-type" className={labelClasses}>
                    Team type
                  </label>
                  <select id="fi-team-type" name="teamType" defaultValue="" className={fieldClasses}>
                    <option value="">Select a team type</option>
                    {teamTypes.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="fi-team-size" className={labelClasses}>
                    Estimated team size
                  </label>
                  <input
                    id="fi-team-size"
                    name="teamSize"
                    inputMode="numeric"
                    placeholder="Optional"
                    className={fieldClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="fi-message" className={labelClasses}>
                  Message
                </label>
                <textarea
                  id="fi-message"
                  name="message"
                  rows={4}
                  placeholder="High-level summary only. No secrets."
                  aria-describedby="fi-message-hint"
                  className={`${fieldClasses} resize-y`}
                />
                <p id="fi-message-hint" className="mt-1.5 text-xs text-slate-600">
                  Do not include regulated customer records, investment positions, credentials or
                  other secrets.
                </p>
              </div>

              <p className="text-xs text-slate-600">
                We use these details to respond to your enquiry. See the{" "}
                <Link href="/legal/privacy-notice" className="text-accent-violet hover:text-ink">
                  privacy notice
                </Link>{" "}
                and{" "}
                <Link
                  href="/legal/data-processing-addendum"
                  className="text-accent-violet hover:text-ink"
                >
                  data processing notice
                </Link>
                .
              </p>

              <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-5">
                <button
                  type="submit"
                  className="rounded-lg bg-ink px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-ink-2"
                >
                  Submit enquiry
                </button>
                <p className="text-xs text-slate-600">
                  No automatic claim of qualification, entitlement or SLA.
                </p>
              </div>

              {submitted && (
                <p
                  role="status"
                  className="rounded-lg border border-ink/10 bg-surface px-4 py-3 text-sm text-ink"
                >
                  This enquiry route is not connected yet, so nothing was sent. Enquiry routing will
                  be enabled before launch.
                </p>
              )}
            </form>
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="relative hidden aspect-[412/889] w-full overflow-hidden rounded-2xl lg:block"
        >
          <Image
            src={`${IMG}/fi-enquiry-contract-review.webp`}
            alt="Two colleagues reviewing contract documents over coffee"
            fill
            sizes="412px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
