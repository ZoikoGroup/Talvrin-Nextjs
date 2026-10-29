"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const fieldClass =
  "w-full rounded-[8px] border border-[rgba(23,19,53,0.2)] bg-white px-3.5 py-3 text-[15px] leading-tight text-[#171335] placeholder:text-[#757575] focus:border-[#171335]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7]/40";

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
      <label htmlFor={id} className="text-sm font-semibold text-[#171335]">
        {label}
        {required && " *"}
        {optional && <span className="font-normal text-[#5D5A72]"> (optional)</span>}
      </label>
      {children}
    </div>
  );
}

const areaOptions = [
  "Technology / Integration",
  "Research / Knowledge",
  "Strategic Ecosystem",
  "Institutional Collaboration",
  "Brand / Co-Marketing",
  "Other Strategic Partnership",
  "Enterprise Product Evaluation (Other Route)",
  "Media or Press Collaboration (Other Route)",
  "Employment or Recruiting (Other Route)",
];

export default function EnquiryFormSection({
  selectedCategory = "",
}: {
  selectedCategory?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState(selectedCategory);

  useEffect(() => {
    function onSelect(e: Event) {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        const match = areaOptions.find(
          (opt) =>
            opt.toLowerCase().includes(customEvent.detail.toLowerCase()) ||
            customEvent.detail.toLowerCase().includes(opt.toLowerCase())
        );
        if (match) {
          setCategory(match);
        } else {
          setCategory(customEvent.detail);
        }
      }
    }
    window.addEventListener("talvrin:select-category", onSelect);
    return () => window.removeEventListener("talvrin:select-category", onSelect);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="start-enquiry" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <Container className="max-w-[1320px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,720px)_minmax(0,1fr)] lg:gap-16">
          {/* Left Form Area */}
          <div>
            <Reveal>
              <SectionEyebrow tone="amber">PARTNERSHIP INTAKE</SectionEyebrow>
              <SectionHeading>Tell us about your proposal.</SectionHeading>
              <SectionLede>
                This form reaches a human reviewer, not a partner-sales queue. Keep it concise — minimal
                <br className="hidden md:inline" />
                fields now, a deeper conversation later if it&apos;s warranted.
              </SectionLede>
            </Reveal>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              <p className="text-[13px] text-[#5D5A72]">
                Fields marked with an asterisk (*) are required.
              </p>

              {/* Partnership Area Select */}
              <Field id="partnership-area" label="Partnership Area" required>
                <select
                  id="partnership-area"
                  name="partnershipArea"
                  required
                  value={category || ""}
                  onChange={(e) => setCategory(e.target.value)}
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Select the closest area
                  </option>
                  {areaOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Full Name & Work Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field id="partnership-name" label="Full Name" required>
                  <input
                    id="partnership-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={fieldClass}
                  />
                </Field>
                <Field id="partnership-email" label="Work Email" required>
                  <input
                    id="partnership-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={fieldClass}
                  />
                </Field>
              </div>

              {/* Organization & Role */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field id="partnership-organization" label="Organization" required>
                  <input
                    id="partnership-organization"
                    name="organization"
                    type="text"
                    required
                    autoComplete="organization"
                    className={fieldClass}
                  />
                </Field>
                <Field id="partnership-role" label="Role" optional>
                  <input
                    id="partnership-role"
                    name="role"
                    type="text"
                    autoComplete="organization-title"
                    className={fieldClass}
                  />
                </Field>
              </div>

              {/* Website & Region */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field id="partnership-website" label="Organization Website" optional>
                  <input
                    id="partnership-website"
                    name="website"
                    type="url"
                    placeholder="https://"
                    className={fieldClass}
                  />
                </Field>
                <Field id="partnership-region" label="Region(s)" optional>
                  <input
                    id="partnership-region"
                    name="region"
                    type="text"
                    className={fieldClass}
                  />
                </Field>
              </div>

              {/* Notice Box */}
              <div className="rounded-[12px] border border-[rgba(23,19,53,0.1)] bg-[#F6F5FB] p-[18px]">
                <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-[#5D5A72]">
                  BEFORE YOU WRITE YOUR PROPOSAL
                </p>
                <p className="mt-2 text-[14px] leading-[22.4px] text-[#171335]">
                  Do not include confidential or proprietary information, deal terms, credentials, or unpublished data unless
                  <br className="hidden md:inline" />
                  Talvrin has given you an approved secure process.
                </p>
              </div>

              {/* What are you proposing? */}
              <Field id="partnership-proposal" label="What are you proposing?" required>
                <textarea
                  id="partnership-proposal"
                  name="proposal"
                  required
                  rows={4}
                  placeholder="Describe the collaboration you have in mind and why it could be a fit."
                  className={fieldClass}
                />
              </Field>

              {/* Why Talvrin? */}
              <Field id="partnership-why" label="Why Talvrin?" optional>
                <textarea
                  id="partnership-why"
                  name="whyTalvrin"
                  rows={3}
                  placeholder="What makes this a strategic fit specifically with Talvrin?"
                  className={fieldClass}
                />
              </Field>

              {/* Target Users / Workflow */}
              <Field id="partnership-workflow" label="Target Users / Workflow" optional>
                <input
                  id="partnership-workflow"
                  name="targetWorkflow"
                  type="text"
                  placeholder="Who would this reach, and what workflow does it touch?"
                  className={fieldClass}
                />
              </Field>

              {/* Technical Integration Radio */}
              <fieldset className="flex flex-col gap-2 pt-1">
                <legend className="text-sm font-semibold text-[#171335]">
                  Does this need a technical integration?
                </legend>
                <div className="flex items-center gap-5 pt-1">
                  <label className="flex items-center gap-2 text-sm text-[#171335] cursor-pointer">
                    <input
                      type="radio"
                      name="needsIntegration"
                      value="yes"
                      className="size-4 accent-[#171335]"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-[#171335] cursor-pointer">
                    <input
                      type="radio"
                      name="needsIntegration"
                      value="no"
                      defaultChecked
                      className="size-4 accent-[#171335]"
                    />
                    <span>No</span>
                  </label>
                </div>
              </fieldset>

              {/* Data or Source Content Radio */}
              <fieldset className="flex flex-col gap-2 pt-1">
                <legend className="text-sm font-semibold text-[#171335]">
                  Does this involve supplying data or source content to Talvrin?
                </legend>
                <div className="flex items-center gap-5 pt-1">
                  <label className="flex items-center gap-2 text-sm text-[#171335] cursor-pointer">
                    <input
                      type="radio"
                      name="supplyingData"
                      value="yes"
                      className="size-4 accent-[#171335]"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-[#171335] cursor-pointer">
                    <input
                      type="radio"
                      name="supplyingData"
                      value="no"
                      defaultChecked
                      className="size-4 accent-[#171335]"
                    />
                    <span>No</span>
                  </label>
                </div>
              </fieldset>

              {/* Commercial Model & Timeline */}
              <div className="grid grid-cols-1 gap-5 pt-2 sm:grid-cols-2">
                <Field id="partnership-commercial" label="Commercial Model" optional>
                  <input
                    id="partnership-commercial"
                    name="commercialModel"
                    type="text"
                    placeholder="High level only — no confidential deal terms here"
                    className={fieldClass}
                  />
                </Field>
                <Field id="partnership-timeline" label="Timeline" optional>
                  <input
                    id="partnership-timeline"
                    name="timeline"
                    type="text"
                    placeholder="e.g. no fixed date, exploring now"
                    className={fieldClass}
                  />
                </Field>
              </div>

              {/* Checkbox 1: Occasional updates */}
              <label className="flex items-start gap-2.5 pt-2 text-[14px] leading-[21px] text-[#171335] cursor-pointer">
                <input
                  type="checkbox"
                  name="updates"
                  className="mt-1 size-4 shrink-0 rounded border-[rgba(23,19,53,0.3)] accent-[#171335]"
                />
                <span>
                  I&apos;d like occasional updates about Talvrin partnership opportunities.{" "}
                  <span className="text-[#5D5A72]">(optional)</span>
                </span>
              </label>

              {/* Checkbox 2: Privacy notice */}
              <label className="flex items-start gap-2.5 text-[14px] leading-[21px] text-[#171335] cursor-pointer">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-1 size-4 shrink-0 rounded border-[rgba(23,19,53,0.3)] accent-[#171335]"
                />
                <span>
                  I have read the{" "}
                  <Link href="/legal/privacy-notice" className="text-[#6C5CE7] underline hover:text-[#171335]">
                    Privacy Notice
                  </Link>
                  . *
                </span>
              </label>

              {/* Submit Buttons */}
              <div className="flex flex-col items-stretch gap-4 pt-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="rounded-[8px] bg-[#171335] px-[26px] py-[15px] text-base font-semibold text-[#F6F5FB] transition-colors hover:bg-[#24204A]"
                >
                  Submit Partnership Enquiry
                </button>
                <Link
                  href="/legal/privacy-notice"
                  className="text-sm font-semibold text-[#6C5CE7] transition-colors hover:text-[#171335]"
                >
                  Read the Privacy Notice →
                </Link>
              </div>

              {submitted && (
                <div role="status" className="rounded-[8px] border border-[rgba(23,19,53,0.1)] bg-[#F6F5FB] p-4 text-sm text-[#171335]">
                  Thank you for submitting your partnership enquiry. A confirmation reference has been recorded for reviewer evaluation.
                </div>
              )}
            </form>
          </div>

          {/* Right Image */}
          <Reveal delay={0.2} className="relative hidden w-full overflow-hidden rounded-[16px] lg:block">
            <div className="relative aspect-[510/1047] w-full max-w-[510px] overflow-hidden rounded-[16px] bg-[#EC5C5C]/10">
              <Image
                src={`${IMG}/partnerships-form.png`}
                alt="Partnership intake overview"
                fill
                sizes="(max-width: 1024px) 100vw, 510px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
