import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-ink/8 bg-surface py-14 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-[18px] text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[42px]">
            Build research that remains connected to the evidence.
          </h2>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg">
            Research global public markets, inspect the supporting evidence and monitor what
            changes next.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <LinkButton href="/product/overview" variant="primary">
              Explore Talvrin
            </LinkButton>
            <LinkButton href="/request-access" variant="secondary">
              Request Access
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
