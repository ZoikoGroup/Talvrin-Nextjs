"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const enquiryTypes = [
  "Interview or speaker request",
  "Comment or statement",
  "Product or research briefing",
  "Asset or logo permission",
  "Correction or clarification",
  "Other media enquiry",
];

const fieldClasses =
  "w-full rounded-lg border border-ink/20 bg-surface px-3.5 py-3 text-base text-ink placeholder:text-slate-500 focus:border-ink/40 focus:outline-none focus:ring-2 focus:ring-accent-violet/30";

const labelClasses = "block text-sm font-semibold text-ink";

export default function MediaEnquirySection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No enquiry endpoint exists yet, so the form confirms locally rather
    // than implying a request was routed to anyone.
    setSubmitted(true);
  }

  return (
    <section id="media-enquiry" className="scroll-mt-32 bg-white py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,760px)_minmax(0,494px)] lg:gap-12">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Media Enquiries</SectionEyebrow>
            <SectionHeading>Reach the right owner for a professional media request.</SectionHeading>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Use this route for a professional media request about Talvrin. Provide the
              publication, program, deadline, time zone, and specific topic so the request can be
              routed appropriately.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Submission does not guarantee a response, interview, comment, or asset permission. Do
              not submit confidential market information, credentials, or unnecessary sensitive
              personal data.
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
                <select id="enquiry-type" name="enquiryType" required defaultValue="" className={`${fieldClasses} mt-1.5`}>
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
                    Professional Email *
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

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <div>
                  <label htmlFor="outlet" className={labelClasses}>
                    Outlet or Organization *
                  </label>
                  <input
                    id="outlet"
                    name="outlet"
                    required
                    placeholder="Independent or freelance welcome"
                    className={`${fieldClasses} mt-1.5`}
                  />
                </div>
                <div>
                  <label htmlFor="role" className={labelClasses}>
                    Role
                  </label>
                  <input id="role" name="role" className={`${fieldClasses} mt-1.5`} />
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

              {/* Date and time pair up first; the zone only joins them once there is room. */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
                <div>
                  <label htmlFor="deadline-date" className={labelClasses}>
                    Deadline Date
                  </label>
                  <input
                    id="deadline-date"
                    name="deadlineDate"
                    type="date"
                    className={`${fieldClasses} mt-1.5`}
                  />
                </div>
                <div>
                  <label htmlFor="deadline-time" className={labelClasses}>
                    Deadline Time
                  </label>
                  <input
                    id="deadline-time"
                    name="deadlineTime"
                    type="time"
                    className={`${fieldClasses} mt-1.5`}
                  />
                </div>
                <div>
                  <label htmlFor="time-zone" className={labelClasses}>
                    Time Zone
                  </label>
                  <input
                    id="time-zone"
                    name="timeZone"
                    placeholder="e.g. ET, GMT"
                    className={`${fieldClasses} mt-1.5`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="details" className={labelClasses}>
                  Request Details *
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={5}
                  className={`${fieldClasses} mt-1.5 resize-y`}
                />
              </div>

              <div>
                <label htmlFor="related-url" className={labelClasses}>
                  Related URL
                </label>
                <input
                  id="related-url"
                  name="relatedUrl"
                  type="url"
                  placeholder="https://"
                  className={`${fieldClasses} mt-1.5`}
                />
              </div>

              <div>
                <label htmlFor="attachment" className={labelClasses}>
                  Attachment (optional)
                </label>
                <input
                  id="attachment"
                  name="attachment"
                  type="file"
                  className="mt-1.5 block w-full text-sm text-slate-600 file:mr-3 file:rounded-md file:border file:border-ink/20 file:bg-surface file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-ink hover:file:bg-white"
                />
                <p className="mt-1.5 text-xs text-slate-600">
                  Do not attach confidential or sensitive files.
                </p>
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
                  name="pressUpdates"
                  className="mt-0.5 size-4 shrink-0 rounded-sm border-slate-500 accent-ink"
                />
                <span>Send me occasional Talvrin press updates (optional).</span>
              </label>

              <div className="mt-4 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-5">
                <button
                  type="submit"
                  className="rounded-lg bg-ink px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-ink-2"
                >
                  Submit Media Enquiry
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
                  className="rounded-lg border border-ink/10 bg-surface px-4 py-3 text-sm text-ink"
                >
                  This enquiry route is not connected yet, so nothing was sent. Media enquiry
                  routing will be enabled before launch.
                </p>
              )}
            </form>
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="relative aspect-[494/560] w-full overflow-hidden rounded-2xl lg:sticky lg:top-32 lg:aspect-[494/771]"
        >
          <Image
            src="/images/company/press-media/press-media-enquiry-meeting.webp"
            alt="Two colleagues meeting across a desk in an office"
            fill
            sizes="(min-width: 1024px) 494px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
