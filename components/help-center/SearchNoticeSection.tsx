import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function SearchNoticeSection() {
  return (
    <section className="border-b border-ink/10 bg-white">
      <Container className="py-7 !max-w-[1200px] !px-4 sm:!px-6 lg:!px-0">
        <Reveal className="flex w-full flex-col items-start gap-3.5">
          <span
            className="shrink-0 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider font-['IBM_Plex_Sans']"
            style={{
              backgroundColor: "rgba(185, 129, 50, 0.14)",
              color: "rgba(138, 90, 0, 1)",
            }}
          >
            HELP SEARCH NOT PUBLISHED
          </span>
          <p
            className="w-full text-sm leading-6 font-['IBM_Plex_Sans']"
            style={{ color: "rgba(93, 90, 114, 1)" }}
          >
            A governed Help search index isn&apos;t available on this build yet. Everything below is reachable by browsing quick paths, topics, or the workflow, evidence and troubleshooting sections — nothing<br className="hidden md:inline" /> here depends on search.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
