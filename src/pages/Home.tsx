
import HeroSection from "../components/home/HeroSection";
import MarketplaceSection from "../components/home/MarketPlaceSection";
import CategorySection from "../components/home/CategorySection";
import TrendingSection from "../components/home/TrendingSection";
import FeaturedAssets from '../components/home/FeaturedAssets';
import LiquidCapital from '../components/home/LiquidCapital';
import SecuritySection from '../components/home/SecuritySection';
import AnalyticsSection from '../components/home/AnalyticsSection';
import Testimonials from "../components/home/Testimonials"
import HeroSellSection from "../components/home/SellSection";
import BuyWithConfidence from "../components/home/BuyWithConfidence";
import FaqSection from "../components/home/FaqSection";
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