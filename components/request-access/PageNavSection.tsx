import Container from "../ui/Container";

const navLinks = [
  { label: "What Access Gives You", href: "#what-access-gives" },
  { label: "Choose Your Path", href: "#choose-path" },
  { label: "Request Access", href: "#request-form" },
  { label: "What's Next", href: "#next-steps" },
  { label: "Boundaries", href: "#boundaries" },
  { label: "FAQ", href: "#faq" },
  { label: "Other Routes", href: "#other-routes" },
];

export default function PageNavSection() {
  return (
    <nav aria-label="On this page" className="sticky top-16 z-30 border-b border-ink/10 bg-white md:top-[72px]">
      <Container className="no-scrollbar flex items-center gap-1 overflow-x-auto">
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
