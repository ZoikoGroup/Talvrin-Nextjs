import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-ink/8 bg-surface py-16 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[720px] flex-col items-center gap-[18px] text-center">
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
            Build a research process you can trust and revisit.
          </h2>
          <p className="max-w-[700px] text-base leading-[26px] text-muted sm:text-[17px]">
            Explore how Talvrin can help you ask better questions, inspect sources, and know when the
            evidence changes.
          </p>
          <div className="flex w-full flex-col items-stretch gap-4 pt-2 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/product/overview" className="px-7 py-[15px] text-base">
              Explore Talvrin
            </LinkButton>
            <LinkButton href="/product/how-talvrin-works" variant="ghost" className="px-7 py-[15px] text-base">
              See How Talvrin Works
            </LinkButton>
          </div>
          <p className="max-w-[640px] pt-1 text-sm text-muted">
            Research and intelligence platform. No trade execution. No stock tips. No manufactured
            investment recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
