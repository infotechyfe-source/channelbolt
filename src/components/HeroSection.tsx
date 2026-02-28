"use client";

import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook, TrendingUp, Users, DollarSign, ShieldCheck, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="max-w-xl mx-auto lg:mx-0">

          {/* VERIFIED BADGE */}
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm">
            <ShieldCheck size={16} className="text-purple-600" />
            Verified & Secure Marketplace
          </div>

          {/* HEADLINE */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 leading-snug sm:leading-tight text-gray-900">
            Buy and Sell{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Verified Social Media Accounts
            </span>{" "}
            Securely
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-lg">
            Discover high-quality Instagram pages, monetized Facebook assets, and
            YouTube channels with real engagement, transparent analytics, and verified
            ownership history.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
            <Link
              to="/marketplace"
              className="group bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto"
            >
              Browse Accounts
              <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </Link>

            <Link
              to="/sell"
              className="px-6 py-3 rounded-xl font-semibold border border-gray-300 hover:bg-gray-100 transition text-center w-full sm:w-auto"
            >
              Sell Account
            </Link>
          </div>
        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="relative flex justify-center mt-12 lg:mt-0">

          {/* MAIN DASHBOARD */}
          <div className="w-full max-w-xl bg-[#f6f7f9] rounded-2xl shadow-2xl p-4 relative z-10">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Marketplace Dashboard
                </h2>
                <p className="text-gray-500 text-sm">Live Analytics</p>
              </div>

              <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Live
              </div>
            </div>

            {/* IMPROVED MINI BAR CHART */}
            <div className="bg-white rounded-xl p-3 mb-4 flex items-end justify-between h-45">
              {[45, 70, 55, 85, 65, 100, 75, 90].map((h, i) => (
                <div
                  key={i}
                  className="w-9 rounded-md bg-linear-to-t from-indigo-600 to-blue-400 hover:scale-110 transition"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            {/* STATS WITH ICONS */}
            <div className="grid grid-cols-3 gap-3 mb-4 text-center">

              <div className="bg-white rounded-xl p-2 flex flex-col items-center">
                <TrendingUp size={18} className="text-green-600 mb-1" />
                <p className="text-xs text-gray-500">Growth</p>
                <p className="font-bold text-sm text-green-600">+32%</p>
              </div>

              <div className="bg-white rounded-xl p-2 flex flex-col items-center">
                <Users size={18} className="text-blue-600 mb-1" />
                <p className="text-xs text-gray-500">Active</p>
                <p className="font-bold text-sm">8.4K</p>
              </div>

              <div className="bg-white rounded-xl p-2 flex flex-col items-center">
                <DollarSign size={18} className="text-indigo-600 mb-1" />
                <p className="text-xs text-gray-500">Volume</p>
                <p className="font-bold text-sm">$1.2M</p>
              </div>

            </div>

            {/* RECENT LISTINGS */}
            <div>
              <p className="text-xs text-gray-500 mb-3">Recent Listings</p>

              <div className="flex items-center justify-between bg-white rounded-lg px-4 py-2 mb-2 hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600" />
                  <div>
                    <p className="text-xs font-semibold">@fashionpage</p>
                    <p className="text-[10px] text-gray-500">
                      245K followers
                    </p>
                  </div>
                </div>
                <p className="text-xs font-bold">$12.5K</p>
              </div>

              <div className="flex items-center justify-between bg-white rounded-lg px-4 py-2 hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-red-600" />
                  <div>
                    <p className="text-xs font-semibold">Tech Reviews</p>
                    <p className="text-[10px] text-gray-500">
                      189K subscribers
                    </p>
                  </div>
                </div>
                <p className="text-xs font-bold">$24.9K</p>
              </div>
            </div>

          </div>

          {/* FLOATING INSTAGRAM CARD */}
          <div className="hidden lg:block absolute -top-10 -left-14 w-65 z-20">
            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
                  <Instagram size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold">Instagram Page</p>
                  <p className="text-[10px] text-gray-500">@lifestyle</p>
                </div>
              </div>

              <div className="grid grid-cols-3 text-center text-[10px]">
                <div>
                  <p className="font-bold">312K</p>
                  <p className="text-gray-500">Followers</p>
                </div>
                <div>
                  <p className="font-bold text-green-600">9.4%</p>
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
                  <Youtube size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold">YouTube Channel</p>
                  <p className="text-[10px] text-gray-500">Monetised</p>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-3 mb-3 text-center">
                <p className="text-[10px] text-gray-600">Monthly Ad Revenue</p>
                <p className="text-sm font-bold text-red-600">$3,200</p>
              </div>

              <div className="grid grid-cols-2 text-[10px] text-center">
                <div>
                  <p className="text-gray-500">Subscribers</p>
                  <p className="font-bold">189K</p>
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
                  <Facebook size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold">Facebook Page</p>
                  <p className="text-[10px] text-gray-500">Monetised</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 mb-3 text-center">
                <p className="text-[10px] text-gray-600">Monthly Revenue</p>
                <p className="text-sm font-bold text-blue-600">$6700</p>
              </div>

              <div className="grid grid-cols-2 text-[10px] text-center">
                <div>
                  <p className="text-gray-500"><span className="font-bold">421K</span>  Followers</p>

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

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="max-w-xl mx-auto lg:mx-0">

          {/* VERIFIED BADGE */}
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm">
            <ShieldCheck size={16} className="text-purple-600" />
            Verified & Secure Marketplace
          </div>

          {/* HEADLINE */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 leading-snug sm:leading-tight text-gray-900">
            Buy and Sell{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Verified Social Media Accounts
            </span>{" "}
            Securely
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-lg">
            Discover high-quality Instagram pages, monetized Facebook assets, and
            YouTube channels with real engagement, transparent analytics, and verified
            ownership history.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
            <Link
              to="/marketplace"
              className="group bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto"
            >
              Browse Accounts
              <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </Link>

            <Link
              to="/sell"
              className="px-6 py-3 rounded-xl font-semibold border border-gray-300 hover:bg-gray-100 transition text-center w-full sm:w-auto"
            >
              Sell Account
            </Link>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative flex justify-center mt-12 lg:mt-0">

          {/* MAIN DASHBOARD */}
          <div className="w-full max-w-xl bg-[#f6f7f9] rounded-2xl shadow-2xl p-4 relative z-10">

            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Marketplace Dashboard
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm">Live Analytics</p>
              </div>

              <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 mt-2 sm:mt-0">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Live
              </div>
            </div>

            {/* MINI BAR CHART */}
            <div className="bg-white rounded-xl p-3 mb-4 flex items-end justify-between h-40 sm:h-44">
              {[45, 70, 55, 85, 65, 100, 75, 90].map((h, i) => (
                <div
                  key={i}
                  className="w-6 sm:w-9 rounded-md bg-gradient-to-t from-indigo-600 to-blue-400 hover:scale-110 transition"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            {/* STATS WITH ICONS */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 text-center">

              <div className="bg-white rounded-xl p-2 flex flex-col items-center">
                <TrendingUp size={16} className="text-green-600 mb-1" />
                <p className="text-[9px] sm:text-xs text-gray-500">Growth</p>
                <p className="font-bold text-xs sm:text-sm text-green-600">+32%</p>
              </div>

              <div className="bg-white rounded-xl p-2 flex flex-col items-center">
                <Users size={16} className="text-blue-600 mb-1" />
                <p className="text-[9px] sm:text-xs text-gray-500">Active</p>
                <p className="font-bold text-xs sm:text-sm">8.4K</p>
              </div>

              <div className="bg-white rounded-xl p-2 flex flex-col items-center">
                <DollarSign size={16} className="text-indigo-600 mb-1" />
                <p className="text-[9px] sm:text-xs text-gray-500">Volume</p>
                <p className="font-bold text-xs sm:text-sm">$1.2M</p>
              </div>

            </div>

            {/* RECENT LISTINGS */}
            <div>
              <p className="text-xs sm:text-[10px] text-gray-500 mb-3">Recent Listings</p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-lg px-4 py-2 mb-2 hover:shadow-md transition gap-2 sm:gap-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" />
                  <div>
                    <p className="text-xs sm:text-[11px] font-semibold">@fashionpage</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      245K followers
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-bold">$12.5K</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-lg px-4 py-2 hover:shadow-md transition gap-2 sm:gap-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-red-600" />
                  <div>
                    <p className="text-xs sm:text-[11px] font-semibold">Tech Reviews</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      189K subscribers
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-bold">$24.9K</p>
              </div>
            </div>

          </div>

          {/* FLOATING CARDS */}
          <div className="hidden lg:block absolute -top-10 -left-14 w-64">
            {/* Instagram Card */}
            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
                  <Instagram size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold">Instagram Page</p>
                  <p className="text-[10px] text-gray-500">@lifestyle</p>
                </div>
              </div>
              <div className="grid grid-cols-3 text-center text-[10px]">
                <div>
                  <p className="font-bold">312K</p>
                  <p className="text-gray-500">Followers</p>
                </div>
                <div>
                  <p className="font-bold text-green-600">9.4%</p>
                  <p className="text-gray-500">Eng.</p>
                </div>
                <div>
                  <p className="font-bold">1.2K</p>
                  <p className="text-gray-500">Posts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute -bottom-12 -left-14 w-60">
            {/* YouTube Card */}
            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center">
                  <Youtube size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold">YouTube Channel</p>
                  <p className="text-[10px] text-gray-500">Monetised</p>
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-3 mb-3 text-center">
                <p className="text-[10px] text-gray-600">Monthly Ad Revenue</p>
                <p className="text-sm font-bold text-red-600">$3,200</p>
              </div>
              <div className="grid grid-cols-2 text-[10px] text-center">
                <div>
                  <p className="text-gray-500">Subscribers</p>
                  <p className="font-bold">189K</p>
                </div>
                <div>
                  <p className="text-gray-500">Views/mo</p>
                  <p className="font-bold">5.8M</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 w-60">
            {/* Facebook Card */}
            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                  <Facebook size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold">Facebook Page</p>
                  <p className="text-[10px] text-gray-500">Monetised</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 mb-3 text-center">
                <p className="text-[10px] text-gray-600">Monthly Revenue</p>
                <p className="text-sm font-bold text-blue-600">$6,700</p>
              </div>
              <div className="grid grid-cols-2 text-[10px] text-center">
                <div>
                  <p className="text-gray-500"><span className="font-bold">421K</span> Followers</p>
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


