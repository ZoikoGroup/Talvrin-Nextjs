import Container from "../ui/Container";

const tabs = [
  { label: "Quick Facts", href: "#quick-facts" },
  { label: "Newsroom", href: "#newsroom" },
  { label: "Media Enquiry", href: "#media-enquiry" },
  { label: "Resources", href: "#resources" },
  { label: "FAQ", href: "#faq" },
];

export default function SubnavSection() {
  return (
    <nav
      aria-label="Press and media sections"
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
