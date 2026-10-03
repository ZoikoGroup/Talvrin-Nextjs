import Container from "../ui/Container";

const links = [
  { label: "Quick Paths", href: "#quick-paths" },
  { label: "Topics", href: "#topics" },
  { label: "Workflow", href: "#workflow" },
  { label: "Evidence & AI", href: "#evidence-ai" },
  { label: "Troubleshooting", href: "#troubleshooting" },
  { label: "Support", href: "#support" },
  { label: "FAQs", href: "#faqs" },
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
