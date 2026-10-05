import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow } from "../global-markets/shared";
import { outlineOnDark } from "./shared";

export default function NewToTalvrinSection() {
  return (
    <section className="bg-ink py-20 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <SectionEyebrow tone="violet">New to Talvrin?</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
            Start with the fundamentals.
          </h2>
          <p className="mt-4 max-w-[680px] text-base leading-[25.6px] text-white/75">
            Getting Started walks through the research workflow end to end before you dive into
            task-specific Help Center guidance.
          </p>
          <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/resources/getting-started" variant="onDark" className="px-7 py-[15px] text-base">
              Open Getting Started
            </LinkButton>
            <a href="#topics" className={outlineOnDark}>
              Browse Help topics
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
