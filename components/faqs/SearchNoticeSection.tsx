import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function SearchNoticeSection() {
  return (
    <section className="border-b border-ink/10 bg-white">
      <Container className="py-[31px] lg:max-w-[1332px]">
        <Reveal className="flex flex-wrap items-center gap-3.5">
          <span
            className="shrink-0 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider font-['IBM_Plex_Sans']"
            style={{
              backgroundColor: "rgba(185, 129, 50, 0.14)",
              color: "rgba(138, 90, 0, 1)",
            }}
          >
            FAQ search not published
          </span>
          <p className="max-w-[1100px] flex-1 text-sm leading-6 text-muted font-['IBM_Plex_Sans']">
            A governed public FAQ index is not yet available on this build. Every category and
            question below works by browsing — nothing here depends on search.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

