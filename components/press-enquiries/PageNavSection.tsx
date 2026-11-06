import Container from "../ui/Container";

const navLinks = [
  { label: "Who This Is For", href: "#situations" },
  { label: "Approved Facts", href: "#approved-facts" },
  { label: "Media Resources", href: "#media-resources" },
  { label: "Send an Enquiry", href: "#send-enquiry" },
  { label: "What's Next", href: "#next-steps" },
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
