import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { outlineOnDark } from "./shared";

export default function FinalCtaSection() {
  return (
    <section className="bg-ink py-16 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[640px] flex-col items-center gap-[18px] text-center">
          <h2 className="text-3xl font-bold leading-[1.2] text-white sm:text-4xl lg:text-[34px] lg:leading-[40.8px]">
            Ready to put the guidance to work?
          </h2>
          <div className="flex w-full flex-col items-stretch gap-4 pt-1 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/resources/getting-started" variant="onDark" className="px-7 py-[15px] text-base">
              Getting Started
            </LinkButton>
            <Link href="/request-access" className={outlineOnDark}>
              Request Access
            </Link>
          </div>
          <p className="max-w-[600px] pt-1 text-sm text-white/55">
            Research and intelligence platform. No trade execution. No manufactured investment
            recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
