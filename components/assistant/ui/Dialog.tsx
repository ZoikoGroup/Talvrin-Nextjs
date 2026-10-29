"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { X } from "lucide-react";
import { IconButton } from "./Button";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Dialog({
  open,
  onClose,
  title,
  eyebrow,
  description,
  children,
  footer,
  width = "lg",
  label,
  closeLabel = "Close panel",
}: {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  width?: "md" | "lg" | "xl" | "inspector";
  label?: string;
  /** Accessible name of the close button (WF-03 mobile 01). */
  closeLabel?: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const closeRef = useRef(onClose);

  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    const first = panel?.querySelector<HTMLElement>(FOCUSABLE);
    (first ?? panel)?.focus();

    // Background content is inert while the dialog is open (WF-03 §5.1).
    const inerted: HTMLElement[] = [];
    for (const child of Array.from(document.body.children)) {
      if (
        child instanceof HTMLElement &&
        child !== rootRef.current &&
        !child.contains(rootRef.current) &&
        !child.hasAttribute("inert")
      ) {
        child.setAttribute("inert", "");
        inerted.push(child);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current();
        return;
      }
      if (event.key !== "Tab") return;
      const current = panelRef.current;
      if (!current) return;
      const items = Array.from(
        current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter(
        (element) =>
          element.offsetParent !== null || element === document.activeElement
      );
      if (!items.length) {
        event.preventDefault();
        current.focus();
        return;
      }
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      document.body.style.overflow = originalOverflow;
      inerted.forEach((element) => element.removeAttribute("inert"));
      previouslyFocused?.focus?.();
    };
  }, [open]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div ref={rootRef} className="fixed inset-0 z-[100]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-midnight/80 backdrop-blur-[2px]"
        onClick={() => closeRef.current()}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        aria-label={label}
        tabIndex={-1}
        className={clsx(
          "absolute inset-y-0 right-0 flex w-full flex-col border-l border-as-line bg-midnight-soft shadow-[0_0_120px_rgba(0,0,0,0.7)] focus:outline-none",
          width === "md" && "sm:max-w-[520px]",
          width === "lg" && "sm:max-w-[680px]",
          width === "xl" && "sm:max-w-[860px]",
          width === "inspector" && "sm:max-w-[600px]"
        )}
      >
        <header className="flex items-start justify-between gap-4 border-b border-as-line/80 px-5 py-4 sm:px-6">
          <div className="min-w-0">
            {eyebrow ? (
              <p className="mb-1 font-mono text-[12px] uppercase tracking-[0.2em] text-iris-soft">
                {eyebrow}
              </p>
            ) : null}
            <h2
              id={titleId}
              className="text-lg font-semibold tracking-tight text-platinum"
            >
              {title}
            </h2>
            {description ? (
              <p
                id={descriptionId}
                className="mt-1 text-xs leading-5 text-haze"
              >
                {description}
              </p>
            ) : null}
          </div>
          <IconButton label={closeLabel} onClick={() => closeRef.current()}>
            <X aria-hidden="true" className="h-5 w-5" />
          </IconButton>
        </header>
        <div className="as-scroll flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {children}
        </div>
        {footer ? (
          <footer className="border-t border-as-line/80 px-5 py-4 sm:px-6">
            {footer}
          </footer>
        ) : null}
      </div>
    </div>,
    document.body
  );
}
