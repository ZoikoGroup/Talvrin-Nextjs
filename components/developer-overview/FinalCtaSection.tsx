import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-ink/10 bg-white py-14 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[680px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Not much to build against yet — but the truth is exact.
          </h2>
          <p className="max-w-[600px] text-base text-slate-600">
            Explore the platform and research model to see it, or reach out about enterprise
            integration once you are ready.
          </p>
          <div className="mt-2 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="/product/overview" variant="primary">
              Explore Talvrin
            </LinkButton>
            <LinkButton href="/solutions/enterprise" variant="secondary">
              Enterprise Enquiries
            </LinkButton>
          </div>
          <p className="max-w-[640px] text-sm text-slate-500">
            Research and intelligence platform. No trade execution. No manufactured investment
            recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
