"use client";

import Link from "next/link";
import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "success";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "border-iris bg-iris text-white hover:bg-iris-soft hover:border-iris-soft shadow-[0_10px_30px_-16px_rgba(111,91,255,0.9)]",
  secondary:
    "border-as-line bg-as-panel/60 text-platinum hover:border-iris/60 hover:bg-as-panel-soft",
  ghost:
    "border-transparent bg-transparent text-haze hover:text-platinum hover:bg-white/[0.05]",
  danger:
    "border-danger/40 bg-danger/12 text-danger hover:bg-danger/20 hover:border-danger/60",
  success:
    "border-ok/40 bg-ok/12 text-ok hover:bg-ok/20 hover:border-ok/60",
};

const sizes: Record<Size, string> = {
  sm: "min-h-11 px-3.5 text-[13px] gap-1.5 rounded-lg",
  md: "min-h-11 px-4.5 text-sm gap-2 rounded-xl",
  lg: "min-h-12 px-6 text-[15px] gap-2 rounded-xl",
};

const base =
  "inline-flex items-center justify-center border font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-45";

export function Spinner({ label = "Loading" }: { label?: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-r-transparent"
      data-label={label}
    />
  );
}

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  className,
  children,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(base, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <Spinner /> : icon}
      {children}
    </button>
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon}
      {children}
    </Link>
  );
}

export function IconButton({
  label,
  className,
  children,
  ...props
}: ComponentProps<"button"> & { label: string; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={clsx(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-transparent text-haze transition-colors hover:border-as-line hover:bg-white/[0.05] hover:text-platinum",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
