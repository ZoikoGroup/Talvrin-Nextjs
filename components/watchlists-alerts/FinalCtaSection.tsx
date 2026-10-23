import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <Container>
        <Reveal className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center">
          <h2 className="max-w-[520px] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Return to the evidence when it changes.
          </h2>
          <p className="text-base leading-6 text-white/70">
            Request access to Talvrin, or explore how watchlists and alerts fit into the wider
            research workflow.
          </p>
          <div className="mt-3 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/request-access" variant="onDark" className="px-7 py-[15px] text-base">
              Request Access
            </LinkButton>
            <Link
              href="/product/overview"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-base font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              See the Full Platform
            </Link>
          </div>
          <p className="text-sm text-white/50">
            Research prompts, not trading instructions. No guarantee that every change will be
            detected.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
