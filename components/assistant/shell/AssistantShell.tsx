"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Bell,
  ChevronRight,
  Columns3,
  HelpCircle,
  History,
  Lock,
  Menu,
  MessageSquarePlus,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import { ButtonLink } from "@/components/assistant/ui/Button";
import { Dialog } from "@/components/assistant/ui/Dialog";
import { useDemoMode } from "./DemoModeProvider";
import { useAssistantPrefs } from "./AssistantPrefsProvider";
import { readSessionEntries } from "@/lib/assistant/client";

const PUBLIC_LINKS = [
  { href: "/product/overview", label: "Product" },
  {
    href: "/assistant/help?article=help-citations",
    label: "How sources work",
  },
  { href: "/assistant/help?article=help-coverage", label: "Coverage" },
];

type SidebarItem = {
  href: string;
  label: string;
  icon: typeof Bell;
  match: string[];
  dynamic?: boolean;
  /** WF-06 design gate: saved research is sign-in gated for guests. */
  savedResearch?: boolean;
};

const DEFAULT_SIDEBAR: SidebarItem[] = [
  {
    href: "/assistant/history",
    label: "This session",
    icon: Search,
    match: ["/assistant/session"],
    dynamic: true,
  },
  {
    href: "/assistant/compare",
    label: "Compare",
    icon: Columns3,
    match: ["/assistant/compare"],
  },
  {
    href: "/assistant/history",
    label: "Saved research",
    icon: History,
    match: ["/assistant/history?view=saved"],
    savedResearch: true,
  },
  {
    href: "/assistant/updates",
    label: "Updates",
    icon: Bell,
    match: ["/assistant/updates"],
  },
  {
    href: "/assistant/help",
    label: "Help & sources",
    icon: HelpCircle,
    match: ["/assistant/help", "/assistant/report"],
  },
  {
    href: "/assistant/settings",
    label: "Settings",
    icon: Settings,
    match: ["/assistant/settings"],
  },
];

const SESSION_SIDEBAR: SidebarItem[] = [
  {
    href: "/assistant",
    label: "Public research",
    icon: MessageSquarePlus,
    match: ["/assistant"],
  },
  {
    href: "/assistant/help?article=help-citations",
    label: "How sources work",
    icon: ShieldCheck,
    match: ["/assistant/help"],
  },
  {
    href: "/assistant/help?article=help-coverage",
    label: "Coverage and limits",
    icon: Search,
    match: ["/assistant/help"],
  },
  {
    href: "/assistant/help",
    label: "Help and privacy",
    icon: HelpCircle,
    match: ["/assistant/help"],
  },
];

const COMPARE_SIDEBAR: SidebarItem[] = [
  {
    href: "/assistant",
    label: "Research home",
    icon: MessageSquarePlus,
    match: ["/assistant"],
  },
  {
    href: "/assistant#composer",
    label: "Ask Talvrin",
    icon: Search,
    match: ["/assistant"],
  },
  {
    href: "/assistant/compare",
    label: "Compare research",
    icon: Columns3,
    match: ["/assistant/compare"],
  },
  {
    href: "/assistant/help?article=help-citations",
    label: "Source policy",
    icon: ShieldCheck,
    match: ["/assistant/help"],
  },
];

const HISTORY_SIDEBAR: SidebarItem[] = [
  {
    href: "/assistant",
    label: "Research home",
    icon: MessageSquarePlus,
    match: ["/assistant"],
  },
  {
    href: "/assistant/history",
    label: "This session",
    icon: Search,
    match: ["/assistant/session"],
    dynamic: true,
  },
  {
    href: "/assistant/history",
    label: "Saved research",
    icon: History,
    match: ["/assistant/history?view=saved"],
    savedResearch: true,
  },
  {
    href: "/assistant/help",
    label: "Help & sources",
    icon: HelpCircle,
    match: ["/assistant/help"],
  },
];

const SETTINGS_SIDEBAR: SidebarItem[] = [
  {
    href: "/assistant",
    label: "Research home",
    icon: MessageSquarePlus,
    match: ["/assistant"],
  },
  {
    href: "/assistant/help?article=help-citations",
    label: "Sources & methods",
    icon: ShieldCheck,
    match: ["/assistant/help"],
  },
  {
    href: "/assistant/settings",
    label: "Settings",
    icon: Settings,
    match: ["/assistant/settings"],
  },
  {
    href: "/assistant/help",
    label: "Help",
    icon: HelpCircle,
    match: ["/assistant/help"],
  },
];

const UPDATES_SIDEBAR: SidebarItem[] = [
  {
    href: "/assistant",
    label: "Research home",
    icon: MessageSquarePlus,
    match: ["/assistant"],
  },
  {
    href: "/assistant/help?article=help-citations",
    label: "Evidence & sources",
    icon: ShieldCheck,
    match: ["/assistant/help"],
  },
  {
    href: "/assistant/history",
    label: "This session",
    icon: History,
    match: ["/assistant/history"],
  },
  {
    href: "/assistant/settings",
    label: "Settings",
    icon: Settings,
    match: ["/assistant/settings"],
  },
  {
    href: "/assistant/help",
    label: "Help",
    icon: HelpCircle,
    match: ["/assistant/help", "/assistant/report"],
  },
];

const HELP_SIDEBAR: SidebarItem[] = [
  {
    href: "/assistant",
    label: "Research home",
    icon: MessageSquarePlus,
    match: ["/assistant"],
  },
  {
    href: "/assistant/help?article=help-citations",
    label: "Evidence & sources",
    icon: ShieldCheck,
    match: ["/assistant/help"],
  },
  {
    href: "/assistant/history",
    label: "This session",
    icon: History,
    match: ["/assistant/history"],
  },
  {
    href: "/assistant/settings",
    label: "Settings",
    icon: Settings,
    match: ["/assistant/settings"],
  },
  {
    href: "/assistant/help",
    label: "Help",
    icon: HelpCircle,
    match: ["/assistant/help"],
  },
];

function sidebarFor(pathname: string | null) {
  if (!pathname) return DEFAULT_SIDEBAR;
  if (pathname.startsWith("/assistant/session")) return SESSION_SIDEBAR;
  if (pathname.startsWith("/assistant/compare")) return COMPARE_SIDEBAR;
  if (pathname.startsWith("/assistant/history")) return HISTORY_SIDEBAR;
  if (pathname.startsWith("/assistant/settings")) return SETTINGS_SIDEBAR;
  if (
    pathname.startsWith("/assistant/updates") ||
    pathname.startsWith("/assistant/export")
  ) {
    return UPDATES_SIDEBAR;
  }
  if (pathname.startsWith("/assistant/help")) return HELP_SIDEBAR;
  return DEFAULT_SIDEBAR;
}

function headerStatus(pathname: string | null, mode: "guest" | "account") {
  if (!pathname || pathname === "/assistant") return "Public mode · Guest";
  if (pathname.startsWith("/assistant/help")) return "Public · No account";
  if (pathname.startsWith("/assistant/compare")) return "Draft · Not run";
  if (pathname.startsWith("/assistant/access")) return "Access · No identity provider";
  if (pathname.startsWith("/assistant/report")) return "Public · Review queue";
  if (mode === "account") {
    if (pathname.startsWith("/assistant/export"))
      return "Demo account · Check access";
    return "Demo account · Synthetic";
  }
  if (pathname.startsWith("/assistant/export")) return "Guest · Sign-in needed";
  if (pathname.startsWith("/assistant/updates")) return "Guest · Gated";
  return "Guest · Temporary";
}

function sectionLabel(pathname: string | null) {
  if (!pathname || pathname === "/assistant") return "Public research";
  if (pathname.startsWith("/assistant/session"))
    return "Public research / Conversation";
  if (pathname.startsWith("/assistant/compare"))
    return "Public research / Comparison";
  if (pathname.startsWith("/assistant/history"))
    return "Public research / History";
  if (pathname.startsWith("/assistant/updates"))
    return "Public research / Updates";
  if (pathname.startsWith("/assistant/help"))
    return "Public research / Help";
  if (pathname.startsWith("/assistant/report"))
    return "Public research / Claim review";
  if (pathname.startsWith("/assistant/export"))
    return "Public research / Export";
  if (pathname.startsWith("/assistant/settings"))
    return "Public research / Settings";
  if (pathname.startsWith("/assistant/access"))
    return "Public research / Access";
  return "Public research";
}

/**
 * WF-11: the access route receives the action the user actually took and a
 * same-origin return path. The access page validates the path again.
 */
export function accessHref(
  intent: "sign_in" | "save" | "open_saved",
  returnPath: string | null
) {
  const params = new URLSearchParams({ intent });
  if (returnPath && returnPath.startsWith("/assistant") && !returnPath.startsWith("/assistant/access")) {
    params.set("return", returnPath);
  }
  return `/assistant/access?${params.toString()}`;
}

function isActive(pathname: string | null, prefixes: string[]) {
  if (!pathname) return false;
  return prefixes.some((prefix) => pathname.startsWith(prefix));
}

/**
 * WF-06 design gate: "My saved research" stays visibly locked and sign-in
 * gated for guests. The demo account opens the saved-research view, which
 * reports its own feature state rather than relabelling guest items.
 */
function SavedResearchNavItem({
  mode,
  pathname,
  mobile = false,
  onNavigate,
}: {
  mode: "guest" | "account";
  pathname: string | null;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const base = mobile
    ? "flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm font-medium"
    : "flex min-h-11 items-center gap-2.5 rounded-lg px-3 text-[14px] font-medium";
  if (mode === "account") {
    return (
      <Link
        href="/assistant/history?view=saved"
        onClick={onNavigate}
        className={clsx(
          base,
          "text-haze transition-colors hover:bg-white/[0.04] hover:text-platinum"
        )}
      >
        <History aria-hidden="true" className="h-4 w-4 shrink-0" />
        Saved research
      </Link>
    );
  }
  return (
    <Link
      href={accessHref("open_saved", pathname)}
      onClick={onNavigate}
      aria-label="Saved research, locked. Sign in required."
      className={clsx(
        base,
        "text-haze/70 transition-colors hover:bg-white/[0.04] hover:text-platinum"
      )}
    >
      <Lock aria-hidden="true" className="h-4 w-4 shrink-0" />
      Saved research
      <span className="ml-auto rounded-full border border-as-line px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.08em]">
        Sign in
      </span>
    </Link>
  );
}

export default function AssistantShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { mode, setMode } = useDemoMode();
  const { prefs } = useAssistantPrefs();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [latestRef, setLatestRef] = useState<string | null>(null);

  const isEntry = !pathname || pathname === "/assistant";
  const label = sectionLabel(pathname);
  const sidebar = sidebarFor(pathname);
  const showSidebar =
    !isEntry &&
    !pathname?.startsWith("/assistant/access") &&
    !pathname?.startsWith("/assistant/integration");

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    setLatestRef(readSessionEntries()[0]?.ref ?? null);
  }, [pathname]);

  const currentSessionHref = latestRef
    ? `/assistant/session/${latestRef}`
    : "/assistant/history";

  return (
    <div
      className={clsx(
        "as-app flex min-h-screen flex-col",
        prefs.reduceMotion && "as-reduce-motion"
      )}
      data-demo-mode={mode}
    >
      <a
        href="#assistant-main"
        className="sr-only z-[200] rounded-md bg-iris px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
      >
        Skip to research content
      </a>

      <header className="sticky top-0 z-40 h-20 border-b border-as-line/75 bg-midnight/95 backdrop-blur-md">
        <div
          className={clsx(
            "mx-auto flex h-20 w-full max-w-[1600px] items-center gap-5",
            isEntry
              ? "px-5 sm:px-8 lg:px-[68px]"
              : "px-4 sm:px-6 lg:px-8"
          )}
        >
          <Logo
            variant="light"
            href="/assistant"
            className="[&_img]:h-7 sm:[&_img]:h-8"
          />

          {!isEntry ? (
            <div className="hidden min-w-0 items-center gap-3 xl:flex">
              <span aria-hidden="true" className="h-5 w-px bg-as-line" />
              <p className="truncate font-mono text-[11px] uppercase tracking-[0.14em] text-haze">
                {label}
              </p>
            </div>
          ) : null}

          {isEntry ? (
            <nav
              aria-label="Public"
              className="ml-auto hidden items-center gap-6 lg:flex"
            >
              {PUBLIC_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-[14px] font-medium text-haze transition-colors hover:text-platinum"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          ) : null}

          <div
            className={clsx(
              "flex items-center gap-2",
              isEntry ? "ml-auto lg:ml-0" : "ml-auto"
            )}
          >
            {!isEntry ? (
              <Link
                href="/assistant/help"
                className="hidden min-h-11 items-center gap-1.5 px-2 text-[14px] font-medium text-haze transition-colors hover:text-platinum sm:inline-flex"
              >
                <HelpCircle aria-hidden="true" className="h-4 w-4" />
                Help &amp; coverage
              </Link>
            ) : null}

            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="hidden min-h-11 items-center gap-2 rounded-full border border-as-line bg-as-panel/55 px-3 font-mono text-[11px] uppercase tracking-[0.1em] text-haze transition-colors hover:border-iris/45 hover:text-platinum sm:inline-flex"
            >
              <span
                aria-hidden="true"
                className={clsx(
                  "h-1.5 w-1.5 rounded-full",
                  mode === "account" ? "bg-iris-soft" : "bg-ok"
                )}
              />
              {headerStatus(pathname, mode)}
            </button>

            <Link
              href={accessHref("sign_in", pathname)}
              className="hidden min-h-11 items-center px-2 text-[14px] font-medium text-haze transition-colors hover:text-platinum sm:inline-flex"
            >
              Log in
            </Link>

            {isEntry ? (
              <ButtonLink
                href="/request-access"
                variant="secondary"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Request access
              </ButtonLink>
            ) : null}

            <button
              type="button"
              aria-label="Open research menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-as-line text-platinum transition-colors hover:border-iris/50 xl:hidden"
            >
              <Menu aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {isEntry ? (
        <main id="assistant-main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
      ) : (
        <div className="mx-auto flex w-full max-w-[1600px] flex-1 px-4 sm:px-6 lg:px-8">
          <aside className="hidden w-[240px] shrink-0 xl:block">
            <div className="as-scroll sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto py-6 pr-6">
              <ButtonLink
                href="/assistant"
                variant="secondary"
                size="md"
                icon={<Plus aria-hidden="true" className="h-4 w-4" />}
                className="w-full justify-start"
              >
                New research
              </ButtonLink>

              <nav aria-label="Research" className="mt-5 flex flex-col gap-0.5">
                <Link
                  href="/assistant"
                  className="flex min-h-11 items-center gap-2.5 rounded-lg px-3 text-[14px] font-medium text-haze transition-colors hover:bg-white/[0.04] hover:text-platinum"
                >
                  <MessageSquarePlus
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0"
                  />
                  Research home
                </Link>
                {sidebar.map((item) => {
                  const Icon = item.icon;
                  if (item.savedResearch) {
                    return (
                      <SavedResearchNavItem
                        key={`${item.label}-${item.href}`}
                        mode={mode}
                        pathname={pathname}
                      />
                    );
                  }
                  const active = isActive(pathname, item.match);
                  const href =
                    item.dynamic && item.label === "This session"
                      ? currentSessionHref
                      : item.href;
                  return (
                    <Link
                      key={`${item.label}-${item.href}`}
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={clsx(
                        "flex min-h-11 items-center gap-2.5 rounded-lg px-3 text-[14px] font-medium transition-colors",
                        active
                          ? "bg-white/[0.055] text-platinum"
                          : "text-haze hover:bg-white/[0.04] hover:text-platinum"
                      )}
                    >
                      <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
                      {item.label}
                      {active ? (
                        <span
                          aria-hidden="true"
                          className="ml-auto h-1.5 w-1.5 rounded-full bg-iris-soft"
                        />
                      ) : null}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-7 rounded-xl border border-as-line/80 bg-as-panel/45 p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-haze">
                  {mode === "account" ? "Demo account" : "Guest session"}
                </p>
                <p className="mt-2 text-[13px] font-medium text-platinum">
                  {mode === "account"
                    ? "Synthetic saved state"
                    : "Temporary session only"}
                </p>
                <p className="mt-1 text-[13px] leading-6 text-haze">
                  {mode === "account"
                    ? "Local demonstration data. No real identity or entitlement."
                    : "Not synced across devices. Expires automatically."}
                </p>
                <Link
                  href={
                    mode === "account"
                      ? accessHref("sign_in", pathname)
                      : accessHref("save", pathname)
                  }
                  className="mt-2 inline-flex min-h-11 items-center gap-1 text-[13px] font-semibold text-iris-soft hover:text-white"
                >
                  {mode === "account" ? "Check access" : "Sign in to save"}
                  <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          <main
            id="assistant-main"
            tabIndex={-1}
            className="min-w-0 flex-1 focus:outline-none xl:pl-6"
          >
            {children}
          </main>
        </div>
      )}

      <footer className="mt-auto border-t border-as-line/55">
        <div
          className={clsx(
            "mx-auto flex w-full max-w-[1600px] flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between",
            isEntry
              ? "px-5 sm:px-8 lg:px-[68px]"
              : "px-4 sm:px-6 lg:px-8"
          )}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-haze/80">
            Talvrin Research Assistant · Proposed
          </p>
          <nav
            aria-label="Assistant footer"
            className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[13px] text-haze"
          >
            <Link className="inline-flex min-h-11 items-center hover:text-platinum" href="/assistant/help">
              Help
            </Link>
            <Link className="inline-flex min-h-11 items-center hover:text-platinum" href="/legal/privacy-notice">
              Privacy
            </Link>
            <Link className="inline-flex min-h-11 items-center hover:text-platinum" href="/">
              Marketing site
            </Link>
          </nav>
          <p className="text-[13px] text-haze">
            Financial research, not personal investment advice.
          </p>
        </div>
      </footer>

      <Dialog
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        title="Research assistant"
        eyebrow="Navigation"
        description="Public research surface. Guest mode is temporary; the demo account is synthetic."
        width="md"
      >
        <nav aria-label="Assistant mobile" className="flex flex-col gap-1">
          <Link
            href="/assistant"
            onClick={() => setMobileOpen(false)}
            className="flex min-h-12 items-center gap-3 rounded-xl border border-as-line bg-as-panel/55 px-4 text-sm font-semibold text-platinum"
          >
            <Plus aria-hidden="true" className="h-4 w-4" />
            New research
          </Link>
          <Link
            href={currentSessionHref}
            onClick={() => setMobileOpen(false)}
            className="flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm font-medium text-haze hover:bg-white/[0.04] hover:text-platinum"
          >
            <Search aria-hidden="true" className="h-4 w-4" />
            This session
          </Link>
          {sidebar.filter((item) => item.label !== "This session").map(
            (item) => {
              const Icon = item.icon;
              if (item.savedResearch) {
                return (
                  <SavedResearchNavItem
                    key={`mobile-${item.label}`}
                    mode={mode}
                    pathname={pathname}
                    mobile
                    onNavigate={() => setMobileOpen(false)}
                  />
                );
              }
              return (
                <Link
                  key={`mobile-${item.label}`}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm font-medium text-haze hover:bg-white/[0.04] hover:text-platinum"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            }
          )}
        </nav>

        <div className="my-4 border-t border-as-line/70" />

        <nav aria-label="Public links" className="flex flex-col gap-1">
          {PUBLIC_LINKS.map((item) => (
            <Link
              key={`mobile-public-${item.href}`}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex min-h-11 items-center px-4 text-sm text-haze hover:text-platinum"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={accessHref("sign_in", pathname)}
            onClick={() => setMobileOpen(false)}
            className="flex min-h-11 items-center px-4 text-sm text-haze hover:text-platinum"
          >
            Log in
          </Link>
        </nav>

        <div className="mt-5 rounded-xl border border-as-line bg-midnight-soft/60 p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-haze">
            identity
          </p>
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              onClick={() => setMode("guest")}
              aria-pressed={mode === "guest"}
              className={clsx(
                "min-h-11 flex-1 rounded-lg border text-[13px] font-semibold",
                mode === "guest"
                  ? "border-iris bg-iris/15 text-platinum"
                  : "border-as-line text-haze"
              )}
            >
              Guest
            </button>
            <button
              type="button"
              onClick={() => setMode("account")}
              aria-pressed={mode === "account"}
              className={clsx(
                "min-h-11 flex-1 rounded-lg border text-[13px] font-semibold",
                mode === "account"
                  ? "border-iris bg-iris/15 text-platinum"
                  : "border-as-line text-haze"
              )}
            >
              account
            </button>
          </div>
          <p className="mt-2 text-[13px] leading-6 text-haze">
            The demo account unlocks gated screen states with synthetic
            entitlements. It is not a real sign-in and stores no personal data.
          </p>
        </div>
      </Dialog>

      <Dialog
        open={demoOpen}
        onClose={() => setDemoOpen(false)}
        title="identity"
        eyebrow="Synthetic demonstration"
        description="Switch between the public guest experience and a local demo account."
        width="md"
      >
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => {
              setMode("guest");
              setDemoOpen(false);
            }}
            aria-pressed={mode === "guest"}
            className={clsx(
              "flex min-h-12 items-start gap-3 rounded-xl border p-4 text-left transition-colors",
              mode === "guest"
                ? "border-iris bg-iris/10"
                : "border-as-line bg-as-panel/40 hover:border-iris/40"
            )}
          >
            <UserRound aria-hidden="true" className="mt-0.5 h-4 w-4 text-haze" />
            <span>
              <span className="block text-sm font-semibold text-platinum">
                Guest
              </span>
              <span className="mt-0.5 block text-[13px] leading-6 text-haze">
                Public research only. In-session status, no persistent alerts.
              </span>
            </span>
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("account");
              setDemoOpen(false);
            }}
            aria-pressed={mode === "account"}
            className={clsx(
              "flex min-h-12 items-start gap-3 rounded-xl border p-4 text-left transition-colors",
              mode === "account"
                ? "border-iris bg-iris/10"
                : "border-as-line bg-as-panel/40 hover:border-iris/40"
            )}
          >
            <ShieldCheck
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 text-iris-soft"
            />
            <span>
              <span className="block text-sm font-semibold text-platinum">
                account
              </span>
              <span className="mt-0.5 block text-[13px] leading-6 text-haze">
                Synthetic entitlements for reviewing gated states. No real
                sign-in, identity or server session.
              </span>
            </span>
          </button>
        </div>
        <p className="mt-4 border-t border-as-line/60 pt-4 font-mono text-[11px] uppercase leading-5 tracking-[0.1em] text-haze/75">
          Demonstration only · not approved for release
        </p>
      </Dialog>
    </div>
  );
}

