import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PricingSection } from "@/components/pricing-section"
import { WarningSection } from "@/components/warning-section"
import { FAQSection } from "@/components/faq-section"
import { GetStartedSection } from "@/components/get-started-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <WarningSection />
      <FAQSection />
      <GetStartedSection />
      <FooterSection />
    </main>
  )
}
