import { ShoppingCart, ShieldCheck, Mail, CheckCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PriceCard({ listing }: any) {

    const navigate = useNavigate();

    return (
        <div className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-28">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

                    {/* Top Section */}
                    <div className="p-8 bg-linear-to-br from-gray-50 to-gray-100">
                        <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">
                            Asking Price
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mt-2">
                            ₹{listing.price?.toLocaleString()}
                        </h2>
                       
                        {/* Feature Cards */}
                        <div className="mt-8 space-y-4">

                             <button
                            onClick={() => navigate(`/checkout/${listing.$id}`)}
                            className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3 sm:py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                        >
                            <ShoppingCart size={20} />
                            Buy Now Securely
                        </button>

                            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <ShieldCheck className="text-blue-600" size={22} />
                                </div>
                                <div>
                                    <p className="font-semibold">Escrow Protection</p>
                                    <p className="text-sm text-gray-500">100% secure payment</p>
                                </div>
                            </div>

                            {listing.includeEmail && (
                                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                                        <Mail className="text-indigo-600" size={22} />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Original Email</p>
                                        <p className="text-sm text-gray-500">Full ownership transfer</p>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                                    <CheckCircle className="text-purple-600" size={22} />
                                </div>
                                <div>
                                    <p className="font-semibold">Secure Transfer</p>
                                    <p className="text-sm text-gray-500">Guaranteed handover</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="p-8 space-y-6">

                        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white shadow flex items-center justify-center">
                                    <Clock size={18} className="text-blue-600" />
                                </div>
                                <span className="text-gray-600 font-medium">Response Time</span>
                            </div>
                            <span className="font-semibold text-gray-900">~30 min</span>
                        </div>

                        <button className="w-full bg-gray-100 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition cursor-pointer">
                            Contact Seller
                        </button>

                        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-sm text-gray-600">
                            <p>
                                <span className="font-semibold text-gray-900">
                                    100% Protected.
                                </span>{" "}
                                Your payment is held securely in escrow and released only after
                                you confirm successful account transfer.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}