import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function CTASection() {
  return (
    <section className="bg-[#171335] py-20 sm:py-24">
      <Container className="max-w-[1320px]">
        <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight text-[#F6F5FB] sm:text-4xl lg:text-[42px] lg:leading-[48.3px]">
              Partner where it genuinely helps.
              <br />
              Nowhere it doesn&apos;t.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-base leading-[26px] text-[rgba(246,245,251,0.72)] sm:text-[17px] sm:leading-[27.2px]">
              Every principle, category, and next step on this page is tied to what&apos;s actually approved —
              <br className="hidden sm:inline" />
              never invented to make a conversation look further along than it is.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#start-enquiry"
              className="inline-flex items-center justify-center rounded-[8px] bg-[#F6F5FB] px-7 py-4 text-base font-semibold text-[#171335] transition-all duration-200 hover:bg-white hover:shadow-lg"
            >
              Explore a Partnership
            </a>
            <Link
              href="/company/contact"
              className="inline-flex items-center justify-center rounded-[8px] border border-[rgba(246,245,251,0.3)] bg-transparent px-7 py-4 text-base font-semibold text-[#F6F5FB] transition-all duration-200 hover:border-white hover:bg-white/5"
            >
              Contact Talvrin
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
