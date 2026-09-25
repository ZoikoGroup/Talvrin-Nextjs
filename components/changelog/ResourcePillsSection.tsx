import Link from "next/link";
import Container from "../ui/Container";

const destinations = [
  { label: "Developer Overview", href: "/developers/overview" },
  { label: "API Documentation", href: "/developers/api-documentation" },
  { label: "Data APIs", href: "/developers/data-apis" },
  { label: "Integrations", href: "/developers/integrations" },
  { label: "Authentication", href: "/developers/authentication" },
  { label: "SDKs", href: "/developers/sdks" },
  { label: "Developer Status", href: "/developers/status" },
];

export default function ResourcePillsSection() {
  return (
    <section className="border-b border-ink/10 bg-white py-4">
      <Container>
        <ul className="flex flex-wrap items-center gap-2.5">
          {destinations.map((destination) => (
            <li key={destination.href}>
              <Link
                href={destination.href}
                className="inline-flex rounded-full border border-ink/10 bg-surface px-4 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-ink/30"
              >
                {destination.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/developers/changelog"
              aria-current="page"
              className="inline-flex rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white"
            >
              Changelog
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}
