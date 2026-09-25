import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const commitments = [
  "No memory, transcription, or manipulation puzzle as the only path through authentication.",
  "Paste, autofill, and password-manager use permitted unless a documented, accessibility-reviewed reason restricts it.",
  "Any CAPTCHA or bot check carries an accessible alternative, never assumed just because the page concerns authentication.",
  "Time-limited steps announce their timing and offer an accessible extension or restart — work is never silently discarded.",
];

export default function AccessibleAuthSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="amber">Accessible Authentication</SectionEyebrow>
          <SectionHeading>
            Accessible verification and recovery are release-blocking, not an exception path.
          </SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-6">
            WCAG 2.2 AA is the minimum for every sign-in, verification, credential-creation,
            consent, and recovery step linked from this page.
          </SectionLede>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[repeat(2,minmax(0,1fr))_minmax(0,629px)]">
          {commitments.map((commitment, index) => (
            <Reveal
              key={commitment}
              delay={index * 0.05}
              className="flex items-start gap-3 rounded-2xl bg-surface p-5"
            >
              <span
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border border-accent-violet/40 text-xs text-accent-violet"
                aria-hidden="true"
              >
                ✓
              </span>
              <p className="text-sm leading-5 text-slate-700">{commitment}</p>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative aspect-[3/2] overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:aspect-auto"
          >
            <Image
              src="/images/developers/authentication/authentication-accessible-conversation.webp"
              alt="Two colleagues in conversation in an office"
              fill
              sizes="(min-width: 1024px) 629px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
