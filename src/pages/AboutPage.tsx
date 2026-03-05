import React from "react";
import { ShieldCheck, Rocket, Users, Globe } from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">ChannelBolt</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            India’s Trusted Marketplace for Buying & Selling Social Media Pages
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 mb-16">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            In today’s digital world, attention is power — and building a strong
            social media presence takes time, strategy, and consistency.
            <span className="font-semibold"> ChannelBolt </span>
            was created to make that journey faster, smarter, and more secure.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We are a professional digital marketplace where individuals,
            influencers, entrepreneurs, and brands can buy and sell social media accounts including:
          </p>

          {/* PLATFORM LIST */}
          <ul className="list-disc list-inside text-gray-800 text-lg space-y-2 mb-6">
            <li>Instagram Pages</li>
            <li>Facebook Pages</li>
            <li>YouTube Channels</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you want to grow your brand instantly, monetize an existing
            audience, or invest in a ready-made social media asset,
            ChannelBolt provides a safe and transparent platform to make it happen.
          </p>
        </div>

        {/* VALUES SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <ShieldCheck className="text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Secure Transactions</h3>
            <p className="text-gray-600 text-sm">
              Verified listings and protected transfers ensure a safe buying
              and selling experience.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <Rocket className="text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Instant Growth</h3>
            <p className="text-gray-600 text-sm">
              Skip years of building from scratch and scale your brand instantly.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <Users className="text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Real Engagement</h3>
            <p className="text-gray-600 text-sm">
              Access pages with genuine followers and transparent analytics.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <Globe className="text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Trusted Platform</h3>
            <p className="text-gray-600 text-sm">
              Built for entrepreneurs, creators, and brands across India.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutPage;