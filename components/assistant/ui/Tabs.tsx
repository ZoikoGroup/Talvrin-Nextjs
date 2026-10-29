"use client";

import clsx from "clsx";
import { useRef } from "react";

export interface TabItem {
  id: string;
  label: string;
  count?: number;
}

export function Tabs({
  items,
  active,
  onChange,
  label = "Sections",
  idBase,
  className,
}: {
  items: TabItem[];
  active: string;
  onChange: (id: string) => void;
  label?: string;
  idBase: string;
  className?: string;
}) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  function onKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    const { key } = event;
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(key)) return;
    event.preventDefault();
    let next = index;
    if (key === "ArrowRight") next = (index + 1) % items.length;
    if (key === "ArrowLeft") next = (index - 1 + items.length) % items.length;
    if (key === "Home") next = 0;
    if (key === "End") next = items.length - 1;
    const target = items[next];
    onChange(target.id);
    refs.current[target.id]?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label={label}
      className={clsx(
        "as-scroll flex gap-1 overflow-x-auto border-b border-as-line/80",
        className
      )}
    >
      {items.map((item, index) => {
        const selected = item.id === active;
        return (
          <button
            key={item.id}
            ref={(node) => {
              refs.current[item.id] = node;
            }}
            id={`${idBase}-tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={`${idBase}-panel-${item.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(item.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={clsx(
              "relative flex min-h-11 shrink-0 items-center gap-2 px-3.5 text-[13px] font-medium transition-colors",
              selected
                ? "text-platinum"
                : "text-haze hover:text-platinum"
            )}
          >
            {item.label}
            {typeof item.count === "number" ? (
              <span className="rounded-full border border-as-line bg-midnight/60 px-1.5 py-0.5 font-mono text-[12px] text-haze">
                {item.count}
              </span>
            ) : null}
            {selected ? (
              <span
                aria-hidden="true"
                className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-iris"
              />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export function TabPanel({
  idBase,
  active,
  children,
  className,
}: {
  idBase: string;
  active: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role="tabpanel"
      id={`${idBase}-panel-${active}`}
      aria-labelledby={`${idBase}-tab-${active}`}
      className={className}
      tabIndex={0}
    >
      {children}
    </div>
  );
}
