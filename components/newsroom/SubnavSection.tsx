import Container from "../ui/Container";

const tabs = [
  { label: "All Publications", href: "#all-publications" },
  { label: "Editorial Standards", href: "#editorial-standards" },
  { label: "Topics", href: "#topics" },
  { label: "FAQ", href: "#faq" },
];

export default function SubnavSection() {
  return (
    <nav
      aria-label="Newsroom sections"
      className="sticky top-16 z-40 md:top-[72px] border-b border-ink/10 bg-white"
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
