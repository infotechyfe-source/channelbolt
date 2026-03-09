"use client";

import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F5F7FA] text-gray-700 pt-16 pb-4 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* ================= 5 COLUMN SECTION ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 mb-8">

          {/* COLUMN 1 — BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                CHANNEL<span className="text-blue-600">BOLT</span>
              </h2>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4 sm:mb-6">
              The most trusted marketplace for verified social media accounts.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2 sm:gap-3">
              {[Twitter, Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <div
                  key={i}
                  className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2 — MARKETPLACE */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-5">Marketplace</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li><Link to="/marketplace">Browse All Accounts</Link></li>
              <li><Link to="/marketplace?platform=instagram">Instagram Pages</Link></li>
              <li><Link to="/marketplace?platform=youtube">YouTube Channels</Link></li>
              <li><Link to="/marketplace?platform=facebook">Facebook Accounts</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 — RESOURCES */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-5">Resources</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/verification">Verification Process</Link></li>
              <li><Link to="/seller-guide">Seller Guide</Link></li>
             
            </ul>
          </div>

          {/* COLUMN 4 — COMPANY */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-5">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li><Link to="/about">About Us</Link></li>
               <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/buyer-protection">Buyer Protection</Link></li>
            </ul>
          </div>

          {/* COLUMN 5 — LEGAL */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-5">Legal</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/refund">Refund Policy</Link></li>
              
            </ul>
          </div>

        </div>

        {/* ================= NEWSLETTER SECTION ================= */}
        <div className="rounded-3xl bg-linear-to-r from-purple-600 to-indigo-600 p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">

          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
              Stay Updated
            </h3>
            <p className="text-purple-100 text-sm sm:text-base max-w-lg mx-auto sm:mx-0">
              Get the latest marketplace insights, new listings, and exclusive deals delivered to your inbox.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 sm:gap-4 mt-4 sm:mt-0">
            <div className="flex items-center bg-white rounded-xl px-3 sm:px-4 py-2 sm:py-3 w-full sm:w-80">
              <Mail className="text-gray-400 mr-2 sm:mr-3" size={16} />
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none w-full text-gray-700 text-sm sm:text-base"
              />
            </div>

            <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium hover:opacity-90 transition w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
          © 2026 ChannelBolt. All rights reserved.
        </p>

      </div>
    </footer>
  )
}