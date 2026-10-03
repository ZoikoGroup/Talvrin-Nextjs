import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function SearchNoticeSection() {
  return (
    <section className="border-b border-ink/10 bg-white">
      <Container className="py-7">
        <Reveal className="flex flex-wrap items-start gap-3.5">
          <span className="rounded-full bg-accent-amber/10 px-2.5 py-[5px] text-xs font-bold uppercase tracking-wide text-[#8A5A00]">
            FAQ search not published
          </span>
          <p className="max-w-[1100px] flex-1 text-sm leading-6 text-muted">
            A governed public FAQ index is not yet available on this build. Every category and
            question below works by browsing — nothing here depends on search.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
