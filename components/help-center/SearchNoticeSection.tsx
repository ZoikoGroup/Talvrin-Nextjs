import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function SearchNoticeSection() {
  return (
    <section className="border-b border-ink/10 bg-white">
      <Container className="py-7">
        <Reveal className="flex max-w-[1200px] flex-col items-start gap-3.5">
          <span className="rounded-full bg-accent-amber/10 px-2.5 py-[5px] text-xs font-bold uppercase tracking-wide text-[#8A5A00]">
            Help search not published
          </span>
          <p className="max-w-[1100px] pr-2 text-sm leading-6 text-muted">
            A governed Help search index isn&apos;t available on this build yet. Everything below
            is reachable by browsing quick paths, topics, or the workflow, evidence and
            troubleshooting sections — nothing here depends on search.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
