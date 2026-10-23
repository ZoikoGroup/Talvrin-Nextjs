export const SECTIONS = [
  { id: "capabilities", label: "Capabilities" },
  { id: "how-access-works", label: "How Access Works" },
  { id: "release-governance", label: "Release Governance" },
  { id: "integration-patterns", label: "Integration Patterns" },
  { id: "evidence-rights", label: "Evidence & Rights" },
  { id: "documentation-preview", label: "Documentation Preview" },
  { id: "security-operations", label: "Security & Operations" },
  { id: "faq", label: "FAQ" },
] as const;

export default function SubNav() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-30 w-full border-b border-ink/10 bg-white md:top-[72px]"
    >
      <ul className="no-scrollbar mx-auto flex w-full max-w-[1320px] gap-1 overflow-x-auto whitespace-nowrap px-4 sm:px-6 lg:px-14">
        {SECTIONS.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block px-2.5 py-3.5 text-[13px] font-semibold text-muted transition-colors hover:text-ink focus-visible:text-ink sm:px-3.5 sm:py-4 sm:text-sm"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
