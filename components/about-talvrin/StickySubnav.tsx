import Container from "@/components/ui/Container";

const navLinks = [
  "Why Talvrin",
  "What We Are Building",
  "Who We Serve",
  "How It Works",
  "Evidence",
  "AI",
  "Mission",
  "FAQ",
];

export default function StickySubnav() {
  return (
    <>
            {/* Sticky Subnav */}
            <div className="sticky top-[72px] z-40 hidden border-b border-slate-900/10 bg-white md:block">
              <div className="mx-auto w-full max-w-[1320px] h-12 px-6 lg:px-14 flex items-center justify-start gap-1 overflow-x-auto">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-3.5 py-4 text-sm font-semibold font-['IBM_Plex_Sans'] text-[#5D5A72] hover:text-[#171335] transition-colors whitespace-nowrap"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
    </>
  );
}
