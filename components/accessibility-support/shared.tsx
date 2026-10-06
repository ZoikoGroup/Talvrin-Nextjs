import React from "react";
import Image from "next/image";
import clsx from "clsx";

/** Same width and gutters as components/ui/Container, so this page lines up with the rest of the site. */
export const CONTAINER = "mx-auto w-full max-w-[1310px] px-4 sm:px-6 lg:px-8";

export function Eyebrow({ children, tone = "gold" }: { children: React.ReactNode; tone?: "gold" | "indigo" }) {
  return (
    <span
      className={clsx(
        "text-xs font-bold tracking-wide",
        tone === "gold" ? "text-yellow-700" : "text-indigo-600"
      )}
    >
      {children}
    </span>
  );
}

export function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="text-3xl sm:text-4xl font-bold leading-tight text-slate-900">
      {children}
    </h2>
  );
}

/** Rounded photo panel; decorative, so it carries no alt text. */
export function Photo({ src, className, sizes }: { src: string; className?: string; sizes: string }) {
  return (
    <div className={clsx("relative overflow-hidden rounded-2xl bg-slate-200", className)} aria-hidden="true">
      <Image src={src} alt="" fill sizes={sizes} className="object-cover" />
    </div>
  );
}
