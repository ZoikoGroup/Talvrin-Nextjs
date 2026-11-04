import Image from "next/image";
import Link from "next/link";

type Tone = "current" | "alongside" | "conditional";

const documents: { title: string; description: string; status: string; tone: Tone; href?: string }[] = [
  {
    title: "Terms of Service",
    description: "This document — the core contractual terms for using Talvrin.",
    status: "THIS DOCUMENT",
    tone: "current",
  },
  {
    title: "Acceptable Use",
    description: "Prohibited conduct and platform-use rules that apply alongside these Terms.",
    status: "APPLIES ALONGSIDE",
    tone: "alongside",
    href: "/legal/acceptable-use",
  },
  {
    title: "AI Terms",
    description: "Additional terms governing AI-assisted features.",
    status: "APPLIES ALONGSIDE",
    tone: "alongside",
    href: "/legal/ai-terms",
  },
  {
    title: "Data & Market Information Terms",
    description: "Source-specific rights and permitted-use conditions for market information.",
    status: "APPLIES ALONGSIDE",
    tone: "alongside",
    href: "/legal/data-market-information-terms",
  },
  {
    title: "Enterprise agreement",
    description: "Organization-specific contract, where executed, referenced for entitled accounts only.",
    status: "CONDITIONAL",
    tone: "conditional",
  },
];

const badgeTones: Record<Tone, string> = {
  current: "bg-indigo-500/10 text-indigo-500",
  alongside: "bg-teal-800/10 text-teal-800",
  conditional: "bg-yellow-600/10 text-yellow-800",
};

export default function TermsOfServiceDocumentIndex() {
  return (
    <section className="w-full bg-surface font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-12 lg:py-16 xl:py-[72px]">
        <p className="text-[11px] sm:text-xs font-bold tracking-[0.1em] text-yellow-600">DOCUMENT INDEX</p>
        <h2 className="mt-2.5 sm:mt-3 max-w-[640px] text-2xl sm:text-3xl font-bold leading-tight sm:leading-9 text-slate-900">
          This document and the specialized terms that supplement it.
        </h2>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] xl:gap-5">
          <ul className="flex min-w-0 flex-col gap-3">
            {documents.map((doc) => {
              const inner = (
                <>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold leading-5 text-slate-900">{doc.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm leading-5 text-gray-600">{doc.description}</p>
                  </div>
                  <span
                    className={`shrink-0 whitespace-nowrap rounded-full px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold tracking-wide ${badgeTones[doc.tone]}`}
                  >
                    {doc.status}
                  </span>
                </>
              );
              const className =
                "flex flex-col items-start gap-3 rounded-xl border border-slate-900/10 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5";
              return (
                <li key={doc.title}>
                  {doc.href ? (
                    <Link
                      href={doc.href}
                      className={`${className} transition-colors hover:border-indigo-300 hover:bg-indigo-50/40`}
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div className={className} aria-current={doc.tone === "current" ? "page" : undefined}>
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="relative aspect-[413/436] w-full min-w-0 overflow-hidden rounded-2xl border border-slate-900/10 bg-white lg:aspect-auto lg:min-h-[320px]">
            <Image
              src="/images/legal/terms-of-service/terms-of-service-document-index-team-laptop.webp"
              alt="Colleagues gathered around a laptop, smiling and talking"
              fill
              sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 340px, 38vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
