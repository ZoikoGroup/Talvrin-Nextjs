import SessionExperience from "@/components/assistant/session/SessionExperience";

export const metadata = {
  title: "Research session",
};

export default async function ResearchSessionPage({
  params,
}: {
  params: Promise<{ ref: string }>;
}) {
  const { ref } = await params;
  return <SessionExperience jobRef={ref} />;
}
