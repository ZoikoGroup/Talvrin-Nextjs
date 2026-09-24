import Link from "next/link";
import Container from "../ui/Container";

/**
 * Only released destinations are links; the rest state their real status as
 * plain text so nothing unreleased reads as a working route.
 */
const unreleased = [
  "Data APIs",
  "Integrations",
  "Authentication",
  "SDKs",
  "Developer Status",
  "Changelog",
];

export default function ResourcePillsSection() {
  return (
    <section className="border-b border-ink/10 bg-white py-4">
      <Container>
        <ul className="flex flex-wrap items-center gap-2.5">
          <li>
            <Link
              href="/developers/overview"
              className="inline-flex rounded-full border border-ink/10 bg-surface px-4 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-ink/30"
            >
              Developer Overview <span className="ml-1 text-green-600">· AVAILABLE</span>
            </Link>
          </li>
          <li>
            <Link
              href="/developers/api-documentation"
              aria-current="page"
              className="inline-flex rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white"
            >
              API Documentation
            </Link>
          </li>
          {unreleased.map((label) => (
            <li
              key={label}
              className="inline-flex rounded-full border border-ink/10 bg-surface px-4 py-2 text-xs font-medium text-slate-600"
            >
              {label} <span className="ml-1 text-accent-amber">· NOT RELEASED</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
