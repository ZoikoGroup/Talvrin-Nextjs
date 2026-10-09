import Image from "next/image";
import type { ReactNode } from "react";

type IssueCard = {
  title: string;
  description: ReactNode;
  status: "Available" | "Not Yet Available";
  footer?: string;
  notice?: ReactNode;
};

const issueCards: IssueCard[] = [
  {
    title: "Product Help",
    description: (
      <>
        How-do-I questions about a released
        <br className="hidden lg:block" />
        feature or workflow.
      </>
    ),
    status: "Available",
    footer: "Start This Request",
  },
  {
    title: "Account or Access",
    description: (
      <>
        Sign-in problems or access-state
        <br className="hidden lg:block" />
        issues with your account.
      </>
    ),
    status: "Available",
    footer: "Start This Request",
  },
  {
    title: "Evidence or Source",
    description: (
      <>
        Provenance, versioning, or source-
        <br className="hidden lg:block" />
        visibility questions tied to your
        <br className="hidden lg:block" />
        account.
      </>
    ),
    status: "Available",
    footer: "Start This Request",
  },
  {
    title: "Coverage",
    description: (
      <>
        Check current supported markets and
        <br className="hidden lg:block" />
        datasets before filing a request.
      </>
    ),
    status: "Available",
    footer: "Go There",
  },
  {
    title: "Bug or Error",
    description: (
      <>
        Unexpected product behavior you can
        <br className="hidden lg:block" />
        describe and reproduce.
      </>
    ),
    status: "Available",
    footer: "Start This Request",
  },
  {
    title: "Security Concern",
    description: (
      <>
        A potential vulnerability or security
        <br className="hidden lg:block" />
        issue.
      </>
    ),
    status: "Not Yet Available",
    notice: (
      <>
        A dedicated secure reporting route is not
        <br className="hidden lg:block" />
        yet available. Do not submit security
        <br className="hidden lg:block" />
        details through the general form.
      </>
    ),
  },
  {
    title: "Privacy or Data Rights",
    description: (
      <>
        Personal-data questions, licensing, or
        <br className="hidden lg:block" />
        permitted-use concerns.
      </>
    ),
    status: "Not Yet Available",
    notice: (
      <>
        A dedicated privacy and data-rights
        <br className="hidden lg:block" />
        route is not yet available. Do not submit
        <br className="hidden lg:block" />
        personal data through the general form.
      </>
    ),
  },
  {
    title: "AI Behavior",
    description: (
      <>
        A question about AI-assisted output
        <br className="hidden lg:block" />
        or evidence separation in the product.
      </>
    ),
    status: "Available",
    footer: "Start This Request",
  },
  {
    title: "Commercial or Request Access",
    description: (
      <>
        Evaluate Talvrin for your organization
        <br className="hidden lg:block" />
        or request access.
      </>
    ),
    status: "Available",
    footer: "Go There",
  },
  {
    title: "Other",
    description: (
      <>
        A question that doesn&apos;t fit the
        <br className="hidden lg:block" />
        categories above.
      </>
    ),
    status: "Available",
    footer: "Start This Request",
  },
];

function StatusBadge({
  status,
}: {
  status: IssueCard["status"];
}) {
  const isAvailable = status === "Available";

  return (
    <span
      className={`
        inline-flex
        shrink-0
        items-center
        rounded-[99px]
        px-2
        py-1
        font-['IBM_Plex_Sans']
        text-xs
        font-bold
        leading-[14px]
        tracking-wide
        whitespace-nowrap
        ${
          isAvailable
            ? "bg-teal-700/10 text-teal-700"
            : "bg-yellow-600/10 text-yellow-800"
        }
      `}
    >
      {status}
    </span>
  );
}

function IssueCardComponent({
  title,
  description,
  status,
  footer,
  notice,
}: IssueCard) {
  const isUnavailable = status === "Not Yet Available";

  return (
    <article
      className="
        flex
        h-full
        min-h-[199px]
        w-full
        flex-col
        items-start
        gap-3
        rounded-2xl
        border
        border-slate-900/10
        bg-violet-50
        px-5
        py-6
      "
    >
      {/* Card Header */}
      <div
        className="
          flex
          w-full
          items-start
          justify-between
          gap-2
        "
      >
        <h3
          className="
            min-w-0
            flex-1
            font-['IBM_Plex_Sans']
            text-base
            font-bold
            leading-5
            text-slate-900
          "
        >
          {title}
        </h3>

        <StatusBadge status={status} />
      </div>

      {/* Description */}
      <div
        className={`
          flex
          w-full
          flex-col
          items-start
          ${isUnavailable ? "pt-[0.8px]" : "pb-5"}
        `}
      >
        <p
          className="
            font-['IBM_Plex_Sans']
            text-sm
            font-normal
            leading-5
            text-gray-600
          "
        >
          {description}
        </p>
      </div>

      {/* Unavailable Notice */}
      {notice && (
        <div className="flex w-full flex-col items-start">
          <p
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-normal
              leading-5
              text-gray-600
            "
          >
            {notice}
          </p>
        </div>
      )}

      {/* Footer Link */}
      {footer && (
        <div className="mt-auto flex w-full flex-col items-start">
          <a
            href={
              footer === "Go There"
                ? "#"
                : "#support-request"
            }
            className="
              inline-flex
              items-center
              font-['IBM_Plex_Sans']
              text-sm
              font-semibold
              leading-5
              text-indigo-500
              transition-opacity
              duration-200
              hover:opacity-70
            "
          >
            <span>{footer}</span>

            <span
              className="
                ml-1
                font-['Inter']
                text-sm
                font-semibold
              "
            >
              →
            </span>
          </a>
        </div>
      )}
    </article>
  );
}

export default function ChooseIssueType() {
  return (
    <section
      id="choose-issue-type"
      className="
        talvrin-scroll-section
        w-full
        overflow-hidden
        bg-white
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1200px]
          flex-col
          items-start
          px-5
          py-16

          sm:px-8
          sm:py-20

          lg:px-8
          lg:py-24
          xl:px-0
        "
      >
        {/* =====================================================
            EYEBROW
        ====================================================== */}
        <div className="flex w-full flex-col items-start">
          <span
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              leading-[14px]
              tracking-wide
              text-indigo-500
            "
          >
            CHOOSE ISSUE TYPE
          </span>
        </div>

        {/* =====================================================
            HEADING
        ====================================================== */}
        <div
          className="
            mt-5
            flex
            w-full
            max-w-[800px]
            flex-col
            items-start
          "
        >
          <h2
            className="
              font-['IBM_Plex_Sans']
              text-[28px]
              font-bold
              leading-9
              tracking-[-0.02em]
              text-slate-900

              sm:text-4xl
              sm:leading-10
            "
          >
            Select what best describes your issue so it
            <br className="hidden sm:block" />
            reaches the right place.
          </h2>
        </div>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}
        <div
          className="
            mt-6
            flex
            w-full
            max-w-[760px]
            flex-col
            items-start
          "
        >
          <p
            className="
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-6
              text-gray-600
            "
          >
            Security, privacy and commercial matters use a
            dedicated route rather than the general support form.
          </p>
        </div>

        {/* =====================================================
            FIRST 8 CARDS
            4 cards × 2 rows on desktop
        ====================================================== */}
        <div
          className="
            mt-[69px]
            grid
            w-full
            grid-cols-1
            gap-5

            sm:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-4
          "
        >
          {issueCards.slice(0, 8).map((card) => (
            <IssueCardComponent
              key={card.title}
              {...card}
            />
          ))}
        </div>

        {/* =====================================================
            THIRD ROW
            Commercial + Other + Image
        ====================================================== */}
        <div
          className="
            mt-5
            grid
            w-full
            grid-cols-1
            gap-5

            sm:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-[288px_288px_minmax(0,1fr)]
          "
        >
          {/* Commercial or Request Access */}
          <IssueCardComponent
            {...issueCards[8]}
          />

          {/* Other */}
          <IssueCardComponent
            {...issueCards[9]}
          />

          {/* Image */}
          <div
            className="
              relative
              h-[176px]
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-slate-900/10
              bg-violet-50
              sm:col-span-2
              lg:col-span-2
              xl:col-span-1
              xl:h-full
              xl:min-h-[176px]
            "
          >
            <Image
              src="/images/resources/contact-support/image.png"
              alt="Talvrin support discussion"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 590px"
              className="
                object-cover
                object-center
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}