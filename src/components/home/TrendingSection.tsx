import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SocialCard from "../../components/SocialCard";
import { useEffect, useState } from "react";
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
}

export default function RecommendedListings() {
  const navigate = useNavigate();
  const [listings, setListings] = useState<Listing[]>([]);
  const [selectedNiche, setSelectedNiche] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID,
          [
            Query.limit(3),
            Query.orderDesc("$createdAt"),
          ]
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

  const niches = ["All", ...new Set(listings.map((a) => a.niche))];

  const filteredListings =
    selectedNiche === "All"
      ? listings
      : listings.filter((a) => a.niche === selectedNiche);

  if (loading) {
    return (
      <section className="py-16 text-center text-white bg-[#0A0A0A]">
        Loading listings...
      </section>
    );
  }

  return (
    <section className="bg-[#0B1220] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <span className="inline-block bg-[#E5EEFF] text-[#2563EB] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-2 sm:mb-2">
              Trending
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
              Recommended Listings
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              Premium social assets vetted for growth potential.
            </p>
          </div>

          <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
            <select
              value={selectedNiche}
              onChange={(e) => setSelectedNiche(e.target.value)}
              className="bg-white text-black px-3 py-1.5 rounded-lg text-xs sm:text-sm w-full sm:w-auto"
            >
              {niches.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>

            <button
              onClick={() => navigate("/marketplace")}
              className="bg-blue-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm flex items-center gap-1 sm:gap-2 hover:bg-blue-600 transition w-full sm:w-auto"
            >
              View All
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Cards */}
        {filteredListings.length === 0 ? (
          <p className="text-gray-400 text-center py-10">
            No listings available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredListings.map((account) => (
              <SocialCard
                key={account.$id}
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
                includeEmail={true}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}