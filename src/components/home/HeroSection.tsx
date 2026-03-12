/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Instagram, Youtube, Facebook, TrendingUp, Users, DollarSign, ShieldCheck, ArrowRight } from "lucide-react";
import { Query } from "appwrite";
import { databases } from "../../lib/appwrite";

export default function HeroSection() {
  const [instagram, setInstagram] = useState<any>(null);
  const [youtube, setYoutube] = useState<any>(null);
  const [facebook, setFacebook] = useState<any>(null);
  const [recentListings, setRecentListings] = useState<any[]>([]);


  useEffect(() => {
    const fetchHeroListings = async () => {
      try {

        // Instagram - highest followers
        const instaRes = await databases.listDocuments(
          "69a55aa1001ac4d8ba49",
          "listings",
          [
            Query.equal("platform", "Instagram"),
            Query.orderDesc("followers"),
            Query.limit(1),
          ]
        );

        // YouTube - highest revenue
        const ytRes = await databases.listDocuments(
          "69a55aa1001ac4d8ba49",
          "listings",
          [
            Query.equal("platform", "YouTube"),
            Query.orderDesc("revenue"),
            Query.limit(1),
          ]
        );

        // Facebook - highest followers
        const fbRes = await databases.listDocuments(
          "69a55aa1001ac4d8ba49",
          "listings",
          [
            Query.equal("platform", "Facebook"),
            Query.orderDesc("followers"),
            Query.limit(1),
          ]
        );

        // ⭐ NEW: Recent Listings
        const recentRes = await databases.listDocuments(
          "69a55aa1001ac4d8ba49",
          "listings",
          [
            Query.orderDesc("$createdAt"),
            Query.limit(2),
          ]
        );

        setInstagram(instaRes.documents[0] || null);
        setYoutube(ytRes.documents[0] || null);
        setFacebook(fbRes.documents[0] || null);

        // ⭐ SET RECENT LISTINGS
        setRecentListings(recentRes.documents);

      } catch (error) {
        console.error("Error fetching hero listings:", error);
      }
    };

    fetchHeroListings();
  }, []);


  return (
    <section className="relative overflow-hidden bg-linear-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ================= HERO CONTENT ================= */}
        <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">

          {/* TRUST BADGE */}
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold border border-purple-100">
            <ShieldCheck size={14} />
            Secure Marketplace
          </div>

          {/* HEADLINE */}
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Buy & Sell
            <span className="block text-blue-600">
              Social Media Accounts
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Discover verified Instagram pages, monetized Facebook assets, and
            YouTube channels with real engagement and transparent analytics.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">

            <Link
              to="/marketplace"
              className="flex items-center gap-1.5 bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-blue-700 transition"
            >
              Browse
              <ArrowRight size={14} />
            </Link>

            <Link
              to="/sell"
              className="flex items-center text-sm font-semibold px-4 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Sell
            </Link>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative flex justify-center  lg:mt-0">

          {/* MAIN DASHBOARD */}
          <div className="w-full max-w-xl bg-[#f6f7f9] rounded-2xl shadow-xl p-3 sm:p-4 relative z-10">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  ChannelBolt Dashboard
                </h2>
                <p className="text-gray-500 text-sm">Live Analytics</p>
              </div>

              <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Live
              </div>
            </div>

            {/* IMPROVED MINI BAR CHART */}
            <div className="bg-white rounded-xl p-3 mb-4 flex items-end justify-between h-28 sm:h-36">
              {[45, 70, 55, 85, 65, 100, 75, 90].map((h, i) => (
                <div
                  key={i}
                  className="w-9 rounded-md bg-linear-to-t from-indigo-600 to-blue-400 hover:scale-110 transition"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            {/* STATS WITH ICONS */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 text-center">

              <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 flex flex-col items-center">
                <TrendingUp size={18} className="text-green-600 mb-1" />
                <p className="text-xs text-gray-500">Growth</p>
                <p className="font-bold text-sm text-green-600">+32%</p>
              </div>

              <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 flex flex-col items-center">
                <Users size={18} className="text-blue-600 mb-1" />
                <p className="text-xs text-gray-500">Active</p>
                <p className="font-bold text-sm">8.4K</p>
              </div>

              <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 flex flex-col items-center">
                <DollarSign size={18} className="text-indigo-600 mb-1" />
                <p className="text-xs text-gray-500">Volume</p>
                <p className="font-bold text-sm">$1.2M</p>
              </div>

            </div>

            {/* RECENT LISTINGS */}
            <div>
              <p className="text-xs text-gray-500 mb-3">Recent Listings</p>

              {recentListings.map((listing) => (
                <div
                  key={listing.$id}
                  className="flex items-center justify-between bg-white rounded-lg px-4 py-2 mb-2 hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3">

                    {/* AVATAR */}
                    <img
                      src={listing.avatar}
                      alt={listing.handle}
                      className="w-8 h-8 rounded-full object-cover border"
                    />

                    {/* TEXT */}
                    <div>
                      <p className="text-xs font-semibold">
                        {listing.handle}
                      </p>

                      <p className="text-[10px] text-gray-500">
                        {listing.followers?.toLocaleString()}{" "}
                        {listing.platform === "YouTube" ? "subscribers" : "followers"}
                      </p>
                    </div>

                  </div>

                  {/* PRICE */}
                  <p className="text-xs font-bold">
                    ₹{listing.price?.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* FLOATING INSTAGRAM CARD */}
          <div className="hidden lg:block absolute -top-10 -left-14 w-65 z-20">
            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
                  <Instagram size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold">Instagram Page</p>
                  <p className="text-[10px] text-gray-500">
                    {instagram?.handle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 text-center text-[10px]">
                <div>
                  <p className="font-bold">
                    {instagram?.followers?.toLocaleString()}
                  </p>
                  <p className="text-gray-500">Followers</p>
                </div>
                <div>
                  <p className="font-bold text-green-600">
                    {instagram?.engagement}%
                  </p>
                  <p className="text-gray-500">Eng.</p>
                </div>
                <div>
                  <p className="font-bold">1.2K</p>
                  <p className="text-gray-500">Posts</p>
                </div>
              </div>
            </div>
          </div>

          {/* FLOATING YOUTUBE CARD */}
          <div className="hidden lg:block absolute -bottom-12 -left-14 w-60 z-20">
            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center">
                  <Youtube size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-900">
                    {youtube?.handle}
                  </p>
                  <p className="text-[10px] text-gray-500">Monetised</p>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-3 mb-3 text-center">
                <p className="text-[10px] text-gray-600">Monthly Ad Revenue</p>
                <p className="text-sm font-bold text-red-600">
                  ${youtube?.revenue?.toLocaleString()}
                </p>
              </div>

              <div className="grid grid-cols-2 text-[10px] text-center">
                <div>
                  <p className="text-gray-500">Subscribers</p>
                  <p className="font-bold">
                    {youtube?.followers?.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Views/mo</p>
                  <p className="font-bold">5.8M</p>
                </div>
              </div>
            </div>
          </div>

          {/* FLOATING FACEBOOK CARD (RIGHT SIDE CENTER) */}
          <div className="hidden lg:block absolute top-50 -right-4 -translate-y-1/2 w-60 z-20">
            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                  <Facebook size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold">  {facebook?.handle}</p>
                  <p className="text-[10px] text-gray-500">Monetised</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 mb-3 text-center">
                <p className="text-[10px] text-gray-600">Monthly Revenue</p>
                <p className="text-sm font-bold text-blue-600">
                  ${facebook?.revenue?.toLocaleString()}
                </p>
              </div>

              <div className="grid grid-cols-2 text-[10px] text-center">
                <div>
                  <p className="text-gray-500"><span className="font-bold"> {facebook?.followers?.toLocaleString()}</span>  Followers</p>

                </div>
                <div>

                  <p className="font-bold text-green-600">+7.8%</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


