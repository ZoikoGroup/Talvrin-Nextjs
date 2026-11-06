const navItems = [
  { label: "Fit Principles", href: "#fit-principles" },
  { label: "Partnership Areas", href: "#partnership-areas" },
  { label: "Other Routes", href: "#other-routes" },
  { label: "Program Truth", href: "#program-truth" },
  { label: "Start an Enquiry", href: "#start-enquiry" },
  { label: "What's Next", href: "#whats-next" },
  { label: "FAQ", href: "#faq" },
  { label: "Related Routes", href: "#related-routes" },
];

export default function PageNavSection() {
  return (
    <nav
      aria-label="Page sections"
      className="sticky top-0 z-30 border-b border-[rgba(23,19,53,0.08)] bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1320px] items-center gap-1 overflow-x-auto px-4 sm:px-6 lg:px-8 no-scrollbar">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="shrink-0 px-3.5 py-4 text-sm font-semibold text-[#5D5A72] transition-colors hover:text-[#171335]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
