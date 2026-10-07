import Container from "../ui/Container";

const navLinks = [
  { label: "Source Model", href: "#source-model" },
  { label: "Source Classes", href: "#source-classes" },
  { label: "Registry", href: "#registry" },
  { label: "Source Record", href: "#source-record" },
  { label: "Evidence Chain", href: "#evidence-chain" },
  { label: "Time & Version", href: "#time-version" },
  { label: "Rights Boundary", href: "#rights-boundary" },
  { label: "Coverage", href: "#coverage" },
  { label: "Currentness", href: "#currentness" },
  { label: "Monitoring", href: "#monitoring" },
  { label: "AI Boundary", href: "#ai-boundary" },
  { label: "Who Benefits", href: "#who-benefits" },
  { label: "Trust Links", href: "#trust-links" },
  { label: "FAQ", href: "#faq" },
];

export default function PageNavSection() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-30 border-b border-ink/8 bg-white md:top-[72px]"
    >
      {/* 14 links don't fit at the default spacing, so from xl up the side padding goes and the
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
