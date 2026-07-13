import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AboutIntro from "@/components/AboutIntro";
import CoreValues from "@/components/CoreValues";
import DetailedProcess from "@/components/DetailedProcess";
import Compliance from "@/components/Compliance";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "13+ years of founder experience in credit control and debt recovery across Banking, Construction, Oil & Gas, and Energy. Learn how Noviqa manages receivables and claims.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Noviqa"
        title="A dedicated partner for your receivables"
        description="Backed by founders with 13+ years of experience in credit control and debt recovery across the Middle East, we bring deep industry knowledge, disciplined process, and a results-driven approach to every engagement."
      />
      <AboutIntro />
      <CoreValues />
      <DetailedProcess />
      <Compliance />
      <CTASection />
    </>
  );
}
