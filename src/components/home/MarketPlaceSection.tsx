import { Instagram, Facebook, Youtube, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function MarketplaceCategories() {
    return (
        <section className="bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-start">

                {/* LEFT: Categories */}
                <div className="lg:col-span-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
                        Buy and Sell Social Media Accounts Marketplace
                    </h2>
                    <p className="text-gray-400 mb-8 sm:mb-12 text-base sm:text-lg">
                        Secure and fast verified account trading
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        <CategoryCard
                            platform="instagram"
                            gradient="from-yellow-400 via-red-500 to-purple-600"
                            icon={<Instagram size={32} />}
                            title="Instagram Pages"
                            count="1,000+ Pages"
                        />

                        <CategoryCard
                            platform="facebook"
                            gradient="from-blue-500 to-blue-600"
                            icon={<Facebook size={32} />}
                            title="Facebook Page Monetized"
                            count="1,500+ Pages"
                        />

                        <CategoryCard
                            platform="youtube"
                            gradient="from-red-500 to-red-600"
                            icon={<Youtube size={32} />}
                            title="YouTube Channel Monetized"
                            count="1,024+ Channels"
                        />

                        <CategoryCard
                            platform="facebook"
                            gradient="from-blue-500 to-blue-600"
                            icon={<Facebook size={32} />}
                            title="Facebook Page Non Monetized"
                            count="3,156 Pages"
                        />
                    </div>
                </div>

                {/* RIGHT: Featured */}
                <div className="lg:col-span-4 mt-10 lg:mt-0">
                    <div className="relative h-full rounded-3xl bg-gradient-to-br from-yellow-50 to-yellow-200 text-black p-6 sm:p-8 shadow-2xl">
                        <div className="inline-flex items-center gap-2 bg-white text-orange-600 px-3 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                            <Star size={16} />
                            Premium Verified
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-6 mb-3">
                            Special Featured Listings
                        </h3>

                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Discover exclusive, hand-verified social media accounts with proven
                            engagement and authentic followers.
                        </p>

                        <Link
                            to="/marketplace"
                            className="inline-flex items-center justify-center gap-2 mt-6 sm:mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition"
                        >
                            View Special Listings
                            <ArrowRight size={18} />
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
            className="group block bg-[#0B1220] border border-gray-800 rounded-2xl p-4 sm:p-6 hover:border-gray-600 transition-all hover:-translate-y-1"
        >
            <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 sm:mb-6`}
            >
                <div className="text-white">{icon}</div>
            </div>

            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                {title}
            </h3>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                <span className="text-green-500">↗</span>
                {count}
            </div>
        </Link>
    );
}