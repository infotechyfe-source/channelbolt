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
    <div className="bg-[#0B1220] text-white py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden bg-[#370abe] text-white rounded-2xl sm:rounded-3xl">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600 opacity-30 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-pink-600 opacity-20 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Turn Your Social Media Account Into
              <span className="text-purple-300 block">Instant Profit</span>
            </h1>

            <p className="text-gray-200 text-sm sm:text-base mb-6 max-w-md mx-auto lg:mx-0">
              Sell Instagram pages, Facebook assets, and monetized YouTube
              channels through secure marketplace transactions.
            </p>

            {/* FEATURES */}
            <div className="space-y-4 mb-6">

              <Feature
                icon={<DollarSign size={16} />}
                title="Premium Pricing"
                desc="Market valuations backed by real buyer demand."
              />

              <Feature
                icon={<ShieldCheck size={16} />}
                title="Secure Transactions"
                desc="Escrow protection before transfer."
              />

              <Feature
                icon={<Globe size={16} />}
                title="Global Buyers"
                desc="Reach thousands of verified buyers."
              />

            </div>

            {/* CTA */}
            <Link
              to="/sell"
              className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-semibold shadow-md hover:scale-105 transition text-sm"
            >
              Start Selling
              <TrendingUp size={16} />
            </Link>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-5">

            {/* STATS */}
            <div className="grid grid-cols-2 gap-3">

              <StatCard
                icon={<DollarSign size={16} />}
                label="Avg. Sale Price"
                value="$18,500"
                meta="↑ 24%"
              />

              <StatCard
                icon={<Clock size={16} />}
                label="Time to Sell"
                value="3.2 Days"
                meta="Fast"
              />

            </div>

            {/* BIG CARD */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-5 rounded-2xl">

              <p className="text-gray-300 text-xs mb-2">
                Marketplace Growth
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-4">
                $24.8M
              </h2>

              {/* GRAPH BARS */}
              <div className="flex items-end gap-1.5 h-32 mb-3">
                {[40, 70, 55, 85, 60, 95, 75, 100, 80, 90].map((h, i) => (
                  <div
                    key={i}
                    className="bg-linear-to-t from-purple-500 to-purple-300 rounded-sm w-full"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              <p className="text-gray-300 text-xs">
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
    <div className="flex items-start gap-3">

      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-purple-300">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-gray-300 text-xs">{desc}</p>
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
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-xl">

      <div className="flex items-center gap-1 text-purple-300 mb-1">
        {icon}
        <p className="text-gray-300 text-[11px]">{label}</p>
      </div>

      <h3 className="text-lg font-bold text-purple-300">{value}</h3>

      <p className="text-green-400 text-[11px] mt-0.5">{meta}</p>

    </div>
  );
}