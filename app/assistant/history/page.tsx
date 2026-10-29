import HistoryExperience from "@/components/assistant/history/HistoryExperience";

export const metadata = {
  title: "This session",
};

export default async function HistoryPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { view } = await searchParams;
  return <HistoryExperience view={view === "saved" ? "saved" : "session"} />;
}
