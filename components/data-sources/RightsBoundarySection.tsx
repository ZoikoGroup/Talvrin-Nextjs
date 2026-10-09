import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CardLink } from "../release-notes/shared";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR } from "./shared";

export default function RightsBoundarySection() {
  return (
    <section id="rights-boundary" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] xl:grid-cols-[minmax(0,792px)_minmax(0,450px)] xl:justify-between">
        <div>
          <Reveal>
            <SectionIntro
              eyebrow="Transparency Does Not Override Rights"
              title="Source transparency does not override data rights."
              className="[&>p:last-child]:max-w-[660px]"
            >
              A public-safe rights/access state is shown only where it helps explain why a source can
              or cannot be opened. Talvrin does not publish contract terms, vendor pricing, customer
              entitlements, redistribution permissions or legal interpretations unless specifically
              approved for public disclosure. If a source name is itself confidential, the approved
              generic class or state is shown instead of inventing or exposing the provider.
            </SectionIntro>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <div className="rounded-2xl bg-surface px-6 py-7 sm:px-7">
              <h3 className="text-base font-bold text-ink">
                Licensing, entitlement and redistribution live in Data Rights
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                This page explains source identity, classification, provenance and coverage.
                Licensing, entitlement, permitted-use and redistribution principles are the dedicated
                subject of Data Rights.
              </p>
              <div className="mt-4">
                <CardLink href="/trust/data-rights">Understand Data Rights</CardLink>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative mx-auto aspect-[450/479] w-full max-w-[450px] overflow-hidden rounded-2xl lg:mx-0"
        >
          <Image
            src={`${IMAGE_DIR}/data-sources-rights-boundary-meeting.webp`}
            alt="An adviser reviewing paperwork with two clients at a cafe table"
            fill
            sizes="(min-width: 1280px) 450px, (min-width: 1024px) 380px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
