"use client";

import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import {
  Instagram, Facebook, Youtube, ShieldCheck, Star, Users, DollarSign, Clock, BadgeCheck, TrendingUp,
  Menu, X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../lib/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [openLang, setOpenLang] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, loading, refreshUser } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutUser();
      await refreshUser();
      navigate("/login");
    } catch (err) {
      alert("Logout failed");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenLang(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = (path: string) =>
    `relative px-2 py-1 transition ${location.pathname === path
      ? "text-white font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-500"
      : "text-gray-300 hover:text-white"
    }`;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setOpenLang(false);
  };

  return (
    <>
      {/* TOP STRIP */}
      <div className="bg-linear-to-r from-blue-600 via-slate-700 to-indigo-600 text-gray-200 text-xs sm:text-sm border-b border-gray-800 overflow-hidden">
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-6 sm:gap-10 px-4 sm:px-6 py-1 whitespace-nowrap shrink-0"
              >
                <Link to="/marketplace" className="flex items-center gap-2 hover:text-white transition">
                  <Instagram size={16} />
                  Explore Instagram Pages
                </Link>

                <Link to="/marketplace" className="flex items-center gap-2 hover:text-white transition">
                  <Facebook size={16} />
                  Facebook Monetised Assets
                </Link>

                <Link to="/marketplace" className="flex items-center gap-2 hover:text-white transition">
                  <Youtube size={16} />
                  YouTube Channels
                </Link>

                <div className="flex items-center gap-2 text-green-400">
                  <ShieldCheck size={16} />
                  Secure Escrow Protection
                </div>

                <div className="flex items-center gap-2 text-yellow-400">
                  <Star size={16} />
                  4.9/5 Rated Marketplace
                </div>

                <div className="flex items-center gap-2 text-blue-300">
                  <TrendingUp size={16} />
                  10,000+ Active Buyers
                </div>

                <div className="flex items-center gap-2 text-purple-300">
                  <Users size={16} />
                  Verified Seller Profiles
                </div>

                <div className="flex items-center gap-2 text-indigo-300">
                  <DollarSign size={16} />
                  $2M+ Transactions Completed
                </div>

                <div className="flex items-center gap-2 text-pink-300">
                  <Clock size={16} />
                  Fast & Secure Transfers
                </div>

                <div className="flex items-center gap-2 text-orange-300">
                  <BadgeCheck size={16} />
                  Authentic Engagement Guaranteed
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-[#111827] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-wide">
              Channel<span className="text-blue-600">Bolt</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link to="/marketplace" className={linkClass("/marketplace")}>
                {t("marketplace")}
              </Link>
              <Link to="/sell" className={linkClass("/sell")}>
                {t("sellAccount")}
              </Link>
              <Link to="/testimonials" className={linkClass("/testimonials")}>
                {t("testimonials")}
              </Link>
              <Link to="/contact" className={linkClass("/contact")}>
                {t("contact")}
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 relative">
              {/* Language Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpenLang(!openLang)}
                  className="border border-gray-600 px-3 py-1.5 rounded-md text-sm hover:bg-gray-700 transition flex items-center gap-2"
                >
                  {i18n.language === "en" ? "🇬🇧 EN" : "🇮🇳 HI"}
                </button>

                {openLang && (
                  <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-md shadow-lg overflow-hidden z-50">
                    <button
                      onClick={() => changeLanguage("en")}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                    >
                      🇬🇧 English
                    </button>
                    <button
                      onClick={() => changeLanguage("hi")}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                    >
                      🇮🇳 हिन्दी
                    </button>
                  </div>
                )}
              </div>

              {/* Buy Now CTA */}
              <Link
                to="/marketplace"
                className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md font-medium transition shadow-md hover:shadow-blue-500/30"
              >
                {t("buyNow")}
              </Link>

              {/* Login/Logout button based on state */}
              {!loading && !user && (
                <Link to="/login" className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md font-medium transition shadow-md hover:shadow-blue-500/30 cursor-pointer">
                  Login
                </Link>
              )}

              {!loading && user && (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 px-5 py-2 rounded-md font-medium transition shadow-md hover:shadow-blue-500/30 cursor-pointer"
                >
                  Logout
                </button>
              )}

              {/* Hamburger for Mobile */}
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="md:hidden p-2 rounded-md hover:bg-gray-700 transition"
              >
                {openMenu ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {openMenu && (
          <div className="md:hidden bg-[#111827] px-4 pt-2 pb-4 space-y-2">
            <Link to="/marketplace" className="block px-2 py-2 text-gray-300 hover:text-white rounded-md">
              {t("marketplace")}
            </Link>
            <Link to="/sell" className="block px-2 py-2 text-gray-300 hover:text-white rounded-md">
              {t("sellAccount")}
            </Link>
            <Link to="/testimonials" className="block px-2 py-2 text-gray-300 hover:text-white rounded-md">
              {t("testimonials")}
            </Link>
            <Link to="/contact" className="block px-2 py-2 text-gray-300 hover:text-white rounded-md">
              {t("contact")}
            </Link>

            {/* Buy Now CTA Mobile */}
            <Link
              to="/marketplace"
              className="block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium text-center"
            >
              {t("buyNow")}
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}