import { CallToActionSection } from "./call-to-action-section";
import { DiscoverSection } from "./discover-section";
import { FeaturesSection } from "./features-section";
import { HeroSection } from "./hero-section";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <CallToActionSection />
    </div>
  );
}
