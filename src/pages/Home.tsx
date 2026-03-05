
import FeaturedAssets from '../components/FeaturedAssets';
import LiquidCapital from '../components/LiquidCapital';
import SecuritySection from '../components/SecuritySection';
import AnalyticsSection from '../components/AnalyticsSection';
import Testimonials from "../components/Testimonials"
import HeroSection from "../components/HeroSection";
import FaqSection from "../components/FaqSection";
import BuyWithConfidence from "../components/BuyWithConfidence";
import TrendingSection from "../components/TrendingSection";
import CategorySection from "../components/CategorySection";
import MarketplaceSection from "../components/MarketPlaceSection";
import HeroSellSection from "../components/SellSection";
export default function Home() {

  return (
    <div className="flex flex-col bg-white w-full overflow-x-hidden">
      <section className="w-full px-4 sm:px-6 lg:px-8">
      </section>
        <HeroSection />
      <MarketplaceSection />
      <CategorySection />
      <TrendingSection />
      <FeaturedAssets />
      <LiquidCapital />
      <SecuritySection />
      <AnalyticsSection />
      <Testimonials />
      <HeroSellSection />
      <BuyWithConfidence />
      <FaqSection />
    </div>
  )
}