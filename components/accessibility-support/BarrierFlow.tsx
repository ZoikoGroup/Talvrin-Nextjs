"use client";

import React, { useId, useRef, useState } from "react";
import clsx from "clsx";
import { BLOCKING_DATA, IMG, REPORT_DATA, ROUTES, SECTION_IDS } from "./accessibility-support-data";
import { CONTAINER, Eyebrow, Photo, SectionTitle } from "./shared";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ReportForm({ categoryTitle, onChangeCategory }: { categoryTitle: string; onChangeCategory: () => void }) {
  const f = REPORT_DATA.form;
  const uid = useId();
  const [task, setTask] = useState("");
  const [barrier, setBarrier] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ barrier?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!barrier.trim()) next.barrier = f.errorBarrier;
    if (email.trim() && !EMAIL_PATTERN.test(email.trim())) next.email = f.errorEmail;
    setErrors(next);
    // Submission backend is not connected yet; be explicit that nothing was sent.
    setSubmitted(Object.keys(next).length === 0);
  };

  const field =
    "w-full rounded-lg border bg-white px-4 py-3 text-base text-slate-900 placeholder:text-gray-500 outline-none transition-colors focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <span className="font-semibold text-gray-600">{f.categoryLabel}:</span>
        <span className="font-semibold text-slate-900">{categoryTitle}</span>
        <button
          type="button"
          onClick={onChangeCategory}
          className="font-semibold text-indigo-600 hover:underline underline-offset-4 cursor-pointer"
        >
          {f.changeCategory}
        </button>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${uid}-task`} className="text-base font-semibold text-slate-900">
          {f.taskLabel}
        </label>
        <p id={`${uid}-task-hint`} className="text-sm text-gray-600">
          {f.taskHint}
        </p>
        <textarea
          id={`${uid}-task`}
          rows={2}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          aria-describedby={`${uid}-task-hint`}
          className={clsx(field, "border-slate-900/20 resize-y")}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${uid}-barrier`} className="text-base font-semibold text-slate-900">
          {f.barrierLabel}
        </label>
        <p id={`${uid}-barrier-hint`} className="text-sm text-gray-600">
          {f.barrierHint}
        </p>
        <textarea
          id={`${uid}-barrier`}
          rows={4}
          required
          value={barrier}
          onChange={(e) => {
            setBarrier(e.target.value);
            setSubmitted(false);
          }}
          aria-invalid={errors.barrier ? true : undefined}
          aria-describedby={`${uid}-barrier-hint${errors.barrier ? ` ${uid}-barrier-error` : ""}`}
          className={clsx(field, "resize-y", errors.barrier ? "border-red-600" : "border-slate-900/20")}
        />
        {errors.barrier && (
          <p id={`${uid}-barrier-error`} className="text-sm font-semibold text-red-700">
            {errors.barrier}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${uid}-email`} className="text-base font-semibold text-slate-900">
          {f.emailLabel}
        </label>
        <p id={`${uid}-email-hint`} className="text-sm text-gray-600">
          {f.emailHint}
        </p>
        <input
          id={`${uid}-email`}
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={`${uid}-email-hint${errors.email ? ` ${uid}-email-error` : ""}`}
          className={clsx(field, "max-w-md", errors.email ? "border-red-600" : "border-slate-900/20")}
        />
        {errors.email && (
          <p id={`${uid}-email-error`} className="text-sm font-semibold text-red-700">
            {errors.email}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="self-start rounded-lg bg-slate-900 px-6 py-3.5 text-base font-semibold text-violet-50 transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 cursor-pointer"
      >
        {f.submit}
      </button>

      <div aria-live="polite">
        {submitted && (
          <p className="rounded-lg border border-yellow-600/30 bg-yellow-600/10 px-4 py-3 text-sm text-yellow-900">
            {f.notConnected}
          </p>
        )}
      </div>
    </form>
  );
}

export default function BarrierFlow() {
  const [selected, setSelected] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState<string | null>(null);
  const reportRef = useRef<HTMLHeadingElement>(null);
  const groupRef = useRef<HTMLFieldSetElement>(null);

  const confirmedCategory = BLOCKING_DATA.categories.find((c) => c.id === confirmed);

  const handleContinue = () => {
    if (!selected) return;
    setConfirmed(selected);
    requestAnimationFrame(() => {
      reportRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      reportRef.current?.focus({ preventScroll: true });
    });
  };

  const handleChangeCategory = () => {
    groupRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    groupRef.current?.querySelector<HTMLInputElement>("input:checked, input")?.focus({ preventScroll: true });
  };

  return (
    <>
      <section id={SECTION_IDS.blocking} className="w-full scroll-mt-32 bg-white">
        <div className={`${CONTAINER} py-20 sm:py-24 flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-8`}>
          <div className="flex-1 min-w-0 flex flex-col gap-3">
            <Eyebrow tone="indigo">{BLOCKING_DATA.eyebrow}</Eyebrow>
            <SectionTitle id="blocking-title">{BLOCKING_DATA.title}</SectionTitle>
            <p id="blocking-desc" className="max-w-[680px] text-base leading-6 text-gray-600">
              {BLOCKING_DATA.description}
            </p>

            <fieldset ref={groupRef} aria-labelledby="blocking-title" aria-describedby="blocking-desc" className="scroll-mt-32 pt-5">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {BLOCKING_DATA.categories.map((c) => {
                  const checked = selected === c.id;
                  return (
                    <label
                      key={c.id}
                      className={clsx(
                        "relative rounded-[10px] border bg-white px-4 py-4 flex items-start gap-3 cursor-pointer transition-colors",
                        "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-indigo-600 has-[:focus-visible]:ring-offset-2",
                        checked ? "border-indigo-600 bg-indigo-50/60" : "border-slate-900/10 hover:border-slate-900/30"
                      )}
                    >
                      <input
                        type="radio"
                        name="barrier-category"
                        value={c.id}
                        checked={checked}
                        onChange={() => setSelected(c.id)}
                        className="mt-1 size-4 shrink-0 accent-indigo-600 cursor-pointer"
                      />
                      <span className="flex flex-col gap-0.5">
                        <span className="text-base font-semibold text-slate-900">{c.title}</span>
                        <span className="text-xs leading-5 text-gray-600">{c.description}</span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="pt-3 pb-7">
              <button
                type="button"
                onClick={handleContinue}
                disabled={!selected}
                className="rounded-lg bg-slate-900 px-6 py-3.5 text-base font-semibold text-violet-50 transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 cursor-pointer"
              >
                {BLOCKING_DATA.continueLabel}
              </button>
            </div>

            <div className="border-t border-slate-900/10 pt-6" aria-live="polite">
              {confirmedCategory ? (
                <div className="flex flex-col items-center gap-3 text-center">
                  <p className="text-base leading-6 text-slate-900">
                    {confirmed === "authentication" ? BLOCKING_DATA.nextStep.authentication : BLOCKING_DATA.nextStep.default}
                  </p>
                  {confirmed === "authentication" && (
                    <a href={ROUTES.accountSupport} className="text-sm font-semibold text-indigo-600 hover:underline underline-offset-4">
                      Go to Account Support →
                    </a>
                  )}
                </div>
              ) : (
                <p className="text-center text-base leading-6 text-gray-600">{BLOCKING_DATA.hint}</p>
              )}
            </div>
          </div>

          <Photo
            src={IMG.blocking}
            sizes="(min-width: 1024px) 384px, 100vw"
            className="hidden lg:block w-[300px] xl:w-96 h-[718px] shrink-0 mt-3"
          />
        </div>
      </section>

      <section id={SECTION_IDS.report} className="w-full scroll-mt-32 bg-white">
        <div className={`${CONTAINER} pb-20 sm:pb-24 pt-4 lg:pt-8 flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16 xl:justify-between`}>
          <div className="flex-1 min-w-0 max-w-[760px] flex flex-col gap-3">
            <Eyebrow>{REPORT_DATA.eyebrow}</Eyebrow>
            <h2 ref={reportRef} tabIndex={-1} className="text-3xl sm:text-4xl font-bold leading-tight text-slate-900 outline-none scroll-mt-32">
              {REPORT_DATA.title}
            </h2>
            <p className="pt-1 text-base leading-7 text-gray-600">{REPORT_DATA.description}</p>

            <div className="mt-2 rounded-2xl border border-slate-900/10 bg-violet-50 px-5 sm:px-6 py-5 sm:py-6 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-600">{REPORT_DATA.neverLabel}</span>
              <ul className="flex flex-col gap-2.5">
                {REPORT_DATA.never.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base leading-6 text-slate-900">
                    <span className="text-indigo-600" aria-hidden="true">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              {confirmedCategory ? (
                <ReportForm categoryTitle={confirmedCategory.title} onChangeCategory={handleChangeCategory} />
              ) : (
                <p className="text-base leading-6 text-gray-600">{REPORT_DATA.locked}</p>
              )}
            </div>
          </div>

          <Photo
            src={IMG.report}
            sizes="(min-width: 1024px) 384px, 100vw"
            className="w-full max-w-96 aspect-square mx-auto lg:mx-0 shrink-0 lg:w-[300px] xl:w-96"
          />
        </div>
      </section>
    </>
  );
}
