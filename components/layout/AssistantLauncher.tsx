"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Floating entry point to the Talvrin Research Assistant, fixed to the
 * bottom-right of every marketing page (same placement and treatment as the
 * Zoiko Payroll concierge launcher). The face is the Talvrin app icon
 * (/talvrin-icon.png, cropped from the favicon artwork). It is a plain link:
 * activating it opens the public research entry at /assistant.
 */
export default function AssistantLauncher() {
  return (
    <div className="group fixed bottom-6 right-6 z-[9997] flex items-center gap-3">
      <span
        aria-hidden="true"
        className="pointer-events-none hidden translate-x-1 rounded-full border border-iris/30 bg-midnight px-3.5 py-1.5 text-[13px] font-medium text-platinum opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100 motion-reduce:transition-none sm:block"
      >
        Ask Talvrin
      </span>
      <span className="relative h-14 w-14">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl bg-iris opacity-55 blur-xl transition-opacity duration-300 group-hover:opacity-80"
        />
        <Link
          href="/assistant"
          aria-label="Open Talvrin Research Assistant"
          className="relative block h-14 w-14 overflow-hidden rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_16px_30px_-8px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-[3px] hover:scale-[1.04] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-iris active:translate-y-0 active:scale-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
        >
          <Image
            src="/talvrin-icon.png"
            alt=""
            width={56}
            height={56}
            className="h-full w-full object-cover"
          />
        </Link>
      </span>
    </div>
  );
}
