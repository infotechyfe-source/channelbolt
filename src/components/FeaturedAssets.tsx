import {
  ArrowRight,
  CheckCircle,
  Eye,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import featureImg from "../assets/feature.png";
import { useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import { Query } from "appwrite";

type Listing = {
  $id: string;
  handle: string;
  platform: string;
  niche: string;
  followers: number;
  revenue: number;
  price: number;
  avatar: string;
  coverImage: string;
  verified?: boolean;
};

const FeaturedAssets = () => {
  const navigate = useNavigate();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchListings = async () => {
    try {
      const res = await databases.listDocuments(
        "69a55aa1001ac4d8ba49",
        "listings",
        [
          Query.limit(10),
          Query.orderDesc("$createdAt")
        ]
      );

      setListings(res.documents as unknown as Listing[]);
    } catch (error) {
      console.error("Error fetching listings:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchListings();
}, []);
  
const featuredMain = listings?.[0];
const featuredSmall = listings?.[1];
const justSold = listings?.slice(2, 5) || [];

  const formatFollowers = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  const formatPrice = (price?: number) => (price ? `₹${price.toLocaleString()}` : "N/A");
  if (loading || !featuredMain) {
  return (
    <section className="bg-[#0B0F19] text-white py-20 text-center">
      <p className="text-gray-400">Loading featured assets...</p>
    </section>
  );
}

  return (
    <section className="bg-[#0B0F19] text-white py-16 px-4 sm:px-6 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Featured Assets</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Curated high-value assets with verified income and engagement.
            </p>
          </div>
          <button
            onClick={() => navigate("/marketplace")}
            className="flex items-center gap-2 text-sm border border-blue-700 rounded-2xl px-3 sm:px-4 py-2 hover:bg-gray-800 transition w-full sm:w-auto justify-center cursor-pointer"
          >
            View All Listing <ArrowRight size={16} />
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Main Featured */}
          <div
            onClick={() => navigate(`/account/${featuredMain.$id}/${featuredMain.handle}`)}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden h-80 sm:h-96 lg:h-124 group cursor-pointer"
          >
            <img
              src={featureImg}
              alt="Featured Asset"
              className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-linear-to-t from-black/80 to-transparent">
              <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
                <span className="bg-blue-600/80 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full uppercase font-semibold">{featuredMain.platform}</span>
                <span className="bg-purple-600/80 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full uppercase font-semibold">{featuredMain.niche}</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-1">{featuredMain.handle}</h3>
              {featuredMain.verified && (
                <div className="flex items-center gap-2 text-sm text-green-400 mb-3 sm:mb-4">
                  <CheckCircle size={14} /> Verified
                </div>
              )}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 bg-gray-900/60 backdrop-blur-md p-2 sm:p-4 rounded-2xl border border-gray-700/50 text-xs sm:text-sm">
                <div>
                  <p className="text-gray-400 mb-1">Followers</p>
                  <p className="font-bold">{formatFollowers(featuredMain.followers)}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Revenue</p>
                  <p className="font-bold text-green-400">${featuredMain.revenue.toLocaleString()}/mo</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Price</p>
                  <p className="font-bold">{formatPrice(featuredMain.price)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Just Sold */}
            <div className="bg-[#131927] p-4 sm:p-5 rounded-2xl border border-gray-800">
              <h4 className="text-xs sm:text-sm text-gray-400 mb-3 flex items-center gap-2"><Clock size={14} /> Just Sold</h4>
              <ul className="space-y-3 sm:space-y-4">
                {justSold.map(item => (
                  <li key={item.$id} className="flex justify-between items-center">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <img src={item.avatar} alt={item.handle} className="w-6 sm:w-8 h-6 sm:h-8 rounded-lg object-cover" />
                      <div>
                        <p className="text-sm sm:text-base font-medium">{item.handle}</p>
                        <p className="text-xs sm:text-sm text-gray-500">Recently Sold</p>
                      </div>
                    </div>
                    <span className="text-green-400 font-medium text-sm sm:text-base">{formatPrice(item.price)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Small Featured Card */}
            {featuredSmall && (
              <div className="bg-[#131927] p-4 sm:p-5 rounded-2xl border border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-bl-lg font-medium">Hot Deal</div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <img src={featuredSmall.avatar} alt={featuredSmall.handle} className="w-8 sm:w-10 h-8 sm:h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">{featuredSmall.handle}</h4>
                    <p className="text-xs sm:text-sm text-gray-400">{featuredSmall.niche}</p>
                  </div>
                </div>
                <div className="flex justify-between mb-3 sm:mb-4 bg-gray-900/50 p-2 sm:p-3 rounded-xl text-xs sm:text-sm">
                  <div>
                    <p className="text-gray-500">{featuredSmall.platform === "YouTube" ? "Subscribers" : "Followers"}</p>
                    <p className="font-bold">{formatFollowers(featuredSmall.followers)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">Price</p>
                    <p className="font-bold text-green-400">{formatPrice(featuredSmall.price)}</p>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/account/${featuredSmall.$id}/${featuredSmall.handle.replace("@", "")}`)}
                  className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition text-sm sm:text-base cursor-pointer"
                >
                  View Listing
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 bg-linear-to-r from-blue-600 to-blue-500 p-4 sm:p-6 rounded-2xl flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Selling?</h3>
            <p className="text-blue-100 text-xs sm:text-sm mb-3 sm:mb-4">
              List your assets today and reach thousands of verified buyers.
            </p>
            <button
              onClick={() => navigate("/sell")}
              className="bg-white text-blue-600 px-3 sm:px-4 py-2 rounded-2xl font-medium hover:bg-blue-50 transition w-fit cursor-pointer text-xs sm:text-sm"
            >
              Start Valuation
            </button>
          </div>

          <div className="md:col-span-2 bg-[#131927] border border-gray-800 p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden">
            <Eye size={28} className="text-blue-400 mb-2 sm:mb-3" />
            <h3 className="text-xl sm:text-2xl font-bold mb-1">View 1,240 Listings</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              Discover profitable digital assets across all niches.
            </p>
            <button
              onClick={() => navigate("/marketplace")}
              className="text-blue-400 flex items-center gap-1 sm:gap-2 hover:gap-3 transition-all text-xs sm:text-sm font-medium cursor-pointer"
            >
              Browse Marketplace <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAssets;