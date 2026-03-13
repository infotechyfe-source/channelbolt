"use client";

import { Link } from "react-router-dom";
import {
  Twitter,
  Facebook,
  Instagram,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F5F7FA] text-gray-700 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= BRAND SECTION ================= */}
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:justify-between gap-6 pb-10 border-b border-gray-200">

          {/* Logo + Description */}
          <div className="max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                CB
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                CHANNEL<span className="text-blue-600">BOLT</span>
              </h2>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The most trusted marketplace for verified social media accounts.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-3">

              {/* Twitter */}
              <a
                href="#"
                className="group bg-white border border-gray-200 p-2 rounded-lg transition hover:bg-[#1DA1F2]"
              >
                <Twitter
                  size={16}
                  className="text-[#1DA1F2] group-hover:text-white group-hover:scale-110 transition"
                />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="group bg-white border border-gray-200 p-2 rounded-lg transition hover:bg-[#1877F2]">
                <Facebook
                  size={16}
                  className="text-[#1877F2] group-hover:text-white group-hover:scale-110 transition"
                />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="group bg-white border border-gray-200 p-2 rounded-lg transition hover:bg-linear-to-tr from-yellow-400 via-red-500 to-purple-600"
              >
                <Instagram
                  size={16}
                  className="text-red-500 group-hover:text-white group-hover:scale-110 transition"
                />
              </a>

            </div>
          </div>

          {/* ================= NEWSLETTER ================= */}
          <div className="w-full md:w-auto md:max-w-md">
            <div className="rounded-2xl bg-linear-to-r from-purple-600 to-indigo-600 p-6 text-center md:text-left">

              <h3 className="text-lg font-bold text-white mb-1">
                Stay Updated
              </h3>

              <p className="text-purple-100 text-sm mb-4">
                Get new listings and marketplace insights directly in your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex items-center bg-white rounded-xl px-3 py-2 w-full">
                  <Mail className="text-gray-400 mr-2" size={16} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="outline-none w-full text-gray-700 text-sm"
                  />
                </div>

                <button className="bg-black text-white px-5 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= LINKS SECTION ================= */}

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-10 text-sm">

          {/* Marketplace */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Marketplace
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/marketplace" className="hover:text-black">
                  Browse All Accounts
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace?platform=instagram"
                  className="hover:text-black"
                >
                  Instagram Pages
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace?platform=youtube"
                  className="hover:text-black"
                >
                  YouTube Channels
                </Link>
              </li>
              <li>
                <Link
                  to="/marketplace?platform=facebook"
                  className="hover:text-black"
                >
                  Facebook Accounts
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Resources
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/how-it-works" className="hover:text-black">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/verification" className="hover:text-black">
                  Verification Process
                </Link>
              </li>
              <li>
                <Link to="/seller-guide" className="hover:text-black">
                  Seller Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Company
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/about" className="hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-black">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/buyer-protection"
                  className="hover:text-black"
                >
                  Buyer Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              Legal
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/terms" className="hover:text-black">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-black">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-black">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}

        <div className="border-t border-gray-200 mt-10 pt-5 text-center text-xs text-gray-500">
          © 2026 ChannelBolt. All rights reserved.
        </div>

      </div>
    </footer>
  );
}