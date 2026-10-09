import Container from "../ui/Container";

const navLinks = [
  { label: "What's Going Wrong", href: "#whats-going-wrong" },
  { label: "Known Issues", href: "#known-issues" },
  { label: "Report It", href: "#report-it" },
  { label: "Related Support", href: "#related" },
  { label: "FAQ", href: "#faq" },
];

export default function PageNavSection() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-30 border-b border-ink/8 bg-white md:top-[72px]"
    >
      <Container className="no-scrollbar flex items-center gap-1 overflow-x-auto">
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
