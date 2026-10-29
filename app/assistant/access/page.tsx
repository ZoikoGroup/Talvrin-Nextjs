import AccessExperience from "@/components/assistant/access/AccessExperience";

export const metadata = {
  title: "Account access",
};

export default async function AccessPage({
  searchParams,
}: {
  searchParams: Promise<{
    intent?: string;
    return?: string;
    returnTo?: string;
    /** Opaque return-intent nonce (WF-11 A14). */
    ri?: string;
  }>;
}) {
  const params = await searchParams;
  return (
    <AccessExperience
      intent={params.intent}
      returnTo={params.returnTo ?? params.return}
      intentRef={params.ri}
    />
  );
}
