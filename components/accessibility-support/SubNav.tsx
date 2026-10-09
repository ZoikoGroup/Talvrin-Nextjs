import React from "react";
import { SUB_NAV } from "./accessibility-support-data";
import { CONTAINER } from "./shared";

export default function SubNav() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-30 w-full border-b border-slate-900/10 bg-white md:top-[72px]"
    >
      <ul className={`${CONTAINER} no-scrollbar flex gap-1 overflow-x-auto whitespace-nowrap`}>
        {SUB_NAV.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block px-2.5 py-3.5 text-[13px] font-semibold text-gray-600 transition-colors hover:text-slate-900 focus-visible:text-slate-900 sm:px-3.5 sm:py-4 sm:text-sm"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
