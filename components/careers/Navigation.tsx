import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Navigation() {
  const links = [
    { name: "Mission", href: "#mission" },
    { name: "Principles", href: "#principles" },
    { name: "Open Roles", href: "#open-roles" },
    { name: "Candidate Support", href: "#candidate-support" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="w-full bg-white border-b border-slate-900/10 sticky top-0 z-30 shadow-xs">
      <Container className="max-w-[1320px]">
        <div className="flex items-center gap-8 py-3.5 overflow-x-auto no-scrollbar">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#5D5A72] hover:text-[#171335] font-['IBM_Plex_Sans'] transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
}