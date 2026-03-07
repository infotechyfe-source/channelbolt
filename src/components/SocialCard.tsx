import { useNavigate } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, BadgeCheck, Users, TrendingUp, MapPin, ChartNoAxesCombined, } from "lucide-react";
import { storage, BUCKET_ID } from "../lib/appwrite";
import type { Platform } from "../types/platform";

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
  payoutAvailable?: boolean | null;
  strikes?: number | null;
  variant?: "default" | "trending";
  status?: "active" | "pending" | "sold";
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
  payoutAvailable = false,
  strikes = 0,
  variant,
}: SocialCardProps) {
  const navigate = useNavigate();

  const isMonetized =
    platform === "Instagram" ||
    platform === "YouTube" ||
    platform === "Facebook";

  const supportsStrikes =
    platform === "YouTube" ||
    platform === "YouTube NonMonetised" ||
    platform === "Facebook" ||
    platform === "Facebook NonMonetised";


  // Converts Appwrite file ID to URL
  const getImageUrl = (fileId: string) => {
    if (!fileId) return "/placeholder.jpg"; // fallback if empty
    if (fileId.startsWith("http")) return fileId; // already a URL
    return storage.getFileView(BUCKET_ID, fileId); // Appwrite file view URL
  };

  const coverUrl = getImageUrl(coverImage);
  const avatarUrl = getImageUrl(avatar);
  const slug = handle
    .toLowerCase()
    .replace(/@/g, "")
    .trim()
    .replace(/\s+/g, "_");

  const audienceLabel =
    platform === "YouTube" || platform === "YouTube NonMonetised"
      ? "Subscribers"
      : "Followers";

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
            <p className="text-xs text-gray-400 uppercase">
              {audienceLabel}
            </p>
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
            onClick={() => navigate(`/account/${$id}/${slug}`)}
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
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition flex flex-col h-full relative">

      {/* COVER */}
      <div className="relative h-32 w-full">
        <img
          src={coverUrl}
          alt={`${handle} cover`}
          className="w-full h-full object-cover"
        />

        {/* Monetization Badge */}
        <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
          <div
            className={`flex items-center justify-center w-5 h-5 text-white rounded-full
        ${platform === "Instagram"
                ? "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600"
                : platform === "YouTube" || platform === "YouTube NonMonetised"
                  ? "bg-red-600"
                  : platform === "Facebook" || platform === "Facebook NonMonetised"
                    ? "bg-blue-600"
                    : "bg-gray-400"
              }`}
          >
            {platform === "Instagram" && <Instagram className="w-3.5 h-3.5" />}
            {(platform === "YouTube" || platform === "YouTube NonMonetised") && (
              <Youtube className="w-3.5 h-3.5" />
            )}
            {(platform === "Facebook" || platform === "Facebook NonMonetised") && (
              <Facebook className="w-3.5 h-3.5" />
            )}
          </div>

          <span className="text-xs font-semibold text-gray-800">
            {isMonetized ? "Monetised" : "Non Monetised"}
          </span>
        </div>
      </div>

      {/* AVATAR */}
      <div className="absolute top-20 left-6 w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-md">
        <img
          src={avatarUrl}
          alt={`${handle} avatar`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 pt-10 flex flex-col grow">

        {/* NAME */}
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-gray-900">{handle}</h3>
          <BadgeCheck className="w-4 h-4 text-blue-500" />
        </div>

        <p className="text-sm text-gray-500 mb-4">{niche}</p>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">

          <div>
            <p className="flex items-center gap-1 text-gray-400 mb-1">
              <Users className="w-4 h-4" />
              {audienceLabel}
            </p>
            <p className="font-semibold text-gray-900">
              {followers.toLocaleString()}
            </p>
          </div>

          <div>
            <p className="flex items-center gap-1 text-gray-400 mb-1">
              <TrendingUp className="w-4 h-4" />
              Engagement
            </p>
            <p className="font-semibold text-green-600">{engagement}%</p>
          </div>

          <div>
            <p className="flex items-center gap-1 text-gray-400 mb-1">
              <MapPin className="w-4 h-4" />
              Location
            </p>
            <p className="font-semibold text-gray-900">
              {platform === "Instagram"
                ? "USA"
                : platform === "YouTube"
                  ? "UK"
                  : "India"}
            </p>
          </div>

          <div>
            <p className="flex items-center gap-1 text-gray-400 mb-1">
              <ChartNoAxesCombined className="w-4 h-4" />
              Earnings
            </p>
            <p className="font-semibold text-gray-900">
              ₹{revenue.toLocaleString()}
            </p>
          </div>
        </div>

        {/* BADGES */}
        <div className="flex flex-wrap gap-2 min-h-[44px] mb-4">

          {includeEmail && (
            <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-xs font-semibold border border-blue-100">
              <Mail className="w-3.5 h-3.5" />
              OG Email
            </span>
          )}

          {supportsStrikes && (
            strikes === 0 ? (
              <span className="flex items-center bg-green-50  text-green-700 px-2.5 py-1 rounded-md text-xs font-semibold border border-green-100">
                🛡 No Strikes
              </span>
            ) : strikes === 1 ? (
              <span className="flex items-center bg-yellow-50 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-semibold border border-yellow-100">
                ⚠ 1 Strike
              </span>
            ) : (
              <span className="flex items-center bg-red-50 text-red-700 px-2.5 py-1 rounded-md text-xs font-semibold border border-red-100">
                🚨 {strikes} Strikes
              </span>
            )
          )}

          {payoutAvailable ? (
            <span className="flex items-center bg-green-50 text-green-700 px-2.5 py-1 rounded-md text-xs font-semibold border border-green-100">
              💰 Payout Available
            </span>
          ) : (
            <span className="flex items-center bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md text-xs font-semibold border border-gray-200">
              💰 No Payout
            </span>
          )}

        </div>

        {/* PRICE */}
        <div className="mt-auto border-t pt-4 mb-4">
          <p className="text-xs text-gray-400 mb-1">Listing Price</p>
          <p className="text-xl font-bold text-blue-600">
            ₹{price?.toLocaleString()}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2">
          <button
            onClick={() => navigate(`/account/${$id}/${handle.replace("@", "")}`)}
            className="flex-1 border border-gray-300 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
          >
            View Details
          </button>

          <button
            onClick={() => navigate(`/checkout/${$id}`)}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
}