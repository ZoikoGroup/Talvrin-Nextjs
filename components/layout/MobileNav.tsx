"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav } from "@/lib/navigation";
import Logo from "../ui/Logo";
import { LinkButton } from "../ui/Button";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-slate-900/40"
            onClick={onClose}
          />
          <motion.div
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <Logo />
              <button
                aria-label="Close menu"
                onClick={onClose}
                className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4">
              {primaryNav.map((group) => {
                const isExpanded = expanded === group.label;
                return (
                  <div key={group.label} className="border-b border-slate-50 last:border-none">
                    <button
                      type="button"
                      onClick={() => setExpanded(isExpanded ? null : group.label)}
                      className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-left text-[15px] leading-none font-medium text-ink"
                      aria-expanded={isExpanded}
                    >
                      {group.label}
                      <ChevronDown
                        strokeWidth={1.75}
                        className={clsx("size-3.5 transition-transform duration-200", isExpanded && "rotate-180")}
                      />
                    </button>
                    <div className={clsx("grid overflow-hidden transition-all duration-300", isExpanded ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]")}>
                      <div className="min-h-0">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className="block rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-ink"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-5">
              <LinkButton href="/sign-in" variant="secondary" className="w-full" onClick={onClose}>
                Sign In
              </LinkButton>
              <LinkButton href="/request-access" variant="primary" className="w-full" onClick={onClose}>
                Request Access
              </LinkButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
