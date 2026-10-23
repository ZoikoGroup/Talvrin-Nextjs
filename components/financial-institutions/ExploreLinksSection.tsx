import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const groups = [
  {
    heading: "Institutional workflows",
    links: [
      { label: "Research desk journeys", href: "#workflows" },
      { label: "Evidence review", href: "#evidence" },
      { label: "Credit & risk research", href: "#workflows" },
    ],
  },
  {
    heading: "Coverage & deployment",
    links: [
      { label: "Supported instruments", href: "/markets/market-coverage" },
      { label: "Geographic scope", href: "/markets/global-markets" },
      { label: "Historical depth", href: "/research/source-methodology" },
    ],
  },
  {
    heading: "Governance & trust",
    links: [
      { label: "Rights & permissions", href: "/trust/data-rights" },
      { label: "Source validation", href: "/trust/evidence-standards" },
      { label: "Security posture", href: "/trust/security" },
    ],
  },
];

export default function ExploreLinksSection() {
  return (
    <nav aria-label="Explore this solution" className="border-y border-ink/10 bg-white py-14">
      <Container className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.heading} delay={i * 0.06}>
            <p className="text-xs font-bold uppercase tracking-wide text-ink">{g.heading}</p>
            <ul className="mt-4 space-y-2.5">
              {g.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 transition-colors hover:text-accent-violet"
                  >
                    {l.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </Container>
    </nav>
  );
}
