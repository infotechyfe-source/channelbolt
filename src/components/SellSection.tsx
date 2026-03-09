import { Link } from "react-router-dom";

export default function SellSection() {
  return (
    <div className="bg-black text-white py-4 px-4 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden bg-[#742EEB] text-white rounded-3xl">

        {/* Glow Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600 opacity-30 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-pink-600 opacity-20 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Turn Your Social <br />
              Media Account Into <br />
              <span className="text-purple-300">Instant Profit</span>
            </h1>

            <p className="text-gray-200 text-base sm:text-lg mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0">
              Join thousands of creators and entrepreneurs selling verified Instagram pages,
              Facebook assets, and monetised YouTube channels through secure escrow-protected
              transactions.
            </p>

            {/* FEATURES */}
            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
              {[
                {
                  title: "Premium Pricing",
                  desc: "Real market-driven valuations backed by verified buyer demand.",
                },
                {
                  title: "Secure Transactions",
                  desc: "Escrow protection ensures safe payments before ownership transfer.",
                },
                {
                  title: "Wide Exposure",
                  desc: "Reach thousands of global buyers actively searching for premium accounts.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-purple-400 rounded-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">{item.title}</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/sell"
              className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 text-sm sm:text-base"
            >
              List Your Account →
            </Link>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6 sm:space-y-8 mt-12 lg:mt-0">

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <StatCard
                label="Average Sale Price"
                value="$18,500"
                meta="↑ 24% vs last month"
              />
              <StatCard
                label="Avg. Time to Sell"
                value="3.2 Days"
                meta="Fast transactions"
              />
            </div>

            {/* BIG CARD */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl hover:shadow-purple-500/20 hover:shadow-2xl transition duration-300">
              <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3">
                Total Sales Volume
              </p>

              <h2 className="text-3xl sm:text-5xl font-bold text-purple-300 mb-4 sm:mb-8">
                $24.8M
              </h2>

              {/* Bars */}
              <div className="flex items-end gap-1 sm:gap-2 h-20 sm:h-32 mb-3 sm:mb-4">
                {[40, 70, 55, 85, 60, 95, 75, 100, 80, 90].map((height, i) => (
                  <div
                    key={i}
                    className="bg-linear-to-t from-purple-500 to-purple-300 rounded-md w-full transition-all duration-700 hover:from-pink-500 hover:to-purple-400"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <p className="text-gray-300 text-xs sm:text-sm">
                Monthly Marketplace Growth
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= SUB COMPONENT ================= */

function StatCard({
  label,
  value,
  meta,
}: {
  label: string;
  value: string;
  meta: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-4 sm:p-6 rounded-2xl hover:scale-105 transition duration-300">
      <p className="text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">{label}</p>
      <h3 className="text-2xl sm:text-3xl font-bold text-purple-300">{value}</h3>
      <p className="text-green-400 text-xs sm:text-sm mt-1">{meta}</p>
    </div>
  );
}