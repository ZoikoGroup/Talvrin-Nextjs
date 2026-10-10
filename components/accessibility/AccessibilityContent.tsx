
"use client";

import Image from "next/image";

const sections = [
  {
    id: "statement-covers",
    title: "1. What this statement covers",
    text: "This statement covers Talvrin’s public web experience — the Legal, Support, Trust and product-marketing surfaces people use before and after signing in. It describes our accessibility baseline, what is tested, what is known to fall short, and how to report a barrier. It is not a certification and does not substitute for an independently audited conformance report.",
    image: "image2.png",
  },
  {
    id: "accessibility-baseline",
    title: "2. Our accessibility baseline",
    text: "Talvrin targets WCAG 2.2 Level AA as the minimum baseline across its public experience. Meeting a baseline target is different from an independently verified conformance claim — see Current conformance posture above for exactly what is and is not established today.",
  },
  {
    id: "keyboard-focus",
    category: "NAVIGATE & OPERATE",
    title: "3. Keyboard and focus",
    text: "Every interactive control on Talvrin’s public pages is designed to be reachable and operable by keyboard alone, in a logical order, without being trapped. Focus stays visible and is not hidden behind sticky headers, banners or overlays.",
    image: "image3.png",
  },
  {
    id: "screen-readers",
    category: "PERCEIVE & UNDERSTAND",
    title: "4. Screen readers and semantic structure",
    text: "Pages use semantic landmarks, headings, lists and meaningful link and control names so screen reader users can understand structure and status without relying on visual layout alone.",
  },
  {
    id: "zoom-reflow",
    category: "NAVIGATE & OPERATE",
    title: "5. Zoom, reflow and text",
    text: "Core content and functionality remain usable at 320 CSS pixels width and 200% text zoom, without requiring two-dimensional scrolling or losing information.",
    image: "image4.png",
  },
  {
    id: "color-contrast",
    category: "PERCEIVE & UNDERSTAND",
    title: "6. Color, contrast and non-color cues",
    text: "Text, interface components and status indicators meet WCAG 2.2 AA contrast requirements, and meaning is never conveyed by color alone — text or an icon/shape always accompanies it.",
  },
  {
    id: "motion-animation",
    category: "PERCEIVE & UNDERSTAND",
    title: "7. Motion and animation",
    text: "Animations respect a visitor’s reduced-motion preference and never carry essential meaning — nothing you need to understand depends on watching something move.",
    image: "image5.png",
  },
  {
    id: "forms-errors",
    category: "FORMS & ACCESS",
    title: "8. Forms, errors and status messages",
    text: "Form fields keep persistent, programmatically associated labels; errors are described in plain language and linked to the field they affect; and status changes are announced to assistive technology without stealing focus.",
  },
  {
    id: "authentication",
    category: "FORMS & ACCESS",
    title: "9. Accessible authentication",
    text: "Signing in and account recovery must not depend solely on a cognitive-function test — such as remembering, transcribing or solving a puzzle — without an accessible alternative being available.",
    image: "image6.png",
  },
  {
    id: "charts-data",
    category: "PERCEIVE & UNDERSTAND",
    title: "10. Charts, market visuals and equivalent data",
    text: "Where Talvrin presents market or evidence data visually, an equivalent textual or tabular way to access the same information is provided — a chart is never the only way to reach the underlying data.",
  },
  {
    id: "documents-downloads",
    category: "FORMS & ACCESS",
    title: "11. Documents and downloads",
    text: "Any document Talvrin links from a public page — including accessibility evidence artifacts — is expected to meet the same accessibility baseline as the page that links to it before publication.",
    image: "image7.png",
  },
  {
    id: "media-transcripts",
    category: "FORMS & ACCESS",
    title: "12. Media and transcripts",
    text: "Where Talvrin publishes audio or video content, captions, transcripts or an equivalent alternative are provided. This section applies only to the extent Talvrin currently publishes such media.",
    notice:
      "Talvrin has not published a public media library requiring captioning at this time. This section will expand with specific commitments if that changes.",
  },
  {
    id: "mobile-touch",
    category: "NAVIGATE & OPERATE",
    title: "13. Mobile and touch",
    text: "Principal actions aim for touch targets of at least 44 by 44 CSS pixels with adequate spacing, and the experience is not forced into a single orientation.",
    image: "image8.png",
  },
  {
    id: "known-limitations",
    category: "REPORT & REMEDIATE",
    warning: true,
    title: "14. Known accessibility limitations",
    text: "Talvrin discloses known accessibility limitations here once they are confirmed through the approved accessibility issue register — including affected surface, user impact, status and any available workaround.",
    notice:
      "No approved Known Accessibility Issues register has been supplied yet. This does not mean the experience is defect-free — it means no governed issue record currently exists to publish here. Known issues will appear once the register is approved.",
  },
  {
    id: "workarounds",
    category: "REPORT & REMEDIATE",
    warning: true,
    title: "15. Workarounds",
    text: "Where a known limitation has an approved, genuinely useful alternative path, it is described alongside that limitation above rather than listed separately.",
    notice:
      "No approved workaround currently exists to publish, because no known-issue register has been approved yet.",
    image: "image9.png",
  },
];

export default function AccessibilityContent() {
  return (
    <section className="w-full overflow-hidden bg-violet-50 font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-8 px-5 py-10 sm:px-8 md:px-10 lg:grid-cols-[224px_minmax(0,1fr)] lg:gap-8 lg:px-12 lg:py-[72px] xl:grid-cols-[224px_minmax(0,1fr)] xl:gap-8 xl:px-16">
        {/* Table of contents */}
        <aside className="w-full min-w-0 lg:sticky lg:top-6">
          <p className="mb-3.5 text-xs font-bold tracking-wide text-gray-600">
            ON THIS PAGE
          </p>

          <nav
            aria-label="Accessibility statement sections"
            className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:max-h-[calc(100vh-100px)] lg:grid-cols-1 lg:overflow-y-auto"
          >
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex min-w-0 items-start gap-2 rounded-md px-2.5 py-2 text-sm text-slate-700 transition-colors hover:bg-indigo-500/10 hover:text-indigo-600"
              >
                <span className="shrink-0 text-gray-600">
                  {index + 1}.
                </span>
                <span>{section.title.replace(/^\d+\.\s*/, "")}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Accessibility statement sections */}
        <div className="min-w-0">
          {sections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-8 border-b border-slate-900/10 py-7 first:pt-0 sm:py-9"
            >
              <div
                className={`grid min-w-0 grid-cols-1 items-start gap-5 ${
                  section.image
                    ? "md:grid-cols-[minmax(0,1fr)_minmax(180px,288px)]"
                    : ""
                }`}
              >
                <div className="min-w-0">
                  {section.category && (
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="inline-flex rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-bold tracking-wide text-indigo-500">
                        {section.category}
                      </span>

                      {section.warning && (
                        <span className="inline-flex rounded-full bg-yellow-600/10 px-2.5 py-1 text-xs font-bold tracking-wide text-yellow-800">
                          NO APPROVED EVIDENCE PUBLISHED YET
                        </span>
                      )}
                    </div>
                  )}

                  <h2 className="text-xl font-bold leading-7 text-slate-900">
                    {section.title}
                  </h2>

                  <p className="mt-3 text-base font-normal leading-6 text-slate-700">
                    {section.text}
                  </p>

                  {section.notice && (
                    <div className="mt-5 rounded-[10px] border border-yellow-600/25 bg-yellow-600/10 px-4 py-3.5">
                      <p className="text-sm leading-5 text-yellow-900">
                        {section.notice}
                      </p>
                    </div>
                  )}
                </div>

                {section.image && (
                  <div className="relative mx-auto aspect-[4/3] w-full max-w-[288px] overflow-hidden rounded-2xl bg-pink-800 md:mt-0">
                    <Image
                      src={`/images/legal/accessibility/${section.image}`}
                      alt={`Accessibility statement illustration for ${section.title.replace(/^\d+\.\s*/, "").toLowerCase()}`}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 40vw, 288px"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
