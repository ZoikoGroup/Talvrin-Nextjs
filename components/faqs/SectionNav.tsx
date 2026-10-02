import Container from "../ui/Container";

const links = [
  { label: "Featured", href: "#featured" },
  { label: "About Talvrin", href: "#about" },
  { label: "Research & Evidence", href: "#research" },
  { label: "AI", href: "#ai" },
  { label: "Markets & Coverage", href: "#markets" },
  { label: "Trust & Governance", href: "#trust" },
  { label: "Boundaries", href: "#boundaries" },
  { label: "Getting Help", href: "#help" },
];

export default function SectionNav() {
  return (
    <nav className="sticky top-16 z-30 border-b border-ink/10 bg-white md:top-[72px]">
      <Container className="max-w-[1320px]">
        <div className="flex h-12 items-center gap-1 overflow-x-auto no-scrollbar">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap px-3.5 py-4 text-sm font-semibold text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </nav>
  );
}
