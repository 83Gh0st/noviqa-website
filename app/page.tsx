import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import ProcessSteps from "@/components/ProcessSteps";
import WhyChoose from "@/components/WhyChoose";
import RegionalCoverage from "@/components/RegionalCoverage";
import CTASection from "@/components/CTASection";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Services />
      <Industries />
      <ProcessSteps />
      <WhyChoose />
      <RegionalCoverage />
      <CTASection />
    </>
  );
}
