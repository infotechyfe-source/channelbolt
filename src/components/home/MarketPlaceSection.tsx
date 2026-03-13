import { Instagram, Facebook, Youtube, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function MarketplaceCategories() {
  return (
    <section className="bg-[#0B1220] text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-4 items-start">

        {/* LEFT: Categories */}
        <div className="lg:col-span-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 sm:mb-3">
            Buy and Sell Social Media Accounts Marketplace
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
            Secure and fast verified account trading
          </p>

          {/* 2 cards per row on mobile, 4 per row on large */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <CategoryCard
              platform="instagram"
              gradient="from-yellow-400 via-red-500 to-purple-600"
              icon={<Instagram size={24} />}
              title="Instagram Pages"
              count="1,000+ Pages"
            />

            <CategoryCard
              platform="facebook"
              gradient="from-blue-500 to-blue-600"
              icon={<Facebook size={24} />}
              title="Facebook Page Monetized"
              count="1,500+ Pages"
            />

            <CategoryCard
              platform="youtube"
              gradient="from-red-500 to-red-600"
              icon={<Youtube size={24} />}
              title="YouTube Channel Monetized"
              count="1,024+ Channels"
            />

            <CategoryCard
              platform="facebook"
              gradient="from-blue-500 to-blue-600"
              icon={<Facebook size={24} />}
              title="Facebook Page Non Monetized"
              count="3,156 Pages"
            />
          </div>
        </div>

        {/* RIGHT: Featured */}
        <div className="lg:col-span-4 lg:mt-6">
          <div className="relative h-full rounded-2xl bg-linear-to-br from-yellow-50 to-yellow-200 text-black p-4 sm:p-6 shadow-xl">
            <div className="inline-flex items-center gap-1.5 bg-white text-orange-600 px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
              <Star size={14} />
              Premium Verified
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mt-3 sm:mt-4 mb-2 sm:mb-3">
              Special Featured Listings
            </h3>

            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
              Discover exclusive, hand-verified social media accounts with proven
              engagement and authentic followers.
            </p>

            <Link
              to="/marketplace"
              className="inline-flex items-center justify-center gap-1.5 mt-4 sm:mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition"
            >
              View Special Listings
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CATEGORY CARD ================= */
function CategoryCard({
  icon,
  title,
  count,
  gradient,
  platform,
}: {
  icon: React.ReactNode;
  title: string;
  count: string;
  gradient: string;
  platform: "instagram" | "facebook" | "youtube";
}) {
  return (
    <Link
      to={`/marketplace?platform=${platform}`}
      className="group block bg-[#0B1220] border border-gray-800 rounded-xl p-3 sm:p-4 hover:border-gray-600 transition-all hover:-translate-y-1"
    >
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-linear-to-br ${gradient} flex items-center justify-center mb-3 sm:mb-4`}
      >
        <div className="text-white">{icon}</div>
      </div>

      <h3 className="font-semibold text-sm sm:text-base mb-1">
        {title}
      </h3>

      <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-400">
        <span className="text-green-500">↗</span>
        {count}
      </div>
    </Link>
  );
}