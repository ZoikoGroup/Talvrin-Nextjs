import Container from "../ui/Container";

const tabs = [
  { label: "Choose a Route", href: "#choose-a-route" },
  { label: "General Enquiry", href: "#general-enquiry" },
  { label: "Specialist Destinations", href: "#specialist-destinations" },
  { label: "Company Context", href: "#company-context" },
  { label: "FAQ", href: "#faq" },
];

export default function SubnavSection() {
  return (
    <nav
      aria-label="Contact sections"
      className="sticky top-16 z-40 border-b border-ink/10 bg-white md:top-[72px]"
    >
      <Container className="flex h-12 items-center gap-1 overflow-x-auto">
        {tabs.map((tab) => (
          <a
            key={tab.label}
            href={tab.href}
            className="whitespace-nowrap px-3.5 py-4 text-sm font-semibold text-slate-600 transition-colors hover:text-ink"
          >
            {tab.label}
          </a>
        ))}
      </Container>
    </nav>
  );
}
