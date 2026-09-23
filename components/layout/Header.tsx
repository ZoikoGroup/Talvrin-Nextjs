"use client";

import { useState } from "react";
import { Menu, Search } from "lucide-react";
import { megaMenus, primaryNav } from "@/lib/navigation";
import Logo from "../ui/Logo";
import Container from "../ui/Container";
import { LinkButton } from "../ui/Button";
import NavDropdown from "./NavDropdown";
import MegaMenuPanel from "./MegaMenuPanel";
import MobileNav from "./MobileNav";

export default function Header() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur"
        onMouseLeave={() => setOpenGroup(null)}
      >
        <Container className="flex h-16 items-center justify-between gap-4 md:h-[72px]">
          <Logo />

          <nav className="hidden items-center lg:flex" aria-label="Primary">
            {primaryNav.map((group) => (
              <NavDropdown
                key={group.label}
                group={group}
                isOpen={openGroup === group.label}
                onOpen={() => setOpenGroup(group.label)}
                onToggle={() => setOpenGroup((current) => (current === group.label ? null : group.label))}
              />
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              aria-label="Search"
              className="hidden rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-ink sm:inline-flex"
            >
              <Search className="size-5" />
            </button>
            <div className="hidden items-center gap-1 sm:flex sm:gap-2">
              <LinkButton href="/sign-in" variant="ghost">
                Sign In
              </LinkButton>
              <LinkButton href="/request-access" variant="primary">
                Request Access
              </LinkButton>
            </div>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="inline-flex rounded-full p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </Container>

        <MegaMenuPanel
          content={openGroup ? megaMenus[openGroup] : null}
          isOpen={openGroup !== null}
          onNavigate={() => setOpenGroup(null)}
        />
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
