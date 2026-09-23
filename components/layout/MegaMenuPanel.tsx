import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { menuImage, type MegaMenuContent } from "@/lib/navigation";

type MegaMenuPanelProps = {
  content: MegaMenuContent | null;
  isOpen: boolean;
  onNavigate?: () => void;
};

export default function MegaMenuPanel({ content, isOpen, onNavigate }: MegaMenuPanelProps) {
  return (
    <div
      className={clsx(
        "absolute left-1/2 top-full z-40 w-full max-w-[1292px] -translate-x-1/2 px-4 pt-3 transition-all duration-200 sm:px-6 lg:px-8",
        isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-1 opacity-0 invisible"
      )}
    >
      <div className="flex gap-6 rounded-2xl border-y border-[#10211D]/[0.08] bg-white px-[26px] py-[22px] shadow-[0_24px_48px_0_rgba(16,33,29,0.10)]">
        {content && (
          <>
            <div className="flex-1">
              <div
                className="grid gap-x-10 gap-y-8"
                style={{ gridTemplateColumns: `repeat(${content.columns.length}, minmax(0, 1fr))` }}
              >
                {content.columns.map((column) => (
                  <div key={column.heading}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {column.heading}
                    </p>
                    <ul className="mt-4 space-y-5">
                      {column.items.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} onClick={onNavigate} className="group block">
                            <p className="text-[15px] leading-none font-semibold text-[#10211D] transition-colors group-hover:text-brand">
                              {item.title}
                            </p>
                            <p className="mt-1.5 text-[13px] leading-[18.2px] text-[#55615D]">
                              {item.description}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link
                  href={content.cta.href}
                  onClick={onNavigate}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-ink-2"
                >
                  {content.cta.label} <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="relative hidden w-[240px] shrink-0 overflow-hidden rounded-xl lg:block">
              <Image src={menuImage.src} alt={menuImage.alt} fill className="object-cover" sizes="240px" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
