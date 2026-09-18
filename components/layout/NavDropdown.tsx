"use client";

import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import type { NavGroup } from "@/lib/navigation";

type NavDropdownProps = {
  group: NavGroup;
  isOpen: boolean;
  onOpen: () => void;
  onToggle: () => void;
};

/** Header nav trigger. The mega-menu panel itself is rendered once, centered, by MegaMenuPanel. */
export default function NavDropdown({ group, isOpen, onOpen, onToggle }: NavDropdownProps) {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      onMouseEnter={onOpen}
      onFocus={onOpen}
      onClick={onToggle}
      className="flex items-center gap-1 rounded-md px-3 py-2 text-[15px] leading-none font-medium tracking-normal text-ink transition-colors hover:text-brand"
    >
      {group.label}
      <ChevronDown
        strokeWidth={1.75}
        className={clsx("size-3.5 transition-transform duration-200", isOpen && "rotate-180")}
        aria-hidden="true"
      />
    </button>
  );
}
