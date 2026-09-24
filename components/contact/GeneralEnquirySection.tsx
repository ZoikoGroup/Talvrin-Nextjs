"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const enquiryTypes = [
  "Product question",
  "Organizational evaluation",
  "Commercial conversation",
  "Partnership",
  "Support question",
  "Other general enquiry",
];

const fieldClasses =
  "w-full rounded-lg border border-ink/20 bg-white px-3.5 py-3 text-base text-ink placeholder:text-slate-500 focus:border-ink/40 focus:outline-none focus:ring-2 focus:ring-accent-violet/30";

const labelClasses = "block text-sm font-semibold text-ink";

export default function GeneralEnquirySection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No enquiry endpoint exists yet, so the form confirms locally rather than
    // implying the message reached a team.
    setSubmitted(true);
  }

  return (
    <section id="general-enquiry" className="scroll-mt-32 bg-surface py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,760px)_minmax(0,494px)] lg:gap-12">
        <div>
          <Reveal>
            <SectionEyebrow tone="violet">General and Business Enquiries</SectionEyebrow>
            <SectionHeading>Tell us what your question is about.</SectionHeading>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Provide only the information needed to understand and route it. Submitting an enquiry
              does not guarantee a response, meeting, product access, commercial offer, or timeline.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <p className="text-xs text-slate-600">
              Fields marked with an asterisk (*) are required.
            </p>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
              <div>
                <label htmlFor="enquiry-type" className={labelClasses}>
                  Enquiry Type *
                </label>
                <select
                  id="enquiry-type"
                  name="enquiryType"
                  required
                  defaultValue=""
                  className={`${fieldClasses} mt-1.5`}
                >
                  <option value="" disabled>
                    Select an enquiry type
                  </option>
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Name *
                  </label>
                  <input id="name" name="name" required autoComplete="name" className={`${fieldClasses} mt-1.5`} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={`${fieldClasses} mt-1.5`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className={labelClasses}>
                  Country or Region
                </label>
                <input id="country" name="country" className={`${fieldClasses} mt-1.5`} />
              </div>

              <div>
                <label htmlFor="subject" className={labelClasses}>
                  Subject *
                </label>
                <input id="subject" name="subject" required className={`${fieldClasses} mt-1.5`} />
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={`${fieldClasses} mt-1.5 resize-y`}
                />
                <p className="mt-1.5 text-xs text-slate-600">
                  Do not include passwords, credentials, financial account data, or confidential
                  market information.
                </p>
              </div>

              <div>
                <label htmlFor="public-url" className={labelClasses}>
                  Public URL (optional)
                </label>
                <input
                  id="public-url"
                  name="publicUrl"
                  type="url"
                  placeholder="https://"
                  className={`${fieldClasses} mt-1.5`}
                />
              </div>

              <label className="mt-2 flex items-start gap-2.5 text-sm leading-5 text-ink">
                <input
                  type="checkbox"
                  name="privacyAccepted"
                  required
                  className="mt-0.5 size-4 shrink-0 rounded-sm border-slate-500 accent-ink"
                />
                <span>
                  I have read the{" "}
                  <Link href="/trust/privacy" className="text-accent-violet hover:text-ink">
                    Privacy Notice
                  </Link>
                  . *
                </span>
              </label>

              <label className="flex items-start gap-2.5 text-sm leading-5 text-slate-600">
                <input
                  type="checkbox"
                  name="updates"
                  className="mt-0.5 size-4 shrink-0 rounded-sm border-slate-500 accent-ink"
                />
                <span>Send me occasional Talvrin updates (optional).</span>
              </label>

              <div className="mt-4 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-5">
                <button
                  type="submit"
                  className="rounded-lg bg-ink px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-ink-2"
                >
                  Submit Enquiry
                </button>
                <Link
                  href="/trust/privacy"
                  className="text-center text-sm font-semibold text-accent-violet transition-colors hover:text-ink sm:text-left"
                >
                  Read the Privacy Notice →
                </Link>
              </div>

              {submitted && (
                <p
                  role="status"
                  className="rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm text-ink"
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
          className="relative aspect-[494/450] w-full overflow-hidden rounded-2xl lg:sticky lg:top-32 lg:aspect-[494/608]"
        >
          <Image
            src="/images/company/contact/contact-enquiry-workshop.webp"
            alt="Team collaborating around a table in a workshop session"
            fill
            sizes="(min-width: 1024px) 494px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
