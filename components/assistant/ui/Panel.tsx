import clsx from "clsx";
import type { ReactNode } from "react";

export function Panel({
  children,
  className,
  as: Tag = "section",
  variant = "default",
  busy = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "article" | "aside";
  variant?: "default" | "raised" | "flat";
  busy?: boolean;
  id?: string;
}) {
  return (
    <Tag
      id={id}
      aria-busy={busy || undefined}
      className={clsx(
        "rounded-2xl border",
        variant === "default" && "border-as-line bg-as-panel/70",
        variant === "raised" &&
          "border-as-line/80 bg-as-panel-soft/80 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)]",
        variant === "flat" && "border-as-line/60 bg-transparent",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function PageShell({
  children,
  className,
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  width?: "default" | "wide" | "narrow";
}) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-4 pb-20 pt-8 sm:px-6 lg:px-8",
        width === "default" && "max-w-[1280px]",
        width === "wide" && "max-w-[1440px]",
        width === "narrow" && "max-w-[900px]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lead,
  actions,
  meta,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-5 border-b border-as-line/70 pb-7 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-iris-soft">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-platinum sm:text-[2.5rem] sm:leading-[1.1]">
          {title}
        </h1>
        {lead ? (
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-haze">{lead}</p>
        ) : null}
        {meta ? <div className="mt-4">{meta}</div> : null}
      </div>
      {actions ? (
        <div className="flex flex-wrap items-center gap-2">{actions}</div>
      ) : null}
    </div>
  );
}

export function SectionHeader({
  title,
  description,
  actions,
  id,
  level = 2,
}: {
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  id?: string;
  level?: 2 | 3;
}) {
  const Tag = level === 2 ? "h2" : "h3";
  return (
    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        <Tag
          id={id}
          className={clsx(
            "font-semibold tracking-tight text-platinum",
            level === 2 ? "text-lg" : "text-base"
          )}
        >
          {title}
        </Tag>
        {description ? (
          <p className="mt-1.5 max-w-2xl text-sm leading-6 text-haze">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </div>
  );
}

export function Divider({ className }: { className?: string }) {
  return <hr className={clsx("border-as-line/70", className)} />;
}

export function KeyValue({
  items,
  columns = 2,
}: {
  items: { label: string; value: ReactNode; hint?: string }[];
  columns?: 1 | 2 | 3;
}) {
  return (
    <dl
      className={clsx(
        "grid gap-x-6 gap-y-4",
        columns === 1 && "grid-cols-1",
        columns === 2 && "grid-cols-1 sm:grid-cols-2",
        columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {items.map((item) => (
        <div key={item.label} className="min-w-0">
          <dt className="font-mono text-[12px] uppercase tracking-[0.14em] text-haze/80">
            {item.label}
          </dt>
          <dd className="mt-1 break-words text-sm text-platinum">
            {item.value}
            {item.hint ? (
              <span className="mt-0.5 block text-xs text-haze">{item.hint}</span>
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}
