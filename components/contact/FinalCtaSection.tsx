import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow } from "./shared";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-ink/10 bg-white py-14 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[680px] flex-col items-center gap-4 text-center">
          <SectionEyebrow>Not Sure Which Route to Use?</SectionEyebrow>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Review the specialist destinations first. If none matches, submit a concise general
            enquiry so it can be routed.
          </h2>
          <div className="mt-2 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="#general-enquiry" variant="primary">
              Submit a General Enquiry
            </LinkButton>
            <LinkButton href="/about-talvrin" variant="secondary">
              About Talvrin
            </LinkButton>
          </div>
          <Link
            href="/company/newsroom"
            className="text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
          >
            Visit the Newsroom →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
