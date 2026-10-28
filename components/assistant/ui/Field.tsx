"use client";

import {
  forwardRef,
  useId,
  type ComponentProps,
  type ReactNode,
} from "react";
import clsx from "clsx";
import { AlertCircle, Check } from "lucide-react";

export function Field({
  id,
  label,
  hint,
  error,
  required,
  optional,
  children,
  className,
  counter,
}: {
  id: string;
  label: ReactNode;
  hint?: ReactNode;
  error?: string;
  required?: boolean;
  optional?: boolean;
  children: ReactNode;
  className?: string;
  counter?: ReactNode;
}) {
  return (
    <div className={clsx("min-w-0", className)}>
      <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-2">
        <label
          htmlFor={id}
          className="text-[13px] font-semibold text-platinum"
        >
          {label}
          {required ? (
            <span className="ml-1.5 font-mono text-[12px] uppercase tracking-wider text-iris-soft">
              Required
            </span>
          ) : null}
          {optional ? (
            <span className="ml-1.5 font-mono text-[12px] uppercase tracking-wider text-haze">
              Optional
            </span>
          ) : null}
        </label>
        {counter ? (
          <span className="font-mono text-[11px] text-haze">{counter}</span>
        ) : null}
      </div>
      {hint ? (
        <p id={`${id}-hint`} className="mb-2 text-xs leading-5 text-haze">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          className="mt-1.5 flex items-start gap-1.5 text-xs text-danger"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

const control =
  "w-full rounded-xl border border-as-line bg-midnight-soft/80 px-3.5 text-sm text-platinum placeholder:text-haze/55 transition-colors hover:border-as-line/80 focus:border-iris/70 focus:outline-none focus:ring-2 focus:ring-iris/25 disabled:cursor-not-allowed disabled:opacity-50";

export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  function Input({ className, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={clsx(control, "h-11", className)}
        {...props}
      />
    );
  }
);

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  ComponentProps<"textarea">
>(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={clsx(control, "as-scroll min-h-[120px] py-3 leading-6", className)}
      {...props}
    />
  );
});

export const Select = forwardRef<HTMLSelectElement, ComponentProps<"select">>(
  function Select({ className, children, ...props }, ref) {
    return (
      <select
        ref={ref}
        className={clsx(control, "h-11 appearance-none pr-9", className)}
        {...props}
      >
        {children}
      </select>
    );
  }
);

export function Checkbox({
  id,
  label,
  description,
  checked,
  onChange,
  disabled,
  error,
}: {
  id?: string;
  label: ReactNode;
  description?: ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  error?: string;
}) {
  const generated = useId();
  const inputId = id ?? generated;
  return (
    <div>
      <div className="flex items-start gap-3">
        <span className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
          <input
            id={inputId}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={(event) => onChange(event.target.checked)}
            className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-as-line bg-midnight-soft checked:border-iris checked:bg-iris focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iris disabled:cursor-not-allowed disabled:opacity-50"
            aria-describedby={description ? `${inputId}-desc` : undefined}
            aria-invalid={error ? true : undefined}
          />
          <Check
            aria-hidden="true"
            className="pointer-events-none absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100"
          />
        </span>
        <div className="min-w-0">
          <label
            htmlFor={inputId}
            className="cursor-pointer text-[13px] font-medium leading-5 text-platinum"
          >
            {label}
          </label>
          {description ? (
            <p id={`${inputId}-desc`} className="mt-0.5 text-xs leading-5 text-haze">
              {description}
            </p>
          ) : null}
          {error ? <p className="mt-1 text-xs text-danger">{error}</p> : null}
        </div>
      </div>
    </div>
  );
}

export function Toggle({
  checked,
  onChange,
  label,
  description,
  disabled,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  label: string;
  description?: string;
  disabled?: boolean;
}) {
  const descriptionId = useId();
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <div>
        <p className="text-[13px] font-medium text-platinum">{label}</p>
        {description ? (
          <p id={descriptionId} className="mt-0.5 text-xs leading-5 text-haze">
            {description}
          </p>
        ) : null}
      </div>
      {/* 44 x 44 CSS px hit area around the 24 px visual track (WF-07 §14). */}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        aria-describedby={description ? descriptionId : undefined}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={clsx(
          "group -my-2.5 inline-flex h-11 min-w-11 shrink-0 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iris",
          disabled && "cursor-not-allowed opacity-50"
        )}
      >
        <span
          aria-hidden="true"
          className={clsx(
            "relative h-6 w-11 rounded-full border transition-colors",
            checked
              ? "border-iris bg-iris"
              : "border-as-line bg-midnight-soft"
          )}
        >
          <span
            className={clsx(
              "absolute top-0.5 h-4.5 w-4.5 rounded-full bg-white shadow transition-transform",
              checked ? "translate-x-[21px]" : "translate-x-0.5"
            )}
          />
        </span>
      </button>
    </div>
  );
}

export function FormAlert({
  tone = "danger",
  title,
  children,
}: {
  tone?: "danger" | "warn" | "info";
  title: string;
  children?: ReactNode;
}) {
  return (
    <div
      role="alert"
      className={clsx(
        "rounded-xl border px-4 py-3 text-sm",
        tone === "danger" && "border-danger/40 bg-danger/10 text-danger",
        tone === "warn" && "border-warn/40 bg-warn/10 text-warn",
        tone === "info" && "border-info/35 bg-info/10 text-info"
      )}
    >
      <p className="font-semibold">{title}</p>
      {children ? (
        <div className="mt-1 text-[13px] leading-6 opacity-90">{children}</div>
      ) : null}
    </div>
  );
}
