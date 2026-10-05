"use client";

import { ReactNode, useState } from "react";
import clsx from "clsx";
import { issues, useAccountRequest } from "./AccountRequestContext";

function RadioCard({
  name,
  value,
  checked,
  onChange,
  title,
  body,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  title: string;
  body?: string;
}) {
  return (
    <label
      className={clsx(
        "flex cursor-pointer items-start gap-3.5 rounded-[10px] border px-4 py-4 transition-colors",
        checked
          ? "border-white/60 bg-white/10"
          : "border-white/18 bg-white/4 hover:border-white/35 hover:bg-white/8"
      )}
    >
      {/* Figma: 16px white circle with a #757575 border, inset 5px/3px in a 24px slot.
          Native radios render in the browser's own blue, so the control is drawn by hand. */}
      <span className="flex w-6 shrink-0 pl-[5px] pr-[3px] pt-[3px]">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="size-4 cursor-pointer appearance-none rounded-full border border-[#757575] bg-white checked:bg-ink checked:shadow-[inset_0_0_0_4px_#fff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-base font-semibold text-white">{title}</span>
        {body && <span className="text-sm leading-5 text-white/70">{body}</span>}
      </span>
    </label>
  );
}

/** `media` renders between the issue list and the actions, matching the design's banner placement. */
export default function IssuePicker({ media }: { media?: ReactNode }) {
  const { issue, setIssue, canSignIn, setCanSignIn } = useAccountRequest();
  const [step, setStep] = useState<"issue" | "sign-in">("issue");

  const selectedIssue = issues.find((item) => item.id === issue);

  return (
    <div id="your-issue" className="scroll-mt-32">
      <fieldset>
        <legend className="text-base font-bold text-white">What do you need help with?</legend>
        <div className="mt-3 flex flex-col gap-3">
          {issues.map((item) => (
            <RadioCard
              key={item.id}
              name="account-issue"
              value={item.id}
              checked={issue === item.id}
              onChange={() => setIssue(item.id)}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
      </fieldset>

      {media}

      {step === "sign-in" && selectedIssue && (
        <fieldset className="mt-8">
          <legend className="text-base font-bold text-white">Can you currently sign in to Talvrin?</legend>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <RadioCard
              name="can-sign-in"
              value="yes"
              checked={canSignIn === "yes"}
              onChange={() => setCanSignIn("yes")}
              title="Yes, I can sign in"
            />
            <RadioCard
              name="can-sign-in"
              value="no"
              checked={canSignIn === "no"}
              onChange={() => setCanSignIn("no")}
              title="No, I can't sign in"
            />
          </div>

          {canSignIn && (
            <div aria-live="polite" className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <a
                href="#request"
                className="w-full rounded-lg bg-surface px-6 py-3.5 text-center sm:w-fit text-base font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Open the request form ↓
              </a>
              <p className="text-sm text-white/75">
                {selectedIssue.title} · {canSignIn === "yes" ? "Can sign in" : "Can't sign in"}
              </p>
            </div>
          )}
        </fieldset>
      )}

      {step === "issue" && (
        <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <button
            type="button"
            disabled={!issue}
            onClick={() => setStep("sign-in")}
            className="rounded-lg bg-surface px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Continue
          </button>
          <a
            href="#related"
            className="text-center text-sm font-semibold text-white/85 transition-colors hover:text-white sm:text-left"
          >
            Think your account may be compromised? Use the security path →
          </a>
        </div>
      )}
    </div>
  );
}
