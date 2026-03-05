import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    ArrowUpRight,
    CalendarDays,
    CheckCircle,
    Clock,
    DollarSign,
    Mail,
    ShieldCheck,
    ShoppingCart,
    Sparkles,
    Target,
    TrendingUp,
    Users,
} from "lucide-react";
import SecureTransfer from "../components/SecureTransfer";
import SimilarAccounts from "../components/SimilarAccounts";
import AccountAnalytics from "../components/AccountAnalytics";
import { databases, DATABASE_ID, COLLECTION_ID, storage, BUCKET_ID } from "../lib/appwrite";

// Utility to get a usable file URL
const getFileUrl = (fileId?: string) => {
    if (!fileId) return "/placeholder.jpg";
    if (fileId.startsWith("http")) return fileId;
    return storage.getFileView(BUCKET_ID, fileId); // returns URL for Appwrite file
};

export default function AccountDetails() {
    const { id, handle } = useParams();
    const navigate = useNavigate();

    const [listing, setListing] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchListing = async () => {
            if (!id) return;

            try {
                const response = await databases.getDocument(DATABASE_ID, COLLECTION_ID, id);

                // Resolve cover & avatar URLs once
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
        return <div className="text-center py-20 text-gray-500">Loading account...</div>;
    }

    if (!listing) {
        return <div className="text-center py-20 text-red-500">Listing not found.</div>;
    }

    const followerData = [
        { month: "Jan", followers: 120000 },
        { month: "Feb", followers: 135000 },
        { month: "Mar", followers: 150000 },
        { month: "Apr", followers: 170000 },
        { month: "May", followers: 185000 },
        { month: "Jun", followers: listing.followers },
    ];

    const likesData = [
        { month: "Jan", likes: 18000 },
        { month: "Feb", likes: 22000 },
        { month: "Mar", likes: 26000 },
        { month: "Apr", likes: 31000 },
        { month: "May", likes: 35000 },
        { month: "Jun", likes: 39000 },
    ];

    return (
        <div className="bg-gray-50 min-h-screen pb-20">

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:mt-14 relative z-10">
                <div className="text-sm flex items-center gap-2 flex-wrap">

                    <button
                        onClick={() => navigate("/")}
                        className="text-gray-500 hover:text-blue-600 transition"
                    >
                        Home
                    </button>

                    <span className="text-gray-400">›</span>

                    <button
                        onClick={() => navigate("/marketplace")}
                        className="text-gray-500 hover:text-blue-600 transition"
                    >
                        Marketplace
                    </button>

                    <span className="text-gray-400">›</span>

                    <span className="text-gray-900 font-medium capitalize">
                        {handle?.replace(/_/g, " ")}
                    </span>

                </div>
            </div>

            {/* Cover Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-14 relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-xl group">

                    {/* Cover Image */}
                    <img
                        src={listing.coverImageUrl}
                        alt="cover"
                        className="w-full h-56 sm:h-72 md:h-80 lg:h-[340px] object-cover group-hover:scale-105 transition duration-500"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

                        {/* Left: Avatar + Info */}
                        <div className="flex items-center gap-5">
                            <div className="relative">
                                <img
                                    src={listing.avatarUrl}
                                    alt="avatar"
                                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl border-4 border-white shadow-lg object-cover"
                                />
                            </div>

                            <div className="text-white">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                                    {listing.handle}
                                </h2>

                                <div className="flex items-center gap-3 mt-2">
                                    <span className="px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur text-white font-medium">
                                        {listing.platform}
                                    </span>

                                    <span className="text-sm opacity-80">
                                        {listing.niche}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Quick Stats
                        <div className="mt-6 md:mt-0 flex gap-6 text-white">

                            <div>

                                <p className="text-sm opacity-70"> <span className="text-blue-500"><Users size={22} /></span> Followers</p>
                                <p className="text-lg font-semibold">
                                    {listing.followers.toLocaleString()}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm opacity-70"> <span className="text-green-500"><TrendingUp size={22} /></span> Engagement</p>
                                <p className="text-lg font-semibold">
                                    {listing.engagement}%
                                </p>
                            </div>

                            <div>
                                <p className="text-sm opacity-70">
                                <span className="text-orange-500"><DollarSign size={22} /></span> Revenue</p>
                                <p className="text-lg font-semibold">
                                    ${listing.revenue.toLocaleString()}
                                </p>
                            </div>

                        </div> */}

                    </div>
                </div>
            </div>

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-14 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

                    {/* LEFT SIDE */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* ===== STATS ===== */}
                        <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 p-4 sm:p-6 md:p-8 shadow-sm">

                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">

                                {[
                                    {
                                        icon: <Users size={18} />,
                                        value: listing.followers.toLocaleString(),
                                        label: "Followers",
                                        color: "blue"
                                    },
                                    {
                                        icon: <TrendingUp size={18} />,
                                        value: `${listing.engagement}%`,
                                        label: "Engagement",
                                        color: "green"
                                    },
                                    {
                                        icon: <DollarSign size={18} />,
                                        value: `$${listing.revenue.toLocaleString()}`,
                                        label: "Revenue",
                                        color: "yellow"
                                    },
                                    {
                                        icon: <Sparkles size={18} />,
                                        value: listing.niche,
                                        label: "Niche",
                                        color: "purple"
                                    }
                                ].map((item, i) => {

                                    const colorStyles = {
                                        blue: "bg-blue-100 text-blue-600",
                                        green: "bg-green-100 text-green-600",
                                        yellow: "bg-yellow-100 text-yellow-600",
                                        purple: "bg-purple-100 text-purple-600",
                                    };

                                    return (
                                        <div
                                            key={i}
                                            className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-xl border border-gray-100 hover:shadow-md transition"
                                        >
                                            <div className="flex items-center gap-3">

                                                <div
                                                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center ${colorStyles[item.color as keyof typeof colorStyles]}`}
                                                >
                                                    {item.icon}
                                                </div>

                                                <div>
                                                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                                                        {item.value}
                                                    </p>

                                                    <p className="text-xs sm:text-sm text-gray-500">
                                                        {item.label}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    );
                                })}

                            </div>
                        </div>

                        {/* ===== ACCOUNT OVERVIEW ===== */}
                        <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">

                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Account Overview
                                    </h3>
                                    <p className="text-gray-500 mt-2">
                                        Detailed audience insights and content strategy
                                    </p>
                                </div>

                                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold border border-green-100">
                                    <ArrowUpRight size={16} />
                                    High Performance Account
                                </div>

                            </div>

                            {/* Audience Niche */}
                            <div className="flex gap-5 items-start">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                    <Target size={22} />
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                        Audience Niche
                                    </h4>

                                    <p className="text-gray-600 leading-relaxed">
                                        Affluent millennials and Gen-Z interested in{" "}
                                        <span className="text-blue-600 font-semibold">
                                            {listing?.niche || "Luxury Lifestyle"}
                                        </span>
                                        , high-end travel, fashion, and premium experiences.
                                    </p>
                                </div>
                            </div>

                            {/* Content Strategy */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-6">

                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                                        <CalendarDays size={20} />
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800">
                                        Content Strategy
                                    </h4>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        { label: "Feed Posts", value: "6–7 per week" },
                                        { label: "Stories", value: "Daily (15–20)" },
                                        { label: "Reels", value: "4–5 per week" },
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex justify-between items-center bg-white px-4 py-3 rounded-xl border border-gray-100"
                                        >
                                            <span className="font-medium text-gray-700">
                                                {item.label}
                                            </span>
                                            <span className="text-purple-600 font-semibold text-sm">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE - PRICE CARD */}
                    <div className=" lg:col-span-4 lg:block">
                        <div className="sticky top-28">
                            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

                                {/* Top Section */}
                                <div className="p-8 bg-linear-to-br from-gray-50 to-gray-100">
                                    <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">
                                        Asking Price
                                    </p>

                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                                        ₹{listing.price?.toLocaleString()}
                                    </h2>

                                    {/* Feature Cards */}
                                    <div className="mt-8 space-y-4">

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

                                    <button
                                        onClick={() => navigate(`/checkout/${listing.$id}`)}
                                        className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3 sm:py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                                    >
                                        <ShoppingCart size={20} />
                                        Buy Now Securely
                                    </button>

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
                </div>
                <AccountAnalytics
                    followerData={followerData}
                    likesData={likesData}
                />
                < SecureTransfer />
                < SimilarAccounts />
            </div>
            {/* ================= MOBILE STICKY BUY BAR ================= */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl p-4 flex items-center justify-between z-50">

                <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="text-lg font-bold text-gray-900">
                        ₹{listing.price?.toLocaleString()}
                    </p>
                </div>
                <button
                    onClick={() => navigate(`/checkout/${listing.id}`)}
                    className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg"
                >
                    <ShoppingCart size={18} />
                    Buy Now
                </button>
            </div>
        </div>
    );
}