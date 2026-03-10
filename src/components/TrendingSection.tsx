import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SocialCard from "../components/SocialCard";
import { useEffect, useState } from "react";
import { databases, DATABASE_ID, COLLECTION_ID } from "../lib/appwrite";
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
    <section className="bg-[#0A0A0A] py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 sm:mb-10">

          {/* Title */}
          <div className="max-w-xl">
            <span className="inline-block bg-[#E5EEFF] text-[#2563EB] text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Trending
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Recommended Listings
            </h2>

            <p className="text-gray-400 text-sm sm:text-base">
              Premium social assets vetted for growth potential.
            </p>
          </div>

          {/* Filter + Button */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center w-full sm:w-auto">

            <select
              value={selectedNiche}
              onChange={(e) => setSelectedNiche(e.target.value)}
              className="bg-white text-black px-4 py-2 rounded-xl text-sm w-full sm:w-auto"
            >
              {niches.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>

            <button
              onClick={() => navigate("/marketplace")}
              className="bg-blue-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-600 flex items-center justify-center gap-2 transition w-full sm:w-auto cursor-pointer"
            >
              View All
              <ArrowUpRight className="w-4 h-4" />
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