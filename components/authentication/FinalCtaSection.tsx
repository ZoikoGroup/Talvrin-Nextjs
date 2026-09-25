import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-ink/10 bg-white py-14 sm:py-[88px]">
      <Container>
        <Reveal className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            No method to authenticate with yet — but the access model is exact.
          </h2>
          <p className="max-w-[660px] text-base leading-6 text-slate-600">
            Read the identity, access, and entitlement model above to understand how a released
            method will be evaluated, or reach out about enterprise access needs before anything
            ships.
          </p>
          <div className="mt-3 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <LinkButton href="#access-model" variant="primary">
              Read the Access Model
            </LinkButton>
            <LinkButton href="/resources/contact-support" variant="secondary">
              Contact Support
            </LinkButton>
          </div>
          <p className="max-w-[680px] text-sm text-slate-600">
            Research and intelligence platform. No trade execution. No manufactured investment
            recommendations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
