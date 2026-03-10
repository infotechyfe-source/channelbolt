import React from "react";
import { ShieldCheck, Rocket, Users, Globe, TrendingUp, CheckCircle } from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
            About ChannelBolt
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-6 mb-6">
            The Trusted Marketplace for
            <span className="text-blue-600"> Social Media Assets</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ChannelBolt helps creators, entrepreneurs, and brands instantly
            acquire high-quality social media assets and accelerate their
            online growth.
          </p>
        </div>

        {/* TRUST STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">

          <div className="bg-white rounded-xl p-6 text-center shadow">
            <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
            <p className="text-gray-600 text-sm">Active Buyers</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow">
            <h3 className="text-2xl font-bold text-gray-900">5K+</h3>
            <p className="text-gray-600 text-sm">Verified Listings</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow">
            <h3 className="text-2xl font-bold text-gray-900">$2M+</h3>
            <p className="text-gray-600 text-sm">Transactions</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow">
            <h3 className="text-2xl font-bold text-gray-900">4.9★</h3>
            <p className="text-gray-600 text-sm">Marketplace Rating</p>
          </div>

        </div>

        {/* ABOUT CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Built for the Creator Economy
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              In today's digital economy, social media pages are valuable
              digital assets. Building an audience from scratch can take years.
              ChannelBolt provides a smarter solution by connecting buyers and
              sellers in a trusted marketplace.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Our platform enables entrepreneurs and creators to buy or sell
              verified accounts across multiple platforms, helping brands grow
              instantly with real audiences.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={18} />
                Instagram Pages
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={18} />
                YouTube Channels
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={18} />
                Facebook Pages
              </li>
            </ul>
          </div>

          {/* IMAGE / VISUAL */}
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-10 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Grow Faster with ChannelBolt
            </h3>

            <p className="text-blue-100 mb-6">
              Skip years of audience building and launch your brand instantly
              with verified social media assets.
            </p>

            <div className="flex items-center gap-3">
              <TrendingUp />
              <span>Accelerate your digital growth</span>
            </div>
          </div>

        </div>

        {/* CORE VALUES */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose ChannelBolt
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We are building a trusted ecosystem where digital assets can be
            bought and sold safely.
          </p>
        </div>

        {/* VALUE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <ShieldCheck className="text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">
              Secure Transactions
            </h3>
            <p className="text-gray-600 text-sm">
              Verified listings and safe transfers protect buyers and sellers.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <Rocket className="text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">
              Instant Growth
            </h3>
            <p className="text-gray-600 text-sm">
              Skip years of audience building and launch instantly.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <Users className="text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">
              Real Engagement
            </h3>
            <p className="text-gray-600 text-sm">
              Listings include transparent analytics and genuine followers.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <Globe className="text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">
              Trusted Platform
            </h3>
            <p className="text-gray-600 text-sm">
              Built for creators, entrepreneurs, and brands globally.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutPage;