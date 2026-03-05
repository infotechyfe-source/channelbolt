import { useNavigate } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  BadgeCheck,
  Users,
  TrendingUp,
  MapPin,
  ChartNoAxesCombined,
} from "lucide-react";
import { storage, BUCKET_ID } from "../lib/appwrite";

type Platform = "Instagram" | "Facebook" | "YouTube";

type SocialCardProps = {
  $id: string; // document ID
  handle: string;
  platform: Platform;
  niche: string;
  followers: number;
  engagement: number;
  revenue: number;
  price?: number;
  coverImage: string; 
  avatar: string;     
  includeEmail?: boolean | null;
  variant?: "default" | "trending";
};

export default function SocialCard({
  $id,
  handle,
  platform,
  niche,
  followers,
  engagement,
  revenue,
  price,
  coverImage,
  avatar,
  includeEmail = false,
  variant,
}: SocialCardProps) {
  const navigate = useNavigate();

  // Converts Appwrite file ID to URL
  const getImageUrl = (fileId: string) => {
    if (!fileId) return "/placeholder.jpg"; // fallback if empty
    if (fileId.startsWith("http")) return fileId; // already a URL
    return storage.getFileView(BUCKET_ID, fileId); // Appwrite file view URL
  };

  const coverUrl = getImageUrl(coverImage);
  const avatarUrl = getImageUrl(avatar);

  // ================= TRENDING VARIANT =================
  if (variant === "trending") {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition min-w-[420px]">
        {/* Top Row */}
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center gap-4">
            <img
              src={avatarUrl}
              alt={handle}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-lg text-gray-900">{handle}</h4>
              <p className="text-sm text-gray-500">{platform} · {niche}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Price</p>
            <p className="text-xl font-bold text-gray-900">₹{price?.toLocaleString() || "N/A"}</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="border-t border-gray-200 grid grid-cols-3 text-center py-4 px-6 bg-gray-50">
          <div>
            <p className="text-xs text-gray-400 uppercase">Followers</p>
            <p className="font-semibold text-gray-800">{(followers / 1000).toFixed(1)}K</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase">Eng. Rate</p>
            <p className="font-semibold text-gray-800">{engagement}%</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase">Rev/Mo</p>
            <p className="font-semibold text-green-600">₹{revenue.toLocaleString()}</p>
          </div>
        </div>

        {/* View Button */}
        <div className="px-6 pb-5">
          <button
            onClick={() => navigate(`/account/${$id}/${handle.replace("@", "")}`)}
            className="w-full mt-3 bg-blue-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition"
          >
            View Details
          </button>
        </div>
      </div>
    );
  }

  // ================= DEFAULT CARD =================
  return (
    <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg flex flex-col hover:shadow-2xl transition-all relative">
      {/* COVER IMAGE */}
      <div className="relative h-44 w-full">
        <img src={coverUrl} alt={`${handle} cover`} className="w-full h-full object-cover" />
        {/* Monetized Badge */}
        <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
          <div
            className="flex items-center justify-center w-5 h-5 text-white font-bold rounded-full 
                bg-linear-to-tr from-yellow-400 via-red-500 to-purple-500"
          >
            {platform === "Instagram" && <Instagram className="w-3.5 h-3.5" />}
            {platform === "YouTube" && <Youtube className="w-3.5 h-3.5" />}
            {platform === "Facebook" && <Facebook className="w-3.5 h-3.5" />}
          </div>
          <span className="text-xs font-bold uppercase text-gray-800 tracking-wide">Monetised</span>
        </div>
      </div>

      {/* AVATAR */}
      <div className="absolute top-28 left-6 w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-md">
        <img src={avatarUrl} alt={`${handle} avatar`} className="w-full h-full object-cover rounded-full" />
      </div>

      {/* CONTENT */}
      <div className="p-6 pt-10 flex flex-col grow">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-xl font-bold">{handle}</h3>
          <BadgeCheck className="w-5 h-5 text-blue-500" />
        </div>
        <p className="text-gray-500 mb-6">{niche}</p>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-4 mb-3 text-sm">
          <div>
            <p className="flex items-center gap-1.5 text-gray-400 mb-1">
              <Users className="w-4 h-4" /> Followers
            </p>
            <p className="font-bold text-gray-900">{followers.toLocaleString()}</p>
          </div>
          <div>
            <p className="flex items-center gap-1.5 text-gray-400 mb-1">
              <TrendingUp className="w-4 h-4" /> Engagement
            </p>
            <p className="font-bold text-green-600">{engagement}%</p>
          </div>
          <div>
            <p className="flex items-center gap-1.5 text-gray-400 mb-1">
              <MapPin className="w-4 h-4" /> Location
            </p>
            <p className="font-bold text-gray-900">
              {platform === "Instagram"
                ? "USA"
                : platform === "YouTube"
                ? "UK"
                : "India"}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1.5 text-gray-400 mb-1">
              <ChartNoAxesCombined className="w-4 h-4" /> Earnings
            </p>
            <p className="font-bold text-gray-900">₹{revenue.toLocaleString()}</p>
          </div>
        </div>

        {/* Email Badge */}
        {includeEmail && (
          <div className="mb-2">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-semibold">
              <Mail className="w-4 h-4" /> OG Email Included
            </span>
          </div>
        )}

        {/* PRICE */}
        <div className="text-start mb-4">
          <p className="text-gray-500 text-sm">Listing Price</p>
          <p className="font-bold text-2xl text-blue-600">₹{price?.toLocaleString()}</p>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/account/${$id}/${handle.replace("@", "")}`)}
            className="flex-1 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition flex items-center justify-center gap-2 font-semibold cursor-pointer"
          >
            View Details
          </button>
          <button
            onClick={() => navigate(`/checkout/${$id}`)}
            className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}