import { useNavigate } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, BadgeCheck, Users, TrendingUp, MapPin, ChartNoAxesCombined, XCircle, CheckCircle, } from "lucide-react";
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
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition w-full sm:min-w-[380px]">

      {/* Top Row */}
      <div className="flex items-center justify-between p-4 sm:p-5">

        <div className="flex items-center gap-3 sm:gap-4 min-w-0">

          <img
            src={avatarUrl}
            alt={handle}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
          />

          <div className="min-w-0">
            <h4 className="font-semibold text-base sm:text-lg text-gray-900 truncate">
              {handle}
            </h4>

            <p className="text-xs sm:text-sm text-gray-500 truncate">
              {platform} · {niche}
            </p>
          </div>

        </div>

        <div className="text-right flex-shrink-0">

          <p className="text-xs text-gray-400">
            Price
          </p>

          <p className="text-lg sm:text-xl font-bold text-gray-900">
            ₹{price?.toLocaleString() || "N/A"}
          </p>

        </div>

      </div>

      {/* Stats Row */}
      <div className="border-t border-gray-200 grid grid-cols-3 text-center py-3 sm:py-4 px-3 sm:px-6 bg-gray-50 text-sm">

        <div>
          <p className="text-[10px] sm:text-xs text-gray-400 uppercase">
            {audienceLabel}
          </p>

          <p className="font-semibold text-gray-800 text-sm sm:text-base">
            {(followers / 1000).toFixed(1)}K
          </p>
        </div>

        <div>
          <p className="text-[10px] sm:text-xs text-gray-400 uppercase">
            Eng. Rate
          </p>

          <p className="font-semibold text-gray-800 text-sm sm:text-base">
            {engagement}%
          </p>
        </div>

        <div>
          <p className="text-[10px] sm:text-xs text-gray-400 uppercase">
            Rev/Mo
          </p>

          <p className="font-semibold text-green-600 text-sm sm:text-base">
            ₹{revenue.toLocaleString()}
          </p>
        </div>

      </div>

      {/* View Button */}
      <div className="px-4 sm:px-6 pb-4 sm:pb-5">

        <button
          onClick={() => navigate(`/account/${$id}/${slug}`)}
          className="w-full mt-2 sm:mt-3 bg-blue-600 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition"
        >
          View Details
        </button>

      </div>

    </div>
  );
}

  // ================= DEFAULT CARD =================
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-lg transition flex flex-col h-full relative">

      {/* COVER */}
      <div className="relative h-20 sm:h-28 w-full">
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
                ? "bg-linear-to-tr from-yellow-400 via-red-500 to-purple-600"
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
      <div className="absolute top-14 sm:top-19 left-3 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white overflow-hidden shadow-md">
        <img
          src={avatarUrl}
          alt={`${handle} avatar`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-3 sm:p-4 flex flex-col grow pt-6 sm:pt-10">

        {/* NAME */}
        <div className="flex items-center gap-1 sm:gap-2">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900">{handle}</h3>
          <BadgeCheck className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
        </div>

        <p className="text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3">{niche}</p>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs mb-2">

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
                ? "India"
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
        <div className="flex flex-wrap gap-1 sm:gap-2 min-h-[30px] mb-2 text-[9px] sm:text-xs">

          {includeEmail && (
            <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-md font-semibold border border-blue-100">
              <Mail className="w-3.5 h-3.5" /> OG Email
            </span>
          )}

          {supportsStrikes && (
            strikes === 0 ? (
              <span className="flex items-center bg-green-50  text-green-700 px-1.5 py-0.5 rounded-md font-semibold border border-green-100">
                🛡 No Strikes
              </span>
            ) : strikes === 1 ? (
              <span className="flex items-center bg-yellow-50 text-yellow-700 px-1.5 py-0.5 rounded-md  font-semibold border border-yellow-100">
                ⚠ 1 Strike
              </span>
            ) : (
              <span className="flex items-center bg-red-50 text-red-700 px-1.5 py-0.5 rounded-md font-semibold border border-red-100">
                🚨 {strikes} Strikes
              </span>
            )
          )}

          {payoutAvailable ? (
            <span className="flex items-center gap-1.5 bg-green-50 text-green-700 px-1.5 py-0.5 rounded-md font-semibold border border-green-100">
              <CheckCircle size={14} />
              Payout Available
            </span>
          ) : (
            <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded-md text-xs font-semibold border border-gray-200">
              <XCircle size={14} />
              No Payout
            </span>
          )}

        </div>

        {/* PRICE */}
        <div className="mt-auto border-t border-blue-300 pt-2 mb-2">
          <p className="text-[10px] sm:text-xs text-gray-400 mb-0.5">Listing Price</p>
          <p className="text-lg sm:text-xl font-bold text-blue-600">
            ₹{price?.toLocaleString()}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-1 sm:gap-2 text-[10px] sm:text-sm">
          <button
            onClick={() => navigate(`/account/${$id}/${handle.replace("@", "")}`)}
            className="flex-1 border border-gray-300 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition cursor-pointer"
          >
            View Details
          </button>

          <button
            onClick={() => navigate(`/checkout/${$id}`)}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition cursor-pointer"
          >
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
}