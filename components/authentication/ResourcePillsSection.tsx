import Link from "next/link";
import Container from "../ui/Container";

const available = [
  { label: "Developer Overview", href: "/developers/overview" },
  { label: "API Documentation", href: "/developers/api-documentation" },
  { label: "Data APIs", href: "/developers/data-apis" },
  { label: "Integrations", href: "/developers/integrations" },
];

/** SDKs are blocked on a published authentication method, which is a different state from unreleased. */
const blocked = ["SDKs"];
const unreleased = ["Developer Status", "Changelog"];

export default function ResourcePillsSection() {
  return (
    <section className="border-b border-ink/10 bg-white py-4">
      <Container>
        <ul className="flex flex-wrap items-center gap-2.5">
          {available.map((resource) => (
            <li key={resource.href}>
              <Link
                href={resource.href}
                className="inline-flex rounded-full border border-ink/10 bg-surface px-4 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-ink/30"
              >
                {resource.label} <span className="ml-1 text-green-600">· AVAILABLE</span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/developers/authentication"
              aria-current="page"
              className="inline-flex rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white"
            >
              Authentication
            </Link>
          </li>
          {blocked.map((label) => (
            <li
              key={label}
              className="inline-flex rounded-full border border-ink/10 bg-surface px-4 py-2 text-xs font-medium text-slate-600"
            >
              {label} <span className="ml-1 text-accent-amber">· BLOCKED</span>
            </li>
          ))}
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
