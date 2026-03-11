import { Link } from "react-router-dom";
import {
  DollarSign,
  ShieldCheck,
  Globe,
  TrendingUp,
  Clock
} from "lucide-react";

export default function SellSection() {
  return (
    <div className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden bg-[#742EEB] text-white rounded-3xl">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-30 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 opacity-20 blur-[140px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Turn Your Social <br />
              Media Account Into <br />
              <span className="text-purple-300">Instant Profit</span>
            </h1>

            <p className="text-gray-200 text-lg mb-10 max-w-lg mx-auto lg:mx-0">
              Join thousands of creators selling Instagram pages,
              Facebook assets, and monetized YouTube channels through
              secure marketplace transactions.
            </p>

            {/* FEATURES */}
            <div className="space-y-7 mb-10">

              <Feature
                icon={<DollarSign size={20} />}
                title="Premium Pricing"
                desc="Market-driven valuations backed by real buyer demand."
              />

              <Feature
                icon={<ShieldCheck size={20} />}
                title="Secure Transactions"
                desc="Escrow-style protection ensures safe payments before transfer."
              />

              <Feature
                icon={<Globe size={20} />}
                title="Global Buyers"
                desc="Reach thousands of buyers actively searching for accounts."
              />

            </div>

            {/* CTA */}
            <Link
              to="/sell"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition"
            >
              Start Selling
              <TrendingUp size={18} />
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <StatCard
                icon={<DollarSign size={18} />}
                label="Average Sale Price"
                value="$18,500"
                meta="↑ 24% vs last month"
              />

              <StatCard
                icon={<Clock size={18} />}
                label="Avg. Time to Sell"
                value="3.2 Days"
                meta="Fast transactions"
              />

            </div>

            {/* BIG CARD */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:shadow-purple-500/20 hover:shadow-2xl transition">

              <p className="text-gray-300 text-sm mb-3">
                Marketplace Growth
              </p>

              <h2 className="text-5xl font-bold text-purple-300 mb-8">
                $24.8M
              </h2>

              {/* GRAPH BARS */}
              <div className="flex items-end gap-2 h-32 mb-4">
                {[40, 70, 55, 85, 60, 95, 75, 100, 80, 90].map((h, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-purple-500 to-purple-300 rounded-md w-full transition-all duration-700 hover:from-pink-500 hover:to-purple-400"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              <p className="text-gray-300 text-sm">
                Monthly Marketplace Volume
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

/* FEATURE COMPONENT */

function Feature({
  icon,
  title,
  desc
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4 group">

      <div className="w-11 h-11 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-purple-300 group-hover:scale-110 transition">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-300 text-sm">{desc}</p>
      </div>

    </div>
  );
}

/* STAT CARD */

function StatCard({
  icon,
  label,
  value,
  meta
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  meta: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:scale-105 transition">

      <div className="flex items-center gap-2 text-purple-300 mb-2">
        {icon}
        <p className="text-gray-300 text-sm">{label}</p>
      </div>

      <h3 className="text-3xl font-bold text-purple-300">{value}</h3>

      <p className="text-green-400 text-sm mt-1">{meta}</p>

    </div>
  );
}