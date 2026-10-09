"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function SupportRequest() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect your support API here.
    console.log("Support request submitted");
  };

  return (
    <section
      id="support-request"
      className="
        talvrin-scroll-section
        w-full
        overflow-hidden
        bg-violet-50
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1102px]
          grid-cols-1
          gap-10
          px-5
          py-16

          sm:px-8
          sm:py-20

          lg:grid-cols-[minmax(0,1fr)_300px]
          lg:items-start
          lg:gap-8
          lg:px-8
          lg:py-24

          xl:grid-cols-[760px_320px]
          xl:gap-[22px]
          xl:px-0
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <div
          className="
            flex
            w-full
            max-w-[760px]
            flex-col
            items-start
            gap-3
          "
        >
          {/* Eyebrow */}
          <div className="flex w-full flex-col items-start">
            <span
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                leading-[14px]
                tracking-wide
                text-yellow-600
              "
            >
              AVAILABLE CHANNEL
            </span>
          </div>

          {/* Heading */}
          <div className="flex w-full flex-col items-start">
            <h2
              className="
                font-['IBM_Plex_Sans']
                text-[32px]
                font-bold
                leading-9
                tracking-[-0.02em]
                text-slate-900

                sm:text-4xl
                sm:leading-10
              "
            >
              Submit a support request.
            </h2>
          </div>

          {/* Intro */}
          <div className="flex w-full flex-col items-start pt-1">
            <p
              className="
                max-w-[760px]
                font-['IBM_Plex_Sans']
                text-base
                font-normal
                leading-7
                text-gray-600
              "
            >
              The form below is the only currently active support channel.
              Email, phone and live chat are not yet available.
            </p>
          </div>

          {/* =====================================================
              BEFORE YOU SUBMIT
          ====================================================== */}
          <div
            className="
              mt-0
              flex
              w-full
              flex-col
              items-start
              gap-3
              rounded-2xl
              border
              border-slate-900/10
              bg-white
              px-6
              pt-7
              pb-5
            "
          >
            {/* Heading */}
            <div className="flex w-full flex-col items-start">
              <span
                className="
                  font-['IBM_Plex_Sans']
                  text-xs
                  font-bold
                  uppercase
                  leading-4
                  tracking-wide
                  text-gray-600
                "
              >
                BEFORE YOU SUBMIT
              </span>
            </div>

            {/* Rules */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-2.5
              "
            >
              <WarningItem>
                Do not include passwords, API keys, access tokens, or payment
                details.
              </WarningItem>

              <WarningItem>
                Do not include portfolio, research, or other confidential
                content.
              </WarningItem>

              <WarningItem>
                Attachments are not currently supported. Do not paste links to
                files containing sensitive information.
              </WarningItem>

              <WarningItem>
                Submitting a request does not guarantee a response time — no
                service-level commitment is published yet.
              </WarningItem>
            </div>
          </div>

          {/* =====================================================
              FORM
          ====================================================== */}
          <form
            onSubmit={handleSubmit}
            className="
              flex
              w-full
              flex-col
              items-start
              gap-5
              pt-6
            "
          >
            {/* Required note */}
            <div className="flex w-full flex-col items-start">
              <p
                className="
                  font-['IBM_Plex_Sans']
                  text-xs
                  font-normal
                  leading-4
                  text-gray-600
                "
              >
                Fields marked with an asterisk (*) are required.
              </p>
            </div>

            {/* Issue Type */}
            <FormField label="Issue Type *">
              <select
                name="issueType"
                required
                defaultValue=""
                className="
                  h-12
                  w-full
                  appearance-none
                  rounded-lg
                  border
                  border-slate-900/20
                  bg-white
                  px-4
                  font-['IBM_Plex_Sans']
                  text-base
                  font-normal
                  leading-5
                  text-slate-900
                  outline-none
                  transition-colors
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-500/10
                "
              >
                <option value="" disabled>
                  Select an issue type
                </option>
                <option value="product-help">
                  Product Help
                </option>
                <option value="account-access">
                  Account or Access
                </option>
                <option value="evidence-source">
                  Evidence or Source
                </option>
                <option value="coverage">
                  Coverage
                </option>
                <option value="bug-error">
                  Bug or Error
                </option>
                <option value="security">
                  Security Concern
                </option>
                <option value="privacy">
                  Privacy or Data Rights
                </option>
                <option value="ai-behavior">
                  AI Behavior
                </option>
                <option value="commercial">
                  Commercial or Request Access
                </option>
                <option value="other">
                  Other
                </option>
              </select>
            </FormField>

            {/* Subject */}
            <FormField label="Subject *">
              <input
                type="text"
                name="subject"
                required
                className="
                  h-12
                  w-full
                  rounded-lg
                  border
                  border-slate-900/20
                  bg-white
                  px-4
                  font-['IBM_Plex_Sans']
                  text-base
                  font-normal
                  text-slate-900
                  outline-none
                  transition-colors
                  placeholder:text-gray-400
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-500/10
                "
              />
            </FormField>

            {/* Description */}
            <FormField label="Description *">
              <textarea
                name="description"
                required
                rows={5}
                className="
                  min-h-[128px]
                  w-full
                  resize-y
                  rounded-lg
                  border
                  border-slate-900/20
                  bg-white
                  px-4
                  py-3
                  font-['IBM_Plex_Sans']
                  text-base
                  font-normal
                  leading-6
                  text-slate-900
                  outline-none
                  transition-colors
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-500/10
                "
              />

              <p
                className="
                  pt-[4.8px]
                  font-['IBM_Plex_Sans']
                  text-xs
                  font-normal
                  leading-4
                  text-gray-600
                "
              >
                Describe what happened and what you expected, without
                sensitive or confidential content.
              </p>
            </FormField>

            {/* Name + Email */}
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-5

                sm:grid-cols-2
              "
            >
              <FormField label="Name *">
                <input
                  type="text"
                  name="name"
                  required
                  className="
                    h-12
                    w-full
                    rounded-lg
                    border
                    border-slate-900/20
                    bg-white
                    px-4
                    font-['IBM_Plex_Sans']
                    text-base
                    font-normal
                    text-slate-900
                    outline-none
                    transition-colors
                    focus:border-indigo-500
                    focus:ring-2
                    focus:ring-indigo-500/10
                  "
                />
              </FormField>

              <FormField label="Email *">
                <input
                  type="email"
                  name="email"
                  required
                  className="
                    h-12
                    w-full
                    rounded-lg
                    border
                    border-slate-900/20
                    bg-white
                    px-4
                    font-['IBM_Plex_Sans']
                    text-base
                    font-normal
                    text-slate-900
                    outline-none
                    transition-colors
                    focus:border-indigo-500
                    focus:ring-2
                    focus:ring-indigo-500/10
                  "
                />
              </FormField>
            </div>

            {/* Privacy checkbox */}
            <div
              className="
                flex
                w-full
                items-start
                gap-2.5
                pt-2
              "
            >
              <input
                id="privacy-consent"
                type="checkbox"
                name="privacyConsent"
                required
                className="
                  mt-[3px]
                  h-4
                  w-4
                  shrink-0
                  cursor-pointer
                  rounded
                  border
                  border-neutral-500
                  accent-indigo-500
                "
              />

              <label
                htmlFor="privacy-consent"
                className="
                  cursor-pointer
                  font-['IBM_Plex_Sans']
                  text-sm
                  font-normal
                  leading-5
                  text-slate-900
                "
              >
                I have read the{" "}
                <Link
                  href="/privacy-notice"
                  className="text-indigo-500 hover:underline"
                >
                  Privacy Notice
                </Link>{" "}
                and have not included sensitive or confidential information
                above. *
              </label>
            </div>

            {/* Actions */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-4
                pt-3

                sm:flex-row
                sm:items-center
                sm:gap-5
              "
            >
              <button
                type="submit"
                className="
                  inline-flex
                  min-h-[52px]
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  bg-slate-900
                  px-7
                  py-4
                  font-['IBM_Plex_Sans']
                  text-base
                  font-semibold
                  text-violet-50
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-slate-800
                  focus:outline-none
                  focus:ring-2
                  focus:ring-slate-900/30
                  focus:ring-offset-2
                  focus:ring-offset-violet-50

                  sm:w-auto
                "
              >
                Submit Request
              </button>

              <Link
                href="/privacy-notice"
                className="
                  font-['IBM_Plex_Sans']
                  text-sm
                  font-semibold
                  text-indigo-500
                  transition-opacity
                  hover:opacity-70
                "
              >
                Read the Privacy Notice →
              </Link>
            </div>
          </form>
        </div>

        {/* =====================================================
            RIGHT IMAGE
        ====================================================== */}
        <div
          className="
            relative
            order-first
            h-[320px]
            w-full
            overflow-hidden
            rounded-2xl

            lg:order-none
            lg:mt-[89.4px]
            lg:h-[461px]
            lg:w-[300px]
            xl:w-[320px]
          "
        >
          {/* 
            Replace this src with the actual support-request image
            from your public/images/resources/contact-support folder.
          */}
          <img
            src="/images/resources/contact-support/image2.png"
            alt="Talvrin support request"
            className="
              absolute
              h-full
              w-full
              object-cover

              lg:left-[-58px]
              lg:h-[460px]
              lg:w-[460px]
              lg:max-w-none
            "
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WARNING ITEM
   ========================================================= */

function WarningItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        flex
        w-full
        items-start
        gap-2.5
      "
    >
      <span
        aria-hidden="true"
        className="
          w-3
          shrink-0
          font-['IBM_Plex_Sans']
          text-base
          font-normal
          leading-6
          text-indigo-500
        "
      >
        —
      </span>

      <p
        className="
          flex-1
          font-['IBM_Plex_Sans']
          text-base
          font-normal
          leading-6
          text-slate-900
        "
      >
        {children}
      </p>
    </div>
  );
}

/* =========================================================
   FORM FIELD
   ========================================================= */

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        items-start
        gap-1.5
      "
    >
      <label
        className="
          w-full
          font-['IBM_Plex_Sans']
          text-sm
          font-semibold
          leading-5
          text-slate-900
        "
      >
        {label}
      </label>

      <div className="w-full">{children}</div>
    </div>
  );
}