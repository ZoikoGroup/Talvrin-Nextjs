import Container from "../ui/Container";

const navLinks = [
  { label: "Principles", href: "#principles" },
  { label: "Claim Lifecycle", href: "#claim-lifecycle" },
  { label: "Security Domains", href: "#security-domains" },
  { label: "Evidence States", href: "#evidence-states" },
  { label: "Disclosure Boundary", href: "#disclosure-boundary" },
  { label: "Assurance", href: "#assurance" },
  { label: "Notices & Status", href: "#notices-status" },
  { label: "Enterprise Diligence", href: "#enterprise-diligence" },
  { label: "Trust Links", href: "#trust-links" },
  { label: "FAQ", href: "#faq" },
];

export default function PageNavSection() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-30 border-b border-ink/8 bg-white md:top-[72px]"
    >
      {/* 10 links fit on one line from xl up; smaller screens scroll sideways. */}
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
