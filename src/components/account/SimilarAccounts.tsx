import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SocialCard from "../../components/SocialCard";
import { useEffect, useRef, useState } from "react";
import { databases, DATABASE_ID, COLLECTION_ID } from "../../lib/appwrite";
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
    const scrollRef = useRef<HTMLDivElement>(null);

    const [listings, setListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await databases.listDocuments(
                    DATABASE_ID,
                    COLLECTION_ID,
                    [Query.limit(6)]
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

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left: direction === "left" ? -320 : 320,
            behavior: "smooth",
        });
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">

            {/* Header */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">

                <div>
                    <h2 className="text-xl sm:text-3xl font-bold tracking-tight">
                        Similar Premium Accounts
                    </h2>

                    <p className="text-gray-500 mt-1 text-xs sm:text-base">
                        Handpicked accounts matching your interests
                    </p>
                </div>

                <button
                    onClick={() => navigate("/marketplace")}
                    className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold transition"
                >
                    Browse All <ArrowRight size={18} />
                </button>

            </div>

            {/* Loading */}
            {loading && (
                <p className="text-gray-400 text-sm">Loading accounts...</p>
            )}

            {!loading && listings.length > 0 && (
                <div className="relative">

                    {/* Desktop Arrows */}
                    <button
                        aria-label="left"
                        onClick={() => scroll("left")}
                        className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        aria-label="right"
                        onClick={() => scroll("right")}
                        className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Carousel */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory no-scrollbar -mx-4 px-4"
                    >
                        {listings.map((account) => (
                            <div
                                key={account.$id}
                                className="snap-start shrink-0 w-[85%] sm:w-[320px]"
                            >
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

                    {/* Mobile Scroll Hint */}
                    <p className="text-center text-xs text-gray-400 mt-2 sm:hidden">
                        Swipe to explore more accounts →
                    </p>

                </div>
            )}

            {/* Mobile CTA */}
            <div className="mt-6 flex justify-center sm:hidden">
                <button
                    onClick={() => navigate("/marketplace")}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-sm"
                >
                    Browse All Accounts <ArrowRight size={18} />
                </button>
            </div>

        </section>
    );
};

export default SimilarAccounts;