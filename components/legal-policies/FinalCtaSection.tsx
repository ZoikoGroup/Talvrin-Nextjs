import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section id="contact-legal" className="scroll-mt-24 border-t border-ink/10 bg-surface py-16 sm:py-20">
      <Container>
        <Reveal className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Need help interpreting a notice?
          </h2>
          <p className="text-base leading-6 text-slate-600">
            Route questions to Legal or Privacy rather than Support. This index is not a substitute
            for your organization&apos;s signed agreement with Talvrin.
          </p>
          <div className="mt-3 flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/company/contact" variant="primary" className="px-6 py-3.5 text-base">
              Contact Legal / Privacy
            </LinkButton>
            <LinkButton href="/trust/trust-center" variant="ghost" className="px-6 py-3.5 text-base">
              Explore Trust Center →
            </LinkButton>
          </div>
          <p className="rounded-lg bg-accent-amber/20 px-3.5 py-2 text-xs font-bold text-yellow-800">
            Policy Change Log — not yet available
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
