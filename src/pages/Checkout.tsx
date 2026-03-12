import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShieldCheck, Lock, CheckCircle, CreditCard, HelpCircle, Mail, DollarSign, Shield, ShoppingCart } from "lucide-react";
import { databases, DATABASE_ID, COLLECTION_ID, storage, BUCKET_ID } from "../lib/appwrite";
import Loading from "../components/AccountLoader";
// Utility to get a viewable file URL from Appwrite fileId
const getFileUrl = (fileId?: string) => {
  if (!fileId) return "/placeholder.jpg"; // fallback
  if (fileId.startsWith("http")) return fileId;
  return storage.getFileView(BUCKET_ID, fileId); // returns public URL for the file
};

export default function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const [listing, setListing] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchListing = async () => {
      try {
        const response = await databases.getDocument(DATABASE_ID, COLLECTION_ID, id);

        // Resolve cover and avatar URLs once
        const listingWithUrls = {
          ...response,
          coverImageUrl: getFileUrl(response.coverImage),
          avatarUrl: getFileUrl(response.avatar),
        };

        setListing(listingWithUrls);
      } catch (error) {
        console.error("Error fetching listing:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!listing) return <div className="text-center py-20 text-red-500">Listing not found</div>;

  const price = listing.price ?? 0;
  const serviceFee = Math.round(price * 0.05);
  const total = price + serviceFee;

  const supportsStrikes = ["YouTube", "YouTube NonMonetised", "Facebook", "Facebook NonMonetised"].includes(listing.platform);

  const steps = [
    { title: "Payment to Escrow", desc: "Your payment is held securely in our escrow vault. The seller cannot access funds yet." },
    { title: "Seller Transfer", desc: "Seller sends login credentials and OG email access to our verification team." },
    { title: "Verification", desc: "We verify full access, change recovery info, and secure the account for you." },
    { title: "Ownership Release", desc: "You receive the account details. Funds are released to seller only after you confirm." },
  ];


  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <div className="text-sm mb-6 flex items-center gap-2 flex-wrap">
          <button onClick={() => navigate("/")} className="text-gray-500 hover:text-blue-600 transition cursor-pointer">Home</button>
          <span className="text-gray-400">›</span>
          <button onClick={() => navigate("/marketplace", { state: { resetFilters: true } })} className="text-gray-500 hover:text-blue-600 transition cursor-pointer">Marketplace</button>
          <span className="text-gray-400">›</span>
          <button onClick={() => navigate(`/account/${listing.$id}/${listing.handle.replace("@", "").replace(/\s+/g, "_").toLowerCase()}`)} className="text-gray-500 hover:text-blue-600 transition cursor-pointer">Account Details</button>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900 font-medium">Checkout</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ================= LEFT SIDE ================= */}
          <div className="lg:col-span-2 space-y-6">

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">

              {/* Cover */}
              <img
                src={listing.coverImageUrl}
                alt={`${listing.handle} cover`}
                className="w-full h-40 sm:h-48 object-cover"
              />

              {/* Info */}
              <div className="p-4 sm:p-6">

                {/* Avatar + Basic Info */}
                <div className="flex items-center gap-3 sm:gap-4">

                  <img
                    src={listing.avatarUrl}
                    alt={`${listing.handle} avatar`}
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-base sm:text-lg">
                      {listing.handle}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {listing.niche}
                    </p>
                  </div>

                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 text-sm">

                  <div>
                    <p className="text-gray-400">Followers</p>
                    <p className="font-semibold">
                      {listing.followers.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">Engagement</p>
                    <p className="font-semibold">
                      {listing.engagement}%
                    </p>
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-gray-400">Revenue</p>
                    <p className="font-semibold">
                      ₹{listing.revenue}/mo
                    </p>
                  </div>

                </div>

                {/* Account Status Badges */}
                <div className="flex flex-wrap gap-2 mt-4 text-xs">

                  {listing.monetized !== undefined && (
                    <span
                      className={`flex items-center gap-1 px-2 py-1 rounded-lg font-semibold border ${listing.monetized
                          ? "bg-green-50 text-green-700 border-green-100"
                          : "bg-gray-100 text-gray-700 border-gray-200"
                        }`}
                    >
                      <DollarSign size={12} />
                      {listing.monetized ? "Monetized" : "Not Monetized"}
                    </span>
                  )}

                  {listing.payoutAvailable !== undefined && (
                    <span
                      className={`flex items-center gap-1 px-2 py-1 rounded-lg font-semibold border ${listing.payoutAvailable
                          ? "bg-green-50 text-green-700 border-green-100"
                          : "bg-gray-100 text-gray-700 border-gray-200"
                        }`}
                    >
                      💰 {listing.payoutAvailable ? "Payout Available" : "No Payout"}
                    </span>
                  )}

                  {supportsStrikes && (
                    <span
                      className={`flex items-center gap-1 px-2 py-1 rounded-lg font-semibold border ${listing.strikes === 0
                          ? "bg-green-50 text-green-700 border-green-100"
                          : listing.strikes === 1
                            ? "bg-yellow-50 text-yellow-700 border-yellow-100"
                            : "bg-red-50 text-red-700 border-red-100"
                        }`}
                    >
                      <ShieldCheck size={12} />
                      {listing.strikes === 0
                        ? "No Strikes"
                        : listing.strikes === 1
                          ? "1 Strike"
                          : `${listing.strikes} Strikes`}
                    </span>
                  )}

                  {listing.includeEmail && (
                    <span className="flex items-center gap-1 px-2 py-1 rounded-lg font-semibold border bg-blue-50 text-blue-700 border-blue-100">
                      <Mail size={12} /> OG Email
                    </span>
                  )}

                </div>

              </div>
            </div>

            {/* Buyer Protection Boxes */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 mb-4">Buyer Protection</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: <Lock className="text-blue-500" size={18} />, title: "Escrow Secured", desc: "Funds held safely until you confirm full access." },
                  { icon: <Shield className="text-purple-500" size={18} />, title: "Verified Owner", desc: "Identity and ownership verified by our team." },
                  { icon: <CheckCircle className="text-green-500" size={18} />, title: "Transfer Guarantee", desc: "100% money back if transfer fails." }
                ].map((item, idx) => (
                  <div key={idx} className="border border-gray-100 rounded-xl p-4">
                    {item.icon}
                    <p className="font-bold text-sm mt-2">{item.title}</p>
                    <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical Transfer Process Timeline */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h3 className="font-bold text-gray-800 mb-8 text-lg">Transfer Process</h3>
              <div className="space-y-8 relative">
                <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gray-100"></div>
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6 relative">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 border-4 border-white ${i === 0 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-white text-gray-300 border-gray-100 border-2'}`}>
                      {i + 1}
                    </div>
                    <div>
                      <h4 className={`font-bold text-sm ${i === 0 ? 'text-gray-900' : 'text-gray-400'}`}>{step.title}</h4>
                      <p className="text-xs text-gray-400 mt-1 max-w-md leading-normal">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 mb-4">Payment Method</h3>
              <div className="space-y-3">
                {[
                  { id: 'upi', label: 'Bhim/UPI', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg' },
                  { id: 'paypal', label: 'PayPal', img: '' },
                  { id: 'gpay', label: 'Google Pay', img: '' },
                  { id: 'card', label: 'Credit / Debit Card', sub: 'Safe transfer via Stripe encrypted checkout.' }
                ].map((method) => (
                  <label key={method.id} className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition ${paymentMethod === method.id ? 'border-blue-500 bg-blue-50/30' : 'border-gray-100'}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-6 bg-gray-50 rounded flex items-center justify-center overflow-hidden">
                        {method.id === 'card' ? <CreditCard size={18} className="text-gray-400" /> : <div className="text-[10px] font-bold text-gray-400">{method.label}</div>}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{method.label}</p>
                        {method.sub && <p className="text-[10px] text-gray-400">{method.sub}</p>}
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="pay"
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                      className="w-4 h-4 accent-blue-600"
                    />
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE (STICKY) ================= */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden sticky top-4">
              <div className="bg-blue-600 p-6 text-white">
                <h3 className="font-bold text-lg">Payment Summary</h3>
                <p className="text-blue-100 text-xs mt-1">Review your order</p>
              </div>

              <div className="p-6 space-y-4">
                {/* Account Price */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Account Price</span>
                  <span className="font-bold text-gray-800">₹{price.toLocaleString()}</span>
                </div>

                {/* Marketplace Fee */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Marketplace Fee (5%)</span>
                  <span className="font-bold text-gray-800">₹{serviceFee.toLocaleString()}</span>
                </div>

                {/* Account Status Badges */}
                <div className="flex flex-wrap gap-2 text-xs mt-2">
                  {listing.monetized !== undefined && (
                    <span className={`flex items-center gap-1 px-2 py-1 rounded-lg font-semibold border ${listing.monetized ? "bg-green-50 text-green-700 border-green-100" : "bg-gray-100 text-gray-700 border-gray-200"}`}>
                      <DollarSign size={14} /> {listing.monetized ? "Monetized" : "Not Monetized"}
                    </span>
                  )}

                  {supportsStrikes && (
                    <span className={`flex items-center gap-1 px-2 py-1 rounded-lg font-semibold border ${listing.strikes === 0 ? "bg-green-50 text-green-700 border-green-100" : listing.strikes === 1 ? "bg-yellow-50 text-yellow-700 border-yellow-100" : "bg-red-50 text-red-700 border-red-100"}`}>
                      <ShieldCheck size={14} />
                      {listing.strikes === 0 ? "No Strikes" : listing.strikes === 1 ? "1 Strike" : `${listing.strikes} Strikes`}
                    </span>
                  )}

                  {listing.includeEmail && (
                    <span className="flex items-center gap-1 px-2 py-1 rounded-lg font-semibold border bg-blue-50 text-blue-700 border-blue-100">
                      <Mail size={14} /> OG Email
                    </span>
                  )}
                </div>

                {/* Total */}
                <div className="border-t border-dashed pt-4 flex justify-between items-end">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Total Amount</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-blue-600">₹{total.toLocaleString()}</p>
                    <p className="text-[10px] text-gray-400">One-time payment</p>
                  </div>
                </div>

                {/* Complete Purchase -> WhatsApp */}
                <button
                  onClick={() => {
                    const phone = "919680819409"; // full international format, no spaces
                    const message = `Hello, I want to purchase the account ${listing.handle} for ₹${total}.`;

                    // Fallback: use web.whatsapp.com explicitly
                    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

                    window.open(url, "_blank");
                  }}
                  className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition shadow-lg shadow-green-200 mt-4 cursor-pointer"
                >
                  <ShoppingCart size={18} />
                  Complete Purchase via WhatsApp
                </button>

                {/* Cancel */}
                <button
                  onClick={() => navigate(-1)}
                  className="w-full text-gray-400 text-sm font-semibold py-2 hover:text-gray-600 transition cursor-pointer"
                >
                  Cancel Order
                </button>

                <div className="mt-4 flex gap-2">
                  <div className="bg-green-500 w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"></div>
                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    Your payment is protected by our secure escrow system. Funds are only released after successful account transfer and verification.
                  </p>
                </div>

                {/* Need Help */}
                <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 flex items-center gap-4">
                  <div className="bg-white p-2 rounded-xl shadow-sm text-blue-600">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-blue-900">Need Help?</p>
                    <p className="text-[10px] text-blue-700">Our support team is available 24/7</p>
                    <button className="text-[10px] font-bold text-blue-600 underline mt-1">Contact Support →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= MOBILE STICKY BUY BAR ================= */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl p-4 flex items-center justify-between z-50">

        <div>
          <p className="text-xs text-gray-500">Price</p>
          <p className="text-2xl font-black text-blue-600">₹{total.toLocaleString()}</p>
        </div>
        <button
          onClick={() => {
            const phone = "919680819409"; // full international format, no spaces
            const message = `Hello, I want to purchase the account ${listing.handle} for ₹${total}.`;

            // Fallback: use web.whatsapp.com explicitly
            const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

            window.open(url, "_blank");
          }}
          className="bg-linear-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-green-200 cursor-pointer"
        >
          <ShoppingCart size={18} />
          Complete Purchase
        </button>
      </div>
    </div>
  );
}