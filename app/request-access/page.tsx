import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function RequestAccessPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-md text-center">
        <Reveal>
          <h1 className="text-3xl font-semibold tracking-tight text-ink">Request Access</h1>
          <p className="mt-3 text-sm text-slate-600">
            The Talvrin request access form is coming soon.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
