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
          <SectionEyebrow tone="violet">Data API Catalog</SectionEyebrow>
          <SectionHeading>
            Released data interfaces appear here — from a governed registry, not a promise.
          </SectionHeading>
          <SectionLede className="max-w-[760px] sm:text-base sm:leading-6">
            Search and filters will operate on public metadata only — market, domain, lifecycle,
            access, and freshness — once at least one interface is published. Coverage and access
            always vary by interface and are shown explicitly, never implied by Talvrin&apos;s
            platform architecture.
          </SectionLede>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,760px)_minmax(0,519px)] lg:items-start lg:gap-6">
          <Reveal
            delay={0.1}
            className="flex flex-col items-center gap-2.5 rounded-2xl border border-ink/10 bg-white px-6 pb-10 pt-12 text-center sm:px-10 sm:pt-14"
          >
            <p className="text-lg font-semibold leading-7 text-ink">
              No Data APIs match this catalog yet.
            </p>
            <p className="max-w-[600px] text-base leading-6 text-slate-600">
              This catalog will list only interfaces released through the approved Data API
              Registry, each with its own lifecycle, coverage, access, and version state. Until
              then, review the API Documentation shell or explore the Talvrin platform and research
              model.
            </p>
            <div className="mt-4 flex w-full flex-col items-stretch gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
              <LinkButton href="/developers/api-documentation" variant="primary">
                API Documentation
              </LinkButton>
              <LinkButton href="/developers/overview" variant="secondary">
                Developer Overview
              </LinkButton>
              <LinkButton href="/product/evidence" variant="secondary">
                Explore Evidence
              </LinkButton>
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative aspect-[519/285] w-full overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/developers/data-APIs/data-apis-catalog-team.webp"
              alt="Colleagues reviewing work together in an office"
              fill
              sizes="(min-width: 1024px) 519px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
