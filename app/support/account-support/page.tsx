import type { Metadata } from "next";
import {
  AccountRequestProvider,
  HeroSection,
  PageNavSection,
  RequestSection,
  RelatedSupportSection,
  FaqSection,
} from "@/components/account-support";

export const metadata: Metadata = {
  title: "Account Support | Talvrin Support",
  description:
    "Get help with account access and account-related issues through the safest currently approved path. Talvrin will never ask for your password, codes, or keys.",
};

export default function AccountSupportPage() {
  return (
    <AccountRequestProvider>
      <HeroSection />
      <PageNavSection />
      <RequestSection />
      <RelatedSupportSection />
      <FaqSection />
    </AccountRequestProvider>
  );
}
