import Container from "../ui/Container";

const navLinks = [
  { label: "Doctrine", href: "#doctrine" },
  { label: "Trust Domains", href: "#trust-domains" },
  { label: "How We Prove Trust", href: "#how-we-prove-trust" },
  { label: "Evidence & Rights", href: "#evidence-rights" },
  { label: "Security, Privacy & Governance", href: "#security-privacy-governance" },
  { label: "Responsible AI", href: "#responsible-ai" },
  { label: "Operations", href: "#operations" },
  { label: "Scope & Limits", href: "#scope-limits" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "FAQ", href: "#faq" },
];

export default function PageNavSection() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-30 border-b border-ink/8 bg-white md:top-[72px]"
    >
      {/* Links fit on one line from xl up; smaller screens scroll sideways. */}
      <Container className="no-scrollbar flex items-center gap-1 overflow-x-auto xl:justify-center xl:overflow-visible">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="whitespace-nowrap px-2.5 py-3.5 text-[13px] font-semibold text-muted transition-colors hover:text-ink sm:px-3.5 sm:py-4 sm:text-sm"
          >
            {link.label}
          </a>
        ))}
      </Container>
    </nav>
  );
}
