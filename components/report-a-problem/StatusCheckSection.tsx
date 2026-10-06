import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../release-notes/shared";
import { NotYetAvailable } from "../support-help-center/shared";
import { UnknownDot } from "../system-status/shared";

export default function StatusCheckSection() {
  return (
    <section id="known-issues" className="scroll-mt-32 bg-white py-20 sm:py-[88px]">
      <Container>
        <div className="max-w-[900px]">
          <Reveal>
            <SectionIntro
              eyebrow="Status Check"
              tone="amber"
              title="Check for known or service-wide issues first."
              className="[&>p:last-child]:max-w-[680px]"
            >
              If many things seem broken at once, it may be a broader issue rather than something
              specific to your account or task.
            </SectionIntro>
          </Reveal>

          <Reveal delay={0.1} className="mt-7">
            <div className="flex flex-col-reverse items-start gap-3 rounded-2xl border border-ink/10 bg-surface p-5 sm:flex-row sm:justify-between sm:gap-6 sm:p-7">
              <div className="flex items-start gap-3.5">
                <span className="pt-1.5">
                  <UnknownDot />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-ink">Talvrin System Status</h3>
                  <p className="max-w-[520px] text-sm leading-6 text-muted">
                    Not yet available in this build. We won&apos;t show a status here until an
                    authoritative status service exists — you can still report your issue below
                    either way.
                  </p>
                </div>
              </div>
              <NotYetAvailable className="px-2.5 py-[5px] text-xs" />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="pt-4">
            <a
              href="#report-it"
              className="text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
            >
              Not a broad issue? Go to the report form →
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
