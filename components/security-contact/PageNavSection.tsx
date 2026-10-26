import Container from "../ui/Container";

const navLinks = [
  { label: "Choose Your Path", href: "#route-by-situation" },
  { label: "Before You Report", href: "#safety-notice" },
  { label: "Contact Method", href: "#contact-method" },
  { label: "Report It", href: "#report-it" },
  { label: "What's Next", href: "#next-steps" },
  { label: "Boundaries", href: "#boundaries" },
  { label: "Resources", href: "#resources" },
  { label: "FAQ", href: "#faq" },
];

export default function PageNavSection() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-30 border-b border-ink/8 bg-white md:top-[72px]"
    >
      <Container className="no-scrollbar flex items-center gap-1 overflow-x-auto xl:justify-center xl:overflow-visible">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="whitespace-nowrap px-3.5 py-4 text-[13px] font-semibold text-muted transition-colors hover:text-ink sm:text-sm"
          >
            {link.label}
          </a>
        ))}
      </Container>
    </nav>
  );
}
