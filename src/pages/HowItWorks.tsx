import React from "react";
import { Search, ShieldCheck, CreditCard, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-blue-600">ChannelBolt</span> Works
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Buying and selling social media pages has never been easier.
            Follow these simple steps to get started.
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <Search className="text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-3">
              1. Browse Listings
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Explore verified Instagram pages, Facebook pages, and YouTube
              channels. Filter by niche, followers, engagement, and price.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <ShieldCheck className="text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-3">
              2. Verify & Review
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Check analytics, engagement rates, and ownership details.
              ChannelBolt ensures transparency for every listing.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <CreditCard className="text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-3">
              3. Secure Payment
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Complete your purchase safely through our protected transaction
              system. Your payment remains secure throughout the process.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <Rocket className="text-blue-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-3">
              4. Transfer & Grow
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Once confirmed, ownership is transferred securely. Start
              monetizing or scaling your new digital asset instantly.
            </p>
          </div>

        </div>

        {/* SELLER SECTION */}
        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Want to Sell Your Page?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            List your social media page in minutes. Add analytics, set your
            price, and connect with serious buyers across India.
          </p>

          <Link
            to="/sell"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            List Your Account
          </Link>
        </div>

        {/* CTA SECTION */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Explore?
          </h3>
          <Link
            to="/marketplace"
            className="inline-block border border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Browse Marketplace
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;