"use client";

import Link from "next/link";

const supportNavigation = [
  {
    label: "Self-Service",
    href: "#self-service",
  },
  {
    label: "Choose Issue Type",
    href: "#choose-issue-type",
  },
  {
    label: "Support Request",
    href: "#support-request",
  },
  {
    label: "Trust & Escalation",
    href: "#trust-and-escalation",
  },
];

export default function ContactSupportNavigation() {
  return (
    <nav
      aria-label="Contact Support navigation"
      className="
        w-full
        h-12
        overflow-x-auto
        overflow-y-hidden
        border-b
        border-slate-900/10
        bg-white
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
      "
    >
      <div
        className="
          mx-auto
          flex
          h-12
          min-w-max
          w-full
          max-w-[1320px]
          items-stretch
          gap-1
          px-4
          sm:px-6
          lg:px-8
          xl:px-14
        "
      >
        {supportNavigation.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="
              flex
              h-full
              shrink-0
              items-center
              px-3.5
              py-4
              font-['IBM_Plex_Sans']
              text-sm
              font-semibold
              text-gray-600
              whitespace-nowrap
              transition-colors
              duration-200
              hover:text-slate-900
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-violet-500
              focus-visible:ring-offset-[-2px]
            "
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}