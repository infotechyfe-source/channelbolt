import { useState } from "react";
import {
  Instagram,
  Youtube,
  Facebook,
  ShieldCheck,
  Upload,
  CheckCircle,
} from "lucide-react";

type Platform = "Instagram" | "YouTube" | "Facebook";

export default function SellAccount() {
  const [platform, setPlatform] = useState<Platform>("Instagram");
  const [price, setPrice] = useState<number>(25000);
  const [submitted, setSubmitted] = useState(false);

  const fee = Math.round(price * 0.05);
  const receive = price - fee;

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg">
          <CheckCircle className="mx-auto text-green-600 mb-4" size={48} />
          <h2 className="text-2xl font-bold mb-2">
            Listing Submitted 🎉
          </h2>
          <p className="text-gray-600">
            Your listing will be reviewed within 24-48 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* ================= LEFT SIDE ================= */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow border space-y-10">

          {/* STEP 1 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center">
                1
              </div>
              <h3 className="font-semibold text-lg">Select Platform</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: "Instagram", icon: Instagram },
                { name: "Facebook", icon: Facebook },
                { name: "YouTube", icon: Youtube },
              ].map((item) => {
                const Icon = item.icon;
                const active = platform === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => setPlatform(item.name as Platform)}
                    className={`border rounded-xl p-6 text-center transition ${
                      active
                        ? "border-blue-600 bg-blue-50"
                        : "hover:border-blue-400"
                    }`}
                  >
                    <Icon className="mx-auto mb-2" size={24} />
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      {item.name === "YouTube"
                        ? "Monetized Channels"
                        : "Pages & Accounts"}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center">
                2
              </div>
              <h3 className="font-semibold text-lg">Account Details</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                placeholder="Username / Channel Name"
                className="border rounded-xl px-4 py-3"
              />
              <input
                type="number"
                placeholder="Followers Count"
                className="border rounded-xl px-4 py-3"
              />
              <input
                type="number"
                placeholder="Engagement Rate (%)"
                className="border rounded-xl px-4 py-3"
              />
              <input
                type="number"
                placeholder="Monthly Revenue ($)"
                className="border rounded-xl px-4 py-3"
              />
              <input
                placeholder="Country"
                className="border rounded-xl px-4 py-3"
              />
              <input
                type="number"
                placeholder="Account Age (Years)"
                className="border rounded-xl px-4 py-3"
              />
            </div>
          </div>

          {/* STEP 3 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center">
                3
              </div>
              <h3 className="font-semibold text-lg">Upload Verification</h3>
            </div>

            <div className="border-2 border-dashed rounded-xl p-10 text-center bg-gray-50">
              <Upload className="mx-auto text-gray-400 mb-4" size={32} />
              <p className="font-medium mb-1">
                Upload Analytics Screenshots
              </p>
              <p className="text-xs text-gray-500 mb-4">
                Drag & drop files or click below
              </p>
              <input type="file" multiple className="hidden" id="upload" />
              <label
                htmlFor="upload"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer text-sm"
              >
                Choose Files
              </label>
            </div>

            <div className="flex gap-6 text-xs text-green-600 mt-4">
              <span>✔ Recent analytics screenshots</span>
              <span>✔ Ownership verification</span>
            </div>
          </div>

          {/* STEP 4 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center">
                4
              </div>
              <h3 className="font-semibold text-lg">Set Your Price</h3>
            </div>

            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full border rounded-xl px-4 py-3 mb-6"
            />

            <textarea
              placeholder="Describe your account, audience demographics, and what makes it valuable..."
              className="w-full border rounded-xl px-4 py-3 h-32"
            />

            <button
              onClick={() => setSubmitted(true)}
              className="mt-6 w-full py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Submit Listing For Review
            </button>

            <p className="text-xs text-gray-500 text-center mt-3">
              Your listing will be reviewed within 24-48 hours
            </p>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="space-y-6">

          {/* Why Sell With Us */}
          <div className="bg-white p-6 rounded-2xl shadow border">
            <h3 className="font-semibold mb-4">Why Sell With Us</h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <ShieldCheck className="text-green-600" size={18} />
                <div>
                  <p className="font-medium">Escrow Protection</p>
                  <p className="text-gray-500 text-xs">
                    Funds held securely until transfer complete
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <ShieldCheck className="text-blue-600" size={18} />
                <div>
                  <p className="font-medium">Verified Buyers</p>
                  <p className="text-gray-500 text-xs">
                    All buyers go through identity verification
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <ShieldCheck className="text-purple-600" size={18} />
                <div>
                  <p className="font-medium">Fast Transfer</p>
                  <p className="text-gray-500 text-xs">
                    Average completion time under 3 days
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <ShieldCheck className="text-orange-500" size={18} />
                <div>
                  <p className="font-medium">24/7 Support</p>
                  <p className="text-gray-500 text-xs">
                    Expert assistance throughout process
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Earnings Card */}
          <div className="bg-white p-6 rounded-2xl shadow border">
            <h3 className="font-semibold mb-4">Estimated Earnings</h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Your Price:</span>
                <span>${price.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-red-500">
                <span>Platform Fee (5%):</span>
                <span>-${fee.toLocaleString()}</span>
              </div>

              <div className="border-t pt-3 flex justify-between font-bold text-green-600">
                <span>You Receive:</span>
                <span>${receive.toLocaleString()}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}