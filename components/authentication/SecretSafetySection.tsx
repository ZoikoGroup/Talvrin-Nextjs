import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const always = [
  "Environment-variable or secret-manager placeholders in every code sample.",
  "Credential material redacted in error messages and debug views.",
  "Paste, autofill, and password-manager use permitted for credentials and codes.",
  "Only a public example ID recorded when a copy action fires.",
  "Explicit user review required before a support bundle is submitted.",
  "Accessibility requirements treated as evidence-based, never removed for visual control.",
];

export default function SecretSafetySection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="violet">Secret Safety</SectionEyebrow>
          <SectionHeading>
            Secrets never become documentation, analytics, or debug payload.
          </SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-6">
            Credential material is excluded from URLs, analytics, logs, code repositories, browser
            bundles, support screenshots, and search indexes — by default, not by exception.
          </SectionLede>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-ink/10 bg-white lg:grid-cols-2"
        >
          <div className="relative aspect-[3/2] w-full lg:aspect-auto lg:min-h-[340px]">
            <Image
              src="/images/developers/authentication/authentication-secret-safety-desk.webp"
              alt="Developer working at a desk beside a window"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-wide text-green-600">Always</p>
            <ul className="mt-4">
              {always.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-ink/10 py-3 text-sm leading-5 text-slate-700 last:border-b-0"
                >
                  <span className="text-green-600" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
