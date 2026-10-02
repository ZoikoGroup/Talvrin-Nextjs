import Container from "../ui/Container";

const navLinks = [
  { label: "What It Is", href: "#what-it-is" },
  { label: "Workflow", href: "#workflow" },
  { label: "First Task", href: "#first-task" },
  { label: "Evidence", href: "#evidence" },
  { label: "AI", href: "#ai" },
  { label: "Starting Paths", href: "#starting-paths" },
  { label: "Coverage", href: "#coverage" },
  { label: "FAQ", href: "#faq" },
  { label: "Learn More", href: "#learn-more" },
];

export default function PageNavSection() {
  return (
    <div className="sticky top-[72px] z-30 hidden border-b border-ink/8 bg-white md:block">
      <Container className="flex items-center gap-1 overflow-x-auto">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="whitespace-nowrap px-3.5 py-4 text-sm font-semibold text-[#5d5a72] transition-colors hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </Container>
    </div>
  );
}
