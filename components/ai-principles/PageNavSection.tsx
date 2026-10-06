import Container from "../ui/Container";

const navLinks = [
  { label: "Principles", href: "#principles" },
  { label: "Assistance Scope", href: "#assistance-scope" },
  { label: "Boundaries", href: "#boundaries" },
  { label: "Provenance", href: "#content-origin" },
  { label: "Evidence Inspection", href: "#provenance" },
  { label: "Limitations", href: "#limitations" },
  { label: "Human Judgment", href: "#human-judgment" },
  { label: "Trust Links", href: "#trust-links" },
  { label: "Claim Governance", href: "#claim-governance" },
  { label: "Enterprise Diligence", href: "#enterprise-diligence" },
  { label: "FAQ", href: "#faq" },
];

export default function PageNavSection() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-30 border-b border-ink/8 bg-white md:top-[72px]"
    >
      {/* 11 links don't fit at the default spacing, so from xl up the side padding goes and the
          links are spread across the container: one line, no scrolling. Smaller screens still scroll. */}
      <Container className="no-scrollbar flex items-center gap-1 overflow-x-auto xl:justify-between xl:gap-0 xl:overflow-visible">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="whitespace-nowrap px-2.5 py-3.5 text-[13px] font-semibold text-muted transition-colors hover:text-ink sm:px-3.5 sm:py-4 sm:text-sm xl:px-0 xl:text-[13px]"
          >
            {link.label}
          </a>
        ))}
      </Container>
    </nav>
  );
}
