import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const acceptance = [
  {
    tag: "Structure",
    body: "One H1, logical heading order, landmarks, and a skip link — headings are never used only for visual size.",
  },
  {
    tag: "Tables",
    body: "Compatibility matrices carry real header rows and scope semantics; narrow view becomes labeled records, not a clipped table.",
  },
  {
    tag: "Code",
    body: "Code blocks show a visible language and version label, with a keyboard-operable copy control and accessible status.",
  },
  {
    tag: "Focus",
    body: "Visible focus is never obscured by a sticky header or local table of contents; order matches the DOM.",
  },
  {
    tag: "Reflow",
    body: "Usable at 320px width and 200% zoom, with no loss of function and no page-level horizontal scroll.",
  },
  {
    tag: "Color",
    body: "Lifecycle, compatibility, and security states never depend on color alone.",
  },
  {
    tag: "Motion",
    body: "prefers-reduced-motion is honored; no essential meaning lives only in an animated version change.",
  },
  {
    tag: "No JS",
    body: "Core availability, catalog, detail, install, and reference content stay usable without client-side rendering.",
  },
];

export default function AccessibilitySection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Accessibility &amp; Responsive Acceptance</SectionEyebrow>
          <SectionHeading>Every line below is release-blocking, not a nice-to-have.</SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,920px)_minmax(0,335px)] lg:items-start lg:gap-8">
          <Reveal delay={0.1} className="overflow-hidden rounded-2xl border border-ink/10">
            <dl>
              {acceptance.map((item, index) => (
                <div
                  key={item.tag}
                  className={`flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-6 sm:px-6 ${
                    index % 2 === 1 ? "bg-surface" : "bg-white"
                  }`}
                >
                  <dt className="shrink-0 sm:w-24">
                    <span className="inline-flex rounded bg-accent-violet/10 px-2 py-1 font-mono text-xs font-bold uppercase tracking-wide text-accent-violet">
                      {item.tag}
                    </span>
                  </dt>
                  <dd className="text-sm leading-5 text-slate-700">{item.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl sm:aspect-[2/1] lg:aspect-[335/543]"
          >
            <Image
              src="/images/developers/SDKs/sdks-accessibility-workshop.webp"
              alt="Large team meeting around a table"
              fill
              sizes="(min-width: 1024px) 335px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
