import Image from "next/image";

const faqs = [
  {
    question: "What are these Terms?",
    answer:
      "The contractual terms that govern your access to and use of Talvrin. Specialized terms — Acceptable Use, AI Terms and Data & Market Information Terms — apply alongside them where they address a more specific behavior.",
  },
  {
    question: "Which version applies to me?",
    answer:
      "The version shown at the top of this page (currently v1.0, still a draft pending Legal sign-off). If your organization has an executed enterprise agreement, it also governs your use alongside these Terms.",
  },
  {
    question: "Is Talvrin investment advice?",
    answer:
      "No. Talvrin is a research and intelligence platform. It does not execute trades or make buy, sell or hold recommendations, and you remain responsible for your own investment decisions.",
  },
  {
    question: "Can these Terms change?",
    answer:
      "Yes. Talvrin may update these Terms as the product, applicable law or business needs change. Material changes come with an updated effective date and, where required, additional notice.",
  },
];

export default function TermsOfServiceFaq() {
  return (
    <section className="w-full bg-white font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-14 lg:py-16 xl:py-20">
        <p className="text-[11px] sm:text-xs font-bold tracking-[0.1em] text-indigo-500">FAQ</p>
        <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl font-bold leading-tight sm:leading-9 text-slate-900">
          Common questions, answered plainly.
        </h2>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 items-start gap-3 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)]">
          <div className="flex min-w-0 flex-col gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-900/10 bg-surface"
              >
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 sm:px-5 text-sm sm:text-base font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span aria-hidden="true" className="shrink-0 text-sm text-gray-600 group-open:hidden">
                    +
                  </span>
                  <span aria-hidden="true" className="hidden shrink-0 text-sm text-gray-600 group-open:inline">
                    −
                  </span>
                </summary>
                <p className="px-4 pb-4 sm:px-5 text-sm leading-6 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="relative aspect-[367/265] w-full min-w-0 overflow-hidden rounded-2xl">
            <Image
              src="/images/legal/terms-of-service/terms-of-service-faq-classroom.webp"
              alt="A full lecture room with people working at desks facing a projected screen"
              fill
              sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 340px, 30vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
