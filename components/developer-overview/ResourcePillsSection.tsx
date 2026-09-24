import Link from "next/link";
import Container from "../ui/Container";

/**
 * Unreleased destinations are shown as plain text, never links — the page's own
 * rule is that an unreleased resource is "informational only, never a disguised
 * or dead link".
 */
const resources = [
  { label: "API Documentation" },
  { label: "Data APIs" },
  { label: "Integrations" },
  { label: "Authentication" },
  { label: "SDKs" },
  { label: "Developer Status" },
  { label: "Changelog" },
];

export default function ResourcePillsSection() {
  return (
    <section className="border-b border-ink/10 bg-white py-4">
      <Container>
        <ul className="flex flex-wrap items-center gap-2.5">
          <li>
            <Link
              href="/developers/overview"
              aria-current="page"
              className="inline-flex rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white"
            >
              Developer Overview
            </Link>
          </li>
          {resources.map((resource) => (
            <li
              key={resource.label}
              className="inline-flex rounded-full border border-ink/10 bg-surface px-4 py-2 text-xs font-medium text-slate-600"
            >
              {resource.label}{" "}
              <span className="ml-1 text-accent-amber">· NOT RELEASED</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
