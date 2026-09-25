import type { Metadata } from "next";
import {
  HeroSection,
  ResourcePillsSection,
  MethodStatusSection,
  AccessModelSection,
  QuickStartSection,
  CredentialLifecycleSection,
  PermissionsSection,
  SecretSafetySection,
  ErrorsSection,
  RotationSection,
  AccessibleAuthSection,
  DeveloperStatusSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/authentication";

export const metadata: Metadata = {
  title: "Authentication | Talvrin",
  description:
    "How Talvrin separates authentication from authorization, entitlement, coverage, and data rights. No authentication method is currently published.",
};

export default function AuthenticationPage() {
  return (
    <>
      <HeroSection />
      <ResourcePillsSection />
      <MethodStatusSection />
      <AccessModelSection />
      <QuickStartSection />
      <CredentialLifecycleSection />
      <PermissionsSection />
      <SecretSafetySection />
      <ErrorsSection />
      <RotationSection />
      <AccessibleAuthSection />
      <DeveloperStatusSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
