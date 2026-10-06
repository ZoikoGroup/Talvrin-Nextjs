import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "../global-markets/shared";
import { SectionIntro } from "../release-notes/shared";
import { NotYetAvailable } from "../support-help-center/shared";
import { IMAGE_DIR } from "./shared";

export default function HistorySection() {
  return (
    <section id="history" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="History & Updates"
            tone="amber"
            title="Incident history and status updates."
          />
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,900px)_minmax(0,355px)] lg:justify-between">
          <div>
            <Reveal delay={0.05}>
              <div className="rounded-xl border border-ink/10 bg-surface px-6 py-6 sm:py-7">
                <p className="text-[15px] leading-6 text-ink">
                  No public incident or maintenance history is available yet. Once an approved
                  retention policy and publication source exist, resolved incidents and completed
                  maintenance will appear here with exact timestamps — nothing will be hidden to
                  improve appearance.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-11">
              <SectionEyebrow tone="violet">Notifications</SectionEyebrow>
              <h3 className="mt-3 text-xl font-bold text-ink">Status update subscriptions.</h3>
              <div className="mt-3 flex flex-col-reverse items-start gap-3 rounded-xl border border-ink/10 bg-surface px-5 py-5 sm:flex-row sm:justify-between sm:gap-6 sm:px-6">
                <p className="max-w-[540px] text-sm leading-[22px] text-muted">
                  Subscriptions are not yet available. We won&apos;t collect an email or phone number
                  for a channel that can&apos;t actually deliver updates — this section will only
                  appear live once a governed notification service exists.
                </p>
                <NotYetAvailable className="text-[11px]" />
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={0.2}
            className="relative mx-auto aspect-[355/343] w-full max-w-[355px] overflow-hidden rounded-2xl lg:mx-0"
          >
            <Image
              src={`${IMAGE_DIR}/system-status-history-handshake.webp`}
              alt="A smiling professional shaking hands with a colleague"
              fill
              sizes="(min-width: 1024px) 355px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
