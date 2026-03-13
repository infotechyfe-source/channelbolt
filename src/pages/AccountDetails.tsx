/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Loading from "../components/AccountLoader";
import SecureTransfer from "../components/account/SecureTransfer";
import { useParams, useNavigate } from "react-router-dom";
import SimilarAccounts from "../components/account/SimilarAccounts";
import { databases, DATABASE_ID, COLLECTION_ID, storage, BUCKET_ID } from "../lib/appwrite";
import { ShoppingCart } from "lucide-react";
import AccountHeader from "../components/account/AccountHeader";
import AccountBadges from "../components/account/AccountBadges";
import AccountMetrics from "../components/account/AccountMetrics";
import AccountOverview from "../components/account/AccountOverview";
import AccountGallery from "../components/account/AccountGallery";
import PriceCard from "../components/account/PriceCard";

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
                    proofImageUrls: response.proofImages?.map((id: string) =>
                        getFileUrl(id)
                    ) || []
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

    if (!listing) {
        return <div className="text-center py-20 text-red-500">Listing not found.</div>;
    }

    return (
        <div className="bg-gray-50 min-h-screen py-10">

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-sm mb-6 flex items-center gap-2 flex-wrap">

                    <button
                        onClick={() => navigate("/")}
                        className="text-gray-500 hover:text-blue-600 transition cursor-pointer"
                    >
                        Home
                    </button>

                    <span className="text-gray-400">›</span>

                    <button
                        onClick={() => navigate("/marketplace")}
                        className="text-gray-500 hover:text-blue-600 transition cursor-pointer"
                    >
                        Marketplace
                    </button>

                    <span className="text-gray-400">›</span>

                    <span className="text-gray-900 font-medium capitalize cursor-pointer">
                        {handle?.replace(/_/g, " ")}
                    </span>

                </div>

            </div>

            <AccountHeader listing={listing} />

            <AccountBadges listing={listing} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    <div className="lg:col-span-8 space-y-10">
                        <AccountMetrics listing={listing} />
                        <AccountOverview listing={listing} />

                    </div>

                    <div className="lg:col-span-4">
                        <PriceCard listing={listing} />
                    </div>

                </div>

                <div className="mt-8"> <AccountGallery listing={listing} /></div>
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
                    onClick={() => navigate(`/checkout/${listing.$id}`)}
                    className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg"
                >
                    <ShoppingCart size={18} />
                    Buy Now
                </button>
            </div>

        </div>
    );
}
