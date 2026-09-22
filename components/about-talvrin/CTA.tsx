import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <>
      {/* CTA Section */}
      <section className="border-t border-[#171335]/10 bg-[#F6F5FB] py-20 lg:py-32">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              See the evidence. Build the view.
              <br />
              Know when it changes.
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We cannot remove uncertainty from markets &mdash; and technology should not pretend that it can.
              <br />
              What we can build is a better way to understand that uncertainty.
            </p>
            <p className="mt-4 text-base leading-6 text-gray-600">
              A way to see the evidence, know where it came from, understand its context, recognize what changed and
              <br />
              keep research connected to the facts on which it depends. That is why Talvrin exists.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-slate-900 px-7 py-4 text-base font-semibold text-violet-50 transition-colors hover:bg-slate-800">
                Explore Talvrin
              </button>
              <button className="rounded-lg px-7 py-4 text-base font-semibold text-slate-900 outline outline-1 outline-slate-900/25 transition-colors hover:bg-slate-900/5">
                Request Access
              </button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}