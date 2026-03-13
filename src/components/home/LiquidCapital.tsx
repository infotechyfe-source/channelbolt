import { CheckCircle2, Instagram, Youtube, Facebook, BarChart3, TrendingUp } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const LiquidCapital = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white text-gray-900 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* Left Content */}
        <div>
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-3 block">Seller Protection</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            Turn your digital assets into <span className="text-blue-600">liquid capital</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Streamlined selling process with secure escrow, instant valuations, and verified buyers looking for profitable assets.
          </p>

          <ul className="space-y-3 mb-6 sm:mb-8">
            <li className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-bold text-gray-900">Instant Valuation</h4>
                <p className="text-gray-600 text-sm">Get a fair market price based on real-time data and metrics.</p>
              </div>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-bold text-gray-900">Secure Escrow</h4>
                <p className="text-gray-600 text-sm">Funds are held securely until the assets are securely transferred.</p>
              </div>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-bold text-gray-900">Verified Buyers</h4>
                <p className="text-gray-600 text-sm">Connect with high-net-worth buyers pre-vetted by our team.</p>
              </div>
            </li>
          </ul>

          <button
            onClick={() => navigate("/sell")}
            className="bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium hover:bg-blue-700 transition shadow-md shadow-blue-600/20 text-sm sm:text-base w-full sm:w-auto cursor-pointer"
          >
            Start Selling →
          </button>
        </div>

        {/* Right Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

          {/* Top Main Card (Instagram) */}
          <div className="bg-[#0F172A] text-white p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-70 sm:col-span-2 lg:col-span-2">

            {/* Background Gradient & Graphic */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-purple-500/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 right-4 text-pink-500 opacity-50"><BarChart3 size={64} /></div>

            <div className="relative z-10">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-linear-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Instagram size={29} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">Sell Instagram Pages</h3>
              <p className="text-gray-400 text-xs sm:text-sm max-w-full z-10 relative">High demand for fashion, lifestyle, and tech niches. Avg. sale under 48 hours.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 relative z-10">
              <div className="bg-gray-800/50 px-3 py-2 rounded-lg backdrop-blur-sm flex-1">
                <p className="text-xs text-gray-400">Avg. Sale</p>
                <p className="font-bold">$4.2k</p>
              </div>
              <div className="bg-green-500/20 text-green-400 px-3 py-2 rounded-lg backdrop-blur-sm flex flex-col justify-center flex-1">
                <p className="text-xs">Demand</p>
                <p className="font-bold leading-none">Very High</p>
              </div>
            </div>
          </div>

          {/* Bottom Left Card (YouTube) */}
          <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 hover:shadow-md transition">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mb-4 text-white">
              <Youtube size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Sell YouTube</h3>
            <p className="text-gray-600 text-sm mb-3">Monetized channels with clean copyright history fetch premium prices.</p>
            <p className="text-blue-600 text-sm font-medium flex items-center gap-1"><CheckCircle2 size={14} /> Capitalize quickly</p>
          </div>

          {/* Bottom Right Card (Facebook) */}
          <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 hover:shadow-md transition">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white">
              <Facebook size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Sell Facebook</h3>
            <p className="text-gray-600 text-sm mb-3">Active groups and pages are in high demand for immediate traffic.</p>
            <p className="text-blue-600 text-sm font-medium flex items-center gap-1"><TrendingUp size={14} /> Fast Liquidity</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LiquidCapital;