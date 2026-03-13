"use client";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import {
  Instagram,
  Facebook,
  Youtube,
  ShieldCheck,
  Star,
  Users,
  DollarSign,
  Clock,
  BadgeCheck,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";

import { logoutUser } from "../lib/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [openLang, setOpenLang] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const { user, loading, refreshUser } = useAuth();

  // ================= LOGOUT =================
  const handleLogout = async () => {
    try {
      await logoutUser();
      await refreshUser();
      navigate("/login");
    } catch {
      alert("Logout failed");
    }
  };

  // ================= CLOSE LANGUAGE DROPDOWN =================
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenLang(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ================= PREVENT SCROLL WHEN MENU OPEN =================
  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
  }, [openMenu]);

  // ================= ACTIVE LINK STYLE =================
  const linkClass = (path: string) =>
    `relative px-2 py-1 transition ${location.pathname.startsWith(path)
      ? "text-white font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-500"
      : "text-gray-300 hover:text-white"
    }`;

  // ================= LANGUAGE SWITCH =================
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setOpenLang(false);
  };

  return (
    <>
      {/* ================= TOP MARQUEE STRIP ================= */}
      <div className="bg-linear-to-r from-blue-600 via-slate-700 to-indigo-600 text-gray-200 text-xs sm:text-sm border-b border-gray-800 overflow-hidden">
        <div className="relative w-full overflow-hidden">

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">

            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-6 sm:gap-10 px-4 sm:px-6 py-1 whitespace-nowrap shrink-0"
              >
                <Link to="/marketplace" className="flex items-center gap-2 hover:text-white transition">
               <div className="bg-linear-to-br from-yellow-400 via-red-500 to-purple-400 rounded"><Instagram size={16} /></div>   
                  Explore Instagram Pages
                </Link>

                <Link to="/marketplace" className="flex items-center gap-2 hover:text-white transition">
                  <div className="bg-blue-500 rounded"><Facebook size={16} /></div>
                  Facebook Monetised Assets
                </Link>

                <Link to="/marketplace" className="flex items-center gap-2 hover:text-white transition">
                  <div className="bg-red-500 overflow-hidden rounded-3xl"><Youtube size={16} /></div>
                  YouTube Channels
                </Link>

                <div className="flex items-center gap-2 text-white-400">
                  <ShieldCheck size={16} />
                  Secure Escrow Protection
                </div>

                <div className="flex items-center gap-2 text-yellow-400">
                  <Star size={16} />
                  4.9/5 Rated Marketplace
                </div>

                <div className="flex items-center gap-2 text-white-300">
                  <TrendingUp size={16} />
                  10,000+ Active Buyers
                </div>

                <div className="flex items-center gap-2 text-white-300">
                  <Users size={16} />
                  Verified Seller Profiles
                </div>

                <div className="flex items-center gap-2 text-white-300">
                  <DollarSign size={16} />
                  $2M+ Transactions Completed
                </div>

                <div className="flex items-center gap-2 text-white-300">
                  <Clock size={16} />
                  Fast & Secure Transfers
                </div>

                <div className="flex items-center gap-2 text-white-300">
                  <BadgeCheck size={16} />
                  Authentic Engagement Guaranteed
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="bg-[#111827]/95 backdrop-blur-md sticky top-0 z-50 text-white shadow-md">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-16">

            {/* LOGO */}
            <Link to="/" className="text-2xl font-bold tracking-wide">
              Channel<span className="text-blue-600">Bolt</span>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center gap-6">

              <Link to="/marketplace" className={linkClass("/marketplace")}>
                {t("marketplace")}
              </Link>

              <Link to="/sell" className={linkClass("/sell")}>
                {t("sellAccount")}
              </Link>

              <Link to="/about" className={linkClass("/about")}>
                {t("About Us")}
              </Link>

              <Link to="/contact" className={linkClass("/contact")}>
                {t("contact")}
              </Link>

            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-4 relative">

              {/* LANGUAGE SWITCH */}
              <div className="relative hidden md:block" ref={dropdownRef}>

                <button
                  onClick={() => setOpenLang(!openLang)}
                  className="border border-gray-600 px-3 py-1.5 rounded-md text-sm hover:bg-gray-700 transition flex items-center gap-2 cursor-pointer"
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

              {/* LOGIN / LOGOUT */}
              {!loading && !user && (
                <Link
                  to="/login"
                  className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md font-medium transition shadow-md hover:shadow-blue-500/30 cursor-pointer"
                >
                  Login
                </Link>
              )}

              {!loading && user && (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md font-medium transition shadow-md hover:shadow-red-500/30 cursor-pointer"
                >
                  Logout
                </button>
              )}

              {/* MOBILE MENU BUTTON */}
              <button
                aria-label="Toggle Menu"
                onClick={() => setOpenMenu(!openMenu)}
                className="md:hidden p-2 rounded-md hover:bg-gray-700 transition"
              >
                {openMenu ? <X size={24} /> : <Menu size={24} />}
              </button>

            </div>

          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {openMenu && (
          <div className="md:hidden bg-[#111827] px-4 pt-2 pb-4 space-y-2">

            <Link
              to="/marketplace"
              onClick={() => setOpenMenu(false)}
              className="block px-2 py-2 text-gray-300 hover:text-white rounded-md"
            >
              {t("marketplace")}
            </Link>

            <Link
              to="/sell"
              onClick={() => setOpenMenu(false)}
              className="block px-2 py-2 text-gray-300 hover:text-white rounded-md"
            >
              {t("sellAccount")}
            </Link>

            <Link
              to="/about"
              onClick={() => setOpenMenu(false)}
              className="block px-2 py-2 text-gray-300 hover:text-white rounded-md"
            >
              {t("About Us")}
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpenMenu(false)}
              className="block px-2 py-2 text-gray-300 hover:text-white rounded-md"
            >
              {t("contact")}
            </Link>

            {/* LANGUAGE MOBILE */}
            <div className="border-t border-gray-700 pt-3 mt-3">

              <p className="text-gray-400 text-sm px-2 mb-2">
                Language
              </p>

              <button
                onClick={() => changeLanguage("en")}
                className="block w-full text-left px-2 py-2 text-gray-300 hover:text-white"
              >
                🇬🇧 English
              </button>

              <button
                onClick={() => changeLanguage("hi")}
                className="block w-full text-left px-2 py-2 text-gray-300 hover:text-white"
              >
                🇮🇳 हिन्दी
              </button>

            </div>

            {/* CTA */}
            <Link
              to="/marketplace"
              onClick={() => setOpenMenu(false)}
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