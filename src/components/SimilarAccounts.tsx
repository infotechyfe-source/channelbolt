import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SocialCard from "../components/SocialCard";
import { useEffect, useState } from "react";
import { databases, DATABASE_ID, COLLECTION_ID } from "../lib/appwrite"; // adjust path if needed
import { Query } from "appwrite";

interface Listing {
    $id: string;
    handle: string;
    niche: string;
    platform: "Instagram" | "YouTube" | "Facebook";
    followers: number;
    engagement: number;
    revenue: number;
    price: number;
    coverImage: string;
    avatar: string;
    includeEmail?: boolean;
}

const SimilarAccounts = () => {
    const navigate = useNavigate();
    const [listings, setListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await databases.listDocuments(
                    DATABASE_ID,
                    COLLECTION_ID,
                    [Query.limit(3)]
                );

                setListings(response.documents as unknown as Listing[]);
            } catch (error) {
                console.error("Error fetching listings:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchListings();
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-6 pt-16">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight">
                        Similar Premium Accounts
                    </h2>
                    <p className="text-gray-400 mt-2">
                        Handpicked accounts matching your interests
                    </p>
                </div>

                <button
                    onClick={() => navigate("/marketplace")}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold transition-all hover:scale-105 cursor-pointer">
                    Browse All <ArrowRight size={20} />
                </button>
            </div>

            {/* Loading */}
            {loading && (
                <p className="text-gray-400">Loading accounts...</p>
            )}

            {/* Cards */}
            {!loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listings.map((account) => (
                        <div key={account.$id} >
                            <SocialCard
                                $id={account.$id}
                                handle={account.handle}
                                platform={account.platform}
                                niche={account.niche}
                                followers={account.followers}
                                engagement={account.engagement}
                                revenue={account.revenue}
                                price={account.price}
                                coverImage={account.coverImage}
                                avatar={account.avatar}
                                includeEmail={account.includeEmail}
                            />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default SimilarAccounts;