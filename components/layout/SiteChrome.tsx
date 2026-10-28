"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

/**
 * The marketing site chrome is hidden on the research assistant surface,
 * which has its own dark shell and navigation. Keeping the switch here means
 * every existing marketing route keeps its current layout untouched.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAssistant = pathname?.startsWith("/assistant");

  if (isAssistant) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
