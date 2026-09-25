import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

export default function CatalogSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="violet">Integration Catalog</SectionEyebrow>
          <SectionHeading>
            Released integrations appear here — from a governed registry, not a partner list.
          </SectionHeading>
          <SectionLede className="max-w-[760px] sm:text-base sm:leading-6">
            Search and filters will operate on public metadata only — capability, direction,
            category, lifecycle, and access — once at least one integration is published. Capability
            and permissions always vary by integration and are shown explicitly, never implied by
            logos or brand association.
          </SectionLede>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,780px)_minmax(0,499px)] lg:items-start lg:gap-6">
          <Reveal
            delay={0.1}
            className="flex flex-col items-center gap-2.5 rounded-2xl border border-ink/10 bg-white px-6 pb-10 pt-12 text-center sm:px-10 sm:pt-14"
          >
            <p className="text-lg font-semibold leading-7 text-ink">
              No integrations match this catalog yet.
            </p>
            <p className="max-w-[600px] text-base leading-6 text-slate-600">
              This catalog will list only integrations released through the approved Integration
              Registry, each with its own lifecycle, capability, permissions, and rights state.
              Until then, review the API Documentation shell, explore Data APIs, or return to
              Developer Overview.
            </p>
            <div className="mt-4 flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
              <LinkButton href="/developers/api-documentation" variant="primary">
                API Documentation
              </LinkButton>
              <LinkButton href="/developers/data-apis" variant="secondary">
                Data APIs
              </LinkButton>
              <LinkButton href="/developers/overview" variant="secondary">
                Developer Overview
              </LinkButton>
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative aspect-[499/400] w-full overflow-hidden rounded-2xl lg:aspect-[499/482]"
          >
            <Image
              src="/images/developers/integrations/integrations-catalog-workshop.webp"
              alt="Colleagues working together over notes at a table"
              fill
              sizes="(min-width: 1024px) 499px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
