import type { ReactElement } from "react";

type SocialKey = "LinkedIn" | "X" | "YouTube";

const icons: Record<SocialKey, ReactElement> = {
  LinkedIn: (
    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 7.03a1.96 1.96 0 1 0 0-3.92 1.96 1.96 0 0 0 0 3.92ZM20.44 20h-3.37v-5.93c0-1.41-.03-3.23-1.97-3.23-1.98 0-2.28 1.55-2.28 3.13V20H9.45V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.5 2.25 4.5 5.19V20Z" />
  ),
  X: (
    <path d="M13.53 10.62 20.05 3h-1.55l-5.66 6.62L8.32 3H3l6.84 9.97L3 21h1.55l5.98-6.99L15.68 21H21l-7.47-10.38Zm-2.12 2.48-.69-.98L5.2 4.15h2.38l4.44 6.35.69.98 5.78 8.26h-2.38l-4.7-6.64Z" />
  ),
  YouTube: (
    <path d="M21.58 7.2a2.75 2.75 0 0 0-1.94-1.95C17.9 4.75 12 4.75 12 4.75s-5.9 0-7.64.5A2.75 2.75 0 0 0 2.42 7.2 28.8 28.8 0 0 0 1.92 12a28.8 28.8 0 0 0 .5 4.8 2.75 2.75 0 0 0 1.94 1.95c1.74.5 7.64.5 7.64.5s5.9 0 7.64-.5a2.75 2.75 0 0 0 1.94-1.95c.33-1.58.5-3.19.5-4.8a28.8 28.8 0 0 0-.5-4.8ZM9.98 15.02V8.98L15.5 12l-5.52 3.02Z" />
  ),
};

export default function SocialIcon({ name, className }: { name: SocialKey; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {icons[name]}
    </svg>
  );
}
