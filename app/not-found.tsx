import type { Metadata } from "next";
import NotFoundScreen from "@/components/system/NotFoundScreen";

export const metadata: Metadata = {
  title: "Page Not Found | Talvrin",
  description: "The page you're looking for doesn't exist, has moved, or was never published.",
};

export default function NotFound() {
  return <NotFoundScreen />;
}
