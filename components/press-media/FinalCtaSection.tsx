import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow } from "./shared";

export default function FinalCtaSection() {
  return (
    <section id="resources" className="scroll-mt-32 border-t border-ink/10 bg-surface py-14 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[680px] flex-col items-center gap-4 text-center">
          <SectionEyebrow>Find the Right Talvrin Resource</SectionEyebrow>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Use the official Newsroom for published updates, the media enquiry route for
            professional requests, or About Talvrin for company context.
          </h2>
          <div className="mt-2 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="#media-enquiry" variant="primary">
              Submit a Media Enquiry
            </LinkButton>
            <LinkButton href="/company/newsroom" variant="secondary">
              Visit the Newsroom
            </LinkButton>
          </div>
          <Link
            href="/company/about-talvrin"
            className="text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
          >
            About Talvrin →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
