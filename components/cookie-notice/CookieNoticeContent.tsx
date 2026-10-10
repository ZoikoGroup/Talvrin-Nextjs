
import Image from "next/image";

const sections = [
  {
    id: "what-cookies-are",
    title: "What cookies and similar technologies are",
    paragraphs: [
      'A cookie is a small piece of data a site stores in your browser to recognize your device or session across requests. "Similar technologies" is a broader term covering local storage, SDKs embedded in apps, pixels, tags and server-side identifiers that can achieve a comparable recognition or measurement effect.',
    ],
    examples: [
      "Cookies — stored by your browser per domain and sent back with later requests.",
      "Local storage — data a browser keeps for a site without expiring like a session cookie.",
      "SDKs — code embedded in apps or pages that can collect usage signals.",
      "Pixels and tags — small requests that record an event, such as a page view.",
    ],
  },
  {
    id: "why-talvrin-uses-them",
    title: "Why TALVRIN uses them",
    badge: "PURPOSE",
    paragraphs: [
      "Cookies and similar technologies generally support three purposes on a platform like TALVRIN: keeping the service working and secure, remembering a user’s choices, and measuring how the product is used so it can be improved. TALVRIN’s supplied operating principle is that analytics should track product intent and comprehension — not invasive behavioral surveillance.",
    ],
    notice:
      "The specific purposes mapped to specific technologies at TALVRIN are a publication dependency of the approved technology inventory. This section states the governing principle, not a confirmed deployment.",
  },
  {
    id: "technology-categories",
    title: "Cookie and technology categories",
    badge: "CATEGORIES",
    paragraphs: [
      "A typical notice organizes technologies into categories such as strictly necessary, preferences/functional, analytics/measurement, marketing/advertising and authenticated-product technologies. TALVRIN will use this structure once a category taxonomy is approved by Privacy/Legal.",
    ],
    notice:
      "No approved category taxonomy has been published yet. A category should never appear in the live inventory simply because it is common elsewhere — each one activates only once the approved registry and policy support it.",
  },
  {
    id: "strictly-necessary",
    title: "Strictly necessary technologies",
    badge: "STRICTLY NECESSARY",
    paragraphs: [
      'Strictly necessary technologies are the ones a site cannot function without — for example keeping a user signed in during a session, remembering security state, or balancing load across servers. These typically do not require optional consent, but the classification itself must be approved, not assumed by design convention.',
    ],
    notice:
      'TALVRIN has not published an approved strictly-necessary technology inventory. Overusing a "necessary" label to avoid consent requirements is a risk this notice is explicitly designed to prevent — see the category-classification rule above.',
  },
  {
    id: "preference-functional",
    title: "Preference and functional technologies",
    badge: "PREFERENCES — IF APPLICABLE",
    paragraphs: [
      "Preference or functional technologies remember choices such as display settings so they don’t need to be reset on every visit. This category appears only if TALVRIN actually deploys technologies of this kind.",
    ],
    notice:
      "No approved preference or functional technology inventory has been published.",
  },
  {
    id: "analytics-measurement",
    title: "Analytics and measurement",
    badge: "ANALYTICS — IF APPLICABLE",
    paragraphs: [
      "Analytics technologies measure how the product is used — which pages are visited, whether a workflow completes, where comprehension breaks down. TALVRIN’s supplied standard is that this measurement should be privacy-safe and should avoid invasive behavioral surveillance.",
    ],
    notice:
      "The specific analytics tools, vendors and data elements TALVRIN uses are a publication dependency of the approved analytics/advertising stack, which has not been supplied.",
  },
  {
    id: "marketing-advertising",
    title: "Marketing, advertising and social technologies",
    badge: "MARKETING — IF APPLICABLE",
    paragraphs: [
      "Marketing, advertising and social technologies support things like remarketing, ad measurement or embedded social content. This category is disclosed only if TALVRIN actually deploys technologies of this kind.",
    ],
    notice:
      "No marketing, advertising or social technology has been approved for disclosure on this notice.",
  },
  {
    id: "authenticated-product",
    title: "Authenticated-product technologies",
    badge: "AUTHENTICATED PRODUCT — IF APPLICABLE",
    paragraphs: [
      "Signed-in TALVRIN surfaces may use additional technologies — for example SDKs supporting in-product features — that differ from what runs on the public site. Any such technologies would be disclosed by surface and purpose.",
    ],
    notice:
      "No approved authenticated-product or SDK technology inventory has been published.",
  },
  {
    id: "third-party-providers",
    title: "Third-party providers",
    badge: "VENDOR DISCLOSURE",
    paragraphs: [
      "Where a third-party provider operates a cookie, SDK, pixel or tag on TALVRIN’s behalf, this notice discloses the provider, the domain or entity involved, and the purpose — sourced from an approved technology registry.",
    ],
    notice:
      "No approved third-party provider list has been published. No vendor name appears on this page until the registry and Privacy/Legal approve it.",
  },
  {
    id: "duration-expiry",
    title: "Duration and expiry",
    badge: "RETENTION",
    paragraphs: [
      "Technologies are typically session-based (cleared when the browser session ends) or persistent (stored for a set duration). Actual durations can change with browser or vendor behavior, so TALVRIN sources duration data from current deployment configuration rather than a fixed table maintained by hand.",
    ],
    notice:
      "No approved duration data has been published for any technology.",
  },
  {
    id: "consent-preference-logic",
    title: "Consent and preference logic",
    badge: "CONSENT",
    paragraphs: [
      "Where consent is required, TALVRIN intends to give equal prominence to allowed choices, avoid pre-selecting optional categories, and keep withdrawal as easy to reach as the initial choice. Core TALVRIN content stays accessible regardless of the choice made.",
    ],
    notice:
      "The regional consent model, default states and withdrawal mechanics depend on an approved Consent Policy Matrix and consent-management-platform configuration, neither of which has been supplied.",
    links: [
      { label: "Manage Cookie Preferences", href: "#cookie-choices" },
    ],
  },
  {
    id: "browser-device-controls",
    title: "Browser, device signals and controls",
    badge: "BROWSER CONTROLS",
    paragraphs: [
      "Most browsers let you block, delete or be notified about cookies through their own settings, independent of anything TALVRIN configures. Signals such as Do Not Track (DNT) or Global Privacy Control (GPC) are disclosed as supported only if TALVRIN’s systems actually honor them.",
    ],
    notice:
      "TALVRIN has not published verified technical support for DNT or GPC. No such support is claimed on this page until it is confirmed.",
  },
  {
    id: "regional-differences",
    title: "International and regional differences",
    badge: "REGIONAL",
    paragraphs: [
      "Cookie and consent requirements differ by jurisdiction — for example around opt-in versus opt-out defaults, or what counts as strictly necessary. TALVRIN’s supplied standard allows legal and privacy experiences to vary by region when the underlying requirements materially differ.",
    ],
    notice:
      "No approved regional legal matrix has been published, so no jurisdiction-specific consent rule is stated here.",
  },
  {
    id: "notice-changes",
    title: "Changes to this notice and inventory",
    badge: "VERSIONING",
    paragraphs: [
      "TALVRIN may update this notice as its technology inventory, consent configuration or legal requirements change. Material changes are reflected in the version and effective-date metadata at the top of this page.",
    ],
    notice:
      "A public change log for this notice is not yet available.",
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "Questions about this Cookie Notice, or requests to exercise an applicable choice, route to TALVRIN’s privacy/legal contact channel below.",
    ],
    links: [
      { label: "Contact Support", href: "/contact-support" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
  {
    id: "cookie-inventory-annex",
    title: "Cookie inventory annex",
    badge: "OPTIONAL — DYNAMIC REGISTRY VIEW",
    paragraphs: [
      "A dynamic, registry-driven table of every active technology — name, provider, category, purpose and duration — can render here once the authoritative Cookie/SDK/Tag Registry exists and SEO/Privacy approve indexing.",
    ],
    notice:
      "This annex is not available yet. It will not render a hand-maintained or illustrative list in the meantime.",
  },
];

const sectionImages: Record<number, { src: string; alt: string }> = {
  1: {
    src: "/images/legal/cookie-notice/image1.png",
    alt: "Colleagues discussing technology in an office",
  },
  5: {
    src: "/images/legal/cookie-notice/image2.png",
    alt: "Professionals working together at a desk",
  },
  9: {
    src: "/images/legal/cookie-notice/image3.png",
    alt: "Colleagues discussing a project",
  },
  13: {
    src: "/images/legal/cookie-notice/image4.png",
    alt: "Professionals reviewing documents together",
  },
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function StatusBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-yellow-600/10 px-2.5 py-1 text-[10px] font-bold tracking-wide text-yellow-800 sm:text-xs">
      {children}
    </span>
  );
}

function CategoryBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-indigo-500/10 px-2.5 py-1 text-[10px] font-bold tracking-wide text-indigo-500 sm:text-xs">
      {children}
    </span>
  );
}

function NoticeBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[10px] border border-yellow-600/25 bg-yellow-600/10 px-4 py-3.5 text-sm leading-5 text-yellow-900">
      {children}
    </div>
  );
}

export default function CookieNoticeContent() {
  return (
    <section className="w-full bg-violet-50 text-slate-900">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-8 px-5 py-12 sm:px-8 md:px-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8 lg:px-12 lg:py-[74px] xl:grid-cols-[240px_minmax(0,1fr)_266px] xl:gap-2 xl:px-20">
        {/* Table of contents */}
        <aside className="lg:sticky lg:top-8 lg:max-h-[calc(100vh-64px)] lg:overflow-y-auto">
          <h2 className="mb-3.5 text-xs font-bold tracking-wide text-gray-600">
            ON THIS PAGE
          </h2>

          <nav aria-label="Cookie Notice contents">
            <ol className="flex flex-col gap-0.5">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex items-start gap-2 rounded-md px-2.5 py-2 text-sm leading-5 text-slate-700 transition-colors hover:bg-indigo-500/10 hover:text-indigo-600"
                  >
                    <span className="shrink-0 text-gray-600">
                      {index + 1}.
                    </span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Policy sections */}
        <div className="min-w-0">
          {sections.map((section, index) => {
            const number = index + 1;
            const image = sectionImages[number];
            const isFirst = number === 1;

            return (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-8 border-b border-slate-900/10 py-8 first:pt-0 last:border-b-0"
              >
                {/* Section badges */}
                {(section.badge || isFirst) && (
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    {section.badge && (
                      <CategoryBadge>{section.badge}</CategoryBadge>
                    )}

                    {number !== 15 && (
                      <StatusBadge>
                        NO APPROVED INVENTORY PUBLISHED YET
                      </StatusBadge>
                    )}
                  </div>
                )}

                <h2 className="text-lg font-bold leading-7 text-slate-900 sm:text-xl">
                  {number}. {section.title}
                </h2>

                <div
                  className={
                    image
                      ? "mt-3 grid grid-cols-1 items-start gap-5 sm:grid-cols-[minmax(0,1fr)_180px] xl:grid-cols-1"
                      : "mt-3"
                  }
                >
                  <div className="min-w-0">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-6 text-slate-700 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.examples && (
                      <div className="mt-4 rounded-[10px] border border-slate-900/10 bg-white p-4">
                        <h3 className="mb-3 text-xs font-bold tracking-wide text-gray-600">
                          ILLUSTRATIVE EXAMPLES — NON-EXHAUSTIVE
                        </h3>

                        <ul className="flex flex-col gap-2">
                          {section.examples.map((example) => (
                            <li
                              key={example}
                              className="flex items-start gap-2.5 text-sm leading-5 text-gray-600"
                            >
                              <span className="mt-2 size-[5px] shrink-0 rounded-full bg-yellow-600" />
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {image && (
                    <div className="relative aspect-[2/3] w-full max-w-[266px] overflow-hidden rounded-2xl sm:aspect-[3/4] xl:hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 639px) 100vw, 180px"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                {section.notice && (
                  <div className="mt-4">
                    <NoticeBox>{section.notice}</NoticeBox>
                  </div>
                )}

                {section.links && (
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="text-xs font-semibold text-gray-600">
                      Related:
                    </span>

                    {section.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-sm font-semibold text-indigo-500 hover:text-indigo-700"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Desktop image rail */}
        <aside className="hidden xl:flex xl:flex-col xl:gap-[220px]">
          {[1, 5, 9, 13].map((number) => {
            const image = sectionImages[number];

            return (
              <div
                key={number}
                className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="266px"
                  className="object-cover"
                />
              </div>
            );
          })}
        </aside>
      </div>
    </section>
  );
}
