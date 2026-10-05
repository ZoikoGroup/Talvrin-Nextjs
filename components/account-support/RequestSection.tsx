import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../release-notes/shared";
import RequestForm from "./RequestForm";

const neverInclude = [
  "Passwords, one-time codes, recovery codes, API keys, or private keys.",
  "Payment credentials or unnecessary government identifiers.",
  "Attachments are not currently supported — don't link to files with sensitive content.",
  "Submitting does not guarantee a response time — no service-level commitment is published yet.",
];

export default function RequestSection() {
  return (
    <section id="request" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Account Support Request"
            tone="amber"
            title="Submit a request for the remaining details."
            className="[&>p:last-child]:max-w-[900px] [&>p:last-child]:leading-7"
          >
            This is the only currently active account-help channel. Nothing here substitutes for your
            approved sign-in or recovery flow.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <div className="rounded-2xl border border-ink/10 bg-surface px-5 pb-5 pt-6 sm:px-6 sm:pt-7">
            <h3 className="text-xs font-bold uppercase tracking-wide text-muted">Never include</h3>
            <ul className="mt-3 flex flex-col gap-2.5">
              {neverInclude.map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px] leading-6 text-ink sm:text-base">
                  <span aria-hidden="true" className="text-accent-violet">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <RequestForm />
        </Reveal>
      </Container>
    </section>
  );
}
